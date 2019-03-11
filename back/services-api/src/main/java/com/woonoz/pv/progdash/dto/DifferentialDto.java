package com.woonoz.pv.progdash.dto;

public class DifferentialDto {

	private int sum; // value aver a period of time
	private int sumd; // diff value compared to the previous period of time

	public DifferentialDto(int sum, int sumd) {
		this.sum = sum;
		this.sumd = sumd;
	}

	public int getSum() {
		return sum;
	}

	public int getSumd() {
		return sumd;
	}
}
