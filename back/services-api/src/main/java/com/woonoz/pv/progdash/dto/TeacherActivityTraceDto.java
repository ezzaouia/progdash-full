package com.woonoz.pv.progdash.dto;

import com.google.common.base.MoreObjects;

public class TeacherActivityTraceDto {
	/**
	 * We assume that we have a field in mongodb with this same name
	 */
	private String traceMessage;
	/**
	 * We assume that we have a field in mongodb with this same name : represent teacher user id in mariadb
	 */
	private int teacherId;

	private String traceId;

	public TeacherActivityTraceDto(String traceId, String traceMessage, int teacherId){
		this.traceId = traceId;
		this.traceMessage = traceMessage;
		this.teacherId = teacherId;
	}

	public String getTraceId() {
		return traceId;
	}

	public String getTraceMessage() {
		return traceMessage;
	}

	public int getTeacherId() {
		return teacherId;
	}

	@Override
	public String toString() {
		return MoreObjects.toStringHelper(this)
				.add("teacherId", teacherId)
				.add("traceMessage", traceMessage)
				.toString();
	}
}
