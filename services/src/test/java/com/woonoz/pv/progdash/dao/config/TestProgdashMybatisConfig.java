package com.woonoz.pv.progdash.dao.config;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import com.woonoz.service.services.configuration.AbstractDaoTestConfig;
import com.woonoz.service.services.configuration.TestDataSourceInitializer;

@Configuration
@EnableTransactionManagement
@ComponentScan({"com.woonoz.service.services.migration"})
@MapperScan(
		basePackages = {"com.woonoz.service.dao.migration", "com.woonoz.pv.progdash.dao.mapper"},
		sqlSessionFactoryRef = "sqlSessionFactory"
)
public class TestProgdashMybatisConfig extends AbstractDaoTestConfig {

	@Bean
	public TestDataSourceInitializer testDataSourceInitializer() {
		return new TestDataSourceInitializer();
	}
}
