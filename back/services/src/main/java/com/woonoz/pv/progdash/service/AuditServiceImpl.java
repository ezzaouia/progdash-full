package com.woonoz.pv.progdash.service;

import javax.inject.Inject;

import org.springframework.stereotype.Service;

import com.woonoz.pv.progdash.dto.AuditDto;
import com.woonoz.pv.progdash.mongodb.model.Audit;
import com.woonoz.pv.progdash.mongodb.repository.AuditRepository;

@Service
public class AuditServiceImpl implements AuditService {

	@Inject private AuditRepository auditRepository;

	@Override
	public void saveAudit(AuditDto auditDto) {
		auditRepository.save(convertToAuditModel(auditDto));
	}

	private static Audit convertToAuditModel(AuditDto auditDto){
		return new Audit(auditDto.getError(), auditDto.getContext());
	}
}
