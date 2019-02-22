package com.woonoz.pv.progdash.dao.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.MapKey;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.woonoz.pv.progdash.dao.dbo.GroupDbo;
import com.woonoz.pv.progdash.dao.dbo.KnownRulesDbo;
import com.woonoz.pv.progdash.dao.dbo.ProductNbKeypoints;
import com.woonoz.pv.progdash.dao.dbo.ReachedProductDbo;
import com.woonoz.pv.progdash.dao.dbo.ScoreInitialEvalDbo;
import com.woonoz.pv.progdash.dao.dbo.TrainingConnectionsDbo;
import com.woonoz.pv.progdash.dao.dbo.UserIdentityDbo;
import com.woonoz.pv.progdash.dao.dbo.UserRouteProductsDbo;

@Mapper
public interface LearningStatisticsMapper {

	Integer getLastSessionId(@Param("userId")int userId);

	int countGroupUsers(@Param("groupId") int groupId);

	Integer getAreaFromGroup(@Param("groupId") int groupId);

	List<UserIdentityDbo> getUsersIdentity(@Param("areaId")int areaId);

	List<ReachedProductDbo> getReachedProduct(@Param("areaId")int areaId);

	List<TrainingConnectionsDbo> getTrainingConnections(@Param("areaId")int areaId);

	List<ScoreInitialEvalDbo> getScoreInitialEval(@Param("areaId")int areaId);

	@MapKey("userId")
	Map<Integer, UserRouteProductsDbo> getRouteProducts(@Param("areaId")int areaId);

	List<Integer> getAreaOptionalProducts(@Param("areaId")int areaId);

	@MapKey("productId")
	Map<Integer, ProductNbKeypoints> getProductNbKeypoints(@Param("areaId")int areaId);

	List<KnownRulesDbo> getKnownRules(@Param("areaId")int areaId);
}
