package com.woonoz.pv.progdash.dto;

public class ProgressDto {

	private String date;
	private float sumscore;

	public ProgressDto(String date, float sumscore) {
		this.date = date;
		this.sumscore = sumscore;
	}

	public String getDate() {
		return date;
	}

	public float getSumscore() {
		return sumscore;
	}
}
