package com.woonoz.pv.progdash.web.controller;

import java.util.List;

import javax.annotation.security.PermitAll;
import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;

import com.woonoz.exception.WoonozException;
import com.woonoz.pv.progdash.dto.AllStatisticsDto;
import com.woonoz.pv.progdash.dto.GroupDto;
import com.woonoz.pv.progdash.dto.LearningSessionStatisticsDto;
import com.woonoz.pv.progdash.exception.ProgdashConflictException;
import com.woonoz.pv.progdash.service.LearningStatisticsService;
import com.woonoz.web.controller.WoonozJerseyController;

@Controller
@Path("statistics")
//@RolesAllowed(UserRoleConst.USER_ADMIN)
@PermitAll
public class LearningStatisticsController implements WoonozJerseyController {

	@Inject private LearningStatisticsService learningStatisticsService;

	private static final int NB_USERS_LIMIT = 100;

	@PermitAll
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
	public AllStatisticsDto getAllStatistics(@PathParam("areaId") int areaId, @QueryParam("groupId") Integer groupId) throws WoonozException {
		checkAreaAndGroup(areaId, groupId);
		return learningStatisticsService.getAllStatistics(areaId, groupId);
	}

	private void checkAreaAndGroup(int areaId, Integer groupId) throws WoonozException {
		if (groupId == null || groupId == 0) {
			if (!learningStatisticsService.isAreaUsersNumberWithinLimit(areaId, NB_USERS_LIMIT)) {
				throw new ProgdashConflictException("too_many_users", "The area contains too many users, the server can handle only " + NB_USERS_LIMIT + ".");
			}
		} else {
			if (!learningStatisticsService.isGroupInArea(areaId, groupId)) {
				throw new ProgdashConflictException("group_not_in_area", "The group " + groupId + " is not in the area " + areaId +".");
			}
			if (!learningStatisticsService.isGroupUsersNumberWithinLimit(groupId, NB_USERS_LIMIT)) {
				throw new ProgdashConflictException("too_many_users", "The group contains too many users, the server can handle only " + NB_USERS_LIMIT + ".");
			}
		}
	}
}
