package com.woonoz.pv.progdash.dto;

import com.google.common.base.MoreObjects;

public class AuditDto {
	private Object error;
	private Object context;

	/**
	 * Private constructor for deserialization only
	 */
	@SuppressWarnings("unused")
	private AuditDto() {}

	public AuditDto(Object error, Object context){
		this.error = error;
		this.context = context;
	}

	public Object getError() {
		return error;
	}

	public Object getContext() {
		return context;
	}

	@Override public String toString() {
		return MoreObjects.toStringHelper(this)
				.add("error", error)
				.add("context", context)
				.toString();
	}
}
