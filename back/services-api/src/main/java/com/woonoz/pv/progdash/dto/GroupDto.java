package com.woonoz.pv.progdash.dto;

public class GroupDto {

	private int id;
	private String name;

	public GroupDto(int id, String name) {
		this.id = id;
		this.name = name;
	}

	public int getId() {
		return id;
	}

	public String getName() {
		return name;
	}
}
