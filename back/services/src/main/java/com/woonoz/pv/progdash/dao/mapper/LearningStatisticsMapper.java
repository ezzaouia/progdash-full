package com.woonoz.pv.progdash.dao.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.woonoz.pv.progdash.dto.GroupDto;

@Mapper
public interface LearningStatisticsMapper {

	Integer getLastSessionId(@Param("userId")int userId);

	List<GroupDto> getGroups(@Param("areaId")int areaId);
}
