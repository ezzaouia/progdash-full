package com.woonoz.pv.progdash.dto;

public class ModuleInfoDto {

	private String key; // module name
	private int index; // position
	private int nbrOfRules;
	private Long routeId;
	private Long productId;

	public ModuleInfoDto(String key, int index, int nbrOfRules, Long routeId, Long productId) {
		this.key = key;
		this.index = index;
		this.nbrOfRules = nbrOfRules;
		this.routeId = routeId;
		this.productId = productId;
	}

	public String getKey() {
		return key;
	}

	public int getIndex() {
		return index;
	}

	public int getNbrOfRules() {
		return nbrOfRules;
	}

	public Long getRouteId() {
		return routeId;
	}

	public Long getProductId() {
		return productId;
	}
}
