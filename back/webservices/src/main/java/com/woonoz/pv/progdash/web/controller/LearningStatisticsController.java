package com.woonoz.pv.progdash.web.controller;

import java.util.List;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;

import com.woonoz.pv.progdash.dto.AllStatisticsDto;
import com.woonoz.pv.progdash.dto.GroupDto;
import com.woonoz.pv.progdash.dto.LearningSessionStatisticsDto;
import com.woonoz.pv.progdash.service.LearningStatisticsService;
import com.woonoz.web.controller.WoonozJerseyController;

@Controller
@Path("statistics")
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
	@Path("user/{userId}/session")
	@Produces(MediaType.APPLICATION_JSON)
	@Transactional(readOnly = true)
	public LearningSessionStatisticsDto getLearningSessionStatistics(@PathParam("userId") int userId) {
		return learningStatisticsService.getLearningSessionStatistics(userId, "Hello");
	}

	@GET
	@Path("area/{areaId}/groups")
	@Produces(MediaType.APPLICATION_JSON)
	@Transactional(readOnly = true)
	public List<GroupDto> getGroups(@PathParam("areaId") int areaId) {
		return learningStatisticsService.getGroups(areaId);
	}

	@GET
	@Path("area/{areaId}")
	@Produces(MediaType.APPLICATION_JSON)
	@Transactional(readOnly = true)
	public AllStatisticsDto getAllStatistics(@PathParam("areaId") int areaId, @QueryParam("groupId") Integer groupId) {
		return learningStatisticsService.getAllStatistics(areaId, groupId);
	}
}
