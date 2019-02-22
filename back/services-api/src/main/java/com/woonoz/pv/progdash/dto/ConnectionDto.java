package com.woonoz.pv.progdash.dto;

public class ConnectionDto {

	private int count; // number of connected users for the given date
	private String date; // format 'yyyy-mm-dd'

	public ConnectionDto(int count, String date) {
		this.count = count;
		this.date = date;
	}

	public int getCount() {
		return count;
	}

	public String getDate() {
		return date;
	}
}
