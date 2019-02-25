package com.woonoz.pv.progdash.service;

import java.util.List;

import com.woonoz.pv.progdash.dto.TopNRulesDto;
import com.woonoz.pv.progdash.dto.UserDataInfoDto;

public class DataFromKeypoints {

	private TopNRulesDto lastWeekTopRules;
	private TopNRulesDto lastMonthTopRules;
	private List<UserDataInfoDto> lastWeekTopUsers;
	private List<UserDataInfoDto> lastMonthTopUsers;

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

	public List<UserDataInfoDto> getLastWeekTopUsers() {
		return lastWeekTopUsers;
	}

	public void setLastWeekTopUsers(List<UserDataInfoDto> lastWeekTopUsers) {
		this.lastWeekTopUsers = lastWeekTopUsers;
	}

	public List<UserDataInfoDto> getLastMonthTopUsers() {
		return lastMonthTopUsers;
	}

	public void setLastMonthTopUsers(List<UserDataInfoDto> lastMonthTopUsers) {
		this.lastMonthTopUsers = lastMonthTopUsers;
	}
}
