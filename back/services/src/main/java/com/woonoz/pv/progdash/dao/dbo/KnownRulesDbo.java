package com.woonoz.pv.progdash.dao.dbo;

public class KnownRulesDbo {

	private int userId;
	private int knownRules;
	private int initiallyKnownRules;
	private int evaluatedRules;

	public int getUserId() {
		return userId;
	}

	public int getKnownRules() {
		return knownRules;
	}

	public int getInitiallyKnownRules() {
		return initiallyKnownRules;
	}

	public int getEvaluatedRules() {
		return evaluatedRules;
	}
}
