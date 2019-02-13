package com.woonoz.pv.progdash.service;

import javax.inject.Inject;

import org.springframework.stereotype.Service;

import com.woonoz.pv.progdash.dto.TeacherActivityTraceDto;
import com.woonoz.pv.progdash.mongodb.model.TeacherActivityTrace;
import com.woonoz.pv.progdash.mongodb.repository.TeacherActivityRepository;

@Service
public class TeacherActivityTraceServiceImpl implements TeacherActivityTraceService {

	@Inject private TeacherActivityRepository teacherActivityRepository;

	@Override
	public void saveTeacherActivityTrace(TeacherActivityTraceDto teacherActivityTraceDto) {
		teacherActivityRepository.save(convertToTeacherActivityTraceModel(teacherActivityTraceDto));
	}

	private static TeacherActivityTrace convertToTeacherActivityTraceModel(TeacherActivityTraceDto teacherActivityTraceDto){
		return new TeacherActivityTrace(teacherActivityTraceDto.getTraceId(), teacherActivityTraceDto.getTraceMessage(), teacherActivityTraceDto.getTeacherId());
	}
}
