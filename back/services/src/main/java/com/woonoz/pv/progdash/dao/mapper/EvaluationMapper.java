package com.woonoz.pv.progdash.dao.mapper;

import com.woonoz.pv.progdash.dao.dbo.EvaluationInfoDbo;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import javax.annotation.Nullable;
import java.util.List;

@Mapper
public interface EvaluationMapper {
    List<EvaluationInfoDbo> getEvaluationInfo(@Param("areaId") int areaId, @Nullable @Param("groupId") Integer groupId);
}
