package com.woonoz.pv.progdash.web.controller;

import javax.annotation.security.PermitAll;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;

import org.springframework.stereotype.Controller;

import com.woonoz.pv.progdash.dto.TeacherActivityTraceDto;
import com.woonoz.pv.progdash.service.TeacherActivityTraceService;
import com.woonoz.web.controller.WoonozJerseyController;

@Controller
@Path("teacher")
@PermitAll
public class TeacherActivityTraceController implements WoonozJerseyController{

	@Inject private TeacherActivityTraceService teacherActivityTraceService;

	@Path("trace")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public void saveTeacherActivitTrace(TeacherActivityTraceDto teacherActivityTraceDto) {
		teacherActivityTraceService.saveTeacherActivityTrace(teacherActivityTraceDto);
	}
}
