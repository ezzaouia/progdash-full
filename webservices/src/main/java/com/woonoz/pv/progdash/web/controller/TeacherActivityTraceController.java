package com.woonoz.pv.progdash.web.controller;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;

import org.springframework.stereotype.Controller;

import com.woonoz.pv.progdash.dto.TeacherActivityTraceDto;
import com.woonoz.pv.progdash.service.TeacherActivityTraceService;

@Controller
public class TeacherActivityTraceController {

	@Inject private TeacherActivityTraceService teacherActivityTraceService;

	@Path("/teacher/trace")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public void saveTeacherActivitTrace(TeacherActivityTraceDto teacherActivityTraceDto) {
		teacherActivityTraceService.saveTeacherActivityTrace(teacherActivityTraceDto);
	}
}
