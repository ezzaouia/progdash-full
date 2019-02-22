package com.woonoz.pv.progdash.dto;

public class ModuleInfoDto {

	private String key; // module name
	private int index; // position
	private int nbrOfRules;

	public ModuleInfoDto(String key, int index, int nbrOfRules) {
		this.key = key;
		this.index = index;
		this.nbrOfRules = nbrOfRules;
	}

	public String getKey() {
		return key;
	}

	public int getIndex() {
		return index;
	}

	public int getNbrOfRules() {
		return nbrOfRules;
	}
}
