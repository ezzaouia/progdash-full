package com.woonoz.pv.progdash.dto;

public class UserDataInfoDto {

	private int id; // user id
	private DifferentialDto sum; // value

	public UserDataInfoDto(int id, DifferentialDto sum) {
		this.id = id;
		this.sum = sum;
	}

	public int getId() {
		return id;
	}

	public DifferentialDto getSum() {
		return sum;
	}
}
