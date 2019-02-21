package com.woonoz.pv.progdash.web.core;

import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.woonoz.pv.progdash.web.ProgdashApplication;

@ActiveProfiles("test")
@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = ProgdashApplication.class,
		webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT
		, properties="spring.autoconfigure.exclude=com.woonoz.pv.progdash.configuration.ProgdashDatasourceConfig,"
		+ "com.woonoz.pv.progdash.configuration.ProgdashMybatisConfig,"
		+ "com.woonoz.pv.progdash.configuration.ProgdashMongodbConfig,"
		+ "com.woonoz.pv.progdash.configuration.ProgdashServicesConfig,"
		+ "org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration,"
		+ "org.springframework.boot.autoconfigure.data.mongo.MongoDataAutoConfiguration,"
		+ "org.springframework.boot.autoconfigure.mongo.MongoAutoConfiguration,"
		+ "org.springframework.boot.autoconfigure.security.SecurityAutoConfiguration")
public abstract class AbstractProgdashControllerTest {

	@Autowired
	private TestRestTemplate restTemplate;

	protected <T> ResponseEntity<T> getResponseFor(String path, Class<T> responseType){
		return this.restTemplate.getForEntity(path, responseType);
	}

	protected ResponseEntity<String> getResponseAsStringFor(String path){
		return getResponseFor(path, String.class);
	}
}
