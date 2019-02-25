package com.woonoz.pv.progdash.service;

import com.woonoz.pv.progdash.dto.EvaluationInfoDto;

import java.util.List;

public interface EvaluationService {
    List<EvaluationInfoDto> getEvaluationInfo(int areaId);
}
