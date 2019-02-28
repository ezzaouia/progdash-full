package com.woonoz.pv.progdash.mongodb.model;

import java.util.Date;

import org.bson.types.Binary;
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

	// WARN : we do not want to use GridFS to store files because our files are less than 16 MB and we currently upload/update the file atomically, no need to update/search through part of the files
	// use Binary type instead of bytes to avoid map conversion errors
	public Binary file;

	public TeacherActivityTrace(Object payload, int teacherId, String actionType, String sessionId, int areaId, Binary file, Date clientTimestamp) {
		this.payload = payload;
		this.teacherId = teacherId;
		this.actionType = actionType;
		this.areaId = areaId;
		this.sessionId = sessionId;
		this.file = file;
		this.clientTimestamp = clientTimestamp;
	}

	public TeacherActivityTrace(String id, Object payload, int teacherId, String actionType, String sessionId, int areaId, Binary file, Date clientTimestamp) {
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
