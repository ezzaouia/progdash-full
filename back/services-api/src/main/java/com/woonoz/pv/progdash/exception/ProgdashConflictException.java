package com.woonoz.pv.progdash.exception;

import com.google.common.collect.ImmutableMap;
import com.woonoz.exception.ConflictException;
import com.woonoz.exception.WoonozException;

public class ProgdashConflictException extends WoonozException implements ConflictException {

	public ProgdashConflictException(String code) {
		super(code);
	}

	public ProgdashConflictException(String code, String message) {
		super(code, message);
		this.setDetails(ImmutableMap.of("message", message));
	}
}
