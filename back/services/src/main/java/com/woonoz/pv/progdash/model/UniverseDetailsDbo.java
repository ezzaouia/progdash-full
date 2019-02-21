package com.woonoz.pv.progdash.model;

import com.google.common.base.MoreObjects;

public class UniverseDetailsDbo {

	private Integer universeId;
	private String role;

	public Integer getUniverseId() {
		return universeId;
	}

	public void setUniverseId(Integer universeId) {
		this.universeId = universeId;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	@Override
	public String toString() {
		return MoreObjects.toStringHelper(this)
				.add("universeId", universeId)
				.add("role", role)
				.toString();
	}
}
