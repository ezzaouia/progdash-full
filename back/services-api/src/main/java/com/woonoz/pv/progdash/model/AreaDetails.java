package com.woonoz.pv.progdash.model;

import java.util.Objects;

import com.google.common.base.MoreObjects;

public class AreaDetails {

	private final int areaId;
	private final Integer universeId;

	public AreaDetails(int areaId, Integer universeId) {
		this.areaId = areaId;
		this.universeId = universeId;
	}

	public int getAreaId() {
		return areaId;
	}

	public Integer getUniverseId() {
		return universeId;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;
		AreaDetails that = (AreaDetails) o;
		return areaId == that.areaId;
	}

	@Override
	public int hashCode() {
		return Objects.hash(areaId);
	}

	@Override
	public String toString() {
		return MoreObjects.toStringHelper(this)
				.add("areaId", areaId)
				.add("universeId", universeId)
				.toString();
	}
}
