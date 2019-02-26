package com.woonoz.pv.progdash.dao.mapper;

import java.util.Date;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.MapKey;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.woonoz.pv.progdash.dao.dbo.SessionOnDateDbo;
import com.woonoz.pv.progdash.dao.dbo.UserTrainingTimeDbo;

@Mapper
public interface InsightStatisticsMapper {

	float sumKeypoints(@Param("areaId") int areaId, @Param("startDate") Date startDate, @Param("endDate") Date endDate);

	float avgTrainingTime(@Param("areaId") int areaId, @Param("startDate") Date startDate, @Param("endDate") Date endDate);

	int countActiveUsers(@Param("areaId") int areaId, @Param("startDate") Date startDate, @Param("endDate") Date endDate, @Param("nbExpectedConnections") int nbExpectedConnections);

	List<SessionOnDateDbo> getConnectionsChart(@Param("areaId") int areaId, @Param("nbDays") int nbDays, @Param("endDate") Date endDate);

	@MapKey("userId")
	Map<Integer, UserTrainingTimeDbo> getTopTrainingTime(@Param("areaId") int areaId, @Param("startDate") Date startDate, @Param("endDate") Date endDate,
			@Param("nbForTop") Integer nbForTop, @Param("ascendantOrder") Boolean ascendantOrder);

}
