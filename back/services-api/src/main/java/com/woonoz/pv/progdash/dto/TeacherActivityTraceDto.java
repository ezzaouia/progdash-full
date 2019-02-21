package com.woonoz.pv.progdash.dto;

import java.util.Date;
import java.util.Map;

import com.google.common.base.MoreObjects;

public class TeacherActivityTraceDto {
	/**
	 * We assume that we have a field in mongodb with this same name
	 */
	private Object payload;
	/**
	 * We assume that we have a field in mongodb with this same name : represent teacher user id in mariadb
	 */

	private int teacherId;

	private String actionType;

	public String sessionId;

	public int areaId;

	public Date clientTimestamp;

	/**
	 * Private constructor for deserialization only
	 */
	@SuppressWarnings("unused")
	private TeacherActivityTraceDto() {}

	public TeacherActivityTraceDto(int teacherId, Object payload, String actionType, String sessionId, int areaId, Date clientTimestamp){
		this.teacherId = teacherId;
		this.payload = payload;
		this.actionType = actionType;
		this.sessionId = sessionId;
		this.areaId = areaId;
		this.clientTimestamp = clientTimestamp;
	}

	public Object getPayload() {
		return payload;
	}

	public String getActionType() {
		return actionType;
	}

	public String getSessionId() {
		return sessionId;
	}

	public int getAreaId() {
		return areaId;
	}

	public int getTeacherId() {
		return teacherId;
	}

	public Date getClientTimestamp() {
		return clientTimestamp;
	}

	@Override
	public String toString() {
		return MoreObjects.toStringHelper(this)
				.add("payload", payload)
				.add("actionType", actionType)
				.add("sessionId", sessionId)
				.add("areaId", areaId)
				.add("teacherId", teacherId)
				.add("clientTimestamp", clientTimestamp)
				.toString();
	}
}
