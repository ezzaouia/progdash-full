package com.woonoz.pv.progdash.service;

import java.util.Date;

import org.joda.time.DateTime;

public class Period {

	private DateTime today;
	private int nbDays;

	public Period(DateTime today, int nbDays) {
		this.today = today;
		this.nbDays = nbDays;
	}

	public Date getMainEndDate() {
		return today.toDate();
	}

	public Date getMainStartDate() {
		return today.minusDays(nbDays).toDate();
	}

	public Date getPreviousEndDate() {
		return today.minusDays(nbDays).toDate();
	}

	public Date getPreviousStartDate() {
		return today.minusDays(nbDays * 2).toDate();
	}
}
