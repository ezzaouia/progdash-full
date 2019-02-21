package com.woonoz.pv.progdash.mongodb.model;

import java.util.Date;
import java.util.Map;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import com.google.common.base.MoreObjects;

@Document(collection = "audit")
public class Audit {

	/**
	 * Standard mongodb name for the id to retreive records
	 */
	@Id
	public String id;
	/**
	 * We assume that we have a field in mongodb with this same name
	 */
	public Object error;
	public Object context;

	public Audit(Object error, Object context){
		this.error = error;
		this.context = context;
	}

	public Audit(String id, Object error, Object context){
		this.id = id;
		this.error = error;
		this.context = context;
	}

	@Override public String toString() {
		return MoreObjects.toStringHelper(this)
				.add("id", id)
				.add("error", error)
				.add("context", context)
				.toString();
	}
}
