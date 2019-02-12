package com.woonoz.pv.progdash.web.controller;

import javax.inject.Inject;

import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.woonoz.pv.progdash.dto.LearningSessionStatisticsDto;
import com.woonoz.pv.progdash.service.LearningSessionStatisticsService;

@RestController
public class LearningSessionStatisticsController {

	@Inject private LearningSessionStatisticsService learningSessionStatisticsService;

	@GetMapping("/learning/statistics/{userId}")
	@Transactional(readOnly = true)
	public LearningSessionStatisticsDto getLearningSessionStatistics(@PathVariable("userId") int userId) {
		return learningSessionStatisticsService.getLearningSessionStatistics(userId, "Hello");
	}
}
