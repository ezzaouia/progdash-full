package com.woonoz.pv.progdash.web.monitoring;

import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;
import org.springframework.transaction.TransactionStatus;

import com.woonoz.web.log.TransactionMonitor;

@Aspect
@Component
public class ProgdashTxMonitorAspect extends TransactionMonitor {

	@Pointcut("execution(* org.springframework.jdbc.datasource.DataSourceTransactionManager.getTransaction(..))")
	public void txMonitorPointcut(){};

	@AfterReturning(pointcut = "txMonitorPointcut()", returning = "status")
	@Override
	public void countTransaction(TransactionStatus status) {
		super.countTransaction(status);
	}
}
