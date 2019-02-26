package com.woonoz.pv.progdash.service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Nullable;
import javax.inject.Inject;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.woonoz.pv.progdash.dao.dbo.GroupDbo;
import com.woonoz.pv.progdash.dao.dbo.KnownRulesDbo;
import com.woonoz.pv.progdash.dao.dbo.ProductNbKeypoints;
import com.woonoz.pv.progdash.dao.dbo.ReachedProductDbo;
import com.woonoz.pv.progdash.dao.dbo.ScoreInitialEvalDbo;
import com.woonoz.pv.progdash.dao.dbo.TrainingConnectionsDbo;
import com.woonoz.pv.progdash.dao.dbo.UserIdentityDbo;
import com.woonoz.pv.progdash.dao.dbo.UserRouteProductsDbo;
import com.woonoz.pv.progdash.dao.mapper.AreaGroupMapper;
import com.woonoz.pv.progdash.dao.mapper.LearningStatisticsMapper;
import com.woonoz.pv.progdash.dto.AllStatisticsDto;
import com.woonoz.pv.progdash.dto.GroupDto;
import com.woonoz.pv.progdash.dto.InsightDataDto;
import com.woonoz.pv.progdash.dto.InsightInfoDto;
import com.woonoz.pv.progdash.dto.LearningSessionStatisticsDto;
import com.woonoz.pv.progdash.dto.ProgressDto;
import com.woonoz.pv.progdash.dto.RatioDto;
import com.woonoz.pv.progdash.dto.TopNUsersDto;
import com.woonoz.pv.progdash.dto.UserDataDto;

@Service
@Transactional(propagation = Propagation.MANDATORY)
public class LearningStatisticsServiceImpl implements LearningStatisticsService {

	private static final int GROUP_ID_FOR_ALL_AREA = 0;
	private static final String GROUP_NAME_FOR_ALL_AREA = "Tous";

	private static final int NB_ITEMS_FOR_TOP = 5;

	@Inject private AreaGroupMapper areaGroupMapper;
	@Inject private LearningStatisticsMapper learningStatisticsMapper;
	@Inject private InsightStatisticsService insightStatisticsService;
	@Inject private KeypointService keypointService;
	@Inject private ModuleService moduleService;
	@Inject private EvaluationService evaluationService;
	@Inject private ProgressService progressService;

	@Override
	public LearningSessionStatisticsDto getLearningSessionStatistics(Integer userId, String message) {
		return new LearningSessionStatisticsDto(learningStatisticsMapper.getLastSessionId(userId), message);
	}

	@Override
	public List<GroupDto> getGroups(int areaId) {
		List<GroupDbo> groupsDbos = areaGroupMapper.getGroups(areaId);
		List<GroupDto> groupDtos = convertGroupDbosAsDto(groupsDbos);
		groupDtos.add(new GroupDto(GROUP_ID_FOR_ALL_AREA, GROUP_NAME_FOR_ALL_AREA, areaGroupMapper.countAreaUsers(areaId)));
		return groupDtos;
	}

	private List<GroupDto> convertGroupDbosAsDto(List<GroupDbo> groupDbos) {
		List<GroupDto> groupDtos = new ArrayList<>();
		for (GroupDbo groupDbo : groupDbos) {
			groupDtos.add(new GroupDto(groupDbo.getId(), groupDbo.getName(), groupDbo.getNbUsers()));
		}
		return groupDtos;
	}

	@Override
	public boolean isAreaUsersNumberWithinLimit(int areaId, int limit) {
		return areaGroupMapper.countAreaUsers(areaId) <= limit;
	}

	@Override
	public boolean isGroupUsersNumberWithinLimit(int groupId, int limit) {
		return learningStatisticsMapper.countGroupUsers(groupId) <= limit;
	}

	@Override
	public boolean isGroupInArea(int areaId, int groupId) {
		return learningStatisticsMapper.getAreaFromGroup(groupId) == areaId;
	}

