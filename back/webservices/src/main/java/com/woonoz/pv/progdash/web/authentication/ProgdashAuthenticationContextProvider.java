package com.woonoz.pv.progdash.web.authentication;

import javax.inject.Inject;

import org.springframework.stereotype.Component;

import com.woonoz.auth.services.AuthenticationService;
import com.woonoz.pv.progdash.model.ProgdashUserDetails;

@Component
public class ProgdashAuthenticationContextProvider {

	@Inject private AuthenticationService authenticationService;

	public ProgdashUserDetails getAuthenticatedUser(){
		return (ProgdashUserDetails) authenticationService.getAuthenticatedUser();
	}
}
