package com.woonoz.pv.progdash.web.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.woonoz.web.configuration.WoonozApiDefinition;

@Configuration
public class ProgdashJerseyConfig {

	@Bean
	public WoonozApiDefinition woonozApiDefinition(){
		return new WoonozApiDefinition();
	}
}
