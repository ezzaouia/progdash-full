package com.woonoz.pv.progdash.web.controller;

import javax.annotation.security.PermitAll;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.springframework.stereotype.Controller;

import com.woonoz.web.controller.WoonozJerseyController;

@Controller
@PermitAll
@Path("monitoring")
public class MonitoringController implements WoonozJerseyController {

	@GET
	@Path("check")
	@Produces(MediaType.TEXT_PLAIN)
	public String check() {
		return "OK";
	}
}
