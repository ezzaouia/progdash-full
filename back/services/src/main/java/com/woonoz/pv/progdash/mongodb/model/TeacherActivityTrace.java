package com.woonoz.pv.progdash.mongodb.model;

import java.util.Map;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import com.google.common.base.MoreObjects;

@Document(collection = "teacherActivityTrace")
public class TeacherActivityTrace {

	/**
	 * Standard mongodb name for the id to retreive records
	 */
	@Id
	public String id;
	/**
	 * We assume that we have a field in mongodb with this same name
	 */
	public Map<String, Object> payload;

	public String actionType;
	/**
	 * We assume that we have a field in mongodb with this same name : represent teacher user id in mariadb
	 */
	@Indexed
	public int teacherId;

	public TeacherActivityTrace(Map<String, Object> payload, int teacherId, String actionType){
		this.payload = payload;
		this.teacherId = teacherId;
		this.actionType = actionType;
	}

	public TeacherActivityTrace(String id, Map<String, Object> payload, int teacherId, String actionType){
		this.id = id;
		this.payload = payload;
		this.teacherId = teacherId;
		this.actionType = actionType;
	}

	@Override
	public String toString() {
		return MoreObjects.toStringHelper(this)
				.add("id", id)
				.add("teacherId", teacherId)
				.add("payload", payload)
				.add("actionType", actionType)
				.toString();
	}
}
