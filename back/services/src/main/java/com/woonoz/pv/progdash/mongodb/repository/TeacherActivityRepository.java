package com.woonoz.pv.progdash.mongodb.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.woonoz.pv.progdash.mongodb.model.TeacherActivityTrace;

// No need implementation, just one interface, and you have CRUD, thanks Spring Data
public interface TeacherActivityRepository extends MongoRepository<TeacherActivityTrace, Integer> {

	//List<TeacherActivityTrace> findByTeacherId(int teacherId);

}