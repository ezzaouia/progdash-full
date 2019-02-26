package com.woonoz.pv.progdash.service;

import static java.util.stream.Collectors.summingDouble;
import static java.util.stream.Collectors.toMap;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import javax.inject.Inject;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.woonoz.pv.progdash.dao.dbo.ProgressDbo;
import com.woonoz.pv.progdash.dao.mapper.ProgressMapper;
import com.woonoz.pv.progdash.dto.ProgressDto;

@Service
@Transactional(propagation = Propagation.MANDATORY)
public class ProgressServiceImpl implements ProgressService {

	@Inject private ProgressMapper progressMapper;

	private static final SimpleDateFormat SDF = new SimpleDateFormat("yyyy-MM-dd");

	@Override public Map<Integer, List<ProgressDto>> getUsersProgresses(Collection<Integer> userIds) {
		List<ProgressDbo> progressDbos = progressMapper.getProgressData(userIds);

		Map<Integer, List<ProgressDto>> usersProgressDtos = new HashMap<>();

		for (Integer userId : userIds) {
			Map<Date, Double> progressesByDate = progressDbos.stream()
					// where user is userId
			        .filter(progressDbo -> progressDbo.getUserId() == userId)
					// group by date and sum the max weight
					.collect(
							Collectors.groupingBy(
									ProgressDbo::getLastdate,
									summingDouble(ProgressDbo::getMaxWeight)
					)
			).entrySet().stream()
					// sort by date
					.sorted(Map.Entry.comparingByKey())
					.collect(
							toMap(Map.Entry::getKey, Map.Entry::getValue, (e1, e2) -> e2,
							LinkedHashMap::new));

			// write in Dto and make score cumulative
			List<ProgressDto> progressDtos = new ArrayList<>();
			float cumulativeWeight = 0f;
			for (Date date : progressesByDate.keySet()) {
				cumulativeWeight += progressesByDate.get(date);
				progressDtos.add(new ProgressDto(SDF.format(date), cumulativeWeight));
			}
			usersProgressDtos.put(userId, progressDtos);
		}

		return usersProgressDtos;
	}
}
