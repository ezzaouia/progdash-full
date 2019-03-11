package com.woonoz.pv.progdash.dao.mapper;

import com.woonoz.pv.progdash.dao.dbo.ChapterNameDbo;
import com.woonoz.pv.progdash.dao.dbo.KeypointPracticeDbo;
import org.apache.ibatis.annotations.MapKey;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import javax.annotation.Nullable;
import java.util.List;
import java.util.Map;
import java.util.Set;

@Mapper
public interface KeypointMapper {

    List<KeypointPracticeDbo> getKeypointsPractice(@Param("areaId") int areaId, @Nullable @Param("groupId") Integer groupId);

    @MapKey("chapterId")
    Map<Integer, ChapterNameDbo> getChapterNames(@Param("chapterIds") Set<Integer> chapterIds);

}
