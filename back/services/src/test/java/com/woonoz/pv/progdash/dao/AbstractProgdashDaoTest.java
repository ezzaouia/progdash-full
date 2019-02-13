package com.woonoz.pv.progdash.dao;

import org.springframework.test.context.ContextConfiguration;

import com.woonoz.pv.progdash.dao.config.TestProgdashMybatisConfig;
import com.woonoz.service.dao.AbstractDaoTest;

@ContextConfiguration(classes = { TestProgdashMybatisConfig.class}, inheritLocations = false)
public abstract class AbstractProgdashDaoTest extends AbstractDaoTest{
}
