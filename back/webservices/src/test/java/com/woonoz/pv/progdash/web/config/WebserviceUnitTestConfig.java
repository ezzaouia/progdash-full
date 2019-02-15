package com.woonoz.pv.progdash.web.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan(value = { "com.woonoz.web.exception.mapper", "com.woonoz.web.provider" })
public class WebserviceUnitTestConfig {
}