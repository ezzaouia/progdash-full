package com.woonoz.pv.progdash.dto;

import java.util.Map;

import com.google.common.base.MoreObjects;

public class TeacherActivityTraceDto {
	public Map<String, Object> payload;

	public String actionType;

	private String traceId;

	/**
	 * Private constructor for deserialization only
	 */
	@SuppressWarnings("unused")
	private TeacherActivityTraceDto() {}

	public TeacherActivityTraceDto(String traceId, Map<String, Object> payload, String actionType){
		this.traceId = traceId;
		this.payload = payload;
		this.actionType = actionType;
	}

	public String getTraceId() {
		return traceId;
	}

	public Map<String, Object> getPayload() {
		return payload;
	}

	public String getActionType() {
		return actionType;
	}

	@Override
	public String toString() {
		return MoreObjects.toStringHelper(this)
				.add("traceId", traceId)
				.add("actionType", actionType)
				.add("payload", payload)
				.toString();
	}
}
