package com.woonoz.pv.progdash.web.controller;

import static org.mockito.Mockito.when;

import java.util.List;

import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.glassfish.hk2.utilities.Binder;
import org.glassfish.hk2.utilities.binding.AbstractBinder;
import org.json.JSONException;
import org.junit.Ignore;
import org.junit.Test;
import org.mockito.Mock;
import org.mockito.Mockito;

import com.google.common.collect.ImmutableList;
import com.woonoz.pv.progdash.dto.LearningSessionStatisticsDto;
import com.woonoz.pv.progdash.service.LearningSessionStatisticsService;
import com.woonoz.pv.progdash.web.config.WebserviceUnitTestConfig;
import com.woonoz.web.controller.AbstractUnitTestControllerTest;
import com.woonoz.web.controller.ResponseAssert;

@Ignore
public class LearningSessionStatisticsControllerTest extends AbstractUnitTestControllerTest {

	private static final int USER_ID = 1;

	@Mock private LearningSessionStatisticsService learningSessionStatisticsService;

	@Override
	protected Class<?>[] springConfigurations() {
		return new Class<?>[]{WebserviceUnitTestConfig.class};
	}

	@Override
	protected List<Object> getMockedControllers() {
		return ImmutableList.of(new LearningSessionStatisticsController());
	}

	@Override
	protected Binder getMockedServicesBinder() {
		return new AbstractBinder() {

			@Override
			protected void configure() {
				bind(learningSessionStatisticsService).to(LearningSessionStatisticsService.class);
			}
		};
	}

	@Override
	protected boolean securityConfig() {
		return false;
	}

	@Test
	public void getLearningSessionStatistics() throws JSONException {
		//GIVEN
		when(learningSessionStatisticsService.getLearningSessionStatistics(Mockito.eq(USER_ID), Mockito.eq("hello")))
				.thenReturn(new LearningSessionStatisticsDto(1, "Hello World"));

		//WHEN
		Response resp = target("learning/statistics/" + USER_ID).request(MediaType.APPLICATION_JSON).get();

		//THEN
		ResponseAssert.assertThat(resp).hasStrictJson("{\"learningSessionId\": 1,"
				+ "\"message\": \"Hello World\"}");
	}
}
