package com.woonoz.pv.progdash.dao.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.woonoz.pv.progdash.dao.dbo.GroupDbo;

@Mapper
public interface AreaGroupMapper {

	List<GroupDbo> getGroups(@Param("areaId") int areaId);

	int countAreaUsers(@Param("areaId") int areaId);

	Integer getUniverseId(@Param("areaId") int areaId);

}
