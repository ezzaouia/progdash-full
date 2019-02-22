package com.woonoz.pv.progdash.dto;

public class GroupDto {

	private int id;
	private String name;
	private int nbUsers;

	public GroupDto(int id, String name, int nbUsers) {
		this.id = id;
		this.name = name;
		this.nbUsers = nbUsers;
	}

	public int getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public int getNbUsers() {
		return nbUsers;
	}
}
