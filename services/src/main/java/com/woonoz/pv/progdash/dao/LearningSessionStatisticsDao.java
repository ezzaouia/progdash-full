package com.woonoz.pv.progdash.dao;

import org.apache.ibatis.annotations.Param;

public interface LearningSessionStatisticsDao {

	Integer getLastSessionId(@Param("userId")int userId);
}
