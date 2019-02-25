package com.woonoz.pv.progdash.web.core;

import org.assertj.core.api.AbstractAssert;
import org.assertj.core.api.Assertions;
import org.json.JSONException;
import org.skyscreamer.jsonassert.JSONAssert;
import org.skyscreamer.jsonassert.JSONParser;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.woonoz.exception.WoonozException;

public class ResponseAssert extends AbstractAssert<ResponseAssert, ResponseEntity<String>> {

	public static ResponseAssert assertThat(ResponseEntity<String> actual) {
		return new ResponseAssert(actual);
	}

	private ResponseAssert(ResponseEntity<String> actual) {
		super(actual, ResponseAssert.class);
	}

	public ResponseAssert hasStatus(int expectedStatus) {
		isNotNull();

		if (actual.getStatusCodeValue() != expectedStatus) {
			failWithMessage("Expected response HTTP status to be <%s> but was <%s>", expectedStatus, actual.getStatusCodeValue());
		}

		return this;
	}

	public ResponseAssert hasStatus(HttpStatus expectedStatus) {
		isNotNull();

		if (actual.getStatusCode() != expectedStatus) {
			failWithMessage("Expected response HTTP status to be <%s> but was <%s>", expectedStatus, actual.getStatusCode());
		}

		return this;
	}

	/**
	 * Is the response an OK ?
	 */
	public ResponseAssert isOK() {
		return hasStatus(200);
	}

	/**
	 * Is the response a No Content ?
	 */
	public ResponseAssert isNoContent() {
		return hasStatus(204);
	}

	/**
	 * Is the response a serialization error for global JSON ?
	 */
	public ResponseAssert isGlobalSerializationError() throws JSONException {
		return isSerializationError(400);
	}

	/**
	 * Is the response a serialization error for a parameter ?
	 */
	public ResponseAssert isParameterSerializationError() throws JSONException {
		// It should be 400 here too, but it's a known behaviour with Jersey currently
		return isSerializationError(404);
	}

	/**
	 * Is the response a serialization error ?
	 */
	public ResponseAssert isSerializationError(int expectedStatus) throws JSONException {

		isNotNull();

		boolean isSerializationError = false;
		try {
			JSONParser.parseJSON(actual.getBody());
		} catch (JSONException e) {
			isSerializationError = true;
		}

		if (!isSerializationError) {
			failWithMessage("Expected serialization error, but there was none.");
		}

		return hasStatus(expectedStatus);
	}

	/**
	 * Is the response a bad request ?
	 */
	public ResponseAssert isBadRequest() throws JSONException {
		return isError("wnz_bad_request", 400);
	}

	/**
	 * Is the response an access denied ?
	 */
	public ResponseAssert isAccessDenied() throws JSONException {
		return isError("wnz_access_denied", 403);
	}

	/**
	 * Is the response an unexpected server error ?
	 */
	public ResponseAssert isUnexpectedServerError() throws JSONException {
		return isError("wnz_unexpected_server_error", 500);
	}

	/**
	 * Is the response an error ?
	 */
	public ResponseAssert isError(WoonozException exception, int expectedStatus) throws JSONException {
		return isError(exception.getCode(), expectedStatus, null);
	}

	/**
	 * Is the response an error ?
	 */
	public ResponseAssert isError(WoonozException exception, int expectedStatus, String expectedDetails) throws JSONException {
		return isError(exception.getCode(), expectedStatus, expectedDetails);
	}

	/**
	 * Is the response an error ?
	 */
	public ResponseAssert isError(String expectedCode, int expectedStatus) throws JSONException {
		return isError(expectedCode, expectedStatus, null);
	}

	/**
	 * Is the response an error ?
	 */
	public ResponseAssert isError(String expectedCode, int expectedStatus, String expectedDetails) throws JSONException {
		hasStatus(expectedStatus);
		return hasStrictJson("{\"code\":\"" + expectedCode + "\",\"data\":" + expectedDetails + "}");
	}

	public ResponseAssert hasLenientJson(String expectedJson) throws JSONException {
		isNotNull();
		JSONAssert.assertEquals(expectedJson, actual.getBody(), false);
		return this;
	}

	public ResponseAssert hasStrictJson(String expectedJson) throws JSONException {
		isNotNull();
		JSONAssert.assertEquals(expectedJson, actual.getBody(), true);
		return this;
	}

	public ResponseAssert hasContent(String expectedContent) {
		isNotNull();
		Assertions.assertThat(actual.getBody()).isEqualTo(expectedContent);
		return this;
	}

}
