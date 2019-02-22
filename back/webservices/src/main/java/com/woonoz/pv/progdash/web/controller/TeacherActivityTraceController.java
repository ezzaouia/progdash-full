package com.woonoz.pv.progdash.web.controller;

import java.io.IOException;
import java.io.InputStream;

import javax.annotation.security.RolesAllowed;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;

import org.apache.commons.io.IOUtils;
import org.glassfish.jersey.media.multipart.FormDataContentDisposition;
import org.glassfish.jersey.media.multipart.FormDataParam;
import org.springframework.stereotype.Controller;

import com.woonoz.pv.progdash.dto.TeacherActivityTraceDto;
import com.woonoz.pv.progdash.model.UserRoleConst;
import com.woonoz.pv.progdash.service.TeacherActivityTraceService;
import com.woonoz.web.controller.WoonozJerseyController;

@Controller
@Path("teacher")
@RolesAllowed(UserRoleConst.USER_ADMIN)
public class TeacherActivityTraceController implements WoonozJerseyController{

	@Inject private TeacherActivityTraceService teacherActivityTraceService;

	@POST
	@Path("trace")
	@Consumes(MediaType.MULTIPART_FORM_DATA)
	public void fileUpload(@FormDataParam("data") TeacherActivityTraceDto teacherActivityTraceDto,
			@FormDataParam("file") InputStream stream,
			@FormDataParam("file") FormDataContentDisposition fileDetail) throws IOException {
		teacherActivityTraceService.saveTeacherActivityTrace(teacherActivityTraceDto, stream != null ? IOUtils.toByteArray(stream) : null);
	}
}
