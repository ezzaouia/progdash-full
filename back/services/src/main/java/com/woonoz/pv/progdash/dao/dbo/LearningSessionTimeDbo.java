package com.woonoz.pv.progdash.dao.dbo;

import java.util.Date;

import com.google.common.base.MoreObjects;

public class LearningSessionTimeDbo {

	private int learningSessionId;
	private Date startDate;
	private int timeSpent;

	public int getLearningSessionId() {
		return learningSessionId;
	}

	public void setLearningSessionId(int learningSessionId) {
		this.learningSessionId = learningSessionId;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public int getTimeSpent() {
		return timeSpent;
	}

	public void setTimeSpent(int timeSpent) {
		this.timeSpent = timeSpent;
	}

	@Override
	public String toString() {
		return MoreObjects.toStringHelper(this)
				.add("learningSessionId", learningSessionId)
				.add("startDate", startDate)
				.add("timeSpent", timeSpent)
				.toString();
	}
}
