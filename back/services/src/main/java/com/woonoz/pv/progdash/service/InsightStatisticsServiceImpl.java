package com.woonoz.pv.progdash.service;

import java.util.ArrayList;
import java.util.List;

import javax.inject.Inject;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.woonoz.pv.progdash.dao.dbo.SessionOnDateDbo;
import com.woonoz.pv.progdash.dao.mapper.InsightStatisticsMapper;
import com.woonoz.pv.progdash.dto.ConnectionDto;
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
	public InsightInfoDto createInsightsInfo(int areaId, int nbUsers, int nbDays, int nbExpectedConnections) {
		Period period = new Period(coreDateProvider.now(), nbDays);
		InsightInfoDto insightInfoDto = new InsightInfoDto();

		int rulesMainPeriod = Math.round(insightStatisticsMapper.sumKeypoints(areaId, period.getMainStartDate(), period.getMainEndDate()) / nbUsers);
		int rulesPreviousPeriod = Math.round(insightStatisticsMapper.sumKeypoints(areaId, period.getPreviousStartDate(), period.getPreviousEndDate()) / nbUsers);
		insightInfoDto.setScore(new DifferentialDto(rulesMainPeriod, rulesMainPeriod - rulesPreviousPeriod));

		int trainingTimeMainPeriod = Math.round(insightStatisticsMapper.avgTrainingTime(areaId, period.getMainStartDate(), period.getMainEndDate()));
		int trainingTimePreviousPeriod = Math.round(insightStatisticsMapper.avgTrainingTime(areaId, period.getPreviousStartDate(), period.getPreviousEndDate()));
		insightInfoDto.setTime(new DifferentialDto(trainingTimeMainPeriod, trainingTimeMainPeriod - trainingTimePreviousPeriod));

		int activeUsersMainPeriod = insightStatisticsMapper.countActiveUsers(areaId, period.getMainStartDate(), period.getMainEndDate(), nbExpectedConnections);
		int activeUsersPreviousPeriod = insightStatisticsMapper.countActiveUsers(areaId, period.getPreviousStartDate(), period.getPreviousEndDate(), nbExpectedConnections);
		insightInfoDto.setActiveUsers(new DifferentialDto(activeUsersMainPeriod, activeUsersMainPeriod - activeUsersPreviousPeriod));

		int inactiveUsersMainPeriod = nbUsers - activeUsersMainPeriod;
		int inactiveUsersPreviousPeriod = nbUsers - activeUsersPreviousPeriod;
		insightInfoDto.setInactiveUsers(new DifferentialDto(inactiveUsersMainPeriod, inactiveUsersMainPeriod - inactiveUsersPreviousPeriod));

		List<SessionOnDateDbo> sessionOnDateDbos = insightStatisticsMapper.getConnectionsChart(areaId, nbDays, coreDateProvider.now().toDate());
		List<ConnectionDto> connectionDtos = new ArrayList<>();
		for (SessionOnDateDbo sessionOnDateDbo : sessionOnDateDbos) {
			connectionDtos.add(new ConnectionDto(sessionOnDateDbo.getNbSessions(), sessionOnDateDbo.getDate()));
		}
		insightInfoDto.setConnections(connectionDtos);

		return insightInfoDto;
	}
}
