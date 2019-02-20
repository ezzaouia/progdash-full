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



}
