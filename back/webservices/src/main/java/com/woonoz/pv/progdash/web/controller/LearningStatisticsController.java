package com.woonoz.pv.progdash.web.controller;

import java.util.List;
import java.util.Map;

import javax.annotation.Nullable;
import javax.annotation.security.RolesAllowed;
import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;

import com.woonoz.exception.AccessDeniedException;
import com.woonoz.exception.WoonozException;
import com.woonoz.pv.progdash.dto.AllStatisticsDto;
import com.woonoz.pv.progdash.dto.GroupDto;
import com.woonoz.pv.progdash.dto.LearningSessionStatisticsDto;
import com.woonoz.pv.progdash.exception.ProgdashConflictException;
import com.woonoz.pv.progdash.model.AreaDetails;
import com.woonoz.pv.progdash.model.ProgdashUserDetails;
import com.woonoz.pv.progdash.model.UserRole;
import com.woonoz.pv.progdash.model.UserRoleConst;
import com.woonoz.pv.progdash.service.AreaService;
import com.woonoz.pv.progdash.service.LearningStatisticsService;
import com.woonoz.pv.progdash.web.authentication.ProgdashAuthenticationContextProvider;
import com.woonoz.web.controller.WoonozJerseyController;

@Controller
@Path("statistics")
@RolesAllowed(UserRoleConst.USER_ADMIN)
public class LearningStatisticsController implements WoonozJerseyController {

	@Inject private AreaService areaService;
	@Inject private ProgdashAuthenticationContextProvider authenticationContext;
	@Inject private LearningStatisticsService learningStatisticsService;

	private static final int NB_USERS_LIMIT = 100;

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
	public List<GroupDto> getGroups(@PathParam("areaId") int areaId) throws WoonozException {
		checkUserAuthorized(areaId);
		return areaService.getGroups(areaId);
	}

	@GET
	@Path("area/{areaId}")
	@Produces(MediaType.APPLICATION_JSON)
	@Transactional(readOnly = true)
	public AllStatisticsDto getAllStatistics(@PathParam("areaId") int areaId, @QueryParam("groupId") Integer groupId) throws WoonozException {
		checkUserAuthorized(areaId);
		checkAreaAndGroup(areaId, groupId);
		return learningStatisticsService.getAllStatistics(areaId, groupId);
	}

	private void checkUserAuthorized(int areaId) throws WoonozException {
		ProgdashUserDetails user = authenticationContext.getAuthenticatedUser();
		if (user == null) {
			throw new ProgdashConflictException("error_getting_authenticated_user");
		}
		boolean isUserAuthorized = user.getUserDetailsDbo().isSuperAdmin();
		if (!isUserAuthorized) {
			isUserAuthorized = isUserAdminOfTheArea(user, areaId);
		}
		if (!isUserAuthorized) {
			isUserAuthorized = isUserAdminOfTheUniverse(user, areaId);
		}
		if (!isUserAuthorized) {
			throw new AccessDeniedException("Authenticated user is not admin of the area ");
		}
	}

	private boolean isUserAdminOfTheArea(ProgdashUserDetails user, int areaId) {
		Map<AreaDetails, UserRole> roles = user.getUserDetailsDbo().getAreaRoles();
		for (AreaDetails areaDetails : roles.keySet()) {
			if (areaDetails.getAreaId() == areaId) {
				if (roles.get(areaDetails).getValue().equals(UserRoleConst.USER_ADMIN)) {
					return true;
				}
			}
		}
		return false;
	}

	private boolean isUserAdminOfTheUniverse(ProgdashUserDetails user, int areaId) {
		Integer universeId = areaService.getUniverseId(areaId);
		if (universeId != null) {
			Map<Integer, UserRole> universeRoles = user.getUserDetailsDbo().getUniverseRoles();
			for (int candidateUniverseId : universeRoles.keySet()) {
				if (candidateUniverseId == universeId && universeRoles.get(candidateUniverseId).getValue().equals(UserRoleConst.USER_UNIVERSE_ADMIN)) {
					return true;
				}
			}
		}
		return false;
	}

	private void checkAreaAndGroup(int areaId, @Nullable Integer groupId) throws WoonozException {
		if (groupId == null || groupId == 0) {
			if (!areaService.isAreaUsersNumberWithinLimit(areaId, NB_USERS_LIMIT)) {
				throw new ProgdashConflictException("too_many_users", "The area contains too many users, the server can handle only " + NB_USERS_LIMIT + ".");
			}
		} else {
			if (!learningStatisticsService.isGroupInArea(areaId, groupId)) {
				throw new ProgdashConflictException("group_not_in_area", "The group " + groupId + " is not in the area " + areaId + ".");
			}
			if (!learningStatisticsService.isGroupUsersNumberWithinLimit(groupId, NB_USERS_LIMIT)) {
				throw new ProgdashConflictException("too_many_users", "The group contains too many users, the server can handle only " + NB_USERS_LIMIT + ".");
			}
		}
	}
}
