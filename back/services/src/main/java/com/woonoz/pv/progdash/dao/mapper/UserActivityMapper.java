package com.woonoz.pv.progdash.dao.mapper;

import java.util.Date;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.woonoz.auth.model.UserId;
import com.woonoz.pv.progdash.model.LearningSessionTimeDbo;

@Mapper
public interface UserActivityMapper {

	int computeLearningTimeSpentBetween(@Param("userId")UserId userId, @Param("startDate") Date startDate, @Param("endDate") Date endDate, @Param("isLimited") boolean isLimited);
	List<LearningSessionTimeDbo> getLearningSessionTimeBetween(@Param("userId")UserId userId, @Param("startDate") Date startDate, @Param("endDate") Date endDate, @Param("isLimited") boolean isLimited);
}
