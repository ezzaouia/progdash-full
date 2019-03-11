package com.woonoz.pv.progdash.web.controller;

import javax.annotation.security.RolesAllowed;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;

import org.springframework.stereotype.Controller;

import com.woonoz.pv.progdash.dto.AuditDto;
import com.woonoz.pv.progdash.model.UserRoleConst;
import com.woonoz.pv.progdash.service.AuditService;
import com.woonoz.web.controller.WoonozJerseyController;

@Controller
@Path("audit")
@RolesAllowed(UserRoleConst.USER_ADMIN)
public class AuditController implements WoonozJerseyController {

	@Inject private AuditService auditService;

	@Path("error")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public void createAudit(AuditDto auditDto) {
		auditService.saveAudit(auditDto);
	}
}
