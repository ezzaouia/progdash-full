package com.woonoz.pv.progdash.dto;

import java.util.List;

public class TopNRulesDto {

	private List<RuleDataInfoDto> focused;
	private List<RuleDataInfoDto> acquired;
	private List<RuleDataInfoDto> known;

	public TopNRulesDto(List<RuleDataInfoDto> focused, List<RuleDataInfoDto> acquired, List<RuleDataInfoDto> known) {
		this.focused = focused;
		this.acquired = acquired;
		this.known = known;
	}

	public List<RuleDataInfoDto> getFocused() {
		return focused;
	}

	public List<RuleDataInfoDto> getAcquired() {
		return acquired;
	}

	public List<RuleDataInfoDto> getKnown() {
		return known;
	}
}
