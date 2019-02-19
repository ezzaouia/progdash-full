package com.woonoz.pv.progdash.web.configuration;

import java.util.Collection;

import org.glassfish.jersey.media.multipart.MultiPartFeature;
import org.springframework.context.annotation.Configuration;

import com.woonoz.web.configuration.WoonozApiDefinition;
import com.woonoz.web.configuration.WoonozWebApplication;
import com.woonoz.web.controller.WoonozJerseyController;

@Configuration
public class ProgdashJerseyApp extends WoonozWebApplication {

	public ProgdashJerseyApp(WoonozApiDefinition woonozApiDefinition, Collection<WoonozJerseyController> woonozJerseyControllers) {
		super(woonozApiDefinition,true, woonozJerseyControllers.toArray(new WoonozJerseyController[woonozJerseyControllers.size()]));
		register(MultiPartFeature.class);
	}
}
