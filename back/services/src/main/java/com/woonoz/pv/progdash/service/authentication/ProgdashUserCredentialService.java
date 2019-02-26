package com.woonoz.pv.progdash.service.authentication;

import static com.google.common.base.Preconditions.checkArgument;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.inject.Inject;

import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.woonoz.auth.exceptions.AuthenticationException;
import com.woonoz.auth.exceptions.PrivateAuthenticationException;
import com.woonoz.auth.exceptions.UserNotFoundException;
import com.woonoz.auth.model.DefaultUserId;
import com.woonoz.auth.model.UserId;
import com.woonoz.auth.model.WoonozAuthenticationRequest;
import com.woonoz.auth.model.WoonozUserDetails;
import com.woonoz.auth.model.policy.PasswordPolicy;
import com.woonoz.auth.services.UserCredentialsService;
import com.woonoz.pv.progdash.dao.dbo.AreaDetailsDbo;
import com.woonoz.pv.progdash.dao.dbo.UniverseDetailsDbo;
import com.woonoz.pv.progdash.dao.dbo.UserDetailsDbo;
import com.woonoz.pv.progdash.dao.mapper.UserCredentialsMapper;
import com.woonoz.pv.progdash.model.AreaDetails;
import com.woonoz.pv.progdash.model.ProgdashUserDetails;
import com.woonoz.pv.progdash.model.UserDetails;
import com.woonoz.pv.progdash.model.UserRole;

@Service
public class ProgdashUserCredentialService implements UserCredentialsService {

	@Inject private UserCredentialsMapper userCredentialsMapper;

	@Override
	@Transactional(readOnly = true)
	public String getPrincipalName(UserId userId) {
		return userCredentialsMapper.getPseudonym(userId);
	}

	@Override
	@Transactional(readOnly = true)
	public UserId getUserIdFromPrincipalName(String pseudo) throws UserNotFoundException {
		UserId userId = userCredentialsMapper.getUserId(pseudo);
		if (userId == null){
			throw new UserNotFoundException(pseudo);
		}
		return userId;
	}

	@Override
	public void checkAuthenticatedUser(WoonozUserDetails userDetails, WoonozAuthenticationRequest authentication) throws PrivateAuthenticationException, AuthenticationException {
		throw new UnsupportedOperationException("Not implemented yet, only preauthentication implemented");
	}

	@Override
	public void updateLastConnection(UserId userId) {
		throw new UnsupportedOperationException("Not implemented yet, only preauthentication implemented");
	}

	@Override
	public List<PasswordPolicy> getPasswordPoliciesFor(UserId userId) {
		throw new UnsupportedOperationException("Not implemented yet, only preauthentication implemented");
	}

	@Override
	public List<String> getHashHistory(UserId userId, int count, Date now) {
		throw new UnsupportedOperationException("Not implemented yet, only preauthentication implemented");
	}

	@Override
	public void archivePasswordHash(UserId userId, String hashToArchive, Date date, int numberPasswordsInHistory) {
		throw new UnsupportedOperationException("Not implemented yet, only preauthentication implemented");
	}

	@Override
	public Date getLastPasswordUpdate(UserId userId) {
		throw new UnsupportedOperationException("Not implemented yet, only preauthentication implemented");
	}

	@Override
	@Transactional(readOnly = true)
	public String getPasswordHash(UserId userId) {
		return userCredentialsMapper.getPasswordHash(userId);
	}

	@Override
	public boolean updatePassword(UserId userId, String passwordHash) {
		throw new UnsupportedOperationException("Not implemented yet, only preauthentication implemented");
	}

	@Override
	public void setReinitFlag(UserId userId, boolean reinitPwd) {
		throw new UnsupportedOperationException("Not implemented yet, only preauthentication implemented");
	}

	@Override
	public List<String> getIpRestrictions(UserId userId) {
		throw new UnsupportedOperationException("Not implemented yet, only preauthentication implemented");
	}

	@Override
	public boolean doesExist(String pseudo) {
		UserId userId = userCredentialsMapper.getUserId(pseudo);
		return userId != null;
	}

	@Override
	@Transactional(readOnly = true)
	public ProgdashUserDetails loadUserDetailsFromLoginAs(String adminName, String userName) throws UsernameNotFoundException {
		String login = adminName + " as " + userName;
		UserDetailsDbo loginUser = loadUserByUsernameFromDatabase(login, adminName, false);
		if (!loginUser.isSuperAdmin()) {
			throw new UsernameNotFoundException(login);
		}
		UserDetailsDbo businessUser = loadUserByUsernameFromDatabase(login, userName, true);

		return buildBusinessUserDetails(businessUser, loginUser, getPasswordHash(loginUser.getUserId()));
	}

	@Override
	@Transactional(readOnly = true)
	public ProgdashUserDetails loadUserDetailsFrom(String principalName) {
		UserDetailsDbo loginUser = loadUserByUsernameFromDatabase(principalName, principalName, false);
		return buildBusinessUserDetails(loginUser, loginUser, getPasswordHash(loginUser.getUserId()));
	}

