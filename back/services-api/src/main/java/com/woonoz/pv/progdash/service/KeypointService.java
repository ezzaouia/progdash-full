package com.woonoz.pv.progdash.service;

import javax.annotation.Nullable;

public interface KeypointService {

	DataFromKeypoints processKeypoints(int areaId, @Nullable Integer groupId, int nbItemsForTop);

}
