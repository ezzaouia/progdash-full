package com.woonoz.pv.progdash.service;

import java.util.List;

import javax.inject.Inject;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.woonoz.pv.progdash.dao.mapper.ModuleMapper;
import com.woonoz.pv.progdash.dto.ModuleInfoDto;

@Service
@Transactional(propagation = Propagation.MANDATORY)
public class ModuleServiceImpl implements ModuleService {

	@Inject private ModuleMapper moduleMapper;

	@Override
	public List<ModuleInfoDto> getModulesInfo(int areaId) {
		return null;
	}
}
