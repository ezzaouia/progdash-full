package com.woonoz.pv.progdash.web.configuration;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.context.annotation.Profile;

import com.woonoz.auth.configuration.MethodWebSecurityConfig;
import com.woonoz.auth.session.cookie.configuration.WoonozCookieAuthenticationConfig;
import com.woonoz.web.HttpRequestContextProvider;
import com.woonoz.web.SpringWebHttpRequestContextProvider;

@Profile({"prod","dev"})
@Configuration
@Import({WoonozCookieAuthenticationConfig.class, MethodWebSecurityConfig.class})
public class ProgdashAuthenticationConfig {

	@Bean
	@Qualifier("coreDateProvider")
	public com.woonoz.service.DateProvider coreDateProvider(){
		return new com.woonoz.service.SystemDateProvider();
	}

	@Bean
	public HttpRequestContextProvider httpRequestContextProvider(){
		return new SpringWebHttpRequestContextProvider();
	}
}
