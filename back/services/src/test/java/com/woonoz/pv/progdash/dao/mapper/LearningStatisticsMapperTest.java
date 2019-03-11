package com.woonoz.pv.progdash.dao.mapper;

import static org.assertj.core.api.Assertions.assertThat;

import javax.inject.Inject;

import org.junit.Test;

import com.github.springtestdbunit.annotation.DatabaseSetup;
import com.woonoz.pv.progdash.dao.AbstractProgdashDaoTest;

@DatabaseSetup({ "woonoz-membre.xml", "learning-session.xml" })
public class LearningStatisticsMapperTest extends AbstractProgdashDaoTest {

	private final static int USER_ID = 20561;
	private final static int SESSION_ID = 1;

	@Inject private LearningStatisticsMapper learningStatisticsMapper;

	@Test
	public void getLastSessionId(){
		assertThat(learningStatisticsMapper.getLastSessionId(USER_ID)).isEqualTo(SESSION_ID);
	}
}
