package com.woonoz.pv.progdash.dao.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.woonoz.pv.progdash.dao.dbo.GroupDbo;
import com.woonoz.pv.progdash.dao.dbo.ReachedProductDbo;
import com.woonoz.pv.progdash.dao.dbo.TrainingConnectionsDbo;
import com.woonoz.pv.progdash.dao.dbo.UserIdentityDbo;

@Mapper
public interface LearningStatisticsMapper {

	Integer getLastSessionId(@Param("userId")int userId);

	List<GroupDbo> getGroups(@Param("areaId")int areaId);

	int countAreaUsers(@Param("areaId")int areaId);

	int countGroupUsers(@Param("groupId") int groupId);

	Integer getAreaFromGroup(@Param("groupId") int groupId);

	List<UserIdentityDbo> getUsersIdentity(@Param("areaId")int areaId);

	List<ReachedProductDbo> getReachedProduct(@Param("areaId")int areaId);

	List<TrainingConnectionsDbo> getTrainingConnections(@Param("areaId")int areaId);
}