	/**
	 * Load a user from its username.
	 *
	 * @param pseudonymOrId the pseudonym or the id ("login as").
	 */
	private UserDetailsDbo loadUserByUsernameFromDatabase(String username, String pseudonymOrId, boolean allowUserId) throws UsernameNotFoundException {
		UserId userId = userCredentialsMapper.getUserId(pseudonymOrId);
		if (userId == null) {
			if (!allowUserId){
				throw new UsernameNotFoundException(username);
			}
			try {
				userId = new DefaultUserId(pseudonymOrId);
			} catch (NumberFormatException e1) {
				// it's really the UserNotFoundException that we want to throw here.
				throw new UsernameNotFoundException(username);
			}
		}

		final UserDetailsDbo user = userCredentialsMapper.loadUserDetails(userId);
		if (user == null) {
			throw new UsernameNotFoundException(username);
		}

		return user;
	}

	/**
	 * Build a business user details.
	 * <p>
	 * Such users are defined into the database.
	 *
	 * @param businessUser user that will be used by the application
	 * @param loginUser user whose login and password will be checked for login
	 */
	private ProgdashUserDetails buildBusinessUserDetails(UserDetailsDbo businessUser, UserDetailsDbo loginUser, String passwordHash) {
		checkArgument(businessUser == loginUser || loginUser.isSuperAdmin());

		// no checking on login user (super admin accounts)
		// a user with User#AUTHENTICATION_ATTEMPT_MAX_COUNT_STATUS status must be authenticated to reset his password
		final boolean enabled = (businessUser.getStatus() != UserDetails.INACTIVE_STATUS);

		UserDetails userDetails = toUserDetails(businessUser);

		final List<SimpleGrantedAuthority> authorities = toAuthorities(userDetails);
		return new ProgdashUserDetails(loginUser.getPseudo(), passwordHash, enabled, authorities, userDetails);
	}

	private static UserDetails toUserDetails(UserDetailsDbo businessUser) {
		UserDetails userDetails = new UserDetails(businessUser.getUserId(), businessUser.getPseudo(), businessUser.isSuperAdmin(), businessUser.getStatus());
		initAreaRoles(userDetails, businessUser.getAreaDetails());
		initUniverseRoles(userDetails, businessUser.getUniverseDetails());
		return userDetails;
	}

	private static void initAreaRoles(UserDetails userDetails, List<AreaDetailsDbo> areaDetailsDbos){
		if (areaDetailsDbos != null && !areaDetailsDbos.isEmpty()){
			for (AreaDetailsDbo areaDetailsDbo : areaDetailsDbos){
				userDetails.getAreaRoles().put(new AreaDetails(areaDetailsDbo.getAreaId(), areaDetailsDbo.getUniverseId()), UserRole.fromString(areaDetailsDbo.getRole()));
			}
		}
	}

	private static void initUniverseRoles(UserDetails userDetails, List<UniverseDetailsDbo> universeDetailsDbos){
		if (universeDetailsDbos != null && !universeDetailsDbos.isEmpty()){
			for (UniverseDetailsDbo universeDetailsDbo : universeDetailsDbos){
				userDetails.getUniverseRoles().put(universeDetailsDbo.getUniverseId(),
						universeDetailsDbo.getRole() != null && universeDetailsDbo.getRole().equals(UserRole.ADMIN.getValue()) ? UserRole.UNIVERSE_ADMIN : UserRole.fromString(universeDetailsDbo.getRole()));
			}
		}
	}

	/**
	 * From a Spring security perspective, a super admin has also the admin authority.
	 */
	private static List<SimpleGrantedAuthority> toAuthorities(UserDetails userDetails) {
		List<SimpleGrantedAuthority> authorities = new ArrayList<>();
		boolean isAreaAdmin = false;
		// add the learner authority to an admin first,
		// because admin authority is added after to universe admins and super admins
		// and they mustn't have the learner one.
		if (!userDetails.getAreaRoles().isEmpty()){
			for (UserRole areaDetailsRole : userDetails.getAreaRoles().values()){
				if (areaDetailsRole != null){
					authorities.add(new SimpleGrantedAuthority(areaDetailsRole.getValue()));
					if (UserRole.ADMIN == areaDetailsRole){
						isAreaAdmin = true;
					}
				}
			}
		}

		if (userDetails.isSuperAdmin()) {
			authorities.add(new SimpleGrantedAuthority(UserRole.SUPER_ADMIN.getValue()));
			if (!isAreaAdmin){
				authorities.add(new SimpleGrantedAuthority(UserRole.ADMIN.getValue()));
				isAreaAdmin = true;
			}
		}

		if (!userDetails.getUniverseRoles().isEmpty()){
			for (UserRole universeRole : userDetails.getUniverseRoles().values()){
				if (UserRole.UNIVERSE_ADMIN == universeRole){
					authorities.add(new SimpleGrantedAuthority(UserRole.UNIVERSE_ADMIN.getValue()));
					if (!isAreaAdmin){
						authorities.add(new SimpleGrantedAuthority(UserRole.ADMIN.getValue()));
						isAreaAdmin = true;
					}
				}
			}
		}
		return authorities;
	}
}
