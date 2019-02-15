package com.woonoz.pv.progdash.service;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;

import com.woonoz.pv.progdash.dao.mapper.LearningSessionStatisticsMapper;
import com.woonoz.pv.progdash.dto.LearningSessionStatisticsDto;
import com.woonoz.service.services.AbstractMockServiceTest;

public class LearningSessionStatisticsServiceTest extends AbstractMockServiceTest {

	private final static int USER_ID = 20561;

	@InjectMocks private LearningSessionStatisticsService learningSessionStatisticsService = new LearningSessionStatisticsServiceImpl();
	@Mock private LearningSessionStatisticsMapper learningSessionStatisticsMapper;

	@Test
	public void getLearningSessionStatistics(){
		// GIVEN
		Mockito.when(learningSessionStatisticsMapper.getLastSessionId(Mockito.eq(USER_ID))).thenReturn(1);
		// WHEN
		LearningSessionStatisticsDto dto = learningSessionStatisticsService.getLearningSessionStatistics(USER_ID, "test");
		// THEN
		assertThat(dto).isNotNull();
		assertThat(dto.getLearningSessionId()).isEqualTo(1);
		assertThat(dto.getMessage()).isEqualTo("test");
	}
}
