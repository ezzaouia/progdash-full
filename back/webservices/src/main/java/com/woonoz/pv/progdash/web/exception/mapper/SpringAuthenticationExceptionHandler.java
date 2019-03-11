package com.woonoz.pv.progdash.web.exception.mapper;

import javax.ws.rs.core.Response;
import javax.ws.rs.ext.ExceptionMapper;

import org.springframework.security.authentication.AccountExpiredException;
import org.springframework.security.authentication.AuthenticationCredentialsNotFoundException;
import org.springframework.security.authentication.CredentialsExpiredException;
import org.springframework.security.authentication.InsufficientAuthenticationException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.preauth.PreAuthenticatedCredentialsNotFoundException;
import org.springframework.security.web.authentication.rememberme.RememberMeAuthenticationException;

import com.woonoz.exception.CredentialsInvalidException;
import com.woonoz.web.exception.mapper.WoonozExceptionMapper;
import com.woonoz.web.exception.mapper.WoonozExceptionMapperImpl;

public class SpringAuthenticationExceptionHandler implements ExceptionMapper<AuthenticationException> {

	private WoonozExceptionMapper woonozExceptionDelegate = new WoonozExceptionMapperImpl();

	@Override
	public Response toResponse(AuthenticationException e) {
		if (e instanceof AccountExpiredException || e instanceof CredentialsExpiredException){
			return woonozExceptionDelegate.toResponse(new com.woonoz.exception.CredentialsExpiredException(e));
		} else if (e instanceof AuthenticationCredentialsNotFoundException || e instanceof InsufficientAuthenticationException
		|| e instanceof PreAuthenticatedCredentialsNotFoundException || e instanceof RememberMeAuthenticationException){
			return woonozExceptionDelegate.toResponse(new com.woonoz.exception.CredentialsRequiredException(e));
		} else {
			return woonozExceptionDelegate.toResponse(new CredentialsInvalidException(e));
		}
	}
}
