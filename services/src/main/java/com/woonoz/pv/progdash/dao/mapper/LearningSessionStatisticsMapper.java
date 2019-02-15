package com.woonoz.pv.progdash.dao.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface LearningSessionStatisticsMapper {

	Integer getLastSessionId(@Param("userId")int userId);
}
