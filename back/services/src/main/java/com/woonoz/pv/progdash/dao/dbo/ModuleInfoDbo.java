package com.woonoz.pv.progdash.dao.dbo;

public class ModuleInfoDbo {

	private String key; // module name
	private int nbrOfRules;

	public ModuleInfoDbo(String key, int nbrOfRules) {
		this.key = key;
		this.nbrOfRules = nbrOfRules;
	}

	public String getKey() {
		return key;
	}

	public int getNbrOfRules() {
		return nbrOfRules;
	}
}
