package com.woonoz.pv.progdash.service;

import java.util.List;

import javax.inject.Inject;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.woonoz.pv.progdash.dao.mapper.LearningStatisticsMapper;
import com.woonoz.pv.progdash.dto.GroupDto;
import com.woonoz.pv.progdash.dto.LearningSessionStatisticsDto;

@Service
@Transactional(propagation = Propagation.MANDATORY)
public class LearningStatisticsServiceImpl implements LearningStatisticsService {

	@Inject private LearningStatisticsMapper learningStatisticsMapper;

	public LearningSessionStatisticsDto getLearningSessionStatistics(Integer userId, String message) {
		return new LearningSessionStatisticsDto(learningStatisticsMapper.getLastSessionId(userId), message);
	}

	public List<GroupDto> getGroups(int areaId) {
		return learningStatisticsMapper.getGroups(areaId);
	}
}
