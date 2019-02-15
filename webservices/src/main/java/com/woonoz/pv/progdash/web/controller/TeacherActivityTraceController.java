package com.woonoz.pv.progdash.web.controller;

import javax.inject.Inject;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.woonoz.pv.progdash.dto.TeacherActivityTraceDto;
import com.woonoz.pv.progdash.service.TeacherActivityTraceService;

@RestController
public class TeacherActivityTraceController {

	@Inject private TeacherActivityTraceService teacherActivityTraceService;

	@PostMapping("/teacher/trace")
	public void saveTeacherActivitTrace(TeacherActivityTraceDto teacherActivityTraceDto) {
		teacherActivityTraceService.saveTeacherActivityTrace(teacherActivityTraceDto);
	}
}