	@Override
	public AllStatisticsDto getAllStatistics(int areaId, @Nullable Integer groupId) {
		AllStatisticsDto allStats = new AllStatisticsDto();
		int nbUsers = areaGroupMapper.countAreaUsers(areaId);

		Map<Integer, UserDataDto> usersMap = new HashMap<>();
		for (UserIdentityDbo userIdentityDbo : learningStatisticsMapper.getUsersIdentity(areaId, groupId)) {
			usersMap.put(userIdentityDbo.getId(), new UserDataDto(userIdentityDbo.getId(), userIdentityDbo.getFullName()));
		}
		fillUsersMap(usersMap, areaId, groupId);
		Collection<UserDataDto> userDataDtos = usersMap.values();
		Map<Integer, List<ProgressDto>> userProgresses = progressService.getUsersProgresses(usersMap.keySet());
		for (Integer userId : usersMap.keySet()) {
			usersMap.get(userId).setProgData(userProgresses.get(userId));
		}
		allStats.setUsers(userDataDtos);

		InsightInfoDto lastWeek = insightStatisticsService.createInsightsInfo(areaId, groupId,  nbUsers, 7, 1);
		InsightInfoDto lastMonth = insightStatisticsService.createInsightsInfo(areaId, groupId,  nbUsers, 30, 4);

		DataFromKeypoints dataFromKeypoints = keypointService.processKeypoints(areaId,groupId,NB_ITEMS_FOR_TOP);
		lastWeek.setTopNRules(dataFromKeypoints.getLastWeekTopRules());
		lastMonth.setTopNRules(dataFromKeypoints.getLastMonthTopRules());

		TopNUsersDto lastWeekTopUsers = new TopNUsersDto();
		lastWeekTopUsers.setHelp(dataFromKeypoints.getLastWeekTopUsersHelp());
		lastWeekTopUsers.setTime(insightStatisticsService.getTopNTimeUsers(areaId, groupId, 7, NB_ITEMS_FOR_TOP, false));
		lastWeekTopUsers.setDropout(insightStatisticsService.getTopNTimeUsers(areaId, groupId, 7, NB_ITEMS_FOR_TOP, true));
		lastWeekTopUsers.setScore(dataFromKeypoints.getLastWeekTopUsersScore());

		TopNUsersDto lastMonthTopUsers = new TopNUsersDto();
		lastMonthTopUsers.setHelp(dataFromKeypoints.getLastMonthTopUsersHelp());
		lastMonthTopUsers.setTime(insightStatisticsService.getTopNTimeUsers(areaId, groupId, 30, NB_ITEMS_FOR_TOP, false));
		lastMonthTopUsers.setDropout(insightStatisticsService.getTopNTimeUsers(areaId, groupId, 30, NB_ITEMS_FOR_TOP, true));
		lastMonthTopUsers.setScore(dataFromKeypoints.getLastMonthTopUsersScore());

		lastWeek.setTopNUsers(lastWeekTopUsers);
		lastMonth.setTopNUsers(lastMonthTopUsers);

		allStats.setInsights(new InsightDataDto(lastWeek, lastMonth));
		allStats.setModules(moduleService.getModulesInfo(areaId));
		allStats.setEvaluations(evaluationService.getEvaluationInfo(areaId, groupId));
		return allStats;
	}

	private void fillUsersMap(Map<Integer, UserDataDto> usersMap, int areaId, @Nullable Integer groupId) {

		for (ReachedProductDbo reachedProductDbo : learningStatisticsMapper.getReachedProduct(areaId, groupId)) {
			usersMap.get(reachedProductDbo.getUserId()).setLastModule(reachedProductDbo.getProductName());
		}
		for (TrainingConnectionsDbo trainingDbo : learningStatisticsMapper.getTrainingConnections(areaId, groupId)) {
			UserDataDto userData = usersMap.get(trainingDbo.getUserId());
			userData.setLastConnection(trainingDbo.getLastUsage());
			userData.setConnectionsNbr(trainingDbo.getNbSessions());
			userData.setTime(Math.round(trainingDbo.getTotalTrainingTime()));
		}
		for (ScoreInitialEvalDbo initialEvalDbo : learningStatisticsMapper.getScoreInitialEval(areaId, groupId)) {
			usersMap.get(initialEvalDbo.getUserId()).setInitialEval(initialEvalDbo.getScore());
		}
		Map<Integer, UserRouteProductsDbo> userRouteProductDbos = learningStatisticsMapper.getRouteProducts(areaId, groupId);
		List<Integer> optionalProducts = learningStatisticsMapper.getAreaOptionalProducts(areaId);
		Map<Integer, ProductNbKeypoints> productNbKeypointsMap = learningStatisticsMapper.getProductNbKeypoints(areaId);
		for (KnownRulesDbo knownRulesDbo : learningStatisticsMapper.getKnownRules(areaId, groupId)) {
			UserDataDto userData = usersMap.get(knownRulesDbo.getUserId());
			List<Integer> userProductIds = userRouteProductDbos.get(knownRulesDbo.getUserId()).getProductIds();
			int totalNbKeypoints = countUserKeypoints(userProductIds, optionalProducts, productNbKeypointsMap);
			userData.setInitialLevel(new RatioDto(knownRulesDbo.getInitiallyKnownRules(), knownRulesDbo.getEvaluatedRules()));
			userData.setScore(new RatioDto(knownRulesDbo.getKnownRules(), totalNbKeypoints));
		}
	}

	private int countUserKeypoints(List<Integer> userProductIds, List<Integer> optionalProducts, Map<Integer, ProductNbKeypoints> productNbKeypointsMap) {
		List<Integer> userProducts = new ArrayList<>();
		userProducts.addAll(userProductIds);
		userProducts.addAll(optionalProducts);
		int nbKeyPoints = 0;
		for (Integer productId : userProducts) {
			nbKeyPoints += productNbKeypointsMap.get(productId).getNbKeypoints();
		}
		return nbKeyPoints;
	}

}
