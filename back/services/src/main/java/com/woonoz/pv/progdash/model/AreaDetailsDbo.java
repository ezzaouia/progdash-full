package com.woonoz.pv.progdash.model;

import com.google.common.base.MoreObjects;

public class AreaDetailsDbo {

	private Integer areaId;
	private String role;

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

	@Override
	public String toString() {
		return MoreObjects.toStringHelper(this)
				.add("areaId", areaId)
				.add("role", role)
				.toString();
	}
}
