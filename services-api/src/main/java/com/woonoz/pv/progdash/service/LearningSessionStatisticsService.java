package com.woonoz.pv.progdash.service;

import com.woonoz.pv.progdash.dto.LearningSessionStatisticsDto;

public interface LearningSessionStatisticsService {

	LearningSessionStatisticsDto getLearningSessionStatistics(Integer userId, String message);
}
