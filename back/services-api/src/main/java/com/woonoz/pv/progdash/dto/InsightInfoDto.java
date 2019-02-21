package com.woonoz.pv.progdash.dto;

import java.util.List;

public class InsightInfoDto {

	private DifferentialDto time; // total training time over the period
	private DifferentialDto score; // number of rules learned over the period
	private DifferentialDto activeUsers; // number of active users over the period
	private DifferentialDto inactiveUsers; // number of inactive users over the period
	private List<ConnectionDto> connections; // number of connections per day over the period
	private TopNRulesDto topNRules;
	private TopNUsersDto topNUsers;

	public DifferentialDto getTime() {
		return time;
	}

	public void setTime(DifferentialDto time) {
		this.time = time;
	}

	public DifferentialDto getScore() {
		return score;
	}

	public void setScore(DifferentialDto score) {
		this.score = score;
	}

	public DifferentialDto getActiveUsers() {
		return activeUsers;
	}

	public void setActiveUsers(DifferentialDto activeUsers) {
		this.activeUsers = activeUsers;
	}

	public DifferentialDto getInactiveUsers() {
		return inactiveUsers;
	}

	public void setInactiveUsers(DifferentialDto inactiveUsers) {
		this.inactiveUsers = inactiveUsers;
	}

	public List<ConnectionDto> getConnections() {
		return connections;
	}

	public void setConnections(List<ConnectionDto> connections) {
		this.connections = connections;
	}

	public TopNRulesDto getTopNRules() {
		return topNRules;
	}

	public void setTopNRules(TopNRulesDto topNRules) {
		this.topNRules = topNRules;
	}

	public TopNUsersDto getTopNUsers() {
		return topNUsers;
	}

	public void setTopNUsers(TopNUsersDto topNUsers) {
		this.topNUsers = topNUsers;
	}
}
