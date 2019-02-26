package com.woonoz.pv.progdash.service;

import com.woonoz.pv.progdash.dto.EvaluationInfoDto;

import javax.annotation.Nullable;
import java.util.List;

public interface EvaluationService {
    List<EvaluationInfoDto> getEvaluationInfo(int areaId, @Nullable Integer groupId);
}
