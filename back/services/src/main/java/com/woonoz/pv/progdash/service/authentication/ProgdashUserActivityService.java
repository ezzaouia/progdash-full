package com.woonoz.pv.progdash.service.authentication;

import java.util.Date;

import javax.inject.Inject;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.google.common.base.Optional;
import com.google.common.collect.Range;
import com.google.common.collect.RangeSet;
import com.google.common.collect.TreeRangeSet;
import com.woonoz.auth.model.UserId;
import com.woonoz.auth.session.services.UserActivityService;
import com.woonoz.library.tools.date.DateUtils;
import com.woonoz.pv.progdash.dao.mapper.UserActivityMapper;
import com.woonoz.pv.progdash.dao.dbo.LearningSessionTimeDbo;

@Service
@Transactional(readOnly = true)
public class ProgdashUserActivityService implements UserActivityService {
	@Inject private UserActivityMapper userActivityMapper;

	@Override
	public int computeUserActivityTimeInSec(UserId userId, Optional startDate, Optional endDate) {
		return userActivityMapper.computeLearningTimeSpentBetween(userId, (Date)startDate.orNull(),
				(Date)endDate.orNull(), startDate.isPresent() && endDate.isPresent());
	}

	@Override
	public RangeSet<Date> listUserActivityDateRangeSet(UserId userId, Optional startDate, Optional endDate) {
		return toDateRangeSet(userActivityMapper.getLearningSessionTimeBetween(userId, (Date)startDate.orNull(),
				(Date)endDate.orNull(), startDate.isPresent() && endDate.isPresent()));
	}

	private static RangeSet<Date> toDateRangeSet(Iterable<LearningSessionTimeDbo> sessions) {
		final RangeSet<Date> rangeSet = TreeRangeSet.create();
		for (LearningSessionTimeDbo session : sessions) {
			rangeSet.add(Range.closed(session.getStartDate(), DateUtils.addSeconds(session.getStartDate(), session.getTimeSpent())));
		}
		return rangeSet;
	}
}
