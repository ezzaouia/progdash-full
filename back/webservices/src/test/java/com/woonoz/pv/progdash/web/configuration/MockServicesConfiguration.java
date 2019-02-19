package com.woonoz.pv.progdash.web.configuration;

import org.mockito.Mockito;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.context.annotation.Profile;
import org.springframework.context.annotation.PropertySource;

import com.woonoz.pv.progdash.service.LearningSessionStatisticsService;
import com.woonoz.pv.progdash.service.TeacherActivityTraceService;

@Profile("test")
@Configuration
@PropertySource("classpath:application-test.properties")
public class MockServicesConfiguration {

	@Bean
	@Primary
	public LearningSessionStatisticsService learningSessionStatisticsService() {
		return Mockito.mock(LearningSessionStatisticsService.class);
	}

	@Bean
	@Primary
	public TeacherActivityTraceService teacherActivityTraceService() {
		return Mockito.mock(TeacherActivityTraceService.class);
	}
}
