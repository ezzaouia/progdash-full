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
import com.woonoz.pv.progdash.dao.dbo.ReachedProductDbo;
import com.woonoz.pv.progdash.dao.dbo.TrainingConnectionsDbo;
import com.woonoz.pv.progdash.dao.dbo.UserIdentityDbo;
import com.woonoz.pv.progdash.dao.mapper.LearningStatisticsMapper;
import com.woonoz.pv.progdash.dto.AllStatisticsDto;
import com.woonoz.pv.progdash.dto.GroupDto;
import com.woonoz.pv.progdash.dto.LearningSessionStatisticsDto;
import com.woonoz.pv.progdash.dto.UserDataDto;

@Service
@Transactional(propagation = Propagation.MANDATORY)
public class LearningStatisticsServiceImpl implements LearningStatisticsService {

	@Inject private LearningStatisticsMapper learningStatisticsMapper;

	@Override
	public LearningSessionStatisticsDto getLearningSessionStatistics(Integer userId, String message) {
		return new LearningSessionStatisticsDto(learningStatisticsMapper.getLastSessionId(userId), message);
	}

	@Override
	public List<GroupDto> getGroups(int areaId) {
		List<GroupDbo> groupsDbos = learningStatisticsMapper.getGroups(areaId);
		return convertGroupDbosAsDto(groupsDbos);
	}

	private List<GroupDto> convertGroupDbosAsDto(List<GroupDbo> groupDbos) {
		List<GroupDto> groupDtos = new ArrayList<>();
		for (GroupDbo groupDbo : groupDbos) {
			groupDtos.add(new GroupDto(groupDbo.getId(), groupDbo.getName()));
		}
		return groupDtos;
	}

	@Override
	public boolean isAreaUsersNumberWithinLimit(int areaId, int limit) {
		return learningStatisticsMapper.countAreaUsers(areaId) <= limit;
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

		Map<Integer, UserDataDto> usersMap = new HashMap<>();
		for (UserIdentityDbo userIdentityDbo : learningStatisticsMapper.getUsersIdentity(areaId)) {
			usersMap.put(userIdentityDbo.getId(), new UserDataDto(userIdentityDbo.getId(), userIdentityDbo.getFullName()));
		}
		for (ReachedProductDbo reachedProductDbo : learningStatisticsMapper.getReachedProduct(areaId)) {
			usersMap.get(reachedProductDbo.getUserId()).setLastModule(reachedProductDbo.getProductName());
		}
		for (TrainingConnectionsDbo trainingDbo : learningStatisticsMapper.getTrainingConnections(areaId)) {
			UserDataDto userData = usersMap.get(trainingDbo.getUserId());
			userData.setLastConnection(trainingDbo.getLastUsage());
			userData.setConnectionsNbr(trainingDbo.getNbSessions());
			userData.setTime(Math.round(trainingDbo.getTotalTrainingTime()));
		}

		Collection<UserDataDto> userDataDtos = usersMap.values();
		allStats.setUsers(userDataDtos);
		return allStats;
	}
}
