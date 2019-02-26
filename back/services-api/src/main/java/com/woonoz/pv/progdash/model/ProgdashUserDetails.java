package com.woonoz.pv.progdash.model;

import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;

import com.woonoz.auth.model.WoonozUserDetails;

public class ProgdashUserDetails extends WoonozUserDetails {

	private final UserDetails userDetails;

	public ProgdashUserDetails(String username, String passwordHash, boolean enabled, Collection<? extends GrantedAuthority> authorities,
			UserDetails userDetails) {
		super(username, passwordHash, enabled, authorities, userDetails != null ? userDetails.getUserId() : null);
		this.userDetails = userDetails;
	}

	public UserDetails getUserDetailsDbo() {
		return userDetails;
	}
}
