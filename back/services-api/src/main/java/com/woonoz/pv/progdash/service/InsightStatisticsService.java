package com.woonoz.pv.progdash.service;

import com.woonoz.pv.progdash.dto.InsightInfoDto;

public interface InsightStatisticsService {

	InsightInfoDto createInsightsInfo(int nbDays);
}
