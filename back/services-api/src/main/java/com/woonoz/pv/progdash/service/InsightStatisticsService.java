package com.woonoz.pv.progdash.service;

import java.util.List;

import com.woonoz.pv.progdash.dto.InsightInfoDto;
import com.woonoz.pv.progdash.dto.UserDataInfoDto;

public interface InsightStatisticsService {

	InsightInfoDto createInsightsInfo(int areaId, Integer groupId, int nbUsers, int nbDays, int nbExpectedConnections);

	List<UserDataInfoDto> getTopNTimeUsers(int areaId, int nbDays, int nbForTop, boolean ascendantOrder);
}
