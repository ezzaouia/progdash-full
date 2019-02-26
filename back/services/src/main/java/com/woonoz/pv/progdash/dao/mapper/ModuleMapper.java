package com.woonoz.pv.progdash.dao.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.woonoz.pv.progdash.dao.dbo.ModuleInfoDbo;

@Mapper
public interface ModuleMapper {
	List<ModuleInfoDbo> getModulesInfo(@Param("areaId") int areaId);
}
