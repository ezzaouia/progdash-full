package com.woonoz.pv.progdash.dao.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.woonoz.auth.model.UserId;
import com.woonoz.pv.progdash.dao.dbo.UserDetailsDbo;

@Mapper
public interface UserCredentialsMapper {

	String getPseudonym(@Param("userId")UserId userId);

	UserId getUserId(@Param("pseudo")String pseudo);

	String getPasswordHash(@Param("userId")UserId userId);

	UserDetailsDbo loadUserDetails(@Param("userId")UserId userId);
}
