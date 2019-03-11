package com.woonoz.pv.progdash.web.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

/**
 * Config classes for aop in progdash and monitoring
 */
@Configuration
@EnableAspectJAutoProxy(proxyTargetClass = true)
public class ProgdashAopConfig {

}
