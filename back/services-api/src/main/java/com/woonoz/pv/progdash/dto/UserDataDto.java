package com.woonoz.pv.progdash.dto;

import java.util.List;

public class UserDataDto {

	private static final String UNSTARTED = "pas commencé";

	private int id;
	private String fullName;
	private int time; // total training time in minutes
	private RatioDto score; // nb of rules known / nb of rules in the scenario
	private RatioDto initialLevel; // nb of rules initiallyKnown / nb of rules evaluated
	private Integer initialEval; // initialEvaluation score, or null if no initial evaluation was passed
	private String lastConnection; // format 'yyyy-mm-dd'
	private int connectionsNbr; // number of learning sessions of type 'learn'
	private String lastModule; // name of the highest module with training, or UNSTARTED
	private TopNRulesDto topNRules;
	private List<ProgressDto> progData;

	public UserDataDto(int id, String fullName) {
		this.id = id;
		this.fullName = fullName;
		this.time = 0;
		this.connectionsNbr = 0;
	}

	public int getId() {
		return id;
	}

	public String getFullName() {
		return fullName;
	}

	public int getTime() {
		return time;
	}

	public RatioDto getScore() {
		return score;
	}

	public RatioDto getInitialLevel() {
		return initialLevel;
	}

	public Integer getInitialEval() {
		return initialEval;
	}

	public String getLastConnection() {
		return lastConnection;
	}

	public int getConnectionsNbr() {
		return connectionsNbr;
	}

	public String getLastModule() {
		return lastModule;
	}

	public TopNRulesDto getTopNRules() {
		return topNRules;
	}

	public List<ProgressDto> getProgData() {
		return progData;
	}

	public void setTime(int time) {
		this.time = time;
	}

	public void setScore(RatioDto score) {
		this.score = score;
	}

	public void setInitialLevel(RatioDto initialLevel) {
		this.initialLevel = initialLevel;
	}

	public void setInitialEval(Integer initialEval) {
		this.initialEval = initialEval;
	}

	public void setLastConnection(String lastConnection) {
		this.lastConnection = lastConnection;
	}

	public void setConnectionsNbr(int connectionsNbr) {
		this.connectionsNbr = connectionsNbr;
	}

	public void setLastModule(String lastModule) {
		this.lastModule = lastModule;
	}

	public void setTopNRules(TopNRulesDto topNRules) {
		this.topNRules = topNRules;
	}

	public void setProgData(List<ProgressDto> progData) {
		this.progData = progData;
	}
}
