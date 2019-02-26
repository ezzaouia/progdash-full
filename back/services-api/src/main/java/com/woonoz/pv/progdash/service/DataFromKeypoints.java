package com.woonoz.pv.progdash.service;

import java.util.HashMap;
import java.util.Map;

import com.woonoz.pv.progdash.dto.TopNRulesDto;
import com.woonoz.pv.progdash.dto.UserDataDto;

public class DataFromKeypoints {

	private TopNRulesDto lastWeekTopRules;
	private TopNRulesDto lastMonthTopRules;

	private Map<Integer, TopNRulesDto> usersMap = new HashMap<>();

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

	public Map<Integer, TopNRulesDto> getUsersMap() {
		return usersMap;
	}

	public void setUsersMap(Map<Integer, TopNRulesDto> usersMap) {
		this.usersMap = usersMap;
	}
}
