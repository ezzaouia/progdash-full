package com.woonoz.pv.progdash.configuration;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.autoconfigure.AutoConfigureBefore;
import org.springframework.context.annotation.Configuration;

@Configuration
@MapperScan(basePackages = {"com.woonoz.pv.progdash.dao.mapper"})
@AutoConfigureBefore(ProgdashServicesConfig.class)
public class ProgdashMybatisConfig {
}
