package com.woonoz.pv.progdash.dto;

public class ProgressDto {

	private String date;
	private float sumscore;
	private String moduleName;

	public ProgressDto(String date, float sumscore, String moduleName) {
		this.date = date;
		this.sumscore = sumscore;
		this.moduleName = moduleName;
	}

	public String getDate() {
		return date;
	}

	public float getSumscore() {
		return sumscore;
	}

	public String getModuleName() {
		return moduleName;
	}
}
