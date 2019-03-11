package com.woonoz.pv.progdash.service;

import java.util.List;

import com.woonoz.pv.progdash.dto.GroupDto;

public interface AreaService {

	List<GroupDto> getGroups(int areaId);

	boolean isAreaUsersNumberWithinLimit(int areaId, int limit);

	Integer getUniverseId(int areaId);

}
