package com.woonoz.pv.progdash.dao.dbo;

public class TrainingConnectionsDbo {

	private int userId;
	private String lastUsage;
	private int nbSessions;
	private float totalTrainingTime; //in minutes

	public int getUserId() {
		return userId;
	}

	public String getLastUsage() {
		return lastUsage;
	}

	public int getNbSessions() {
		return nbSessions;
	}

	public float getTotalTrainingTime() {
		return totalTrainingTime;
	}
}
