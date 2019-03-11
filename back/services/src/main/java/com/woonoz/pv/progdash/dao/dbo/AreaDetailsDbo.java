package com.woonoz.pv.progdash.dao.dbo;

import com.google.common.base.MoreObjects;

public class AreaDetailsDbo {

	private Integer areaId;
	private String role;
	private Integer universeId;

	public Integer getAreaId() {
		return areaId;
	}

	public void setAreaId(Integer areaId) {
		this.areaId = areaId;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public Integer getUniverseId() {
		return universeId;
	}

	public void setUniverseId(Integer universeId) {
		this.universeId = universeId;
	}

	@Override
	public String toString() {
		return MoreObjects.toStringHelper(this)
				.add("areaId", areaId)
				.add("role", role)
				.add("universeId", universeId)
				.toString();
	}
}
