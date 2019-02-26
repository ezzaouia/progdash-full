package com.woonoz.pv.progdash.dao.dbo;

import java.util.Date;

public class ProgressDbo {

	private int userId;
	private int keypointId;
	private Float maxWeight;
	private Date lastdate;
	private String productName;

	public int getUserId() {
		return userId;
	}

	public int getKeypointId() {
		return keypointId;
	}

	public Float getMaxWeight() {
		return maxWeight;
	}

	public Date getLastdate() {
		return lastdate;
	}

	public String getProductName() {
		return productName;
	}
}
