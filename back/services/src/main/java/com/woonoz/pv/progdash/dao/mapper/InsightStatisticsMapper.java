package com.woonoz.pv.progdash.dao.mapper;

import java.util.Date;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface InsightStatisticsMapper {

	int countUsers(@Param("areaId") int areaId);

	float sumKeypoints(@Param("areaId") int areaId, @Param("startDate") Date startDate, @Param("endDate") Date endDate);

	float avgTrainingTime(@Param("areaId") int areaId, @Param("startDate") Date startDate, @Param("endDate") Date endDate);

	int countActiveUsers(@Param("areaId") int areaId, @Param("startDate") Date startDate, @Param("endDate") Date endDate, @Param("nbExpectedConnections") int nbExpectedConnections);

}
