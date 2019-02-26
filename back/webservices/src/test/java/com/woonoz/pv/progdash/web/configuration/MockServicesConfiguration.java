package com.woonoz.pv.progdash.web.configuration;

import org.mockito.Mockito;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.context.annotation.Profile;
import org.springframework.context.annotation.PropertySource;

import com.woonoz.auth.services.UserCredentialsService;
import com.woonoz.auth.session.services.UserActivityService;
import com.woonoz.pv.progdash.service.AuditService;
import com.woonoz.pv.progdash.service.LearningStatisticsService;
import com.woonoz.pv.progdash.service.TeacherActivityTraceService;

@Profile("test")
@Configuration
@PropertySource("classpath:application-test.properties")
public class MockServicesConfiguration {

	@Bean
	@Primary
	public LearningStatisticsService learningSessionStatisticsService() {
		return Mockito.mock(LearningStatisticsService.class);
	}

	@Bean
	@Primary
	public TeacherActivityTraceService teacherActivityTraceService() {
		return Mockito.mock(TeacherActivityTraceService.class);
	}

	@Bean
	@Primary
	public UserActivityService userActivityService() {
		return Mockito.mock(UserActivityService.class);
	}

	@Bean
	@Primary
	public UserCredentialsService userCredentialsService() {
		return Mockito.mock(UserCredentialsService.class);
	}

	@Bean
	@Primary
	public AuditService auditService() {
		return Mockito.mock(AuditService.class);
	}
}
