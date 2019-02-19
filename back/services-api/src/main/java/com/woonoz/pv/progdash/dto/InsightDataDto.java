package com.woonoz.pv.progdash.dto;

public class InsightDataDto {

	private InsightInfoDto lastWeek;
	private InsightInfoDto lastMonth;

	public InsightInfoDto getLastWeek() {
		return lastWeek;
	}

	public void setLastWeek(InsightInfoDto lastWeek) {
		this.lastWeek = lastWeek;
	}

	public InsightInfoDto getLastMonth() {
		return lastMonth;
	}

	public void setLastMonth(InsightInfoDto lastMonth) {
		this.lastMonth = lastMonth;
	}
}
