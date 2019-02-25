package com.woonoz.pv.progdash.dao.dbo;

import java.util.Date;

public class KeypointPracticeDbo {

	private int userId;
	private int keypointId;
	private int chapterId;
	private String chapterName;
	private float maxWeight;
	private float initialWeight;
	private int nbInteractions;
	private Date lastPracticeDate;

	@SuppressWarnings("unused") //required for Mybatis
	public KeypointPracticeDbo() {
	}

	public KeypointPracticeDbo(int userId, int keypointId, int chapterId, String chapterName, float maxWeight, float initialWeight, int nbInteractions, Date lastPracticeDate) {
		this.userId = userId;
		this.keypointId = keypointId;
		this.chapterId = chapterId;
		this.chapterName = chapterName;
		this.maxWeight = maxWeight;
		this.initialWeight = initialWeight;
		this.nbInteractions = nbInteractions;
		this.lastPracticeDate = lastPracticeDate;
	}

	public int getUserId() {
		return userId;
	}

	public int getKeypointId() {
		return keypointId;
	}

	public int getChapterId() {
		return chapterId;
	}

	public String getChapterName() {
		return chapterName;
	}

	public float getMaxWeight() {
		return maxWeight;
	}

	public float getInitialWeight() {
		return initialWeight;
	}

	public int getNbInteractions() {
		return nbInteractions;
	}

	public Date getLastPracticeDate() {
		return lastPracticeDate;
	}
}
