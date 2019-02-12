package com.woonoz.pv.progdash.service;

import javax.inject.Inject;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.woonoz.pv.progdash.dao.mapper.LearningSessionStatisticsMapper;
import com.woonoz.pv.progdash.dto.LearningSessionStatisticsDto;

@Service
@Transactional(propagation = Propagation.MANDATORY)
public class LearningSessionStatisticsServiceImpl implements LearningSessionStatisticsService{

	@Inject private LearningSessionStatisticsMapper learningSessionStatisticsMapper;

	public LearningSessionStatisticsDto getLearningSessionStatistics(Integer userId, String message) {
		return new LearningSessionStatisticsDto(learningSessionStatisticsMapper.getLastSessionId(userId), message);
	}
}
