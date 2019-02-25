package com.woonoz.pv.progdash.service;

import com.woonoz.pv.progdash.dto.TopNRulesDto;

public class DataFromKeypoints {

	private TopNRulesDto lastWeekTopRules;
	private TopNRulesDto lastMonthTopRules;

	public void setLastWeekTopRules(TopNRulesDto lastWeekTopRules) {
		this.lastWeekTopRules = lastWeekTopRules;
	}

	public void setLastMonthTopRules(TopNRulesDto lastMonthTopRules) {
		this.lastMonthTopRules = lastMonthTopRules;
	}

	public TopNRulesDto getLastWeekTopRules() {
		return lastWeekTopRules;
	}

	public TopNRulesDto getLastMonthTopRules() {
		return lastMonthTopRules;
	}
}
