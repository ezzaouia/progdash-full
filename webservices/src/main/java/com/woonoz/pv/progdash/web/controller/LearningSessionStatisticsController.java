package com.woonoz.pv.progdash.web.controller;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;

import com.woonoz.pv.progdash.dto.LearningSessionStatisticsDto;
import com.woonoz.pv.progdash.service.LearningSessionStatisticsService;
import com.woonoz.web.controller.WoonozJerseyController;

@Controller
@Path("learning/statistics")
public class LearningSessionStatisticsController implements WoonozJerseyController {

	@Inject private LearningSessionStatisticsService learningSessionStatisticsService;

	@GET
	@Path("coucou")
	@Produces(MediaType.TEXT_PLAIN)
	@Transactional(readOnly = true)
	public String getLearningSessionStatistics() {
		return "coucou";
	}

	@GET
	@Path("{userId}")
	@Produces(MediaType.APPLICATION_JSON)
	@Transactional(readOnly = true)
	public LearningSessionStatisticsDto getLearningSessionStatistics(@PathParam("userId") int userId) {
		return learningSessionStatisticsService.getLearningSessionStatistics(userId, "Hello");
	}
}
