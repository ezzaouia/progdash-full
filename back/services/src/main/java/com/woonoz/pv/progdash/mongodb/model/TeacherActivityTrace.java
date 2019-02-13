package com.woonoz.pv.progdash.mongodb.model;

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
	public String traceMessage;
	/**
	 * We assume that we have a field in mongodb with this same name : represent teacher user id in mariadb
	 */
	@Indexed
	public int teacherId;

	public TeacherActivityTrace(String traceMessage, int teacherId){
		this.traceMessage = traceMessage;
		this.teacherId = teacherId;
	}

	public TeacherActivityTrace(String id, String traceMessage, int teacherId){
		this.id = id;
		this.traceMessage = traceMessage;
		this.teacherId = teacherId;
	}

	@Override
	public String toString() {
		return MoreObjects.toStringHelper(this)
				.add("id", id)
				.add("teacherId", teacherId)
				.add("traceMessage", traceMessage)
				.toString();
	}
}
