package com.woonoz.pv.progdash.service;

import java.util.HashMap;
import java.util.Map;

import java.util.List;

import com.woonoz.pv.progdash.dto.TopNRulesDto;
import com.woonoz.pv.progdash.dto.UserDataInfoDto;

public class DataFromKeypoints {

	private TopNRulesDto lastWeekTopRules;
	private TopNRulesDto lastMonthTopRules;
	private List<UserDataInfoDto> lastWeekTopUsersHelp;
	private List<UserDataInfoDto> lastMonthTopUsersHelp;
	private List<UserDataInfoDto> lastWeekTopUsersScore;
	private List<UserDataInfoDto> lastMonthTopUsersScore;

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

	public List<UserDataInfoDto> getLastWeekTopUsersHelp() {
		return lastWeekTopUsersHelp;
	}

	public void setLastWeekTopUsersHelp(List<UserDataInfoDto> lastWeekTopUsersHelp) {
		this.lastWeekTopUsersHelp = lastWeekTopUsersHelp;
	}

	public List<UserDataInfoDto> getLastMonthTopUsersHelp() {
		return lastMonthTopUsersHelp;
	}

	public void setLastMonthTopUsersHelp(List<UserDataInfoDto> lastMonthTopUsersHelp) {
		this.lastMonthTopUsersHelp = lastMonthTopUsersHelp;
	}

	public List<UserDataInfoDto> getLastWeekTopUsersScore() {
		return lastWeekTopUsersScore;
	}

	public void setLastWeekTopUsersScore(List<UserDataInfoDto> lastWeekTopUsersScore) {
		this.lastWeekTopUsersScore = lastWeekTopUsersScore;
	}

	public List<UserDataInfoDto> getLastMonthTopUsersScore() {
		return lastMonthTopUsersScore;
	}

	public void setLastMonthTopUsersScore(List<UserDataInfoDto> lastMonthTopUsersScore) {
		this.lastMonthTopUsersScore = lastMonthTopUsersScore;
	}

	public Map<Integer, TopNRulesDto> getUsersMap() {
		return usersMap;
	}

	public void setUsersMap(Map<Integer, TopNRulesDto> usersMap) {
		this.usersMap = usersMap;
	}
}
