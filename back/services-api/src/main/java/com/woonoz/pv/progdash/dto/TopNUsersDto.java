package com.woonoz.pv.progdash.dto;

import java.util.List;

public class TopNUsersDto {

	private List<UserDataInfoDto> score;
	private List<UserDataInfoDto> time;
	private List<UserDataInfoDto> help;
	private List<UserDataInfoDto> dropout;

	public TopNUsersDto(List<UserDataInfoDto> score, List<UserDataInfoDto> time, List<UserDataInfoDto> help, List<UserDataInfoDto> dropout) {
		this.score = score;
		this.time = time;
		this.help = help;
		this.dropout = dropout;
	}

	public List<UserDataInfoDto> getScore() {
		return score;
	}

	public List<UserDataInfoDto> getTime() {
		return time;
	}

	public List<UserDataInfoDto> getHelp() {
		return help;
	}

	public List<UserDataInfoDto> getDropout() {
		return dropout;
	}
}
