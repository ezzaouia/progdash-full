package com.woonoz.pv.progdash.dto;

import java.util.List;

public class TopNUsersDto {

	private List<UserDataInfoDto> score;
	private List<UserDataInfoDto> time;
	private List<UserDataInfoDto> help;
	private List<UserDataInfoDto> dropout;

	public List<UserDataInfoDto> getScore() {
		return score;
	}

	public void setScore(List<UserDataInfoDto> score) {
		this.score = score;
	}

	public List<UserDataInfoDto> getTime() {
		return time;
	}

	public void setTime(List<UserDataInfoDto> time) {
		this.time = time;
	}

	public List<UserDataInfoDto> getHelp() {
		return help;
	}

	public void setHelp(List<UserDataInfoDto> help) {
		this.help = help;
	}

	public List<UserDataInfoDto> getDropout() {
		return dropout;
	}

	public void setDropout(List<UserDataInfoDto> dropout) {
		this.dropout = dropout;
	}
}
