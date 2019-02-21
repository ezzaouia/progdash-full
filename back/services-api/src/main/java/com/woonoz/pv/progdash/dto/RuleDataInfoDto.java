package com.woonoz.pv.progdash.dto;

public class RuleDataInfoDto {

	private int id; // keypoint id
	private String name; // rule name
	private int difficultyLevel; // average number of interactions on rule

	public RuleDataInfoDto(int id, String name, int difficultyLevel) {
		this.id = id;
		this.name = name;
		this.difficultyLevel = difficultyLevel;
	}

	public int getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public int getDifficultyLevel() {
		return difficultyLevel;
	}
}
