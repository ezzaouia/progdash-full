package com.woonoz.pv.progdash.service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
import com.woonoz.pv.progdash.dto.RatioDto;
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
	public boolean isGroupInArea(int areaId, Integer groupId) {
		return learningStatisticsMapper.getAreaFromGroup(groupId) == areaId;
	}

	@Override
	public AllStatisticsDto getAllStatistics(int areaId, Integer groupId) {
		AllStatisticsDto allStats = new AllStatisticsDto();
		int nbUsers = areaGroupMapper.countAreaUsers(areaId);

		Map<Integer, UserDataDto> usersMap = new HashMap<>();
		for (UserIdentityDbo userIdentityDbo : learningStatisticsMapper.getUsersIdentity(areaId)) {
			usersMap.put(userIdentityDbo.getId(), new UserDataDto(userIdentityDbo.getId(), userIdentityDbo.getFullName()));
		}
		fillUsersMap(usersMap, areaId);
		Collection<UserDataDto> userDataDtos = usersMap.values();
		allStats.setUsers(userDataDtos);

		InsightInfoDto lastWeek = insightStatisticsService.createInsightsInfo(areaId, nbUsers, 7, 1);
		InsightInfoDto lastMonth = insightStatisticsService.createInsightsInfo(areaId, nbUsers, 30, 4);

		DataFromKeypoints dataFromKeypoints = keypointService.processKeypoints(areaId,NB_ITEMS_FOR_TOP);
		lastWeek.setTopNRules(dataFromKeypoints.getLastWeekTopRules());
		lastMonth.setTopNRules(dataFromKeypoints.getLastMonthTopRules());

		allStats.setInsights(new InsightDataDto(lastWeek, lastMonth));
		allStats.setModules(moduleService.getModulesInfo(areaId));
		allStats.setEvaluations(evaluationService.getEvaluationInfo(areaId));
		return allStats;
	}

	private void fillUsersMap(Map<Integer, UserDataDto> usersMap, int areaId) {

		for (ReachedProductDbo reachedProductDbo : learningStatisticsMapper.getReachedProduct(areaId)) {
			usersMap.get(reachedProductDbo.getUserId()).setLastModule(reachedProductDbo.getProductName());
		}
		for (TrainingConnectionsDbo trainingDbo : learningStatisticsMapper.getTrainingConnections(areaId)) {
			UserDataDto userData = usersMap.get(trainingDbo.getUserId());
			userData.setLastConnection(trainingDbo.getLastUsage());
			userData.setConnectionsNbr(trainingDbo.getNbSessions());
			userData.setTime(Math.round(trainingDbo.getTotalTrainingTime()));
		}
		for (ScoreInitialEvalDbo initialEvalDbo : learningStatisticsMapper.getScoreInitialEval(areaId)) {
			usersMap.get(initialEvalDbo.getUserId()).setInitialEval(initialEvalDbo.getScore());
		}
		Map<Integer, UserRouteProductsDbo> userRouteProductDbos = learningStatisticsMapper.getRouteProducts(areaId);
		List<Integer> optionalProducts = learningStatisticsMapper.getAreaOptionalProducts(areaId);
		Map<Integer, ProductNbKeypoints> productNbKeypointsMap = learningStatisticsMapper.getProductNbKeypoints(areaId);
		for (KnownRulesDbo knownRulesDbo :learningStatisticsMapper.getKnownRules(areaId)) {
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
