package com.woonoz.pv.progdash.dao.dbo;

public class UserTrainingTimeDbo {

	private int userId;
	private float totalTrainingTime; //in minutes

	public UserTrainingTimeDbo(Integer userId, Float totalTrainingTime) {
		this.userId = userId;
		this.totalTrainingTime = totalTrainingTime;
	}

	public int getUserId() {
		return userId;
	}

	public float getTotalTrainingTime() {
		return totalTrainingTime;
	}
}
