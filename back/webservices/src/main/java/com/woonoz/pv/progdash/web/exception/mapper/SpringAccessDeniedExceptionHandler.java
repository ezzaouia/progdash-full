package com.woonoz.pv.progdash.web.exception.mapper;

import javax.ws.rs.core.Response;
import javax.ws.rs.ext.ExceptionMapper;

import org.springframework.security.access.AccessDeniedException;

import com.woonoz.web.exception.mapper.WoonozExceptionMapper;
import com.woonoz.web.exception.mapper.WoonozExceptionMapperImpl;

public class SpringAccessDeniedExceptionHandler implements ExceptionMapper<AccessDeniedException> {

	private WoonozExceptionMapper woonozExceptionDelegate = new WoonozExceptionMapperImpl();

	@Override
	public Response toResponse(AccessDeniedException e) {
		return woonozExceptionDelegate.toResponse(new com.woonoz.exception.AccessDeniedException(e));
	}
}
