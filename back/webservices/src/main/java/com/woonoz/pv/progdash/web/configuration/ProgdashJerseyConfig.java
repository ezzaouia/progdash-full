package com.woonoz.pv.progdash.web.configuration;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.woonoz.service.DateProvider;
import com.woonoz.service.SystemDateProvider;
import com.woonoz.web.configuration.WoonozApiDefinition;

@Configuration
public class ProgdashJerseyConfig {

	@Bean
	@Qualifier("coreDateProvider")
	public DateProvider coreDateProvider(){
		return new SystemDateProvider();
	}

	@Bean
	public WoonozApiDefinition woonozApiDefinition(){
		return new WoonozApiDefinition();
	}
}
