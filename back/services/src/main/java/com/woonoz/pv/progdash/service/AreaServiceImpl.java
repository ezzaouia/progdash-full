package com.woonoz.pv.progdash.service;

import java.util.ArrayList;
import java.util.List;

import javax.inject.Inject;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.woonoz.pv.progdash.dao.dbo.GroupDbo;
import com.woonoz.pv.progdash.dao.mapper.AreaGroupMapper;
import com.woonoz.pv.progdash.dto.GroupDto;

@Service
@Transactional(propagation = Propagation.MANDATORY)
public class AreaServiceImpl implements AreaService {

    private static final int GROUP_ID_FOR_ALL_AREA = 0;
    private static final String GROUP_NAME_FOR_ALL_AREA = "Tous";

    @Inject private AreaGroupMapper areaGroupMapper;

    @Override
    public List<GroupDto> getGroups(int areaId) {
        List<GroupDbo> groupsDbos = areaGroupMapper.getGroups(areaId);
        List<GroupDto> groupDtos = convertGroupDbosAsDto(groupsDbos);
        groupDtos.add(new GroupDto(GROUP_ID_FOR_ALL_AREA, GROUP_NAME_FOR_ALL_AREA, areaGroupMapper.countAreaUsers(areaId)));
        return groupDtos;
    }

    private List<GroupDto> convertGroupDbosAsDto(List<GroupDbo> groupDbos) {
        List<GroupDto> groupDtos = new ArrayList<>();
        for (GroupDbo groupDbo : groupDbos) {
            groupDtos.add(new GroupDto(groupDbo.getId(), groupDbo.getName(), groupDbo.getNbUsers()));
        }
        return groupDtos;
    }

    @Override
    public boolean isAreaUsersNumberWithinLimit(int areaId, int limit) {
        return areaGroupMapper.countAreaUsers(areaId) <= limit;
    }

    @Override
    public Integer getUniverseId(int areaId) {
        return areaGroupMapper.getUniverseId(areaId);
    }
}
