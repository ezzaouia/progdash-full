package com.woonoz.pv.progdash.service;

import java.util.List;

import com.woonoz.pv.progdash.dto.AllStatisticsDto;
import com.woonoz.pv.progdash.dto.GroupDto;
import com.woonoz.pv.progdash.dto.LearningSessionStatisticsDto;

public interface LearningStatisticsService {

	LearningSessionStatisticsDto getLearningSessionStatistics(Integer userId, String message);

	List<GroupDto> getGroups(int areaId);

	boolean isAreaUsersNumberWithinLimit(int areaId, int limit);

	boolean isGroupUsersNumberWithinLimit(int groupId, int limit);

	boolean isGroupInArea(int areaId, Integer groupId);

	AllStatisticsDto getAllStatistics(int areaId, Integer groupId);
}
