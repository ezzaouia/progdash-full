package com.woonoz.pv.progdash.service;

import java.util.ArrayList;
import java.util.List;

import javax.inject.Inject;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.woonoz.pv.progdash.dao.dbo.GroupDbo;
import com.woonoz.pv.progdash.dao.mapper.LearningStatisticsMapper;
import com.woonoz.pv.progdash.dto.AllStatisticsDto;
import com.woonoz.pv.progdash.dto.GroupDto;
import com.woonoz.pv.progdash.dto.LearningSessionStatisticsDto;

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

	public List<GroupDto> convertGroupDbosAsDto(List<GroupDbo> groupDbos) {
		List<GroupDto> groupDtos = new ArrayList<>();
		for (GroupDbo groupDbo : groupDbos) {
			groupDtos.add(new GroupDto(groupDbo.getId(), groupDbo.getName()));
		}
		return groupDtos;
	}

	@Override
	public AllStatisticsDto getAllStatistics(int areaId, Integer groupId) {
		return new AllStatisticsDto();
	}
}
