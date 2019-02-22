package com.woonoz.pv.progdash.dao.dbo;

import java.util.List;

public class UserRouteProductsDbo {

	private int userId;
	private List<Integer> productIds;

	public int getUserId() {
		return userId;
	}

	public List<Integer> getProductIds() {
		return productIds;
	}
}
