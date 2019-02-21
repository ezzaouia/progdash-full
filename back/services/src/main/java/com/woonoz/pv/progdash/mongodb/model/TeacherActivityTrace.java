package com.woonoz.pv.progdash.mongodb.model;

import java.util.Date;
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
	public Object payload;

	public String actionType;

	public Date clientTimestamp;
	/**
	 * We assume that we have a field in mongodb with this same name : represent teacher user id in mariadb
	 */
	@Indexed
	public int teacherId;

	public String sessionId;

	public int areaId;

	public byte[] file;

	public TeacherActivityTrace(Object payload, int teacherId, String actionType, String sessionId, int areaId, byte[] file, Date clientTimestamp){
		this.payload = payload;
		this.teacherId = teacherId;
		this.actionType = actionType;
		this.areaId = areaId;
		this.sessionId = sessionId;
		this.file = file;
		this.clientTimestamp = clientTimestamp;
	}

	public TeacherActivityTrace(String id, Object payload, int teacherId, String actionType, String sessionId, int areaId, byte[] file, Date clientTimestamp){
		this.id = id;
		this.payload = payload;
		this.teacherId = teacherId;
		this.actionType = actionType;
		this.areaId = areaId;
		this.sessionId = sessionId;
		this.file = file;
		this.clientTimestamp = clientTimestamp;
	}

	@Override
	public String toString() {
		return MoreObjects.toStringHelper(this)
				.add("id", id)
				.add("teacherId", teacherId)
				.add("payload", payload)
				.add("actionType", actionType)
				.add("areaId", areaId)
				.add("sessionId", sessionId)
				.add("clientTimestamp", clientTimestamp)
				.toString();
	}
}
