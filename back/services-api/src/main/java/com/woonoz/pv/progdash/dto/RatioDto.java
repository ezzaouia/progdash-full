package com.woonoz.pv.progdash.dto;

public class RatioDto {

	private int sum;
	private int count;

	public RatioDto(int sum, int count) {
		this.sum = sum;
		this.count = count;
	}

	public int getSum() {
		return sum;
	}

	public int getCount() {
		return count;
	}
}
