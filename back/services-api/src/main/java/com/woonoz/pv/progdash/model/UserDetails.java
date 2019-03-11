package com.woonoz.pv.progdash.model;

import java.util.HashMap;
import java.util.Map;

import com.google.common.base.MoreObjects;
import com.woonoz.auth.model.UserId;

public class UserDetails {
	public static final int INACTIVE_STATUS = 0,
			ACTIVE_STATUS = 1;

	private final UserId userId;
	private final String pseudo;
	private final Map<AreaDetails, UserRole> areaRoles = new HashMap<>();
	private final Map<Integer, UserRole> universeRoles = new HashMap<>();
	private final boolean superAdmin;
	private final int status;

	public UserDetails(UserId userId, String pseudo, boolean superAdmin, int status) {
		this.userId = userId;
		this.pseudo = pseudo;
		this.superAdmin = superAdmin;
		this.status = status;
	}

	public UserId getUserId() {
		return userId;
	}

	public String getPseudo() {
		return pseudo;
	}

	public boolean isSuperAdmin() {
		return superAdmin;
	}

	public int getStatus() {
		return status;
	}

	public Map<AreaDetails, UserRole> getAreaRoles() {
		return areaRoles;
	}

	public Map<Integer, UserRole> getUniverseRoles() {
		return universeRoles;
	}

	@Override
	public String toString() {
		return MoreObjects.toStringHelper(this)
				.add("userId", userId)
				.add("areaRoles", areaRoles)
				.add("universeRoles", universeRoles)
				.add("superAdmin", superAdmin)
				.add("status", status)
				.add("pseudo", pseudo)
				.toString();
	}
}
