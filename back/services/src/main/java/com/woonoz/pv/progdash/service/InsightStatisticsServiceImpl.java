package com.woonoz.pv.progdash.service;

import javax.inject.Inject;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.woonoz.pv.progdash.dao.mapper.InsightStatisticsMapper;
import com.woonoz.pv.progdash.dto.InsightInfoDto;

@Service
@Transactional(propagation = Propagation.MANDATORY)
public class InsightStatisticsServiceImpl implements InsightStatisticsService {

	@Inject private InsightStatisticsMapper insightStatisticsMapper;

	@Override
	public InsightInfoDto createInsightsInfo(int nbDays) {
		return null;
	}
}
