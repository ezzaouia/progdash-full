package com.woonoz.pv.progdash.service;

import java.util.Collection;
import java.util.List;
import java.util.Map;

import com.woonoz.pv.progdash.dto.ProgressDto;

public interface ProgressService {

	Map<Integer, List<ProgressDto>> getUsersProgresses(Collection<Integer> userIds);
}
