package com.woonoz.pv.progdash.configuration;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.AutoConfigureBefore;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;

@Configuration
@PropertySource("application.properties")
@AutoConfigureBefore(ProgdashMybatisConfig.class)
public class ProgdashDatasourceConfig extends HikariConfig{

	@Value("${progdash.datasource.driverclassname}")
	private String driverClassName;

	@Value("${progdash.datasource.url}")
	private String jdbcUrl;

	@Value("${progdash.datasource.username}")
	private String userName;

	@Value("${progdash.datasource.password}")
	private String password;

	@Value("${progdash.datasource.maximum-pool-size}")
	private int poolSize;

	@Bean(destroyMethod = "close")
	@ConditionalOnMissingBean(type = "javax.sql.DataSource")
	public HikariDataSource primaryDataSource() {
		return buildDataSource(poolSize, driverClassName, jdbcUrl, userName, password);
	}

	private static HikariDataSource buildDataSource(
			int poolSize, String driverClassName, String jdbcUrl, String userName, String password) {
		final HikariDataSource ds = new HikariDataSource();
		ds.setMaximumPoolSize(poolSize);
		ds.setDriverClassName(driverClassName);
		ds.setJdbcUrl(jdbcUrl);
		ds.setUsername(userName);
		ds.setPassword(password);
		return ds;
	}
}
