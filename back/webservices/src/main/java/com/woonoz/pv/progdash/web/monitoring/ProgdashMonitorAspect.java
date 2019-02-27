package com.woonoz.pv.progdash.web.monitoring;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;

import com.woonoz.monitoring.ThreadBasedMonitor;

@Aspect
@Component
public class ProgdashMonitorAspect extends ThreadBasedMonitor {

	@Pointcut("execution(* org.mybatis.spring.SqlSessionTemplate.*(..))")
	public void monitorPointcut(){}

	@Around("monitorPointcut()")
	@Override
	public Object aroundStatement(ProceedingJoinPoint joinPoint) throws Throwable {
		return super.aroundStatement(joinPoint);
	}
}
