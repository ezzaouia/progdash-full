package com.woonoz.pv.progdash.service;

import java.util.List;

import com.woonoz.pv.progdash.dto.AllStatisticsDto;
import com.woonoz.pv.progdash.dto.GroupDto;
import com.woonoz.pv.progdash.dto.LearningSessionStatisticsDto;

import javax.annotation.Nullable;

public interface LearningStatisticsService {

	LearningSessionStatisticsDto getLearningSessionStatistics(Integer userId, String message);

	boolean isGroupUsersNumberWithinLimit(int groupId, int limit);

	boolean isGroupInArea(int areaId, int groupId);

	AllStatisticsDto getAllStatistics(int areaId, @Nullable Integer groupId);
}
