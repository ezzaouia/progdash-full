package com.woonoz.pv.progdash.service;

import javax.inject.Inject;

import org.joda.time.DateTime;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.woonoz.pv.progdash.dao.mapper.InsightStatisticsMapper;
import com.woonoz.pv.progdash.dto.DifferentialDto;
import com.woonoz.pv.progdash.dto.InsightInfoDto;
import com.woonoz.service.DateProvider;

@Service
@Transactional(propagation = Propagation.MANDATORY)
public class InsightStatisticsServiceImpl implements InsightStatisticsService {

	@Inject private InsightStatisticsMapper insightStatisticsMapper;

	@Inject
	@Qualifier("coreDateProvider")
	private DateProvider coreDateProvider;

	@Override
	public InsightInfoDto createInsightsInfo(int areaId, int nbDays) {
		DateTime today = coreDateProvider.now();
		DateTime mainPeriodStartDay = today.minusDays(nbDays);
		DateTime previousPeriodStartDay = mainPeriodStartDay.minusDays(nbDays);
		int nbUsers = insightStatisticsMapper.countUsers(areaId);

		InsightInfoDto insightInfoDto = new InsightInfoDto();
		int rulesMainPeriod = Math.round(insightStatisticsMapper.sumKeypoints(areaId, mainPeriodStartDay.toDate(), today.toDate()) / nbUsers);
		int rulesPreviousPeriod = Math.round(insightStatisticsMapper.sumKeypoints(areaId, previousPeriodStartDay.toDate(), mainPeriodStartDay.toDate()) / nbUsers);
		insightInfoDto.setScore(new DifferentialDto(rulesMainPeriod, rulesMainPeriod-rulesPreviousPeriod));

		int trainingTimeMainPeriod = Math.round(insightStatisticsMapper.avgTrainingTime(areaId, mainPeriodStartDay.toDate(), today.toDate()));
		int trainingTimePreviousPeriod = Math.round(insightStatisticsMapper.avgTrainingTime(areaId, previousPeriodStartDay.toDate(), mainPeriodStartDay.toDate()));
		insightInfoDto.setTime(new DifferentialDto(trainingTimeMainPeriod, trainingTimeMainPeriod-trainingTimePreviousPeriod));

		return insightInfoDto;
	}
}
