package com.woonoz.pv.progdash.web.monitoring;

import java.util.concurrent.TimeUnit;

import javax.inject.Inject;
import javax.ws.rs.WebApplicationException;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import com.google.common.base.Stopwatch;
import com.google.common.base.Strings;
import com.woonoz.library.log.LogLevel;
import com.woonoz.library.log.Logger;
import com.woonoz.monitoring.Monitor;
import com.woonoz.service.exception.UnexpectedServiceException;

@Component
@Aspect
public class LoggerMethodInterceptor {

	private static final Logger LOGGER = Logger.getLogger(LoggerMethodInterceptor.class);

	@Value("${webmethod.duration.log.error.threshold:20000}")
	private long durationLogErrorThreshold;
	@Value("${webmethod.duration.log.warning.threshold:10000}")
	private long durationLogWarningThreshold;

	@Inject private Monitor monitor;

	@Pointcut(value = "within(@org.springframework.stereotype.Controller *)")
	public void anyControllerMethod() {
		// Pointcut for intercepting ANY method.
	}

	@Around("anyControllerMethod()")
	public Object invoke(ProceedingJoinPoint pjp) throws Throwable {
		final String methodName = getMethodName(pjp);

		final boolean debugEnabled = LOGGER.isLevelEnabled(LogLevel.DEBUG);
		if (debugEnabled) {
			LOGGER.debug("{} before", methodName);
		}

		final Stopwatch sw = Stopwatch.createStarted();
		try {
			return pjp.proceed();

		} catch (Throwable throwable) {
			logException(methodName, throwable);
			throw throwable;

		} finally {
			final long duration = sw.elapsed(TimeUnit.MILLISECONDS);
			final LogLevel logLevel = getLogLevel(duration, debugEnabled);
			if (LOGGER.isLevelEnabled(logLevel)) {
				final String logMessage = buildLogMessage(methodName, duration, debugEnabled);
				LOGGER.log(logLevel, logMessage);
			}
		}
	}

	private String getMethodName(ProceedingJoinPoint pjp) {
		// toString() on the class itself return the proxied class name for proxies
		return pjp.getThis() + " : " + pjp.getSignature().getName();
	}

	/**
	 * Get the log level according to the duration.
	 */
	private LogLevel getLogLevel(long duration, boolean debugEnabled) {
		if (duration > durationLogErrorThreshold) {
			return LogLevel.ERROR;
		}
		if (duration > durationLogWarningThreshold) {
			return LogLevel.WARNING;
		}
		if (debugEnabled) {
			return LogLevel.DEBUG;
		}
		return LogLevel.INFO;
	}

	/**
	 * Build the log message.
	 * <p>
	 * It contains more details if debug is enabled.
	 */
	private String buildLogMessage(String methodName, long duration, boolean debugEnabled) {
		// method name and duration
		final StringBuilder msg = new StringBuilder();
		msg.append(methodName).append(" after - ");
		msg.append(duration).append(" ms");

		// details only if debug is enabled
		if (debugEnabled) {
			final String details = getDetails();
			if (!Strings.isNullOrEmpty(details)) {
				msg.append(", ").append(details);
			}
		}

		return msg.toString();
	}

	protected String getDetails() {
		return monitor.getLogMessage();
	}

	/**
	 * @param throwable the exception to inspect
	 * @return {@code true} if the stack can/should be logged, {@code false} otherwise
	 */
	protected boolean logStack(Throwable throwable) {
		return true;
	}

	/**
	 * Log a {@linkplain Throwable}.
	 * <ul>
	 * <li>{@link UnexpectedServiceException} are unexpected exceptions thrown by the services.</li>
	 * <li>{@link RuntimeException} are unexpected exceptions.</li>
	 * </ul>
	 */
	private void logException(String methodName, Throwable throwable) {
		// WebApplicationException inherits from RuntimeException but it's clearer to treat it explicitely.
		if (throwable instanceof UnexpectedServiceException || throwable instanceof WebApplicationException || throwable instanceof RuntimeException) {
			if (logStack(throwable)) {
				LOGGER.error("{} failed", methodName, throwable);
			} else {
				LOGGER.warning("{} failed with {}: {}", methodName, throwable.getClass().getSimpleName(), throwable.getMessage());
			}
		}
	}
}
