package com.woonoz.pv.progdash.service;

import java.util.List;

import com.woonoz.pv.progdash.dto.ModuleInfoDto;

public interface ModuleService {

	List<ModuleInfoDto> getModulesInfo(int areaId);
}
