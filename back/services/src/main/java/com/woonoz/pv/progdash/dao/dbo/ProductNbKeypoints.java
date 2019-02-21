package com.woonoz.pv.progdash.dao.dbo;

public class ProductNbKeypoints {

	private Integer productId;
	private Integer nbKeypoints;

	public ProductNbKeypoints(Integer productId, Integer nbKeypoints) {
		this.productId = productId;
		this.nbKeypoints = nbKeypoints;
	}

	public Integer getProductId() {
		return productId;
	}

	public Integer getNbKeypoints() {
		return nbKeypoints;
	}
}
