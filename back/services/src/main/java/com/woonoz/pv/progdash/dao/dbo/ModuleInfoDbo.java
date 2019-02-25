package com.woonoz.pv.progdash.dao.dbo;

public class ModuleInfoDbo {

	private String key; // module name
	private Integer nbrOfRules;
	private Long routeId;
	private Long productId;
	private Integer absPos;

	public ModuleInfoDbo(Long productId, String key, Long routeId , Integer nbrOfRules, Integer absPos) {
		this.key = key;
		this.nbrOfRules = nbrOfRules;
		this.routeId = routeId;
		this.productId = productId;
		this.absPos = absPos;
	}

	public String getKey() {
		return key;
	}

	public Integer getNbrOfRules() {
		return nbrOfRules;
	}

	public Long getRouteId() {
		return routeId;
	}

	public Long getProductId() {
		return productId;
	}

	public Integer getAbsPos() {
		return absPos;
	}
}
