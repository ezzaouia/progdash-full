package com.woonoz.pv.progdash.dto;

public class InsightDataDto {

	private InsightInfoDto lastWeek;
	private InsightInfoDto lastMonth;

	public InsightDataDto(InsightInfoDto lastWeek, InsightInfoDto lastMonth) {
		this.lastWeek = lastWeek;
		this.lastMonth = lastMonth;
	}

	public InsightInfoDto getLastWeek() {
		return lastWeek;
	}

	public InsightInfoDto getLastMonth() {
		return lastMonth;
	}
}
