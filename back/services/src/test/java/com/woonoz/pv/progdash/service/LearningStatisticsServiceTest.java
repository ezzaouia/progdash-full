package com.woonoz.pv.progdash.service;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;

import com.woonoz.pv.progdash.dao.mapper.LearningStatisticsMapper;
import com.woonoz.pv.progdash.dto.LearningSessionStatisticsDto;
import com.woonoz.service.services.AbstractMockServiceTest;

public class LearningStatisticsServiceTest extends AbstractMockServiceTest {

	private final static int USER_ID = 20561;

	@InjectMocks private LearningStatisticsService learningStatisticsService = new LearningStatisticsServiceImpl();
	@Mock private LearningStatisticsMapper learningStatisticsMapper;

	@Test
	public void getLearningSessionStatistics(){
		// GIVEN
		Mockito.when(learningStatisticsMapper.getLastSessionId(Mockito.eq(USER_ID))).thenReturn(1);
		// WHEN
		LearningSessionStatisticsDto dto = learningStatisticsService.getLearningSessionStatistics(USER_ID, "test");
		// THEN
		assertThat(dto).isNotNull();
		assertThat(dto.getLearningSessionId()).isEqualTo(1);
		assertThat(dto.getMessage()).isEqualTo("test");
	}
}
