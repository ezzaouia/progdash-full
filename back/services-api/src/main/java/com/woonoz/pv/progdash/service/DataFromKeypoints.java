package com.woonoz.pv.progdash.service;

import com.woonoz.pv.progdash.dto.TopNRulesDto;

public class DataFromKeypoints {

	private TopNRulesDto lastWeekTopRules;
	private TopNRulesDto lastMonthTopRules;

	public DataFromKeypoints(TopNRulesDto lastWeekTopRules, TopNRulesDto lastMonthTopRules) {
		this.lastWeekTopRules = lastWeekTopRules;
		this.lastMonthTopRules = lastMonthTopRules;
	}

	public TopNRulesDto getLastWeekTopRules() {
		return lastWeekTopRules;
	}

	public TopNRulesDto getLastMonthTopRules() {
		return lastMonthTopRules;
	}
}
