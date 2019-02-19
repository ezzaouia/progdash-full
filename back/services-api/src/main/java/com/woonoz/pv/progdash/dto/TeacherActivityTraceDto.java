package com.woonoz.pv.progdash.dto;

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

	private String traceId;

	private String actionType;

	/**
	 * Private constructor for deserialization only
	 */
	@SuppressWarnings("unused")
	private TeacherActivityTraceDto() {}

	public TeacherActivityTraceDto(String traceId, Object payload, int teacherId, String actionType){
		this.traceId = traceId;
		this.payload = payload;
		this.teacherId = teacherId;
		this.actionType = actionType;
	}

	public String getTraceId() {
		return traceId;
	}

	public Object getPayload() {
		return payload;
	}

	public int getTeacherId() {
		return teacherId;
	}

	public String getActionType() {
		return actionType;
	}

	@Override
	public String toString() {
		return MoreObjects.toStringHelper(this)
				.add("teacherId", teacherId)
				.add("payload", payload)
				.add("actionType", actionType)
				.toString();
	}
}
