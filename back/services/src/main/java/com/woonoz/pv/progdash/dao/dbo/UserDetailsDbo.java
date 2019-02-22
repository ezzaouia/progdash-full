package com.woonoz.pv.progdash.dao.dbo;

import java.util.List;

import com.google.common.base.MoreObjects;
import com.woonoz.auth.model.UserId;

public class UserDetailsDbo {

	private UserId userId;
	private String pseudo;
	private List<AreaDetailsDbo> areaDetails;
	private List<UniverseDetailsDbo> universeDetails;
	private boolean superAdmin;
	private int status;

	public UserId getUserId() {
		return userId;
	}

	public String getPseudo() {
		return pseudo;
	}

	public void setPseudo(String pseudo) {
		this.pseudo = pseudo;
	}

	public void setUserId(UserId userId) {
		this.userId = userId;
	}

	public List<AreaDetailsDbo> getAreaDetails() {
		return areaDetails;
	}

	public void setAreaDetails(List<AreaDetailsDbo> areaDetails) {
		this.areaDetails = areaDetails;
	}

	public boolean isSuperAdmin() {
		return superAdmin;
	}

	public List<UniverseDetailsDbo> getUniverseDetails() {
		return universeDetails;
	}

	public void setUniverseDetails(List<UniverseDetailsDbo> universeDetails) {
		this.universeDetails = universeDetails;
	}

	public void setSuperAdmin(boolean superAdmin) {
		this.superAdmin = superAdmin;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return MoreObjects.toStringHelper(this)
				.add("userId", userId)
				.add("areaDetails", areaDetails)
				.add("universeDetails", universeDetails)
				.add("superAdmin", superAdmin)
				.add("status", status)
				.add("pseudo", pseudo)
				.toString();
	}
}
