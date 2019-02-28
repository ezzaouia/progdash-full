package com.woonoz.pv.progdash.dao.mapper;

import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.annotation.Nullable;

import org.apache.ibatis.annotations.MapKey;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.woonoz.pv.progdash.dao.dbo.SessionOnDateDbo;
import com.woonoz.pv.progdash.dao.dbo.UserTrainingTimeDbo;

@Mapper
public interface InsightStatisticsMapper {

    float sumKeypoints(@Param("areaId") int areaId, @Nullable @Param("groupId") Integer groupId, @Param("startDate") Date startDate, @Param("endDate") Date endDate);

	/**
	 * @return the average training time in minutes
	 */
    float avgTrainingTime(@Param("areaId") int areaId, @Nullable @Param("groupId") Integer groupId, @Param("startDate") Date startDate, @Param("endDate") Date endDate);

    int countActiveUsers(@Param("areaId") int areaId, @Nullable @Param("groupId") Integer groupId, @Param("startDate") Date startDate, @Param("endDate") Date endDate,
                         @Param("nbExpectedConnections") int nbExpectedConnections);

    List<SessionOnDateDbo> getConnectionsChart(@Param("areaId") int areaId, @Nullable @Param("groupId") Integer groupId, @Param("nbDays") int nbDays, @Param("endDate") Date endDate);

	@MapKey("userId")
	Map<Integer, UserTrainingTimeDbo> getTopTrainingTime(@Param("areaId") int areaId, @Param("groupId") Integer groupId, @Param("startDate") Date startDate, @Param("endDate") Date endDate,
			@Param("nbForTop") Integer nbForTop, @Param("ascendantOrder") Boolean ascendantOrder);

}
