package com.woonoz.pv.progdash.dao.mapper;

import java.util.Collection;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.woonoz.pv.progdash.dao.dbo.ProgressDbo;

@Mapper
public interface ProgressMapper {

	List<ProgressDbo> getProgressData(@Param("userIds") Collection<Integer> userIds);

}
