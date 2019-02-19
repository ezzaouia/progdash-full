package com.woonoz.pv.progdash.dto;

import java.util.List;

public class AllStatisticsDto {

	private List<UserDataDto> users;
	private InsightDataDto insights;
	private List<ModuleInfoDto> modules;

	public List<UserDataDto> getUsers() {
		return users;
	}

	public void setUsers(List<UserDataDto> users) {
		this.users = users;
	}

	public InsightDataDto getInsights() {
		return insights;
	}

	public void setInsights(InsightDataDto insights) {
		this.insights = insights;
	}

	public List<ModuleInfoDto> getModules() {
		return modules;
	}

	public void setModules(List<ModuleInfoDto> modules) {
		this.modules = modules;
	}
}
