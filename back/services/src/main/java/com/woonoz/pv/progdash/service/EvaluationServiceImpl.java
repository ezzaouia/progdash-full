package com.woonoz.pv.progdash.service;

import com.woonoz.pv.progdash.dao.dbo.EvaluationInfoDbo;
import com.woonoz.pv.progdash.dao.mapper.EvaluationMapper;
import com.woonoz.pv.progdash.dto.EvaluationInfoDto;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Nullable;
import javax.inject.Inject;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional(propagation = Propagation.MANDATORY)
public class EvaluationServiceImpl implements EvaluationService {
    @Inject
    private EvaluationMapper evaluationMapper;

    @Override
    public List<EvaluationInfoDto> getEvaluationInfo(int areaId, @Nullable Integer groupId) {
        List<EvaluationInfoDbo> dbos = evaluationMapper.getEvaluationInfo(areaId, groupId);
        ArrayList<EvaluationInfoDto> dtos = new ArrayList<>();
        for (EvaluationInfoDbo dbo : dbos) {
            dtos.add(new EvaluationInfoDto(dbo.getFullName(), dbo.getUserId(), dbo.getEvaluationName(), dbo.getMark(), dbo.getProgression(), dbo.getTimeSpentInMin()));
        }
        return dtos;
    }
}
