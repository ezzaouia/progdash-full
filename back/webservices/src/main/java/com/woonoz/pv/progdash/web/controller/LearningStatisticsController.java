package com.woonoz.pv.progdash.web.controller;

import java.util.List;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;

import com.woonoz.pv.progdash.dto.GroupDto;
import com.woonoz.pv.progdash.dto.LearningSessionStatisticsDto;
import com.woonoz.pv.progdash.service.LearningStatisticsService;
import com.woonoz.web.controller.WoonozJerseyController;

@Controller
@Path("learning/statistics")
public class LearningStatisticsController implements WoonozJerseyController {

	@Inject private LearningStatisticsService learningStatisticsService;

	@GET
	@Path("coucou")
	@Produces(MediaType.TEXT_PLAIN)
	@Transactional(readOnly = true)
	public String getCoucou() {
		return "coucou";
	}

	@GET
	@Path("{userId}")
	@Produces(MediaType.APPLICATION_JSON)
	@Transactional(readOnly = true)
	public LearningSessionStatisticsDto getLearningSessionStatistics(@PathParam("userId") int userId) {
		return learningStatisticsService.getLearningSessionStatistics(userId, "Hello");
	}

	@GET
	@Path("{areaId}/groups")
	@Produces(MediaType.APPLICATION_JSON)
	@Transactional(readOnly = true)
	public List<GroupDto> getGroups(@PathParam("areaId") int areaId) {
		return learningStatisticsService.getGroups(areaId);
	}
}
