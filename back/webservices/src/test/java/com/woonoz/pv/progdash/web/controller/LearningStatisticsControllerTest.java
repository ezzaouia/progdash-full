package com.woonoz.pv.progdash.web.controller;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.when;

import org.json.JSONException;
import org.junit.Ignore;
import org.junit.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.woonoz.pv.progdash.dto.LearningSessionStatisticsDto;
import com.woonoz.pv.progdash.service.LearningStatisticsService;
import com.woonoz.pv.progdash.web.core.AbstractProgdashControllerTest;
import com.woonoz.pv.progdash.web.core.ResponseAssert;

@Ignore
public class LearningStatisticsControllerTest extends AbstractProgdashControllerTest {

	private static final int USER_ID = 1;

	@Autowired
	private LearningStatisticsService learningStatisticsService;

	@Test
	public void getLearningSessionStatistics() throws JSONException {
		//GIVEN
		when(learningStatisticsService.getLearningSessionStatistics(Mockito.eq(USER_ID), Mockito.anyString()))
				.thenReturn(new LearningSessionStatisticsDto(1, "Hello World"));

		//WHEN
		ResponseEntity<String> resp = getResponseAsStringFor("/learning/statistics/" + USER_ID);

		//THEN
		assertThat(resp.getStatusCode()).isEqualTo(HttpStatus.OK);
		ResponseAssert.assertThat(resp).hasStrictJson("{\"learningSessionId\": 1,"
				+ "\"message\": \"Hello World\"}");
	}
}
