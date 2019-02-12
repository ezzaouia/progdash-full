package com.woonoz.pv.progdash.dto;

import com.google.common.base.MoreObjects;

public class LearningSessionStatisticsDto {

	private final Integer learningSessionId;
	private final String message;

	public LearningSessionStatisticsDto(Integer learningSessionId, String message) {
		this.learningSessionId = learningSessionId;
		this.message = message;
	}

	public Integer getLearningSessionId() {
		return learningSessionId;
	}

	public String getMessage() {
		return message;
	}

	@Override
	public String toString() {
		return MoreObjects.toStringHelper(this)
				.add("learningSessionId", learningSessionId)
				.add("message", message)
				.toString();
	}
}
