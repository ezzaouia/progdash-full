package com.woonoz.pv.progdash.model;

public enum UserRole {
	LEARNER(UserRoleConst.USER_LEARNER),
	ADMIN(UserRoleConst.USER_ADMIN),
	UNIVERSE_ADMIN(UserRoleConst.USER_UNIVERSE_ADMIN),
	SUPER_ADMIN(UserRoleConst.USER_SUPER_ADMIN);

	private final String value;

	UserRole(final String value) {
		this.value = value;
	}

	public static UserRole fromString(final String value) {
		for (final UserRole userRole : values()) {
			if (userRole.getValue().equals(value)) {
				return userRole;
			}
		}
		return null;
	}

	public String getValue() {
		return value;
	}
}
