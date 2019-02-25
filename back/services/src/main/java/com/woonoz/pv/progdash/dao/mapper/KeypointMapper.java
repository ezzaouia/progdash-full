package com.woonoz.pv.progdash.dao.mapper;

import java.util.List;
import java.util.Map;
import java.util.Set;

import org.apache.ibatis.annotations.MapKey;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.woonoz.pv.progdash.dao.dbo.ChapterNameDbo;
import com.woonoz.pv.progdash.dao.dbo.KeypointPracticeDbo;

@Mapper
public interface KeypointMapper {

	List<KeypointPracticeDbo> getKeypointsPractice(@Param("areaId") int areaId);

	@MapKey("chapterId")
	Map<Integer, ChapterNameDbo> getChapterNames(@Param("chapterIds") Set<Integer> chapterIds);

}
