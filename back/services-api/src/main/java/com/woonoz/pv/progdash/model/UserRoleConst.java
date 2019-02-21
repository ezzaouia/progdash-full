package com.woonoz.pv.progdash.model;

/**
 * Constants defining the possible user roles.
 * An enumeration can't be used into the services @RolesAllowed annotation.
 */
public interface UserRoleConst {

	String USER_LEARNER = "learner";
	String USER_PACK_ADMIN = "pack-admin";
	String USER_ADMIN = "admin";
	String USER_UNIVERSE_ADMIN = "universe-admin";
	String USER_SUPER_ADMIN = "super-admin";

}
