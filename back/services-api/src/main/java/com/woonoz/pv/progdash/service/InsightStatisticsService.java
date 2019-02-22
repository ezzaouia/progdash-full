package com.woonoz.pv.progdash.service;

import com.woonoz.pv.progdash.dto.InsightInfoDto;

public interface InsightStatisticsService {

	InsightInfoDto createInsightsInfo(int areaId, int nbUsers, int nbDays, int nbExpectedConnections);
}
