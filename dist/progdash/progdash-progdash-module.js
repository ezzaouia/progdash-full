(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["progdash-progdash-module"],{

/***/ "./node_modules/@angular/http/fesm5/http.js":
/*!**************************************************!*\
  !*** ./node_modules/@angular/http/fesm5/http.js ***!
  \**************************************************/
/*! exports provided: ɵangular_packages_http_http_e, ɵangular_packages_http_http_f, ɵangular_packages_http_http_a, ɵangular_packages_http_http_b, ɵangular_packages_http_http_c, BrowserXhr, JSONPBackend, JSONPConnection, CookieXSRFStrategy, XHRBackend, XHRConnection, BaseRequestOptions, RequestOptions, BaseResponseOptions, ResponseOptions, ReadyState, RequestMethod, ResponseContentType, ResponseType, Headers, Http, Jsonp, HttpModule, JsonpModule, Connection, ConnectionBackend, XSRFStrategy, Request, Response, QueryEncoder, URLSearchParams, VERSION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_http_http_e", function() { return BrowserJsonp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_http_http_f", function() { return Body; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_http_http_a", function() { return _createDefaultCookieXSRFStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_http_http_b", function() { return httpFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_http_http_c", function() { return jsonpFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserXhr", function() { return BrowserXhr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSONPBackend", function() { return JSONPBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSONPConnection", function() { return JSONPConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieXSRFStrategy", function() { return CookieXSRFStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XHRBackend", function() { return XHRBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XHRConnection", function() { return XHRConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseRequestOptions", function() { return BaseRequestOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestOptions", function() { return RequestOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseResponseOptions", function() { return BaseResponseOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseOptions", function() { return ResponseOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadyState", function() { return ReadyState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestMethod", function() { return RequestMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseContentType", function() { return ResponseContentType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseType", function() { return ResponseType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Headers", function() { return Headers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Http", function() { return Http; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Jsonp", function() { return Jsonp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpModule", function() { return HttpModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonpModule", function() { return JsonpModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Connection", function() { return Connection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionBackend", function() { return ConnectionBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XSRFStrategy", function() { return XSRFStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return Request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Response", function() { return Response; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryEncoder", function() { return QueryEncoder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URLSearchParams", function() { return URLSearchParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/**
 * @license Angular v7.1.4
 * (c) 2010-2018 Google, Inc. https://angular.io/
 * License: MIT
 */






/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A backend for http that uses the `XMLHttpRequest` browser API.
 *
 * Take care not to evaluate this in non-browser contexts.
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var BrowserXhr = /** @class */ (function () {
    function BrowserXhr() {
    }
    BrowserXhr.prototype.build = function () { return (new XMLHttpRequest()); };
    BrowserXhr = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], BrowserXhr);
    return BrowserXhr;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Supported http methods.
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var RequestMethod;
(function (RequestMethod) {
    RequestMethod[RequestMethod["Get"] = 0] = "Get";
    RequestMethod[RequestMethod["Post"] = 1] = "Post";
    RequestMethod[RequestMethod["Put"] = 2] = "Put";
    RequestMethod[RequestMethod["Delete"] = 3] = "Delete";
    RequestMethod[RequestMethod["Options"] = 4] = "Options";
    RequestMethod[RequestMethod["Head"] = 5] = "Head";
    RequestMethod[RequestMethod["Patch"] = 6] = "Patch";
})(RequestMethod || (RequestMethod = {}));
/**
 * All possible states in which a connection can be, based on
 * [States](http://www.w3.org/TR/XMLHttpRequest/#states) from the `XMLHttpRequest` spec, but with an
 * additional "CANCELLED" state.
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var ReadyState;
(function (ReadyState) {
    ReadyState[ReadyState["Unsent"] = 0] = "Unsent";
    ReadyState[ReadyState["Open"] = 1] = "Open";
    ReadyState[ReadyState["HeadersReceived"] = 2] = "HeadersReceived";
    ReadyState[ReadyState["Loading"] = 3] = "Loading";
    ReadyState[ReadyState["Done"] = 4] = "Done";
    ReadyState[ReadyState["Cancelled"] = 5] = "Cancelled";
})(ReadyState || (ReadyState = {}));
/**
 * Acceptable response types to be associated with a {@link Response}, based on
 * [ResponseType](https://fetch.spec.whatwg.org/#responsetype) from the Fetch spec.
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var ResponseType;
(function (ResponseType) {
    ResponseType[ResponseType["Basic"] = 0] = "Basic";
    ResponseType[ResponseType["Cors"] = 1] = "Cors";
    ResponseType[ResponseType["Default"] = 2] = "Default";
    ResponseType[ResponseType["Error"] = 3] = "Error";
    ResponseType[ResponseType["Opaque"] = 4] = "Opaque";
})(ResponseType || (ResponseType = {}));
/**
 * Supported content type to be automatically associated with a {@link Request}.
 * @deprecated see https://angular.io/guide/http
 */
var ContentType;
(function (ContentType) {
    ContentType[ContentType["NONE"] = 0] = "NONE";
    ContentType[ContentType["JSON"] = 1] = "JSON";
    ContentType[ContentType["FORM"] = 2] = "FORM";
    ContentType[ContentType["FORM_DATA"] = 3] = "FORM_DATA";
    ContentType[ContentType["TEXT"] = 4] = "TEXT";
    ContentType[ContentType["BLOB"] = 5] = "BLOB";
    ContentType[ContentType["ARRAY_BUFFER"] = 6] = "ARRAY_BUFFER";
})(ContentType || (ContentType = {}));
/**
 * Define which buffer to use to store the response
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var ResponseContentType;
(function (ResponseContentType) {
    ResponseContentType[ResponseContentType["Text"] = 0] = "Text";
    ResponseContentType[ResponseContentType["Json"] = 1] = "Json";
    ResponseContentType[ResponseContentType["ArrayBuffer"] = 2] = "ArrayBuffer";
    ResponseContentType[ResponseContentType["Blob"] = 3] = "Blob";
})(ResponseContentType || (ResponseContentType = {}));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Polyfill for [Headers](https://developer.mozilla.org/en-US/docs/Web/API/Headers/Headers), as
 * specified in the [Fetch Spec](https://fetch.spec.whatwg.org/#headers-class).
 *
 * The only known difference between this `Headers` implementation and the spec is the
 * lack of an `entries` method.
 *
 * @usageNotes
 * ### Example
 *
 * ```
 * import {Headers} from '@angular/http';
 *
 * var firstHeaders = new Headers();
 * firstHeaders.append('Content-Type', 'image/jpeg');
 * console.log(firstHeaders.get('Content-Type')) //'image/jpeg'
 *
 * // Create headers from Plain Old JavaScript Object
 * var secondHeaders = new Headers({
 *   'X-My-Custom-Header': 'Angular'
 * });
 * console.log(secondHeaders.get('X-My-Custom-Header')); //'Angular'
 *
 * var thirdHeaders = new Headers(secondHeaders);
 * console.log(thirdHeaders.get('X-My-Custom-Header')); //'Angular'
 * ```
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var Headers = /** @class */ (function () {
    // TODO(vicb): any -> string|string[]
    function Headers(headers) {
        var _this = this;
        /** @internal header names are lower case */
        this._headers = new Map();
        /** @internal map lower case names to actual names */
        this._normalizedNames = new Map();
        if (!headers) {
            return;
        }
        if (headers instanceof Headers) {
            headers.forEach(function (values, name) {
                values.forEach(function (value) { return _this.append(name, value); });
            });
            return;
        }
        Object.keys(headers).forEach(function (name) {
            var values = Array.isArray(headers[name]) ? headers[name] : [headers[name]];
            _this.delete(name);
            values.forEach(function (value) { return _this.append(name, value); });
        });
    }
    /**
     * Returns a new Headers instance from the given DOMString of Response Headers
     */
    Headers.fromResponseHeaderString = function (headersString) {
        var headers = new Headers();
        headersString.split('\n').forEach(function (line) {
            var index = line.indexOf(':');
            if (index > 0) {
                var name_1 = line.slice(0, index);
                var value = line.slice(index + 1).trim();
                headers.set(name_1, value);
            }
        });
        return headers;
    };
    /**
     * Appends a header to existing list of header values for a given header name.
     */
    Headers.prototype.append = function (name, value) {
        var values = this.getAll(name);
        if (values === null) {
            this.set(name, value);
        }
        else {
            values.push(value);
        }
    };
    /**
     * Deletes all header values for the given name.
     */
    Headers.prototype.delete = function (name) {
        var lcName = name.toLowerCase();
        this._normalizedNames.delete(lcName);
        this._headers.delete(lcName);
    };
    Headers.prototype.forEach = function (fn) {
        var _this = this;
        this._headers.forEach(function (values, lcName) { return fn(values, _this._normalizedNames.get(lcName), _this._headers); });
    };
    /**
     * Returns first header that matches given name.
     */
    Headers.prototype.get = function (name) {
        var values = this.getAll(name);
        if (values === null) {
            return null;
        }
        return values.length > 0 ? values[0] : null;
    };
    /**
     * Checks for existence of header by given name.
     */
    Headers.prototype.has = function (name) { return this._headers.has(name.toLowerCase()); };
    /**
     * Returns the names of the headers
     */
    Headers.prototype.keys = function () { return Array.from(this._normalizedNames.values()); };
    /**
     * Sets or overrides header value for given name.
     */
    Headers.prototype.set = function (name, value) {
        if (Array.isArray(value)) {
            if (value.length) {
                this._headers.set(name.toLowerCase(), [value.join(',')]);
            }
        }
        else {
            this._headers.set(name.toLowerCase(), [value]);
        }
        this.mayBeSetNormalizedName(name);
    };
    /**
     * Returns values of all headers.
     */
    Headers.prototype.values = function () { return Array.from(this._headers.values()); };
    /**
     * Returns string of all headers.
     */
    // TODO(vicb): returns {[name: string]: string[]}
    Headers.prototype.toJSON = function () {
        var _this = this;
        var serialized = {};
        this._headers.forEach(function (values, name) {
            var split = [];
            values.forEach(function (v) { return split.push.apply(split, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(v.split(','))); });
            serialized[_this._normalizedNames.get(name)] = split;
        });
        return serialized;
    };
    /**
     * Returns list of header values for a given name.
     */
    Headers.prototype.getAll = function (name) {
        return this.has(name) ? this._headers.get(name.toLowerCase()) || null : null;
    };
    /**
     * This method is not implemented.
     */
    Headers.prototype.entries = function () { throw new Error('"entries" method is not implemented on Headers class'); };
    Headers.prototype.mayBeSetNormalizedName = function (name) {
        var lcName = name.toLowerCase();
        if (!this._normalizedNames.has(lcName)) {
            this._normalizedNames.set(lcName, name);
        }
    };
    return Headers;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Creates a response options object to be optionally provided when instantiating a
 * {@link Response}.
 *
 * This class is based on the `ResponseInit` description in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#responseinit).
 *
 * All values are null by default. Typical defaults can be found in the
 * {@link BaseResponseOptions} class, which sub-classes `ResponseOptions`.
 *
 * This class may be used in tests to build {@link Response Responses} for
 * mock responses (see {@link MockBackend}).
 *
 * @usageNotes
 * ### Example
 *
 * ```typescript
 * import {ResponseOptions, Response} from '@angular/http';
 *
 * var options = new ResponseOptions({
 *   body: '{"name":"Jeff"}'
 * });
 * var res = new Response(options);
 *
 * console.log('res.json():', res.json()); // Object {name: "Jeff"}
 * ```
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var ResponseOptions = /** @class */ (function () {
    function ResponseOptions(opts) {
        if (opts === void 0) { opts = {}; }
        var body = opts.body, status = opts.status, headers = opts.headers, statusText = opts.statusText, type = opts.type, url = opts.url;
        this.body = body != null ? body : null;
        this.status = status != null ? status : null;
        this.headers = headers != null ? headers : null;
        this.statusText = statusText != null ? statusText : null;
        this.type = type != null ? type : null;
        this.url = url != null ? url : null;
    }
    /**
     * Creates a copy of the `ResponseOptions` instance, using the optional input as values to
     * override
     * existing values. This method will not change the values of the instance on which it is being
     * called.
     *
     * This may be useful when sharing a base `ResponseOptions` object inside tests,
     * where certain properties may change from test to test.
     *
     * @usageNotes
     * ### Example
     *
     * ```typescript
     * import {ResponseOptions, Response} from '@angular/http';
     *
     * var options = new ResponseOptions({
     *   body: {name: 'Jeff'}
     * });
     * var res = new Response(options.merge({
     *   url: 'https://google.com'
     * }));
     * console.log('options.url:', options.url); // null
     * console.log('res.json():', res.json()); // Object {name: "Jeff"}
     * console.log('res.url:', res.url); // https://google.com
     * ```
     */
    ResponseOptions.prototype.merge = function (options) {
        return new ResponseOptions({
            body: options && options.body != null ? options.body : this.body,
            status: options && options.status != null ? options.status : this.status,
            headers: options && options.headers != null ? options.headers : this.headers,
            statusText: options && options.statusText != null ? options.statusText : this.statusText,
            type: options && options.type != null ? options.type : this.type,
            url: options && options.url != null ? options.url : this.url,
        });
    };
    return ResponseOptions;
}());
/**
 * Subclass of {@link ResponseOptions}, with default values.
 *
 * Default values:
 *  * status: 200
 *  * headers: empty {@link Headers} object
 *
 * This class could be extended and bound to the {@link ResponseOptions} class
 * when configuring an {@link Injector}, in order to override the default options
 * used by {@link Http} to create {@link Response Responses}.
 *
 * @usageNotes
 * ### Example
 *
 * ```typescript
 * import {provide} from '@angular/core';
 * import {bootstrap} from '@angular/platform-browser/browser';
 * import {HTTP_PROVIDERS, Headers, Http, BaseResponseOptions, ResponseOptions} from
 * '@angular/http';
 * import {App} from './myapp';
 *
 * class MyOptions extends BaseResponseOptions {
 *   headers:Headers = new Headers({network: 'github'});
 * }
 *
 * bootstrap(App, [HTTP_PROVIDERS, {provide: ResponseOptions, useClass: MyOptions}]);
 * ```
 *
 * The options could also be extended when manually creating a {@link Response}
 * object.
 *
 * ### Example
 *
 * ```
 * import {BaseResponseOptions, Response} from '@angular/http';
 *
 * var options = new BaseResponseOptions();
 * var res = new Response(options.merge({
 *   body: 'Angular',
 *   headers: new Headers({framework: 'angular'})
 * }));
 * console.log('res.headers.get("framework"):', res.headers.get('framework')); // angular
 * console.log('res.text():', res.text()); // Angular;
 * ```
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var BaseResponseOptions = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BaseResponseOptions, _super);
    function BaseResponseOptions() {
        return _super.call(this, { status: 200, statusText: 'Ok', type: ResponseType.Default, headers: new Headers() }) || this;
    }
    BaseResponseOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], BaseResponseOptions);
    return BaseResponseOptions;
}(ResponseOptions));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Abstract class from which real backends are derived.
 *
 * The primary purpose of a `ConnectionBackend` is to create new connections to fulfill a given
 * {@link Request}.
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var ConnectionBackend = /** @class */ (function () {
    function ConnectionBackend() {
    }
    return ConnectionBackend;
}());
/**
 * Abstract class from which real connections are derived.
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var Connection = /** @class */ (function () {
    function Connection() {
    }
    return Connection;
}());
/**
 * An XSRFStrategy configures XSRF protection (e.g. via headers) on an HTTP request.
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var XSRFStrategy = /** @class */ (function () {
    function XSRFStrategy() {
    }
    return XSRFStrategy;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function normalizeMethodName(method) {
    if (typeof method !== 'string')
        return method;
    switch (method.toUpperCase()) {
        case 'GET':
            return RequestMethod.Get;
        case 'POST':
            return RequestMethod.Post;
        case 'PUT':
            return RequestMethod.Put;
        case 'DELETE':
            return RequestMethod.Delete;
        case 'OPTIONS':
            return RequestMethod.Options;
        case 'HEAD':
            return RequestMethod.Head;
        case 'PATCH':
            return RequestMethod.Patch;
    }
    throw new Error("Invalid request method. The method \"" + method + "\" is not supported.");
}
var isSuccess = function (status) { return (status >= 200 && status < 300); };
function getResponseURL(xhr) {
    if ('responseURL' in xhr) {
        return xhr.responseURL;
    }
    if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
        return xhr.getResponseHeader('X-Request-URL');
    }
    return null;
}
function stringToArrayBuffer(input) {
    var view = new Uint16Array(input.length);
    for (var i = 0, strLen = input.length; i < strLen; i++) {
        view[i] = input.charCodeAt(i);
    }
    return view.buffer;
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function paramParser(rawParams) {
    if (rawParams === void 0) { rawParams = ''; }
    var map = new Map();
    if (rawParams.length > 0) {
        var params = rawParams.split('&');
        params.forEach(function (param) {
            var eqIdx = param.indexOf('=');
            var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(eqIdx == -1 ? [param, ''] : [param.slice(0, eqIdx), param.slice(eqIdx + 1)], 2), key = _a[0], val = _a[1];
            var list = map.get(key) || [];
            list.push(val);
            map.set(key, list);
        });
    }
    return map;
}
/**
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 **/
var QueryEncoder = /** @class */ (function () {
    function QueryEncoder() {
    }
    QueryEncoder.prototype.encodeKey = function (key) { return standardEncoding(key); };
    QueryEncoder.prototype.encodeValue = function (value) { return standardEncoding(value); };
    return QueryEncoder;
}());
function standardEncoding(v) {
    return encodeURIComponent(v)
        .replace(/%40/gi, '@')
        .replace(/%3A/gi, ':')
        .replace(/%24/gi, '$')
        .replace(/%2C/gi, ',')
        .replace(/%3B/gi, ';')
        .replace(/%2B/gi, '+')
        .replace(/%3D/gi, '=')
        .replace(/%3F/gi, '?')
        .replace(/%2F/gi, '/');
}
/**
 * Map-like representation of url search parameters, based on
 * [URLSearchParams](https://url.spec.whatwg.org/#urlsearchparams) in the url living standard,
 * with several extensions for merging URLSearchParams objects:
 *   - setAll()
 *   - appendAll()
 *   - replaceAll()
 *
 * This class accepts an optional second parameter of ${@link QueryEncoder},
 * which is used to serialize parameters before making a request. By default,
 * `QueryEncoder` encodes keys and values of parameters using `encodeURIComponent`,
 * and then un-encodes certain characters that are allowed to be part of the query
 * according to IETF RFC 3986: https://tools.ietf.org/html/rfc3986.
 *
 * These are the characters that are not encoded: `! $ \' ( ) * + , ; A 9 - . _ ~ ? /`
 *
 * If the set of allowed query characters is not acceptable for a particular backend,
 * `QueryEncoder` can be subclassed and provided as the 2nd argument to URLSearchParams.
 *
 * ```
 * import {URLSearchParams, QueryEncoder} from '@angular/http';
 * class MyQueryEncoder extends QueryEncoder {
 *   encodeKey(k: string): string {
 *     return myEncodingFunction(k);
 *   }
 *
 *   encodeValue(v: string): string {
 *     return myEncodingFunction(v);
 *   }
 * }
 *
 * let params = new URLSearchParams('', new MyQueryEncoder());
 * ```
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var URLSearchParams = /** @class */ (function () {
    function URLSearchParams(rawParams, queryEncoder) {
        if (rawParams === void 0) { rawParams = ''; }
        if (queryEncoder === void 0) { queryEncoder = new QueryEncoder(); }
        this.rawParams = rawParams;
        this.queryEncoder = queryEncoder;
        this.paramsMap = paramParser(rawParams);
    }
    URLSearchParams.prototype.clone = function () {
        var clone = new URLSearchParams('', this.queryEncoder);
        clone.appendAll(this);
        return clone;
    };
    URLSearchParams.prototype.has = function (param) { return this.paramsMap.has(param); };
    URLSearchParams.prototype.get = function (param) {
        var storedParam = this.paramsMap.get(param);
        return Array.isArray(storedParam) ? storedParam[0] : null;
    };
    URLSearchParams.prototype.getAll = function (param) { return this.paramsMap.get(param) || []; };
    URLSearchParams.prototype.set = function (param, val) {
        if (val === void 0 || val === null) {
            this.delete(param);
            return;
        }
        var list = this.paramsMap.get(param) || [];
        list.length = 0;
        list.push(val);
        this.paramsMap.set(param, list);
    };
    // A merge operation
    // For each name-values pair in `searchParams`, perform `set(name, values[0])`
    //
    // E.g: "a=[1,2,3], c=[8]" + "a=[4,5,6], b=[7]" = "a=[4], c=[8], b=[7]"
    //
    // TODO(@caitp): document this better
    URLSearchParams.prototype.setAll = function (searchParams) {
        var _this = this;
        searchParams.paramsMap.forEach(function (value, param) {
            var list = _this.paramsMap.get(param) || [];
            list.length = 0;
            list.push(value[0]);
            _this.paramsMap.set(param, list);
        });
    };
    URLSearchParams.prototype.append = function (param, val) {
        if (val === void 0 || val === null)
            return;
        var list = this.paramsMap.get(param) || [];
        list.push(val);
        this.paramsMap.set(param, list);
    };
    // A merge operation
    // For each name-values pair in `searchParams`, perform `append(name, value)`
    // for each value in `values`.
    //
    // E.g: "a=[1,2], c=[8]" + "a=[3,4], b=[7]" = "a=[1,2,3,4], c=[8], b=[7]"
    //
    // TODO(@caitp): document this better
    URLSearchParams.prototype.appendAll = function (searchParams) {
        var _this = this;
        searchParams.paramsMap.forEach(function (value, param) {
            var list = _this.paramsMap.get(param) || [];
            for (var i = 0; i < value.length; ++i) {
                list.push(value[i]);
            }
            _this.paramsMap.set(param, list);
        });
    };
    // A merge operation
    // For each name-values pair in `searchParams`, perform `delete(name)`,
    // followed by `set(name, values)`
    //
    // E.g: "a=[1,2,3], c=[8]" + "a=[4,5,6], b=[7]" = "a=[4,5,6], c=[8], b=[7]"
    //
    // TODO(@caitp): document this better
    URLSearchParams.prototype.replaceAll = function (searchParams) {
        var _this = this;
        searchParams.paramsMap.forEach(function (value, param) {
            var list = _this.paramsMap.get(param) || [];
            list.length = 0;
            for (var i = 0; i < value.length; ++i) {
                list.push(value[i]);
            }
            _this.paramsMap.set(param, list);
        });
    };
    URLSearchParams.prototype.toString = function () {
        var _this = this;
        var paramsList = [];
        this.paramsMap.forEach(function (values, k) {
            values.forEach(function (v) { return paramsList.push(_this.queryEncoder.encodeKey(k) + '=' + _this.queryEncoder.encodeValue(v)); });
        });
        return paramsList.join('&');
    };
    URLSearchParams.prototype.delete = function (param) { this.paramsMap.delete(param); };
    return URLSearchParams;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * HTTP request body used by both {@link Request} and {@link Response}
 * https://fetch.spec.whatwg.org/#body
 */
var Body = /** @class */ (function () {
    function Body() {
    }
    /**
     * Attempts to return body as parsed `JSON` object, or raises an exception.
     */
    Body.prototype.json = function () {
        if (typeof this._body === 'string') {
            return JSON.parse(this._body);
        }
        if (this._body instanceof ArrayBuffer) {
            return JSON.parse(this.text());
        }
        return this._body;
    };
    /**
     * Returns the body as a string, presuming `toString()` can be called on the response body.
     *
     * When decoding an `ArrayBuffer`, the optional `encodingHint` parameter determines how the
     * bytes in the buffer will be interpreted. Valid values are:
     *
     * - `legacy` - incorrectly interpret the bytes as UTF-16 (technically, UCS-2). Only characters
     *   in the Basic Multilingual Plane are supported, surrogate pairs are not handled correctly.
     *   In addition, the endianness of the 16-bit octet pairs in the `ArrayBuffer` is not taken
     *   into consideration. This is the default behavior to avoid breaking apps, but should be
     *   considered deprecated.
     *
     * - `iso-8859` - interpret the bytes as ISO-8859 (which can be used for ASCII encoded text).
     */
    Body.prototype.text = function (encodingHint) {
        if (encodingHint === void 0) { encodingHint = 'legacy'; }
        if (this._body instanceof URLSearchParams) {
            return this._body.toString();
        }
        if (this._body instanceof ArrayBuffer) {
            switch (encodingHint) {
                case 'legacy':
                    return String.fromCharCode.apply(null, new Uint16Array(this._body));
                case 'iso-8859':
                    return String.fromCharCode.apply(null, new Uint8Array(this._body));
                default:
                    throw new Error("Invalid value for encodingHint: " + encodingHint);
            }
        }
        if (this._body == null) {
            return '';
        }
        if (typeof this._body === 'object') {
            return JSON.stringify(this._body, null, 2);
        }
        return this._body.toString();
    };
    /**
     * Return the body as an ArrayBuffer
     */
    Body.prototype.arrayBuffer = function () {
        if (this._body instanceof ArrayBuffer) {
            return this._body;
        }
        return stringToArrayBuffer(this.text());
    };
    /**
      * Returns the request's body as a Blob, assuming that body exists.
      */
    Body.prototype.blob = function () {
        if (this._body instanceof Blob) {
            return this._body;
        }
        if (this._body instanceof ArrayBuffer) {
            return new Blob([this._body]);
        }
        throw new Error('The request body isn\'t either a blob or an array buffer');
    };
    return Body;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Creates `Response` instances from provided values.
 *
 * Though this object isn't
 * usually instantiated by end-users, it is the primary object interacted with when it comes time to
 * add data to a view.
 *
 * @usageNotes
 * ### Example
 *
 * ```
 * http.request('my-friends.txt').subscribe(response => this.friends = response.text());
 * ```
 *
 * The Response's interface is inspired by the Response constructor defined in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#response-class), but is considered a static value whose body
 * can be accessed many times. There are other differences in the implementation, but this is the
 * most significant.
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var Response = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Response, _super);
    function Response(responseOptions) {
        var _this = _super.call(this) || this;
        _this._body = responseOptions.body;
        _this.status = responseOptions.status;
        _this.ok = (_this.status >= 200 && _this.status <= 299);
        _this.statusText = responseOptions.statusText;
        _this.headers = responseOptions.headers;
        _this.type = responseOptions.type;
        _this.url = responseOptions.url;
        return _this;
    }
    Response.prototype.toString = function () {
        return "Response with status: " + this.status + " " + this.statusText + " for URL: " + this.url;
    };
    return Response;
}(Body));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var _nextRequestId = 0;
var JSONP_HOME = '__ng_jsonp__';
var _jsonpConnections = null;
function _getJsonpConnections() {
    var w = typeof window == 'object' ? window : {};
    if (_jsonpConnections === null) {
        _jsonpConnections = w[JSONP_HOME] = {};
    }
    return _jsonpConnections;
}
// Make sure not to evaluate this in a non-browser environment!
var BrowserJsonp = /** @class */ (function () {
    function BrowserJsonp() {
    }
    // Construct a <script> element with the specified URL
    BrowserJsonp.prototype.build = function (url) {
        var node = document.createElement('script');
        node.src = url;
        return node;
    };
    BrowserJsonp.prototype.nextRequestID = function () { return "__req" + _nextRequestId++; };
    BrowserJsonp.prototype.requestCallback = function (id) { return JSONP_HOME + "." + id + ".finished"; };
    BrowserJsonp.prototype.exposeConnection = function (id, connection) {
        var connections = _getJsonpConnections();
        connections[id] = connection;
    };
    BrowserJsonp.prototype.removeConnection = function (id) {
        var connections = _getJsonpConnections();
        connections[id] = null;
    };
    // Attach the <script> element to the DOM
    BrowserJsonp.prototype.send = function (node) { document.body.appendChild((node)); };
    // Remove <script> element from the DOM
    BrowserJsonp.prototype.cleanup = function (node) {
        if (node.parentNode) {
            node.parentNode.removeChild((node));
        }
    };
    BrowserJsonp = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], BrowserJsonp);
    return BrowserJsonp;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var JSONP_ERR_NO_CALLBACK = 'JSONP injected script did not invoke callback.';
var JSONP_ERR_WRONG_METHOD = 'JSONP requests must use GET request method.';
/**
 * Base class for an in-flight JSONP request.
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var JSONPConnection = /** @class */ (function () {
    /** @internal */
    function JSONPConnection(req, _dom, baseResponseOptions) {
        var _this = this;
        this._dom = _dom;
        this.baseResponseOptions = baseResponseOptions;
        this._finished = false;
        if (req.method !== RequestMethod.Get) {
            throw new TypeError(JSONP_ERR_WRONG_METHOD);
        }
        this.request = req;
        this.response = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (responseObserver) {
            _this.readyState = ReadyState.Loading;
            var id = _this._id = _dom.nextRequestID();
            _dom.exposeConnection(id, _this);
            // Workaround Dart
            // url = url.replace(/=JSONP_CALLBACK(&|$)/, `generated method`);
            var callback = _dom.requestCallback(_this._id);
            var url = req.url;
            if (url.indexOf('=JSONP_CALLBACK&') > -1) {
                url = url.replace('=JSONP_CALLBACK&', "=" + callback + "&");
            }
            else if (url.lastIndexOf('=JSONP_CALLBACK') === url.length - '=JSONP_CALLBACK'.length) {
                url = url.substring(0, url.length - '=JSONP_CALLBACK'.length) + ("=" + callback);
            }
            var script = _this._script = _dom.build(url);
            var onLoad = function (event) {
                if (_this.readyState === ReadyState.Cancelled)
                    return;
                _this.readyState = ReadyState.Done;
                _dom.cleanup(script);
                if (!_this._finished) {
                    var responseOptions_1 = new ResponseOptions({ body: JSONP_ERR_NO_CALLBACK, type: ResponseType.Error, url: url });
                    if (baseResponseOptions) {
                        responseOptions_1 = baseResponseOptions.merge(responseOptions_1);
                    }
                    responseObserver.error(new Response(responseOptions_1));
                    return;
                }
                var responseOptions = new ResponseOptions({ body: _this._responseData, url: url });
                if (_this.baseResponseOptions) {
                    responseOptions = _this.baseResponseOptions.merge(responseOptions);
                }
                responseObserver.next(new Response(responseOptions));
                responseObserver.complete();
            };
            var onError = function (error) {
                if (_this.readyState === ReadyState.Cancelled)
                    return;
                _this.readyState = ReadyState.Done;
                _dom.cleanup(script);
                var responseOptions = new ResponseOptions({ body: error.message, type: ResponseType.Error });
                if (baseResponseOptions) {
                    responseOptions = baseResponseOptions.merge(responseOptions);
                }
                responseObserver.error(new Response(responseOptions));
            };
            script.addEventListener('load', onLoad);
            script.addEventListener('error', onError);
            _dom.send(script);
            return function () {
                _this.readyState = ReadyState.Cancelled;
                script.removeEventListener('load', onLoad);
                script.removeEventListener('error', onError);
                _this._dom.cleanup(script);
            };
        });
    }
    /**
     * Callback called when the JSONP request completes, to notify the application
     * of the new data.
     */
    JSONPConnection.prototype.finished = function (data) {
        // Don't leak connections
        this._finished = true;
        this._dom.removeConnection(this._id);
        if (this.readyState === ReadyState.Cancelled)
            return;
        this._responseData = data;
    };
    return JSONPConnection;
}());
/**
 * A {@link ConnectionBackend} that uses the JSONP strategy of making requests.
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var JSONPBackend = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(JSONPBackend, _super);
    /** @internal */
    function JSONPBackend(_browserJSONP, _baseResponseOptions) {
        var _this = _super.call(this) || this;
        _this._browserJSONP = _browserJSONP;
        _this._baseResponseOptions = _baseResponseOptions;
        return _this;
    }
    JSONPBackend.prototype.createConnection = function (request) {
        return new JSONPConnection(request, this._browserJSONP, this._baseResponseOptions);
    };
    JSONPBackend = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [BrowserJsonp, ResponseOptions])
    ], JSONPBackend);
    return JSONPBackend;
}(ConnectionBackend));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var XSSI_PREFIX = /^\)\]\}',?\n/;
/**
 * Creates connections using `XMLHttpRequest`. Given a fully-qualified
 * request, an `XHRConnection` will immediately create an `XMLHttpRequest` object and send the
 * request.
 *
 * This class would typically not be created or interacted with directly inside applications, though
 * the {@link MockConnection} may be interacted with in tests.
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var XHRConnection = /** @class */ (function () {
    function XHRConnection(req, browserXHR, baseResponseOptions) {
        var _this = this;
        this.request = req;
        this.response = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (responseObserver) {
            var _xhr = browserXHR.build();
            _xhr.open(RequestMethod[req.method].toUpperCase(), req.url);
            if (req.withCredentials != null) {
                _xhr.withCredentials = req.withCredentials;
            }
            // load event handler
            var onLoad = function () {
                // normalize IE9 bug (http://bugs.jquery.com/ticket/1450)
                var status = _xhr.status === 1223 ? 204 : _xhr.status;
                var body = null;
                // HTTP 204 means no content
                if (status !== 204) {
                    // responseText is the old-school way of retrieving response (supported by IE8 & 9)
                    // response/responseType properties were introduced in ResourceLoader Level2 spec
                    // (supported by IE10)
                    body = (typeof _xhr.response === 'undefined') ? _xhr.responseText : _xhr.response;
                    // Implicitly strip a potential XSSI prefix.
                    if (typeof body === 'string') {
                        body = body.replace(XSSI_PREFIX, '');
                    }
                }
                // fix status code when it is 0 (0 status is undocumented).
                // Occurs when accessing file resources or on Android 4.1 stock browser
                // while retrieving files from application cache.
                if (status === 0) {
                    status = body ? 200 : 0;
                }
                var headers = Headers.fromResponseHeaderString(_xhr.getAllResponseHeaders());
                // IE 9 does not provide the way to get URL of response
                var url = getResponseURL(_xhr) || req.url;
                var statusText = _xhr.statusText || 'OK';
                var responseOptions = new ResponseOptions({ body: body, status: status, headers: headers, statusText: statusText, url: url });
                if (baseResponseOptions != null) {
                    responseOptions = baseResponseOptions.merge(responseOptions);
                }
                var response = new Response(responseOptions);
                response.ok = isSuccess(status);
                if (response.ok) {
                    responseObserver.next(response);
                    // TODO(gdi2290): defer complete if array buffer until done
                    responseObserver.complete();
                    return;
                }
                responseObserver.error(response);
            };
            // error event handler
            var onError = function (err) {
                var responseOptions = new ResponseOptions({
                    body: err,
                    type: ResponseType.Error,
                    status: _xhr.status,
                    statusText: _xhr.statusText,
                });
                if (baseResponseOptions != null) {
                    responseOptions = baseResponseOptions.merge(responseOptions);
                }
                responseObserver.error(new Response(responseOptions));
            };
            _this.setDetectedContentType(req, _xhr);
            if (req.headers == null) {
                req.headers = new Headers();
            }
            if (!req.headers.has('Accept')) {
                req.headers.append('Accept', 'application/json, text/plain, */*');
            }
            req.headers.forEach(function (values, name) { return _xhr.setRequestHeader(name, values.join(',')); });
            // Select the correct buffer type to store the response
            if (req.responseType != null && _xhr.responseType != null) {
                switch (req.responseType) {
                    case ResponseContentType.ArrayBuffer:
                        _xhr.responseType = 'arraybuffer';
                        break;
                    case ResponseContentType.Json:
                        _xhr.responseType = 'json';
                        break;
                    case ResponseContentType.Text:
                        _xhr.responseType = 'text';
                        break;
                    case ResponseContentType.Blob:
                        _xhr.responseType = 'blob';
                        break;
                    default:
                        throw new Error('The selected responseType is not supported');
                }
            }
            _xhr.addEventListener('load', onLoad);
            _xhr.addEventListener('error', onError);
            _xhr.send(_this.request.getBody());
            return function () {
                _xhr.removeEventListener('load', onLoad);
                _xhr.removeEventListener('error', onError);
                _xhr.abort();
            };
        });
    }
    XHRConnection.prototype.setDetectedContentType = function (req /** TODO Request */, _xhr /** XMLHttpRequest */) {
        // Skip if a custom Content-Type header is provided
        if (req.headers != null && req.headers.get('Content-Type') != null) {
            return;
        }
        // Set the detected content type
        switch (req.contentType) {
            case ContentType.NONE:
                break;
            case ContentType.JSON:
                _xhr.setRequestHeader('content-type', 'application/json');
                break;
            case ContentType.FORM:
                _xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
                break;
            case ContentType.TEXT:
                _xhr.setRequestHeader('content-type', 'text/plain');
                break;
            case ContentType.BLOB:
                var blob = req.blob();
                if (blob.type) {
                    _xhr.setRequestHeader('content-type', blob.type);
                }
                break;
        }
    };
    return XHRConnection;
}());
/**
 * `XSRFConfiguration` sets up Cross Site Request Forgery (XSRF) protection for the application
 * using a cookie. See https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)
 * for more information on XSRF.
 *
 * Applications can configure custom cookie and header names by binding an instance of this class
 * with different `cookieName` and `headerName` values. See the main HTTP documentation for more
 * details.
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var CookieXSRFStrategy = /** @class */ (function () {
    function CookieXSRFStrategy(_cookieName, _headerName) {
        if (_cookieName === void 0) { _cookieName = 'XSRF-TOKEN'; }
        if (_headerName === void 0) { _headerName = 'X-XSRF-TOKEN'; }
        this._cookieName = _cookieName;
        this._headerName = _headerName;
    }
    CookieXSRFStrategy.prototype.configureRequest = function (req) {
        var xsrfToken = Object(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["ɵgetDOM"])().getCookie(this._cookieName);
        if (xsrfToken) {
            req.headers.set(this._headerName, xsrfToken);
        }
    };
    return CookieXSRFStrategy;
}());
/**
 * Creates {@link XHRConnection} instances.
 *
 * This class would typically not be used by end users, but could be
 * overridden if a different backend implementation should be used,
 * such as in a node backend.
 *
 * @usageNotes
 * ### Example
 *
 * ```
 * import {Http, MyNodeBackend, HTTP_PROVIDERS, BaseRequestOptions} from '@angular/http';
 * @Component({
 *   viewProviders: [
 *     HTTP_PROVIDERS,
 *     {provide: Http, useFactory: (backend, options) => {
 *       return new Http(backend, options);
 *     }, deps: [MyNodeBackend, BaseRequestOptions]}]
 * })
 * class MyComponent {
 *   constructor(http:Http) {
 *     http.request('people.json').subscribe(res => this.people = res.json());
 *   }
 * }
 * ```
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var XHRBackend = /** @class */ (function () {
    function XHRBackend(_browserXHR, _baseResponseOptions, _xsrfStrategy) {
        this._browserXHR = _browserXHR;
        this._baseResponseOptions = _baseResponseOptions;
        this._xsrfStrategy = _xsrfStrategy;
    }
    XHRBackend.prototype.createConnection = function (request) {
        this._xsrfStrategy.configureRequest(request);
        return new XHRConnection(request, this._browserXHR, this._baseResponseOptions);
    };
    XHRBackend = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [BrowserXhr, ResponseOptions,
            XSRFStrategy])
    ], XHRBackend);
    return XHRBackend;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Creates a request options object to be optionally provided when instantiating a
 * {@link Request}.
 *
 * This class is based on the `RequestInit` description in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#requestinit).
 *
 * All values are null by default. Typical defaults can be found in the {@link BaseRequestOptions}
 * class, which sub-classes `RequestOptions`.
 *
 * ```typescript
 * import {RequestOptions, Request, RequestMethod} from '@angular/http';
 *
 * const options = new RequestOptions({
 *   method: RequestMethod.Post,
 *   url: 'https://google.com'
 * });
 * const req = new Request(options);
 * console.log('req.method:', RequestMethod[req.method]); // Post
 * console.log('options.url:', options.url); // https://google.com
 * ```
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var RequestOptions = /** @class */ (function () {
    // TODO(Dzmitry): remove search when this.search is removed
    function RequestOptions(opts) {
        if (opts === void 0) { opts = {}; }
        var method = opts.method, headers = opts.headers, body = opts.body, url = opts.url, search = opts.search, params = opts.params, withCredentials = opts.withCredentials, responseType = opts.responseType;
        this.method = method != null ? normalizeMethodName(method) : null;
        this.headers = headers != null ? headers : null;
        this.body = body != null ? body : null;
        this.url = url != null ? url : null;
        this.params = this._mergeSearchParams(params || search);
        this.withCredentials = withCredentials != null ? withCredentials : null;
        this.responseType = responseType != null ? responseType : null;
    }
    Object.defineProperty(RequestOptions.prototype, "search", {
        /**
         * @deprecated from 4.0.0. Use params instead.
         */
        get: function () { return this.params; },
        /**
         * @deprecated from 4.0.0. Use params instead.
         */
        set: function (params) { this.params = params; },
        enumerable: true,
        configurable: true
    });
    /**
     * Creates a copy of the `RequestOptions` instance, using the optional input as values to override
     * existing values. This method will not change the values of the instance on which it is being
     * called.
     *
     * Note that `headers` and `search` will override existing values completely if present in
     * the `options` object. If these values should be merged, it should be done prior to calling
     * `merge` on the `RequestOptions` instance.
     *
     * ```typescript
     * import {RequestOptions, Request, RequestMethod} from '@angular/http';
     *
     * const options = new RequestOptions({
     *   method: RequestMethod.Post
     * });
     * const req = new Request(options.merge({
     *   url: 'https://google.com'
     * }));
     * console.log('req.method:', RequestMethod[req.method]); // Post
     * console.log('options.url:', options.url); // null
     * console.log('req.url:', req.url); // https://google.com
     * ```
     */
    RequestOptions.prototype.merge = function (options) {
        return new RequestOptions({
            method: options && options.method != null ? options.method : this.method,
            headers: options && options.headers != null ? options.headers : new Headers(this.headers),
            body: options && options.body != null ? options.body : this.body,
            url: options && options.url != null ? options.url : this.url,
            params: options && this._mergeSearchParams(options.params || options.search),
            withCredentials: options && options.withCredentials != null ? options.withCredentials :
                this.withCredentials,
            responseType: options && options.responseType != null ? options.responseType :
                this.responseType
        });
    };
    RequestOptions.prototype._mergeSearchParams = function (params) {
        if (!params)
            return this.params;
        if (params instanceof URLSearchParams) {
            return params.clone();
        }
        if (typeof params === 'string') {
            return new URLSearchParams(params);
        }
        return this._parseParams(params);
    };
    RequestOptions.prototype._parseParams = function (objParams) {
        var _this = this;
        if (objParams === void 0) { objParams = {}; }
        var params = new URLSearchParams();
        Object.keys(objParams).forEach(function (key) {
            var value = objParams[key];
            if (Array.isArray(value)) {
                value.forEach(function (item) { return _this._appendParam(key, item, params); });
            }
            else {
                _this._appendParam(key, value, params);
            }
        });
        return params;
    };
    RequestOptions.prototype._appendParam = function (key, value, params) {
        if (typeof value !== 'string') {
            value = JSON.stringify(value);
        }
        params.append(key, value);
    };
    return RequestOptions;
}());
/**
 * Subclass of {@link RequestOptions}, with default values.
 *
 * Default values:
 *  * method: {@link RequestMethod RequestMethod.Get}
 *  * headers: empty {@link Headers} object
 *
 * This class could be extended and bound to the {@link RequestOptions} class
 * when configuring an {@link Injector}, in order to override the default options
 * used by {@link Http} to create and send {@link Request Requests}.
 *
 * ```typescript
 * import {BaseRequestOptions, RequestOptions} from '@angular/http';
 *
 * class MyOptions extends BaseRequestOptions {
 *   search: string = 'coreTeam=true';
 * }
 *
 * {provide: RequestOptions, useClass: MyOptions};
 * ```
 *
 * The options could also be extended when manually creating a {@link Request}
 * object.
 *
 * ```
 * import {BaseRequestOptions, Request, RequestMethod} from '@angular/http';
 *
 * const options = new BaseRequestOptions();
 * const req = new Request(options.merge({
 *   method: RequestMethod.Post,
 *   url: 'https://google.com'
 * }));
 * console.log('req.method:', RequestMethod[req.method]); // Post
 * console.log('options.url:', options.url); // null
 * console.log('req.url:', req.url); // https://google.com
 * ```
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var BaseRequestOptions = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BaseRequestOptions, _super);
    function BaseRequestOptions() {
        return _super.call(this, { method: RequestMethod.Get, headers: new Headers() }) || this;
    }
    BaseRequestOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], BaseRequestOptions);
    return BaseRequestOptions;
}(RequestOptions));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// TODO(jeffbcross): properly implement body accessors
/**
 * Creates `Request` instances from provided values.
 *
 * The Request's interface is inspired by the Request constructor defined in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#request-class),
 * but is considered a static value whose body can be accessed many times. There are other
 * differences in the implementation, but this is the most significant.
 *
 * `Request` instances are typically created by higher-level classes, like {@link Http} and
 * {@link Jsonp}, but it may occasionally be useful to explicitly create `Request` instances.
 * One such example is when creating services that wrap higher-level services, like {@link Http},
 * where it may be useful to generate a `Request` with arbitrary headers and search params.
 *
 * ```typescript
 * import {Injectable, Injector} from '@angular/core';
 * import {HTTP_PROVIDERS, Http, Request, RequestMethod} from '@angular/http';
 *
 * @Injectable()
 * class AutoAuthenticator {
 *   constructor(public http:Http) {}
 *   request(url:string) {
 *     return this.http.request(new Request({
 *       method: RequestMethod.Get,
 *       url: url,
 *       search: 'password=123'
 *     }));
 *   }
 * }
 *
 * var injector = Injector.resolveAndCreate([HTTP_PROVIDERS, AutoAuthenticator]);
 * var authenticator = injector.get(AutoAuthenticator);
 * authenticator.request('people.json').subscribe(res => {
 *   //URL should have included '?password=123'
 *   console.log('people', res.json());
 * });
 * ```
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var Request = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Request, _super);
    function Request(requestOptions) {
        var _this = _super.call(this) || this;
        // TODO: assert that url is present
        var url = requestOptions.url;
        _this.url = requestOptions.url;
        var paramsArg = requestOptions.params || requestOptions.search;
        if (paramsArg) {
            var params = void 0;
            if (typeof paramsArg === 'object' && !(paramsArg instanceof URLSearchParams)) {
                params = urlEncodeParams(paramsArg).toString();
            }
            else {
                params = paramsArg.toString();
            }
            if (params.length > 0) {
                var prefix = '?';
                if (_this.url.indexOf('?') != -1) {
                    prefix = (_this.url[_this.url.length - 1] == '&') ? '' : '&';
                }
                // TODO: just delete search-query-looking string in url?
                _this.url = url + prefix + params;
            }
        }
        _this._body = requestOptions.body;
        _this.method = normalizeMethodName(requestOptions.method);
        // TODO(jeffbcross): implement behavior
        // Defaults to 'omit', consistent with browser
        _this.headers = new Headers(requestOptions.headers);
        _this.contentType = _this.detectContentType();
        _this.withCredentials = requestOptions.withCredentials;
        _this.responseType = requestOptions.responseType;
        return _this;
    }
    /**
     * Returns the content type enum based on header options.
     */
    Request.prototype.detectContentType = function () {
        switch (this.headers.get('content-type')) {
            case 'application/json':
                return ContentType.JSON;
            case 'application/x-www-form-urlencoded':
                return ContentType.FORM;
            case 'multipart/form-data':
                return ContentType.FORM_DATA;
            case 'text/plain':
            case 'text/html':
                return ContentType.TEXT;
            case 'application/octet-stream':
                return this._body instanceof ArrayBuffer$1 ? ContentType.ARRAY_BUFFER : ContentType.BLOB;
            default:
                return this.detectContentTypeFromBody();
        }
    };
    /**
     * Returns the content type of request's body based on its type.
     */
    Request.prototype.detectContentTypeFromBody = function () {
        if (this._body == null) {
            return ContentType.NONE;
        }
        else if (this._body instanceof URLSearchParams) {
            return ContentType.FORM;
        }
        else if (this._body instanceof FormData) {
            return ContentType.FORM_DATA;
        }
        else if (this._body instanceof Blob$1) {
            return ContentType.BLOB;
        }
        else if (this._body instanceof ArrayBuffer$1) {
            return ContentType.ARRAY_BUFFER;
        }
        else if (this._body && typeof this._body === 'object') {
            return ContentType.JSON;
        }
        else {
            return ContentType.TEXT;
        }
    };
    /**
     * Returns the request's body according to its type. If body is undefined, return
     * null.
     */
    Request.prototype.getBody = function () {
        switch (this.contentType) {
            case ContentType.JSON:
                return this.text();
            case ContentType.FORM:
                return this.text();
            case ContentType.FORM_DATA:
                return this._body;
            case ContentType.TEXT:
                return this.text();
            case ContentType.BLOB:
                return this.blob();
            case ContentType.ARRAY_BUFFER:
                return this.arrayBuffer();
            default:
                return null;
        }
    };
    return Request;
}(Body));
function urlEncodeParams(params) {
    var searchParams = new URLSearchParams();
    Object.keys(params).forEach(function (key) {
        var value = params[key];
        if (value && Array.isArray(value)) {
            value.forEach(function (element) { return searchParams.append(key, element.toString()); });
        }
        else {
            searchParams.append(key, value.toString());
        }
    });
    return searchParams;
}
var noop = function () { };
var w = typeof window == 'object' ? window : noop;
var FormData = w /** TODO #9100 */['FormData'] || noop;
var Blob$1 = w /** TODO #9100 */['Blob'] || noop;
var ArrayBuffer$1 = w /** TODO #9100 */['ArrayBuffer'] || noop;

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function httpRequest(backend, request) {
    return backend.createConnection(request).response;
}
function mergeOptions(defaultOpts, providedOpts, method, url) {
    var newOptions = defaultOpts;
    if (providedOpts) {
        // Hack so Dart can used named parameters
        return newOptions.merge(new RequestOptions({
            method: providedOpts.method || method,
            url: providedOpts.url || url,
            search: providedOpts.search,
            params: providedOpts.params,
            headers: providedOpts.headers,
            body: providedOpts.body,
            withCredentials: providedOpts.withCredentials,
            responseType: providedOpts.responseType
        }));
    }
    return newOptions.merge(new RequestOptions({ method: method, url: url }));
}
/**
 * Performs http requests using `XMLHttpRequest` as the default backend.
 *
 * `Http` is available as an injectable class, with methods to perform http requests. Calling
 * `request` returns an `Observable` which will emit a single {@link Response} when a
 * response is received.
 *
 * @usageNotes
 * ### Example
 *
 * ```typescript
 * import {Http, HTTP_PROVIDERS} from '@angular/http';
 * import {map} from 'rxjs/operators';
 *
 * @Component({
 *   selector: 'http-app',
 *   viewProviders: [HTTP_PROVIDERS],
 *   templateUrl: 'people.html'
 * })
 * class PeopleComponent {
 *   constructor(http: Http) {
 *     http.get('people.json')
 *       // Call map on the response observable to get the parsed people object
 *       .pipe(map(res => res.json()))
 *       // Subscribe to the observable to get the parsed people object and attach it to the
 *       // component
 *       .subscribe(people => this.people = people);
 *   }
 * }
 * ```
 *
 *
 * ### Example
 *
 * ```
 * http.get('people.json').subscribe((res:Response) => this.people = res.json());
 * ```
 *
 * The default construct used to perform requests, `XMLHttpRequest`, is abstracted as a "Backend" (
 * {@link XHRBackend} in this case), which could be mocked with dependency injection by replacing
 * the {@link XHRBackend} provider, as in the following example:
 *
 * ### Example
 *
 * ```typescript
 * import {BaseRequestOptions, Http} from '@angular/http';
 * import {MockBackend} from '@angular/http/testing';
 * var injector = Injector.resolveAndCreate([
 *   BaseRequestOptions,
 *   MockBackend,
 *   {provide: Http, useFactory:
 *       function(backend, defaultOptions) {
 *         return new Http(backend, defaultOptions);
 *       },
 *       deps: [MockBackend, BaseRequestOptions]}
 * ]);
 * var http = injector.get(Http);
 * http.get('request-from-mock-backend.json').subscribe((res:Response) => doSomething(res));
 * ```
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var Http = /** @class */ (function () {
    function Http(_backend, _defaultOptions) {
        this._backend = _backend;
        this._defaultOptions = _defaultOptions;
    }
    /**
     * Performs any type of http request. First argument is required, and can either be a url or
     * a {@link Request} instance. If the first argument is a url, an optional {@link RequestOptions}
     * object can be provided as the 2nd argument. The options object will be merged with the values
     * of {@link BaseRequestOptions} before performing the request.
     */
    Http.prototype.request = function (url, options) {
        var responseObservable;
        if (typeof url === 'string') {
            responseObservable = httpRequest(this._backend, new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Get, url)));
        }
        else if (url instanceof Request) {
            responseObservable = httpRequest(this._backend, url);
        }
        else {
            throw new Error('First argument must be a url string or Request instance.');
        }
        return responseObservable;
    };
    /**
     * Performs a request with `get` http method.
     */
    Http.prototype.get = function (url, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Get, url)));
    };
    /**
     * Performs a request with `post` http method.
     */
    Http.prototype.post = function (url, body, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({ body: body })), options, RequestMethod.Post, url)));
    };
    /**
     * Performs a request with `put` http method.
     */
    Http.prototype.put = function (url, body, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({ body: body })), options, RequestMethod.Put, url)));
    };
    /**
     * Performs a request with `delete` http method.
     */
    Http.prototype.delete = function (url, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Delete, url)));
    };
    /**
     * Performs a request with `patch` http method.
     */
    Http.prototype.patch = function (url, body, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({ body: body })), options, RequestMethod.Patch, url)));
    };
    /**
     * Performs a request with `head` http method.
     */
    Http.prototype.head = function (url, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Head, url)));
    };
    /**
     * Performs a request with `options` http method.
     */
    Http.prototype.options = function (url, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Options, url)));
    };
    Http = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ConnectionBackend, RequestOptions])
    ], Http);
    return Http;
}());
/**
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var Jsonp = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Jsonp, _super);
    function Jsonp(backend, defaultOptions) {
        return _super.call(this, backend, defaultOptions) || this;
    }
    /**
     * Performs any type of http request. First argument is required, and can either be a url or
     * a {@link Request} instance. If the first argument is a url, an optional {@link RequestOptions}
     * object can be provided as the 2nd argument. The options object will be merged with the values
     * of {@link BaseRequestOptions} before performing the request.
     *
     * @security Regular XHR is the safest alternative to JSONP for most applications, and is
     * supported by all current browsers. Because JSONP creates a `<script>` element with
     * contents retrieved from a remote source, attacker-controlled data introduced by an untrusted
     * source could expose your application to XSS risks. Data exposed by JSONP may also be
     * readable by malicious third-party websites. In addition, JSONP introduces potential risk for
     * future security issues (e.g. content sniffing).  For more detail, see the
     * [Security Guide](http://g.co/ng/security).
     */
    Jsonp.prototype.request = function (url, options) {
        var responseObservable;
        if (typeof url === 'string') {
            url =
                new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Get, url));
        }
        if (url instanceof Request) {
            if (url.method !== RequestMethod.Get) {
                throw new Error('JSONP requests must use GET request method.');
            }
            responseObservable = httpRequest(this._backend, url);
        }
        else {
            throw new Error('First argument must be a url string or Request instance.');
        }
        return responseObservable;
    };
    Jsonp = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ConnectionBackend, RequestOptions])
    ], Jsonp);
    return Jsonp;
}(Http));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function _createDefaultCookieXSRFStrategy() {
    return new CookieXSRFStrategy();
}
function httpFactory(xhrBackend, requestOptions) {
    return new Http(xhrBackend, requestOptions);
}
function jsonpFactory(jsonpBackend, requestOptions) {
    return new Jsonp(jsonpBackend, requestOptions);
}
/**
 * The module that includes http's providers
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var HttpModule = /** @class */ (function () {
    function HttpModule() {
    }
    HttpModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            providers: [
                // TODO(pascal): use factory type annotations once supported in DI
                // issue: https://github.com/angular/angular/issues/3183
                { provide: Http, useFactory: httpFactory, deps: [XHRBackend, RequestOptions] },
                BrowserXhr,
                { provide: RequestOptions, useClass: BaseRequestOptions },
                { provide: ResponseOptions, useClass: BaseResponseOptions },
                XHRBackend,
                { provide: XSRFStrategy, useFactory: _createDefaultCookieXSRFStrategy },
            ],
        })
    ], HttpModule);
    return HttpModule;
}());
/**
 * The module that includes jsonp's providers
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var JsonpModule = /** @class */ (function () {
    function JsonpModule() {
    }
    JsonpModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            providers: [
                // TODO(pascal): use factory type annotations once supported in DI
                // issue: https://github.com/angular/angular/issues/3183
                { provide: Jsonp, useFactory: jsonpFactory, deps: [JSONPBackend, RequestOptions] },
                BrowserJsonp,
                { provide: RequestOptions, useClass: BaseRequestOptions },
                { provide: ResponseOptions, useClass: BaseResponseOptions },
                JSONPBackend,
            ],
        })
    ], JsonpModule);
    return JsonpModule;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Version"]('7.1.4');

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// This file only reexports content of the `src` folder. Keep it that way.

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=http.js.map


/***/ }),

/***/ "./node_modules/angular-gridster2/fesm5/angular-gridster2.js":
/*!*******************************************************************!*\
  !*** ./node_modules/angular-gridster2/fesm5/angular-gridster2.js ***!
  \*******************************************************************/
/*! exports provided: GridsterComponent, GridsterItemComponent, GridsterItemComponentInterface, GridsterComponentInterface, GridType, DisplayGrid, CompactType, GridsterConfigService, GridsterModule, GridsterPush, GridsterPushResize, GridsterSwap, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridsterComponent", function() { return GridsterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridsterItemComponent", function() { return GridsterItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridsterItemComponentInterface", function() { return GridsterItemComponentInterface; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridsterComponentInterface", function() { return GridsterComponentInterface; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridType", function() { return GridType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayGrid", function() { return DisplayGrid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompactType", function() { return CompactType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridsterConfigService", function() { return GridsterConfigService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridsterModule", function() { return GridsterModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridsterPush", function() { return GridsterPush; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridsterPushResize", function() { return GridsterPushResize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridsterSwap", function() { return GridsterSwap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return GridsterPreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {string} */
var GridType = {
    Fit: 'fit',
    ScrollVertical: 'scrollVertical',
    ScrollHorizontal: 'scrollHorizontal',
    Fixed: 'fixed',
    VerticalFixed: 'verticalFixed',
    HorizontalFixed: 'horizontalFixed',
};
/** @enum {string} */
var DisplayGrid = {
    Always: 'always',
    OnDragAndResize: 'onDrag&Resize',
    None: 'none',
};
/** @enum {string} */
var CompactType = {
    None: 'none',
    CompactUp: 'compactUp',
    CompactLeft: 'compactLeft',
    CompactUpAndLeft: 'compactUp&Left',
    CompactLeftAndUp: 'compactLeft&Up',
    CompactUpAndRight: 'compactUp&Right',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var GridsterConfigService = {
    gridType: GridType.Fit,
    // 'fit' will fit the items in the container without scroll;
    // 'scrollVertical' will fit on width and height of the items will be the same as the width
    // 'scrollHorizontal' will fit on height and width of the items will be the same as the height
    // 'fixed' will set the rows and columns dimensions based on fixedColWidth and fixedRowHeight options
    // 'verticalFixed' will set the rows to fixedRowHeight and columns width will fit the space available
    // 'horizontalFixed' will set the columns to fixedColWidth and rows height will fit the space available
    fixedColWidth: 250,
    // fixed col width for gridType: 'fixed'
    fixedRowHeight: 250,
    // fixed row height for gridType: 'fixed'
    keepFixedHeightInMobile: false,
    // keep the height from fixed gridType in mobile layout
    keepFixedWidthInMobile: false,
    // keep the width from fixed gridType in mobile layout
    setGridSize: false,
    // sets grid size depending on content
    compactType: CompactType.None,
    // compact items: 'none' | 'compactUp' | 'compactLeft' | 'compactUp&Left' | 'compactLeft&Up'
    mobileBreakpoint: 640,
    // if the screen is not wider that this, remove the grid layout and stack the items
    minCols: 1,
    // minimum amount of columns in the grid
    maxCols: 100,
    // maximum amount of columns in the grid
    minRows: 1,
    // minimum amount of rows in the grid
    maxRows: 100,
    // maximum amount of rows in the grid
    defaultItemCols: 1,
    // default width of an item in columns
    defaultItemRows: 1,
    // default height of an item in rows
    maxItemCols: 50,
    // max item number of cols
    maxItemRows: 50,
    // max item number of rows
    minItemCols: 1,
    // min item number of columns
    minItemRows: 1,
    // min item number of rows
    minItemArea: 1,
    // min item area: cols * rows
    maxItemArea: 2500,
    // max item area: cols * rows
    margin: 10,
    // margin between grid items
    outerMargin: true,
    // if margins will apply to the sides of the container
    outerMarginTop: null,
    // override outer margin for grid
    outerMarginRight: null,
    // override outer margin for grid
    outerMarginBottom: null,
    // override outer margin for grid
    outerMarginLeft: null,
    // override outer margin for grid
    scrollSensitivity: 10,
    // margin of the dashboard where to start scrolling
    scrollSpeed: 20,
    // how much to scroll each mouse move when in the scrollSensitivity zone
    initCallback: undefined,
    // callback to call after grid has initialized. Arguments: gridsterComponent
    destroyCallback: undefined,
    // callback to call after grid has destroyed. Arguments: gridsterComponent
    gridSizeChangedCallback: undefined,
    // callback to call after grid has changed size. Arguments: gridsterComponent
    itemChangeCallback: undefined,
    // callback to call for each item when is changes x, y, rows, cols.
    // Arguments: gridsterItem, gridsterItemComponent
    itemResizeCallback: undefined,
    // callback to call for each item when width/height changes.
    // Arguments: gridsterItem, gridsterItemComponent
    itemInitCallback: undefined,
    // callback to call for each item when is initialized.
    // Arguments: gridsterItem, gridsterItemComponent
    itemRemovedCallback: undefined,
    // callback to call for each item when is initialized.
    // Arguments: gridsterItem, gridsterItemComponent
    itemValidateCallback: undefined,
    // callback to call to validate item position/size. Return true if valid.
    // Arguments: gridsterItem
    enableEmptyCellClick: false,
    // enable empty cell click events
    enableEmptyCellContextMenu: false,
    // enable empty cell context menu (right click) events
    enableEmptyCellDrop: false,
    // enable empty cell drop events
    enableEmptyCellDrag: false,
    // enable empty cell drag events
    emptyCellClickCallback: undefined,
    // empty cell click callback
    emptyCellContextMenuCallback: undefined,
    // empty cell context menu (right click) callback
    emptyCellDropCallback: undefined,
    // empty cell drag drop callback. HTML5 Drag & Drop
    emptyCellDragCallback: undefined,
    // empty cell drag and create item like excel cell selection
    emptyCellDragMaxCols: 50,
    // limit empty cell drag max cols
    emptyCellDragMaxRows: 50,
    // limit empty cell drag max rows
    // Arguments: event, gridsterItem{x, y, rows: defaultItemRows, cols: defaultItemCols}
    ignoreMarginInRow: false,
    // ignore the gap between rows for items which span multiple rows (see #162, #224)
    draggable: {
        delayStart: 0,
        // milliseconds to delay the start of drag, useful for touch interaction
        enabled: false,
        // enable/disable draggable items
        ignoreContentClass: 'gridster-item-content',
        // default content class to ignore the drag event from
        ignoreContent: false,
        // if true drag will start only from elements from `dragHandleClass`
        dragHandleClass: 'drag-handler',
        // drag event only from this class. If `ignoreContent` is true.
        stop: undefined,
        // callback when dragging an item stops.  Accepts Promise return to cancel/approve drag.
        start: undefined,
        // callback when dragging an item starts.
        // Arguments: item, gridsterItem, event
        dropOverItems: false,
        // enable drop items on top other item
        dropOverItemsCallback: undefined // callback on drop over another item
    },
    resizable: {
        delayStart: 0,
        // milliseconds to delay the start of resize, useful for touch interaction
        enabled: false,
        // enable/disable resizable items
        handles: {
            s: true,
            e: true,
            n: true,
            w: true,
            se: true,
            ne: true,
            sw: true,
            nw: true
        },
        // resizable edges of an item
        stop: undefined,
        // callback when resizing an item stops. Accepts Promise return to cancel/approve resize.
        start: undefined // callback when resizing an item starts.
    },
    swap: true,
    // allow items to switch position if drop on top of another
    pushItems: false,
    // push items when resizing and dragging
    disablePushOnDrag: false,
    // disable push on drag
    disablePushOnResize: false,
    // disable push on resize
    pushDirections: { north: true, east: true, south: true, west: true },
    // control the directions items are pushed
    pushResizeItems: false,
    // on resize of item will shrink adjacent items
    displayGrid: DisplayGrid.OnDragAndResize,
    // display background grid of rows and columns
    disableWindowResize: false,
    // disable the window on resize listener. This will stop grid to recalculate on window resize.
    disableWarnings: false,
    // disable console log warnings about misplacement of grid items
    scrollToNewItems: false,
    // scroll to new items placed in a scrollable view
    disableAutoPositionOnConflict: false // disable auto-position of items on conflict state
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var GridsterUtils = /** @class */ (function () {
    function GridsterUtils() {
    }
    /**
     * @param {?} obj1
     * @param {?} obj2
     * @param {?} properties
     * @return {?}
     */
    GridsterUtils.merge = /**
     * @param {?} obj1
     * @param {?} obj2
     * @param {?} properties
     * @return {?}
     */
    function (obj1, obj2, properties) {
        for (var p in obj2) {
            if (obj2[p] !== void 0 && properties.hasOwnProperty(p)) {
                if (typeof obj2[p] === 'object') {
                    obj1[p] = GridsterUtils.merge(obj1[p], obj2[p], properties[p]);
                }
                else {
                    obj1[p] = obj2[p];
                }
            }
        }
        return obj1;
    };
    /**
     * @param {?} func
     * @param {?} wait
     * @return {?}
     */
    GridsterUtils.debounce = /**
     * @param {?} func
     * @param {?} wait
     * @return {?}
     */
    function (func, wait) {
        /** @type {?} */
        var timeout;
        return function () {
            /** @type {?} */
            var context = this;
            /** @type {?} */
            var args = arguments;
            /** @type {?} */
            var later = function () {
                timeout = null;
                func.apply(context, args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    };
    /**
     * @param {?} e
     * @return {?}
     */
    GridsterUtils.checkTouchEvent = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (e.clientX === undefined && e.touches) {
            if (e.touches && e.touches.length) {
                e.clientX = e.touches[0].clientX;
                e.clientY = e.touches[0].clientY;
            }
            else if (e.changedTouches && e.changedTouches.length) {
                e.clientX = e.changedTouches[0].clientX;
                e.clientY = e.changedTouches[0].clientY;
            }
        }
    };
    /**
     * @param {?} gridster
     * @param {?} e
     * @return {?}
     */
    GridsterUtils.checkContentClassForEvent = /**
     * @param {?} gridster
     * @param {?} e
     * @return {?}
     */
    function (gridster, e) {
        if (gridster.$options.draggable.ignoreContent) {
            if (!GridsterUtils.checkContentClass(e.target, e.currentTarget, gridster.$options.draggable.dragHandleClass)) {
                return true;
            }
        }
        else {
            if (GridsterUtils.checkContentClass(e.target, e.currentTarget, gridster.$options.draggable.ignoreContentClass)) {
                return true;
            }
        }
        return false;
    };
    /**
     * @param {?} gridster
     * @param {?} e
     * @return {?}
     */
    GridsterUtils.checkContentClassForEmptyCellClickEvent = /**
     * @param {?} gridster
     * @param {?} e
     * @return {?}
     */
    function (gridster, e) {
        return GridsterUtils.checkContentClass(e.target, e.currentTarget, gridster.$options.draggable.ignoreContentClass)
            || GridsterUtils.checkContentClass(e.target, e.currentTarget, gridster.$options.draggable.dragHandleClass);
    };
    /**
     * @param {?} target
     * @param {?} current
     * @param {?} contentClass
     * @return {?}
     */
    GridsterUtils.checkContentClass = /**
     * @param {?} target
     * @param {?} current
     * @param {?} contentClass
     * @return {?}
     */
    function (target, current, contentClass) {
        if (!target || target === current) {
            return false;
        }
        if (target.hasAttribute('class') && target.getAttribute('class').split(' ').indexOf(contentClass) > -1) {
            return true;
        }
        else {
            return GridsterUtils.checkContentClass(target.parentNode, current, contentClass);
        }
    };
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    GridsterUtils.compareItems = /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    function (a, b) {
        if (a.y > b.y) {
            return -1;
        }
        else if (a.y < b.y) {
            return 1;
        }
        else if (a.x > b.x) {
            return -1;
        }
        else {
            return 1;
        }
    };
    GridsterUtils.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    return GridsterUtils;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
GridsterComponentInterface = /** @class */ (function () {
    function GridsterComponentInterface() {
    }
    return GridsterComponentInterface;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var GridsterEmptyCell = /** @class */ (function () {
    function GridsterEmptyCell(gridster) {
        this.gridster = gridster;
    }
    /**
     * @return {?}
     */
    GridsterEmptyCell.prototype.destroy = /**
     * @return {?}
     */
    function () {
        delete this.initialItem;
        delete this.gridster.movingItem;
        if (this.gridster.previewStyle) {
            this.gridster.previewStyle();
        }
        delete this.gridster;
        if (this.emptyCellExit) {
            this.emptyCellExit();
            this.emptyCellExit = null;
        }
    };
    /**
     * @return {?}
     */
    GridsterEmptyCell.prototype.updateOptions = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.gridster.$options.enableEmptyCellClick && !this.emptyCellClick && this.gridster.options.emptyCellClickCallback) {
            this.emptyCellClick = this.gridster.renderer.listen(this.gridster.el, 'click', this.emptyCellClickCb.bind(this));
            this.emptyCellClickTouch = this.gridster.renderer.listen(this.gridster.el, 'touchend', this.emptyCellClickCb.bind(this));
        }
        else if (!this.gridster.$options.enableEmptyCellClick && this.emptyCellClick && this.emptyCellClickTouch) {
            this.emptyCellClick();
            this.emptyCellClickTouch();
            this.emptyCellClick = null;
            this.emptyCellClickTouch = null;
        }
        if (this.gridster.$options.enableEmptyCellContextMenu && !this.emptyCellContextMenu &&
            this.gridster.options.emptyCellContextMenuCallback) {
            this.emptyCellContextMenu = this.gridster.renderer.listen(this.gridster.el, 'contextmenu', this.emptyCellContextMenuCb.bind(this));
        }
        else if (!this.gridster.$options.enableEmptyCellContextMenu && this.emptyCellContextMenu) {
            this.emptyCellContextMenu();
            this.emptyCellContextMenu = null;
        }
        if (this.gridster.$options.enableEmptyCellDrop && !this.emptyCellDrop && this.gridster.options.emptyCellDropCallback) {
            this.emptyCellDrop = this.gridster.renderer.listen(this.gridster.el, 'drop', this.emptyCellDragDrop.bind(this));
            this.gridster.zone.runOutsideAngular(function () {
                _this.emptyCellMove = _this.gridster.renderer.listen(_this.gridster.el, 'dragover', _this.emptyCellDragOver.bind(_this));
            });
            this.emptyCellExit = this.gridster.renderer.listen('document', 'dragend', function () {
                _this.gridster.movingItem = null;
                _this.gridster.previewStyle();
            });
        }
        else if (!this.gridster.$options.enableEmptyCellDrop && this.emptyCellDrop && this.emptyCellMove && this.emptyCellExit) {
            this.emptyCellDrop();
            this.emptyCellMove();
            this.emptyCellExit();
            this.emptyCellMove = null;
            this.emptyCellDrop = null;
            this.emptyCellExit = null;
        }
        if (this.gridster.$options.enableEmptyCellDrag && !this.emptyCellDrag && this.gridster.options.emptyCellDragCallback) {
            this.emptyCellDrag = this.gridster.renderer.listen(this.gridster.el, 'mousedown', this.emptyCellMouseDown.bind(this));
            this.emptyCellDragTouch = this.gridster.renderer.listen(this.gridster.el, 'touchstart', this.emptyCellMouseDown.bind(this));
        }
        else if (!this.gridster.$options.enableEmptyCellDrag && this.emptyCellDrag && this.emptyCellDragTouch) {
            this.emptyCellDrag();
            this.emptyCellDragTouch();
            this.emptyCellDrag = null;
            this.emptyCellDragTouch = null;
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    GridsterEmptyCell.prototype.emptyCellClickCb = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (this.gridster.movingItem || GridsterUtils.checkContentClassForEmptyCellClickEvent(this.gridster, e)) {
            return;
        }
        /** @type {?} */
        var item = this.getValidItemFromEvent(e);
        if (!item) {
            return;
        }
        if (this.gridster.options.emptyCellClickCallback) {
            this.gridster.options.emptyCellClickCallback(e, item);
        }
        this.gridster.cdRef.markForCheck();
    };
    /**
     * @param {?} e
     * @return {?}
     */
    GridsterEmptyCell.prototype.emptyCellContextMenuCb = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (this.gridster.movingItem || GridsterUtils.checkContentClassForEmptyCellClickEvent(this.gridster, e)) {
            return;
        }
        e.preventDefault();
        e.stopPropagation();
        /** @type {?} */
        var item = this.getValidItemFromEvent(e);
        if (!item) {
            return;
        }
        if (this.gridster.options.emptyCellContextMenuCallback) {
            this.gridster.options.emptyCellContextMenuCallback(e, item);
        }
        this.gridster.cdRef.markForCheck();
    };
    /**
     * @param {?} e
     * @return {?}
     */
    GridsterEmptyCell.prototype.emptyCellDragDrop = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var item = this.getValidItemFromEvent(e);
        if (!item) {
            return;
        }
        if (this.gridster.options.emptyCellDropCallback) {
            this.gridster.options.emptyCellDropCallback(e, item);
        }
        this.gridster.cdRef.markForCheck();
    };
    /**
     * @param {?} e
     * @return {?}
     */
    GridsterEmptyCell.prototype.emptyCellDragOver = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.preventDefault();
        e.stopPropagation();
        /** @type {?} */
        var item = this.getValidItemFromEvent(e);
        if (item) {
            e.dataTransfer.dropEffect = 'move';
            this.gridster.movingItem = item;
        }
        else {
            e.dataTransfer.dropEffect = 'none';
            this.gridster.movingItem = null;
        }
        this.gridster.previewStyle();
    };
    /**
     * @param {?} e
     * @return {?}
     */
    GridsterEmptyCell.prototype.emptyCellMouseDown = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        if (GridsterUtils.checkContentClassForEmptyCellClickEvent(this.gridster, e)) {
            return;
        }
        e.preventDefault();
        e.stopPropagation();
        /** @type {?} */
        var item = this.getValidItemFromEvent(e);
        if (!item) {
            return;
        }
        this.initialItem = item;
        this.gridster.movingItem = item;
        this.gridster.previewStyle();
        this.gridster.zone.runOutsideAngular(function () {
            _this.emptyCellMMove = _this.gridster.renderer.listen('window', 'mousemove', _this.emptyCellMouseMove.bind(_this));
            _this.emptyCellMMoveTouch = _this.gridster.renderer.listen('window', 'touchmove', _this.emptyCellMouseMove.bind(_this));
        });
        this.emptyCellUp = this.gridster.renderer.listen('window', 'mouseup', this.emptyCellMouseUp.bind(this));
        this.emptyCellUpTouch = this.gridster.renderer.listen('window', 'touchend', this.emptyCellMouseUp.bind(this));
    };
    /**
     * @param {?} e
     * @return {?}
     */
    GridsterEmptyCell.prototype.emptyCellMouseMove = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.preventDefault();
        e.stopPropagation();
        /** @type {?} */
        var item = this.getValidItemFromEvent(e, this.initialItem);
        if (!item) {
            return;
        }
        this.gridster.movingItem = item;
        this.gridster.previewStyle();
    };
    /**
     * @param {?} e
     * @return {?}
     */
    GridsterEmptyCell.prototype.emptyCellMouseUp = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        this.emptyCellMMove();
        this.emptyCellMMoveTouch();
        this.emptyCellUp();
        this.emptyCellUpTouch();
        /** @type {?} */
        var item = this.getValidItemFromEvent(e, this.initialItem);
        if (item) {
            this.gridster.movingItem = item;
        }
        if (this.gridster.options.emptyCellDragCallback && this.gridster.movingItem) {
            this.gridster.options.emptyCellDragCallback(e, this.gridster.movingItem);
        }
        setTimeout(function () {
            _this.initialItem = null;
            if (_this.gridster) {
                _this.gridster.movingItem = null;
                _this.gridster.previewStyle();
            }
        });
        this.gridster.cdRef.markForCheck();
    };
    /**
     * @param {?} e
     * @param {?=} oldItem
     * @return {?}
     */
    GridsterEmptyCell.prototype.getValidItemFromEvent = /**
     * @param {?} e
     * @param {?=} oldItem
     * @return {?}
     */
    function (e, oldItem) {
        e.preventDefault();
        e.stopPropagation();
        GridsterUtils.checkTouchEvent(e);
        /** @type {?} */
        var rect = this.gridster.el.getBoundingClientRect();
        /** @type {?} */
        var x = e.clientX + this.gridster.el.scrollLeft - rect.left - this.gridster.$options.margin;
        /** @type {?} */
        var y = e.clientY + this.gridster.el.scrollTop - rect.top - this.gridster.$options.margin;
        /** @type {?} */
        var item = {
            x: this.gridster.pixelsToPositionX(x, Math.floor, true),
            y: this.gridster.pixelsToPositionY(y, Math.floor, true),
            cols: this.gridster.$options.defaultItemCols,
            rows: this.gridster.$options.defaultItemRows
        };
        if (oldItem) {
            item.cols = Math.min(Math.abs(oldItem.x - item.x) + 1, this.gridster.$options.emptyCellDragMaxCols);
            item.rows = Math.min(Math.abs(oldItem.y - item.y) + 1, this.gridster.$options.emptyCellDragMaxRows);
            if (oldItem.x < item.x) {
                item.x = oldItem.x;
            }
            else if (oldItem.x - item.x > this.gridster.$options.emptyCellDragMaxCols - 1) {
                item.x = this.gridster.movingItem ? this.gridster.movingItem.x : 0;
            }
            if (oldItem.y < item.y) {
                item.y = oldItem.y;
            }
            else if (oldItem.y - item.y > this.gridster.$options.emptyCellDragMaxRows - 1) {
                item.y = this.gridster.movingItem ? this.gridster.movingItem.y : 0;
            }
        }
        if (this.gridster.checkCollision(item)) {
            return;
        }
        return item;
    };
    GridsterEmptyCell.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    GridsterEmptyCell.ctorParameters = function () { return [
        { type: GridsterComponentInterface }
    ]; };
    return GridsterEmptyCell;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var GridsterCompact = /** @class */ (function () {
    function GridsterCompact(gridster) {
        this.gridster = gridster;
        this.moveRightTillCollision = function (item) {
            item.x += 1;
            if (this.gridster.checkCollision(item)) {
                item.x -= 1;
                return false;
            }
            else {
                this.moveRightTillCollision(item);
                return true;
            }
        };
    }
    /**
     * @return {?}
     */
    GridsterCompact.prototype.destroy = /**
     * @return {?}
     */
    function () {
        delete this.gridster;
    };
    /**
     * @return {?}
     */
    GridsterCompact.prototype.checkCompact = /**
     * @return {?}
     */
    function () {
        if (this.gridster.$options.compactType !== CompactType.None) {
            if (this.gridster.$options.compactType === CompactType.CompactUp) {
                this.checkCompactUp();
            }
            else if (this.gridster.$options.compactType === CompactType.CompactLeft) {
                this.checkCompactLeft();
            }
            else if (this.gridster.$options.compactType === CompactType.CompactUpAndLeft) {
                this.checkCompactUp();
                this.checkCompactLeft();
            }
            else if (this.gridster.$options.compactType === CompactType.CompactLeftAndUp) {
                this.checkCompactLeft();
                this.checkCompactUp();
            }
            else if (this.gridster.$options.compactType === CompactType.CompactUpAndRight) {
                this.checkCompactUp();
                this.checkCompactRight();
            }
        }
    };
    /**
     * @param {?} item
     * @return {?}
     */
    GridsterCompact.prototype.checkCompactItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (this.gridster.$options.compactType !== CompactType.None) {
            if (this.gridster.$options.compactType === CompactType.CompactUp) {
                this.moveUpTillCollision(item);
            }
            else if (this.gridster.$options.compactType === CompactType.CompactLeft) {
                this.moveLeftTillCollision(item);
            }
            else if (this.gridster.$options.compactType === CompactType.CompactUpAndLeft) {
                this.moveUpTillCollision(item);
                this.moveLeftTillCollision(item);
            }
            else if (this.gridster.$options.compactType === CompactType.CompactLeftAndUp) {
                this.moveLeftTillCollision(item);
                this.moveUpTillCollision(item);
            }
            else if (this.gridster.$options.compactType === CompactType.CompactUpAndRight) {
                this.moveUpTillCollision(item);
                this.moveRightTillCollision(item);
            }
        }
    };
    /**
     * @return {?}
     */
    GridsterCompact.prototype.checkCompactUp = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var widgetMovedUp = false;
        /** @type {?} */
        var widget;
        /** @type {?} */
        var moved;
        /** @type {?} */
        var l = this.gridster.grid.length;
        for (var i = 0; i < l; i++) {
            widget = this.gridster.grid[i];
            if (widget.$item.compactEnabled === false) {
                continue;
            }
            moved = this.moveUpTillCollision(widget.$item);
            if (moved) {
                widgetMovedUp = true;
                widget.item.y = widget.$item.y;
                widget.itemChanged();
            }
        }
        if (widgetMovedUp) {
            this.checkCompact();
        }
    };
    /**
     * @param {?} item
     * @return {?}
     */
    GridsterCompact.prototype.moveUpTillCollision = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        item.y -= 1;
        if (this.gridster.checkCollision(item)) {
            item.y += 1;
            return false;
        }
        else {
            this.moveUpTillCollision(item);
            return true;
        }
    };
    /**
     * @return {?}
     */
    GridsterCompact.prototype.checkCompactLeft = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var widgetMovedUp = false;
        /** @type {?} */
        var widget;
        /** @type {?} */
        var moved;
        /** @type {?} */
        var l = this.gridster.grid.length;
        for (var i = 0; i < l; i++) {
            widget = this.gridster.grid[i];
            if (widget.$item.compactEnabled === false) {
                continue;
            }
            moved = this.moveLeftTillCollision(widget.$item);
            if (moved) {
                widgetMovedUp = true;
                widget.item.x = widget.$item.x;
                widget.itemChanged();
            }
        }
        if (widgetMovedUp) {
            this.checkCompact();
        }
    };
    /**
     * @return {?}
     */
    GridsterCompact.prototype.checkCompactRight = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var widgetMovedUp = false;
        /** @type {?} */
        var widget;
        /** @type {?} */
        var moved;
        /** @type {?} */
        var l = this.gridster.grid.length;
        for (var i = 0; i < l; i++) {
            widget = this.gridster.grid[i];
            if (widget.$item.compactEnabled === false) {
                continue;
            }
            moved = this.moveRightTillCollision(widget.$item);
            if (moved) {
                widgetMovedUp = true;
                widget.item.x = widget.$item.x;
                widget.itemChanged();
            }
        }
        if (widgetMovedUp) {
            this.checkCompact();
        }
    };
    /**
     * @param {?} item
     * @return {?}
     */
    GridsterCompact.prototype.moveLeftTillCollision = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        item.x -= 1;
        if (this.gridster.checkCollision(item)) {
            item.x += 1;
            return false;
        }
        else {
            this.moveLeftTillCollision(item);
            return true;
        }
    };
    GridsterCompact.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    GridsterCompact.ctorParameters = function () { return [
        { type: GridsterComponentInterface }
    ]; };
    return GridsterCompact;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var GridsterRenderer = /** @class */ (function () {
    function GridsterRenderer(gridster) {
        this.gridster = gridster;
    }
    /**
     * @return {?}
     */
    GridsterRenderer.prototype.destroy = /**
     * @return {?}
     */
    function () {
        delete this.gridster;
    };
    /**
     * @param {?} el
     * @param {?} item
     * @param {?} renderer
     * @return {?}
     */
    GridsterRenderer.prototype.updateItem = /**
     * @param {?} el
     * @param {?} item
     * @param {?} renderer
     * @return {?}
     */
    function (el, item, renderer) {
        if (this.gridster.mobile) {
            renderer.setStyle(el, 'transform', '');
            if (this.gridster.$options.keepFixedHeightInMobile) {
                renderer.setStyle(el, 'height', (item.rows * this.gridster.$options.fixedRowHeight) + 'px');
            }
            else {
                renderer.setStyle(el, 'height', (this.gridster.curWidth / 2 * item.rows) + 'px');
            }
            if (this.gridster.$options.keepFixedWidthInMobile) {
                renderer.setStyle(el, 'width', this.gridster.$options.fixedColWidth + 'px');
            }
            else {
                renderer.setStyle(el, 'width', '');
            }
            renderer.setStyle(el, 'margin-bottom', this.gridster.$options.margin + 'px');
            renderer.setStyle(el, 'margin-right', '');
        }
        else {
            /** @type {?} */
            var x = Math.round(this.gridster.curColWidth * item.x);
            /** @type {?} */
            var y = Math.round(this.gridster.curRowHeight * item.y);
            /** @type {?} */
            var width = this.gridster.curColWidth * item.cols - this.gridster.$options.margin;
            /** @type {?} */
            var height = (this.gridster.curRowHeight * item.rows - this.gridster.$options.margin);
            /** @type {?} */
            var transform = 'translate3d(' + x + 'px, ' + y + 'px, 0)';
            renderer.setStyle(el, 'transform', transform);
            renderer.setStyle(el, 'width', width + 'px');
            renderer.setStyle(el, 'height', height + 'px');
            /** @type {?} */
            var marginBottom = null;
            /** @type {?} */
            var marginRight = null;
            if (this.gridster.$options.outerMargin) {
                if (this.gridster.rows === item.rows + item.y) {
                    if (this.gridster.$options.outerMarginBottom !== null) {
                        marginBottom = this.gridster.$options.outerMarginBottom + 'px';
                    }
                    else {
                        marginBottom = this.gridster.$options.margin + 'px';
                    }
                }
                if (this.gridster.columns === item.cols + item.x) {
                    if (this.gridster.$options.outerMarginBottom !== null) {
                        marginRight = this.gridster.$options.outerMarginRight + 'px';
                    }
                    else {
                        marginRight = this.gridster.$options.margin + 'px';
                    }
                }
            }
            renderer.setStyle(el, 'margin-bottom', marginBottom);
            renderer.setStyle(el, 'margin-right', marginRight);
        }
    };
    /**
     * @return {?}
     */
    GridsterRenderer.prototype.updateGridster = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var addClass = '';
        /** @type {?} */
        var removeClass1 = '';
        /** @type {?} */
        var removeClass2 = '';
        /** @type {?} */
        var removeClass3 = '';
        if (this.gridster.$options.gridType === GridType.Fit) {
            addClass = GridType.Fit;
            removeClass1 = GridType.ScrollVertical;
            removeClass2 = GridType.ScrollHorizontal;
            removeClass3 = GridType.Fixed;
        }
        else if (this.gridster.$options.gridType === GridType.ScrollVertical) {
            this.gridster.curRowHeight = this.gridster.curColWidth;
            addClass = GridType.ScrollVertical;
            removeClass1 = GridType.Fit;
            removeClass2 = GridType.ScrollHorizontal;
            removeClass3 = GridType.Fixed;
        }
        else if (this.gridster.$options.gridType === GridType.ScrollHorizontal) {
            this.gridster.curColWidth = this.gridster.curRowHeight;
            addClass = GridType.ScrollHorizontal;
            removeClass1 = GridType.Fit;
            removeClass2 = GridType.ScrollVertical;
            removeClass3 = GridType.Fixed;
        }
        else if (this.gridster.$options.gridType === GridType.Fixed) {
            this.gridster.curColWidth = this.gridster.$options.fixedColWidth +
                (this.gridster.$options.ignoreMarginInRow ? 0 : this.gridster.$options.margin);
            this.gridster.curRowHeight = this.gridster.$options.fixedRowHeight +
                (this.gridster.$options.ignoreMarginInRow ? 0 : this.gridster.$options.margin);
            addClass = GridType.Fixed;
            removeClass1 = GridType.Fit;
            removeClass2 = GridType.ScrollVertical;
            removeClass3 = GridType.ScrollHorizontal;
        }
        else if (this.gridster.$options.gridType === GridType.VerticalFixed) {
            this.gridster.curRowHeight = this.gridster.$options.fixedRowHeight +
                (this.gridster.$options.ignoreMarginInRow ? 0 : this.gridster.$options.margin);
            addClass = GridType.ScrollVertical;
            removeClass1 = GridType.Fit;
            removeClass2 = GridType.ScrollHorizontal;
            removeClass3 = GridType.Fixed;
        }
        else if (this.gridster.$options.gridType === GridType.HorizontalFixed) {
            this.gridster.curColWidth = this.gridster.$options.fixedColWidth +
                (this.gridster.$options.ignoreMarginInRow ? 0 : this.gridster.$options.margin);
            addClass = GridType.ScrollHorizontal;
            removeClass1 = GridType.Fit;
            removeClass2 = GridType.ScrollVertical;
            removeClass3 = GridType.Fixed;
        }
        if (this.gridster.mobile) {
            this.gridster.renderer.removeClass(this.gridster.el, addClass);
        }
        else {
            this.gridster.renderer.addClass(this.gridster.el, addClass);
        }
        this.gridster.renderer.removeClass(this.gridster.el, removeClass1);
        this.gridster.renderer.removeClass(this.gridster.el, removeClass2);
        this.gridster.renderer.removeClass(this.gridster.el, removeClass3);
    };
    /**
     * @param {?} i
     * @return {?}
     */
    GridsterRenderer.prototype.getGridColumnStyle = /**
     * @param {?} i
     * @return {?}
     */
    function (i) {
        return {
            transform: 'translateX(' + this.gridster.curColWidth * i + 'px)',
            width: this.gridster.curColWidth - this.gridster.$options.margin + 'px',
            height: this.gridster.gridRows.length * this.gridster.curRowHeight - this.gridster.$options.margin + 'px'
        };
    };
    /**
     * @param {?} i
     * @return {?}
     */
    GridsterRenderer.prototype.getGridRowStyle = /**
     * @param {?} i
     * @return {?}
     */
    function (i) {
        return {
            transform: 'translateY(' + this.gridster.curRowHeight * i + 'px)',
            width: this.gridster.gridColumns.length * this.gridster.curColWidth - this.gridster.$options.margin + 'px',
            height: this.gridster.curRowHeight - this.gridster.$options.margin + 'px'
        };
    };
    GridsterRenderer.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    GridsterRenderer.ctorParameters = function () { return [
        { type: GridsterComponentInterface }
    ]; };
    return GridsterRenderer;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var GridsterComponent = /** @class */ (function () {
    function GridsterComponent(el, renderer, cdRef, zone) {
        this.renderer = renderer;
        this.cdRef = cdRef;
        this.zone = zone;
        this.gridColumns = [];
        this.gridRows = [];
        this.el = el.nativeElement;
        this.$options = JSON.parse(JSON.stringify(GridsterConfigService));
        this.calculateLayoutDebounce = GridsterUtils.debounce(this.calculateLayout.bind(this), 0);
        this.mobile = false;
        this.curWidth = 0;
        this.curHeight = 0;
        this.grid = [];
        this.curColWidth = 0;
        this.curRowHeight = 0;
        this.dragInProgress = false;
        this.emptyCell = new GridsterEmptyCell(this);
        this.compact = new GridsterCompact(this);
        this.gridRenderer = new GridsterRenderer(this);
    }
    /**
     * @param {?} item
     * @param {?} item2
     * @return {?}
     */
    GridsterComponent.checkCollisionTwoItems = /**
     * @param {?} item
     * @param {?} item2
     * @return {?}
     */
    function (item, item2) {
        return item.x < item2.x + item2.cols
            && item.x + item.cols > item2.x
            && item.y < item2.y + item2.rows
            && item.y + item.rows > item2.y;
    };
    /**
     * @return {?}
     */
    GridsterComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.options.initCallback) {
            this.options.initCallback(this);
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    GridsterComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes["options"]) {
            this.setOptions();
            this.options.api = {
                optionsChanged: this.optionsChanged.bind(this),
                resize: this.onResize.bind(this),
                getNextPossiblePosition: this.getNextPossiblePosition.bind(this),
                getFirstPossiblePosition: this.getFirstPossiblePosition.bind(this),
                getLastPossiblePosition: this.getLastPossiblePosition.bind(this),
            };
            this.columns = this.$options.minCols;
            this.rows = this.$options.minRows;
            this.setGridSize();
            this.calculateLayout();
        }
    };
    /**
     * @return {?}
     */
    GridsterComponent.prototype.resize = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var height;
        /** @type {?} */
        var width;
        if (this.$options.gridType === 'fit' && !this.mobile) {
            width = this.el.offsetWidth;
            height = this.el.offsetHeight;
        }
        else {
            width = this.el.clientWidth;
            height = this.el.clientHeight;
        }
        if ((width !== this.curWidth || height !== this.curHeight) && this.checkIfToResize()) {
            this.onResize();
        }
    };
    /**
     * @return {?}
     */
    GridsterComponent.prototype.setOptions = /**
     * @return {?}
     */
    function () {
        this.$options = GridsterUtils.merge(this.$options, this.options, this.$options);
        if (!this.$options.disableWindowResize && !this.windowResize) {
            this.windowResize = this.renderer.listen('window', 'resize', this.onResize.bind(this));
        }
        else if (this.$options.disableWindowResize && this.windowResize) {
            this.windowResize();
            this.windowResize = null;
        }
        this.emptyCell.updateOptions();
    };
    /**
     * @return {?}
     */
    GridsterComponent.prototype.optionsChanged = /**
     * @return {?}
     */
    function () {
        this.setOptions();
        /** @type {?} */
        var widgetsIndex = this.grid.length - 1;
        /** @type {?} */
        var widget;
        for (; widgetsIndex >= 0; widgetsIndex--) {
            widget = this.grid[widgetsIndex];
            widget.updateOptions();
        }
        this.calculateLayout();
    };
    /**
     * @return {?}
     */
    GridsterComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.windowResize) {
            this.windowResize();
        }
        if (this.options.destroyCallback) {
            this.options.destroyCallback(this);
        }
        if (this.options.api) {
            this.options.api.resize = undefined;
            this.options.api.optionsChanged = undefined;
            this.options.api.getNextPossiblePosition = undefined;
            this.options.api = undefined;
        }
        this.emptyCell.destroy();
        delete this.emptyCell;
        this.compact.destroy();
        delete this.compact;
    };
    /**
     * @return {?}
     */
    GridsterComponent.prototype.onResize = /**
     * @return {?}
     */
    function () {
        this.setGridSize();
        this.calculateLayout();
    };
    /**
     * @return {?}
     */
    GridsterComponent.prototype.checkIfToResize = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var clientWidth = this.el.clientWidth;
        /** @type {?} */
        var offsetWidth = this.el.offsetWidth;
        /** @type {?} */
        var scrollWidth = this.el.scrollWidth;
        /** @type {?} */
        var clientHeight = this.el.clientHeight;
        /** @type {?} */
        var offsetHeight = this.el.offsetHeight;
        /** @type {?} */
        var scrollHeight = this.el.scrollHeight;
        /** @type {?} */
        var verticalScrollPresent = clientWidth < offsetWidth && scrollHeight > offsetHeight
            && scrollHeight - offsetHeight < offsetWidth - clientWidth;
        /** @type {?} */
        var horizontalScrollPresent = clientHeight < offsetHeight
            && scrollWidth > offsetWidth && scrollWidth - offsetWidth < offsetHeight - clientHeight;
        if (verticalScrollPresent) {
            return false;
        }
        return !horizontalScrollPresent;
    };
    /**
     * @return {?}
     */
    GridsterComponent.prototype.setGridSize = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var el = this.el;
        /** @type {?} */
        var width = el.clientWidth;
        /** @type {?} */
        var height = el.clientHeight;
        if (this.$options.setGridSize || this.$options.gridType === 'fit' && !this.mobile) {
            width = el.offsetWidth;
            height = el.offsetHeight;
        }
        else {
            width = el.clientWidth;
            height = el.clientHeight;
        }
        this.curWidth = width;
        this.curHeight = height;
    };
    /**
     * @return {?}
     */
    GridsterComponent.prototype.setGridDimensions = /**
     * @return {?}
     */
    function () {
        this.setGridSize();
        if (!this.mobile && this.$options.mobileBreakpoint > this.curWidth) {
            this.mobile = !this.mobile;
            this.renderer.addClass(this.el, 'mobile');
        }
        else if (this.mobile && this.$options.mobileBreakpoint < this.curWidth) {
            this.mobile = !this.mobile;
            this.renderer.removeClass(this.el, 'mobile');
        }
        /** @type {?} */
        var rows = this.$options.minRows;
        /** @type {?} */
        var columns = this.$options.minCols;
        /** @type {?} */
        var widgetsIndex = this.grid.length - 1;
        /** @type {?} */
        var widget;
        for (; widgetsIndex >= 0; widgetsIndex--) {
            widget = this.grid[widgetsIndex];
            if (!widget.notPlaced) {
                rows = Math.max(rows, widget.$item.y + widget.$item.rows);
                columns = Math.max(columns, widget.$item.x + widget.$item.cols);
            }
        }
        if (this.columns !== columns || this.rows !== rows) {
            this.columns = columns;
            this.rows = rows;
            if (this.options.gridSizeChangedCallback) {
                this.options.gridSizeChangedCallback(this);
            }
        }
    };
    /**
     * @return {?}
     */
    GridsterComponent.prototype.calculateLayout = /**
     * @return {?}
     */
    function () {
        if (this.compact) {
            this.compact.checkCompact();
        }
        this.setGridDimensions();
        if (this.$options.outerMargin) {
            /** @type {?} */
            var marginWidth = -this.$options.margin;
            if (this.$options.outerMarginLeft !== null) {
                marginWidth += this.$options.outerMarginLeft;
                this.renderer.setStyle(this.el, 'padding-left', this.$options.outerMarginLeft + 'px');
            }
            else {
                marginWidth += this.$options.margin;
                this.renderer.setStyle(this.el, 'padding-left', this.$options.margin + 'px');
            }
            if (this.$options.outerMarginRight !== null) {
                marginWidth += this.$options.outerMarginRight;
                this.renderer.setStyle(this.el, 'padding-right', this.$options.outerMarginRight + 'px');
            }
            else {
                marginWidth += this.$options.margin;
                this.renderer.setStyle(this.el, 'padding-right', this.$options.margin + 'px');
            }
            this.curColWidth = (this.curWidth - marginWidth) / this.columns;
            /** @type {?} */
            var marginHeight = -this.$options.margin;
            if (this.$options.outerMarginTop !== null) {
                marginHeight += this.$options.outerMarginTop;
                this.renderer.setStyle(this.el, 'padding-top', this.$options.outerMarginTop + 'px');
            }
            else {
                marginHeight += this.$options.margin;
                this.renderer.setStyle(this.el, 'padding-top', this.$options.margin + 'px');
            }
            if (this.$options.outerMarginBottom !== null) {
                marginHeight += this.$options.outerMarginBottom;
                this.renderer.setStyle(this.el, 'padding-bottom', this.$options.outerMarginBottom + 'px');
            }
            else {
                marginHeight += this.$options.margin;
                this.renderer.setStyle(this.el, 'padding-bottom', this.$options.margin + 'px');
            }
            this.curRowHeight = (this.curHeight - marginHeight) / this.rows;
        }
        else {
            this.curColWidth = (this.curWidth + this.$options.margin) / this.columns;
            this.curRowHeight = (this.curHeight + this.$options.margin) / this.rows;
            this.renderer.setStyle(this.el, 'padding-left', 0 + 'px');
            this.renderer.setStyle(this.el, 'padding-right', 0 + 'px');
            this.renderer.setStyle(this.el, 'padding-top', 0 + 'px');
            this.renderer.setStyle(this.el, 'padding-bottom', 0 + 'px');
        }
        this.gridRenderer.updateGridster();
        this.updateGrid();
        if (this.$options.setGridSize) {
            this.renderer.setStyle(this.el, 'width', (this.columns * this.curColWidth + this.$options.margin) + 'px');
            this.renderer.setStyle(this.el, 'height', (this.rows * this.curRowHeight + this.$options.margin) + 'px');
        }
        else {
            this.renderer.setStyle(this.el, 'width', '');
            this.renderer.setStyle(this.el, 'height', '');
        }
        /** @type {?} */
        var widgetsIndex = this.grid.length - 1;
        /** @type {?} */
        var widget;
        for (; widgetsIndex >= 0; widgetsIndex--) {
            widget = this.grid[widgetsIndex];
            widget.setSize();
            widget.drag.toggle();
            widget.resize.toggle();
        }
        setTimeout(this.resize.bind(this), 100);
    };
    /**
     * @return {?}
     */
    GridsterComponent.prototype.updateGrid = /**
     * @return {?}
     */
    function () {
        if (this.$options.displayGrid === 'always' && !this.mobile) {
            this.renderer.addClass(this.el, 'display-grid');
        }
        else if (this.$options.displayGrid === 'onDrag&Resize' && this.dragInProgress) {
            this.renderer.addClass(this.el, 'display-grid');
        }
        else if (this.$options.displayGrid === 'none' || !this.dragInProgress || this.mobile) {
            this.renderer.removeClass(this.el, 'display-grid');
        }
        this.setGridDimensions();
        this.gridColumns.length = Math.max(this.columns, Math.floor(this.curWidth / this.curColWidth)) || 0;
        this.gridRows.length = Math.max(this.rows, Math.floor(this.curHeight / this.curRowHeight)) || 0;
        this.cdRef.markForCheck();
    };
    /**
     * @param {?} itemComponent
     * @return {?}
     */
    GridsterComponent.prototype.addItem = /**
     * @param {?} itemComponent
     * @return {?}
     */
    function (itemComponent) {
        if (itemComponent.$item.cols === undefined) {
            itemComponent.$item.cols = this.$options.defaultItemCols;
            itemComponent.item.cols = itemComponent.$item.cols;
            itemComponent.itemChanged();
        }
        if (itemComponent.$item.rows === undefined) {
            itemComponent.$item.rows = this.$options.defaultItemRows;
            itemComponent.item.rows = itemComponent.$item.rows;
            itemComponent.itemChanged();
        }
        if (itemComponent.$item.x === -1 || itemComponent.$item.y === -1) {
            this.autoPositionItem(itemComponent);
        }
        else if (this.checkCollision(itemComponent.$item)) {
            if (!this.$options.disableWarnings) {
                itemComponent.notPlaced = true;
                console.warn('Can\'t be placed in the bounds of the dashboard, trying to auto position!/n' +
                    JSON.stringify(itemComponent.item, ['cols', 'rows', 'x', 'y']));
            }
            if (!this.$options.disableAutoPositionOnConflict) {
                this.autoPositionItem(itemComponent);
            }
            else {
                itemComponent.notPlaced = true;
            }
        }
        this.grid.push(itemComponent);
        this.calculateLayoutDebounce();
    };
    /**
     * @param {?} itemComponent
     * @return {?}
     */
    GridsterComponent.prototype.removeItem = /**
     * @param {?} itemComponent
     * @return {?}
     */
    function (itemComponent) {
        this.grid.splice(this.grid.indexOf(itemComponent), 1);
        this.calculateLayoutDebounce();
        if (this.options.itemRemovedCallback) {
            this.options.itemRemovedCallback(itemComponent.item, itemComponent);
        }
    };
    /**
     * @param {?} item
     * @return {?}
     */
    GridsterComponent.prototype.checkCollision = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        /** @type {?} */
        var collision = false;
        if (this.options.itemValidateCallback) {
            collision = !this.options.itemValidateCallback(item);
        }
        if (!collision && this.checkGridCollision(item)) {
            collision = true;
        }
        if (!collision) {
            /** @type {?} */
            var c = this.findItemWithItem(item);
            if (c) {
                collision = c;
            }
        }
        return collision;
    };
    /**
     * @param {?} item
     * @return {?}
     */
    GridsterComponent.prototype.checkGridCollision = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        /** @type {?} */
        var noNegativePosition = item.y > -1 && item.x > -1;
        /** @type {?} */
        var maxGridCols = item.cols + item.x <= this.$options.maxCols;
        /** @type {?} */
        var maxGridRows = item.rows + item.y <= this.$options.maxRows;
        /** @type {?} */
        var maxItemCols = item.maxItemCols === undefined ? this.$options.maxItemCols : item.maxItemCols;
        /** @type {?} */
        var minItemCols = item.minItemCols === undefined ? this.$options.minItemCols : item.minItemCols;
        /** @type {?} */
        var maxItemRows = item.maxItemRows === undefined ? this.$options.maxItemRows : item.maxItemRows;
        /** @type {?} */
        var minItemRows = item.minItemRows === undefined ? this.$options.minItemRows : item.minItemRows;
        /** @type {?} */
        var inColsLimits = item.cols <= maxItemCols && item.cols >= minItemCols;
        /** @type {?} */
        var inRowsLimits = item.rows <= maxItemRows && item.rows >= minItemRows;
        /** @type {?} */
        var minAreaLimit = item.minItemArea === undefined ? this.$options.minItemArea : item.minItemArea;
        /** @type {?} */
        var maxAreaLimit = item.maxItemArea === undefined ? this.$options.maxItemArea : item.maxItemArea;
        /** @type {?} */
        var area = item.cols * item.rows;
        /** @type {?} */
        var inMinArea = minAreaLimit <= area;
        /** @type {?} */
        var inMaxArea = maxAreaLimit >= area;
        return !(noNegativePosition && maxGridCols && maxGridRows && inColsLimits && inRowsLimits && inMinArea && inMaxArea);
    };
    /**
     * @param {?} item
     * @return {?}
     */
    GridsterComponent.prototype.findItemWithItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        /** @type {?} */
        var widgetsIndex = this.grid.length - 1;
        /** @type {?} */
        var widget;
        for (; widgetsIndex > -1; widgetsIndex--) {
            widget = this.grid[widgetsIndex];
            if (widget.$item !== item && GridsterComponent.checkCollisionTwoItems(widget.$item, item)) {
                return widget;
            }
        }
        return false;
    };
    /**
     * @param {?} item
     * @return {?}
     */
    GridsterComponent.prototype.findItemsWithItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        /** @type {?} */
        var a = [];
        /** @type {?} */
        var widgetsIndex = this.grid.length - 1;
        /** @type {?} */
        var widget;
        for (; widgetsIndex > -1; widgetsIndex--) {
            widget = this.grid[widgetsIndex];
            if (widget.$item !== item && GridsterComponent.checkCollisionTwoItems(widget.$item, item)) {
                a.push(widget);
            }
        }
        return a;
    };
    /**
     * @param {?} itemComponent
     * @return {?}
     */
    GridsterComponent.prototype.autoPositionItem = /**
     * @param {?} itemComponent
     * @return {?}
     */
    function (itemComponent) {
        if (this.getNextPossiblePosition(itemComponent.$item)) {
            itemComponent.notPlaced = false;
            itemComponent.item.x = itemComponent.$item.x;
            itemComponent.item.y = itemComponent.$item.y;
            itemComponent.itemChanged();
        }
        else {
            itemComponent.notPlaced = true;
            if (!this.$options.disableWarnings) {
                console.warn('Can\'t be placed in the bounds of the dashboard!/n' +
                    JSON.stringify(itemComponent.item, ['cols', 'rows', 'x', 'y']));
            }
        }
    };
    /**
     * @param {?} newItem
     * @param {?=} startingFrom
     * @return {?}
     */
    GridsterComponent.prototype.getNextPossiblePosition = /**
     * @param {?} newItem
     * @param {?=} startingFrom
     * @return {?}
     */
    function (newItem, startingFrom) {
        if (startingFrom === void 0) { startingFrom = {}; }
        if (newItem.cols === -1) {
            newItem.cols = this.$options.defaultItemCols;
        }
        if (newItem.rows === -1) {
            newItem.rows = this.$options.defaultItemRows;
        }
        this.setGridDimensions();
        /** @type {?} */
        var rowsIndex = startingFrom.y || 0;
        /** @type {?} */
        var colsIndex;
        for (; rowsIndex < this.rows; rowsIndex++) {
            newItem.y = rowsIndex;
            colsIndex = startingFrom.x || 0;
            for (; colsIndex < this.columns; colsIndex++) {
                newItem.x = colsIndex;
                if (!this.checkCollision(newItem)) {
                    return true;
                }
            }
        }
        /** @type {?} */
        var canAddToRows = this.$options.maxRows >= this.rows + newItem.rows;
        /** @type {?} */
        var canAddToColumns = this.$options.maxCols >= this.columns + newItem.cols;
        /** @type {?} */
        var addToRows = this.rows <= this.columns && canAddToRows;
        if (!addToRows && canAddToColumns) {
            newItem.x = this.columns;
            newItem.y = 0;
            return true;
        }
        else if (canAddToRows) {
            newItem.y = this.rows;
            newItem.x = 0;
            return true;
        }
        return false;
    };
    /**
     * @param {?} item
     * @return {?}
     */
    GridsterComponent.prototype.getFirstPossiblePosition = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        /** @type {?} */
        var tmpItem = Object.assign({}, item);
        this.getNextPossiblePosition(tmpItem);
        return tmpItem;
    };
    /**
     * @param {?} item
     * @return {?}
     */
    GridsterComponent.prototype.getLastPossiblePosition = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        /** @type {?} */
        var farthestItem = { y: 0, x: 0 };
        farthestItem = this.grid.reduce(function (prev, curr) {
            /** @type {?} */
            var currCoords = { y: curr.$item.y + curr.$item.rows - 1, x: curr.$item.x + curr.$item.cols - 1 };
            if (GridsterUtils.compareItems(prev, currCoords) === 1) {
                return currCoords;
            }
            else {
                return prev;
            }
        }, farthestItem);
        /** @type {?} */
        var tmpItem = Object.assign({}, item);
        this.getNextPossiblePosition(tmpItem, farthestItem);
        return tmpItem;
    };
    /**
     * @param {?} x
     * @param {?} roundingMethod
     * @param {?=} noLimit
     * @return {?}
     */
    GridsterComponent.prototype.pixelsToPositionX = /**
     * @param {?} x
     * @param {?} roundingMethod
     * @param {?=} noLimit
     * @return {?}
     */
    function (x, roundingMethod, noLimit) {
        /** @type {?} */
        var position = roundingMethod(x / this.curColWidth);
        if (noLimit) {
            return position;
        }
        else {
            return Math.max(position, 0);
        }
    };
    /**
     * @param {?} y
     * @param {?} roundingMethod
     * @param {?=} noLimit
     * @return {?}
     */
    GridsterComponent.prototype.pixelsToPositionY = /**
     * @param {?} y
     * @param {?} roundingMethod
     * @param {?=} noLimit
     * @return {?}
     */
    function (y, roundingMethod, noLimit) {
        /** @type {?} */
        var position = roundingMethod(y / this.curRowHeight);
        if (noLimit) {
            return position;
        }
        else {
            return Math.max(position, 0);
        }
    };
    /**
     * @param {?} x
     * @return {?}
     */
    GridsterComponent.prototype.positionXToPixels = /**
     * @param {?} x
     * @return {?}
     */
    function (x) {
        return x * this.curColWidth;
    };
    /**
     * @param {?} y
     * @return {?}
     */
    GridsterComponent.prototype.positionYToPixels = /**
     * @param {?} y
     * @return {?}
     */
    function (y) {
        return y * this.curRowHeight;
    };
    GridsterComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'gridster',
                    template: "<div class=\"gridster-column\" *ngFor=\"let column of gridColumns; let i = index;\"\n     [ngStyle]=\"gridRenderer.getGridColumnStyle(i)\"></div>\n<div class=\"gridster-row\" *ngFor=\"let row of gridRows; let i = index;\"\n     [ngStyle]=\"gridRenderer.getGridRowStyle(i)\"></div>\n<ng-content></ng-content>\n<gridster-preview class=\"gridster-preview\"></gridster-preview>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    styles: ["gridster{position:relative;box-sizing:border-box;background:grey;width:100%;height:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:block}gridster.fit{overflow-x:hidden;overflow-y:hidden}gridster.scrollVertical{overflow-x:hidden;overflow-y:auto}gridster.scrollHorizontal{overflow-x:auto;overflow-y:hidden}gridster.fixed{overflow:auto}gridster.mobile{overflow-x:hidden;overflow-y:auto}gridster.mobile gridster-item{position:relative}gridster .gridster-column,gridster .gridster-row{position:absolute;display:none;transition:.3s;box-sizing:border-box}gridster.display-grid .gridster-column,gridster.display-grid .gridster-row{display:block}gridster .gridster-column{border-left:1px solid #fff;border-right:1px solid #fff}gridster .gridster-row{border-top:1px solid #fff;border-bottom:1px solid #fff}"]
                }] }
    ];
    /** @nocollapse */
    GridsterComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
    ]; };
    GridsterComponent.propDecorators = {
        options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return GridsterComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
GridsterItemComponentInterface = /** @class */ (function () {
    function GridsterItemComponentInterface() {
    }
    return GridsterItemComponentInterface;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var GridsterSwap = /** @class */ (function () {
    function GridsterSwap(gridsterItem) {
        this.gridsterItem = gridsterItem;
        this.gridster = gridsterItem.gridster;
    }
    /**
     * @return {?}
     */
    GridsterSwap.prototype.destroy = /**
     * @return {?}
     */
    function () {
        delete this.gridster;
        delete this.gridsterItem;
        delete this.swapedItem;
    };
    /**
     * @return {?}
     */
    GridsterSwap.prototype.swapItems = /**
     * @return {?}
     */
    function () {
        if (this.gridster.$options.swap) {
            this.checkSwapBack();
            this.checkSwap(this.gridsterItem);
        }
    };
    /**
     * @return {?}
     */
    GridsterSwap.prototype.checkSwapBack = /**
     * @return {?}
     */
    function () {
        if (this.swapedItem) {
            /** @type {?} */
            var x = this.swapedItem.$item.x;
            /** @type {?} */
            var y = this.swapedItem.$item.y;
            this.swapedItem.$item.x = this.swapedItem.item.x || 0;
            this.swapedItem.$item.y = this.swapedItem.item.y || 0;
            if (this.gridster.checkCollision(this.swapedItem.$item)) {
                this.swapedItem.$item.x = x;
                this.swapedItem.$item.y = y;
            }
            else {
                this.swapedItem.setSize();
                this.gridsterItem.$item.x = this.gridsterItem.item.x || 0;
                this.gridsterItem.$item.y = this.gridsterItem.item.y || 0;
                this.swapedItem = undefined;
            }
        }
    };
    /**
     * @return {?}
     */
    GridsterSwap.prototype.restoreSwapItem = /**
     * @return {?}
     */
    function () {
        if (this.swapedItem) {
            this.swapedItem.$item.x = this.swapedItem.item.x || 0;
            this.swapedItem.$item.y = this.swapedItem.item.y || 0;
            this.swapedItem.setSize();
            this.swapedItem = undefined;
        }
    };
    /**
     * @return {?}
     */
    GridsterSwap.prototype.setSwapItem = /**
     * @return {?}
     */
    function () {
        if (this.swapedItem) {
            this.swapedItem.checkItemChanges(this.swapedItem.$item, this.swapedItem.item);
            this.swapedItem = undefined;
        }
    };
    /**
     * @param {?} pushedBy
     * @return {?}
     */
    GridsterSwap.prototype.checkSwap = /**
     * @param {?} pushedBy
     * @return {?}
     */
    function (pushedBy) {
        /** @type {?} */
        var gridsterItemCollision = this.gridster.checkCollision(pushedBy.$item);
        if (gridsterItemCollision && gridsterItemCollision !== true && gridsterItemCollision.canBeDragged()) {
            /** @type {?} */
            var gridsterItemCollide = gridsterItemCollision;
            /** @type {?} */
            var copyCollisionX = gridsterItemCollide.$item.x;
            /** @type {?} */
            var copyCollisionY = gridsterItemCollide.$item.y;
            /** @type {?} */
            var copyX = pushedBy.$item.x;
            /** @type {?} */
            var copyY = pushedBy.$item.y;
            gridsterItemCollide.$item.x = pushedBy.item.x || 0;
            gridsterItemCollide.$item.y = pushedBy.item.y || 0;
            pushedBy.$item.x = gridsterItemCollide.item.x || 0;
            pushedBy.$item.y = gridsterItemCollide.item.y || 0;
            if (this.gridster.checkCollision(gridsterItemCollide.$item) || this.gridster.checkCollision(pushedBy.$item)) {
                pushedBy.$item.x = copyX;
                pushedBy.$item.y = copyY;
                gridsterItemCollide.$item.x = copyCollisionX;
                gridsterItemCollide.$item.y = copyCollisionY;
            }
            else {
                gridsterItemCollide.setSize();
                this.swapedItem = gridsterItemCollide;
            }
        }
    };
    GridsterSwap.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    GridsterSwap.ctorParameters = function () { return [
        { type: GridsterItemComponentInterface }
    ]; };
    return GridsterSwap;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var scrollSensitivity;
/** @type {?} */
var scrollSpeed;
/** @type {?} */
var intervalDuration = 50;
/** @type {?} */
var gridsterElement;
/** @type {?} */
var resizeEvent;
/** @type {?} */
var resizeEventType;
/** @type {?} */
var intervalE;
/** @type {?} */
var intervalW;
/** @type {?} */
var intervalN;
/** @type {?} */
var intervalS;
/**
 * @param {?} gridster
 * @param {?} left
 * @param {?} top
 * @param {?} width
 * @param {?} height
 * @param {?} e
 * @param {?} lastMouse
 * @param {?} calculateItemPosition
 * @param {?=} resize
 * @param {?=} resizeEventScrollType
 * @return {?}
 */
function scroll(gridster, left, top, width, height, e, lastMouse, calculateItemPosition, resize, resizeEventScrollType) {
    scrollSensitivity = gridster.$options.scrollSensitivity;
    scrollSpeed = gridster.$options.scrollSpeed;
    gridsterElement = gridster.el;
    resizeEvent = resize;
    resizeEventType = resizeEventScrollType;
    /** @type {?} */
    var offsetWidth = gridsterElement.offsetWidth;
    /** @type {?} */
    var offsetHeight = gridsterElement.offsetHeight;
    /** @type {?} */
    var offsetLeft = gridsterElement.scrollLeft;
    /** @type {?} */
    var offsetTop = gridsterElement.scrollTop;
    /** @type {?} */
    var elemTopOffset = top - offsetTop;
    /** @type {?} */
    var elemBottomOffset = offsetHeight + offsetTop - top - height;
    if (lastMouse.clientY < e.clientY && elemBottomOffset < scrollSensitivity) {
        cancelN();
        if ((resizeEvent && resizeEventType && !resizeEventType.s) || intervalS) {
            return;
        }
        intervalS = startVertical(1, calculateItemPosition, lastMouse);
    }
    else if (lastMouse.clientY > e.clientY && offsetTop > 0 && elemTopOffset < scrollSensitivity) {
        cancelS();
        if ((resizeEvent && resizeEventType && !resizeEventType.n) || intervalN) {
            return;
        }
        intervalN = startVertical(-1, calculateItemPosition, lastMouse);
    }
    else if (lastMouse.clientY !== e.clientY) {
        cancelVertical();
    }
    /** @type {?} */
    var elemRightOffset = offsetLeft + offsetWidth - left - width;
    /** @type {?} */
    var elemLeftOffset = left - offsetLeft;
    if (lastMouse.clientX < e.clientX && elemRightOffset <= scrollSensitivity) {
        cancelW();
        if ((resizeEvent && resizeEventType && !resizeEventType.e) || intervalE) {
            return;
        }
        intervalE = startHorizontal(1, calculateItemPosition, lastMouse);
    }
    else if (lastMouse.clientX > e.clientX && offsetLeft > 0 && elemLeftOffset < scrollSensitivity) {
        cancelE();
        if ((resizeEvent && resizeEventType && !resizeEventType.w) || intervalW) {
            return;
        }
        intervalW = startHorizontal(-1, calculateItemPosition, lastMouse);
    }
    else if (lastMouse.clientX !== e.clientX) {
        cancelHorizontal();
    }
}
/**
 * @param {?} sign
 * @param {?} calculateItemPosition
 * @param {?} lastMouse
 * @return {?}
 */
function startVertical(sign, calculateItemPosition, lastMouse) {
    /** @type {?} */
    var clientY = lastMouse.clientY;
    return setInterval(function () {
        if (!gridsterElement || sign === -1 && gridsterElement.scrollTop - scrollSpeed < 0) {
            cancelVertical();
        }
        gridsterElement.scrollTop += sign * scrollSpeed;
        clientY += sign * scrollSpeed;
        calculateItemPosition({ clientX: lastMouse.clientX, clientY: clientY });
    }, intervalDuration);
}
/**
 * @param {?} sign
 * @param {?} calculateItemPosition
 * @param {?} lastMouse
 * @return {?}
 */
function startHorizontal(sign, calculateItemPosition, lastMouse) {
    /** @type {?} */
    var clientX = lastMouse.clientX;
    return setInterval(function () {
        if (!gridsterElement || sign === -1 && gridsterElement.scrollLeft - scrollSpeed < 0) {
            cancelHorizontal();
        }
        gridsterElement.scrollLeft += sign * scrollSpeed;
        clientX += sign * scrollSpeed;
        calculateItemPosition({ clientX: clientX, clientY: lastMouse.clientY });
    }, intervalDuration);
}
/**
 * @return {?}
 */
function cancelScroll() {
    cancelHorizontal();
    cancelVertical();
    gridsterElement = undefined;
}
/**
 * @return {?}
 */
function cancelHorizontal() {
    cancelE();
    cancelW();
}
/**
 * @return {?}
 */
function cancelVertical() {
    cancelN();
    cancelS();
}
/**
 * @return {?}
 */
function cancelE() {
    if (intervalE) {
        clearInterval(intervalE);
        intervalE = 0;
    }
}
/**
 * @return {?}
 */
function cancelW() {
    if (intervalW) {
        clearInterval(intervalW);
        intervalW = 0;
    }
}
/**
 * @return {?}
 */
function cancelS() {
    if (intervalS) {
        clearInterval(intervalS);
        intervalS = 0;
    }
}
/**
 * @return {?}
 */
function cancelN() {
    if (intervalN) {
        clearInterval(intervalN);
        intervalN = 0;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var GridsterPush = /** @class */ (function () {
    function GridsterPush(gridsterItem) {
        this.pushedItems = [];
        this.pushedItemsTemp = [];
        this.pushedItemsTempPath = [];
        this.pushedItemsPath = [];
        this.gridsterItem = gridsterItem;
        this.gridster = gridsterItem.gridster;
        this.tryPattern = {
            fromEast: [this.tryWest, this.trySouth, this.tryNorth, this.tryEast],
            fromWest: [this.tryEast, this.trySouth, this.tryNorth, this.tryWest],
            fromNorth: [this.trySouth, this.tryEast, this.tryWest, this.tryNorth],
            fromSouth: [this.tryNorth, this.tryEast, this.tryWest, this.trySouth]
        };
        this.fromSouth = 'fromSouth';
        this.fromNorth = 'fromNorth';
        this.fromEast = 'fromEast';
        this.fromWest = 'fromWest';
    }
    /**
     * @return {?}
     */
    GridsterPush.prototype.destroy = /**
     * @return {?}
     */
    function () {
        delete this.gridster;
        delete this.gridsterItem;
    };
    /**
     * @param {?} direction
     * @param {?=} disable
     * @return {?}
     */
    GridsterPush.prototype.pushItems = /**
     * @param {?} direction
     * @param {?=} disable
     * @return {?}
     */
    function (direction, disable) {
        if (this.gridster.$options.pushItems && !disable) {
            this.pushedItemsOrder = [];
            /** @type {?} */
            var pushed = this.push(this.gridsterItem, direction);
            if (!pushed) {
                this.restoreTempItems();
            }
            this.pushedItemsOrder = [];
            this.pushedItemsTemp = [];
            this.pushedItemsTempPath = [];
            return pushed;
        }
        else {
            return false;
        }
    };
    /**
     * @return {?}
     */
    GridsterPush.prototype.restoreTempItems = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var i = this.pushedItemsTemp.length - 1;
        for (; i > -1; i--) {
            this.removeFromTempPushed(this.pushedItemsTemp[i]);
        }
    };
    /**
     * @return {?}
     */
    GridsterPush.prototype.restoreItems = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var i = 0;
        /** @type {?} */
        var l = this.pushedItems.length;
        /** @type {?} */
        var pushedItem;
        for (; i < l; i++) {
            pushedItem = this.pushedItems[i];
            pushedItem.$item.x = pushedItem.item.x || 0;
            pushedItem.$item.y = pushedItem.item.y || 0;
            pushedItem.setSize();
        }
        this.pushedItems = [];
        this.pushedItemsPath = [];
    };
    /**
     * @return {?}
     */
    GridsterPush.prototype.setPushedItems = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var i = 0;
        /** @type {?} */
        var l = this.pushedItems.length;
        /** @type {?} */
        var pushedItem;
        for (; i < l; i++) {
            pushedItem = this.pushedItems[i];
            pushedItem.checkItemChanges(pushedItem.$item, pushedItem.item);
        }
        this.pushedItems = [];
        this.pushedItemsPath = [];
    };
    /**
     * @return {?}
     */
    GridsterPush.prototype.checkPushBack = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var i = this.pushedItems.length - 1;
        /** @type {?} */
        var change = false;
        for (; i > -1; i--) {
            if (this.checkPushedItem(this.pushedItems[i], i)) {
                change = true;
            }
        }
        if (change) {
            this.checkPushBack();
        }
    };
    /**
     * @param {?} gridsterItem
     * @param {?} direction
     * @return {?}
     */
    GridsterPush.prototype.push = /**
     * @param {?} gridsterItem
     * @param {?} direction
     * @return {?}
     */
    function (gridsterItem, direction) {
        if (this.gridster.checkGridCollision(gridsterItem.$item)) {
            return false;
        }
        if (direction === '') {
            return false;
        }
        /** @type {?} */
        var a = this.gridster.findItemsWithItem(gridsterItem.$item);
        /** @type {?} */
        var i = a.length - 1;
        /** @type {?} */
        var itemCollision;
        /** @type {?} */
        var makePush = true;
        /** @type {?} */
        var b = [];
        for (; i > -1; i--) {
            itemCollision = a[i];
            if (itemCollision === this.gridsterItem) {
                makePush = false;
                break;
            }
            if (!itemCollision.canBeDragged()) {
                makePush = false;
                break;
            }
            /** @type {?} */
            var compare = this.pushedItemsTemp.find(function (el) {
                return el.$item.x === itemCollision.$item.x && el.$item.y === itemCollision.$item.y;
            });
            if (compare) {
                makePush = false;
                break;
            }
            if (this.tryPattern[direction][0].call(this, itemCollision, gridsterItem)) {
                this.pushedItemsOrder.push(itemCollision);
                b.push(itemCollision);
            }
            else if (this.tryPattern[direction][1].call(this, itemCollision, gridsterItem)) {
                this.pushedItemsOrder.push(itemCollision);
                b.push(itemCollision);
            }
            else if (this.tryPattern[direction][2].call(this, itemCollision, gridsterItem)) {
                this.pushedItemsOrder.push(itemCollision);
                b.push(itemCollision);
            }
            else if (this.tryPattern[direction][3].call(this, itemCollision, gridsterItem)) {
                this.pushedItemsOrder.push(itemCollision);
                b.push(itemCollision);
            }
            else {
                makePush = false;
                break;
            }
        }
        if (!makePush) {
            i = this.pushedItemsOrder.lastIndexOf(b[0]);
            if (i > -1) {
                /** @type {?} */
                var j = this.pushedItemsOrder.length - 1;
                for (; j >= i; j--) {
                    itemCollision = this.pushedItemsOrder[j];
                    this.pushedItemsOrder.pop();
                    this.removeFromTempPushed(itemCollision);
                    this.removeFromPushedItem(itemCollision);
                }
            }
        }
        return makePush;
    };
    /**
     * @param {?} gridsterItemCollide
     * @param {?} gridsterItem
     * @return {?}
     */
    GridsterPush.prototype.trySouth = /**
     * @param {?} gridsterItemCollide
     * @param {?} gridsterItem
     * @return {?}
     */
    function (gridsterItemCollide, gridsterItem) {
        if (!this.gridster.$options.pushDirections.south) {
            return false;
        }
        this.addToTempPushed(gridsterItemCollide);
        gridsterItemCollide.$item.y = gridsterItem.$item.y + gridsterItem.$item.rows;
        if (this.push(gridsterItemCollide, this.fromNorth)) {
            gridsterItemCollide.setSize();
            this.addToPushed(gridsterItemCollide);
            return true;
        }
        else {
            this.removeFromTempPushed(gridsterItemCollide);
        }
        return false;
    };
    /**
     * @param {?} gridsterItemCollide
     * @param {?} gridsterItem
     * @return {?}
     */
    GridsterPush.prototype.tryNorth = /**
     * @param {?} gridsterItemCollide
     * @param {?} gridsterItem
     * @return {?}
     */
    function (gridsterItemCollide, gridsterItem) {
        if (!this.gridster.$options.pushDirections.north) {
            return false;
        }
        this.addToTempPushed(gridsterItemCollide);
        gridsterItemCollide.$item.y = gridsterItem.$item.y - gridsterItemCollide.$item.rows;
        if (this.push(gridsterItemCollide, this.fromSouth)) {
            gridsterItemCollide.setSize();
            this.addToPushed(gridsterItemCollide);
            return true;
        }
        else {
            this.removeFromTempPushed(gridsterItemCollide);
        }
        return false;
    };
    /**
     * @param {?} gridsterItemCollide
     * @param {?} gridsterItem
     * @return {?}
     */
    GridsterPush.prototype.tryEast = /**
     * @param {?} gridsterItemCollide
     * @param {?} gridsterItem
     * @return {?}
     */
    function (gridsterItemCollide, gridsterItem) {
        if (!this.gridster.$options.pushDirections.east) {
            return false;
        }
        this.addToTempPushed(gridsterItemCollide);
        gridsterItemCollide.$item.x = gridsterItem.$item.x + gridsterItem.$item.cols;
        if (this.push(gridsterItemCollide, this.fromWest)) {
            gridsterItemCollide.setSize();
            this.addToPushed(gridsterItemCollide);
            return true;
        }
        else {
            this.removeFromTempPushed(gridsterItemCollide);
        }
        return false;
    };
    /**
     * @param {?} gridsterItemCollide
     * @param {?} gridsterItem
     * @return {?}
     */
    GridsterPush.prototype.tryWest = /**
     * @param {?} gridsterItemCollide
     * @param {?} gridsterItem
     * @return {?}
     */
    function (gridsterItemCollide, gridsterItem) {
        if (!this.gridster.$options.pushDirections.west) {
            return false;
        }
        this.addToTempPushed(gridsterItemCollide);
        gridsterItemCollide.$item.x = gridsterItem.$item.x - gridsterItemCollide.$item.cols;
        if (this.push(gridsterItemCollide, this.fromEast)) {
            gridsterItemCollide.setSize();
            this.addToPushed(gridsterItemCollide);
            return true;
        }
        else {
            this.removeFromTempPushed(gridsterItemCollide);
        }
        return false;
    };
    /**
     * @param {?} gridsterItem
     * @return {?}
     */
    GridsterPush.prototype.addToTempPushed = /**
     * @param {?} gridsterItem
     * @return {?}
     */
    function (gridsterItem) {
        /** @type {?} */
        var i = this.pushedItemsTemp.indexOf(gridsterItem);
        if (i === -1) {
            i = this.pushedItemsTemp.push(gridsterItem) - 1;
            this.pushedItemsTempPath[i] = [];
        }
        this.pushedItemsTempPath[i].push({ x: gridsterItem.$item.x, y: gridsterItem.$item.y });
    };
    /**
     * @param {?} gridsterItem
     * @return {?}
     */
    GridsterPush.prototype.removeFromTempPushed = /**
     * @param {?} gridsterItem
     * @return {?}
     */
    function (gridsterItem) {
        /** @type {?} */
        var i = this.pushedItemsTemp.indexOf(gridsterItem);
        /** @type {?} */
        var tempPosition = this.pushedItemsTempPath[i].pop();
        if (!tempPosition) {
            return;
        }
        gridsterItem.$item.x = tempPosition.x;
        gridsterItem.$item.y = tempPosition.y;
        gridsterItem.setSize();
        if (!this.pushedItemsTempPath[i].length) {
            this.pushedItemsTemp.splice(i, 1);
            this.pushedItemsTempPath.splice(i, 1);
        }
    };
    /**
     * @param {?} gridsterItem
     * @return {?}
     */
    GridsterPush.prototype.addToPushed = /**
     * @param {?} gridsterItem
     * @return {?}
     */
    function (gridsterItem) {
        if (this.pushedItems.indexOf(gridsterItem) < 0) {
            this.pushedItems.push(gridsterItem);
            this.pushedItemsPath.push([{ x: gridsterItem.item.x || 0, y: gridsterItem.item.y || 0 },
                { x: gridsterItem.$item.x, y: gridsterItem.$item.y }]);
        }
        else {
            /** @type {?} */
            var i = this.pushedItems.indexOf(gridsterItem);
            this.pushedItemsPath[i].push({ x: gridsterItem.$item.x, y: gridsterItem.$item.y });
        }
    };
    /**
     * @param {?} i
     * @return {?}
     */
    GridsterPush.prototype.removeFromPushed = /**
     * @param {?} i
     * @return {?}
     */
    function (i) {
        if (i > -1) {
            this.pushedItems.splice(i, 1);
            this.pushedItemsPath.splice(i, 1);
        }
    };
    /**
     * @param {?} gridsterItem
     * @return {?}
     */
    GridsterPush.prototype.removeFromPushedItem = /**
     * @param {?} gridsterItem
     * @return {?}
     */
    function (gridsterItem) {
        /** @type {?} */
        var i = this.pushedItems.indexOf(gridsterItem);
        if (i > -1) {
            this.pushedItemsPath[i].pop();
            if (!this.pushedItemsPath.length) {
                this.pushedItems.splice(i, 1);
                this.pushedItemsPath.splice(i, 1);
            }
        }
    };
    /**
     * @param {?} pushedItem
     * @param {?} i
     * @return {?}
     */
    GridsterPush.prototype.checkPushedItem = /**
     * @param {?} pushedItem
     * @param {?} i
     * @return {?}
     */
    function (pushedItem, i) {
        /** @type {?} */
        var path = this.pushedItemsPath[i];
        /** @type {?} */
        var j = path.length - 2;
        /** @type {?} */
        var lastPosition;
        /** @type {?} */
        var x;
        /** @type {?} */
        var y;
        /** @type {?} */
        var change = false;
        for (; j > -1; j--) {
            lastPosition = path[j];
            x = pushedItem.$item.x;
            y = pushedItem.$item.y;
            pushedItem.$item.x = lastPosition.x;
            pushedItem.$item.y = lastPosition.y;
            if (!this.gridster.findItemWithItem(pushedItem.$item)) {
                pushedItem.setSize();
                path.splice(j + 1, path.length - j - 1);
                change = true;
            }
            else {
                pushedItem.$item.x = x;
                pushedItem.$item.y = y;
            }
        }
        if (path.length < 2) {
            this.removeFromPushed(i);
        }
        return change;
    };
    GridsterPush.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    GridsterPush.ctorParameters = function () { return [
        { type: GridsterItemComponentInterface }
    ]; };
    return GridsterPush;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var GridsterDraggable = /** @class */ (function () {
    function GridsterDraggable(gridsterItem, gridster, zone) {
        this.zone = zone;
        this.collision = false;
        this.gridsterItem = gridsterItem;
        this.gridster = gridster;
        this.lastMouse = {
            clientX: 0,
            clientY: 0
        };
        this.path = [];
    }
    /**
     * @return {?}
     */
    GridsterDraggable.prototype.destroy = /**
     * @return {?}
     */
    function () {
        if (this.gridster.previewStyle) {
            this.gridster.previewStyle(true);
        }
        delete this.gridsterItem;
        delete this.gridster;
        delete this.collision;
        if (this.mousedown) {
            this.mousedown();
            this.touchstart();
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    GridsterDraggable.prototype.dragStart = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        switch (e.which) {
            case 1:
                // left mouse button
                break;
            case 2:
            case 3:
                // right or middle mouse button
                return;
        }
        if (this.gridster.options.draggable && this.gridster.options.draggable.start) {
            this.gridster.options.draggable.start(this.gridsterItem.item, this.gridsterItem, e);
        }
        e.stopPropagation();
        e.preventDefault();
        this.dragFunction = this.dragMove.bind(this);
        this.dragStopFunction = this.dragStop.bind(this);
        this.zone.runOutsideAngular(function () {
            _this.mousemove = _this.gridsterItem.renderer.listen('document', 'mousemove', _this.dragFunction);
            _this.touchmove = _this.gridster.renderer.listen(_this.gridster.el, 'touchmove', _this.dragFunction);
        });
        this.mouseup = this.gridsterItem.renderer.listen('document', 'mouseup', this.dragStopFunction);
        this.mouseleave = this.gridsterItem.renderer.listen('document', 'mouseleave', this.dragStopFunction);
        this.cancelOnBlur = this.gridsterItem.renderer.listen('window', 'blur', this.dragStopFunction);
        this.touchend = this.gridsterItem.renderer.listen('document', 'touchend', this.dragStopFunction);
        this.touchcancel = this.gridsterItem.renderer.listen('document', 'touchcancel', this.dragStopFunction);
        this.gridsterItem.renderer.addClass(this.gridsterItem.el, 'gridster-item-moving');
        this.margin = this.gridster.$options.margin;
        this.offsetLeft = this.gridster.el.scrollLeft - this.gridster.el.offsetLeft;
        this.offsetTop = this.gridster.el.scrollTop - this.gridster.el.offsetTop;
        this.left = this.gridsterItem.left - this.margin;
        this.top = this.gridsterItem.top - this.margin;
        this.width = this.gridsterItem.width;
        this.height = this.gridsterItem.height;
        this.diffLeft = e.clientX + this.offsetLeft - this.margin - this.left;
        this.diffTop = e.clientY + this.offsetTop - this.margin - this.top;
        this.gridster.movingItem = this.gridsterItem.$item;
        this.gridster.previewStyle(true);
        this.push = new GridsterPush(this.gridsterItem);
        this.swap = new GridsterSwap(this.gridsterItem);
        this.gridster.dragInProgress = true;
        this.gridster.updateGrid();
        this.path.push({ x: this.gridsterItem.item.x || 0, y: this.gridsterItem.item.y || 0 });
    };
    /**
     * @param {?} e
     * @return {?}
     */
    GridsterDraggable.prototype.dragMove = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.stopPropagation();
        e.preventDefault();
        GridsterUtils.checkTouchEvent(e);
        this.offsetLeft = this.gridster.el.scrollLeft - this.gridster.el.offsetLeft;
        this.offsetTop = this.gridster.el.scrollTop - this.gridster.el.offsetTop;
        scroll(this.gridster, this.left, this.top, this.width, this.height, e, this.lastMouse, this.calculateItemPositionFromMousePosition.bind(this));
        this.calculateItemPositionFromMousePosition(e);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    GridsterDraggable.prototype.calculateItemPositionFromMousePosition = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        this.left = e.clientX + this.offsetLeft - this.diffLeft;
        this.top = e.clientY + this.offsetTop - this.diffTop;
        this.calculateItemPosition();
        this.lastMouse.clientX = e.clientX;
        this.lastMouse.clientY = e.clientY;
        this.zone.run(function () {
            _this.gridster.updateGrid();
        });
    };
    /**
     * @param {?} e
     * @return {?}
     */
    GridsterDraggable.prototype.dragStop = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        e.stopPropagation();
        e.preventDefault();
        cancelScroll();
        this.cancelOnBlur();
        this.mousemove();
        this.mouseup();
        this.mouseleave();
        this.touchmove();
        this.touchend();
        this.touchcancel();
        this.gridsterItem.renderer.removeClass(this.gridsterItem.el, 'gridster-item-moving');
        this.gridster.dragInProgress = false;
        this.gridster.updateGrid();
        this.path = [];
        if (this.gridster.options.draggable && this.gridster.options.draggable.stop) {
            Promise.resolve(this.gridster.options.draggable.stop(this.gridsterItem.item, this.gridsterItem, e))
                .then(this.makeDrag.bind(this), this.cancelDrag.bind(this));
        }
        else {
            this.makeDrag();
        }
        setTimeout(function () {
            if (_this.gridster) {
                _this.gridster.movingItem = null;
                _this.gridster.previewStyle(true);
            }
        });
    };
    /**
     * @return {?}
     */
    GridsterDraggable.prototype.cancelDrag = /**
     * @return {?}
     */
    function () {
        this.gridsterItem.$item.x = this.gridsterItem.item.x || 0;
        this.gridsterItem.$item.y = this.gridsterItem.item.y || 0;
        this.gridsterItem.setSize();
        if (this.push) {
            this.push.restoreItems();
        }
        if (this.swap) {
            this.swap.restoreSwapItem();
        }
        if (this.push) {
            this.push.destroy();
            delete this.push;
        }
        if (this.swap) {
            this.swap.destroy();
            delete this.swap;
        }
    };
    /**
     * @return {?}
     */
    GridsterDraggable.prototype.makeDrag = /**
     * @return {?}
     */
    function () {
        if (this.gridster.$options.draggable.dropOverItems && this.gridster.options.draggable
            && this.gridster.options.draggable.dropOverItemsCallback
            && this.collision && this.collision !== true && this.collision.$item) {
            this.gridster.options.draggable.dropOverItemsCallback(this.gridsterItem.item, this.collision.item, this.gridster);
        }
        this.collision = false;
        this.gridsterItem.setSize();
        this.gridsterItem.checkItemChanges(this.gridsterItem.$item, this.gridsterItem.item);
        if (this.push) {
            this.push.setPushedItems();
        }
        if (this.swap) {
            this.swap.setSwapItem();
        }
        if (this.push) {
            this.push.destroy();
            delete this.push;
        }
        if (this.swap) {
            this.swap.destroy();
            delete this.swap;
        }
    };
    /**
     * @return {?}
     */
    GridsterDraggable.prototype.calculateItemPosition = /**
     * @return {?}
     */
    function () {
        this.gridster.movingItem = this.gridsterItem.$item;
        this.positionX = this.gridster.pixelsToPositionX(this.left, Math.round);
        this.positionY = this.gridster.pixelsToPositionY(this.top, Math.round);
        this.positionXBackup = this.gridsterItem.$item.x;
        this.positionYBackup = this.gridsterItem.$item.y;
        this.gridsterItem.$item.x = this.positionX;
        if (this.gridster.checkGridCollision(this.gridsterItem.$item)) {
            this.gridsterItem.$item.x = this.positionXBackup;
        }
        this.gridsterItem.$item.y = this.positionY;
        if (this.gridster.checkGridCollision(this.gridsterItem.$item)) {
            this.gridsterItem.$item.y = this.positionYBackup;
        }
        /** @type {?} */
        var transform = 'translate(' + this.left + 'px, ' + this.top + 'px)';
        this.gridsterItem.renderer.setStyle(this.gridsterItem.el, 'transform', transform);
        if (this.positionXBackup !== this.gridsterItem.$item.x || this.positionYBackup !== this.gridsterItem.$item.y) {
            /** @type {?} */
            var lastPosition = this.path[this.path.length - 1];
            /** @type {?} */
            var direction = '';
            if (lastPosition.x < this.gridsterItem.$item.x) {
                direction = this.push.fromWest;
            }
            else if (lastPosition.x > this.gridsterItem.$item.x) {
                direction = this.push.fromEast;
            }
            else if (lastPosition.y < this.gridsterItem.$item.y) {
                direction = this.push.fromNorth;
            }
            else if (lastPosition.y > this.gridsterItem.$item.y) {
                direction = this.push.fromSouth;
            }
            this.push.pushItems(direction, this.gridster.$options.disablePushOnDrag);
            this.swap.swapItems();
            this.collision = this.gridster.checkCollision(this.gridsterItem.$item);
            if (this.collision) {
                this.gridsterItem.$item.x = this.positionXBackup;
                this.gridsterItem.$item.y = this.positionYBackup;
                if (this.gridster.$options.draggable.dropOverItems && this.collision !== true && this.collision.$item) {
                    this.gridster.movingItem = null;
                }
            }
            else {
                this.path.push({ x: this.gridsterItem.$item.x, y: this.gridsterItem.$item.y });
            }
            this.push.checkPushBack();
        }
        this.gridster.previewStyle(true);
    };
    /**
     * @return {?}
     */
    GridsterDraggable.prototype.toggle = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var enableDrag = this.gridsterItem.canBeDragged();
        if (!this.enabled && enableDrag) {
            this.enabled = !this.enabled;
            this.dragStartFunction = this.dragStartDelay.bind(this);
            this.mousedown = this.gridsterItem.renderer.listen(this.gridsterItem.el, 'mousedown', this.dragStartFunction);
            this.touchstart = this.gridsterItem.renderer.listen(this.gridsterItem.el, 'touchstart', this.dragStartFunction);
        }
        else if (this.enabled && !enableDrag) {
            this.enabled = !this.enabled;
            this.mousedown();
            this.touchstart();
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    GridsterDraggable.prototype.dragStartDelay = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        if (e.target.hasAttribute('class') && e.target.getAttribute('class').split(' ').indexOf('gridster-item-resizable-handler') > -1) {
            return;
        }
        if (GridsterUtils.checkContentClassForEvent(this.gridster, e)) {
            return;
        }
        GridsterUtils.checkTouchEvent(e);
        if (!this.gridster.$options.draggable.delayStart) {
            this.dragStart(e);
            return;
        }
        /** @type {?} */
        var timeout = setTimeout(function () {
            _this.dragStart(e);
            cancelDrag();
        }, this.gridster.$options.draggable.delayStart);
        /** @type {?} */
        var cancelMouse = this.gridsterItem.renderer.listen('document', 'mouseup', cancelDrag);
        /** @type {?} */
        var cancelMouseLeave = this.gridsterItem.renderer.listen('document', 'mouseleave', cancelDrag);
        /** @type {?} */
        var cancelOnBlur = this.gridsterItem.renderer.listen('window', 'blur', cancelDrag);
        /** @type {?} */
        var cancelTouchMove = this.gridsterItem.renderer.listen('document', 'touchmove', cancelMove);
        /** @type {?} */
        var cancelTouchEnd = this.gridsterItem.renderer.listen('document', 'touchend', cancelDrag);
        /** @type {?} */
        var cancelTouchCancel = this.gridsterItem.renderer.listen('document', 'touchcancel', cancelDrag);
        /**
         * @param {?} eventMove
         * @return {?}
         */
        function cancelMove(eventMove) {
            GridsterUtils.checkTouchEvent(eventMove);
            if (Math.abs(eventMove.clientX - e.clientX) > 9 || Math.abs(eventMove.clientY - e.clientY) > 9) {
                cancelDrag();
            }
        }
        /**
         * @return {?}
         */
        function cancelDrag() {
            clearTimeout(timeout);
            cancelOnBlur();
            cancelMouse();
            cancelMouseLeave();
            cancelTouchMove();
            cancelTouchEnd();
            cancelTouchCancel();
        }
    };
    GridsterDraggable.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    GridsterDraggable.ctorParameters = function () { return [
        { type: GridsterItemComponentInterface },
        { type: GridsterComponentInterface },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
    ]; };
    return GridsterDraggable;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var GridsterPushResize = /** @class */ (function () {
    function GridsterPushResize(gridsterItem) {
        this.pushedItems = [];
        this.pushedItemsPath = [];
        this.gridsterItem = gridsterItem;
        this.gridster = gridsterItem.gridster;
        this.tryPattern = {
            fromEast: this.tryWest,
            fromWest: this.tryEast,
            fromNorth: this.trySouth,
            fromSouth: this.tryNorth
        };
        this.fromSouth = 'fromSouth';
        this.fromNorth = 'fromNorth';
        this.fromEast = 'fromEast';
        this.fromWest = 'fromWest';
    }
    /**
     * @return {?}
     */
    GridsterPushResize.prototype.destroy = /**
     * @return {?}
     */
    function () {
        delete this.gridster;
        delete this.gridsterItem;
    };
    /**
     * @param {?} direction
     * @return {?}
     */
    GridsterPushResize.prototype.pushItems = /**
     * @param {?} direction
     * @return {?}
     */
    function (direction) {
        if (this.gridster.$options.pushResizeItems) {
            return this.push(this.gridsterItem, direction);
        }
        else {
            return false;
        }
    };
    /**
     * @return {?}
     */
    GridsterPushResize.prototype.restoreItems = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var i = 0;
        /** @type {?} */
        var l = this.pushedItems.length;
        /** @type {?} */
        var pushedItem;
        for (; i < l; i++) {
            pushedItem = this.pushedItems[i];
            pushedItem.$item.x = pushedItem.item.x || 0;
            pushedItem.$item.y = pushedItem.item.y || 0;
            pushedItem.$item.cols = pushedItem.item.cols || 1;
            pushedItem.$item["row"] = pushedItem.item["row"] || 1;
            pushedItem.setSize();
        }
        this.pushedItems = [];
        this.pushedItemsPath = [];
    };
    /**
     * @return {?}
     */
    GridsterPushResize.prototype.setPushedItems = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var i = 0;
        /** @type {?} */
        var l = this.pushedItems.length;
        /** @type {?} */
        var pushedItem;
        for (; i < l; i++) {
            pushedItem = this.pushedItems[i];
            pushedItem.checkItemChanges(pushedItem.$item, pushedItem.item);
        }
        this.pushedItems = [];
        this.pushedItemsPath = [];
    };
    /**
     * @return {?}
     */
    GridsterPushResize.prototype.checkPushBack = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var i = this.pushedItems.length - 1;
        /** @type {?} */
        var change = false;
        for (; i > -1; i--) {
            if (this.checkPushedItem(this.pushedItems[i], i)) {
                change = true;
            }
        }
        if (change) {
            this.checkPushBack();
        }
    };
    /**
     * @param {?} gridsterItem
     * @param {?} direction
     * @return {?}
     */
    GridsterPushResize.prototype.push = /**
     * @param {?} gridsterItem
     * @param {?} direction
     * @return {?}
     */
    function (gridsterItem, direction) {
        /** @type {?} */
        var gridsterItemCollision = this.gridster.checkCollision(gridsterItem.$item);
        if (gridsterItemCollision && gridsterItemCollision !== true &&
            gridsterItemCollision !== this.gridsterItem && gridsterItemCollision.canBeResized()) {
            if (this.tryPattern[direction].call(this, gridsterItemCollision, gridsterItem, direction)) {
                return true;
            }
        }
        else if (gridsterItemCollision === false) {
            return true;
        }
        return false;
    };
    /**
     * @param {?} gridsterItemCollide
     * @param {?} gridsterItem
     * @param {?} direction
     * @return {?}
     */
    GridsterPushResize.prototype.trySouth = /**
     * @param {?} gridsterItemCollide
     * @param {?} gridsterItem
     * @param {?} direction
     * @return {?}
     */
    function (gridsterItemCollide, gridsterItem, direction) {
        /** @type {?} */
        var backUpY = gridsterItemCollide.$item.y;
        /** @type {?} */
        var backUpRows = gridsterItemCollide.$item.rows;
        gridsterItemCollide.$item.y = gridsterItem.$item.y + gridsterItem.$item.rows;
        gridsterItemCollide.$item.rows = backUpRows + backUpY - gridsterItemCollide.$item.y;
        if (!GridsterComponent.checkCollisionTwoItems(gridsterItemCollide.$item, gridsterItem.$item)
            && !this.gridster.checkGridCollision(gridsterItemCollide.$item)) {
            gridsterItemCollide.setSize();
            this.addToPushed(gridsterItemCollide);
            this.push(gridsterItem, direction);
            return true;
        }
        else {
            gridsterItemCollide.$item.y = backUpY;
            gridsterItemCollide.$item.rows = backUpRows;
        }
        return false;
    };
    /**
     * @param {?} gridsterItemCollide
     * @param {?} gridsterItem
     * @param {?} direction
     * @return {?}
     */
    GridsterPushResize.prototype.tryNorth = /**
     * @param {?} gridsterItemCollide
     * @param {?} gridsterItem
     * @param {?} direction
     * @return {?}
     */
    function (gridsterItemCollide, gridsterItem, direction) {
        /** @type {?} */
        var backUpRows = gridsterItemCollide.$item.rows;
        gridsterItemCollide.$item.rows = gridsterItem.$item.y - gridsterItemCollide.$item.y;
        if (!GridsterComponent.checkCollisionTwoItems(gridsterItemCollide.$item, gridsterItem.$item)
            && !this.gridster.checkGridCollision(gridsterItemCollide.$item)) {
            gridsterItemCollide.setSize();
            this.addToPushed(gridsterItemCollide);
            this.push(gridsterItem, direction);
            return true;
        }
        else {
            gridsterItemCollide.$item.rows = backUpRows;
        }
        return false;
    };
    /**
     * @param {?} gridsterItemCollide
     * @param {?} gridsterItem
     * @param {?} direction
     * @return {?}
     */
    GridsterPushResize.prototype.tryEast = /**
     * @param {?} gridsterItemCollide
     * @param {?} gridsterItem
     * @param {?} direction
     * @return {?}
     */
    function (gridsterItemCollide, gridsterItem, direction) {
        /** @type {?} */
        var backUpX = gridsterItemCollide.$item.x;
        /** @type {?} */
        var backUpCols = gridsterItemCollide.$item.cols;
        gridsterItemCollide.$item.x = gridsterItem.$item.x + gridsterItem.$item.cols;
        gridsterItemCollide.$item.cols = backUpCols + backUpX - gridsterItemCollide.$item.x;
        if (!GridsterComponent.checkCollisionTwoItems(gridsterItemCollide.$item, gridsterItem.$item)
            && !this.gridster.checkGridCollision(gridsterItemCollide.$item)) {
            gridsterItemCollide.setSize();
            this.addToPushed(gridsterItemCollide);
            this.push(gridsterItem, direction);
            return true;
        }
        else {
            gridsterItemCollide.$item.x = backUpX;
            gridsterItemCollide.$item.cols = backUpCols;
        }
        return false;
    };
    /**
     * @param {?} gridsterItemCollide
     * @param {?} gridsterItem
     * @param {?} direction
     * @return {?}
     */
    GridsterPushResize.prototype.tryWest = /**
     * @param {?} gridsterItemCollide
     * @param {?} gridsterItem
     * @param {?} direction
     * @return {?}
     */
    function (gridsterItemCollide, gridsterItem, direction) {
        /** @type {?} */
        var backUpCols = gridsterItemCollide.$item.cols;
        gridsterItemCollide.$item.cols = gridsterItem.$item.x - gridsterItemCollide.$item.x;
        if (!GridsterComponent.checkCollisionTwoItems(gridsterItemCollide.$item, gridsterItem.$item)
            && !this.gridster.checkGridCollision(gridsterItemCollide.$item)) {
            gridsterItemCollide.setSize();
            this.addToPushed(gridsterItemCollide);
            this.push(gridsterItem, direction);
            return true;
        }
        else {
            gridsterItemCollide.$item.cols = backUpCols;
        }
        return false;
    };
    /**
     * @param {?} gridsterItem
     * @return {?}
     */
    GridsterPushResize.prototype.addToPushed = /**
     * @param {?} gridsterItem
     * @return {?}
     */
    function (gridsterItem) {
        if (this.pushedItems.indexOf(gridsterItem) < 0) {
            this.pushedItems.push(gridsterItem);
            this.pushedItemsPath.push([
                {
                    x: gridsterItem.item.x || 0,
                    y: gridsterItem.item.y || 0,
                    cols: gridsterItem.item.cols || 0,
                    rows: gridsterItem.item.rows || 0
                },
                {
                    x: gridsterItem.$item.x,
                    y: gridsterItem.$item.y,
                    cols: gridsterItem.$item.cols,
                    rows: gridsterItem.$item.rows
                }
            ]);
        }
        else {
            /** @type {?} */
            var i = this.pushedItems.indexOf(gridsterItem);
            this.pushedItemsPath[i].push({
                x: gridsterItem.$item.x,
                y: gridsterItem.$item.y,
                cols: gridsterItem.$item.cols,
                rows: gridsterItem.$item.rows
            });
        }
    };
    /**
     * @param {?} i
     * @return {?}
     */
    GridsterPushResize.prototype.removeFromPushed = /**
     * @param {?} i
     * @return {?}
     */
    function (i) {
        if (i > -1) {
            this.pushedItems.splice(i, 1);
            this.pushedItemsPath.splice(i, 1);
        }
    };
    /**
     * @param {?} pushedItem
     * @param {?} i
     * @return {?}
     */
    GridsterPushResize.prototype.checkPushedItem = /**
     * @param {?} pushedItem
     * @param {?} i
     * @return {?}
     */
    function (pushedItem, i) {
        /** @type {?} */
        var path = this.pushedItemsPath[i];
        /** @type {?} */
        var j = path.length - 2;
        /** @type {?} */
        var lastPosition;
        /** @type {?} */
        var x;
        /** @type {?} */
        var y;
        /** @type {?} */
        var cols;
        /** @type {?} */
        var rows;
        for (; j > -1; j--) {
            lastPosition = path[j];
            x = pushedItem.$item.x;
            y = pushedItem.$item.y;
            cols = pushedItem.$item.cols;
            rows = pushedItem.$item.rows;
            pushedItem.$item.x = lastPosition.x;
            pushedItem.$item.y = lastPosition.y;
            pushedItem.$item.cols = lastPosition.cols;
            pushedItem.$item.rows = lastPosition.rows;
            if (!this.gridster.findItemWithItem(pushedItem.$item)) {
                pushedItem.setSize();
                path.splice(j + 1, path.length - 1 - j);
            }
            else {
                pushedItem.$item.x = x;
                pushedItem.$item.y = y;
                pushedItem.$item.cols = cols;
                pushedItem.$item.rows = rows;
            }
        }
        if (path.length < 2) {
            this.removeFromPushed(i);
            return true;
        }
        return false;
    };
    GridsterPushResize.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    GridsterPushResize.ctorParameters = function () { return [
        { type: GridsterItemComponentInterface }
    ]; };
    return GridsterPushResize;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var GridsterResizable = /** @class */ (function () {
    function GridsterResizable(gridsterItem, gridster, zone) {
        this.zone = zone;
        this.gridsterItem = gridsterItem;
        this.gridster = gridster;
        this.lastMouse = {
            clientX: 0,
            clientY: 0
        };
        this.itemBackup = [0, 0, 0, 0];
        this.resizeEventScrollType = { w: false, e: false, n: false, s: false };
    }
    /**
     * @return {?}
     */
    GridsterResizable.prototype.destroy = /**
     * @return {?}
     */
    function () {
        if (this.gridster.previewStyle) {
            this.gridster.previewStyle();
        }
        delete this.gridsterItem;
        delete this.gridster;
    };
    /**
     * @param {?} e
     * @return {?}
     */
    GridsterResizable.prototype.dragStart = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        switch (e.which) {
            case 1:
                // left mouse button
                break;
            case 2:
            case 3:
                // right or middle mouse button
                return;
        }
        if (this.gridster.options.resizable && this.gridster.options.resizable.start) {
            this.gridster.options.resizable.start(this.gridsterItem.item, this.gridsterItem, e);
        }
        e.stopPropagation();
        e.preventDefault();
        this.dragFunction = this.dragMove.bind(this);
        this.dragStopFunction = this.dragStop.bind(this);
        this.zone.runOutsideAngular(function () {
            _this.mousemove = _this.gridsterItem.renderer.listen('document', 'mousemove', _this.dragFunction);
            _this.touchmove = _this.gridster.renderer.listen(_this.gridster.el, 'touchmove', _this.dragFunction);
        });
        this.mouseup = this.gridsterItem.renderer.listen('document', 'mouseup', this.dragStopFunction);
        this.mouseleave = this.gridsterItem.renderer.listen('document', 'mouseleave', this.dragStopFunction);
        this.cancelOnBlur = this.gridsterItem.renderer.listen('window', 'blur', this.dragStopFunction);
        this.touchend = this.gridsterItem.renderer.listen('document', 'touchend', this.dragStopFunction);
        this.touchcancel = this.gridsterItem.renderer.listen('document', 'touchcancel', this.dragStopFunction);
        this.gridsterItem.renderer.addClass(this.gridsterItem.el, 'gridster-item-resizing');
        this.lastMouse.clientX = e.clientX;
        this.lastMouse.clientY = e.clientY;
        this.left = this.gridsterItem.left;
        this.top = this.gridsterItem.top;
        this.width = this.gridsterItem.width;
        this.height = this.gridsterItem.height;
        this.bottom = this.gridsterItem.top + this.gridsterItem.height;
        this.right = this.gridsterItem.left + this.gridsterItem.width;
        this.margin = this.gridster.$options.margin;
        this.offsetLeft = this.gridster.el.scrollLeft - this.gridster.el.offsetLeft;
        this.offsetTop = this.gridster.el.scrollTop - this.gridster.el.offsetTop;
        this.diffLeft = e.clientX + this.offsetLeft - this.left;
        this.diffRight = e.clientX + this.offsetLeft - this.right;
        this.diffTop = e.clientY + this.offsetTop - this.top;
        this.diffBottom = e.clientY + this.offsetTop - this.bottom;
        this.minHeight = this.gridster.positionYToPixels(this.gridsterItem.$item.minItemRows || this.gridster.$options.minItemRows)
            - this.margin;
        this.minWidth = this.gridster.positionXToPixels(this.gridsterItem.$item.minItemCols || this.gridster.$options.minItemCols)
            - this.margin;
        this.gridster.movingItem = this.gridsterItem.$item;
        this.gridster.previewStyle();
        this.push = new GridsterPush(this.gridsterItem);
        this.pushResize = new GridsterPushResize(this.gridsterItem);
        this.gridster.dragInProgress = true;
        this.gridster.updateGrid();
        if (e.target.hasAttribute('class') && e.target.getAttribute('class').split(' ').indexOf('handle-n') > -1) {
            this.resizeEventScrollType.n = true;
            this.directionFunction = this.handleN;
        }
        else if (e.target.hasAttribute('class') && e.target.getAttribute('class').split(' ').indexOf('handle-w') > -1) {
            this.resizeEventScrollType.w = true;
            this.directionFunction = this.handleW;
        }
        else if (e.target.hasAttribute('class') && e.target.getAttribute('class').split(' ').indexOf('handle-s') > -1) {
            this.resizeEventScrollType.s = true;
            this.directionFunction = this.handleS;
        }
        else if (e.target.hasAttribute('class') && e.target.getAttribute('class').split(' ').indexOf('handle-e') > -1) {
            this.resizeEventScrollType.e = true;
            this.directionFunction = this.handleE;
        }
        else if (e.target.hasAttribute('class') && e.target.getAttribute('class').split(' ').indexOf('handle-nw') > -1) {
            this.resizeEventScrollType.n = true;
            this.resizeEventScrollType.w = true;
            this.directionFunction = this.handleNW;
        }
        else if (e.target.hasAttribute('class') && e.target.getAttribute('class').split(' ').indexOf('handle-ne') > -1) {
            this.resizeEventScrollType.n = true;
            this.resizeEventScrollType.e = true;
            this.directionFunction = this.handleNE;
        }
        else if (e.target.hasAttribute('class') && e.target.getAttribute('class').split(' ').indexOf('handle-sw') > -1) {
            this.resizeEventScrollType.s = true;
            this.resizeEventScrollType.w = true;
            this.directionFunction = this.handleSW;
        }
        else if (e.target.hasAttribute('class') && e.target.getAttribute('class').split(' ').indexOf('handle-se') > -1) {
            this.resizeEventScrollType.s = true;
            this.resizeEventScrollType.e = true;
            this.directionFunction = this.handleSE;
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    GridsterResizable.prototype.dragMove = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        e.stopPropagation();
        e.preventDefault();
        GridsterUtils.checkTouchEvent(e);
        this.offsetTop = this.gridster.el.scrollTop - this.gridster.el.offsetTop;
        this.offsetLeft = this.gridster.el.scrollLeft - this.gridster.el.offsetLeft;
        scroll(this.gridster, this.left, this.top, this.width, this.height, e, this.lastMouse, this.directionFunction.bind(this), true, this.resizeEventScrollType);
        this.directionFunction(e);
        this.lastMouse.clientX = e.clientX;
        this.lastMouse.clientY = e.clientY;
        this.zone.run(function () {
            _this.gridster.updateGrid();
        });
    };
    /**
     * @param {?} e
     * @return {?}
     */
    GridsterResizable.prototype.dragStop = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        e.stopPropagation();
        e.preventDefault();
        cancelScroll();
        this.mousemove();
        this.mouseup();
        this.mouseleave();
        this.cancelOnBlur();
        this.touchmove();
        this.touchend();
        this.touchcancel();
        this.gridster.dragInProgress = false;
        this.gridster.updateGrid();
        if (this.gridster.options.resizable && this.gridster.options.resizable.stop) {
            Promise.resolve(this.gridster.options.resizable.stop(this.gridsterItem.item, this.gridsterItem, e))
                .then(this.makeResize.bind(this), this.cancelResize.bind(this));
        }
        else {
            this.makeResize();
        }
        setTimeout(function () {
            _this.gridsterItem.renderer.removeClass(_this.gridsterItem.el, 'gridster-item-resizing');
            if (_this.gridster) {
                _this.gridster.movingItem = null;
                _this.gridster.previewStyle();
            }
        });
    };
    /**
     * @return {?}
     */
    GridsterResizable.prototype.cancelResize = /**
     * @return {?}
     */
    function () {
        this.gridsterItem.$item.cols = this.gridsterItem.item.cols || 1;
        this.gridsterItem.$item.rows = this.gridsterItem.item.rows || 1;
        this.gridsterItem.$item.x = this.gridsterItem.item.x || 0;
        this.gridsterItem.$item.y = this.gridsterItem.item.y || 0;
        this.gridsterItem.setSize();
        this.push.restoreItems();
        this.pushResize.restoreItems();
        this.push.destroy();
        delete this.push;
        this.pushResize.destroy();
        delete this.pushResize;
    };
    /**
     * @return {?}
     */
    GridsterResizable.prototype.makeResize = /**
     * @return {?}
     */
    function () {
        this.gridsterItem.setSize();
        this.gridsterItem.checkItemChanges(this.gridsterItem.$item, this.gridsterItem.item);
        this.push.setPushedItems();
        this.pushResize.setPushedItems();
        this.push.destroy();
        delete this.push;
        this.pushResize.destroy();
        delete this.pushResize;
    };
    /**
     * @param {?} e
     * @return {?}
     */
    GridsterResizable.prototype.handleN = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.top = e.clientY + this.offsetTop - this.diffTop;
        this.height = this.bottom - this.top;
        if (this.minHeight > this.height) {
            this.height = this.minHeight;
            this.top = this.bottom - this.minHeight;
        }
        this.newPosition = this.gridster.pixelsToPositionY(this.top + this.margin, Math.floor);
        if (this.gridsterItem.$item.y !== this.newPosition) {
            this.itemBackup[1] = this.gridsterItem.$item.y;
            this.itemBackup[3] = this.gridsterItem.$item.rows;
            this.gridsterItem.$item.rows += this.gridsterItem.$item.y - this.newPosition;
            this.gridsterItem.$item.y = this.newPosition;
            this.pushResize.pushItems(this.pushResize.fromSouth);
            this.push.pushItems(this.push.fromSouth, this.gridster.$options.disablePushOnResize);
            if (this.gridster.checkCollision(this.gridsterItem.$item)) {
                this.gridsterItem.$item.y = this.itemBackup[1];
                this.gridsterItem.$item.rows = this.itemBackup[3];
                this.setItemTop(this.gridster.positionYToPixels(this.gridsterItem.$item.y));
                this.setItemHeight(this.gridster.positionYToPixels(this.gridsterItem.$item.rows) - this.margin);
                return;
            }
            else {
                this.gridster.previewStyle();
            }
            this.pushResize.checkPushBack();
            this.push.checkPushBack();
        }
        this.setItemTop(this.top);
        this.setItemHeight(this.height);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    GridsterResizable.prototype.handleW = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.left = e.clientX + this.offsetLeft - this.diffLeft;
        this.width = this.right - this.left;
        if (this.minWidth > this.width) {
            this.width = this.minWidth;
            this.left = this.right - this.minWidth;
        }
        this.newPosition = this.gridster.pixelsToPositionX(this.left + this.margin, Math.floor);
        if (this.gridsterItem.$item.x !== this.newPosition) {
            this.itemBackup[0] = this.gridsterItem.$item.x;
            this.itemBackup[2] = this.gridsterItem.$item.cols;
            this.gridsterItem.$item.cols += this.gridsterItem.$item.x - this.newPosition;
            this.gridsterItem.$item.x = this.newPosition;
            this.pushResize.pushItems(this.pushResize.fromEast);
            this.push.pushItems(this.push.fromEast, this.gridster.$options.disablePushOnResize);
            if (this.gridster.checkCollision(this.gridsterItem.$item)) {
                this.gridsterItem.$item.x = this.itemBackup[0];
                this.gridsterItem.$item.cols = this.itemBackup[2];
                this.setItemLeft(this.gridster.positionXToPixels(this.gridsterItem.$item.x));
                this.setItemWidth(this.gridster.positionXToPixels(this.gridsterItem.$item.cols) - this.margin);
                return;
            }
            else {
                this.gridster.previewStyle();
            }
            this.pushResize.checkPushBack();
            this.push.checkPushBack();
        }
        this.setItemLeft(this.left);
        this.setItemWidth(this.width);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    GridsterResizable.prototype.handleS = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.height = e.clientY + this.offsetTop - this.diffBottom - this.top;
        if (this.minHeight > this.height) {
            this.height = this.minHeight;
        }
        this.bottom = this.top + this.height;
        this.newPosition = this.gridster.pixelsToPositionY(this.bottom, Math.ceil);
        if ((this.gridsterItem.$item.y + this.gridsterItem.$item.rows) !== this.newPosition) {
            this.itemBackup[3] = this.gridsterItem.$item.rows;
            this.gridsterItem.$item.rows = this.newPosition - this.gridsterItem.$item.y;
            this.pushResize.pushItems(this.pushResize.fromNorth);
            this.push.pushItems(this.push.fromNorth, this.gridster.$options.disablePushOnResize);
            if (this.gridster.checkCollision(this.gridsterItem.$item)) {
                this.gridsterItem.$item.rows = this.itemBackup[3];
                this.setItemHeight(this.gridster.positionYToPixels(this.gridsterItem.$item.rows) - this.margin);
                return;
            }
            else {
                this.gridster.previewStyle();
            }
            this.pushResize.checkPushBack();
            this.push.checkPushBack();
        }
        this.setItemHeight(this.height);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    GridsterResizable.prototype.handleE = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.width = e.clientX + this.offsetLeft - this.diffRight - this.left;
        if (this.minWidth > this.width) {
            this.width = this.minWidth;
        }
        this.right = this.left + this.width;
        this.newPosition = this.gridster.pixelsToPositionX(this.right, Math.ceil);
        if ((this.gridsterItem.$item.x + this.gridsterItem.$item.cols) !== this.newPosition) {
            this.itemBackup[2] = this.gridsterItem.$item.cols;
            this.gridsterItem.$item.cols = this.newPosition - this.gridsterItem.$item.x;
            this.pushResize.pushItems(this.pushResize.fromWest);
            this.push.pushItems(this.push.fromWest, this.gridster.$options.disablePushOnResize);
            if (this.gridster.checkCollision(this.gridsterItem.$item)) {
                this.gridsterItem.$item.cols = this.itemBackup[2];
                this.setItemWidth(this.gridster.positionXToPixels(this.gridsterItem.$item.cols) - this.margin);
                return;
            }
            else {
                this.gridster.previewStyle();
            }
            this.pushResize.checkPushBack();
            this.push.checkPushBack();
        }
        this.setItemWidth(this.width);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    GridsterResizable.prototype.handleNW = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.handleN(e);
        this.handleW(e);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    GridsterResizable.prototype.handleNE = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.handleN(e);
        this.handleE(e);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    GridsterResizable.prototype.handleSW = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.handleS(e);
        this.handleW(e);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    GridsterResizable.prototype.handleSE = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.handleS(e);
        this.handleE(e);
    };
    /**
     * @return {?}
     */
    GridsterResizable.prototype.toggle = /**
     * @return {?}
     */
    function () {
        this.resizeEnabled = this.gridsterItem.canBeResized();
    };
    /**
     * @param {?} e
     * @return {?}
     */
    GridsterResizable.prototype.dragStartDelay = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        GridsterUtils.checkTouchEvent(e);
        if (!this.gridster.$options.resizable.delayStart) {
            this.dragStart(e);
            return;
        }
        /** @type {?} */
        var timeout = setTimeout(function () {
            _this.dragStart(e);
            cancelDrag();
        }, this.gridster.$options.resizable.delayStart);
        /** @type {?} */
        var cancelMouse = this.gridsterItem.renderer.listen('document', 'mouseup', cancelDrag);
        /** @type {?} */
        var cancelMouseLeave = this.gridsterItem.renderer.listen('document', 'mouseleave', cancelDrag);
        /** @type {?} */
        var cancelOnBlur = this.gridsterItem.renderer.listen('window', 'blur', cancelDrag);
        /** @type {?} */
        var cancelTouchMove = this.gridsterItem.renderer.listen('document', 'touchmove', cancelMove);
        /** @type {?} */
        var cancelTouchEnd = this.gridsterItem.renderer.listen('document', 'touchend', cancelDrag);
        /** @type {?} */
        var cancelTouchCancel = this.gridsterItem.renderer.listen('document', 'touchcancel', cancelDrag);
        /**
         * @param {?} eventMove
         * @return {?}
         */
        function cancelMove(eventMove) {
            GridsterUtils.checkTouchEvent(eventMove);
            if (Math.abs(eventMove.clientX - e.clientX) > 9 || Math.abs(eventMove.clientY - e.clientY) > 9) {
                cancelDrag();
            }
        }
        /**
         * @return {?}
         */
        function cancelDrag() {
            clearTimeout(timeout);
            cancelOnBlur();
            cancelMouse();
            cancelMouseLeave();
            cancelTouchMove();
            cancelTouchEnd();
            cancelTouchCancel();
        }
    };
    /**
     * @param {?} top
     * @return {?}
     */
    GridsterResizable.prototype.setItemTop = /**
     * @param {?} top
     * @return {?}
     */
    function (top) {
        /** @type {?} */
        var transform = 'translate(' + this.left + 'px, ' + top + 'px)';
        this.gridsterItem.renderer.setStyle(this.gridsterItem.el, 'transform', transform);
    };
    /**
     * @param {?} left
     * @return {?}
     */
    GridsterResizable.prototype.setItemLeft = /**
     * @param {?} left
     * @return {?}
     */
    function (left) {
        /** @type {?} */
        var transform = 'translate(' + left + 'px, ' + this.top + 'px)';
        this.gridsterItem.renderer.setStyle(this.gridsterItem.el, 'transform', transform);
    };
    /**
     * @param {?} height
     * @return {?}
     */
    GridsterResizable.prototype.setItemHeight = /**
     * @param {?} height
     * @return {?}
     */
    function (height) {
        this.gridsterItem.renderer.setStyle(this.gridsterItem.el, 'height', height + 'px');
    };
    /**
     * @param {?} width
     * @return {?}
     */
    GridsterResizable.prototype.setItemWidth = /**
     * @param {?} width
     * @return {?}
     */
    function (width) {
        this.gridsterItem.renderer.setStyle(this.gridsterItem.el, 'width', width + 'px');
    };
    GridsterResizable.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    GridsterResizable.ctorParameters = function () { return [
        { type: GridsterItemComponentInterface },
        { type: GridsterComponentInterface },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
    ]; };
    return GridsterResizable;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var GridsterItemComponent = /** @class */ (function () {
    function GridsterItemComponent(el, gridster, renderer, zone) {
        this.renderer = renderer;
        this.zone = zone;
        this.el = el.nativeElement;
        this.$item = {
            cols: -1,
            rows: -1,
            x: -1,
            y: -1,
        };
        this.gridster = gridster;
        this.drag = new GridsterDraggable(this, gridster, this.zone);
        this.resize = new GridsterResizable(this, gridster, this.zone);
    }
    /**
     * @return {?}
     */
    GridsterItemComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.updateOptions();
        this.gridster.addItem(this);
    };
    /**
     * @return {?}
     */
    GridsterItemComponent.prototype.updateOptions = /**
     * @return {?}
     */
    function () {
        this.$item = GridsterUtils.merge(this.$item, this.item, {
            cols: undefined,
            rows: undefined,
            x: undefined,
            y: undefined,
            dragEnabled: undefined,
            resizeEnabled: undefined,
            compactEnabled: undefined,
            maxItemRows: undefined,
            minItemRows: undefined,
            maxItemCols: undefined,
            minItemCols: undefined,
            maxItemArea: undefined,
            minItemArea: undefined,
        });
    };
    /**
     * @return {?}
     */
    GridsterItemComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.gridster.removeItem(this);
        delete this.gridster;
        this.drag.destroy();
        delete this.drag;
        this.resize.destroy();
        delete this.resize;
    };
    /**
     * @return {?}
     */
    GridsterItemComponent.prototype.setSize = /**
     * @return {?}
     */
    function () {
        this.renderer.setStyle(this.el, 'display', this.notPlaced ? '' : 'block');
        this.gridster.gridRenderer.updateItem(this.el, this.$item, this.renderer);
        this.updateItemSize();
    };
    /**
     * @return {?}
     */
    GridsterItemComponent.prototype.updateItemSize = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var top = this.$item.y * this.gridster.curRowHeight;
        /** @type {?} */
        var left = this.$item.x * this.gridster.curColWidth;
        /** @type {?} */
        var width = this.$item.cols * this.gridster.curColWidth - this.gridster.$options.margin;
        /** @type {?} */
        var height = this.$item.rows * this.gridster.curRowHeight - this.gridster.$options.margin;
        if (!this.init && width > 0 && height > 0) {
            this.init = true;
            if (this.item.initCallback) {
                this.item.initCallback(this.item, this);
            }
            if (this.gridster.options.itemInitCallback) {
                this.gridster.options.itemInitCallback(this.item, this);
            }
            if (this.gridster.$options.scrollToNewItems) {
                this.el.scrollIntoView(false);
            }
        }
        if (width !== this.width || height !== this.height) {
            this.width = width;
            this.height = height;
            if (this.gridster.options.itemResizeCallback) {
                this.gridster.options.itemResizeCallback(this.item, this);
            }
        }
        this.top = top;
        this.left = left;
    };
    /**
     * @return {?}
     */
    GridsterItemComponent.prototype.itemChanged = /**
     * @return {?}
     */
    function () {
        if (this.gridster.options.itemChangeCallback) {
            this.gridster.options.itemChangeCallback(this.item, this);
        }
    };
    /**
     * @param {?} newValue
     * @param {?} oldValue
     * @return {?}
     */
    GridsterItemComponent.prototype.checkItemChanges = /**
     * @param {?} newValue
     * @param {?} oldValue
     * @return {?}
     */
    function (newValue, oldValue) {
        if (newValue.rows === oldValue.rows && newValue.cols === oldValue.cols && newValue.x === oldValue.x && newValue.y === oldValue.y) {
            return;
        }
        if (this.gridster.checkCollision(this.$item)) {
            this.$item.x = oldValue.x || 0;
            this.$item.y = oldValue.y || 0;
            this.$item.cols = oldValue.cols || 1;
            this.$item.rows = oldValue.rows || 1;
            this.setSize();
        }
        else {
            this.item.cols = this.$item.cols;
            this.item.rows = this.$item.rows;
            this.item.x = this.$item.x;
            this.item.y = this.$item.y;
            this.gridster.calculateLayoutDebounce();
            this.itemChanged();
        }
    };
    /**
     * @return {?}
     */
    GridsterItemComponent.prototype.canBeDragged = /**
     * @return {?}
     */
    function () {
        return !this.gridster.mobile &&
            (this.$item.dragEnabled === undefined ? this.gridster.$options.draggable.enabled : this.$item.dragEnabled);
    };
    /**
     * @return {?}
     */
    GridsterItemComponent.prototype.canBeResized = /**
     * @return {?}
     */
    function () {
        return !this.gridster.mobile &&
            (this.$item.resizeEnabled === undefined ? this.gridster.$options.resizable.enabled : this.$item.resizeEnabled);
    };
    GridsterItemComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'gridster-item',
                    template: "<ng-content></ng-content>\n<div (mousedown)=\"resize.dragStartDelay($event)\" (touchstart)=\"resize.dragStartDelay($event)\"\n     [hidden]=\"!gridster.$options.resizable.handles.s || !resize.resizeEnabled\"\n     class=\"gridster-item-resizable-handler handle-s\"></div>\n<div (mousedown)=\"resize.dragStartDelay($event)\" (touchstart)=\"resize.dragStartDelay($event)\"\n     [hidden]=\"!gridster.$options.resizable.handles.e || !resize.resizeEnabled\"\n     class=\"gridster-item-resizable-handler handle-e\"></div>\n<div (mousedown)=\"resize.dragStartDelay($event)\" (touchstart)=\"resize.dragStartDelay($event)\"\n     [hidden]=\"!gridster.$options.resizable.handles.n || !resize.resizeEnabled\"\n     class=\"gridster-item-resizable-handler handle-n\"></div>\n<div (mousedown)=\"resize.dragStartDelay($event)\" (touchstart)=\"resize.dragStartDelay($event)\"\n     [hidden]=\"!gridster.$options.resizable.handles.w || !resize.resizeEnabled\"\n     class=\"gridster-item-resizable-handler handle-w\"></div>\n<div (mousedown)=\"resize.dragStartDelay($event)\" (touchstart)=\"resize.dragStartDelay($event)\"\n     [hidden]=\"!gridster.$options.resizable.handles.se || !resize.resizeEnabled\"\n     class=\"gridster-item-resizable-handler handle-se\"></div>\n<div (mousedown)=\"resize.dragStartDelay($event)\" (touchstart)=\"resize.dragStartDelay($event)\"\n     [hidden]=\"!gridster.$options.resizable.handles.ne || !resize.resizeEnabled\"\n     class=\"gridster-item-resizable-handler handle-ne\"></div>\n<div (mousedown)=\"resize.dragStartDelay($event)\" (touchstart)=\"resize.dragStartDelay($event)\"\n     [hidden]=\"!gridster.$options.resizable.handles.sw || !resize.resizeEnabled\"\n     class=\"gridster-item-resizable-handler handle-sw\"></div>\n<div (mousedown)=\"resize.dragStartDelay($event)\" (touchstart)=\"resize.dragStartDelay($event)\"\n     [hidden]=\"!gridster.$options.resizable.handles.nw || !resize.resizeEnabled\"\n     class=\"gridster-item-resizable-handler handle-nw\"></div>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    styles: ["gridster-item{box-sizing:border-box;z-index:1;position:absolute;overflow:hidden;transition:.3s;display:none;background:#fff;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}gridster-item.gridster-item-moving{cursor:move}gridster-item.gridster-item-moving,gridster-item.gridster-item-resizing{transition:none;z-index:2;box-shadow:0 0 5px 5px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.gridster-item-resizable-handler{position:absolute;z-index:2}.gridster-item-resizable-handler.handle-n{cursor:n-resize;height:10px;right:0;top:0;left:0}.gridster-item-resizable-handler.handle-e{cursor:e-resize;width:10px;bottom:0;right:0;top:0}.gridster-item-resizable-handler.handle-s{cursor:s-resize;height:10px;right:0;bottom:0;left:0}.gridster-item-resizable-handler.handle-w{cursor:w-resize;width:10px;left:0;top:0;bottom:0}.gridster-item-resizable-handler.handle-ne{cursor:ne-resize;width:10px;height:10px;right:0;top:0}.gridster-item-resizable-handler.handle-nw{cursor:nw-resize;width:10px;height:10px;left:0;top:0}.gridster-item-resizable-handler.handle-se{cursor:se-resize;width:0;height:0;right:0;bottom:0;border-style:solid;border-width:0 0 10px 10px;border-color:transparent}.gridster-item-resizable-handler.handle-sw{cursor:sw-resize;width:10px;height:10px;left:0;bottom:0}gridster-item:hover .gridster-item-resizable-handler.handle-se{border-color:transparent transparent #ccc}"]
                }] }
    ];
    /** @nocollapse */
    GridsterItemComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: GridsterComponent, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
    ]; };
    GridsterItemComponent.propDecorators = {
        item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return GridsterItemComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var GridsterPreviewComponent = /** @class */ (function () {
    function GridsterPreviewComponent(el, gridster, renderer) {
        this.renderer = renderer;
        this.el = el.nativeElement;
        this.gridster = gridster;
        this.gridster.previewStyle = this.previewStyle.bind(this);
    }
    /**
     * @return {?}
     */
    GridsterPreviewComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        delete this.el;
        delete this.gridster.previewStyle;
        delete this.gridster;
    };
    /**
     * @param {?=} drag
     * @return {?}
     */
    GridsterPreviewComponent.prototype.previewStyle = /**
     * @param {?=} drag
     * @return {?}
     */
    function (drag) {
        if (!this.gridster.movingItem) {
            this.renderer.setStyle(this.el, 'display', '');
        }
        else {
            if (this.gridster.compact && drag) {
                this.gridster.compact.checkCompactItem(this.gridster.movingItem);
            }
            this.renderer.setStyle(this.el, 'display', 'block');
            this.gridster.gridRenderer.updateItem(this.el, this.gridster.movingItem, this.renderer);
        }
    };
    GridsterPreviewComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'gridster-preview',
                    template: '',
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    styles: ["gridster-preview{display:none;background:rgba(0,0,0,.15)}"]
                }] }
    ];
    /** @nocollapse */
    GridsterPreviewComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: GridsterComponent, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
    ]; };
    return GridsterPreviewComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var GridsterModule = /** @class */ (function () {
    function GridsterModule() {
    }
    GridsterModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [
                        GridsterComponent,
                        GridsterItemComponent,
                        GridsterPreviewComponent
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                    ],
                    exports: [GridsterComponent, GridsterItemComponent],
                    providers: [],
                    bootstrap: []
                },] }
    ];
    return GridsterModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1ncmlkc3RlcjIuanMubWFwIiwic291cmNlcyI6WyJuZzovL2FuZ3VsYXItZ3JpZHN0ZXIyL2xpYi9ncmlkc3RlckNvbmZpZy5pbnRlcmZhY2UudHMiLCJuZzovL2FuZ3VsYXItZ3JpZHN0ZXIyL2xpYi9ncmlkc3RlckNvbmZpZy5jb25zdGFudC50cyIsIm5nOi8vYW5ndWxhci1ncmlkc3RlcjIvbGliL2dyaWRzdGVyVXRpbHMuc2VydmljZS50cyIsIm5nOi8vYW5ndWxhci1ncmlkc3RlcjIvbGliL2dyaWRzdGVyLmludGVyZmFjZS50cyIsIm5nOi8vYW5ndWxhci1ncmlkc3RlcjIvbGliL2dyaWRzdGVyRW1wdHlDZWxsLnNlcnZpY2UudHMiLCJuZzovL2FuZ3VsYXItZ3JpZHN0ZXIyL2xpYi9ncmlkc3RlckNvbXBhY3Quc2VydmljZS50cyIsIm5nOi8vYW5ndWxhci1ncmlkc3RlcjIvbGliL2dyaWRzdGVyUmVuZGVyZXIuc2VydmljZS50cyIsIm5nOi8vYW5ndWxhci1ncmlkc3RlcjIvbGliL2dyaWRzdGVyLmNvbXBvbmVudC50cyIsIm5nOi8vYW5ndWxhci1ncmlkc3RlcjIvbGliL2dyaWRzdGVySXRlbUNvbXBvbmVudC5pbnRlcmZhY2UudHMiLCJuZzovL2FuZ3VsYXItZ3JpZHN0ZXIyL2xpYi9ncmlkc3RlclN3YXAuc2VydmljZS50cyIsIm5nOi8vYW5ndWxhci1ncmlkc3RlcjIvbGliL2dyaWRzdGVyU2Nyb2xsLnNlcnZpY2UudHMiLCJuZzovL2FuZ3VsYXItZ3JpZHN0ZXIyL2xpYi9ncmlkc3RlclB1c2guc2VydmljZS50cyIsIm5nOi8vYW5ndWxhci1ncmlkc3RlcjIvbGliL2dyaWRzdGVyRHJhZ2dhYmxlLnNlcnZpY2UudHMiLCJuZzovL2FuZ3VsYXItZ3JpZHN0ZXIyL2xpYi9ncmlkc3RlclB1c2hSZXNpemUuc2VydmljZS50cyIsIm5nOi8vYW5ndWxhci1ncmlkc3RlcjIvbGliL2dyaWRzdGVyUmVzaXphYmxlLnNlcnZpY2UudHMiLCJuZzovL2FuZ3VsYXItZ3JpZHN0ZXIyL2xpYi9ncmlkc3Rlckl0ZW0uY29tcG9uZW50LnRzIiwibmc6Ly9hbmd1bGFyLWdyaWRzdGVyMi9saWIvZ3JpZHN0ZXJQcmV2aWV3LmNvbXBvbmVudC50cyIsIm5nOi8vYW5ndWxhci1ncmlkc3RlcjIvbGliL2dyaWRzdGVyLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0dyaWRzdGVySXRlbX0gZnJvbSAnLi9ncmlkc3Rlckl0ZW0uaW50ZXJmYWNlJztcbmltcG9ydCB7R3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlfSBmcm9tICcuL2dyaWRzdGVySXRlbUNvbXBvbmVudC5pbnRlcmZhY2UnO1xuaW1wb3J0IHtHcmlkc3RlckNvbXBvbmVudEludGVyZmFjZX0gZnJvbSAnLi9ncmlkc3Rlci5pbnRlcmZhY2UnO1xuXG5leHBvcnQgdHlwZSBncmlkVHlwZXMgPSAnZml0JyB8ICdzY3JvbGxWZXJ0aWNhbCcgfCAnc2Nyb2xsSG9yaXpvbnRhbCcgfCAnZml4ZWQnIHwgJ3ZlcnRpY2FsRml4ZWQnIHwgJ2hvcml6b250YWxGaXhlZCc7XG5leHBvcnQgdHlwZSBkaXNwbGF5R3JpZHMgPSAnYWx3YXlzJyB8ICdvbkRyYWcmUmVzaXplJyB8ICdub25lJztcbmV4cG9ydCB0eXBlIGNvbXBhY3RUeXBlcyA9ICdub25lJyB8ICdjb21wYWN0VXAnIHwgJ2NvbXBhY3RMZWZ0JyB8ICdjb21wYWN0VXAmTGVmdCcgfCAnY29tcGFjdExlZnQmVXAnIHwgJ2NvbXBhY3RVcCZSaWdodCc7XG5cbmV4cG9ydCBlbnVtIEdyaWRUeXBlIHtcbiAgRml0ID0gJ2ZpdCcsXG4gIFNjcm9sbFZlcnRpY2FsID0gJ3Njcm9sbFZlcnRpY2FsJyxcbiAgU2Nyb2xsSG9yaXpvbnRhbCA9ICdzY3JvbGxIb3Jpem9udGFsJyxcbiAgRml4ZWQgPSAnZml4ZWQnLFxuICBWZXJ0aWNhbEZpeGVkID0gJ3ZlcnRpY2FsRml4ZWQnLFxuICBIb3Jpem9udGFsRml4ZWQgPSAnaG9yaXpvbnRhbEZpeGVkJ1xufVxuXG5leHBvcnQgZW51bSBEaXNwbGF5R3JpZCB7XG4gIEFsd2F5cyA9ICdhbHdheXMnLFxuICBPbkRyYWdBbmRSZXNpemUgPSAnb25EcmFnJlJlc2l6ZScsXG4gIE5vbmUgPSAnbm9uZSdcbn1cblxuZXhwb3J0IGVudW0gQ29tcGFjdFR5cGUge1xuICBOb25lID0gJ25vbmUnLFxuICBDb21wYWN0VXAgPSAnY29tcGFjdFVwJyxcbiAgQ29tcGFjdExlZnQgPSAnY29tcGFjdExlZnQnLFxuICBDb21wYWN0VXBBbmRMZWZ0ID0gJ2NvbXBhY3RVcCZMZWZ0JyxcbiAgQ29tcGFjdExlZnRBbmRVcCA9ICdjb21wYWN0TGVmdCZVcCcsXG4gIENvbXBhY3RVcEFuZFJpZ2h0ID0gJ2NvbXBhY3RVcCZSaWdodCdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHcmlkc3RlckNvbmZpZyB7XG4gIGdyaWRUeXBlPzogZ3JpZFR5cGVzO1xuICBmaXhlZENvbFdpZHRoPzogbnVtYmVyO1xuICBmaXhlZFJvd0hlaWdodD86IG51bWJlcjtcbiAga2VlcEZpeGVkSGVpZ2h0SW5Nb2JpbGU/OiBib29sZWFuO1xuICBrZWVwRml4ZWRXaWR0aEluTW9iaWxlPzogYm9vbGVhbjtcbiAgc2V0R3JpZFNpemU/OiBib29sZWFuO1xuICBjb21wYWN0VHlwZT86IGNvbXBhY3RUeXBlcztcbiAgbW9iaWxlQnJlYWtwb2ludD86IG51bWJlcjtcbiAgbWluQ29scz86IG51bWJlcjtcbiAgbWF4Q29scz86IG51bWJlcjtcbiAgbWluUm93cz86IG51bWJlcjtcbiAgbWF4Um93cz86IG51bWJlcjtcbiAgZGVmYXVsdEl0ZW1Db2xzPzogbnVtYmVyO1xuICBkZWZhdWx0SXRlbVJvd3M/OiBudW1iZXI7XG4gIG1heEl0ZW1Db2xzPzogbnVtYmVyO1xuICBtYXhJdGVtUm93cz86IG51bWJlcjtcbiAgbWluSXRlbUNvbHM/OiBudW1iZXI7XG4gIG1pbkl0ZW1Sb3dzPzogbnVtYmVyO1xuICBtaW5JdGVtQXJlYT86IG51bWJlcjtcbiAgbWF4SXRlbUFyZWE/OiBudW1iZXI7XG4gIG1hcmdpbj86IG51bWJlcjtcbiAgb3V0ZXJNYXJnaW4/OiBib29sZWFuO1xuICBvdXRlck1hcmdpblRvcD86IG51bWJlciB8IG51bGw7XG4gIG91dGVyTWFyZ2luUmlnaHQ/OiBudW1iZXIgfCBudWxsO1xuICBvdXRlck1hcmdpbkJvdHRvbT86IG51bWJlciB8IG51bGw7XG4gIG91dGVyTWFyZ2luTGVmdD86IG51bWJlciB8IG51bGw7XG4gIHNjcm9sbFNlbnNpdGl2aXR5PzogbnVtYmVyIHwgbnVsbDtcbiAgc2Nyb2xsU3BlZWQ/OiBudW1iZXI7XG4gIGluaXRDYWxsYmFjaz86IChncmlkc3RlcjogR3JpZHN0ZXJDb21wb25lbnRJbnRlcmZhY2UpID0+IHZvaWQ7XG4gIGRlc3Ryb3lDYWxsYmFjaz86IChncmlkc3RlcjogR3JpZHN0ZXJDb21wb25lbnRJbnRlcmZhY2UpID0+IHZvaWQ7XG4gIGdyaWRTaXplQ2hhbmdlZENhbGxiYWNrPzogKGdyaWRzdGVyOiBHcmlkc3RlckNvbXBvbmVudEludGVyZmFjZSkgPT4gdm9pZDtcbiAgaXRlbUNoYW5nZUNhbGxiYWNrPzogKGl0ZW06IEdyaWRzdGVySXRlbSwgaXRlbUNvbXBvbmVudDogR3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlKSA9PiB2b2lkO1xuICBpdGVtUmVzaXplQ2FsbGJhY2s/OiAoaXRlbTogR3JpZHN0ZXJJdGVtLCBpdGVtQ29tcG9uZW50OiBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2UpID0+IHZvaWQ7XG4gIGl0ZW1Jbml0Q2FsbGJhY2s/OiAoaXRlbTogR3JpZHN0ZXJJdGVtLCBpdGVtQ29tcG9uZW50OiBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2UpID0+IHZvaWQ7XG4gIGl0ZW1SZW1vdmVkQ2FsbGJhY2s/OiAoaXRlbTogR3JpZHN0ZXJJdGVtLCBpdGVtQ29tcG9uZW50OiBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2UpID0+IHZvaWQ7XG4gIGl0ZW1WYWxpZGF0ZUNhbGxiYWNrPzogKGl0ZW06IEdyaWRzdGVySXRlbSkgPT4gYm9vbGVhbjtcbiAgZHJhZ2dhYmxlPzogRHJhZ2dhYmxlO1xuICByZXNpemFibGU/OiBSZXNpemFibGU7XG4gIHN3YXA/OiBib29sZWFuO1xuICBwdXNoSXRlbXM/OiBib29sZWFuO1xuICBkaXNhYmxlUHVzaE9uRHJhZz86IGJvb2xlYW47XG4gIGRpc2FibGVQdXNoT25SZXNpemU/OiBib29sZWFuO1xuICBkaXNhYmxlQXV0b1Bvc2l0aW9uT25Db25mbGljdD86IGJvb2xlYW47XG4gIHB1c2hEaXJlY3Rpb25zPzogUHVzaERpcmVjdGlvbnM7XG4gIHB1c2hSZXNpemVJdGVtcz86IGJvb2xlYW47XG4gIGRpc3BsYXlHcmlkPzogZGlzcGxheUdyaWRzO1xuICBkaXNhYmxlV2luZG93UmVzaXplPzogYm9vbGVhbjtcbiAgZGlzYWJsZVdhcm5pbmdzPzogYm9vbGVhbjtcbiAgc2Nyb2xsVG9OZXdJdGVtcz86IGJvb2xlYW47XG4gIGVuYWJsZUVtcHR5Q2VsbENsaWNrPzogYm9vbGVhbjtcbiAgZW5hYmxlRW1wdHlDZWxsQ29udGV4dE1lbnU/OiBib29sZWFuO1xuICBlbmFibGVFbXB0eUNlbGxEcm9wPzogYm9vbGVhbjtcbiAgZW5hYmxlRW1wdHlDZWxsRHJhZz86IGJvb2xlYW47XG4gIGVtcHR5Q2VsbENsaWNrQ2FsbGJhY2s/OiAoZXZlbnQ6IE1vdXNlRXZlbnQsIGl0ZW06IEdyaWRzdGVySXRlbSkgPT4gdm9pZDtcbiAgZW1wdHlDZWxsQ29udGV4dE1lbnVDYWxsYmFjaz86IChldmVudDogTW91c2VFdmVudCwgaXRlbTogR3JpZHN0ZXJJdGVtKSA9PiB2b2lkO1xuICBlbXB0eUNlbGxEcm9wQ2FsbGJhY2s/OiAoZXZlbnQ6IE1vdXNlRXZlbnQsIGl0ZW06IEdyaWRzdGVySXRlbSkgPT4gdm9pZDtcbiAgZW1wdHlDZWxsRHJhZ0NhbGxiYWNrPzogKGV2ZW50OiBNb3VzZUV2ZW50LCBpdGVtOiBHcmlkc3Rlckl0ZW0pID0+IHZvaWQ7XG4gIGVtcHR5Q2VsbERyYWdNYXhDb2xzPzogbnVtYmVyO1xuICBlbXB0eUNlbGxEcmFnTWF4Um93cz86IG51bWJlcjtcbiAgaWdub3JlTWFyZ2luSW5Sb3c/OiBib29sZWFuO1xuICBhcGk/OiB7XG4gICAgcmVzaXplPzogKCkgPT4gdm9pZCxcbiAgICBvcHRpb25zQ2hhbmdlZD86ICgpID0+IHZvaWQsXG4gICAgZ2V0TmV4dFBvc3NpYmxlUG9zaXRpb24/OiAobmV3SXRlbTogR3JpZHN0ZXJJdGVtKSA9PiBib29sZWFuLFxuICAgIGdldEZpcnN0UG9zc2libGVQb3NpdGlvbj86IChpdGVtOiBHcmlkc3Rlckl0ZW0pID0+IEdyaWRzdGVySXRlbSxcbiAgICBnZXRMYXN0UG9zc2libGVQb3NpdGlvbj86IChpdGVtOiBHcmlkc3Rlckl0ZW0pID0+IEdyaWRzdGVySXRlbSxcbiAgfTtcblxuICBbcHJvcE5hbWU6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEcmFnQmFzZSB7XG4gIGVuYWJsZWQ/OiBib29sZWFuO1xuICBzdG9wPzogKGl0ZW06IEdyaWRzdGVySXRlbSwgaXRlbUNvbXBvbmVudDogR3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlLCBldmVudDogTW91c2VFdmVudCkgPT4gUHJvbWlzZTxhbnk+IHwgdm9pZDtcbiAgc3RhcnQ/OiAoaXRlbTogR3JpZHN0ZXJJdGVtLCBpdGVtQ29tcG9uZW50OiBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2UsIGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB2b2lkO1xuICBkZWxheVN0YXJ0PzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERyYWdnYWJsZSBleHRlbmRzIERyYWdCYXNlIHtcbiAgaWdub3JlQ29udGVudENsYXNzPzogc3RyaW5nO1xuICBpZ25vcmVDb250ZW50PzogYm9vbGVhbjtcbiAgZHJhZ0hhbmRsZUNsYXNzPzogc3RyaW5nO1xuICBkcm9wT3Zlckl0ZW1zPzogYm9vbGVhbjtcbiAgZHJvcE92ZXJJdGVtc0NhbGxiYWNrPzogKHNvdXJjZTogR3JpZHN0ZXJJdGVtLCB0YXJnZXQ6IEdyaWRzdGVySXRlbSwgZ3JpZD86IEdyaWRzdGVyQ29tcG9uZW50SW50ZXJmYWNlKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlc2l6YWJsZSBleHRlbmRzIERyYWdCYXNlIHtcbiAgaGFuZGxlcz86IHtcbiAgICBzOiBib29sZWFuLFxuICAgIGU6IGJvb2xlYW4sXG4gICAgbjogYm9vbGVhbixcbiAgICB3OiBib29sZWFuLFxuICAgIHNlOiBib29sZWFuLFxuICAgIG5lOiBib29sZWFuLFxuICAgIHN3OiBib29sZWFuLFxuICAgIG53OiBib29sZWFuXG4gIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHVzaERpcmVjdGlvbnMge1xuICBub3J0aDogYm9vbGVhbjtcbiAgZWFzdDogYm9vbGVhbjtcbiAgc291dGg6IGJvb2xlYW47XG4gIHdlc3Q6IGJvb2xlYW47XG59XG4iLCJpbXBvcnQge0NvbXBhY3RUeXBlLCBEaXNwbGF5R3JpZCwgR3JpZHN0ZXJDb25maWcsIEdyaWRUeXBlfSBmcm9tICcuL2dyaWRzdGVyQ29uZmlnLmludGVyZmFjZSc7XG5cbmV4cG9ydCBjb25zdCBHcmlkc3RlckNvbmZpZ1NlcnZpY2U6IEdyaWRzdGVyQ29uZmlnID0ge1xuICBncmlkVHlwZTogR3JpZFR5cGUuRml0LCAvLyAnZml0JyB3aWxsIGZpdCB0aGUgaXRlbXMgaW4gdGhlIGNvbnRhaW5lciB3aXRob3V0IHNjcm9sbDtcbiAgLy8gJ3Njcm9sbFZlcnRpY2FsJyB3aWxsIGZpdCBvbiB3aWR0aCBhbmQgaGVpZ2h0IG9mIHRoZSBpdGVtcyB3aWxsIGJlIHRoZSBzYW1lIGFzIHRoZSB3aWR0aFxuICAvLyAnc2Nyb2xsSG9yaXpvbnRhbCcgd2lsbCBmaXQgb24gaGVpZ2h0IGFuZCB3aWR0aCBvZiB0aGUgaXRlbXMgd2lsbCBiZSB0aGUgc2FtZSBhcyB0aGUgaGVpZ2h0XG4gIC8vICdmaXhlZCcgd2lsbCBzZXQgdGhlIHJvd3MgYW5kIGNvbHVtbnMgZGltZW5zaW9ucyBiYXNlZCBvbiBmaXhlZENvbFdpZHRoIGFuZCBmaXhlZFJvd0hlaWdodCBvcHRpb25zXG4gIC8vICd2ZXJ0aWNhbEZpeGVkJyB3aWxsIHNldCB0aGUgcm93cyB0byBmaXhlZFJvd0hlaWdodCBhbmQgY29sdW1ucyB3aWR0aCB3aWxsIGZpdCB0aGUgc3BhY2UgYXZhaWxhYmxlXG4gIC8vICdob3Jpem9udGFsRml4ZWQnIHdpbGwgc2V0IHRoZSBjb2x1bW5zIHRvIGZpeGVkQ29sV2lkdGggYW5kIHJvd3MgaGVpZ2h0IHdpbGwgZml0IHRoZSBzcGFjZSBhdmFpbGFibGVcbiAgZml4ZWRDb2xXaWR0aDogMjUwLCAvLyBmaXhlZCBjb2wgd2lkdGggZm9yIGdyaWRUeXBlOiAnZml4ZWQnXG4gIGZpeGVkUm93SGVpZ2h0OiAyNTAsIC8vIGZpeGVkIHJvdyBoZWlnaHQgZm9yIGdyaWRUeXBlOiAnZml4ZWQnXG4gIGtlZXBGaXhlZEhlaWdodEluTW9iaWxlOiBmYWxzZSwgLy8ga2VlcCB0aGUgaGVpZ2h0IGZyb20gZml4ZWQgZ3JpZFR5cGUgaW4gbW9iaWxlIGxheW91dFxuICBrZWVwRml4ZWRXaWR0aEluTW9iaWxlOiBmYWxzZSwgLy8ga2VlcCB0aGUgd2lkdGggZnJvbSBmaXhlZCBncmlkVHlwZSBpbiBtb2JpbGUgbGF5b3V0XG4gIHNldEdyaWRTaXplOiBmYWxzZSwgLy8gc2V0cyBncmlkIHNpemUgZGVwZW5kaW5nIG9uIGNvbnRlbnRcbiAgY29tcGFjdFR5cGU6IENvbXBhY3RUeXBlLk5vbmUsIC8vIGNvbXBhY3QgaXRlbXM6ICdub25lJyB8ICdjb21wYWN0VXAnIHwgJ2NvbXBhY3RMZWZ0JyB8ICdjb21wYWN0VXAmTGVmdCcgfCAnY29tcGFjdExlZnQmVXAnXG4gIG1vYmlsZUJyZWFrcG9pbnQ6IDY0MCwgLy8gaWYgdGhlIHNjcmVlbiBpcyBub3Qgd2lkZXIgdGhhdCB0aGlzLCByZW1vdmUgdGhlIGdyaWQgbGF5b3V0IGFuZCBzdGFjayB0aGUgaXRlbXNcbiAgbWluQ29sczogMSwgLy8gbWluaW11bSBhbW91bnQgb2YgY29sdW1ucyBpbiB0aGUgZ3JpZFxuICBtYXhDb2xzOiAxMDAsIC8vIG1heGltdW0gYW1vdW50IG9mIGNvbHVtbnMgaW4gdGhlIGdyaWRcbiAgbWluUm93czogMSwgLy8gbWluaW11bSBhbW91bnQgb2Ygcm93cyBpbiB0aGUgZ3JpZFxuICBtYXhSb3dzOiAxMDAsIC8vIG1heGltdW0gYW1vdW50IG9mIHJvd3MgaW4gdGhlIGdyaWRcbiAgZGVmYXVsdEl0ZW1Db2xzOiAxLCAvLyBkZWZhdWx0IHdpZHRoIG9mIGFuIGl0ZW0gaW4gY29sdW1uc1xuICBkZWZhdWx0SXRlbVJvd3M6IDEsIC8vIGRlZmF1bHQgaGVpZ2h0IG9mIGFuIGl0ZW0gaW4gcm93c1xuICBtYXhJdGVtQ29sczogNTAsIC8vIG1heCBpdGVtIG51bWJlciBvZiBjb2xzXG4gIG1heEl0ZW1Sb3dzOiA1MCwgLy8gbWF4IGl0ZW0gbnVtYmVyIG9mIHJvd3NcbiAgbWluSXRlbUNvbHM6IDEsIC8vIG1pbiBpdGVtIG51bWJlciBvZiBjb2x1bW5zXG4gIG1pbkl0ZW1Sb3dzOiAxLCAvLyBtaW4gaXRlbSBudW1iZXIgb2Ygcm93c1xuICBtaW5JdGVtQXJlYTogMSwgLy8gbWluIGl0ZW0gYXJlYTogY29scyAqIHJvd3NcbiAgbWF4SXRlbUFyZWE6IDI1MDAsIC8vIG1heCBpdGVtIGFyZWE6IGNvbHMgKiByb3dzXG4gIG1hcmdpbjogMTAsICAvLyBtYXJnaW4gYmV0d2VlbiBncmlkIGl0ZW1zXG4gIG91dGVyTWFyZ2luOiB0cnVlLCAgLy8gaWYgbWFyZ2lucyB3aWxsIGFwcGx5IHRvIHRoZSBzaWRlcyBvZiB0aGUgY29udGFpbmVyXG4gIG91dGVyTWFyZ2luVG9wOiBudWxsLCAvLyBvdmVycmlkZSBvdXRlciBtYXJnaW4gZm9yIGdyaWRcbiAgb3V0ZXJNYXJnaW5SaWdodDogbnVsbCwgLy8gb3ZlcnJpZGUgb3V0ZXIgbWFyZ2luIGZvciBncmlkXG4gIG91dGVyTWFyZ2luQm90dG9tOiBudWxsLCAvLyBvdmVycmlkZSBvdXRlciBtYXJnaW4gZm9yIGdyaWRcbiAgb3V0ZXJNYXJnaW5MZWZ0OiBudWxsLCAvLyBvdmVycmlkZSBvdXRlciBtYXJnaW4gZm9yIGdyaWRcbiAgc2Nyb2xsU2Vuc2l0aXZpdHk6IDEwLCAgLy8gbWFyZ2luIG9mIHRoZSBkYXNoYm9hcmQgd2hlcmUgdG8gc3RhcnQgc2Nyb2xsaW5nXG4gIHNjcm9sbFNwZWVkOiAyMCwgIC8vIGhvdyBtdWNoIHRvIHNjcm9sbCBlYWNoIG1vdXNlIG1vdmUgd2hlbiBpbiB0aGUgc2Nyb2xsU2Vuc2l0aXZpdHkgem9uZVxuICBpbml0Q2FsbGJhY2s6IHVuZGVmaW5lZCwgLy8gY2FsbGJhY2sgdG8gY2FsbCBhZnRlciBncmlkIGhhcyBpbml0aWFsaXplZC4gQXJndW1lbnRzOiBncmlkc3RlckNvbXBvbmVudFxuICBkZXN0cm95Q2FsbGJhY2s6IHVuZGVmaW5lZCwgLy8gY2FsbGJhY2sgdG8gY2FsbCBhZnRlciBncmlkIGhhcyBkZXN0cm95ZWQuIEFyZ3VtZW50czogZ3JpZHN0ZXJDb21wb25lbnRcbiAgZ3JpZFNpemVDaGFuZ2VkQ2FsbGJhY2s6IHVuZGVmaW5lZCwgLy8gY2FsbGJhY2sgdG8gY2FsbCBhZnRlciBncmlkIGhhcyBjaGFuZ2VkIHNpemUuIEFyZ3VtZW50czogZ3JpZHN0ZXJDb21wb25lbnRcbiAgaXRlbUNoYW5nZUNhbGxiYWNrOiB1bmRlZmluZWQsICAvLyBjYWxsYmFjayB0byBjYWxsIGZvciBlYWNoIGl0ZW0gd2hlbiBpcyBjaGFuZ2VzIHgsIHksIHJvd3MsIGNvbHMuXG4gIC8vIEFyZ3VtZW50czogZ3JpZHN0ZXJJdGVtLCBncmlkc3Rlckl0ZW1Db21wb25lbnRcbiAgaXRlbVJlc2l6ZUNhbGxiYWNrOiB1bmRlZmluZWQsICAvLyBjYWxsYmFjayB0byBjYWxsIGZvciBlYWNoIGl0ZW0gd2hlbiB3aWR0aC9oZWlnaHQgY2hhbmdlcy5cbiAgLy8gQXJndW1lbnRzOiBncmlkc3Rlckl0ZW0sIGdyaWRzdGVySXRlbUNvbXBvbmVudFxuICBpdGVtSW5pdENhbGxiYWNrOiB1bmRlZmluZWQsICAvLyBjYWxsYmFjayB0byBjYWxsIGZvciBlYWNoIGl0ZW0gd2hlbiBpcyBpbml0aWFsaXplZC5cbiAgLy8gQXJndW1lbnRzOiBncmlkc3Rlckl0ZW0sIGdyaWRzdGVySXRlbUNvbXBvbmVudFxuICBpdGVtUmVtb3ZlZENhbGxiYWNrOiB1bmRlZmluZWQsICAvLyBjYWxsYmFjayB0byBjYWxsIGZvciBlYWNoIGl0ZW0gd2hlbiBpcyBpbml0aWFsaXplZC5cbiAgLy8gQXJndW1lbnRzOiBncmlkc3Rlckl0ZW0sIGdyaWRzdGVySXRlbUNvbXBvbmVudFxuICBpdGVtVmFsaWRhdGVDYWxsYmFjazogdW5kZWZpbmVkLCAgLy8gY2FsbGJhY2sgdG8gY2FsbCB0byB2YWxpZGF0ZSBpdGVtIHBvc2l0aW9uL3NpemUuIFJldHVybiB0cnVlIGlmIHZhbGlkLlxuICAvLyBBcmd1bWVudHM6IGdyaWRzdGVySXRlbVxuICBlbmFibGVFbXB0eUNlbGxDbGljazogZmFsc2UsIC8vIGVuYWJsZSBlbXB0eSBjZWxsIGNsaWNrIGV2ZW50c1xuICBlbmFibGVFbXB0eUNlbGxDb250ZXh0TWVudTogZmFsc2UsIC8vIGVuYWJsZSBlbXB0eSBjZWxsIGNvbnRleHQgbWVudSAocmlnaHQgY2xpY2spIGV2ZW50c1xuICBlbmFibGVFbXB0eUNlbGxEcm9wOiBmYWxzZSwgLy8gZW5hYmxlIGVtcHR5IGNlbGwgZHJvcCBldmVudHNcbiAgZW5hYmxlRW1wdHlDZWxsRHJhZzogZmFsc2UsIC8vIGVuYWJsZSBlbXB0eSBjZWxsIGRyYWcgZXZlbnRzXG4gIGVtcHR5Q2VsbENsaWNrQ2FsbGJhY2s6IHVuZGVmaW5lZCwgLy8gZW1wdHkgY2VsbCBjbGljayBjYWxsYmFja1xuICBlbXB0eUNlbGxDb250ZXh0TWVudUNhbGxiYWNrOiB1bmRlZmluZWQsIC8vIGVtcHR5IGNlbGwgY29udGV4dCBtZW51IChyaWdodCBjbGljaykgY2FsbGJhY2tcbiAgZW1wdHlDZWxsRHJvcENhbGxiYWNrOiB1bmRlZmluZWQsIC8vIGVtcHR5IGNlbGwgZHJhZyBkcm9wIGNhbGxiYWNrLiBIVE1MNSBEcmFnICYgRHJvcFxuICBlbXB0eUNlbGxEcmFnQ2FsbGJhY2s6IHVuZGVmaW5lZCwgLy8gZW1wdHkgY2VsbCBkcmFnIGFuZCBjcmVhdGUgaXRlbSBsaWtlIGV4Y2VsIGNlbGwgc2VsZWN0aW9uXG4gIGVtcHR5Q2VsbERyYWdNYXhDb2xzOiA1MCwgLy8gbGltaXQgZW1wdHkgY2VsbCBkcmFnIG1heCBjb2xzXG4gIGVtcHR5Q2VsbERyYWdNYXhSb3dzOiA1MCwgLy8gbGltaXQgZW1wdHkgY2VsbCBkcmFnIG1heCByb3dzXG4gIC8vIEFyZ3VtZW50czogZXZlbnQsIGdyaWRzdGVySXRlbXt4LCB5LCByb3dzOiBkZWZhdWx0SXRlbVJvd3MsIGNvbHM6IGRlZmF1bHRJdGVtQ29sc31cbiAgaWdub3JlTWFyZ2luSW5Sb3c6IGZhbHNlLCAvLyBpZ25vcmUgdGhlIGdhcCBiZXR3ZWVuIHJvd3MgZm9yIGl0ZW1zIHdoaWNoIHNwYW4gbXVsdGlwbGUgcm93cyAoc2VlICMxNjIsICMyMjQpXG4gIGRyYWdnYWJsZToge1xuICAgIGRlbGF5U3RhcnQ6IDAsIC8vIG1pbGxpc2Vjb25kcyB0byBkZWxheSB0aGUgc3RhcnQgb2YgZHJhZywgdXNlZnVsIGZvciB0b3VjaCBpbnRlcmFjdGlvblxuICAgIGVuYWJsZWQ6IGZhbHNlLCAvLyBlbmFibGUvZGlzYWJsZSBkcmFnZ2FibGUgaXRlbXNcbiAgICBpZ25vcmVDb250ZW50Q2xhc3M6ICdncmlkc3Rlci1pdGVtLWNvbnRlbnQnLCAvLyBkZWZhdWx0IGNvbnRlbnQgY2xhc3MgdG8gaWdub3JlIHRoZSBkcmFnIGV2ZW50IGZyb21cbiAgICBpZ25vcmVDb250ZW50OiBmYWxzZSwgLy8gaWYgdHJ1ZSBkcmFnIHdpbGwgc3RhcnQgb25seSBmcm9tIGVsZW1lbnRzIGZyb20gYGRyYWdIYW5kbGVDbGFzc2BcbiAgICBkcmFnSGFuZGxlQ2xhc3M6ICdkcmFnLWhhbmRsZXInLCAvLyBkcmFnIGV2ZW50IG9ubHkgZnJvbSB0aGlzIGNsYXNzLiBJZiBgaWdub3JlQ29udGVudGAgaXMgdHJ1ZS5cbiAgICBzdG9wOiB1bmRlZmluZWQsIC8vIGNhbGxiYWNrIHdoZW4gZHJhZ2dpbmcgYW4gaXRlbSBzdG9wcy4gIEFjY2VwdHMgUHJvbWlzZSByZXR1cm4gdG8gY2FuY2VsL2FwcHJvdmUgZHJhZy5cbiAgICBzdGFydDogdW5kZWZpbmVkLCAvLyBjYWxsYmFjayB3aGVuIGRyYWdnaW5nIGFuIGl0ZW0gc3RhcnRzLlxuICAgIC8vIEFyZ3VtZW50czogaXRlbSwgZ3JpZHN0ZXJJdGVtLCBldmVudFxuICAgIGRyb3BPdmVySXRlbXM6IGZhbHNlLCAvLyBlbmFibGUgZHJvcCBpdGVtcyBvbiB0b3Agb3RoZXIgaXRlbVxuICAgIGRyb3BPdmVySXRlbXNDYWxsYmFjazogdW5kZWZpbmVkIC8vIGNhbGxiYWNrIG9uIGRyb3Agb3ZlciBhbm90aGVyIGl0ZW1cbiAgICAvLyBBcmd1bWVudHM6IHNvdXJjZSwgdGFyZ2V0LCBncmlkQ29tcG9uZW50XG4gIH0sXG4gIHJlc2l6YWJsZToge1xuICAgIGRlbGF5U3RhcnQ6IDAsIC8vIG1pbGxpc2Vjb25kcyB0byBkZWxheSB0aGUgc3RhcnQgb2YgcmVzaXplLCB1c2VmdWwgZm9yIHRvdWNoIGludGVyYWN0aW9uXG4gICAgZW5hYmxlZDogZmFsc2UsIC8vIGVuYWJsZS9kaXNhYmxlIHJlc2l6YWJsZSBpdGVtc1xuICAgIGhhbmRsZXM6IHtcbiAgICAgIHM6IHRydWUsXG4gICAgICBlOiB0cnVlLFxuICAgICAgbjogdHJ1ZSxcbiAgICAgIHc6IHRydWUsXG4gICAgICBzZTogdHJ1ZSxcbiAgICAgIG5lOiB0cnVlLFxuICAgICAgc3c6IHRydWUsXG4gICAgICBudzogdHJ1ZVxuICAgIH0sIC8vIHJlc2l6YWJsZSBlZGdlcyBvZiBhbiBpdGVtXG4gICAgc3RvcDogdW5kZWZpbmVkLCAvLyBjYWxsYmFjayB3aGVuIHJlc2l6aW5nIGFuIGl0ZW0gc3RvcHMuIEFjY2VwdHMgUHJvbWlzZSByZXR1cm4gdG8gY2FuY2VsL2FwcHJvdmUgcmVzaXplLlxuICAgIHN0YXJ0OiB1bmRlZmluZWQgLy8gY2FsbGJhY2sgd2hlbiByZXNpemluZyBhbiBpdGVtIHN0YXJ0cy5cbiAgICAvLyBBcmd1bWVudHM6IGl0ZW0sIGdyaWRzdGVySXRlbSwgZXZlbnRcbiAgfSxcbiAgc3dhcDogdHJ1ZSwgLy8gYWxsb3cgaXRlbXMgdG8gc3dpdGNoIHBvc2l0aW9uIGlmIGRyb3Agb24gdG9wIG9mIGFub3RoZXJcbiAgcHVzaEl0ZW1zOiBmYWxzZSwgLy8gcHVzaCBpdGVtcyB3aGVuIHJlc2l6aW5nIGFuZCBkcmFnZ2luZ1xuICBkaXNhYmxlUHVzaE9uRHJhZzogZmFsc2UsIC8vIGRpc2FibGUgcHVzaCBvbiBkcmFnXG4gIGRpc2FibGVQdXNoT25SZXNpemU6IGZhbHNlLCAvLyBkaXNhYmxlIHB1c2ggb24gcmVzaXplXG4gIHB1c2hEaXJlY3Rpb25zOiB7bm9ydGg6IHRydWUsIGVhc3Q6IHRydWUsIHNvdXRoOiB0cnVlLCB3ZXN0OiB0cnVlfSwgLy8gY29udHJvbCB0aGUgZGlyZWN0aW9ucyBpdGVtcyBhcmUgcHVzaGVkXG4gIHB1c2hSZXNpemVJdGVtczogZmFsc2UsIC8vIG9uIHJlc2l6ZSBvZiBpdGVtIHdpbGwgc2hyaW5rIGFkamFjZW50IGl0ZW1zXG4gIGRpc3BsYXlHcmlkOiBEaXNwbGF5R3JpZC5PbkRyYWdBbmRSZXNpemUsIC8vIGRpc3BsYXkgYmFja2dyb3VuZCBncmlkIG9mIHJvd3MgYW5kIGNvbHVtbnNcbiAgZGlzYWJsZVdpbmRvd1Jlc2l6ZTogZmFsc2UsIC8vIGRpc2FibGUgdGhlIHdpbmRvdyBvbiByZXNpemUgbGlzdGVuZXIuIFRoaXMgd2lsbCBzdG9wIGdyaWQgdG8gcmVjYWxjdWxhdGUgb24gd2luZG93IHJlc2l6ZS5cbiAgZGlzYWJsZVdhcm5pbmdzOiBmYWxzZSwgLy8gZGlzYWJsZSBjb25zb2xlIGxvZyB3YXJuaW5ncyBhYm91dCBtaXNwbGFjZW1lbnQgb2YgZ3JpZCBpdGVtc1xuICBzY3JvbGxUb05ld0l0ZW1zOiBmYWxzZSwgLy8gc2Nyb2xsIHRvIG5ldyBpdGVtcyBwbGFjZWQgaW4gYSBzY3JvbGxhYmxlIHZpZXdcbiAgZGlzYWJsZUF1dG9Qb3NpdGlvbk9uQ29uZmxpY3Q6IGZhbHNlICAvLyBkaXNhYmxlIGF1dG8tcG9zaXRpb24gb2YgaXRlbXMgb24gY29uZmxpY3Qgc3RhdGVcbn07XG4iLCJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge0dyaWRzdGVyQ29tcG9uZW50SW50ZXJmYWNlfSBmcm9tICcuL2dyaWRzdGVyLmludGVyZmFjZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHcmlkc3RlclV0aWxzIHtcblxuICBzdGF0aWMgbWVyZ2Uob2JqMTogYW55LCBvYmoyOiBhbnksIHByb3BlcnRpZXM6IGFueSkge1xuICAgIGZvciAoY29uc3QgcCBpbiBvYmoyKSB7XG4gICAgICBpZiAob2JqMltwXSAhPT0gdm9pZCAwICYmIHByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkocCkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvYmoyW3BdID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIG9iajFbcF0gPSBHcmlkc3RlclV0aWxzLm1lcmdlKG9iajFbcF0sIG9iajJbcF0sIHByb3BlcnRpZXNbcF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9iajFbcF0gPSBvYmoyW3BdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajE7XG4gIH1cblxuICBzdGF0aWMgZGVib3VuY2UoZnVuYzogRnVuY3Rpb24sIHdhaXQ6IG51bWJlcik6ICgpID0+IHZvaWQge1xuICAgIGxldCB0aW1lb3V0OiBhbnk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgY29uc3QgbGF0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgfTtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGNoZWNrVG91Y2hFdmVudChlOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAoZS5jbGllbnRYID09PSB1bmRlZmluZWQgJiYgZS50b3VjaGVzKSB7XG4gICAgICBpZiAoZS50b3VjaGVzICYmIGUudG91Y2hlcy5sZW5ndGgpIHtcbiAgICAgICAgZS5jbGllbnRYID0gZS50b3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICAgIGUuY2xpZW50WSA9IGUudG91Y2hlc1swXS5jbGllbnRZO1xuICAgICAgfSBlbHNlIGlmIChlLmNoYW5nZWRUb3VjaGVzICYmIGUuY2hhbmdlZFRvdWNoZXMubGVuZ3RoKSB7XG4gICAgICAgIGUuY2xpZW50WCA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICAgICAgZS5jbGllbnRZID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBjaGVja0NvbnRlbnRDbGFzc0ZvckV2ZW50KGdyaWRzdGVyOiBHcmlkc3RlckNvbXBvbmVudEludGVyZmFjZSwgZTogYW55KTogYm9vbGVhbiB7XG4gICAgaWYgKGdyaWRzdGVyLiRvcHRpb25zLmRyYWdnYWJsZS5pZ25vcmVDb250ZW50KSB7XG4gICAgICBpZiAoIUdyaWRzdGVyVXRpbHMuY2hlY2tDb250ZW50Q2xhc3MoZS50YXJnZXQsIGUuY3VycmVudFRhcmdldCwgZ3JpZHN0ZXIuJG9wdGlvbnMuZHJhZ2dhYmxlLmRyYWdIYW5kbGVDbGFzcykpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChHcmlkc3RlclV0aWxzLmNoZWNrQ29udGVudENsYXNzKGUudGFyZ2V0LCBlLmN1cnJlbnRUYXJnZXQsIGdyaWRzdGVyLiRvcHRpb25zLmRyYWdnYWJsZS5pZ25vcmVDb250ZW50Q2xhc3MpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdGF0aWMgY2hlY2tDb250ZW50Q2xhc3NGb3JFbXB0eUNlbGxDbGlja0V2ZW50KGdyaWRzdGVyOiBHcmlkc3RlckNvbXBvbmVudEludGVyZmFjZSwgZTogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIEdyaWRzdGVyVXRpbHMuY2hlY2tDb250ZW50Q2xhc3MoZS50YXJnZXQsIGUuY3VycmVudFRhcmdldCwgZ3JpZHN0ZXIuJG9wdGlvbnMuZHJhZ2dhYmxlLmlnbm9yZUNvbnRlbnRDbGFzcylcbiAgICAgIHx8IEdyaWRzdGVyVXRpbHMuY2hlY2tDb250ZW50Q2xhc3MoZS50YXJnZXQsIGUuY3VycmVudFRhcmdldCwgZ3JpZHN0ZXIuJG9wdGlvbnMuZHJhZ2dhYmxlLmRyYWdIYW5kbGVDbGFzcyk7XG4gIH1cblxuICBzdGF0aWMgY2hlY2tDb250ZW50Q2xhc3ModGFyZ2V0OiBhbnksIGN1cnJlbnQ6IGFueSwgY29udGVudENsYXNzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRhcmdldCB8fCB0YXJnZXQgPT09IGN1cnJlbnQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHRhcmdldC5oYXNBdHRyaWJ1dGUoJ2NsYXNzJykgJiYgdGFyZ2V0LmdldEF0dHJpYnV0ZSgnY2xhc3MnKS5zcGxpdCgnICcpLmluZGV4T2YoY29udGVudENsYXNzKSA+IC0xKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIEdyaWRzdGVyVXRpbHMuY2hlY2tDb250ZW50Q2xhc3ModGFyZ2V0LnBhcmVudE5vZGUsIGN1cnJlbnQsIGNvbnRlbnRDbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGNvbXBhcmVJdGVtcyhhOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH0sIGI6IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfSk6IG51bWJlciB7XG4gICAgaWYgKGEueSA+IGIueSkge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH0gZWxzZSBpZiAoYS55IDwgYi55KSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9IGVsc2UgaWYgKGEueCA+IGIueCkge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7R3JpZHN0ZXJDb25maWdTfSBmcm9tICcuL2dyaWRzdGVyQ29uZmlnUy5pbnRlcmZhY2UnO1xuaW1wb3J0IHtDaGFuZ2VEZXRlY3RvclJlZiwgTmdab25lLCBSZW5kZXJlcjJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtHcmlkc3RlckVtcHR5Q2VsbH0gZnJvbSAnLi9ncmlkc3RlckVtcHR5Q2VsbC5zZXJ2aWNlJztcbmltcG9ydCB7R3JpZHN0ZXJDb21wYWN0fSBmcm9tICcuL2dyaWRzdGVyQ29tcGFjdC5zZXJ2aWNlJztcbmltcG9ydCB7R3JpZHN0ZXJDb25maWd9IGZyb20gJy4vZ3JpZHN0ZXJDb25maWcuaW50ZXJmYWNlJztcbmltcG9ydCB7R3JpZHN0ZXJJdGVtfSBmcm9tICcuL2dyaWRzdGVySXRlbS5pbnRlcmZhY2UnO1xuaW1wb3J0IHtHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2V9IGZyb20gJy4vZ3JpZHN0ZXJJdGVtQ29tcG9uZW50LmludGVyZmFjZSc7XG5pbXBvcnQge0dyaWRzdGVyUmVuZGVyZXJ9IGZyb20gJy4vZ3JpZHN0ZXJSZW5kZXJlci5zZXJ2aWNlJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEdyaWRzdGVyQ29tcG9uZW50SW50ZXJmYWNlIHtcbiAgJG9wdGlvbnM6IEdyaWRzdGVyQ29uZmlnUztcbiAgZ3JpZDogQXJyYXk8R3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlPjtcbiAgY2hlY2tDb2xsaXNpb246IChpdGVtOiBHcmlkc3Rlckl0ZW0pID0+IEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZSB8IGJvb2xlYW47XG4gIHBvc2l0aW9uWFRvUGl4ZWxzOiAoeDogbnVtYmVyKSA9PiBudW1iZXI7XG4gIHBpeGVsc1RvUG9zaXRpb25YOiAoeDogbnVtYmVyLCByb3VuZGluZ01ldGhvZDogKHg6IG51bWJlcikgPT4gbnVtYmVyLCBub0xpbWl0PzogYm9vbGVhbikgPT4gbnVtYmVyO1xuICBwb3NpdGlvbllUb1BpeGVsczogKHk6IG51bWJlcikgPT4gbnVtYmVyO1xuICBwaXhlbHNUb1Bvc2l0aW9uWTogKHk6IG51bWJlciwgcm91bmRpbmdNZXRob2Q6ICh4OiBudW1iZXIpID0+IG51bWJlciwgbm9MaW1pdD86IGJvb2xlYW4pID0+IG51bWJlcjtcbiAgZmluZEl0ZW1XaXRoSXRlbTogKGl0ZW06IEdyaWRzdGVySXRlbSkgPT4gR3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlIHwgYm9vbGVhbjtcbiAgZmluZEl0ZW1zV2l0aEl0ZW06IChpdGVtOiBHcmlkc3Rlckl0ZW0pID0+IEFycmF5PEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZT47XG4gIGNoZWNrR3JpZENvbGxpc2lvbjogKGl0ZW06IEdyaWRzdGVySXRlbSkgPT4gYm9vbGVhbjtcbiAgZWw6IGFueTtcbiAgcmVuZGVyZXI6IFJlbmRlcmVyMjtcbiAgZ3JpZFJlbmRlcmVyOiBHcmlkc3RlclJlbmRlcmVyO1xuICBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWY7XG4gIG9wdGlvbnM6IEdyaWRzdGVyQ29uZmlnO1xuICBjYWxjdWxhdGVMYXlvdXREZWJvdW5jZTogKCkgPT4gdm9pZDtcbiAgdXBkYXRlR3JpZDogKCkgPT4gdm9pZDtcbiAgbW92aW5nSXRlbTogR3JpZHN0ZXJJdGVtIHwgbnVsbDtcbiAgYWRkSXRlbTogKGl0ZW06IEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZSkgPT4gdm9pZDtcbiAgcmVtb3ZlSXRlbTogKGl0ZW06IEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZSkgPT4gdm9pZDtcbiAgcHJldmlld1N0eWxlOiAoZHJhZz86IGJvb2xlYW4pID0+IHZvaWQ7XG4gIG1vYmlsZTogYm9vbGVhbjtcbiAgY3VyV2lkdGg6IG51bWJlcjtcbiAgY3VySGVpZ2h0OiBudW1iZXI7XG4gIGNvbHVtbnM6IG51bWJlcjtcbiAgcm93czogbnVtYmVyO1xuICBjdXJDb2xXaWR0aDogbnVtYmVyO1xuICBjdXJSb3dIZWlnaHQ6IG51bWJlcjtcbiAgd2luZG93UmVzaXplOiAoKCkgPT4gdm9pZCkgfCBudWxsO1xuICBzZXRHcmlkRGltZW5zaW9uczogKCgpID0+IHZvaWQpO1xuICBkcmFnSW5Qcm9ncmVzczogYm9vbGVhbjtcbiAgZW1wdHlDZWxsOiBHcmlkc3RlckVtcHR5Q2VsbDtcbiAgY29tcGFjdDogR3JpZHN0ZXJDb21wYWN0O1xuICB6b25lOiBOZ1pvbmU7XG4gIGdyaWRSb3dzOiBBcnJheTxudW1iZXI+O1xuICBncmlkQ29sdW1uczogQXJyYXk8bnVtYmVyPjtcbn1cbiIsImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7R3JpZHN0ZXJVdGlsc30gZnJvbSAnLi9ncmlkc3RlclV0aWxzLnNlcnZpY2UnO1xuaW1wb3J0IHtHcmlkc3Rlckl0ZW19IGZyb20gJy4vZ3JpZHN0ZXJJdGVtLmludGVyZmFjZSc7XG5pbXBvcnQge0dyaWRzdGVyQ29tcG9uZW50SW50ZXJmYWNlfSBmcm9tICcuL2dyaWRzdGVyLmludGVyZmFjZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHcmlkc3RlckVtcHR5Q2VsbCB7XG4gIGluaXRpYWxJdGVtOiBHcmlkc3Rlckl0ZW0gfCBudWxsO1xuICBlbXB0eUNlbGxDbGljazogRnVuY3Rpb24gfCBudWxsO1xuICBlbXB0eUNlbGxDbGlja1RvdWNoOiBGdW5jdGlvbiB8IG51bGw7XG4gIGVtcHR5Q2VsbENvbnRleHRNZW51OiBGdW5jdGlvbiB8IG51bGw7XG4gIGVtcHR5Q2VsbERyb3A6IEZ1bmN0aW9uIHwgbnVsbDtcbiAgZW1wdHlDZWxsRHJhZzogRnVuY3Rpb24gfCBudWxsO1xuICBlbXB0eUNlbGxEcmFnVG91Y2g6IEZ1bmN0aW9uIHwgbnVsbDtcbiAgZW1wdHlDZWxsTU1vdmU6IEZ1bmN0aW9uO1xuICBlbXB0eUNlbGxNTW92ZVRvdWNoOiBGdW5jdGlvbjtcbiAgZW1wdHlDZWxsVXA6IEZ1bmN0aW9uO1xuICBlbXB0eUNlbGxVcFRvdWNoOiBGdW5jdGlvbjtcbiAgZW1wdHlDZWxsTW92ZTogRnVuY3Rpb24gfCBudWxsO1xuICBlbXB0eUNlbGxFeGl0OiBGdW5jdGlvbiB8IG51bGw7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBncmlkc3RlcjogR3JpZHN0ZXJDb21wb25lbnRJbnRlcmZhY2UpIHtcbiAgfVxuXG4gIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgZGVsZXRlIHRoaXMuaW5pdGlhbEl0ZW07XG4gICAgZGVsZXRlIHRoaXMuZ3JpZHN0ZXIubW92aW5nSXRlbTtcbiAgICBpZiAodGhpcy5ncmlkc3Rlci5wcmV2aWV3U3R5bGUpIHtcbiAgICAgIHRoaXMuZ3JpZHN0ZXIucHJldmlld1N0eWxlKCk7XG4gICAgfVxuICAgIGRlbGV0ZSB0aGlzLmdyaWRzdGVyO1xuICAgIGlmICh0aGlzLmVtcHR5Q2VsbEV4aXQpIHtcbiAgICAgIHRoaXMuZW1wdHlDZWxsRXhpdCgpO1xuICAgICAgdGhpcy5lbXB0eUNlbGxFeGl0ID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVPcHRpb25zKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmdyaWRzdGVyLiRvcHRpb25zLmVuYWJsZUVtcHR5Q2VsbENsaWNrICYmICF0aGlzLmVtcHR5Q2VsbENsaWNrICYmIHRoaXMuZ3JpZHN0ZXIub3B0aW9ucy5lbXB0eUNlbGxDbGlja0NhbGxiYWNrKSB7XG4gICAgICB0aGlzLmVtcHR5Q2VsbENsaWNrID0gdGhpcy5ncmlkc3Rlci5yZW5kZXJlci5saXN0ZW4odGhpcy5ncmlkc3Rlci5lbCwgJ2NsaWNrJywgdGhpcy5lbXB0eUNlbGxDbGlja0NiLmJpbmQodGhpcykpO1xuICAgICAgdGhpcy5lbXB0eUNlbGxDbGlja1RvdWNoID0gdGhpcy5ncmlkc3Rlci5yZW5kZXJlci5saXN0ZW4odGhpcy5ncmlkc3Rlci5lbCwgJ3RvdWNoZW5kJywgdGhpcy5lbXB0eUNlbGxDbGlja0NiLmJpbmQodGhpcykpO1xuICAgIH0gZWxzZSBpZiAoIXRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMuZW5hYmxlRW1wdHlDZWxsQ2xpY2sgJiYgdGhpcy5lbXB0eUNlbGxDbGljayAmJiB0aGlzLmVtcHR5Q2VsbENsaWNrVG91Y2gpIHtcbiAgICAgIHRoaXMuZW1wdHlDZWxsQ2xpY2soKTtcbiAgICAgIHRoaXMuZW1wdHlDZWxsQ2xpY2tUb3VjaCgpO1xuICAgICAgdGhpcy5lbXB0eUNlbGxDbGljayA9IG51bGw7XG4gICAgICB0aGlzLmVtcHR5Q2VsbENsaWNrVG91Y2ggPSBudWxsO1xuICAgIH1cbiAgICBpZiAodGhpcy5ncmlkc3Rlci4kb3B0aW9ucy5lbmFibGVFbXB0eUNlbGxDb250ZXh0TWVudSAmJiAhdGhpcy5lbXB0eUNlbGxDb250ZXh0TWVudSAmJlxuICAgICAgdGhpcy5ncmlkc3Rlci5vcHRpb25zLmVtcHR5Q2VsbENvbnRleHRNZW51Q2FsbGJhY2spIHtcbiAgICAgIHRoaXMuZW1wdHlDZWxsQ29udGV4dE1lbnUgPSB0aGlzLmdyaWRzdGVyLnJlbmRlcmVyLmxpc3Rlbih0aGlzLmdyaWRzdGVyLmVsLCAnY29udGV4dG1lbnUnLCB0aGlzLmVtcHR5Q2VsbENvbnRleHRNZW51Q2IuYmluZCh0aGlzKSk7XG4gICAgfSBlbHNlIGlmICghdGhpcy5ncmlkc3Rlci4kb3B0aW9ucy5lbmFibGVFbXB0eUNlbGxDb250ZXh0TWVudSAmJiB0aGlzLmVtcHR5Q2VsbENvbnRleHRNZW51KSB7XG4gICAgICB0aGlzLmVtcHR5Q2VsbENvbnRleHRNZW51KCk7XG4gICAgICB0aGlzLmVtcHR5Q2VsbENvbnRleHRNZW51ID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKHRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMuZW5hYmxlRW1wdHlDZWxsRHJvcCAmJiAhdGhpcy5lbXB0eUNlbGxEcm9wICYmIHRoaXMuZ3JpZHN0ZXIub3B0aW9ucy5lbXB0eUNlbGxEcm9wQ2FsbGJhY2spIHtcbiAgICAgIHRoaXMuZW1wdHlDZWxsRHJvcCA9IHRoaXMuZ3JpZHN0ZXIucmVuZGVyZXIubGlzdGVuKHRoaXMuZ3JpZHN0ZXIuZWwsICdkcm9wJywgdGhpcy5lbXB0eUNlbGxEcmFnRHJvcC5iaW5kKHRoaXMpKTtcbiAgICAgIHRoaXMuZ3JpZHN0ZXIuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgIHRoaXMuZW1wdHlDZWxsTW92ZSA9IHRoaXMuZ3JpZHN0ZXIucmVuZGVyZXIubGlzdGVuKHRoaXMuZ3JpZHN0ZXIuZWwsICdkcmFnb3ZlcicsIHRoaXMuZW1wdHlDZWxsRHJhZ092ZXIuYmluZCh0aGlzKSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuZW1wdHlDZWxsRXhpdCA9IHRoaXMuZ3JpZHN0ZXIucmVuZGVyZXIubGlzdGVuKCdkb2N1bWVudCcsICdkcmFnZW5kJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmdyaWRzdGVyLm1vdmluZ0l0ZW0gPSBudWxsO1xuICAgICAgICB0aGlzLmdyaWRzdGVyLnByZXZpZXdTdHlsZSgpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICghdGhpcy5ncmlkc3Rlci4kb3B0aW9ucy5lbmFibGVFbXB0eUNlbGxEcm9wICYmIHRoaXMuZW1wdHlDZWxsRHJvcCAmJiB0aGlzLmVtcHR5Q2VsbE1vdmUgJiYgdGhpcy5lbXB0eUNlbGxFeGl0KSB7XG4gICAgICB0aGlzLmVtcHR5Q2VsbERyb3AoKTtcbiAgICAgIHRoaXMuZW1wdHlDZWxsTW92ZSgpO1xuICAgICAgdGhpcy5lbXB0eUNlbGxFeGl0KCk7XG4gICAgICB0aGlzLmVtcHR5Q2VsbE1vdmUgPSBudWxsO1xuICAgICAgdGhpcy5lbXB0eUNlbGxEcm9wID0gbnVsbDtcbiAgICAgIHRoaXMuZW1wdHlDZWxsRXhpdCA9IG51bGw7XG4gICAgfVxuICAgIGlmICh0aGlzLmdyaWRzdGVyLiRvcHRpb25zLmVuYWJsZUVtcHR5Q2VsbERyYWcgJiYgIXRoaXMuZW1wdHlDZWxsRHJhZyAmJiB0aGlzLmdyaWRzdGVyLm9wdGlvbnMuZW1wdHlDZWxsRHJhZ0NhbGxiYWNrKSB7XG4gICAgICB0aGlzLmVtcHR5Q2VsbERyYWcgPSB0aGlzLmdyaWRzdGVyLnJlbmRlcmVyLmxpc3Rlbih0aGlzLmdyaWRzdGVyLmVsLCAnbW91c2Vkb3duJywgdGhpcy5lbXB0eUNlbGxNb3VzZURvd24uYmluZCh0aGlzKSk7XG4gICAgICB0aGlzLmVtcHR5Q2VsbERyYWdUb3VjaCA9IHRoaXMuZ3JpZHN0ZXIucmVuZGVyZXIubGlzdGVuKHRoaXMuZ3JpZHN0ZXIuZWwsICd0b3VjaHN0YXJ0JywgdGhpcy5lbXB0eUNlbGxNb3VzZURvd24uYmluZCh0aGlzKSk7XG4gICAgfSBlbHNlIGlmICghdGhpcy5ncmlkc3Rlci4kb3B0aW9ucy5lbmFibGVFbXB0eUNlbGxEcmFnICYmIHRoaXMuZW1wdHlDZWxsRHJhZyAmJiB0aGlzLmVtcHR5Q2VsbERyYWdUb3VjaCkge1xuICAgICAgdGhpcy5lbXB0eUNlbGxEcmFnKCk7XG4gICAgICB0aGlzLmVtcHR5Q2VsbERyYWdUb3VjaCgpO1xuICAgICAgdGhpcy5lbXB0eUNlbGxEcmFnID0gbnVsbDtcbiAgICAgIHRoaXMuZW1wdHlDZWxsRHJhZ1RvdWNoID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBlbXB0eUNlbGxDbGlja0NiKGU6IGFueSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmdyaWRzdGVyLm1vdmluZ0l0ZW0gfHwgR3JpZHN0ZXJVdGlscy5jaGVja0NvbnRlbnRDbGFzc0ZvckVtcHR5Q2VsbENsaWNrRXZlbnQodGhpcy5ncmlkc3RlciwgZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaXRlbSA9IHRoaXMuZ2V0VmFsaWRJdGVtRnJvbUV2ZW50KGUpO1xuICAgIGlmICghaXRlbSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5ncmlkc3Rlci5vcHRpb25zLmVtcHR5Q2VsbENsaWNrQ2FsbGJhY2spIHtcbiAgICAgIHRoaXMuZ3JpZHN0ZXIub3B0aW9ucy5lbXB0eUNlbGxDbGlja0NhbGxiYWNrKGUsIGl0ZW0pO1xuICAgIH1cbiAgICB0aGlzLmdyaWRzdGVyLmNkUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgZW1wdHlDZWxsQ29udGV4dE1lbnVDYihlOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5ncmlkc3Rlci5tb3ZpbmdJdGVtIHx8IEdyaWRzdGVyVXRpbHMuY2hlY2tDb250ZW50Q2xhc3NGb3JFbXB0eUNlbGxDbGlja0V2ZW50KHRoaXMuZ3JpZHN0ZXIsIGUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmdldFZhbGlkSXRlbUZyb21FdmVudChlKTtcbiAgICBpZiAoIWl0ZW0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuZ3JpZHN0ZXIub3B0aW9ucy5lbXB0eUNlbGxDb250ZXh0TWVudUNhbGxiYWNrKSB7XG4gICAgICB0aGlzLmdyaWRzdGVyLm9wdGlvbnMuZW1wdHlDZWxsQ29udGV4dE1lbnVDYWxsYmFjayhlLCBpdGVtKTtcbiAgICB9XG4gICAgdGhpcy5ncmlkc3Rlci5jZFJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGVtcHR5Q2VsbERyYWdEcm9wKGU6IGFueSk6IHZvaWQge1xuICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmdldFZhbGlkSXRlbUZyb21FdmVudChlKTtcbiAgICBpZiAoIWl0ZW0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuZ3JpZHN0ZXIub3B0aW9ucy5lbXB0eUNlbGxEcm9wQ2FsbGJhY2spIHtcbiAgICAgIHRoaXMuZ3JpZHN0ZXIub3B0aW9ucy5lbXB0eUNlbGxEcm9wQ2FsbGJhY2soZSwgaXRlbSk7XG4gICAgfVxuICAgIHRoaXMuZ3JpZHN0ZXIuY2RSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBlbXB0eUNlbGxEcmFnT3ZlcihlOiBhbnkpOiB2b2lkIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCBpdGVtID0gdGhpcy5nZXRWYWxpZEl0ZW1Gcm9tRXZlbnQoZSk7XG4gICAgaWYgKGl0ZW0pIHtcbiAgICAgIGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnbW92ZSc7XG4gICAgICB0aGlzLmdyaWRzdGVyLm1vdmluZ0l0ZW0gPSBpdGVtO1xuICAgIH0gZWxzZSB7XG4gICAgICBlLmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gJ25vbmUnO1xuICAgICAgdGhpcy5ncmlkc3Rlci5tb3ZpbmdJdGVtID0gbnVsbDtcbiAgICB9XG4gICAgdGhpcy5ncmlkc3Rlci5wcmV2aWV3U3R5bGUoKTtcbiAgfVxuXG4gIGVtcHR5Q2VsbE1vdXNlRG93bihlOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAoR3JpZHN0ZXJVdGlscy5jaGVja0NvbnRlbnRDbGFzc0ZvckVtcHR5Q2VsbENsaWNrRXZlbnQodGhpcy5ncmlkc3RlciwgZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgY29uc3QgaXRlbSA9IHRoaXMuZ2V0VmFsaWRJdGVtRnJvbUV2ZW50KGUpO1xuICAgIGlmICghaXRlbSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmluaXRpYWxJdGVtID0gaXRlbTtcbiAgICB0aGlzLmdyaWRzdGVyLm1vdmluZ0l0ZW0gPSBpdGVtO1xuICAgIHRoaXMuZ3JpZHN0ZXIucHJldmlld1N0eWxlKCk7XG4gICAgdGhpcy5ncmlkc3Rlci56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHRoaXMuZW1wdHlDZWxsTU1vdmUgPSB0aGlzLmdyaWRzdGVyLnJlbmRlcmVyLmxpc3Rlbignd2luZG93JywgJ21vdXNlbW92ZScsIHRoaXMuZW1wdHlDZWxsTW91c2VNb3ZlLmJpbmQodGhpcykpO1xuICAgICAgdGhpcy5lbXB0eUNlbGxNTW92ZVRvdWNoID0gdGhpcy5ncmlkc3Rlci5yZW5kZXJlci5saXN0ZW4oJ3dpbmRvdycsICd0b3VjaG1vdmUnLCB0aGlzLmVtcHR5Q2VsbE1vdXNlTW92ZS5iaW5kKHRoaXMpKTtcbiAgICB9KTtcbiAgICB0aGlzLmVtcHR5Q2VsbFVwID0gdGhpcy5ncmlkc3Rlci5yZW5kZXJlci5saXN0ZW4oJ3dpbmRvdycsICdtb3VzZXVwJywgdGhpcy5lbXB0eUNlbGxNb3VzZVVwLmJpbmQodGhpcykpO1xuICAgIHRoaXMuZW1wdHlDZWxsVXBUb3VjaCA9IHRoaXMuZ3JpZHN0ZXIucmVuZGVyZXIubGlzdGVuKCd3aW5kb3cnLCAndG91Y2hlbmQnLCB0aGlzLmVtcHR5Q2VsbE1vdXNlVXAuYmluZCh0aGlzKSk7XG4gIH1cblxuICBlbXB0eUNlbGxNb3VzZU1vdmUoZTogYW55KTogdm9pZCB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgY29uc3QgaXRlbSA9IHRoaXMuZ2V0VmFsaWRJdGVtRnJvbUV2ZW50KGUsIHRoaXMuaW5pdGlhbEl0ZW0pO1xuICAgIGlmICghaXRlbSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZ3JpZHN0ZXIubW92aW5nSXRlbSA9IGl0ZW07XG4gICAgdGhpcy5ncmlkc3Rlci5wcmV2aWV3U3R5bGUoKTtcbiAgfVxuXG4gIGVtcHR5Q2VsbE1vdXNlVXAoZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy5lbXB0eUNlbGxNTW92ZSgpO1xuICAgIHRoaXMuZW1wdHlDZWxsTU1vdmVUb3VjaCgpO1xuICAgIHRoaXMuZW1wdHlDZWxsVXAoKTtcbiAgICB0aGlzLmVtcHR5Q2VsbFVwVG91Y2goKTtcbiAgICBjb25zdCBpdGVtID0gdGhpcy5nZXRWYWxpZEl0ZW1Gcm9tRXZlbnQoZSwgdGhpcy5pbml0aWFsSXRlbSk7XG4gICAgaWYgKGl0ZW0pIHtcbiAgICAgIHRoaXMuZ3JpZHN0ZXIubW92aW5nSXRlbSA9IGl0ZW07XG4gICAgfVxuICAgIGlmICh0aGlzLmdyaWRzdGVyLm9wdGlvbnMuZW1wdHlDZWxsRHJhZ0NhbGxiYWNrICYmIHRoaXMuZ3JpZHN0ZXIubW92aW5nSXRlbSkge1xuICAgICAgdGhpcy5ncmlkc3Rlci5vcHRpb25zLmVtcHR5Q2VsbERyYWdDYWxsYmFjayhlLCB0aGlzLmdyaWRzdGVyLm1vdmluZ0l0ZW0pO1xuICAgIH1cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuaW5pdGlhbEl0ZW0gPSBudWxsO1xuICAgICAgaWYgKHRoaXMuZ3JpZHN0ZXIpIHtcbiAgICAgICAgdGhpcy5ncmlkc3Rlci5tb3ZpbmdJdGVtID0gbnVsbDtcbiAgICAgICAgdGhpcy5ncmlkc3Rlci5wcmV2aWV3U3R5bGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmdyaWRzdGVyLmNkUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgZ2V0VmFsaWRJdGVtRnJvbUV2ZW50KGU6IGFueSwgb2xkSXRlbT86IEdyaWRzdGVySXRlbSB8IG51bGwpOiBHcmlkc3Rlckl0ZW0gfCB1bmRlZmluZWQge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIEdyaWRzdGVyVXRpbHMuY2hlY2tUb3VjaEV2ZW50KGUpO1xuICAgIGNvbnN0IHJlY3QgPSB0aGlzLmdyaWRzdGVyLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHggPSBlLmNsaWVudFggKyB0aGlzLmdyaWRzdGVyLmVsLnNjcm9sbExlZnQgLSByZWN0LmxlZnQgLSB0aGlzLmdyaWRzdGVyLiRvcHRpb25zLm1hcmdpbjtcbiAgICBjb25zdCB5ID0gZS5jbGllbnRZICsgdGhpcy5ncmlkc3Rlci5lbC5zY3JvbGxUb3AgLSByZWN0LnRvcCAtIHRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMubWFyZ2luO1xuICAgIGNvbnN0IGl0ZW06IEdyaWRzdGVySXRlbSA9IHtcbiAgICAgIHg6IHRoaXMuZ3JpZHN0ZXIucGl4ZWxzVG9Qb3NpdGlvblgoeCwgTWF0aC5mbG9vciwgdHJ1ZSksXG4gICAgICB5OiB0aGlzLmdyaWRzdGVyLnBpeGVsc1RvUG9zaXRpb25ZKHksIE1hdGguZmxvb3IsIHRydWUpLFxuICAgICAgY29sczogdGhpcy5ncmlkc3Rlci4kb3B0aW9ucy5kZWZhdWx0SXRlbUNvbHMsXG4gICAgICByb3dzOiB0aGlzLmdyaWRzdGVyLiRvcHRpb25zLmRlZmF1bHRJdGVtUm93c1xuICAgIH07XG4gICAgaWYgKG9sZEl0ZW0pIHtcbiAgICAgIGl0ZW0uY29scyA9IE1hdGgubWluKE1hdGguYWJzKG9sZEl0ZW0ueCAtIGl0ZW0ueCkgKyAxLCB0aGlzLmdyaWRzdGVyLiRvcHRpb25zLmVtcHR5Q2VsbERyYWdNYXhDb2xzKTtcbiAgICAgIGl0ZW0ucm93cyA9IE1hdGgubWluKE1hdGguYWJzKG9sZEl0ZW0ueSAtIGl0ZW0ueSkgKyAxLCB0aGlzLmdyaWRzdGVyLiRvcHRpb25zLmVtcHR5Q2VsbERyYWdNYXhSb3dzKTtcbiAgICAgIGlmIChvbGRJdGVtLnggPCBpdGVtLngpIHtcbiAgICAgICAgaXRlbS54ID0gb2xkSXRlbS54O1xuICAgICAgfSBlbHNlIGlmIChvbGRJdGVtLnggLSBpdGVtLnggPiB0aGlzLmdyaWRzdGVyLiRvcHRpb25zLmVtcHR5Q2VsbERyYWdNYXhDb2xzIC0gMSkge1xuICAgICAgICBpdGVtLnggPSB0aGlzLmdyaWRzdGVyLm1vdmluZ0l0ZW0gPyB0aGlzLmdyaWRzdGVyLm1vdmluZ0l0ZW0ueCA6IDA7XG4gICAgICB9XG4gICAgICBpZiAob2xkSXRlbS55IDwgaXRlbS55KSB7XG4gICAgICAgIGl0ZW0ueSA9IG9sZEl0ZW0ueTtcbiAgICAgIH0gZWxzZSBpZiAob2xkSXRlbS55IC0gaXRlbS55ID4gdGhpcy5ncmlkc3Rlci4kb3B0aW9ucy5lbXB0eUNlbGxEcmFnTWF4Um93cyAtIDEpIHtcbiAgICAgICAgaXRlbS55ID0gdGhpcy5ncmlkc3Rlci5tb3ZpbmdJdGVtID8gdGhpcy5ncmlkc3Rlci5tb3ZpbmdJdGVtLnkgOiAwO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5ncmlkc3Rlci5jaGVja0NvbGxpc2lvbihpdGVtKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4gaXRlbTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBHcmlkc3RlckNvbXBvbmVudEludGVyZmFjZSB9IGZyb20gJy4vZ3JpZHN0ZXIuaW50ZXJmYWNlJztcbmltcG9ydCB7IEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZSB9IGZyb20gJy4vZ3JpZHN0ZXJJdGVtQ29tcG9uZW50LmludGVyZmFjZSc7XG5pbXBvcnQgeyBHcmlkc3Rlckl0ZW0gfSBmcm9tICcuL2dyaWRzdGVySXRlbS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQ29tcGFjdFR5cGUgfSBmcm9tICcuL2dyaWRzdGVyQ29uZmlnLmludGVyZmFjZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHcmlkc3RlckNvbXBhY3Qge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZ3JpZHN0ZXI6IEdyaWRzdGVyQ29tcG9uZW50SW50ZXJmYWNlKSB7XG4gIH1cblxuICBkZXN0cm95KCk6IHZvaWQge1xuICAgIGRlbGV0ZSB0aGlzLmdyaWRzdGVyO1xuICB9XG5cbiAgY2hlY2tDb21wYWN0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmdyaWRzdGVyLiRvcHRpb25zLmNvbXBhY3RUeXBlICE9PSBDb21wYWN0VHlwZS5Ob25lKSB7XG4gICAgICBpZiAodGhpcy5ncmlkc3Rlci4kb3B0aW9ucy5jb21wYWN0VHlwZSA9PT0gQ29tcGFjdFR5cGUuQ29tcGFjdFVwKSB7XG4gICAgICAgIHRoaXMuY2hlY2tDb21wYWN0VXAoKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5ncmlkc3Rlci4kb3B0aW9ucy5jb21wYWN0VHlwZSA9PT0gQ29tcGFjdFR5cGUuQ29tcGFjdExlZnQpIHtcbiAgICAgICAgdGhpcy5jaGVja0NvbXBhY3RMZWZ0KCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMuY29tcGFjdFR5cGUgPT09IENvbXBhY3RUeXBlLkNvbXBhY3RVcEFuZExlZnQpIHtcbiAgICAgICAgdGhpcy5jaGVja0NvbXBhY3RVcCgpO1xuICAgICAgICB0aGlzLmNoZWNrQ29tcGFjdExlZnQoKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5ncmlkc3Rlci4kb3B0aW9ucy5jb21wYWN0VHlwZSA9PT0gQ29tcGFjdFR5cGUuQ29tcGFjdExlZnRBbmRVcCkge1xuICAgICAgICB0aGlzLmNoZWNrQ29tcGFjdExlZnQoKTtcbiAgICAgICAgdGhpcy5jaGVja0NvbXBhY3RVcCgpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmdyaWRzdGVyLiRvcHRpb25zLmNvbXBhY3RUeXBlID09PSBDb21wYWN0VHlwZS5Db21wYWN0VXBBbmRSaWdodCkge1xuICAgICAgICB0aGlzLmNoZWNrQ29tcGFjdFVwKCk7XG4gICAgICAgIHRoaXMuY2hlY2tDb21wYWN0UmlnaHQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjaGVja0NvbXBhY3RJdGVtKGl0ZW06IEdyaWRzdGVySXRlbSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmdyaWRzdGVyLiRvcHRpb25zLmNvbXBhY3RUeXBlICE9PSBDb21wYWN0VHlwZS5Ob25lKSB7XG4gICAgICBpZiAodGhpcy5ncmlkc3Rlci4kb3B0aW9ucy5jb21wYWN0VHlwZSA9PT0gQ29tcGFjdFR5cGUuQ29tcGFjdFVwKSB7XG4gICAgICAgIHRoaXMubW92ZVVwVGlsbENvbGxpc2lvbihpdGVtKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5ncmlkc3Rlci4kb3B0aW9ucy5jb21wYWN0VHlwZSA9PT0gQ29tcGFjdFR5cGUuQ29tcGFjdExlZnQpIHtcbiAgICAgICAgdGhpcy5tb3ZlTGVmdFRpbGxDb2xsaXNpb24oaXRlbSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMuY29tcGFjdFR5cGUgPT09IENvbXBhY3RUeXBlLkNvbXBhY3RVcEFuZExlZnQpIHtcbiAgICAgICAgdGhpcy5tb3ZlVXBUaWxsQ29sbGlzaW9uKGl0ZW0pO1xuICAgICAgICB0aGlzLm1vdmVMZWZ0VGlsbENvbGxpc2lvbihpdGVtKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5ncmlkc3Rlci4kb3B0aW9ucy5jb21wYWN0VHlwZSA9PT0gQ29tcGFjdFR5cGUuQ29tcGFjdExlZnRBbmRVcCkge1xuICAgICAgICB0aGlzLm1vdmVMZWZ0VGlsbENvbGxpc2lvbihpdGVtKTtcbiAgICAgICAgdGhpcy5tb3ZlVXBUaWxsQ29sbGlzaW9uKGl0ZW0pO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmdyaWRzdGVyLiRvcHRpb25zLmNvbXBhY3RUeXBlID09PSBDb21wYWN0VHlwZS5Db21wYWN0VXBBbmRSaWdodCkge1xuICAgICAgICB0aGlzLm1vdmVVcFRpbGxDb2xsaXNpb24oaXRlbSk7XG4gICAgICAgIHRoaXMubW92ZVJpZ2h0VGlsbENvbGxpc2lvbihpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjaGVja0NvbXBhY3RVcCgpOiB2b2lkIHtcbiAgICBsZXQgd2lkZ2V0TW92ZWRVcCA9IGZhbHNlLCB3aWRnZXQ6IEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZSwgbW92ZWQ6IGJvb2xlYW47XG4gICAgY29uc3QgbCA9IHRoaXMuZ3JpZHN0ZXIuZ3JpZC5sZW5ndGg7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgIHdpZGdldCA9IHRoaXMuZ3JpZHN0ZXIuZ3JpZFtpXTtcbiAgICAgIGlmICh3aWRnZXQuJGl0ZW0uY29tcGFjdEVuYWJsZWQgPT09IGZhbHNlKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgbW92ZWQgPSB0aGlzLm1vdmVVcFRpbGxDb2xsaXNpb24od2lkZ2V0LiRpdGVtKTtcbiAgICAgIGlmIChtb3ZlZCkge1xuICAgICAgICB3aWRnZXRNb3ZlZFVwID0gdHJ1ZTtcbiAgICAgICAgd2lkZ2V0Lml0ZW0ueSA9IHdpZGdldC4kaXRlbS55O1xuICAgICAgICB3aWRnZXQuaXRlbUNoYW5nZWQoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHdpZGdldE1vdmVkVXApIHtcbiAgICAgIHRoaXMuY2hlY2tDb21wYWN0KCk7XG4gICAgfVxuICB9XG5cbiAgbW92ZVVwVGlsbENvbGxpc2lvbihpdGVtOiBHcmlkc3Rlckl0ZW0pOiBib29sZWFuIHtcbiAgICBpdGVtLnkgLT0gMTtcbiAgICBpZiAodGhpcy5ncmlkc3Rlci5jaGVja0NvbGxpc2lvbihpdGVtKSkge1xuICAgICAgaXRlbS55ICs9IDE7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubW92ZVVwVGlsbENvbGxpc2lvbihpdGVtKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGNoZWNrQ29tcGFjdExlZnQoKTogdm9pZCB7XG4gICAgbGV0IHdpZGdldE1vdmVkVXAgPSBmYWxzZSwgd2lkZ2V0OiBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2UsIG1vdmVkOiBib29sZWFuO1xuICAgIGNvbnN0IGwgPSB0aGlzLmdyaWRzdGVyLmdyaWQubGVuZ3RoO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICB3aWRnZXQgPSB0aGlzLmdyaWRzdGVyLmdyaWRbaV07XG4gICAgICBpZiAod2lkZ2V0LiRpdGVtLmNvbXBhY3RFbmFibGVkID09PSBmYWxzZSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIG1vdmVkID0gdGhpcy5tb3ZlTGVmdFRpbGxDb2xsaXNpb24od2lkZ2V0LiRpdGVtKTtcbiAgICAgIGlmIChtb3ZlZCkge1xuICAgICAgICB3aWRnZXRNb3ZlZFVwID0gdHJ1ZTtcbiAgICAgICAgd2lkZ2V0Lml0ZW0ueCA9IHdpZGdldC4kaXRlbS54O1xuICAgICAgICB3aWRnZXQuaXRlbUNoYW5nZWQoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHdpZGdldE1vdmVkVXApIHtcbiAgICAgIHRoaXMuY2hlY2tDb21wYWN0KCk7XG4gICAgfVxuICB9XG5cbiAgY2hlY2tDb21wYWN0UmlnaHQoKTogdm9pZCB7XG4gICAgbGV0IHdpZGdldE1vdmVkVXAgPSBmYWxzZSwgd2lkZ2V0OiBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2UsIG1vdmVkOiBib29sZWFuO1xuICAgIHZhciBsID0gdGhpcy5ncmlkc3Rlci5ncmlkLmxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgd2lkZ2V0ID0gdGhpcy5ncmlkc3Rlci5ncmlkW2ldO1xuICAgICAgaWYgKHdpZGdldC4kaXRlbS5jb21wYWN0RW5hYmxlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBtb3ZlZCA9IHRoaXMubW92ZVJpZ2h0VGlsbENvbGxpc2lvbih3aWRnZXQuJGl0ZW0pO1xuICAgICAgaWYgKG1vdmVkKSB7XG4gICAgICAgIHdpZGdldE1vdmVkVXAgPSB0cnVlO1xuICAgICAgICB3aWRnZXQuaXRlbS54ID0gd2lkZ2V0LiRpdGVtLng7XG4gICAgICAgIHdpZGdldC5pdGVtQ2hhbmdlZCgpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAod2lkZ2V0TW92ZWRVcCkge1xuICAgICAgdGhpcy5jaGVja0NvbXBhY3QoKTtcbiAgICB9XG4gIH1cblxuICBtb3ZlTGVmdFRpbGxDb2xsaXNpb24oaXRlbTogR3JpZHN0ZXJJdGVtKTogYm9vbGVhbiB7XG4gICAgaXRlbS54IC09IDE7XG4gICAgaWYgKHRoaXMuZ3JpZHN0ZXIuY2hlY2tDb2xsaXNpb24oaXRlbSkpIHtcbiAgICAgIGl0ZW0ueCArPSAxO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1vdmVMZWZ0VGlsbENvbGxpc2lvbihpdGVtKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIG1vdmVSaWdodFRpbGxDb2xsaXNpb24gPSBmdW5jdGlvbiAoaXRlbSkge1xuICAgIGl0ZW0ueCArPSAxO1xuICAgIGlmICh0aGlzLmdyaWRzdGVyLmNoZWNrQ29sbGlzaW9uKGl0ZW0pKSB7XG4gICAgICBpdGVtLnggLT0gMTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLm1vdmVSaWdodFRpbGxDb2xsaXNpb24oaXRlbSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH07XG59XG4iLCJpbXBvcnQge0luamVjdGFibGUsIFJlbmRlcmVyMn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7R3JpZHN0ZXJDb21wb25lbnRJbnRlcmZhY2V9IGZyb20gJy4vZ3JpZHN0ZXIuaW50ZXJmYWNlJztcbmltcG9ydCB7R3JpZFR5cGV9IGZyb20gJy4vZ3JpZHN0ZXJDb25maWcuaW50ZXJmYWNlJztcbmltcG9ydCB7R3JpZHN0ZXJJdGVtfSBmcm9tICcuL2dyaWRzdGVySXRlbS5pbnRlcmZhY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR3JpZHN0ZXJSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBncmlkc3RlcjogR3JpZHN0ZXJDb21wb25lbnRJbnRlcmZhY2UpIHtcbiAgfVxuXG4gIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgZGVsZXRlIHRoaXMuZ3JpZHN0ZXI7XG4gIH1cblxuICB1cGRhdGVJdGVtKGVsOiBhbnksIGl0ZW06IEdyaWRzdGVySXRlbSwgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIGlmICh0aGlzLmdyaWRzdGVyLm1vYmlsZSkge1xuICAgICAgcmVuZGVyZXIuc2V0U3R5bGUoZWwsICd0cmFuc2Zvcm0nLCAnJyk7XG4gICAgICBpZiAodGhpcy5ncmlkc3Rlci4kb3B0aW9ucy5rZWVwRml4ZWRIZWlnaHRJbk1vYmlsZSkge1xuICAgICAgICByZW5kZXJlci5zZXRTdHlsZShlbCwgJ2hlaWdodCcsIChpdGVtLnJvd3MgKiB0aGlzLmdyaWRzdGVyLiRvcHRpb25zLmZpeGVkUm93SGVpZ2h0KSArICdweCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVuZGVyZXIuc2V0U3R5bGUoZWwsICdoZWlnaHQnLCAodGhpcy5ncmlkc3Rlci5jdXJXaWR0aCAvIDIgKiBpdGVtLnJvd3MpICsgJ3B4Jyk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5ncmlkc3Rlci4kb3B0aW9ucy5rZWVwRml4ZWRXaWR0aEluTW9iaWxlKSB7XG4gICAgICAgIHJlbmRlcmVyLnNldFN0eWxlKGVsLCAnd2lkdGgnLCB0aGlzLmdyaWRzdGVyLiRvcHRpb25zLmZpeGVkQ29sV2lkdGggKyAncHgnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlbmRlcmVyLnNldFN0eWxlKGVsLCAnd2lkdGgnLCAnJyk7XG4gICAgICB9XG5cbiAgICAgIHJlbmRlcmVyLnNldFN0eWxlKGVsLCAnbWFyZ2luLWJvdHRvbScsIHRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMubWFyZ2luICsgJ3B4Jyk7XG4gICAgICByZW5kZXJlci5zZXRTdHlsZShlbCwgJ21hcmdpbi1yaWdodCcsICcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgeCA9IE1hdGgucm91bmQodGhpcy5ncmlkc3Rlci5jdXJDb2xXaWR0aCAqIGl0ZW0ueCk7XG4gICAgICBjb25zdCB5ID0gTWF0aC5yb3VuZCh0aGlzLmdyaWRzdGVyLmN1clJvd0hlaWdodCAqIGl0ZW0ueSk7XG4gICAgICBjb25zdCB3aWR0aCA9IHRoaXMuZ3JpZHN0ZXIuY3VyQ29sV2lkdGggKiBpdGVtLmNvbHMgLSB0aGlzLmdyaWRzdGVyLiRvcHRpb25zLm1hcmdpbjtcbiAgICAgIGNvbnN0IGhlaWdodCA9ICh0aGlzLmdyaWRzdGVyLmN1clJvd0hlaWdodCAqIGl0ZW0ucm93cyAtIHRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMubWFyZ2luKTtcbiAgICAgIGNvbnN0IHRyYW5zZm9ybSA9ICd0cmFuc2xhdGUzZCgnICsgeCArICdweCwgJyArIHkgKyAncHgsIDApJztcbiAgICAgIHJlbmRlcmVyLnNldFN0eWxlKGVsLCAndHJhbnNmb3JtJywgdHJhbnNmb3JtKTtcbiAgICAgIHJlbmRlcmVyLnNldFN0eWxlKGVsLCAnd2lkdGgnLCB3aWR0aCArICdweCcpO1xuICAgICAgcmVuZGVyZXIuc2V0U3R5bGUoZWwsICdoZWlnaHQnLCBoZWlnaHQgKyAncHgnKTtcbiAgICAgIGxldCBtYXJnaW5Cb3R0b206IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICAgICAgbGV0IG1hcmdpblJpZ2h0OiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgICAgIGlmICh0aGlzLmdyaWRzdGVyLiRvcHRpb25zLm91dGVyTWFyZ2luKSB7XG4gICAgICAgIGlmICh0aGlzLmdyaWRzdGVyLnJvd3MgPT09IGl0ZW0ucm93cyArIGl0ZW0ueSkge1xuICAgICAgICAgIGlmICh0aGlzLmdyaWRzdGVyLiRvcHRpb25zLm91dGVyTWFyZ2luQm90dG9tICE9PSBudWxsKSB7XG4gICAgICAgICAgICBtYXJnaW5Cb3R0b20gPSB0aGlzLmdyaWRzdGVyLiRvcHRpb25zLm91dGVyTWFyZ2luQm90dG9tICsgJ3B4JztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWFyZ2luQm90dG9tID0gdGhpcy5ncmlkc3Rlci4kb3B0aW9ucy5tYXJnaW4gKyAncHgnO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5ncmlkc3Rlci5jb2x1bW5zID09PSBpdGVtLmNvbHMgKyBpdGVtLngpIHtcbiAgICAgICAgICBpZiAodGhpcy5ncmlkc3Rlci4kb3B0aW9ucy5vdXRlck1hcmdpbkJvdHRvbSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgbWFyZ2luUmlnaHQgPSB0aGlzLmdyaWRzdGVyLiRvcHRpb25zLm91dGVyTWFyZ2luUmlnaHQgKyAncHgnO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtYXJnaW5SaWdodCA9IHRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMubWFyZ2luICsgJ3B4JztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmVuZGVyZXIuc2V0U3R5bGUoZWwsICdtYXJnaW4tYm90dG9tJywgbWFyZ2luQm90dG9tKTtcbiAgICAgIHJlbmRlcmVyLnNldFN0eWxlKGVsLCAnbWFyZ2luLXJpZ2h0JywgbWFyZ2luUmlnaHQpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUdyaWRzdGVyKCkge1xuICAgIGxldCBhZGRDbGFzcyA9ICcnO1xuICAgIGxldCByZW1vdmVDbGFzczEgPSAnJztcbiAgICBsZXQgcmVtb3ZlQ2xhc3MyID0gJyc7XG4gICAgbGV0IHJlbW92ZUNsYXNzMyA9ICcnO1xuICAgIGlmICh0aGlzLmdyaWRzdGVyLiRvcHRpb25zLmdyaWRUeXBlID09PSBHcmlkVHlwZS5GaXQpIHtcbiAgICAgIGFkZENsYXNzID0gR3JpZFR5cGUuRml0O1xuICAgICAgcmVtb3ZlQ2xhc3MxID0gR3JpZFR5cGUuU2Nyb2xsVmVydGljYWw7XG4gICAgICByZW1vdmVDbGFzczIgPSBHcmlkVHlwZS5TY3JvbGxIb3Jpem9udGFsO1xuICAgICAgcmVtb3ZlQ2xhc3MzID0gR3JpZFR5cGUuRml4ZWQ7XG4gICAgfSBlbHNlIGlmICh0aGlzLmdyaWRzdGVyLiRvcHRpb25zLmdyaWRUeXBlID09PSBHcmlkVHlwZS5TY3JvbGxWZXJ0aWNhbCkge1xuICAgICAgdGhpcy5ncmlkc3Rlci5jdXJSb3dIZWlnaHQgPSB0aGlzLmdyaWRzdGVyLmN1ckNvbFdpZHRoO1xuICAgICAgYWRkQ2xhc3MgPSBHcmlkVHlwZS5TY3JvbGxWZXJ0aWNhbDtcbiAgICAgIHJlbW92ZUNsYXNzMSA9IEdyaWRUeXBlLkZpdDtcbiAgICAgIHJlbW92ZUNsYXNzMiA9IEdyaWRUeXBlLlNjcm9sbEhvcml6b250YWw7XG4gICAgICByZW1vdmVDbGFzczMgPSBHcmlkVHlwZS5GaXhlZDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMuZ3JpZFR5cGUgPT09IEdyaWRUeXBlLlNjcm9sbEhvcml6b250YWwpIHtcbiAgICAgIHRoaXMuZ3JpZHN0ZXIuY3VyQ29sV2lkdGggPSB0aGlzLmdyaWRzdGVyLmN1clJvd0hlaWdodDtcbiAgICAgIGFkZENsYXNzID0gR3JpZFR5cGUuU2Nyb2xsSG9yaXpvbnRhbDtcbiAgICAgIHJlbW92ZUNsYXNzMSA9IEdyaWRUeXBlLkZpdDtcbiAgICAgIHJlbW92ZUNsYXNzMiA9IEdyaWRUeXBlLlNjcm9sbFZlcnRpY2FsO1xuICAgICAgcmVtb3ZlQ2xhc3MzID0gR3JpZFR5cGUuRml4ZWQ7XG4gICAgfSBlbHNlIGlmICh0aGlzLmdyaWRzdGVyLiRvcHRpb25zLmdyaWRUeXBlID09PSBHcmlkVHlwZS5GaXhlZCkge1xuICAgICAgdGhpcy5ncmlkc3Rlci5jdXJDb2xXaWR0aCA9IHRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMuZml4ZWRDb2xXaWR0aCArXG4gICAgICAgICh0aGlzLmdyaWRzdGVyLiRvcHRpb25zLmlnbm9yZU1hcmdpbkluUm93ID8gMCA6IHRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMubWFyZ2luKTtcbiAgICAgIHRoaXMuZ3JpZHN0ZXIuY3VyUm93SGVpZ2h0ID0gdGhpcy5ncmlkc3Rlci4kb3B0aW9ucy5maXhlZFJvd0hlaWdodCArXG4gICAgICAgICh0aGlzLmdyaWRzdGVyLiRvcHRpb25zLmlnbm9yZU1hcmdpbkluUm93ID8gMCA6IHRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMubWFyZ2luKTtcbiAgICAgIGFkZENsYXNzID0gR3JpZFR5cGUuRml4ZWQ7XG4gICAgICByZW1vdmVDbGFzczEgPSBHcmlkVHlwZS5GaXQ7XG4gICAgICByZW1vdmVDbGFzczIgPSBHcmlkVHlwZS5TY3JvbGxWZXJ0aWNhbDtcbiAgICAgIHJlbW92ZUNsYXNzMyA9IEdyaWRUeXBlLlNjcm9sbEhvcml6b250YWw7XG4gICAgfSBlbHNlIGlmICh0aGlzLmdyaWRzdGVyLiRvcHRpb25zLmdyaWRUeXBlID09PSBHcmlkVHlwZS5WZXJ0aWNhbEZpeGVkKSB7XG4gICAgICB0aGlzLmdyaWRzdGVyLmN1clJvd0hlaWdodCA9IHRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMuZml4ZWRSb3dIZWlnaHQgK1xuICAgICAgICAodGhpcy5ncmlkc3Rlci4kb3B0aW9ucy5pZ25vcmVNYXJnaW5JblJvdyA/IDAgOiB0aGlzLmdyaWRzdGVyLiRvcHRpb25zLm1hcmdpbik7XG4gICAgICBhZGRDbGFzcyA9IEdyaWRUeXBlLlNjcm9sbFZlcnRpY2FsO1xuICAgICAgcmVtb3ZlQ2xhc3MxID0gR3JpZFR5cGUuRml0O1xuICAgICAgcmVtb3ZlQ2xhc3MyID0gR3JpZFR5cGUuU2Nyb2xsSG9yaXpvbnRhbDtcbiAgICAgIHJlbW92ZUNsYXNzMyA9IEdyaWRUeXBlLkZpeGVkO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ncmlkc3Rlci4kb3B0aW9ucy5ncmlkVHlwZSA9PT0gR3JpZFR5cGUuSG9yaXpvbnRhbEZpeGVkKSB7XG4gICAgICB0aGlzLmdyaWRzdGVyLmN1ckNvbFdpZHRoID0gdGhpcy5ncmlkc3Rlci4kb3B0aW9ucy5maXhlZENvbFdpZHRoICtcbiAgICAgICAgKHRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMuaWdub3JlTWFyZ2luSW5Sb3cgPyAwIDogdGhpcy5ncmlkc3Rlci4kb3B0aW9ucy5tYXJnaW4pO1xuICAgICAgYWRkQ2xhc3MgPSBHcmlkVHlwZS5TY3JvbGxIb3Jpem9udGFsO1xuICAgICAgcmVtb3ZlQ2xhc3MxID0gR3JpZFR5cGUuRml0O1xuICAgICAgcmVtb3ZlQ2xhc3MyID0gR3JpZFR5cGUuU2Nyb2xsVmVydGljYWw7XG4gICAgICByZW1vdmVDbGFzczMgPSBHcmlkVHlwZS5GaXhlZDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5ncmlkc3Rlci5tb2JpbGUpIHtcbiAgICAgIHRoaXMuZ3JpZHN0ZXIucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5ncmlkc3Rlci5lbCwgYWRkQ2xhc3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmdyaWRzdGVyLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZ3JpZHN0ZXIuZWwsIGFkZENsYXNzKTtcbiAgICB9XG4gICAgdGhpcy5ncmlkc3Rlci5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmdyaWRzdGVyLmVsLCByZW1vdmVDbGFzczEpO1xuICAgIHRoaXMuZ3JpZHN0ZXIucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5ncmlkc3Rlci5lbCwgcmVtb3ZlQ2xhc3MyKTtcbiAgICB0aGlzLmdyaWRzdGVyLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZ3JpZHN0ZXIuZWwsIHJlbW92ZUNsYXNzMyk7XG4gIH1cblxuICBnZXRHcmlkQ29sdW1uU3R5bGUoaTogbnVtYmVyKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoJyArIHRoaXMuZ3JpZHN0ZXIuY3VyQ29sV2lkdGggKiBpICsgJ3B4KScsXG4gICAgICB3aWR0aDogdGhpcy5ncmlkc3Rlci5jdXJDb2xXaWR0aCAtIHRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMubWFyZ2luICsgJ3B4JyxcbiAgICAgIGhlaWdodDogdGhpcy5ncmlkc3Rlci5ncmlkUm93cy5sZW5ndGggKiB0aGlzLmdyaWRzdGVyLmN1clJvd0hlaWdodCAtIHRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMubWFyZ2luICsgJ3B4J1xuICAgIH07XG4gIH1cblxuICBnZXRHcmlkUm93U3R5bGUoaTogbnVtYmVyKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoJyArIHRoaXMuZ3JpZHN0ZXIuY3VyUm93SGVpZ2h0ICogaSArICdweCknLFxuICAgICAgd2lkdGg6IHRoaXMuZ3JpZHN0ZXIuZ3JpZENvbHVtbnMubGVuZ3RoICogdGhpcy5ncmlkc3Rlci5jdXJDb2xXaWR0aCAtIHRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMubWFyZ2luICsgJ3B4JyxcbiAgICAgIGhlaWdodDogdGhpcy5ncmlkc3Rlci5jdXJSb3dIZWlnaHQgLSB0aGlzLmdyaWRzdGVyLiRvcHRpb25zLm1hcmdpbiArICdweCdcbiAgICB9O1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge0dyaWRzdGVyQ29uZmlnU2VydmljZX0gZnJvbSAnLi9ncmlkc3RlckNvbmZpZy5jb25zdGFudCc7XG5pbXBvcnQge0dyaWRzdGVyQ29uZmlnfSBmcm9tICcuL2dyaWRzdGVyQ29uZmlnLmludGVyZmFjZSc7XG5pbXBvcnQge0dyaWRzdGVyVXRpbHN9IGZyb20gJy4vZ3JpZHN0ZXJVdGlscy5zZXJ2aWNlJztcbmltcG9ydCB7R3JpZHN0ZXJFbXB0eUNlbGx9IGZyb20gJy4vZ3JpZHN0ZXJFbXB0eUNlbGwuc2VydmljZSc7XG5pbXBvcnQge0dyaWRzdGVyQ29tcGFjdH0gZnJvbSAnLi9ncmlkc3RlckNvbXBhY3Quc2VydmljZSc7XG5pbXBvcnQge0dyaWRzdGVyQ29uZmlnU30gZnJvbSAnLi9ncmlkc3RlckNvbmZpZ1MuaW50ZXJmYWNlJztcbmltcG9ydCB7R3JpZHN0ZXJDb21wb25lbnRJbnRlcmZhY2V9IGZyb20gJy4vZ3JpZHN0ZXIuaW50ZXJmYWNlJztcbmltcG9ydCB7R3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlfSBmcm9tICcuL2dyaWRzdGVySXRlbUNvbXBvbmVudC5pbnRlcmZhY2UnO1xuaW1wb3J0IHtHcmlkc3RlclJlbmRlcmVyfSBmcm9tICcuL2dyaWRzdGVyUmVuZGVyZXIuc2VydmljZSc7XG5pbXBvcnQge0dyaWRzdGVySXRlbX0gZnJvbSAnLi9ncmlkc3Rlckl0ZW0uaW50ZXJmYWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ3JpZHN0ZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vZ3JpZHN0ZXIuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2dyaWRzdGVyLmNzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEdyaWRzdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgR3JpZHN0ZXJDb21wb25lbnRJbnRlcmZhY2Uge1xuICBASW5wdXQoKSBvcHRpb25zOiBHcmlkc3RlckNvbmZpZztcbiAgY2FsY3VsYXRlTGF5b3V0RGVib3VuY2U6ICgpID0+IHZvaWQ7XG4gIG1vdmluZ0l0ZW06IEdyaWRzdGVySXRlbSB8IG51bGw7XG4gIHByZXZpZXdTdHlsZTogKCkgPT4gdm9pZDtcbiAgZWw6IGFueTtcbiAgJG9wdGlvbnM6IEdyaWRzdGVyQ29uZmlnUztcbiAgbW9iaWxlOiBib29sZWFuO1xuICBjdXJXaWR0aDogbnVtYmVyO1xuICBjdXJIZWlnaHQ6IG51bWJlcjtcbiAgZ3JpZDogQXJyYXk8R3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlPjtcbiAgY29sdW1uczogbnVtYmVyO1xuICByb3dzOiBudW1iZXI7XG4gIGN1ckNvbFdpZHRoOiBudW1iZXI7XG4gIGN1clJvd0hlaWdodDogbnVtYmVyO1xuICBncmlkQ29sdW1ucyA9IFtdO1xuICBncmlkUm93cyA9IFtdO1xuICB3aW5kb3dSZXNpemU6ICgoKSA9PiB2b2lkKSB8IG51bGw7XG4gIGRyYWdJblByb2dyZXNzOiBib29sZWFuO1xuICBlbXB0eUNlbGw6IEdyaWRzdGVyRW1wdHlDZWxsO1xuICBjb21wYWN0OiBHcmlkc3RlckNvbXBhY3Q7XG4gIGdyaWRSZW5kZXJlcjogR3JpZHN0ZXJSZW5kZXJlcjtcblxuICBjb25zdHJ1Y3RvcihlbDogRWxlbWVudFJlZiwgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHB1YmxpYyBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHB1YmxpYyB6b25lOiBOZ1pvbmUpIHtcbiAgICB0aGlzLmVsID0gZWwubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLiRvcHRpb25zID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShHcmlkc3RlckNvbmZpZ1NlcnZpY2UpKTtcbiAgICB0aGlzLmNhbGN1bGF0ZUxheW91dERlYm91bmNlID0gR3JpZHN0ZXJVdGlscy5kZWJvdW5jZSh0aGlzLmNhbGN1bGF0ZUxheW91dC5iaW5kKHRoaXMpLCAwKTtcbiAgICB0aGlzLm1vYmlsZSA9IGZhbHNlO1xuICAgIHRoaXMuY3VyV2lkdGggPSAwO1xuICAgIHRoaXMuY3VySGVpZ2h0ID0gMDtcbiAgICB0aGlzLmdyaWQgPSBbXTtcbiAgICB0aGlzLmN1ckNvbFdpZHRoID0gMDtcbiAgICB0aGlzLmN1clJvd0hlaWdodCA9IDA7XG4gICAgdGhpcy5kcmFnSW5Qcm9ncmVzcyA9IGZhbHNlO1xuICAgIHRoaXMuZW1wdHlDZWxsID0gbmV3IEdyaWRzdGVyRW1wdHlDZWxsKHRoaXMpO1xuICAgIHRoaXMuY29tcGFjdCA9IG5ldyBHcmlkc3RlckNvbXBhY3QodGhpcyk7XG4gICAgdGhpcy5ncmlkUmVuZGVyZXIgPSBuZXcgR3JpZHN0ZXJSZW5kZXJlcih0aGlzKTtcbiAgfVxuXG4gIHN0YXRpYyBjaGVja0NvbGxpc2lvblR3b0l0ZW1zKGl0ZW06IEdyaWRzdGVySXRlbSwgaXRlbTI6IEdyaWRzdGVySXRlbSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpdGVtLnggPCBpdGVtMi54ICsgaXRlbTIuY29sc1xuICAgICAgJiYgaXRlbS54ICsgaXRlbS5jb2xzID4gaXRlbTIueFxuICAgICAgJiYgaXRlbS55IDwgaXRlbTIueSArIGl0ZW0yLnJvd3NcbiAgICAgICYmIGl0ZW0ueSArIGl0ZW0ucm93cyA+IGl0ZW0yLnk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmluaXRDYWxsYmFjaykge1xuICAgICAgdGhpcy5vcHRpb25zLmluaXRDYWxsYmFjayh0aGlzKTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXMub3B0aW9ucykge1xuICAgICAgdGhpcy5zZXRPcHRpb25zKCk7XG4gICAgICB0aGlzLm9wdGlvbnMuYXBpID0ge1xuICAgICAgICBvcHRpb25zQ2hhbmdlZDogdGhpcy5vcHRpb25zQ2hhbmdlZC5iaW5kKHRoaXMpLFxuICAgICAgICByZXNpemU6IHRoaXMub25SZXNpemUuYmluZCh0aGlzKSxcbiAgICAgICAgZ2V0TmV4dFBvc3NpYmxlUG9zaXRpb246IHRoaXMuZ2V0TmV4dFBvc3NpYmxlUG9zaXRpb24uYmluZCh0aGlzKSxcbiAgICAgICAgZ2V0Rmlyc3RQb3NzaWJsZVBvc2l0aW9uOiB0aGlzLmdldEZpcnN0UG9zc2libGVQb3NpdGlvbi5iaW5kKHRoaXMpLFxuICAgICAgICBnZXRMYXN0UG9zc2libGVQb3NpdGlvbjogdGhpcy5nZXRMYXN0UG9zc2libGVQb3NpdGlvbi5iaW5kKHRoaXMpLFxuICAgICAgfTtcbiAgICAgIHRoaXMuY29sdW1ucyA9IHRoaXMuJG9wdGlvbnMubWluQ29scztcbiAgICAgIHRoaXMucm93cyA9IHRoaXMuJG9wdGlvbnMubWluUm93cztcbiAgICAgIHRoaXMuc2V0R3JpZFNpemUoKTtcbiAgICAgIHRoaXMuY2FsY3VsYXRlTGF5b3V0KCk7XG4gICAgfVxuICB9XG5cbiAgcmVzaXplKCk6IHZvaWQge1xuICAgIGxldCBoZWlnaHQ7XG4gICAgbGV0IHdpZHRoO1xuICAgIGlmICh0aGlzLiRvcHRpb25zLmdyaWRUeXBlID09PSAnZml0JyAmJiAhdGhpcy5tb2JpbGUpIHtcbiAgICAgIHdpZHRoID0gdGhpcy5lbC5vZmZzZXRXaWR0aDtcbiAgICAgIGhlaWdodCA9IHRoaXMuZWwub2Zmc2V0SGVpZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICB3aWR0aCA9IHRoaXMuZWwuY2xpZW50V2lkdGg7XG4gICAgICBoZWlnaHQgPSB0aGlzLmVsLmNsaWVudEhlaWdodDtcbiAgICB9XG4gICAgaWYgKCh3aWR0aCAhPT0gdGhpcy5jdXJXaWR0aCB8fCBoZWlnaHQgIT09IHRoaXMuY3VySGVpZ2h0KSAmJiB0aGlzLmNoZWNrSWZUb1Jlc2l6ZSgpKSB7XG4gICAgICB0aGlzLm9uUmVzaXplKCk7XG4gICAgfVxuICB9XG5cbiAgc2V0T3B0aW9ucygpOiB2b2lkIHtcbiAgICB0aGlzLiRvcHRpb25zID0gR3JpZHN0ZXJVdGlscy5tZXJnZSh0aGlzLiRvcHRpb25zLCB0aGlzLm9wdGlvbnMsIHRoaXMuJG9wdGlvbnMpO1xuICAgIGlmICghdGhpcy4kb3B0aW9ucy5kaXNhYmxlV2luZG93UmVzaXplICYmICF0aGlzLndpbmRvd1Jlc2l6ZSkge1xuICAgICAgdGhpcy53aW5kb3dSZXNpemUgPSB0aGlzLnJlbmRlcmVyLmxpc3Rlbignd2luZG93JywgJ3Jlc2l6ZScsIHRoaXMub25SZXNpemUuYmluZCh0aGlzKSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLiRvcHRpb25zLmRpc2FibGVXaW5kb3dSZXNpemUgJiYgdGhpcy53aW5kb3dSZXNpemUpIHtcbiAgICAgIHRoaXMud2luZG93UmVzaXplKCk7XG4gICAgICB0aGlzLndpbmRvd1Jlc2l6ZSA9IG51bGw7XG4gICAgfVxuICAgIHRoaXMuZW1wdHlDZWxsLnVwZGF0ZU9wdGlvbnMoKTtcbiAgfVxuXG4gIG9wdGlvbnNDaGFuZ2VkKCk6IHZvaWQge1xuICAgIHRoaXMuc2V0T3B0aW9ucygpO1xuICAgIGxldCB3aWRnZXRzSW5kZXg6IG51bWJlciA9IHRoaXMuZ3JpZC5sZW5ndGggLSAxLCB3aWRnZXQ6IEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZTtcbiAgICBmb3IgKDsgd2lkZ2V0c0luZGV4ID49IDA7IHdpZGdldHNJbmRleC0tKSB7XG4gICAgICB3aWRnZXQgPSB0aGlzLmdyaWRbd2lkZ2V0c0luZGV4XTtcbiAgICAgIHdpZGdldC51cGRhdGVPcHRpb25zKCk7XG4gICAgfVxuICAgIHRoaXMuY2FsY3VsYXRlTGF5b3V0KCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy53aW5kb3dSZXNpemUpIHtcbiAgICAgIHRoaXMud2luZG93UmVzaXplKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLm9wdGlvbnMuZGVzdHJveUNhbGxiYWNrKSB7XG4gICAgICB0aGlzLm9wdGlvbnMuZGVzdHJveUNhbGxiYWNrKHRoaXMpO1xuICAgIH1cbiAgICBpZiAodGhpcy5vcHRpb25zLmFwaSkge1xuICAgICAgdGhpcy5vcHRpb25zLmFwaS5yZXNpemUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLm9wdGlvbnMuYXBpLm9wdGlvbnNDaGFuZ2VkID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5vcHRpb25zLmFwaS5nZXROZXh0UG9zc2libGVQb3NpdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMub3B0aW9ucy5hcGkgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHRoaXMuZW1wdHlDZWxsLmRlc3Ryb3koKTtcbiAgICBkZWxldGUgdGhpcy5lbXB0eUNlbGw7XG4gICAgdGhpcy5jb21wYWN0LmRlc3Ryb3koKTtcbiAgICBkZWxldGUgdGhpcy5jb21wYWN0O1xuICB9XG5cbiAgb25SZXNpemUoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRHcmlkU2l6ZSgpO1xuICAgIHRoaXMuY2FsY3VsYXRlTGF5b3V0KCk7XG4gIH1cblxuICBjaGVja0lmVG9SZXNpemUoKTogYm9vbGVhbiB7XG4gICAgY29uc3QgY2xpZW50V2lkdGggPSB0aGlzLmVsLmNsaWVudFdpZHRoO1xuICAgIGNvbnN0IG9mZnNldFdpZHRoID0gdGhpcy5lbC5vZmZzZXRXaWR0aDtcbiAgICBjb25zdCBzY3JvbGxXaWR0aCA9IHRoaXMuZWwuc2Nyb2xsV2lkdGg7XG4gICAgY29uc3QgY2xpZW50SGVpZ2h0ID0gdGhpcy5lbC5jbGllbnRIZWlnaHQ7XG4gICAgY29uc3Qgb2Zmc2V0SGVpZ2h0ID0gdGhpcy5lbC5vZmZzZXRIZWlnaHQ7XG4gICAgY29uc3Qgc2Nyb2xsSGVpZ2h0ID0gdGhpcy5lbC5zY3JvbGxIZWlnaHQ7XG4gICAgY29uc3QgdmVydGljYWxTY3JvbGxQcmVzZW50ID0gY2xpZW50V2lkdGggPCBvZmZzZXRXaWR0aCAmJiBzY3JvbGxIZWlnaHQgPiBvZmZzZXRIZWlnaHRcbiAgICAgICYmIHNjcm9sbEhlaWdodCAtIG9mZnNldEhlaWdodCA8IG9mZnNldFdpZHRoIC0gY2xpZW50V2lkdGg7XG4gICAgY29uc3QgaG9yaXpvbnRhbFNjcm9sbFByZXNlbnQgPSBjbGllbnRIZWlnaHQgPCBvZmZzZXRIZWlnaHRcbiAgICAgICYmIHNjcm9sbFdpZHRoID4gb2Zmc2V0V2lkdGggJiYgc2Nyb2xsV2lkdGggLSBvZmZzZXRXaWR0aCA8IG9mZnNldEhlaWdodCAtIGNsaWVudEhlaWdodDtcbiAgICBpZiAodmVydGljYWxTY3JvbGxQcmVzZW50KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiAhaG9yaXpvbnRhbFNjcm9sbFByZXNlbnQ7XG4gIH1cblxuICBzZXRHcmlkU2l6ZSgpOiB2b2lkIHtcbiAgICBsZXQgZWwgPSB0aGlzLmVsO1xuICAgIGxldCB3aWR0aCA9IGVsLmNsaWVudFdpZHRoO1xuICAgIGxldCBoZWlnaHQgPSBlbC5jbGllbnRIZWlnaHQ7XG4gICAgaWYgKHRoaXMuJG9wdGlvbnMuc2V0R3JpZFNpemUgfHwgdGhpcy4kb3B0aW9ucy5ncmlkVHlwZSA9PT0gJ2ZpdCcgJiYgIXRoaXMubW9iaWxlKSB7XG4gICAgICB3aWR0aCA9IGVsLm9mZnNldFdpZHRoO1xuICAgICAgaGVpZ2h0ID0gZWwub2Zmc2V0SGVpZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICB3aWR0aCA9IGVsLmNsaWVudFdpZHRoO1xuICAgICAgaGVpZ2h0ID0gZWwuY2xpZW50SGVpZ2h0O1xuICAgIH1cbiAgICB0aGlzLmN1cldpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5jdXJIZWlnaHQgPSBoZWlnaHQ7XG4gIH1cblxuICBzZXRHcmlkRGltZW5zaW9ucygpOiB2b2lkIHtcbiAgICB0aGlzLnNldEdyaWRTaXplKCk7XG4gICAgaWYgKCF0aGlzLm1vYmlsZSAmJiB0aGlzLiRvcHRpb25zLm1vYmlsZUJyZWFrcG9pbnQgPiB0aGlzLmN1cldpZHRoKSB7XG4gICAgICB0aGlzLm1vYmlsZSA9ICF0aGlzLm1vYmlsZTtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbCwgJ21vYmlsZScpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5tb2JpbGUgJiYgdGhpcy4kb3B0aW9ucy5tb2JpbGVCcmVha3BvaW50IDwgdGhpcy5jdXJXaWR0aCkge1xuICAgICAgdGhpcy5tb2JpbGUgPSAhdGhpcy5tb2JpbGU7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWwsICdtb2JpbGUnKTtcbiAgICB9XG4gICAgbGV0IHJvd3MgPSB0aGlzLiRvcHRpb25zLm1pblJvd3MsIGNvbHVtbnMgPSB0aGlzLiRvcHRpb25zLm1pbkNvbHM7XG5cbiAgICBsZXQgd2lkZ2V0c0luZGV4ID0gdGhpcy5ncmlkLmxlbmd0aCAtIDEsIHdpZGdldDtcbiAgICBmb3IgKDsgd2lkZ2V0c0luZGV4ID49IDA7IHdpZGdldHNJbmRleC0tKSB7XG4gICAgICB3aWRnZXQgPSB0aGlzLmdyaWRbd2lkZ2V0c0luZGV4XTtcbiAgICAgIGlmICghd2lkZ2V0Lm5vdFBsYWNlZCkge1xuICAgICAgICByb3dzID0gTWF0aC5tYXgocm93cywgd2lkZ2V0LiRpdGVtLnkgKyB3aWRnZXQuJGl0ZW0ucm93cyk7XG4gICAgICAgIGNvbHVtbnMgPSBNYXRoLm1heChjb2x1bW5zLCB3aWRnZXQuJGl0ZW0ueCArIHdpZGdldC4kaXRlbS5jb2xzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb2x1bW5zICE9PSBjb2x1bW5zIHx8IHRoaXMucm93cyAhPT0gcm93cykge1xuICAgICAgdGhpcy5jb2x1bW5zID0gY29sdW1ucztcbiAgICAgIHRoaXMucm93cyA9IHJvd3M7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLmdyaWRTaXplQ2hhbmdlZENhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5ncmlkU2l6ZUNoYW5nZWRDYWxsYmFjayh0aGlzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjYWxjdWxhdGVMYXlvdXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29tcGFjdCkge1xuICAgICAgdGhpcy5jb21wYWN0LmNoZWNrQ29tcGFjdCgpO1xuICAgIH1cblxuICAgIHRoaXMuc2V0R3JpZERpbWVuc2lvbnMoKTtcbiAgICBpZiAodGhpcy4kb3B0aW9ucy5vdXRlck1hcmdpbikge1xuICAgICAgbGV0IG1hcmdpbldpZHRoID0gLXRoaXMuJG9wdGlvbnMubWFyZ2luO1xuICAgICAgaWYgKHRoaXMuJG9wdGlvbnMub3V0ZXJNYXJnaW5MZWZ0ICE9PSBudWxsKSB7XG4gICAgICAgIG1hcmdpbldpZHRoICs9IHRoaXMuJG9wdGlvbnMub3V0ZXJNYXJnaW5MZWZ0O1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwsICdwYWRkaW5nLWxlZnQnLCB0aGlzLiRvcHRpb25zLm91dGVyTWFyZ2luTGVmdCArICdweCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWFyZ2luV2lkdGggKz0gdGhpcy4kb3B0aW9ucy5tYXJnaW47XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbCwgJ3BhZGRpbmctbGVmdCcsIHRoaXMuJG9wdGlvbnMubWFyZ2luICsgJ3B4Jyk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy4kb3B0aW9ucy5vdXRlck1hcmdpblJpZ2h0ICE9PSBudWxsKSB7XG4gICAgICAgIG1hcmdpbldpZHRoICs9IHRoaXMuJG9wdGlvbnMub3V0ZXJNYXJnaW5SaWdodDtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLCAncGFkZGluZy1yaWdodCcsIHRoaXMuJG9wdGlvbnMub3V0ZXJNYXJnaW5SaWdodCArICdweCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWFyZ2luV2lkdGggKz0gdGhpcy4kb3B0aW9ucy5tYXJnaW47XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbCwgJ3BhZGRpbmctcmlnaHQnLCB0aGlzLiRvcHRpb25zLm1hcmdpbiArICdweCcpO1xuICAgICAgfVxuICAgICAgdGhpcy5jdXJDb2xXaWR0aCA9ICh0aGlzLmN1cldpZHRoIC0gbWFyZ2luV2lkdGgpIC8gdGhpcy5jb2x1bW5zO1xuICAgICAgbGV0IG1hcmdpbkhlaWdodCA9IC10aGlzLiRvcHRpb25zLm1hcmdpbjtcbiAgICAgIGlmICh0aGlzLiRvcHRpb25zLm91dGVyTWFyZ2luVG9wICE9PSBudWxsKSB7XG4gICAgICAgIG1hcmdpbkhlaWdodCArPSB0aGlzLiRvcHRpb25zLm91dGVyTWFyZ2luVG9wO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwsICdwYWRkaW5nLXRvcCcsIHRoaXMuJG9wdGlvbnMub3V0ZXJNYXJnaW5Ub3AgKyAncHgnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1hcmdpbkhlaWdodCArPSB0aGlzLiRvcHRpb25zLm1hcmdpbjtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLCAncGFkZGluZy10b3AnLCB0aGlzLiRvcHRpb25zLm1hcmdpbiArICdweCcpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuJG9wdGlvbnMub3V0ZXJNYXJnaW5Cb3R0b20gIT09IG51bGwpIHtcbiAgICAgICAgbWFyZ2luSGVpZ2h0ICs9IHRoaXMuJG9wdGlvbnMub3V0ZXJNYXJnaW5Cb3R0b207XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbCwgJ3BhZGRpbmctYm90dG9tJywgdGhpcy4kb3B0aW9ucy5vdXRlck1hcmdpbkJvdHRvbSArICdweCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWFyZ2luSGVpZ2h0ICs9IHRoaXMuJG9wdGlvbnMubWFyZ2luO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwsICdwYWRkaW5nLWJvdHRvbScsIHRoaXMuJG9wdGlvbnMubWFyZ2luICsgJ3B4Jyk7XG4gICAgICB9XG4gICAgICB0aGlzLmN1clJvd0hlaWdodCA9ICh0aGlzLmN1ckhlaWdodCAtIG1hcmdpbkhlaWdodCkgLyB0aGlzLnJvd3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY3VyQ29sV2lkdGggPSAodGhpcy5jdXJXaWR0aCArIHRoaXMuJG9wdGlvbnMubWFyZ2luKSAvIHRoaXMuY29sdW1ucztcbiAgICAgIHRoaXMuY3VyUm93SGVpZ2h0ID0gKHRoaXMuY3VySGVpZ2h0ICsgdGhpcy4kb3B0aW9ucy5tYXJnaW4pIC8gdGhpcy5yb3dzO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLCAncGFkZGluZy1sZWZ0JywgMCArICdweCcpO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLCAncGFkZGluZy1yaWdodCcsIDAgKyAncHgnKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbCwgJ3BhZGRpbmctdG9wJywgMCArICdweCcpO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLCAncGFkZGluZy1ib3R0b20nLCAwICsgJ3B4Jyk7XG4gICAgfVxuICAgIHRoaXMuZ3JpZFJlbmRlcmVyLnVwZGF0ZUdyaWRzdGVyKCk7XG5cbiAgICB0aGlzLnVwZGF0ZUdyaWQoKTtcblxuICAgIGlmICh0aGlzLiRvcHRpb25zLnNldEdyaWRTaXplKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwsICd3aWR0aCcsICh0aGlzLmNvbHVtbnMgKiB0aGlzLmN1ckNvbFdpZHRoICsgdGhpcy4kb3B0aW9ucy5tYXJnaW4pICsgJ3B4Jyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwsICdoZWlnaHQnLCAodGhpcy5yb3dzICogdGhpcy5jdXJSb3dIZWlnaHQgKyB0aGlzLiRvcHRpb25zLm1hcmdpbikgKyAncHgnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLCAnd2lkdGgnLCAnJyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwsICdoZWlnaHQnLCAnJyk7XG4gICAgfVxuXG4gICAgbGV0IHdpZGdldHNJbmRleDogbnVtYmVyID0gdGhpcy5ncmlkLmxlbmd0aCAtIDEsIHdpZGdldDogR3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlO1xuICAgIGZvciAoOyB3aWRnZXRzSW5kZXggPj0gMDsgd2lkZ2V0c0luZGV4LS0pIHtcbiAgICAgIHdpZGdldCA9IHRoaXMuZ3JpZFt3aWRnZXRzSW5kZXhdO1xuICAgICAgd2lkZ2V0LnNldFNpemUoKTtcbiAgICAgIHdpZGdldC5kcmFnLnRvZ2dsZSgpO1xuICAgICAgd2lkZ2V0LnJlc2l6ZS50b2dnbGUoKTtcbiAgICB9XG5cbiAgICBzZXRUaW1lb3V0KHRoaXMucmVzaXplLmJpbmQodGhpcyksIDEwMCk7XG4gIH1cblxuICB1cGRhdGVHcmlkKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLiRvcHRpb25zLmRpc3BsYXlHcmlkID09PSAnYWx3YXlzJyAmJiAhdGhpcy5tb2JpbGUpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbCwgJ2Rpc3BsYXktZ3JpZCcpO1xuICAgIH0gZWxzZSBpZiAodGhpcy4kb3B0aW9ucy5kaXNwbGF5R3JpZCA9PT0gJ29uRHJhZyZSZXNpemUnICYmIHRoaXMuZHJhZ0luUHJvZ3Jlc3MpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbCwgJ2Rpc3BsYXktZ3JpZCcpO1xuICAgIH0gZWxzZSBpZiAodGhpcy4kb3B0aW9ucy5kaXNwbGF5R3JpZCA9PT0gJ25vbmUnIHx8ICF0aGlzLmRyYWdJblByb2dyZXNzIHx8IHRoaXMubW9iaWxlKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWwsICdkaXNwbGF5LWdyaWQnKTtcbiAgICB9XG4gICAgdGhpcy5zZXRHcmlkRGltZW5zaW9ucygpO1xuICAgIHRoaXMuZ3JpZENvbHVtbnMubGVuZ3RoID0gTWF0aC5tYXgodGhpcy5jb2x1bW5zLCBNYXRoLmZsb29yKHRoaXMuY3VyV2lkdGggLyB0aGlzLmN1ckNvbFdpZHRoKSkgfHwgMDtcbiAgICB0aGlzLmdyaWRSb3dzLmxlbmd0aCA9IE1hdGgubWF4KHRoaXMucm93cywgTWF0aC5mbG9vcih0aGlzLmN1ckhlaWdodCAvIHRoaXMuY3VyUm93SGVpZ2h0KSkgfHwgMDtcbiAgICB0aGlzLmNkUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgYWRkSXRlbShpdGVtQ29tcG9uZW50OiBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2UpOiB2b2lkIHtcbiAgICBpZiAoaXRlbUNvbXBvbmVudC4kaXRlbS5jb2xzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGl0ZW1Db21wb25lbnQuJGl0ZW0uY29scyA9IHRoaXMuJG9wdGlvbnMuZGVmYXVsdEl0ZW1Db2xzO1xuICAgICAgaXRlbUNvbXBvbmVudC5pdGVtLmNvbHMgPSBpdGVtQ29tcG9uZW50LiRpdGVtLmNvbHM7XG4gICAgICBpdGVtQ29tcG9uZW50Lml0ZW1DaGFuZ2VkKCk7XG4gICAgfVxuICAgIGlmIChpdGVtQ29tcG9uZW50LiRpdGVtLnJvd3MgPT09IHVuZGVmaW5lZCkge1xuICAgICAgaXRlbUNvbXBvbmVudC4kaXRlbS5yb3dzID0gdGhpcy4kb3B0aW9ucy5kZWZhdWx0SXRlbVJvd3M7XG4gICAgICBpdGVtQ29tcG9uZW50Lml0ZW0ucm93cyA9IGl0ZW1Db21wb25lbnQuJGl0ZW0ucm93cztcbiAgICAgIGl0ZW1Db21wb25lbnQuaXRlbUNoYW5nZWQoKTtcbiAgICB9XG4gICAgaWYgKGl0ZW1Db21wb25lbnQuJGl0ZW0ueCA9PT0gLTEgfHwgaXRlbUNvbXBvbmVudC4kaXRlbS55ID09PSAtMSkge1xuICAgICAgdGhpcy5hdXRvUG9zaXRpb25JdGVtKGl0ZW1Db21wb25lbnQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jaGVja0NvbGxpc2lvbihpdGVtQ29tcG9uZW50LiRpdGVtKSkge1xuICAgICAgaWYgKCF0aGlzLiRvcHRpb25zLmRpc2FibGVXYXJuaW5ncykge1xuICAgICAgICBpdGVtQ29tcG9uZW50Lm5vdFBsYWNlZCA9IHRydWU7XG4gICAgICAgIGNvbnNvbGUud2FybignQ2FuXFwndCBiZSBwbGFjZWQgaW4gdGhlIGJvdW5kcyBvZiB0aGUgZGFzaGJvYXJkLCB0cnlpbmcgdG8gYXV0byBwb3NpdGlvbiEvbicgK1xuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KGl0ZW1Db21wb25lbnQuaXRlbSwgWydjb2xzJywgJ3Jvd3MnLCAneCcsICd5J10pKTtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy4kb3B0aW9ucy5kaXNhYmxlQXV0b1Bvc2l0aW9uT25Db25mbGljdCkge1xuICAgICAgICB0aGlzLmF1dG9Qb3NpdGlvbkl0ZW0oaXRlbUNvbXBvbmVudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpdGVtQ29tcG9uZW50Lm5vdFBsYWNlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuZ3JpZC5wdXNoKGl0ZW1Db21wb25lbnQpO1xuICAgIHRoaXMuY2FsY3VsYXRlTGF5b3V0RGVib3VuY2UoKTtcbiAgfVxuXG4gIHJlbW92ZUl0ZW0oaXRlbUNvbXBvbmVudDogR3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlKTogdm9pZCB7XG4gICAgdGhpcy5ncmlkLnNwbGljZSh0aGlzLmdyaWQuaW5kZXhPZihpdGVtQ29tcG9uZW50KSwgMSk7XG4gICAgdGhpcy5jYWxjdWxhdGVMYXlvdXREZWJvdW5jZSgpO1xuICAgIGlmICh0aGlzLm9wdGlvbnMuaXRlbVJlbW92ZWRDYWxsYmFjaykge1xuICAgICAgdGhpcy5vcHRpb25zLml0ZW1SZW1vdmVkQ2FsbGJhY2soaXRlbUNvbXBvbmVudC5pdGVtLCBpdGVtQ29tcG9uZW50KTtcbiAgICB9XG4gIH1cblxuICBjaGVja0NvbGxpc2lvbihpdGVtOiBHcmlkc3Rlckl0ZW0pOiBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2UgfCBib29sZWFuIHtcbiAgICBsZXQgY29sbGlzaW9uOiBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2UgfCBib29sZWFuID0gZmFsc2U7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5pdGVtVmFsaWRhdGVDYWxsYmFjaykge1xuICAgICAgY29sbGlzaW9uID0gIXRoaXMub3B0aW9ucy5pdGVtVmFsaWRhdGVDYWxsYmFjayhpdGVtKTtcbiAgICB9XG4gICAgaWYgKCFjb2xsaXNpb24gJiYgdGhpcy5jaGVja0dyaWRDb2xsaXNpb24oaXRlbSkpIHtcbiAgICAgIGNvbGxpc2lvbiA9IHRydWU7XG4gICAgfVxuICAgIGlmICghY29sbGlzaW9uKSB7XG4gICAgICBjb25zdCBjID0gdGhpcy5maW5kSXRlbVdpdGhJdGVtKGl0ZW0pO1xuICAgICAgaWYgKGMpIHtcbiAgICAgICAgY29sbGlzaW9uID0gYztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNvbGxpc2lvbjtcbiAgfVxuXG4gIGNoZWNrR3JpZENvbGxpc2lvbihpdGVtOiBHcmlkc3Rlckl0ZW0pOiBib29sZWFuIHtcbiAgICBjb25zdCBub05lZ2F0aXZlUG9zaXRpb24gPSBpdGVtLnkgPiAtMSAmJiBpdGVtLnggPiAtMTtcbiAgICBjb25zdCBtYXhHcmlkQ29scyA9IGl0ZW0uY29scyArIGl0ZW0ueCA8PSB0aGlzLiRvcHRpb25zLm1heENvbHM7XG4gICAgY29uc3QgbWF4R3JpZFJvd3MgPSBpdGVtLnJvd3MgKyBpdGVtLnkgPD0gdGhpcy4kb3B0aW9ucy5tYXhSb3dzO1xuICAgIGNvbnN0IG1heEl0ZW1Db2xzID0gaXRlbS5tYXhJdGVtQ29scyA9PT0gdW5kZWZpbmVkID8gdGhpcy4kb3B0aW9ucy5tYXhJdGVtQ29scyA6IGl0ZW0ubWF4SXRlbUNvbHM7XG4gICAgY29uc3QgbWluSXRlbUNvbHMgPSBpdGVtLm1pbkl0ZW1Db2xzID09PSB1bmRlZmluZWQgPyB0aGlzLiRvcHRpb25zLm1pbkl0ZW1Db2xzIDogaXRlbS5taW5JdGVtQ29scztcbiAgICBjb25zdCBtYXhJdGVtUm93cyA9IGl0ZW0ubWF4SXRlbVJvd3MgPT09IHVuZGVmaW5lZCA/IHRoaXMuJG9wdGlvbnMubWF4SXRlbVJvd3MgOiBpdGVtLm1heEl0ZW1Sb3dzO1xuICAgIGNvbnN0IG1pbkl0ZW1Sb3dzID0gaXRlbS5taW5JdGVtUm93cyA9PT0gdW5kZWZpbmVkID8gdGhpcy4kb3B0aW9ucy5taW5JdGVtUm93cyA6IGl0ZW0ubWluSXRlbVJvd3M7XG4gICAgY29uc3QgaW5Db2xzTGltaXRzID0gaXRlbS5jb2xzIDw9IG1heEl0ZW1Db2xzICYmIGl0ZW0uY29scyA+PSBtaW5JdGVtQ29scztcbiAgICBjb25zdCBpblJvd3NMaW1pdHMgPSBpdGVtLnJvd3MgPD0gbWF4SXRlbVJvd3MgJiYgaXRlbS5yb3dzID49IG1pbkl0ZW1Sb3dzO1xuICAgIGNvbnN0IG1pbkFyZWFMaW1pdCA9IGl0ZW0ubWluSXRlbUFyZWEgPT09IHVuZGVmaW5lZCA/IHRoaXMuJG9wdGlvbnMubWluSXRlbUFyZWEgOiBpdGVtLm1pbkl0ZW1BcmVhO1xuICAgIGNvbnN0IG1heEFyZWFMaW1pdCA9IGl0ZW0ubWF4SXRlbUFyZWEgPT09IHVuZGVmaW5lZCA/IHRoaXMuJG9wdGlvbnMubWF4SXRlbUFyZWEgOiBpdGVtLm1heEl0ZW1BcmVhO1xuICAgIGNvbnN0IGFyZWEgPSBpdGVtLmNvbHMgKiBpdGVtLnJvd3M7XG4gICAgY29uc3QgaW5NaW5BcmVhID0gbWluQXJlYUxpbWl0IDw9IGFyZWE7XG4gICAgY29uc3QgaW5NYXhBcmVhID0gbWF4QXJlYUxpbWl0ID49IGFyZWE7XG4gICAgcmV0dXJuICEobm9OZWdhdGl2ZVBvc2l0aW9uICYmIG1heEdyaWRDb2xzICYmIG1heEdyaWRSb3dzICYmIGluQ29sc0xpbWl0cyAmJiBpblJvd3NMaW1pdHMgJiYgaW5NaW5BcmVhICYmIGluTWF4QXJlYSk7XG4gIH1cblxuICBmaW5kSXRlbVdpdGhJdGVtKGl0ZW06IEdyaWRzdGVySXRlbSk6IEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZSB8IGJvb2xlYW4ge1xuICAgIGxldCB3aWRnZXRzSW5kZXg6IG51bWJlciA9IHRoaXMuZ3JpZC5sZW5ndGggLSAxLCB3aWRnZXQ6IEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZTtcbiAgICBmb3IgKDsgd2lkZ2V0c0luZGV4ID4gLTE7IHdpZGdldHNJbmRleC0tKSB7XG4gICAgICB3aWRnZXQgPSB0aGlzLmdyaWRbd2lkZ2V0c0luZGV4XTtcbiAgICAgIGlmICh3aWRnZXQuJGl0ZW0gIT09IGl0ZW0gJiYgR3JpZHN0ZXJDb21wb25lbnQuY2hlY2tDb2xsaXNpb25Ud29JdGVtcyh3aWRnZXQuJGl0ZW0sIGl0ZW0pKSB7XG4gICAgICAgIHJldHVybiB3aWRnZXQ7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZpbmRJdGVtc1dpdGhJdGVtKGl0ZW06IEdyaWRzdGVySXRlbSk6IEFycmF5PEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZT4ge1xuICAgIGNvbnN0IGE6IEFycmF5PEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZT4gPSBbXTtcbiAgICBsZXQgd2lkZ2V0c0luZGV4OiBudW1iZXIgPSB0aGlzLmdyaWQubGVuZ3RoIC0gMSwgd2lkZ2V0OiBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2U7XG4gICAgZm9yICg7IHdpZGdldHNJbmRleCA+IC0xOyB3aWRnZXRzSW5kZXgtLSkge1xuICAgICAgd2lkZ2V0ID0gdGhpcy5ncmlkW3dpZGdldHNJbmRleF07XG4gICAgICBpZiAod2lkZ2V0LiRpdGVtICE9PSBpdGVtICYmIEdyaWRzdGVyQ29tcG9uZW50LmNoZWNrQ29sbGlzaW9uVHdvSXRlbXMod2lkZ2V0LiRpdGVtLCBpdGVtKSkge1xuICAgICAgICBhLnB1c2god2lkZ2V0KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGE7XG4gIH1cblxuICBhdXRvUG9zaXRpb25JdGVtKGl0ZW1Db21wb25lbnQ6IEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmdldE5leHRQb3NzaWJsZVBvc2l0aW9uKGl0ZW1Db21wb25lbnQuJGl0ZW0pKSB7XG4gICAgICBpdGVtQ29tcG9uZW50Lm5vdFBsYWNlZCA9IGZhbHNlO1xuICAgICAgaXRlbUNvbXBvbmVudC5pdGVtLnggPSBpdGVtQ29tcG9uZW50LiRpdGVtLng7XG4gICAgICBpdGVtQ29tcG9uZW50Lml0ZW0ueSA9IGl0ZW1Db21wb25lbnQuJGl0ZW0ueTtcbiAgICAgIGl0ZW1Db21wb25lbnQuaXRlbUNoYW5nZWQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaXRlbUNvbXBvbmVudC5ub3RQbGFjZWQgPSB0cnVlO1xuICAgICAgaWYgKCF0aGlzLiRvcHRpb25zLmRpc2FibGVXYXJuaW5ncykge1xuICAgICAgICBjb25zb2xlLndhcm4oJ0NhblxcJ3QgYmUgcGxhY2VkIGluIHRoZSBib3VuZHMgb2YgdGhlIGRhc2hib2FyZCEvbicgK1xuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KGl0ZW1Db21wb25lbnQuaXRlbSwgWydjb2xzJywgJ3Jvd3MnLCAneCcsICd5J10pKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXROZXh0UG9zc2libGVQb3NpdGlvbihuZXdJdGVtOiBHcmlkc3Rlckl0ZW0sIHN0YXJ0aW5nRnJvbTogeyB5PzogbnVtYmVyLCB4PzogbnVtYmVyIH0gPSB7fSk6IGJvb2xlYW4ge1xuICAgIGlmIChuZXdJdGVtLmNvbHMgPT09IC0xKSB7XG4gICAgICBuZXdJdGVtLmNvbHMgPSB0aGlzLiRvcHRpb25zLmRlZmF1bHRJdGVtQ29scztcbiAgICB9XG4gICAgaWYgKG5ld0l0ZW0ucm93cyA9PT0gLTEpIHtcbiAgICAgIG5ld0l0ZW0ucm93cyA9IHRoaXMuJG9wdGlvbnMuZGVmYXVsdEl0ZW1Sb3dzO1xuICAgIH1cbiAgICB0aGlzLnNldEdyaWREaW1lbnNpb25zKCk7XG4gICAgbGV0IHJvd3NJbmRleCA9IHN0YXJ0aW5nRnJvbS55IHx8IDAsIGNvbHNJbmRleDtcbiAgICBmb3IgKDsgcm93c0luZGV4IDwgdGhpcy5yb3dzOyByb3dzSW5kZXgrKykge1xuICAgICAgbmV3SXRlbS55ID0gcm93c0luZGV4O1xuICAgICAgY29sc0luZGV4ID0gc3RhcnRpbmdGcm9tLnggfHwgMDtcbiAgICAgIGZvciAoOyBjb2xzSW5kZXggPCB0aGlzLmNvbHVtbnM7IGNvbHNJbmRleCsrKSB7XG4gICAgICAgIG5ld0l0ZW0ueCA9IGNvbHNJbmRleDtcbiAgICAgICAgaWYgKCF0aGlzLmNoZWNrQ29sbGlzaW9uKG5ld0l0ZW0pKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgY2FuQWRkVG9Sb3dzID0gdGhpcy4kb3B0aW9ucy5tYXhSb3dzID49IHRoaXMucm93cyArIG5ld0l0ZW0ucm93cztcbiAgICBjb25zdCBjYW5BZGRUb0NvbHVtbnMgPSB0aGlzLiRvcHRpb25zLm1heENvbHMgPj0gdGhpcy5jb2x1bW5zICsgbmV3SXRlbS5jb2xzO1xuICAgIGNvbnN0IGFkZFRvUm93cyA9IHRoaXMucm93cyA8PSB0aGlzLmNvbHVtbnMgJiYgY2FuQWRkVG9Sb3dzO1xuICAgIGlmICghYWRkVG9Sb3dzICYmIGNhbkFkZFRvQ29sdW1ucykge1xuICAgICAgbmV3SXRlbS54ID0gdGhpcy5jb2x1bW5zO1xuICAgICAgbmV3SXRlbS55ID0gMDtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAoY2FuQWRkVG9Sb3dzKSB7XG4gICAgICBuZXdJdGVtLnkgPSB0aGlzLnJvd3M7XG4gICAgICBuZXdJdGVtLnggPSAwO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGdldEZpcnN0UG9zc2libGVQb3NpdGlvbihpdGVtOiBHcmlkc3Rlckl0ZW0pOiBHcmlkc3Rlckl0ZW0ge1xuICAgIGNvbnN0IHRtcEl0ZW0gPSBPYmplY3QuYXNzaWduKHt9LCBpdGVtKTtcbiAgICB0aGlzLmdldE5leHRQb3NzaWJsZVBvc2l0aW9uKHRtcEl0ZW0pO1xuICAgIHJldHVybiB0bXBJdGVtO1xuICB9XG5cbiAgZ2V0TGFzdFBvc3NpYmxlUG9zaXRpb24oaXRlbTogR3JpZHN0ZXJJdGVtKTogR3JpZHN0ZXJJdGVtIHtcbiAgICBsZXQgZmFydGhlc3RJdGVtOiB7IHk6IG51bWJlciwgeDogbnVtYmVyIH0gPSB7eTogMCwgeDogMH07XG4gICAgZmFydGhlc3RJdGVtID0gdGhpcy5ncmlkLnJlZHVjZSgocHJldjogYW55LCBjdXJyOiBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2UpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJDb29yZHMgPSB7eTogY3Vyci4kaXRlbS55ICsgY3Vyci4kaXRlbS5yb3dzIC0gMSwgeDogY3Vyci4kaXRlbS54ICsgY3Vyci4kaXRlbS5jb2xzIC0gMX07XG4gICAgICBpZiAoR3JpZHN0ZXJVdGlscy5jb21wYXJlSXRlbXMocHJldiwgY3VyckNvb3JkcykgPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIGN1cnJDb29yZHM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcHJldjtcbiAgICAgIH1cbiAgICB9LCBmYXJ0aGVzdEl0ZW0pO1xuXG4gICAgY29uc3QgdG1wSXRlbSA9IE9iamVjdC5hc3NpZ24oe30sIGl0ZW0pO1xuICAgIHRoaXMuZ2V0TmV4dFBvc3NpYmxlUG9zaXRpb24odG1wSXRlbSwgZmFydGhlc3RJdGVtKTtcbiAgICByZXR1cm4gdG1wSXRlbTtcbiAgfVxuXG4gIHBpeGVsc1RvUG9zaXRpb25YKHg6IG51bWJlciwgcm91bmRpbmdNZXRob2Q6IEZ1bmN0aW9uLCBub0xpbWl0PzogYm9vbGVhbik6IG51bWJlciB7XG4gICAgY29uc3QgcG9zaXRpb24gPSByb3VuZGluZ01ldGhvZCh4IC8gdGhpcy5jdXJDb2xXaWR0aCk7XG4gICAgaWYgKG5vTGltaXQpIHtcbiAgICAgIHJldHVybiBwb3NpdGlvbjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIE1hdGgubWF4KHBvc2l0aW9uLCAwKTtcbiAgICB9XG4gIH1cblxuICBwaXhlbHNUb1Bvc2l0aW9uWSh5OiBudW1iZXIsIHJvdW5kaW5nTWV0aG9kOiBGdW5jdGlvbiwgbm9MaW1pdD86IGJvb2xlYW4pOiBudW1iZXIge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gcm91bmRpbmdNZXRob2QoeSAvIHRoaXMuY3VyUm93SGVpZ2h0KTtcbiAgICBpZiAobm9MaW1pdCkge1xuICAgICAgcmV0dXJuIHBvc2l0aW9uO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gTWF0aC5tYXgocG9zaXRpb24sIDApO1xuICAgIH1cbiAgfVxuXG4gIHBvc2l0aW9uWFRvUGl4ZWxzKHg6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIHggKiB0aGlzLmN1ckNvbFdpZHRoO1xuICB9XG5cbiAgcG9zaXRpb25ZVG9QaXhlbHMoeTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4geSAqIHRoaXMuY3VyUm93SGVpZ2h0O1xuICB9XG59XG4iLCJpbXBvcnQge0dyaWRzdGVySXRlbX0gZnJvbSAnLi9ncmlkc3Rlckl0ZW0uaW50ZXJmYWNlJztcbmltcG9ydCB7R3JpZHN0ZXJEcmFnZ2FibGV9IGZyb20gJy4vZ3JpZHN0ZXJEcmFnZ2FibGUuc2VydmljZSc7XG5pbXBvcnQge1JlbmRlcmVyMn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0dyaWRzdGVyUmVzaXphYmxlfSBmcm9tICcuL2dyaWRzdGVyUmVzaXphYmxlLnNlcnZpY2UnO1xuaW1wb3J0IHtHcmlkc3RlckNvbXBvbmVudEludGVyZmFjZX0gZnJvbSAnLi9ncmlkc3Rlci5pbnRlcmZhY2UnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgR3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlIHtcbiAgaXRlbTogR3JpZHN0ZXJJdGVtO1xuICAkaXRlbTogR3JpZHN0ZXJJdGVtO1xuICB0b3A6IG51bWJlcjtcbiAgbGVmdDogbnVtYmVyO1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgZHJhZzogR3JpZHN0ZXJEcmFnZ2FibGU7XG4gIHJlc2l6ZTogR3JpZHN0ZXJSZXNpemFibGU7XG4gIG5vdFBsYWNlZDogYm9vbGVhbjtcbiAgdXBkYXRlT3B0aW9uczogKCkgPT4gdm9pZDtcbiAgaXRlbUNoYW5nZWQ6ICgpID0+IHZvaWQ7XG4gIHNldFNpemU6ICgpID0+IHZvaWQ7XG4gIGNoZWNrSXRlbUNoYW5nZXM6IChuZXdWYWx1ZTogR3JpZHN0ZXJJdGVtLCBvbGRWYWx1ZTogR3JpZHN0ZXJJdGVtKSA9PiB2b2lkO1xuICBjYW5CZURyYWdnZWQ6ICgpID0+IGJvb2xlYW47XG4gIGNhbkJlUmVzaXplZDogKCkgPT4gYm9vbGVhbjtcbiAgZWw6IGFueTtcbiAgZ3JpZHN0ZXI6IEdyaWRzdGVyQ29tcG9uZW50SW50ZXJmYWNlO1xuICByZW5kZXJlcjogUmVuZGVyZXIyO1xufVxuIiwiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2V9IGZyb20gJy4vZ3JpZHN0ZXJJdGVtQ29tcG9uZW50LmludGVyZmFjZSc7XG5pbXBvcnQge0dyaWRzdGVyQ29tcG9uZW50SW50ZXJmYWNlfSBmcm9tICcuL2dyaWRzdGVyLmludGVyZmFjZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHcmlkc3RlclN3YXAge1xuICBwcml2YXRlIHN3YXBlZEl0ZW06IEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZSB8IHVuZGVmaW5lZDtcbiAgcHJpdmF0ZSBncmlkc3Rlckl0ZW06IEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZTtcbiAgcHJpdmF0ZSBncmlkc3RlcjogR3JpZHN0ZXJDb21wb25lbnRJbnRlcmZhY2U7XG5cbiAgY29uc3RydWN0b3IoZ3JpZHN0ZXJJdGVtOiBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2UpIHtcbiAgICB0aGlzLmdyaWRzdGVySXRlbSA9IGdyaWRzdGVySXRlbTtcbiAgICB0aGlzLmdyaWRzdGVyID0gZ3JpZHN0ZXJJdGVtLmdyaWRzdGVyO1xuICB9XG5cbiAgZGVzdHJveSgpOiB2b2lkIHtcbiAgICBkZWxldGUgdGhpcy5ncmlkc3RlcjtcbiAgICBkZWxldGUgdGhpcy5ncmlkc3Rlckl0ZW07XG4gICAgZGVsZXRlIHRoaXMuc3dhcGVkSXRlbTtcbiAgfVxuXG4gIHN3YXBJdGVtcygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5ncmlkc3Rlci4kb3B0aW9ucy5zd2FwKSB7XG4gICAgICB0aGlzLmNoZWNrU3dhcEJhY2soKTtcbiAgICAgIHRoaXMuY2hlY2tTd2FwKHRoaXMuZ3JpZHN0ZXJJdGVtKTtcbiAgICB9XG4gIH1cblxuICBjaGVja1N3YXBCYWNrKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnN3YXBlZEl0ZW0pIHtcbiAgICAgIGNvbnN0IHg6IG51bWJlciA9IHRoaXMuc3dhcGVkSXRlbS4kaXRlbS54O1xuICAgICAgY29uc3QgeTogbnVtYmVyID0gdGhpcy5zd2FwZWRJdGVtLiRpdGVtLnk7XG4gICAgICB0aGlzLnN3YXBlZEl0ZW0uJGl0ZW0ueCA9IHRoaXMuc3dhcGVkSXRlbS5pdGVtLnggfHwgMDtcbiAgICAgIHRoaXMuc3dhcGVkSXRlbS4kaXRlbS55ID0gdGhpcy5zd2FwZWRJdGVtLml0ZW0ueSB8fCAwO1xuICAgICAgaWYgKHRoaXMuZ3JpZHN0ZXIuY2hlY2tDb2xsaXNpb24odGhpcy5zd2FwZWRJdGVtLiRpdGVtKSkge1xuICAgICAgICB0aGlzLnN3YXBlZEl0ZW0uJGl0ZW0ueCA9IHg7XG4gICAgICAgIHRoaXMuc3dhcGVkSXRlbS4kaXRlbS55ID0geTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc3dhcGVkSXRlbS5zZXRTaXplKCk7XG4gICAgICAgIHRoaXMuZ3JpZHN0ZXJJdGVtLiRpdGVtLnggPSB0aGlzLmdyaWRzdGVySXRlbS5pdGVtLnggfHwgMDtcbiAgICAgICAgdGhpcy5ncmlkc3Rlckl0ZW0uJGl0ZW0ueSA9IHRoaXMuZ3JpZHN0ZXJJdGVtLml0ZW0ueSB8fCAwO1xuICAgICAgICB0aGlzLnN3YXBlZEl0ZW0gPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9XG4gIH1cblxuICByZXN0b3JlU3dhcEl0ZW0oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc3dhcGVkSXRlbSkge1xuICAgICAgdGhpcy5zd2FwZWRJdGVtLiRpdGVtLnggPSB0aGlzLnN3YXBlZEl0ZW0uaXRlbS54IHx8IDA7XG4gICAgICB0aGlzLnN3YXBlZEl0ZW0uJGl0ZW0ueSA9IHRoaXMuc3dhcGVkSXRlbS5pdGVtLnkgfHwgMDtcbiAgICAgIHRoaXMuc3dhcGVkSXRlbS5zZXRTaXplKCk7XG4gICAgICB0aGlzLnN3YXBlZEl0ZW0gPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgc2V0U3dhcEl0ZW0oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc3dhcGVkSXRlbSkge1xuICAgICAgdGhpcy5zd2FwZWRJdGVtLmNoZWNrSXRlbUNoYW5nZXModGhpcy5zd2FwZWRJdGVtLiRpdGVtLCB0aGlzLnN3YXBlZEl0ZW0uaXRlbSk7XG4gICAgICB0aGlzLnN3YXBlZEl0ZW0gPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgY2hlY2tTd2FwKHB1c2hlZEJ5OiBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2UpOiB2b2lkIHtcbiAgICBjb25zdCBncmlkc3Rlckl0ZW1Db2xsaXNpb246IGFueSA9IHRoaXMuZ3JpZHN0ZXIuY2hlY2tDb2xsaXNpb24ocHVzaGVkQnkuJGl0ZW0pO1xuICAgIGlmIChncmlkc3Rlckl0ZW1Db2xsaXNpb24gJiYgZ3JpZHN0ZXJJdGVtQ29sbGlzaW9uICE9PSB0cnVlICYmIGdyaWRzdGVySXRlbUNvbGxpc2lvbi5jYW5CZURyYWdnZWQoKSkge1xuICAgICAgY29uc3QgZ3JpZHN0ZXJJdGVtQ29sbGlkZTogR3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlID0gZ3JpZHN0ZXJJdGVtQ29sbGlzaW9uO1xuICAgICAgY29uc3QgY29weUNvbGxpc2lvblggPSBncmlkc3Rlckl0ZW1Db2xsaWRlLiRpdGVtLng7XG4gICAgICBjb25zdCBjb3B5Q29sbGlzaW9uWSA9IGdyaWRzdGVySXRlbUNvbGxpZGUuJGl0ZW0ueTtcbiAgICAgIGNvbnN0IGNvcHlYID0gcHVzaGVkQnkuJGl0ZW0ueDtcbiAgICAgIGNvbnN0IGNvcHlZID0gcHVzaGVkQnkuJGl0ZW0ueTtcbiAgICAgIGdyaWRzdGVySXRlbUNvbGxpZGUuJGl0ZW0ueCA9IHB1c2hlZEJ5Lml0ZW0ueCB8fCAwO1xuICAgICAgZ3JpZHN0ZXJJdGVtQ29sbGlkZS4kaXRlbS55ID0gcHVzaGVkQnkuaXRlbS55IHx8IDA7XG4gICAgICBwdXNoZWRCeS4kaXRlbS54ID0gZ3JpZHN0ZXJJdGVtQ29sbGlkZS5pdGVtLnggfHwgMDtcbiAgICAgIHB1c2hlZEJ5LiRpdGVtLnkgPSBncmlkc3Rlckl0ZW1Db2xsaWRlLml0ZW0ueSB8fCAwO1xuICAgICAgaWYgKHRoaXMuZ3JpZHN0ZXIuY2hlY2tDb2xsaXNpb24oZ3JpZHN0ZXJJdGVtQ29sbGlkZS4kaXRlbSkgfHwgdGhpcy5ncmlkc3Rlci5jaGVja0NvbGxpc2lvbihwdXNoZWRCeS4kaXRlbSkpIHtcbiAgICAgICAgcHVzaGVkQnkuJGl0ZW0ueCA9IGNvcHlYO1xuICAgICAgICBwdXNoZWRCeS4kaXRlbS55ID0gY29weVk7XG4gICAgICAgIGdyaWRzdGVySXRlbUNvbGxpZGUuJGl0ZW0ueCA9IGNvcHlDb2xsaXNpb25YO1xuICAgICAgICBncmlkc3Rlckl0ZW1Db2xsaWRlLiRpdGVtLnkgPSBjb3B5Q29sbGlzaW9uWTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGdyaWRzdGVySXRlbUNvbGxpZGUuc2V0U2l6ZSgpO1xuICAgICAgICB0aGlzLnN3YXBlZEl0ZW0gPSBncmlkc3Rlckl0ZW1Db2xsaWRlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHtHcmlkc3RlclJlc2l6ZUV2ZW50VHlwZX0gZnJvbSAnLi9ncmlkc3RlclJlc2l6ZUV2ZW50VHlwZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHtHcmlkc3RlckNvbXBvbmVudEludGVyZmFjZX0gZnJvbSAnLi9ncmlkc3Rlci5pbnRlcmZhY2UnO1xuXG5sZXQgc2Nyb2xsU2Vuc2l0aXZpdHk6IG51bWJlcjtcbmxldCBzY3JvbGxTcGVlZDogbnVtYmVyO1xuY29uc3QgaW50ZXJ2YWxEdXJhdGlvbiA9IDUwO1xubGV0IGdyaWRzdGVyRWxlbWVudDogYW55O1xubGV0IHJlc2l6ZUV2ZW50OiBib29sZWFuIHwgdW5kZWZpbmVkO1xubGV0IHJlc2l6ZUV2ZW50VHlwZTogR3JpZHN0ZXJSZXNpemVFdmVudFR5cGUgfCB1bmRlZmluZWQ7XG5sZXQgaW50ZXJ2YWxFOiBudW1iZXI7XG5sZXQgaW50ZXJ2YWxXOiBudW1iZXI7XG5sZXQgaW50ZXJ2YWxOOiBudW1iZXI7XG5sZXQgaW50ZXJ2YWxTOiBudW1iZXI7XG5cbmV4cG9ydCBmdW5jdGlvbiBzY3JvbGwoZ3JpZHN0ZXI6IEdyaWRzdGVyQ29tcG9uZW50SW50ZXJmYWNlLCBsZWZ0OiBudW1iZXIsIHRvcDogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgZTogTW91c2VFdmVudCwgbGFzdE1vdXNlOiBhbnksXG4gICAgICAgICAgICAgICAgICAgICAgIGNhbGN1bGF0ZUl0ZW1Qb3NpdGlvbjogRnVuY3Rpb24sIHJlc2l6ZT86IGJvb2xlYW4sIHJlc2l6ZUV2ZW50U2Nyb2xsVHlwZT86IEdyaWRzdGVyUmVzaXplRXZlbnRUeXBlKSB7XG4gIHNjcm9sbFNlbnNpdGl2aXR5ID0gZ3JpZHN0ZXIuJG9wdGlvbnMuc2Nyb2xsU2Vuc2l0aXZpdHk7XG4gIHNjcm9sbFNwZWVkID0gZ3JpZHN0ZXIuJG9wdGlvbnMuc2Nyb2xsU3BlZWQ7XG4gIGdyaWRzdGVyRWxlbWVudCA9IGdyaWRzdGVyLmVsO1xuICByZXNpemVFdmVudCA9IHJlc2l6ZTtcbiAgcmVzaXplRXZlbnRUeXBlID0gcmVzaXplRXZlbnRTY3JvbGxUeXBlO1xuXG4gIGNvbnN0IG9mZnNldFdpZHRoID0gZ3JpZHN0ZXJFbGVtZW50Lm9mZnNldFdpZHRoO1xuICBjb25zdCBvZmZzZXRIZWlnaHQgPSBncmlkc3RlckVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICBjb25zdCBvZmZzZXRMZWZ0ID0gZ3JpZHN0ZXJFbGVtZW50LnNjcm9sbExlZnQ7XG4gIGNvbnN0IG9mZnNldFRvcCA9IGdyaWRzdGVyRWxlbWVudC5zY3JvbGxUb3A7XG4gIGNvbnN0IGVsZW1Ub3BPZmZzZXQgPSB0b3AgLSBvZmZzZXRUb3A7XG4gIGNvbnN0IGVsZW1Cb3R0b21PZmZzZXQgPSBvZmZzZXRIZWlnaHQgKyBvZmZzZXRUb3AgLSB0b3AgLSBoZWlnaHQ7XG4gIGlmIChsYXN0TW91c2UuY2xpZW50WSA8IGUuY2xpZW50WSAmJiBlbGVtQm90dG9tT2Zmc2V0IDwgc2Nyb2xsU2Vuc2l0aXZpdHkpIHtcbiAgICBjYW5jZWxOKCk7XG4gICAgaWYgKChyZXNpemVFdmVudCAmJiByZXNpemVFdmVudFR5cGUgJiYgIXJlc2l6ZUV2ZW50VHlwZS5zKSB8fCBpbnRlcnZhbFMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaW50ZXJ2YWxTID0gc3RhcnRWZXJ0aWNhbCgxLCBjYWxjdWxhdGVJdGVtUG9zaXRpb24sIGxhc3RNb3VzZSk7XG4gIH0gZWxzZSBpZiAobGFzdE1vdXNlLmNsaWVudFkgPiBlLmNsaWVudFkgJiYgb2Zmc2V0VG9wID4gMCAmJiBlbGVtVG9wT2Zmc2V0IDwgc2Nyb2xsU2Vuc2l0aXZpdHkpIHtcbiAgICBjYW5jZWxTKCk7XG4gICAgaWYgKChyZXNpemVFdmVudCAmJiByZXNpemVFdmVudFR5cGUgJiYgIXJlc2l6ZUV2ZW50VHlwZS5uKSB8fCBpbnRlcnZhbE4pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaW50ZXJ2YWxOID0gc3RhcnRWZXJ0aWNhbCgtMSwgY2FsY3VsYXRlSXRlbVBvc2l0aW9uLCBsYXN0TW91c2UpO1xuICB9IGVsc2UgaWYgKGxhc3RNb3VzZS5jbGllbnRZICE9PSBlLmNsaWVudFkpIHtcbiAgICBjYW5jZWxWZXJ0aWNhbCgpO1xuICB9XG5cbiAgY29uc3QgZWxlbVJpZ2h0T2Zmc2V0ID0gb2Zmc2V0TGVmdCArIG9mZnNldFdpZHRoIC0gbGVmdCAtIHdpZHRoO1xuICBjb25zdCBlbGVtTGVmdE9mZnNldCA9IGxlZnQgLSBvZmZzZXRMZWZ0O1xuICBpZiAobGFzdE1vdXNlLmNsaWVudFggPCBlLmNsaWVudFggJiYgZWxlbVJpZ2h0T2Zmc2V0IDw9IHNjcm9sbFNlbnNpdGl2aXR5KSB7XG4gICAgY2FuY2VsVygpO1xuICAgIGlmICgocmVzaXplRXZlbnQgJiYgcmVzaXplRXZlbnRUeXBlICYmICFyZXNpemVFdmVudFR5cGUuZSkgfHwgaW50ZXJ2YWxFKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGludGVydmFsRSA9IHN0YXJ0SG9yaXpvbnRhbCgxLCBjYWxjdWxhdGVJdGVtUG9zaXRpb24sIGxhc3RNb3VzZSk7XG4gIH0gZWxzZSBpZiAobGFzdE1vdXNlLmNsaWVudFggPiBlLmNsaWVudFggJiYgb2Zmc2V0TGVmdCA+IDAgJiYgZWxlbUxlZnRPZmZzZXQgPCBzY3JvbGxTZW5zaXRpdml0eSkge1xuICAgIGNhbmNlbEUoKTtcbiAgICBpZiAoKHJlc2l6ZUV2ZW50ICYmIHJlc2l6ZUV2ZW50VHlwZSAmJiAhcmVzaXplRXZlbnRUeXBlLncpIHx8IGludGVydmFsVykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpbnRlcnZhbFcgPSBzdGFydEhvcml6b250YWwoLTEsIGNhbGN1bGF0ZUl0ZW1Qb3NpdGlvbiwgbGFzdE1vdXNlKTtcbiAgfSBlbHNlIGlmIChsYXN0TW91c2UuY2xpZW50WCAhPT0gZS5jbGllbnRYKSB7XG4gICAgY2FuY2VsSG9yaXpvbnRhbCgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0YXJ0VmVydGljYWwoc2lnbjogbnVtYmVyLCBjYWxjdWxhdGVJdGVtUG9zaXRpb246IEZ1bmN0aW9uLCBsYXN0TW91c2U6IGFueSk6IGFueSB7XG4gIGxldCBjbGllbnRZID0gbGFzdE1vdXNlLmNsaWVudFk7XG4gIHJldHVybiBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgaWYgKCFncmlkc3RlckVsZW1lbnQgfHwgc2lnbiA9PT0gLTEgJiYgZ3JpZHN0ZXJFbGVtZW50LnNjcm9sbFRvcCAtIHNjcm9sbFNwZWVkIDwgMCkge1xuICAgICAgY2FuY2VsVmVydGljYWwoKTtcbiAgICB9XG4gICAgZ3JpZHN0ZXJFbGVtZW50LnNjcm9sbFRvcCArPSBzaWduICogc2Nyb2xsU3BlZWQ7XG4gICAgY2xpZW50WSArPSBzaWduICogc2Nyb2xsU3BlZWQ7XG4gICAgY2FsY3VsYXRlSXRlbVBvc2l0aW9uKHtjbGllbnRYOiBsYXN0TW91c2UuY2xpZW50WCwgY2xpZW50WTogY2xpZW50WX0pO1xuICB9LCBpbnRlcnZhbER1cmF0aW9uKTtcbn1cblxuZnVuY3Rpb24gc3RhcnRIb3Jpem9udGFsKHNpZ246IG51bWJlciwgY2FsY3VsYXRlSXRlbVBvc2l0aW9uOiBGdW5jdGlvbiwgbGFzdE1vdXNlOiBhbnkpOiBhbnkge1xuICBsZXQgY2xpZW50WCA9IGxhc3RNb3VzZS5jbGllbnRYO1xuICByZXR1cm4gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgIGlmICghZ3JpZHN0ZXJFbGVtZW50IHx8IHNpZ24gPT09IC0xICYmIGdyaWRzdGVyRWxlbWVudC5zY3JvbGxMZWZ0IC0gc2Nyb2xsU3BlZWQgPCAwKSB7XG4gICAgICBjYW5jZWxIb3Jpem9udGFsKCk7XG4gICAgfVxuICAgIGdyaWRzdGVyRWxlbWVudC5zY3JvbGxMZWZ0ICs9IHNpZ24gKiBzY3JvbGxTcGVlZDtcbiAgICBjbGllbnRYICs9IHNpZ24gKiBzY3JvbGxTcGVlZDtcbiAgICBjYWxjdWxhdGVJdGVtUG9zaXRpb24oe2NsaWVudFg6IGNsaWVudFgsIGNsaWVudFk6IGxhc3RNb3VzZS5jbGllbnRZfSk7XG4gIH0sIGludGVydmFsRHVyYXRpb24pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FuY2VsU2Nyb2xsKCkge1xuICBjYW5jZWxIb3Jpem9udGFsKCk7XG4gIGNhbmNlbFZlcnRpY2FsKCk7XG4gIGdyaWRzdGVyRWxlbWVudCA9IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gY2FuY2VsSG9yaXpvbnRhbCgpIHtcbiAgY2FuY2VsRSgpO1xuICBjYW5jZWxXKCk7XG59XG5cbmZ1bmN0aW9uIGNhbmNlbFZlcnRpY2FsKCkge1xuICBjYW5jZWxOKCk7XG4gIGNhbmNlbFMoKTtcbn1cblxuZnVuY3Rpb24gY2FuY2VsRSgpIHtcbiAgaWYgKGludGVydmFsRSkge1xuICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxFKTtcbiAgICBpbnRlcnZhbEUgPSAwO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbmNlbFcoKSB7XG4gIGlmIChpbnRlcnZhbFcpIHtcbiAgICBjbGVhckludGVydmFsKGludGVydmFsVyk7XG4gICAgaW50ZXJ2YWxXID0gMDtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYW5jZWxTKCkge1xuICBpZiAoaW50ZXJ2YWxTKSB7XG4gICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbFMpO1xuICAgIGludGVydmFsUyA9IDA7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FuY2VsTigpIHtcbiAgaWYgKGludGVydmFsTikge1xuICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxOKTtcbiAgICBpbnRlcnZhbE4gPSAwO1xuICB9XG59XG4iLCJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge0dyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZX0gZnJvbSAnLi9ncmlkc3Rlckl0ZW1Db21wb25lbnQuaW50ZXJmYWNlJztcbmltcG9ydCB7R3JpZHN0ZXJDb21wb25lbnRJbnRlcmZhY2V9IGZyb20gJy4vZ3JpZHN0ZXIuaW50ZXJmYWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEdyaWRzdGVyUHVzaCB7XG4gIHB1YmxpYyBmcm9tU291dGg6IHN0cmluZztcbiAgcHVibGljIGZyb21Ob3J0aDogc3RyaW5nO1xuICBwdWJsaWMgZnJvbUVhc3Q6IHN0cmluZztcbiAgcHVibGljIGZyb21XZXN0OiBzdHJpbmc7XG4gIHByaXZhdGUgcHVzaGVkSXRlbXM6IEFycmF5PEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZT47XG4gIHByaXZhdGUgcHVzaGVkSXRlbXNUZW1wOiBBcnJheTxHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2U+O1xuICBwcml2YXRlIHB1c2hlZEl0ZW1zVGVtcFBhdGg6IEFycmF5PEFycmF5PHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfT4+O1xuICBwcml2YXRlIHB1c2hlZEl0ZW1zUGF0aDogQXJyYXk8QXJyYXk8eyB4OiBudW1iZXIsIHk6IG51bWJlciB9Pj47XG4gIHByaXZhdGUgZ3JpZHN0ZXJJdGVtOiBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2U7XG4gIHByaXZhdGUgZ3JpZHN0ZXI6IEdyaWRzdGVyQ29tcG9uZW50SW50ZXJmYWNlO1xuICBwcml2YXRlIHB1c2hlZEl0ZW1zT3JkZXI6IEFycmF5PEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZT47XG4gIHByaXZhdGUgdHJ5UGF0dGVybjoge1xuICAgIGZyb21FYXN0OiBBcnJheTxGdW5jdGlvbj4sXG4gICAgZnJvbVdlc3Q6IEFycmF5PEZ1bmN0aW9uPixcbiAgICBmcm9tTm9ydGg6IEFycmF5PEZ1bmN0aW9uPixcbiAgICBmcm9tU291dGg6IEFycmF5PEZ1bmN0aW9uPixcbiAgICBba2V5OiBzdHJpbmddOiBBcnJheTxGdW5jdGlvbj5cbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihncmlkc3Rlckl0ZW06IEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZSkge1xuICAgIHRoaXMucHVzaGVkSXRlbXMgPSBbXTtcbiAgICB0aGlzLnB1c2hlZEl0ZW1zVGVtcCA9IFtdO1xuICAgIHRoaXMucHVzaGVkSXRlbXNUZW1wUGF0aCA9IFtdO1xuICAgIHRoaXMucHVzaGVkSXRlbXNQYXRoID0gW107XG4gICAgdGhpcy5ncmlkc3Rlckl0ZW0gPSBncmlkc3Rlckl0ZW07XG4gICAgdGhpcy5ncmlkc3RlciA9IGdyaWRzdGVySXRlbS5ncmlkc3RlcjtcbiAgICB0aGlzLnRyeVBhdHRlcm4gPSB7XG4gICAgICBmcm9tRWFzdDogW3RoaXMudHJ5V2VzdCwgdGhpcy50cnlTb3V0aCwgdGhpcy50cnlOb3J0aCwgdGhpcy50cnlFYXN0XSxcbiAgICAgIGZyb21XZXN0OiBbdGhpcy50cnlFYXN0LCB0aGlzLnRyeVNvdXRoLCB0aGlzLnRyeU5vcnRoLCB0aGlzLnRyeVdlc3RdLFxuICAgICAgZnJvbU5vcnRoOiBbdGhpcy50cnlTb3V0aCwgdGhpcy50cnlFYXN0LCB0aGlzLnRyeVdlc3QsIHRoaXMudHJ5Tm9ydGhdLFxuICAgICAgZnJvbVNvdXRoOiBbdGhpcy50cnlOb3J0aCwgdGhpcy50cnlFYXN0LCB0aGlzLnRyeVdlc3QsIHRoaXMudHJ5U291dGhdXG4gICAgfTtcbiAgICB0aGlzLmZyb21Tb3V0aCA9ICdmcm9tU291dGgnO1xuICAgIHRoaXMuZnJvbU5vcnRoID0gJ2Zyb21Ob3J0aCc7XG4gICAgdGhpcy5mcm9tRWFzdCA9ICdmcm9tRWFzdCc7XG4gICAgdGhpcy5mcm9tV2VzdCA9ICdmcm9tV2VzdCc7XG4gIH1cblxuICBkZXN0cm95KCk6IHZvaWQge1xuICAgIGRlbGV0ZSB0aGlzLmdyaWRzdGVyO1xuICAgIGRlbGV0ZSB0aGlzLmdyaWRzdGVySXRlbTtcbiAgfVxuXG4gIHB1c2hJdGVtcyhkaXJlY3Rpb246IHN0cmluZywgZGlzYWJsZT86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5ncmlkc3Rlci4kb3B0aW9ucy5wdXNoSXRlbXMgJiYgIWRpc2FibGUpIHtcbiAgICAgIHRoaXMucHVzaGVkSXRlbXNPcmRlciA9IFtdO1xuICAgICAgY29uc3QgcHVzaGVkID0gdGhpcy5wdXNoKHRoaXMuZ3JpZHN0ZXJJdGVtLCBkaXJlY3Rpb24pO1xuICAgICAgaWYgKCFwdXNoZWQpIHtcbiAgICAgICAgdGhpcy5yZXN0b3JlVGVtcEl0ZW1zKCk7XG4gICAgICB9XG4gICAgICB0aGlzLnB1c2hlZEl0ZW1zT3JkZXIgPSBbXTtcbiAgICAgIHRoaXMucHVzaGVkSXRlbXNUZW1wID0gW107XG4gICAgICB0aGlzLnB1c2hlZEl0ZW1zVGVtcFBhdGggPSBbXTtcbiAgICAgIHJldHVybiBwdXNoZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXN0b3JlVGVtcEl0ZW1zKCk6IHZvaWQge1xuICAgIGxldCBpID0gdGhpcy5wdXNoZWRJdGVtc1RlbXAubGVuZ3RoIC0gMTtcbiAgICBmb3IgKDsgaSA+IC0xOyBpLS0pIHtcbiAgICAgIHRoaXMucmVtb3ZlRnJvbVRlbXBQdXNoZWQodGhpcy5wdXNoZWRJdGVtc1RlbXBbaV0pO1xuICAgIH1cbiAgfVxuXG4gIHJlc3RvcmVJdGVtcygpOiB2b2lkIHtcbiAgICBsZXQgaSA9IDA7XG4gICAgY29uc3QgbDogbnVtYmVyID0gdGhpcy5wdXNoZWRJdGVtcy5sZW5ndGg7XG4gICAgbGV0IHB1c2hlZEl0ZW06IEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZTtcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xuICAgICAgcHVzaGVkSXRlbSA9IHRoaXMucHVzaGVkSXRlbXNbaV07XG4gICAgICBwdXNoZWRJdGVtLiRpdGVtLnggPSBwdXNoZWRJdGVtLml0ZW0ueCB8fCAwO1xuICAgICAgcHVzaGVkSXRlbS4kaXRlbS55ID0gcHVzaGVkSXRlbS5pdGVtLnkgfHwgMDtcbiAgICAgIHB1c2hlZEl0ZW0uc2V0U2l6ZSgpO1xuICAgIH1cbiAgICB0aGlzLnB1c2hlZEl0ZW1zID0gW107XG4gICAgdGhpcy5wdXNoZWRJdGVtc1BhdGggPSBbXTtcbiAgfVxuXG4gIHNldFB1c2hlZEl0ZW1zKCkge1xuICAgIGxldCBpID0gMDtcbiAgICBjb25zdCBsOiBudW1iZXIgPSB0aGlzLnB1c2hlZEl0ZW1zLmxlbmd0aDtcbiAgICBsZXQgcHVzaGVkSXRlbTogR3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlO1xuICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBwdXNoZWRJdGVtID0gdGhpcy5wdXNoZWRJdGVtc1tpXTtcbiAgICAgIHB1c2hlZEl0ZW0uY2hlY2tJdGVtQ2hhbmdlcyhwdXNoZWRJdGVtLiRpdGVtLCBwdXNoZWRJdGVtLml0ZW0pO1xuICAgIH1cbiAgICB0aGlzLnB1c2hlZEl0ZW1zID0gW107XG4gICAgdGhpcy5wdXNoZWRJdGVtc1BhdGggPSBbXTtcbiAgfVxuXG4gIGNoZWNrUHVzaEJhY2soKTogdm9pZCB7XG4gICAgbGV0IGk6IG51bWJlciA9IHRoaXMucHVzaGVkSXRlbXMubGVuZ3RoIC0gMTtcbiAgICBsZXQgY2hhbmdlID0gZmFsc2U7XG4gICAgZm9yICg7IGkgPiAtMTsgaS0tKSB7XG4gICAgICBpZiAodGhpcy5jaGVja1B1c2hlZEl0ZW0odGhpcy5wdXNoZWRJdGVtc1tpXSwgaSkpIHtcbiAgICAgICAgY2hhbmdlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGNoYW5nZSkge1xuICAgICAgdGhpcy5jaGVja1B1c2hCYWNrKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBwdXNoKGdyaWRzdGVySXRlbTogR3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlLCBkaXJlY3Rpb246IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmdyaWRzdGVyLmNoZWNrR3JpZENvbGxpc2lvbihncmlkc3Rlckl0ZW0uJGl0ZW0pKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChkaXJlY3Rpb24gPT09ICcnKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IGE6IEFycmF5PEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZT4gPSB0aGlzLmdyaWRzdGVyLmZpbmRJdGVtc1dpdGhJdGVtKGdyaWRzdGVySXRlbS4kaXRlbSk7XG4gICAgbGV0IGkgPSBhLmxlbmd0aCAtIDEsIGl0ZW1Db2xsaXNpb246IEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZTtcbiAgICBsZXQgbWFrZVB1c2ggPSB0cnVlO1xuICAgIGNvbnN0IGI6IEFycmF5PEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZT4gPSBbXTtcbiAgICBmb3IgKDsgaSA+IC0xOyBpLS0pIHtcbiAgICAgIGl0ZW1Db2xsaXNpb24gPSBhW2ldO1xuICAgICAgaWYgKGl0ZW1Db2xsaXNpb24gPT09IHRoaXMuZ3JpZHN0ZXJJdGVtKSB7XG4gICAgICAgIG1ha2VQdXNoID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgaWYgKCFpdGVtQ29sbGlzaW9uLmNhbkJlRHJhZ2dlZCgpKSB7XG4gICAgICAgIG1ha2VQdXNoID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY29uc3QgY29tcGFyZSA9IHRoaXMucHVzaGVkSXRlbXNUZW1wLmZpbmQoKGVsOiBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2UpID0+IHtcbiAgICAgICAgcmV0dXJuIGVsLiRpdGVtLnggPT09IGl0ZW1Db2xsaXNpb24uJGl0ZW0ueCAmJiBlbC4kaXRlbS55ID09PSBpdGVtQ29sbGlzaW9uLiRpdGVtLnk7XG4gICAgICB9KTtcbiAgICAgIGlmIChjb21wYXJlKSB7XG4gICAgICAgIG1ha2VQdXNoID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMudHJ5UGF0dGVybltkaXJlY3Rpb25dWzBdLmNhbGwodGhpcywgaXRlbUNvbGxpc2lvbiwgZ3JpZHN0ZXJJdGVtKSkge1xuICAgICAgICB0aGlzLnB1c2hlZEl0ZW1zT3JkZXIucHVzaChpdGVtQ29sbGlzaW9uKTtcbiAgICAgICAgYi5wdXNoKGl0ZW1Db2xsaXNpb24pO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnRyeVBhdHRlcm5bZGlyZWN0aW9uXVsxXS5jYWxsKHRoaXMsIGl0ZW1Db2xsaXNpb24sIGdyaWRzdGVySXRlbSkpIHtcbiAgICAgICAgdGhpcy5wdXNoZWRJdGVtc09yZGVyLnB1c2goaXRlbUNvbGxpc2lvbik7XG4gICAgICAgIGIucHVzaChpdGVtQ29sbGlzaW9uKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy50cnlQYXR0ZXJuW2RpcmVjdGlvbl1bMl0uY2FsbCh0aGlzLCBpdGVtQ29sbGlzaW9uLCBncmlkc3Rlckl0ZW0pKSB7XG4gICAgICAgIHRoaXMucHVzaGVkSXRlbXNPcmRlci5wdXNoKGl0ZW1Db2xsaXNpb24pO1xuICAgICAgICBiLnB1c2goaXRlbUNvbGxpc2lvbik7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMudHJ5UGF0dGVybltkaXJlY3Rpb25dWzNdLmNhbGwodGhpcywgaXRlbUNvbGxpc2lvbiwgZ3JpZHN0ZXJJdGVtKSkge1xuICAgICAgICB0aGlzLnB1c2hlZEl0ZW1zT3JkZXIucHVzaChpdGVtQ29sbGlzaW9uKTtcbiAgICAgICAgYi5wdXNoKGl0ZW1Db2xsaXNpb24pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWFrZVB1c2ggPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghbWFrZVB1c2gpIHtcbiAgICAgIGkgPSB0aGlzLnB1c2hlZEl0ZW1zT3JkZXIubGFzdEluZGV4T2YoYlswXSk7XG4gICAgICBpZiAoaSA+IC0xKSB7XG4gICAgICAgIGxldCBqID0gdGhpcy5wdXNoZWRJdGVtc09yZGVyLmxlbmd0aCAtIDE7XG4gICAgICAgIGZvciAoOyBqID49IGk7IGotLSkge1xuICAgICAgICAgIGl0ZW1Db2xsaXNpb24gPSB0aGlzLnB1c2hlZEl0ZW1zT3JkZXJbal07XG4gICAgICAgICAgdGhpcy5wdXNoZWRJdGVtc09yZGVyLnBvcCgpO1xuICAgICAgICAgIHRoaXMucmVtb3ZlRnJvbVRlbXBQdXNoZWQoaXRlbUNvbGxpc2lvbik7XG4gICAgICAgICAgdGhpcy5yZW1vdmVGcm9tUHVzaGVkSXRlbShpdGVtQ29sbGlzaW9uKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWFrZVB1c2g7XG4gIH1cblxuICBwcml2YXRlIHRyeVNvdXRoKGdyaWRzdGVySXRlbUNvbGxpZGU6IEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZSwgZ3JpZHN0ZXJJdGVtOiBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2UpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMucHVzaERpcmVjdGlvbnMuc291dGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5hZGRUb1RlbXBQdXNoZWQoZ3JpZHN0ZXJJdGVtQ29sbGlkZSk7XG4gICAgZ3JpZHN0ZXJJdGVtQ29sbGlkZS4kaXRlbS55ID0gZ3JpZHN0ZXJJdGVtLiRpdGVtLnkgKyBncmlkc3Rlckl0ZW0uJGl0ZW0ucm93cztcbiAgICBpZiAodGhpcy5wdXNoKGdyaWRzdGVySXRlbUNvbGxpZGUsIHRoaXMuZnJvbU5vcnRoKSkge1xuICAgICAgZ3JpZHN0ZXJJdGVtQ29sbGlkZS5zZXRTaXplKCk7XG4gICAgICB0aGlzLmFkZFRvUHVzaGVkKGdyaWRzdGVySXRlbUNvbGxpZGUpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVtb3ZlRnJvbVRlbXBQdXNoZWQoZ3JpZHN0ZXJJdGVtQ29sbGlkZSk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgdHJ5Tm9ydGgoZ3JpZHN0ZXJJdGVtQ29sbGlkZTogR3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlLCBncmlkc3Rlckl0ZW06IEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZSk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5ncmlkc3Rlci4kb3B0aW9ucy5wdXNoRGlyZWN0aW9ucy5ub3J0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLmFkZFRvVGVtcFB1c2hlZChncmlkc3Rlckl0ZW1Db2xsaWRlKTtcbiAgICBncmlkc3Rlckl0ZW1Db2xsaWRlLiRpdGVtLnkgPSBncmlkc3Rlckl0ZW0uJGl0ZW0ueSAtIGdyaWRzdGVySXRlbUNvbGxpZGUuJGl0ZW0ucm93cztcbiAgICBpZiAodGhpcy5wdXNoKGdyaWRzdGVySXRlbUNvbGxpZGUsIHRoaXMuZnJvbVNvdXRoKSkge1xuICAgICAgZ3JpZHN0ZXJJdGVtQ29sbGlkZS5zZXRTaXplKCk7XG4gICAgICB0aGlzLmFkZFRvUHVzaGVkKGdyaWRzdGVySXRlbUNvbGxpZGUpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVtb3ZlRnJvbVRlbXBQdXNoZWQoZ3JpZHN0ZXJJdGVtQ29sbGlkZSk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgdHJ5RWFzdChncmlkc3Rlckl0ZW1Db2xsaWRlOiBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2UsIGdyaWRzdGVySXRlbTogR3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmdyaWRzdGVyLiRvcHRpb25zLnB1c2hEaXJlY3Rpb25zLmVhc3QpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5hZGRUb1RlbXBQdXNoZWQoZ3JpZHN0ZXJJdGVtQ29sbGlkZSk7XG4gICAgZ3JpZHN0ZXJJdGVtQ29sbGlkZS4kaXRlbS54ID0gZ3JpZHN0ZXJJdGVtLiRpdGVtLnggKyBncmlkc3Rlckl0ZW0uJGl0ZW0uY29scztcbiAgICBpZiAodGhpcy5wdXNoKGdyaWRzdGVySXRlbUNvbGxpZGUsIHRoaXMuZnJvbVdlc3QpKSB7XG4gICAgICBncmlkc3Rlckl0ZW1Db2xsaWRlLnNldFNpemUoKTtcbiAgICAgIHRoaXMuYWRkVG9QdXNoZWQoZ3JpZHN0ZXJJdGVtQ29sbGlkZSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW1vdmVGcm9tVGVtcFB1c2hlZChncmlkc3Rlckl0ZW1Db2xsaWRlKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSB0cnlXZXN0KGdyaWRzdGVySXRlbUNvbGxpZGU6IEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZSwgZ3JpZHN0ZXJJdGVtOiBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2UpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMucHVzaERpcmVjdGlvbnMud2VzdCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLmFkZFRvVGVtcFB1c2hlZChncmlkc3Rlckl0ZW1Db2xsaWRlKTtcbiAgICBncmlkc3Rlckl0ZW1Db2xsaWRlLiRpdGVtLnggPSBncmlkc3Rlckl0ZW0uJGl0ZW0ueCAtIGdyaWRzdGVySXRlbUNvbGxpZGUuJGl0ZW0uY29scztcbiAgICBpZiAodGhpcy5wdXNoKGdyaWRzdGVySXRlbUNvbGxpZGUsIHRoaXMuZnJvbUVhc3QpKSB7XG4gICAgICBncmlkc3Rlckl0ZW1Db2xsaWRlLnNldFNpemUoKTtcbiAgICAgIHRoaXMuYWRkVG9QdXNoZWQoZ3JpZHN0ZXJJdGVtQ29sbGlkZSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW1vdmVGcm9tVGVtcFB1c2hlZChncmlkc3Rlckl0ZW1Db2xsaWRlKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBhZGRUb1RlbXBQdXNoZWQoZ3JpZHN0ZXJJdGVtOiBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2UpOiB2b2lkIHtcbiAgICBsZXQgaSA9IHRoaXMucHVzaGVkSXRlbXNUZW1wLmluZGV4T2YoZ3JpZHN0ZXJJdGVtKTtcbiAgICBpZiAoaSA9PT0gLTEpIHtcbiAgICAgIGkgPSB0aGlzLnB1c2hlZEl0ZW1zVGVtcC5wdXNoKGdyaWRzdGVySXRlbSkgLSAxO1xuICAgICAgdGhpcy5wdXNoZWRJdGVtc1RlbXBQYXRoW2ldID0gW107XG4gICAgfVxuICAgIHRoaXMucHVzaGVkSXRlbXNUZW1wUGF0aFtpXS5wdXNoKHt4OiBncmlkc3Rlckl0ZW0uJGl0ZW0ueCwgeTogZ3JpZHN0ZXJJdGVtLiRpdGVtLnl9KTtcbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlRnJvbVRlbXBQdXNoZWQoZ3JpZHN0ZXJJdGVtOiBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2UpOiB2b2lkIHtcbiAgICBjb25zdCBpID0gdGhpcy5wdXNoZWRJdGVtc1RlbXAuaW5kZXhPZihncmlkc3Rlckl0ZW0pO1xuICAgIGNvbnN0IHRlbXBQb3NpdGlvbiA9IHRoaXMucHVzaGVkSXRlbXNUZW1wUGF0aFtpXS5wb3AoKTtcbiAgICBpZiAoIXRlbXBQb3NpdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBncmlkc3Rlckl0ZW0uJGl0ZW0ueCA9IHRlbXBQb3NpdGlvbi54O1xuICAgIGdyaWRzdGVySXRlbS4kaXRlbS55ID0gdGVtcFBvc2l0aW9uLnk7XG4gICAgZ3JpZHN0ZXJJdGVtLnNldFNpemUoKTtcbiAgICBpZiAoIXRoaXMucHVzaGVkSXRlbXNUZW1wUGF0aFtpXS5sZW5ndGgpIHtcbiAgICAgIHRoaXMucHVzaGVkSXRlbXNUZW1wLnNwbGljZShpLCAxKTtcbiAgICAgIHRoaXMucHVzaGVkSXRlbXNUZW1wUGF0aC5zcGxpY2UoaSwgMSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhZGRUb1B1c2hlZChncmlkc3Rlckl0ZW06IEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZSk6IHZvaWQge1xuICAgIGlmICh0aGlzLnB1c2hlZEl0ZW1zLmluZGV4T2YoZ3JpZHN0ZXJJdGVtKSA8IDApIHtcbiAgICAgIHRoaXMucHVzaGVkSXRlbXMucHVzaChncmlkc3Rlckl0ZW0pO1xuICAgICAgdGhpcy5wdXNoZWRJdGVtc1BhdGgucHVzaChbe3g6IGdyaWRzdGVySXRlbS5pdGVtLnggfHwgMCwgeTogZ3JpZHN0ZXJJdGVtLml0ZW0ueSB8fCAwfSxcbiAgICAgICAge3g6IGdyaWRzdGVySXRlbS4kaXRlbS54LCB5OiBncmlkc3Rlckl0ZW0uJGl0ZW0ueX1dKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaSA9IHRoaXMucHVzaGVkSXRlbXMuaW5kZXhPZihncmlkc3Rlckl0ZW0pO1xuICAgICAgdGhpcy5wdXNoZWRJdGVtc1BhdGhbaV0ucHVzaCh7eDogZ3JpZHN0ZXJJdGVtLiRpdGVtLngsIHk6IGdyaWRzdGVySXRlbS4kaXRlbS55fSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmVGcm9tUHVzaGVkKGk6IG51bWJlcik6IHZvaWQge1xuICAgIGlmIChpID4gLTEpIHtcbiAgICAgIHRoaXMucHVzaGVkSXRlbXMuc3BsaWNlKGksIDEpO1xuICAgICAgdGhpcy5wdXNoZWRJdGVtc1BhdGguc3BsaWNlKGksIDEpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlRnJvbVB1c2hlZEl0ZW0oZ3JpZHN0ZXJJdGVtOiBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2UpOiB2b2lkIHtcbiAgICBjb25zdCBpID0gdGhpcy5wdXNoZWRJdGVtcy5pbmRleE9mKGdyaWRzdGVySXRlbSk7XG4gICAgaWYgKGkgPiAtMSkge1xuICAgICAgdGhpcy5wdXNoZWRJdGVtc1BhdGhbaV0ucG9wKCk7XG4gICAgICBpZiAoIXRoaXMucHVzaGVkSXRlbXNQYXRoLmxlbmd0aCkge1xuICAgICAgICB0aGlzLnB1c2hlZEl0ZW1zLnNwbGljZShpLCAxKTtcbiAgICAgICAgdGhpcy5wdXNoZWRJdGVtc1BhdGguc3BsaWNlKGksIDEpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tQdXNoZWRJdGVtKHB1c2hlZEl0ZW06IEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZSwgaTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgY29uc3QgcGF0aCA9IHRoaXMucHVzaGVkSXRlbXNQYXRoW2ldO1xuICAgIGxldCBqID0gcGF0aC5sZW5ndGggLSAyO1xuICAgIGxldCBsYXN0UG9zaXRpb24sIHgsIHk7XG4gICAgbGV0IGNoYW5nZSA9IGZhbHNlO1xuICAgIGZvciAoOyBqID4gLTE7IGotLSkge1xuICAgICAgbGFzdFBvc2l0aW9uID0gcGF0aFtqXTtcbiAgICAgIHggPSBwdXNoZWRJdGVtLiRpdGVtLng7XG4gICAgICB5ID0gcHVzaGVkSXRlbS4kaXRlbS55O1xuICAgICAgcHVzaGVkSXRlbS4kaXRlbS54ID0gbGFzdFBvc2l0aW9uLng7XG4gICAgICBwdXNoZWRJdGVtLiRpdGVtLnkgPSBsYXN0UG9zaXRpb24ueTtcbiAgICAgIGlmICghdGhpcy5ncmlkc3Rlci5maW5kSXRlbVdpdGhJdGVtKHB1c2hlZEl0ZW0uJGl0ZW0pKSB7XG4gICAgICAgIHB1c2hlZEl0ZW0uc2V0U2l6ZSgpO1xuICAgICAgICBwYXRoLnNwbGljZShqICsgMSwgcGF0aC5sZW5ndGggLSBqIC0gMSk7XG4gICAgICAgIGNoYW5nZSA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwdXNoZWRJdGVtLiRpdGVtLnggPSB4O1xuICAgICAgICBwdXNoZWRJdGVtLiRpdGVtLnkgPSB5O1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAocGF0aC5sZW5ndGggPCAyKSB7XG4gICAgICB0aGlzLnJlbW92ZUZyb21QdXNoZWQoaSk7XG4gICAgfVxuICAgIHJldHVybiBjaGFuZ2U7XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBHcmlkc3RlclN3YXAgfSBmcm9tICcuL2dyaWRzdGVyU3dhcC5zZXJ2aWNlJztcbmltcG9ydCB7IGNhbmNlbFNjcm9sbCwgc2Nyb2xsIH0gZnJvbSAnLi9ncmlkc3RlclNjcm9sbC5zZXJ2aWNlJztcbmltcG9ydCB7IEdyaWRzdGVyUHVzaCB9IGZyb20gJy4vZ3JpZHN0ZXJQdXNoLnNlcnZpY2UnO1xuaW1wb3J0IHsgR3JpZHN0ZXJVdGlscyB9IGZyb20gJy4vZ3JpZHN0ZXJVdGlscy5zZXJ2aWNlJztcbmltcG9ydCB7IEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZSB9IGZyb20gJy4vZ3JpZHN0ZXJJdGVtQ29tcG9uZW50LmludGVyZmFjZSc7XG5pbXBvcnQgeyBHcmlkc3RlckNvbXBvbmVudEludGVyZmFjZSB9IGZyb20gJy4vZ3JpZHN0ZXIuaW50ZXJmYWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEdyaWRzdGVyRHJhZ2dhYmxlIHtcbiAgZ3JpZHN0ZXJJdGVtOiBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2U7XG4gIGdyaWRzdGVyOiBHcmlkc3RlckNvbXBvbmVudEludGVyZmFjZTtcbiAgbGFzdE1vdXNlOiB7XG4gICAgY2xpZW50WDogbnVtYmVyLFxuICAgIGNsaWVudFk6IG51bWJlclxuICB9O1xuICBvZmZzZXRMZWZ0OiBudW1iZXI7XG4gIG9mZnNldFRvcDogbnVtYmVyO1xuICBtYXJnaW46IG51bWJlcjtcbiAgZGlmZlRvcDogbnVtYmVyO1xuICBkaWZmTGVmdDogbnVtYmVyO1xuICB0b3A6IG51bWJlcjtcbiAgbGVmdDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgd2lkdGg6IG51bWJlcjtcbiAgcG9zaXRpb25YOiBudW1iZXI7XG4gIHBvc2l0aW9uWTogbnVtYmVyO1xuICBwb3NpdGlvblhCYWNrdXA6IG51bWJlcjtcbiAgcG9zaXRpb25ZQmFja3VwOiBudW1iZXI7XG4gIGVuYWJsZWQ6IGJvb2xlYW47XG4gIGRyYWdTdGFydEZ1bmN0aW9uOiAoZXZlbnQ6IGFueSkgPT4gdm9pZDtcbiAgZHJhZ0Z1bmN0aW9uOiAoZXZlbnQ6IGFueSkgPT4gdm9pZDtcbiAgZHJhZ1N0b3BGdW5jdGlvbjogKGV2ZW50OiBhbnkpID0+IHZvaWQ7XG4gIG1vdXNlbW92ZTogRnVuY3Rpb247XG4gIG1vdXNldXA6IEZ1bmN0aW9uO1xuICBtb3VzZWxlYXZlOiBGdW5jdGlvbjtcbiAgY2FuY2VsT25CbHVyOiBGdW5jdGlvbjtcbiAgdG91Y2htb3ZlOiBGdW5jdGlvbjtcbiAgdG91Y2hlbmQ6IEZ1bmN0aW9uO1xuICB0b3VjaGNhbmNlbDogRnVuY3Rpb247XG4gIG1vdXNlZG93bjogRnVuY3Rpb247XG4gIHRvdWNoc3RhcnQ6IEZ1bmN0aW9uO1xuICBwdXNoOiBHcmlkc3RlclB1c2g7XG4gIHN3YXA6IEdyaWRzdGVyU3dhcDtcbiAgcGF0aDogQXJyYXk8eyB4OiBudW1iZXIsIHk6IG51bWJlciB9PjtcbiAgY29sbGlzaW9uOiBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2UgfCBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoZ3JpZHN0ZXJJdGVtOiBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2UsIGdyaWRzdGVyOiBHcmlkc3RlckNvbXBvbmVudEludGVyZmFjZSwgcHJpdmF0ZSB6b25lOiBOZ1pvbmUpIHtcbiAgICB0aGlzLmdyaWRzdGVySXRlbSA9IGdyaWRzdGVySXRlbTtcbiAgICB0aGlzLmdyaWRzdGVyID0gZ3JpZHN0ZXI7XG4gICAgdGhpcy5sYXN0TW91c2UgPSB7XG4gICAgICBjbGllbnRYOiAwLFxuICAgICAgY2xpZW50WTogMFxuICAgIH07XG4gICAgdGhpcy5wYXRoID0gW107XG4gIH1cblxuICBkZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmdyaWRzdGVyLnByZXZpZXdTdHlsZSkge1xuICAgICAgdGhpcy5ncmlkc3Rlci5wcmV2aWV3U3R5bGUodHJ1ZSk7XG4gICAgfVxuICAgIGRlbGV0ZSB0aGlzLmdyaWRzdGVySXRlbTtcbiAgICBkZWxldGUgdGhpcy5ncmlkc3RlcjtcbiAgICBkZWxldGUgdGhpcy5jb2xsaXNpb247XG4gICAgaWYgKHRoaXMubW91c2Vkb3duKSB7XG4gICAgICB0aGlzLm1vdXNlZG93bigpO1xuICAgICAgdGhpcy50b3VjaHN0YXJ0KCk7XG4gICAgfVxuICB9XG5cbiAgZHJhZ1N0YXJ0KGU6IGFueSk6IHZvaWQge1xuICAgIHN3aXRjaCAoZS53aGljaCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICAvLyBsZWZ0IG1vdXNlIGJ1dHRvblxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgLy8gcmlnaHQgb3IgbWlkZGxlIG1vdXNlIGJ1dHRvblxuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZ3JpZHN0ZXIub3B0aW9ucy5kcmFnZ2FibGUgJiYgdGhpcy5ncmlkc3Rlci5vcHRpb25zLmRyYWdnYWJsZS5zdGFydCkge1xuICAgICAgdGhpcy5ncmlkc3Rlci5vcHRpb25zLmRyYWdnYWJsZS5zdGFydCh0aGlzLmdyaWRzdGVySXRlbS5pdGVtLCB0aGlzLmdyaWRzdGVySXRlbSwgZSk7XG4gICAgfVxuXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5kcmFnRnVuY3Rpb24gPSB0aGlzLmRyYWdNb3ZlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kcmFnU3RvcEZ1bmN0aW9uID0gdGhpcy5kcmFnU3RvcC5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHRoaXMubW91c2Vtb3ZlID0gdGhpcy5ncmlkc3Rlckl0ZW0ucmVuZGVyZXIubGlzdGVuKCdkb2N1bWVudCcsICdtb3VzZW1vdmUnLCB0aGlzLmRyYWdGdW5jdGlvbik7XG4gICAgICB0aGlzLnRvdWNobW92ZSA9IHRoaXMuZ3JpZHN0ZXIucmVuZGVyZXIubGlzdGVuKHRoaXMuZ3JpZHN0ZXIuZWwsICd0b3VjaG1vdmUnLCB0aGlzLmRyYWdGdW5jdGlvbik7XG4gICAgfSk7XG4gICAgdGhpcy5tb3VzZXVwID0gdGhpcy5ncmlkc3Rlckl0ZW0ucmVuZGVyZXIubGlzdGVuKCdkb2N1bWVudCcsICdtb3VzZXVwJywgdGhpcy5kcmFnU3RvcEZ1bmN0aW9uKTtcbiAgICB0aGlzLm1vdXNlbGVhdmUgPSB0aGlzLmdyaWRzdGVySXRlbS5yZW5kZXJlci5saXN0ZW4oJ2RvY3VtZW50JywgJ21vdXNlbGVhdmUnLCB0aGlzLmRyYWdTdG9wRnVuY3Rpb24pO1xuICAgIHRoaXMuY2FuY2VsT25CbHVyID0gdGhpcy5ncmlkc3Rlckl0ZW0ucmVuZGVyZXIubGlzdGVuKCd3aW5kb3cnLCAnYmx1cicsIHRoaXMuZHJhZ1N0b3BGdW5jdGlvbik7XG4gICAgdGhpcy50b3VjaGVuZCA9IHRoaXMuZ3JpZHN0ZXJJdGVtLnJlbmRlcmVyLmxpc3RlbignZG9jdW1lbnQnLCAndG91Y2hlbmQnLCB0aGlzLmRyYWdTdG9wRnVuY3Rpb24pO1xuICAgIHRoaXMudG91Y2hjYW5jZWwgPSB0aGlzLmdyaWRzdGVySXRlbS5yZW5kZXJlci5saXN0ZW4oJ2RvY3VtZW50JywgJ3RvdWNoY2FuY2VsJywgdGhpcy5kcmFnU3RvcEZ1bmN0aW9uKTtcbiAgICB0aGlzLmdyaWRzdGVySXRlbS5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmdyaWRzdGVySXRlbS5lbCwgJ2dyaWRzdGVyLWl0ZW0tbW92aW5nJyk7XG4gICAgdGhpcy5tYXJnaW4gPSB0aGlzLmdyaWRzdGVyLiRvcHRpb25zLm1hcmdpbjtcbiAgICB0aGlzLm9mZnNldExlZnQgPSB0aGlzLmdyaWRzdGVyLmVsLnNjcm9sbExlZnQgLSB0aGlzLmdyaWRzdGVyLmVsLm9mZnNldExlZnQ7XG4gICAgdGhpcy5vZmZzZXRUb3AgPSB0aGlzLmdyaWRzdGVyLmVsLnNjcm9sbFRvcCAtIHRoaXMuZ3JpZHN0ZXIuZWwub2Zmc2V0VG9wO1xuICAgIHRoaXMubGVmdCA9IHRoaXMuZ3JpZHN0ZXJJdGVtLmxlZnQgLSB0aGlzLm1hcmdpbjtcbiAgICB0aGlzLnRvcCA9IHRoaXMuZ3JpZHN0ZXJJdGVtLnRvcCAtIHRoaXMubWFyZ2luO1xuICAgIHRoaXMud2lkdGggPSB0aGlzLmdyaWRzdGVySXRlbS53aWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IHRoaXMuZ3JpZHN0ZXJJdGVtLmhlaWdodDtcbiAgICB0aGlzLmRpZmZMZWZ0ID0gZS5jbGllbnRYICsgdGhpcy5vZmZzZXRMZWZ0IC0gdGhpcy5tYXJnaW4gLSB0aGlzLmxlZnQ7XG4gICAgdGhpcy5kaWZmVG9wID0gZS5jbGllbnRZICsgdGhpcy5vZmZzZXRUb3AgLSB0aGlzLm1hcmdpbiAtIHRoaXMudG9wO1xuICAgIHRoaXMuZ3JpZHN0ZXIubW92aW5nSXRlbSA9IHRoaXMuZ3JpZHN0ZXJJdGVtLiRpdGVtO1xuICAgIHRoaXMuZ3JpZHN0ZXIucHJldmlld1N0eWxlKHRydWUpO1xuICAgIHRoaXMucHVzaCA9IG5ldyBHcmlkc3RlclB1c2godGhpcy5ncmlkc3Rlckl0ZW0pO1xuICAgIHRoaXMuc3dhcCA9IG5ldyBHcmlkc3RlclN3YXAodGhpcy5ncmlkc3Rlckl0ZW0pO1xuICAgIHRoaXMuZ3JpZHN0ZXIuZHJhZ0luUHJvZ3Jlc3MgPSB0cnVlO1xuICAgIHRoaXMuZ3JpZHN0ZXIudXBkYXRlR3JpZCgpO1xuICAgIHRoaXMucGF0aC5wdXNoKHsgeDogdGhpcy5ncmlkc3Rlckl0ZW0uaXRlbS54IHx8IDAsIHk6IHRoaXMuZ3JpZHN0ZXJJdGVtLml0ZW0ueSB8fCAwIH0pO1xuICB9XG5cbiAgZHJhZ01vdmUoZTogYW55KTogdm9pZCB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgR3JpZHN0ZXJVdGlscy5jaGVja1RvdWNoRXZlbnQoZSk7XG4gICAgdGhpcy5vZmZzZXRMZWZ0ID0gdGhpcy5ncmlkc3Rlci5lbC5zY3JvbGxMZWZ0IC0gdGhpcy5ncmlkc3Rlci5lbC5vZmZzZXRMZWZ0O1xuICAgIHRoaXMub2Zmc2V0VG9wID0gdGhpcy5ncmlkc3Rlci5lbC5zY3JvbGxUb3AgLSB0aGlzLmdyaWRzdGVyLmVsLm9mZnNldFRvcDtcbiAgICBzY3JvbGwodGhpcy5ncmlkc3RlciwgdGhpcy5sZWZ0LCB0aGlzLnRvcCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIGUsIHRoaXMubGFzdE1vdXNlLFxuICAgICAgdGhpcy5jYWxjdWxhdGVJdGVtUG9zaXRpb25Gcm9tTW91c2VQb3NpdGlvbi5iaW5kKHRoaXMpKTtcblxuICAgIHRoaXMuY2FsY3VsYXRlSXRlbVBvc2l0aW9uRnJvbU1vdXNlUG9zaXRpb24oZSk7XG4gIH1cblxuICBjYWxjdWxhdGVJdGVtUG9zaXRpb25Gcm9tTW91c2VQb3NpdGlvbihlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmxlZnQgPSBlLmNsaWVudFggKyB0aGlzLm9mZnNldExlZnQgLSB0aGlzLmRpZmZMZWZ0O1xuICAgIHRoaXMudG9wID0gZS5jbGllbnRZICsgdGhpcy5vZmZzZXRUb3AgLSB0aGlzLmRpZmZUb3A7XG4gICAgdGhpcy5jYWxjdWxhdGVJdGVtUG9zaXRpb24oKTtcbiAgICB0aGlzLmxhc3RNb3VzZS5jbGllbnRYID0gZS5jbGllbnRYO1xuICAgIHRoaXMubGFzdE1vdXNlLmNsaWVudFkgPSBlLmNsaWVudFk7XG4gICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICB0aGlzLmdyaWRzdGVyLnVwZGF0ZUdyaWQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGRyYWdTdG9wKGU6IGFueSk6IHZvaWQge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY2FuY2VsU2Nyb2xsKCk7XG4gICAgdGhpcy5jYW5jZWxPbkJsdXIoKTtcbiAgICB0aGlzLm1vdXNlbW92ZSgpO1xuICAgIHRoaXMubW91c2V1cCgpO1xuICAgIHRoaXMubW91c2VsZWF2ZSgpO1xuICAgIHRoaXMudG91Y2htb3ZlKCk7XG4gICAgdGhpcy50b3VjaGVuZCgpO1xuICAgIHRoaXMudG91Y2hjYW5jZWwoKTtcbiAgICB0aGlzLmdyaWRzdGVySXRlbS5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmdyaWRzdGVySXRlbS5lbCwgJ2dyaWRzdGVyLWl0ZW0tbW92aW5nJyk7XG4gICAgdGhpcy5ncmlkc3Rlci5kcmFnSW5Qcm9ncmVzcyA9IGZhbHNlO1xuICAgIHRoaXMuZ3JpZHN0ZXIudXBkYXRlR3JpZCgpO1xuICAgIHRoaXMucGF0aCA9IFtdO1xuICAgIGlmICh0aGlzLmdyaWRzdGVyLm9wdGlvbnMuZHJhZ2dhYmxlICYmIHRoaXMuZ3JpZHN0ZXIub3B0aW9ucy5kcmFnZ2FibGUuc3RvcCkge1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKHRoaXMuZ3JpZHN0ZXIub3B0aW9ucy5kcmFnZ2FibGUuc3RvcCh0aGlzLmdyaWRzdGVySXRlbS5pdGVtLCB0aGlzLmdyaWRzdGVySXRlbSwgZSkpXG4gICAgICAgIC50aGVuKHRoaXMubWFrZURyYWcuYmluZCh0aGlzKSwgdGhpcy5jYW5jZWxEcmFnLmJpbmQodGhpcykpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1ha2VEcmFnKCk7XG4gICAgfVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZ3JpZHN0ZXIpIHtcbiAgICAgICAgdGhpcy5ncmlkc3Rlci5tb3ZpbmdJdGVtID0gbnVsbDtcbiAgICAgICAgdGhpcy5ncmlkc3Rlci5wcmV2aWV3U3R5bGUodHJ1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjYW5jZWxEcmFnKCkge1xuICAgIHRoaXMuZ3JpZHN0ZXJJdGVtLiRpdGVtLnggPSB0aGlzLmdyaWRzdGVySXRlbS5pdGVtLnggfHwgMDtcbiAgICB0aGlzLmdyaWRzdGVySXRlbS4kaXRlbS55ID0gdGhpcy5ncmlkc3Rlckl0ZW0uaXRlbS55IHx8IDA7XG4gICAgdGhpcy5ncmlkc3Rlckl0ZW0uc2V0U2l6ZSgpO1xuICAgIGlmICh0aGlzLnB1c2gpIHtcbiAgICAgIHRoaXMucHVzaC5yZXN0b3JlSXRlbXMoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc3dhcCkge1xuICAgICAgdGhpcy5zd2FwLnJlc3RvcmVTd2FwSXRlbSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5wdXNoKSB7XG4gICAgICB0aGlzLnB1c2guZGVzdHJveSgpO1xuICAgICAgZGVsZXRlIHRoaXMucHVzaDtcbiAgICB9XG4gICAgaWYgKHRoaXMuc3dhcCkge1xuICAgICAgdGhpcy5zd2FwLmRlc3Ryb3koKTtcbiAgICAgIGRlbGV0ZSB0aGlzLnN3YXA7XG4gICAgfVxuICB9XG5cbiAgbWFrZURyYWcoKSB7XG4gICAgaWYgKHRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMuZHJhZ2dhYmxlLmRyb3BPdmVySXRlbXMgJiYgdGhpcy5ncmlkc3Rlci5vcHRpb25zLmRyYWdnYWJsZVxuICAgICAgJiYgdGhpcy5ncmlkc3Rlci5vcHRpb25zLmRyYWdnYWJsZS5kcm9wT3Zlckl0ZW1zQ2FsbGJhY2tcbiAgICAgICYmIHRoaXMuY29sbGlzaW9uICYmIHRoaXMuY29sbGlzaW9uICE9PSB0cnVlICYmIHRoaXMuY29sbGlzaW9uLiRpdGVtKSB7XG4gICAgICB0aGlzLmdyaWRzdGVyLm9wdGlvbnMuZHJhZ2dhYmxlLmRyb3BPdmVySXRlbXNDYWxsYmFjayh0aGlzLmdyaWRzdGVySXRlbS5pdGVtLCB0aGlzLmNvbGxpc2lvbi5pdGVtLCB0aGlzLmdyaWRzdGVyKTtcbiAgICB9XG4gICAgdGhpcy5jb2xsaXNpb24gPSBmYWxzZTtcbiAgICB0aGlzLmdyaWRzdGVySXRlbS5zZXRTaXplKCk7XG4gICAgdGhpcy5ncmlkc3Rlckl0ZW0uY2hlY2tJdGVtQ2hhbmdlcyh0aGlzLmdyaWRzdGVySXRlbS4kaXRlbSwgdGhpcy5ncmlkc3Rlckl0ZW0uaXRlbSk7XG4gICAgaWYgKHRoaXMucHVzaCkge1xuICAgICAgdGhpcy5wdXNoLnNldFB1c2hlZEl0ZW1zKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnN3YXApIHtcbiAgICAgIHRoaXMuc3dhcC5zZXRTd2FwSXRlbSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5wdXNoKSB7XG4gICAgICB0aGlzLnB1c2guZGVzdHJveSgpO1xuICAgICAgZGVsZXRlIHRoaXMucHVzaDtcbiAgICB9XG4gICAgaWYgKHRoaXMuc3dhcCkge1xuICAgICAgdGhpcy5zd2FwLmRlc3Ryb3koKTtcbiAgICAgIGRlbGV0ZSB0aGlzLnN3YXA7XG4gICAgfVxuICB9XG5cbiAgY2FsY3VsYXRlSXRlbVBvc2l0aW9uKCkge1xuICAgIHRoaXMuZ3JpZHN0ZXIubW92aW5nSXRlbSA9IHRoaXMuZ3JpZHN0ZXJJdGVtLiRpdGVtO1xuICAgIHRoaXMucG9zaXRpb25YID0gdGhpcy5ncmlkc3Rlci5waXhlbHNUb1Bvc2l0aW9uWCh0aGlzLmxlZnQsIE1hdGgucm91bmQpO1xuICAgIHRoaXMucG9zaXRpb25ZID0gdGhpcy5ncmlkc3Rlci5waXhlbHNUb1Bvc2l0aW9uWSh0aGlzLnRvcCwgTWF0aC5yb3VuZCk7XG4gICAgdGhpcy5wb3NpdGlvblhCYWNrdXAgPSB0aGlzLmdyaWRzdGVySXRlbS4kaXRlbS54O1xuICAgIHRoaXMucG9zaXRpb25ZQmFja3VwID0gdGhpcy5ncmlkc3Rlckl0ZW0uJGl0ZW0ueTtcbiAgICB0aGlzLmdyaWRzdGVySXRlbS4kaXRlbS54ID0gdGhpcy5wb3NpdGlvblg7XG4gICAgaWYgKHRoaXMuZ3JpZHN0ZXIuY2hlY2tHcmlkQ29sbGlzaW9uKHRoaXMuZ3JpZHN0ZXJJdGVtLiRpdGVtKSkge1xuICAgICAgdGhpcy5ncmlkc3Rlckl0ZW0uJGl0ZW0ueCA9IHRoaXMucG9zaXRpb25YQmFja3VwO1xuICAgIH1cbiAgICB0aGlzLmdyaWRzdGVySXRlbS4kaXRlbS55ID0gdGhpcy5wb3NpdGlvblk7XG4gICAgaWYgKHRoaXMuZ3JpZHN0ZXIuY2hlY2tHcmlkQ29sbGlzaW9uKHRoaXMuZ3JpZHN0ZXJJdGVtLiRpdGVtKSkge1xuICAgICAgdGhpcy5ncmlkc3Rlckl0ZW0uJGl0ZW0ueSA9IHRoaXMucG9zaXRpb25ZQmFja3VwO1xuICAgIH1cbiAgICBjb25zdCB0cmFuc2Zvcm0gPSAndHJhbnNsYXRlKCcgKyB0aGlzLmxlZnQgKyAncHgsICcgKyB0aGlzLnRvcCArICdweCknO1xuICAgIHRoaXMuZ3JpZHN0ZXJJdGVtLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZ3JpZHN0ZXJJdGVtLmVsLCAndHJhbnNmb3JtJywgdHJhbnNmb3JtKTtcblxuICAgIGlmICh0aGlzLnBvc2l0aW9uWEJhY2t1cCAhPT0gdGhpcy5ncmlkc3Rlckl0ZW0uJGl0ZW0ueCB8fCB0aGlzLnBvc2l0aW9uWUJhY2t1cCAhPT0gdGhpcy5ncmlkc3Rlckl0ZW0uJGl0ZW0ueSkge1xuICAgICAgY29uc3QgbGFzdFBvc2l0aW9uID0gdGhpcy5wYXRoW3RoaXMucGF0aC5sZW5ndGggLSAxXTtcbiAgICAgIGxldCBkaXJlY3Rpb24gPSAnJztcbiAgICAgIGlmIChsYXN0UG9zaXRpb24ueCA8IHRoaXMuZ3JpZHN0ZXJJdGVtLiRpdGVtLngpIHtcbiAgICAgICAgZGlyZWN0aW9uID0gdGhpcy5wdXNoLmZyb21XZXN0O1xuICAgICAgfSBlbHNlIGlmIChsYXN0UG9zaXRpb24ueCA+IHRoaXMuZ3JpZHN0ZXJJdGVtLiRpdGVtLngpIHtcbiAgICAgICAgZGlyZWN0aW9uID0gdGhpcy5wdXNoLmZyb21FYXN0O1xuICAgICAgfSBlbHNlIGlmIChsYXN0UG9zaXRpb24ueSA8IHRoaXMuZ3JpZHN0ZXJJdGVtLiRpdGVtLnkpIHtcbiAgICAgICAgZGlyZWN0aW9uID0gdGhpcy5wdXNoLmZyb21Ob3J0aDtcbiAgICAgIH0gZWxzZSBpZiAobGFzdFBvc2l0aW9uLnkgPiB0aGlzLmdyaWRzdGVySXRlbS4kaXRlbS55KSB7XG4gICAgICAgIGRpcmVjdGlvbiA9IHRoaXMucHVzaC5mcm9tU291dGg7XG4gICAgICB9XG4gICAgICB0aGlzLnB1c2gucHVzaEl0ZW1zKGRpcmVjdGlvbiwgdGhpcy5ncmlkc3Rlci4kb3B0aW9ucy5kaXNhYmxlUHVzaE9uRHJhZyk7XG4gICAgICB0aGlzLnN3YXAuc3dhcEl0ZW1zKCk7XG4gICAgICB0aGlzLmNvbGxpc2lvbiA9IHRoaXMuZ3JpZHN0ZXIuY2hlY2tDb2xsaXNpb24odGhpcy5ncmlkc3Rlckl0ZW0uJGl0ZW0pO1xuICAgICAgaWYgKHRoaXMuY29sbGlzaW9uKSB7XG4gICAgICAgIHRoaXMuZ3JpZHN0ZXJJdGVtLiRpdGVtLnggPSB0aGlzLnBvc2l0aW9uWEJhY2t1cDtcbiAgICAgICAgdGhpcy5ncmlkc3Rlckl0ZW0uJGl0ZW0ueSA9IHRoaXMucG9zaXRpb25ZQmFja3VwO1xuICAgICAgICBpZiAodGhpcy5ncmlkc3Rlci4kb3B0aW9ucy5kcmFnZ2FibGUuZHJvcE92ZXJJdGVtcyAmJiB0aGlzLmNvbGxpc2lvbiAhPT0gdHJ1ZSAmJiB0aGlzLmNvbGxpc2lvbi4kaXRlbSkge1xuICAgICAgICAgIHRoaXMuZ3JpZHN0ZXIubW92aW5nSXRlbSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucGF0aC5wdXNoKHsgeDogdGhpcy5ncmlkc3Rlckl0ZW0uJGl0ZW0ueCwgeTogdGhpcy5ncmlkc3Rlckl0ZW0uJGl0ZW0ueSB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMucHVzaC5jaGVja1B1c2hCYWNrKCk7XG4gICAgfVxuICAgIHRoaXMuZ3JpZHN0ZXIucHJldmlld1N0eWxlKHRydWUpO1xuICB9XG5cbiAgdG9nZ2xlKCkge1xuICAgIGNvbnN0IGVuYWJsZURyYWcgPSB0aGlzLmdyaWRzdGVySXRlbS5jYW5CZURyYWdnZWQoKTtcbiAgICBpZiAoIXRoaXMuZW5hYmxlZCAmJiBlbmFibGVEcmFnKSB7XG4gICAgICB0aGlzLmVuYWJsZWQgPSAhdGhpcy5lbmFibGVkO1xuICAgICAgdGhpcy5kcmFnU3RhcnRGdW5jdGlvbiA9IHRoaXMuZHJhZ1N0YXJ0RGVsYXkuYmluZCh0aGlzKTtcbiAgICAgIHRoaXMubW91c2Vkb3duID0gdGhpcy5ncmlkc3Rlckl0ZW0ucmVuZGVyZXIubGlzdGVuKHRoaXMuZ3JpZHN0ZXJJdGVtLmVsLCAnbW91c2Vkb3duJywgdGhpcy5kcmFnU3RhcnRGdW5jdGlvbik7XG4gICAgICB0aGlzLnRvdWNoc3RhcnQgPSB0aGlzLmdyaWRzdGVySXRlbS5yZW5kZXJlci5saXN0ZW4odGhpcy5ncmlkc3Rlckl0ZW0uZWwsICd0b3VjaHN0YXJ0JywgdGhpcy5kcmFnU3RhcnRGdW5jdGlvbik7XG4gICAgfSBlbHNlIGlmICh0aGlzLmVuYWJsZWQgJiYgIWVuYWJsZURyYWcpIHtcbiAgICAgIHRoaXMuZW5hYmxlZCA9ICF0aGlzLmVuYWJsZWQ7XG4gICAgICB0aGlzLm1vdXNlZG93bigpO1xuICAgICAgdGhpcy50b3VjaHN0YXJ0KCk7XG4gICAgfVxuICB9XG5cbiAgZHJhZ1N0YXJ0RGVsYXkoZTogYW55KTogdm9pZCB7XG4gICAgaWYgKGUudGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnY2xhc3MnKSAmJiBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykuc3BsaXQoJyAnKS5pbmRleE9mKCdncmlkc3Rlci1pdGVtLXJlc2l6YWJsZS1oYW5kbGVyJykgPiAtMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoR3JpZHN0ZXJVdGlscy5jaGVja0NvbnRlbnRDbGFzc0ZvckV2ZW50KHRoaXMuZ3JpZHN0ZXIsIGUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIEdyaWRzdGVyVXRpbHMuY2hlY2tUb3VjaEV2ZW50KGUpO1xuICAgIGlmICghdGhpcy5ncmlkc3Rlci4kb3B0aW9ucy5kcmFnZ2FibGUuZGVsYXlTdGFydCkge1xuICAgICAgdGhpcy5kcmFnU3RhcnQoZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuZHJhZ1N0YXJ0KGUpO1xuICAgICAgY2FuY2VsRHJhZygpO1xuICAgIH0sIHRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMuZHJhZ2dhYmxlLmRlbGF5U3RhcnQpO1xuICAgIGNvbnN0IGNhbmNlbE1vdXNlID0gdGhpcy5ncmlkc3Rlckl0ZW0ucmVuZGVyZXIubGlzdGVuKCdkb2N1bWVudCcsICdtb3VzZXVwJywgY2FuY2VsRHJhZyk7XG4gICAgY29uc3QgY2FuY2VsTW91c2VMZWF2ZSA9IHRoaXMuZ3JpZHN0ZXJJdGVtLnJlbmRlcmVyLmxpc3RlbignZG9jdW1lbnQnLCAnbW91c2VsZWF2ZScsIGNhbmNlbERyYWcpO1xuICAgIGNvbnN0IGNhbmNlbE9uQmx1ciA9IHRoaXMuZ3JpZHN0ZXJJdGVtLnJlbmRlcmVyLmxpc3Rlbignd2luZG93JywgJ2JsdXInLCBjYW5jZWxEcmFnKTtcbiAgICBjb25zdCBjYW5jZWxUb3VjaE1vdmUgPSB0aGlzLmdyaWRzdGVySXRlbS5yZW5kZXJlci5saXN0ZW4oJ2RvY3VtZW50JywgJ3RvdWNobW92ZScsIGNhbmNlbE1vdmUpO1xuICAgIGNvbnN0IGNhbmNlbFRvdWNoRW5kID0gdGhpcy5ncmlkc3Rlckl0ZW0ucmVuZGVyZXIubGlzdGVuKCdkb2N1bWVudCcsICd0b3VjaGVuZCcsIGNhbmNlbERyYWcpO1xuICAgIGNvbnN0IGNhbmNlbFRvdWNoQ2FuY2VsID0gdGhpcy5ncmlkc3Rlckl0ZW0ucmVuZGVyZXIubGlzdGVuKCdkb2N1bWVudCcsICd0b3VjaGNhbmNlbCcsIGNhbmNlbERyYWcpO1xuXG4gICAgZnVuY3Rpb24gY2FuY2VsTW92ZShldmVudE1vdmU6IGFueSkge1xuICAgICAgR3JpZHN0ZXJVdGlscy5jaGVja1RvdWNoRXZlbnQoZXZlbnRNb3ZlKTtcbiAgICAgIGlmIChNYXRoLmFicyhldmVudE1vdmUuY2xpZW50WCAtIGUuY2xpZW50WCkgPiA5IHx8IE1hdGguYWJzKGV2ZW50TW92ZS5jbGllbnRZIC0gZS5jbGllbnRZKSA+IDkpIHtcbiAgICAgICAgY2FuY2VsRHJhZygpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhbmNlbERyYWcoKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICBjYW5jZWxPbkJsdXIoKTtcbiAgICAgIGNhbmNlbE1vdXNlKCk7XG4gICAgICBjYW5jZWxNb3VzZUxlYXZlKCk7XG4gICAgICBjYW5jZWxUb3VjaE1vdmUoKTtcbiAgICAgIGNhbmNlbFRvdWNoRW5kKCk7XG4gICAgICBjYW5jZWxUb3VjaENhbmNlbCgpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtHcmlkc3Rlckl0ZW19IGZyb20gJy4vZ3JpZHN0ZXJJdGVtLmludGVyZmFjZSc7XG5pbXBvcnQge0dyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZX0gZnJvbSAnLi9ncmlkc3Rlckl0ZW1Db21wb25lbnQuaW50ZXJmYWNlJztcbmltcG9ydCB7R3JpZHN0ZXJDb21wb25lbnRJbnRlcmZhY2V9IGZyb20gJy4vZ3JpZHN0ZXIuaW50ZXJmYWNlJztcbmltcG9ydCB7R3JpZHN0ZXJDb21wb25lbnR9IGZyb20gJy4vZ3JpZHN0ZXIuY29tcG9uZW50JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEdyaWRzdGVyUHVzaFJlc2l6ZSB7XG4gIHB1YmxpYyBmcm9tU291dGg6IHN0cmluZztcbiAgcHVibGljIGZyb21Ob3J0aDogc3RyaW5nO1xuICBwdWJsaWMgZnJvbUVhc3Q6IHN0cmluZztcbiAgcHVibGljIGZyb21XZXN0OiBzdHJpbmc7XG4gIHByaXZhdGUgcHVzaGVkSXRlbXM6IEFycmF5PEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZT47XG4gIHByaXZhdGUgcHVzaGVkSXRlbXNQYXRoOiBBcnJheTxBcnJheTxHcmlkc3Rlckl0ZW0+PjtcbiAgcHJpdmF0ZSBncmlkc3Rlckl0ZW06IEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZTtcbiAgcHJpdmF0ZSBncmlkc3RlcjogR3JpZHN0ZXJDb21wb25lbnRJbnRlcmZhY2U7XG4gIHByaXZhdGUgdHJ5UGF0dGVybjoge1xuICAgIGZyb21FYXN0OiBGdW5jdGlvbixcbiAgICBmcm9tV2VzdDogRnVuY3Rpb24sXG4gICAgZnJvbU5vcnRoOiBGdW5jdGlvbixcbiAgICBmcm9tU291dGg6IEZ1bmN0aW9uLFxuICAgIFtrZXk6IHN0cmluZ106IEZ1bmN0aW9uXG4gIH07XG5cbiAgY29uc3RydWN0b3IoZ3JpZHN0ZXJJdGVtOiBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2UpIHtcbiAgICB0aGlzLnB1c2hlZEl0ZW1zID0gW107XG4gICAgdGhpcy5wdXNoZWRJdGVtc1BhdGggPSBbXTtcbiAgICB0aGlzLmdyaWRzdGVySXRlbSA9IGdyaWRzdGVySXRlbTtcbiAgICB0aGlzLmdyaWRzdGVyID0gZ3JpZHN0ZXJJdGVtLmdyaWRzdGVyO1xuICAgIHRoaXMudHJ5UGF0dGVybiA9IHtcbiAgICAgIGZyb21FYXN0OiB0aGlzLnRyeVdlc3QsXG4gICAgICBmcm9tV2VzdDogdGhpcy50cnlFYXN0LFxuICAgICAgZnJvbU5vcnRoOiB0aGlzLnRyeVNvdXRoLFxuICAgICAgZnJvbVNvdXRoOiB0aGlzLnRyeU5vcnRoXG4gICAgfTtcbiAgICB0aGlzLmZyb21Tb3V0aCA9ICdmcm9tU291dGgnO1xuICAgIHRoaXMuZnJvbU5vcnRoID0gJ2Zyb21Ob3J0aCc7XG4gICAgdGhpcy5mcm9tRWFzdCA9ICdmcm9tRWFzdCc7XG4gICAgdGhpcy5mcm9tV2VzdCA9ICdmcm9tV2VzdCc7XG4gIH1cblxuICBkZXN0cm95KCk6IHZvaWQge1xuICAgIGRlbGV0ZSB0aGlzLmdyaWRzdGVyO1xuICAgIGRlbGV0ZSB0aGlzLmdyaWRzdGVySXRlbTtcbiAgfVxuXG4gIHB1c2hJdGVtcyhkaXJlY3Rpb246IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmdyaWRzdGVyLiRvcHRpb25zLnB1c2hSZXNpemVJdGVtcykge1xuICAgICAgcmV0dXJuIHRoaXMucHVzaCh0aGlzLmdyaWRzdGVySXRlbSwgZGlyZWN0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJlc3RvcmVJdGVtcygpOiB2b2lkIHtcbiAgICBsZXQgaSA9IDA7XG4gICAgY29uc3QgbDogbnVtYmVyID0gdGhpcy5wdXNoZWRJdGVtcy5sZW5ndGg7XG4gICAgbGV0IHB1c2hlZEl0ZW06IEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZTtcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xuICAgICAgcHVzaGVkSXRlbSA9IHRoaXMucHVzaGVkSXRlbXNbaV07XG4gICAgICBwdXNoZWRJdGVtLiRpdGVtLnggPSBwdXNoZWRJdGVtLml0ZW0ueCB8fCAwO1xuICAgICAgcHVzaGVkSXRlbS4kaXRlbS55ID0gcHVzaGVkSXRlbS5pdGVtLnkgfHwgMDtcbiAgICAgIHB1c2hlZEl0ZW0uJGl0ZW0uY29scyA9IHB1c2hlZEl0ZW0uaXRlbS5jb2xzIHx8IDE7XG4gICAgICBwdXNoZWRJdGVtLiRpdGVtLnJvdyA9IHB1c2hlZEl0ZW0uaXRlbS5yb3cgfHwgMTtcbiAgICAgIHB1c2hlZEl0ZW0uc2V0U2l6ZSgpO1xuICAgIH1cbiAgICB0aGlzLnB1c2hlZEl0ZW1zID0gW107XG4gICAgdGhpcy5wdXNoZWRJdGVtc1BhdGggPSBbXTtcbiAgfVxuXG4gIHNldFB1c2hlZEl0ZW1zKCkge1xuICAgIGxldCBpID0gMDtcbiAgICBjb25zdCBsOiBudW1iZXIgPSB0aGlzLnB1c2hlZEl0ZW1zLmxlbmd0aDtcbiAgICBsZXQgcHVzaGVkSXRlbTogR3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlO1xuICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBwdXNoZWRJdGVtID0gdGhpcy5wdXNoZWRJdGVtc1tpXTtcbiAgICAgIHB1c2hlZEl0ZW0uY2hlY2tJdGVtQ2hhbmdlcyhwdXNoZWRJdGVtLiRpdGVtLCBwdXNoZWRJdGVtLml0ZW0pO1xuICAgIH1cbiAgICB0aGlzLnB1c2hlZEl0ZW1zID0gW107XG4gICAgdGhpcy5wdXNoZWRJdGVtc1BhdGggPSBbXTtcbiAgfVxuXG4gIGNoZWNrUHVzaEJhY2soKTogdm9pZCB7XG4gICAgbGV0IGk6IG51bWJlciA9IHRoaXMucHVzaGVkSXRlbXMubGVuZ3RoIC0gMTtcbiAgICBsZXQgY2hhbmdlID0gZmFsc2U7XG4gICAgZm9yICg7IGkgPiAtMTsgaS0tKSB7XG4gICAgICBpZiAodGhpcy5jaGVja1B1c2hlZEl0ZW0odGhpcy5wdXNoZWRJdGVtc1tpXSwgaSkpIHtcbiAgICAgICAgY2hhbmdlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGNoYW5nZSkge1xuICAgICAgdGhpcy5jaGVja1B1c2hCYWNrKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBwdXNoKGdyaWRzdGVySXRlbTogR3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlLCBkaXJlY3Rpb246IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGdyaWRzdGVySXRlbUNvbGxpc2lvbjogYW55ID0gdGhpcy5ncmlkc3Rlci5jaGVja0NvbGxpc2lvbihncmlkc3Rlckl0ZW0uJGl0ZW0pO1xuICAgIGlmIChncmlkc3Rlckl0ZW1Db2xsaXNpb24gJiYgZ3JpZHN0ZXJJdGVtQ29sbGlzaW9uICE9PSB0cnVlICYmXG4gICAgICBncmlkc3Rlckl0ZW1Db2xsaXNpb24gIT09IHRoaXMuZ3JpZHN0ZXJJdGVtICYmIGdyaWRzdGVySXRlbUNvbGxpc2lvbi5jYW5CZVJlc2l6ZWQoKSkge1xuICAgICAgaWYgKHRoaXMudHJ5UGF0dGVybltkaXJlY3Rpb25dLmNhbGwodGhpcywgZ3JpZHN0ZXJJdGVtQ29sbGlzaW9uLCBncmlkc3Rlckl0ZW0sIGRpcmVjdGlvbikpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChncmlkc3Rlckl0ZW1Db2xsaXNpb24gPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSB0cnlTb3V0aChncmlkc3Rlckl0ZW1Db2xsaWRlOiBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2UsIGdyaWRzdGVySXRlbTogR3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlLFxuICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgY29uc3QgYmFja1VwWSA9IGdyaWRzdGVySXRlbUNvbGxpZGUuJGl0ZW0ueTtcbiAgICBjb25zdCBiYWNrVXBSb3dzID0gZ3JpZHN0ZXJJdGVtQ29sbGlkZS4kaXRlbS5yb3dzO1xuICAgIGdyaWRzdGVySXRlbUNvbGxpZGUuJGl0ZW0ueSA9IGdyaWRzdGVySXRlbS4kaXRlbS55ICsgZ3JpZHN0ZXJJdGVtLiRpdGVtLnJvd3M7XG4gICAgZ3JpZHN0ZXJJdGVtQ29sbGlkZS4kaXRlbS5yb3dzID0gYmFja1VwUm93cyArIGJhY2tVcFkgLSBncmlkc3Rlckl0ZW1Db2xsaWRlLiRpdGVtLnk7XG4gICAgaWYgKCFHcmlkc3RlckNvbXBvbmVudC5jaGVja0NvbGxpc2lvblR3b0l0ZW1zKGdyaWRzdGVySXRlbUNvbGxpZGUuJGl0ZW0sIGdyaWRzdGVySXRlbS4kaXRlbSlcbiAgICAgICYmICF0aGlzLmdyaWRzdGVyLmNoZWNrR3JpZENvbGxpc2lvbihncmlkc3Rlckl0ZW1Db2xsaWRlLiRpdGVtKSkge1xuICAgICAgZ3JpZHN0ZXJJdGVtQ29sbGlkZS5zZXRTaXplKCk7XG4gICAgICB0aGlzLmFkZFRvUHVzaGVkKGdyaWRzdGVySXRlbUNvbGxpZGUpO1xuICAgICAgdGhpcy5wdXNoKGdyaWRzdGVySXRlbSwgZGlyZWN0aW9uKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBncmlkc3Rlckl0ZW1Db2xsaWRlLiRpdGVtLnkgPSBiYWNrVXBZO1xuICAgICAgZ3JpZHN0ZXJJdGVtQ29sbGlkZS4kaXRlbS5yb3dzID0gYmFja1VwUm93cztcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSB0cnlOb3J0aChncmlkc3Rlckl0ZW1Db2xsaWRlOiBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2UsIGdyaWRzdGVySXRlbTogR3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlLFxuICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgY29uc3QgYmFja1VwUm93cyA9IGdyaWRzdGVySXRlbUNvbGxpZGUuJGl0ZW0ucm93cztcbiAgICBncmlkc3Rlckl0ZW1Db2xsaWRlLiRpdGVtLnJvd3MgPSBncmlkc3Rlckl0ZW0uJGl0ZW0ueSAtIGdyaWRzdGVySXRlbUNvbGxpZGUuJGl0ZW0ueTtcbiAgICBpZiAoIUdyaWRzdGVyQ29tcG9uZW50LmNoZWNrQ29sbGlzaW9uVHdvSXRlbXMoZ3JpZHN0ZXJJdGVtQ29sbGlkZS4kaXRlbSwgZ3JpZHN0ZXJJdGVtLiRpdGVtKVxuICAgICAgJiYgIXRoaXMuZ3JpZHN0ZXIuY2hlY2tHcmlkQ29sbGlzaW9uKGdyaWRzdGVySXRlbUNvbGxpZGUuJGl0ZW0pKSB7XG4gICAgICBncmlkc3Rlckl0ZW1Db2xsaWRlLnNldFNpemUoKTtcbiAgICAgIHRoaXMuYWRkVG9QdXNoZWQoZ3JpZHN0ZXJJdGVtQ29sbGlkZSk7XG4gICAgICB0aGlzLnB1c2goZ3JpZHN0ZXJJdGVtLCBkaXJlY3Rpb24pO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdyaWRzdGVySXRlbUNvbGxpZGUuJGl0ZW0ucm93cyA9IGJhY2tVcFJvd3M7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgdHJ5RWFzdChncmlkc3Rlckl0ZW1Db2xsaWRlOiBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2UsIGdyaWRzdGVySXRlbTogR3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlLFxuICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBjb25zdCBiYWNrVXBYID0gZ3JpZHN0ZXJJdGVtQ29sbGlkZS4kaXRlbS54O1xuICAgIGNvbnN0IGJhY2tVcENvbHMgPSBncmlkc3Rlckl0ZW1Db2xsaWRlLiRpdGVtLmNvbHM7XG4gICAgZ3JpZHN0ZXJJdGVtQ29sbGlkZS4kaXRlbS54ID0gZ3JpZHN0ZXJJdGVtLiRpdGVtLnggKyBncmlkc3Rlckl0ZW0uJGl0ZW0uY29scztcbiAgICBncmlkc3Rlckl0ZW1Db2xsaWRlLiRpdGVtLmNvbHMgPSBiYWNrVXBDb2xzICsgYmFja1VwWCAtIGdyaWRzdGVySXRlbUNvbGxpZGUuJGl0ZW0ueDtcbiAgICBpZiAoIUdyaWRzdGVyQ29tcG9uZW50LmNoZWNrQ29sbGlzaW9uVHdvSXRlbXMoZ3JpZHN0ZXJJdGVtQ29sbGlkZS4kaXRlbSwgZ3JpZHN0ZXJJdGVtLiRpdGVtKVxuICAgICAgJiYgIXRoaXMuZ3JpZHN0ZXIuY2hlY2tHcmlkQ29sbGlzaW9uKGdyaWRzdGVySXRlbUNvbGxpZGUuJGl0ZW0pKSB7XG4gICAgICBncmlkc3Rlckl0ZW1Db2xsaWRlLnNldFNpemUoKTtcbiAgICAgIHRoaXMuYWRkVG9QdXNoZWQoZ3JpZHN0ZXJJdGVtQ29sbGlkZSk7XG4gICAgICB0aGlzLnB1c2goZ3JpZHN0ZXJJdGVtLCBkaXJlY3Rpb24pO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdyaWRzdGVySXRlbUNvbGxpZGUuJGl0ZW0ueCA9IGJhY2tVcFg7XG4gICAgICBncmlkc3Rlckl0ZW1Db2xsaWRlLiRpdGVtLmNvbHMgPSBiYWNrVXBDb2xzO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIHRyeVdlc3QoZ3JpZHN0ZXJJdGVtQ29sbGlkZTogR3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlLCBncmlkc3Rlckl0ZW06IEdyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZSxcbiAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgY29uc3QgYmFja1VwQ29scyA9IGdyaWRzdGVySXRlbUNvbGxpZGUuJGl0ZW0uY29scztcbiAgICBncmlkc3Rlckl0ZW1Db2xsaWRlLiRpdGVtLmNvbHMgPSBncmlkc3Rlckl0ZW0uJGl0ZW0ueCAtIGdyaWRzdGVySXRlbUNvbGxpZGUuJGl0ZW0ueDtcbiAgICBpZiAoIUdyaWRzdGVyQ29tcG9uZW50LmNoZWNrQ29sbGlzaW9uVHdvSXRlbXMoZ3JpZHN0ZXJJdGVtQ29sbGlkZS4kaXRlbSwgZ3JpZHN0ZXJJdGVtLiRpdGVtKVxuICAgICAgJiYgIXRoaXMuZ3JpZHN0ZXIuY2hlY2tHcmlkQ29sbGlzaW9uKGdyaWRzdGVySXRlbUNvbGxpZGUuJGl0ZW0pKSB7XG4gICAgICBncmlkc3Rlckl0ZW1Db2xsaWRlLnNldFNpemUoKTtcbiAgICAgIHRoaXMuYWRkVG9QdXNoZWQoZ3JpZHN0ZXJJdGVtQ29sbGlkZSk7XG4gICAgICB0aGlzLnB1c2goZ3JpZHN0ZXJJdGVtLCBkaXJlY3Rpb24pO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdyaWRzdGVySXRlbUNvbGxpZGUuJGl0ZW0uY29scyA9IGJhY2tVcENvbHM7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgYWRkVG9QdXNoZWQoZ3JpZHN0ZXJJdGVtOiBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2UpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wdXNoZWRJdGVtcy5pbmRleE9mKGdyaWRzdGVySXRlbSkgPCAwKSB7XG4gICAgICB0aGlzLnB1c2hlZEl0ZW1zLnB1c2goZ3JpZHN0ZXJJdGVtKTtcbiAgICAgIHRoaXMucHVzaGVkSXRlbXNQYXRoLnB1c2goW1xuICAgICAgICB7XG4gICAgICAgICAgeDogZ3JpZHN0ZXJJdGVtLml0ZW0ueCB8fCAwLFxuICAgICAgICAgIHk6IGdyaWRzdGVySXRlbS5pdGVtLnkgfHwgMCxcbiAgICAgICAgICBjb2xzOiBncmlkc3Rlckl0ZW0uaXRlbS5jb2xzIHx8IDAsXG4gICAgICAgICAgcm93czogZ3JpZHN0ZXJJdGVtLml0ZW0ucm93cyB8fCAwXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB4OiBncmlkc3Rlckl0ZW0uJGl0ZW0ueCxcbiAgICAgICAgICB5OiBncmlkc3Rlckl0ZW0uJGl0ZW0ueSxcbiAgICAgICAgICBjb2xzOiBncmlkc3Rlckl0ZW0uJGl0ZW0uY29scyxcbiAgICAgICAgICByb3dzOiBncmlkc3Rlckl0ZW0uJGl0ZW0ucm93c1xuICAgICAgICB9XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGkgPSB0aGlzLnB1c2hlZEl0ZW1zLmluZGV4T2YoZ3JpZHN0ZXJJdGVtKTtcbiAgICAgIHRoaXMucHVzaGVkSXRlbXNQYXRoW2ldLnB1c2goXG4gICAgICAgIHtcbiAgICAgICAgICB4OiBncmlkc3Rlckl0ZW0uJGl0ZW0ueCxcbiAgICAgICAgICB5OiBncmlkc3Rlckl0ZW0uJGl0ZW0ueSxcbiAgICAgICAgICBjb2xzOiBncmlkc3Rlckl0ZW0uJGl0ZW0uY29scyxcbiAgICAgICAgICByb3dzOiBncmlkc3Rlckl0ZW0uJGl0ZW0ucm93c1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlbW92ZUZyb21QdXNoZWQoaTogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKGkgPiAtMSkge1xuICAgICAgdGhpcy5wdXNoZWRJdGVtcy5zcGxpY2UoaSwgMSk7XG4gICAgICB0aGlzLnB1c2hlZEl0ZW1zUGF0aC5zcGxpY2UoaSwgMSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjaGVja1B1c2hlZEl0ZW0ocHVzaGVkSXRlbTogR3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlLCBpOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICBjb25zdCBwYXRoID0gdGhpcy5wdXNoZWRJdGVtc1BhdGhbaV07XG4gICAgbGV0IGogPSBwYXRoLmxlbmd0aCAtIDI7XG4gICAgbGV0IGxhc3RQb3NpdGlvbjogeyB4OiBudW1iZXIsIHk6IG51bWJlciwgY29sczogbnVtYmVyLCByb3dzOiBudW1iZXIgfSwgeCwgeSwgY29scywgcm93cztcbiAgICBmb3IgKDsgaiA+IC0xOyBqLS0pIHtcbiAgICAgIGxhc3RQb3NpdGlvbiA9IHBhdGhbal07XG4gICAgICB4ID0gcHVzaGVkSXRlbS4kaXRlbS54O1xuICAgICAgeSA9IHB1c2hlZEl0ZW0uJGl0ZW0ueTtcbiAgICAgIGNvbHMgPSBwdXNoZWRJdGVtLiRpdGVtLmNvbHM7XG4gICAgICByb3dzID0gcHVzaGVkSXRlbS4kaXRlbS5yb3dzO1xuICAgICAgcHVzaGVkSXRlbS4kaXRlbS54ID0gbGFzdFBvc2l0aW9uLng7XG4gICAgICBwdXNoZWRJdGVtLiRpdGVtLnkgPSBsYXN0UG9zaXRpb24ueTtcbiAgICAgIHB1c2hlZEl0ZW0uJGl0ZW0uY29scyA9IGxhc3RQb3NpdGlvbi5jb2xzO1xuICAgICAgcHVzaGVkSXRlbS4kaXRlbS5yb3dzID0gbGFzdFBvc2l0aW9uLnJvd3M7XG4gICAgICBpZiAoIXRoaXMuZ3JpZHN0ZXIuZmluZEl0ZW1XaXRoSXRlbShwdXNoZWRJdGVtLiRpdGVtKSkge1xuICAgICAgICBwdXNoZWRJdGVtLnNldFNpemUoKTtcbiAgICAgICAgcGF0aC5zcGxpY2UoaiArIDEsIHBhdGgubGVuZ3RoIC0gMSAtIGopO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHVzaGVkSXRlbS4kaXRlbS54ID0geDtcbiAgICAgICAgcHVzaGVkSXRlbS4kaXRlbS55ID0geTtcbiAgICAgICAgcHVzaGVkSXRlbS4kaXRlbS5jb2xzID0gY29scztcbiAgICAgICAgcHVzaGVkSXRlbS4kaXRlbS5yb3dzID0gcm93cztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHBhdGgubGVuZ3RoIDwgMikge1xuICAgICAgdGhpcy5yZW1vdmVGcm9tUHVzaGVkKGkpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IGNhbmNlbFNjcm9sbCwgc2Nyb2xsIH0gZnJvbSAnLi9ncmlkc3RlclNjcm9sbC5zZXJ2aWNlJztcbmltcG9ydCB7IEdyaWRzdGVyUmVzaXplRXZlbnRUeXBlIH0gZnJvbSAnLi9ncmlkc3RlclJlc2l6ZUV2ZW50VHlwZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgR3JpZHN0ZXJQdXNoIH0gZnJvbSAnLi9ncmlkc3RlclB1c2guc2VydmljZSc7XG5pbXBvcnQgeyBHcmlkc3RlclV0aWxzIH0gZnJvbSAnLi9ncmlkc3RlclV0aWxzLnNlcnZpY2UnO1xuaW1wb3J0IHsgR3JpZHN0ZXJQdXNoUmVzaXplIH0gZnJvbSAnLi9ncmlkc3RlclB1c2hSZXNpemUuc2VydmljZSc7XG5pbXBvcnQgeyBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2UgfSBmcm9tICcuL2dyaWRzdGVySXRlbUNvbXBvbmVudC5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgR3JpZHN0ZXJDb21wb25lbnRJbnRlcmZhY2UgfSBmcm9tICcuL2dyaWRzdGVyLmludGVyZmFjZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHcmlkc3RlclJlc2l6YWJsZSB7XG4gIGdyaWRzdGVySXRlbTogR3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlO1xuICBncmlkc3RlcjogR3JpZHN0ZXJDb21wb25lbnRJbnRlcmZhY2U7XG4gIGxhc3RNb3VzZToge1xuICAgIGNsaWVudFg6IG51bWJlcixcbiAgICBjbGllbnRZOiBudW1iZXJcbiAgfTtcbiAgaXRlbUJhY2t1cDogQXJyYXk8bnVtYmVyPjtcbiAgcmVzaXplRXZlbnRTY3JvbGxUeXBlOiBHcmlkc3RlclJlc2l6ZUV2ZW50VHlwZTtcbiAgZGlyZWN0aW9uRnVuY3Rpb246IEZ1bmN0aW9uO1xuICBkcmFnRnVuY3Rpb246IChldmVudDogYW55KSA9PiB2b2lkO1xuICBkcmFnU3RvcEZ1bmN0aW9uOiAoZXZlbnQ6IGFueSkgPT4gdm9pZDtcbiAgcmVzaXplRW5hYmxlZDogYm9vbGVhbjtcbiAgbW91c2Vtb3ZlOiBGdW5jdGlvbjtcbiAgbW91c2V1cDogRnVuY3Rpb247XG4gIG1vdXNlbGVhdmU6IEZ1bmN0aW9uO1xuICBjYW5jZWxPbkJsdXI6IEZ1bmN0aW9uO1xuICB0b3VjaG1vdmU6IEZ1bmN0aW9uO1xuICB0b3VjaGVuZDogRnVuY3Rpb247XG4gIHRvdWNoY2FuY2VsOiBGdW5jdGlvbjtcbiAgcHVzaDogR3JpZHN0ZXJQdXNoO1xuICBwdXNoUmVzaXplOiBHcmlkc3RlclB1c2hSZXNpemU7XG4gIG1pbkhlaWdodDogbnVtYmVyO1xuICBtaW5XaWR0aDogbnVtYmVyO1xuICBvZmZzZXRUb3A6IG51bWJlcjtcbiAgb2Zmc2V0TGVmdDogbnVtYmVyO1xuICBkaWZmVG9wOiBudW1iZXI7XG4gIGRpZmZMZWZ0OiBudW1iZXI7XG4gIGRpZmZSaWdodDogbnVtYmVyO1xuICBkaWZmQm90dG9tOiBudW1iZXI7XG4gIG1hcmdpbjogbnVtYmVyO1xuICB0b3A6IG51bWJlcjtcbiAgbGVmdDogbnVtYmVyO1xuICBib3R0b206IG51bWJlcjtcbiAgcmlnaHQ6IG51bWJlcjtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIG5ld1Bvc2l0aW9uOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoZ3JpZHN0ZXJJdGVtOiBHcmlkc3Rlckl0ZW1Db21wb25lbnRJbnRlcmZhY2UsIGdyaWRzdGVyOiBHcmlkc3RlckNvbXBvbmVudEludGVyZmFjZSwgcHJpdmF0ZSB6b25lOiBOZ1pvbmUpIHtcbiAgICB0aGlzLmdyaWRzdGVySXRlbSA9IGdyaWRzdGVySXRlbTtcbiAgICB0aGlzLmdyaWRzdGVyID0gZ3JpZHN0ZXI7XG4gICAgdGhpcy5sYXN0TW91c2UgPSB7XG4gICAgICBjbGllbnRYOiAwLFxuICAgICAgY2xpZW50WTogMFxuICAgIH07XG4gICAgdGhpcy5pdGVtQmFja3VwID0gWzAsIDAsIDAsIDBdO1xuICAgIHRoaXMucmVzaXplRXZlbnRTY3JvbGxUeXBlID0geyB3OiBmYWxzZSwgZTogZmFsc2UsIG46IGZhbHNlLCBzOiBmYWxzZSB9O1xuICB9XG5cbiAgZGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5ncmlkc3Rlci5wcmV2aWV3U3R5bGUpIHtcbiAgICAgIHRoaXMuZ3JpZHN0ZXIucHJldmlld1N0eWxlKCk7XG4gICAgfVxuICAgIGRlbGV0ZSB0aGlzLmdyaWRzdGVySXRlbTtcbiAgICBkZWxldGUgdGhpcy5ncmlkc3RlcjtcbiAgfVxuXG4gIGRyYWdTdGFydChlOiBhbnkpOiB2b2lkIHtcbiAgICBzd2l0Y2ggKGUud2hpY2gpIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgLy8gbGVmdCBtb3VzZSBidXR0b25cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICBjYXNlIDM6XG4gICAgICAgIC8vIHJpZ2h0IG9yIG1pZGRsZSBtb3VzZSBidXR0b25cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5ncmlkc3Rlci5vcHRpb25zLnJlc2l6YWJsZSAmJiB0aGlzLmdyaWRzdGVyLm9wdGlvbnMucmVzaXphYmxlLnN0YXJ0KSB7XG4gICAgICB0aGlzLmdyaWRzdGVyLm9wdGlvbnMucmVzaXphYmxlLnN0YXJ0KHRoaXMuZ3JpZHN0ZXJJdGVtLml0ZW0sIHRoaXMuZ3JpZHN0ZXJJdGVtLCBlKTtcbiAgICB9XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5kcmFnRnVuY3Rpb24gPSB0aGlzLmRyYWdNb3ZlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kcmFnU3RvcEZ1bmN0aW9uID0gdGhpcy5kcmFnU3RvcC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICB0aGlzLm1vdXNlbW92ZSA9IHRoaXMuZ3JpZHN0ZXJJdGVtLnJlbmRlcmVyLmxpc3RlbignZG9jdW1lbnQnLCAnbW91c2Vtb3ZlJywgdGhpcy5kcmFnRnVuY3Rpb24pO1xuICAgICAgdGhpcy50b3VjaG1vdmUgPSB0aGlzLmdyaWRzdGVyLnJlbmRlcmVyLmxpc3Rlbih0aGlzLmdyaWRzdGVyLmVsLCAndG91Y2htb3ZlJywgdGhpcy5kcmFnRnVuY3Rpb24pO1xuICAgIH0pO1xuICAgIHRoaXMubW91c2V1cCA9IHRoaXMuZ3JpZHN0ZXJJdGVtLnJlbmRlcmVyLmxpc3RlbignZG9jdW1lbnQnLCAnbW91c2V1cCcsIHRoaXMuZHJhZ1N0b3BGdW5jdGlvbik7XG4gICAgdGhpcy5tb3VzZWxlYXZlID0gdGhpcy5ncmlkc3Rlckl0ZW0ucmVuZGVyZXIubGlzdGVuKCdkb2N1bWVudCcsICdtb3VzZWxlYXZlJywgdGhpcy5kcmFnU3RvcEZ1bmN0aW9uKTtcbiAgICB0aGlzLmNhbmNlbE9uQmx1ciA9IHRoaXMuZ3JpZHN0ZXJJdGVtLnJlbmRlcmVyLmxpc3Rlbignd2luZG93JywgJ2JsdXInLCB0aGlzLmRyYWdTdG9wRnVuY3Rpb24pO1xuICAgIHRoaXMudG91Y2hlbmQgPSB0aGlzLmdyaWRzdGVySXRlbS5yZW5kZXJlci5saXN0ZW4oJ2RvY3VtZW50JywgJ3RvdWNoZW5kJywgdGhpcy5kcmFnU3RvcEZ1bmN0aW9uKTtcbiAgICB0aGlzLnRvdWNoY2FuY2VsID0gdGhpcy5ncmlkc3Rlckl0ZW0ucmVuZGVyZXIubGlzdGVuKCdkb2N1bWVudCcsICd0b3VjaGNhbmNlbCcsIHRoaXMuZHJhZ1N0b3BGdW5jdGlvbik7XG5cbiAgICB0aGlzLmdyaWRzdGVySXRlbS5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmdyaWRzdGVySXRlbS5lbCwgJ2dyaWRzdGVyLWl0ZW0tcmVzaXppbmcnKTtcbiAgICB0aGlzLmxhc3RNb3VzZS5jbGllbnRYID0gZS5jbGllbnRYO1xuICAgIHRoaXMubGFzdE1vdXNlLmNsaWVudFkgPSBlLmNsaWVudFk7XG4gICAgdGhpcy5sZWZ0ID0gdGhpcy5ncmlkc3Rlckl0ZW0ubGVmdDtcbiAgICB0aGlzLnRvcCA9IHRoaXMuZ3JpZHN0ZXJJdGVtLnRvcDtcbiAgICB0aGlzLndpZHRoID0gdGhpcy5ncmlkc3Rlckl0ZW0ud2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSB0aGlzLmdyaWRzdGVySXRlbS5oZWlnaHQ7XG4gICAgdGhpcy5ib3R0b20gPSB0aGlzLmdyaWRzdGVySXRlbS50b3AgKyB0aGlzLmdyaWRzdGVySXRlbS5oZWlnaHQ7XG4gICAgdGhpcy5yaWdodCA9IHRoaXMuZ3JpZHN0ZXJJdGVtLmxlZnQgKyB0aGlzLmdyaWRzdGVySXRlbS53aWR0aDtcbiAgICB0aGlzLm1hcmdpbiA9IHRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMubWFyZ2luO1xuICAgIHRoaXMub2Zmc2V0TGVmdCA9IHRoaXMuZ3JpZHN0ZXIuZWwuc2Nyb2xsTGVmdCAtIHRoaXMuZ3JpZHN0ZXIuZWwub2Zmc2V0TGVmdDtcbiAgICB0aGlzLm9mZnNldFRvcCA9IHRoaXMuZ3JpZHN0ZXIuZWwuc2Nyb2xsVG9wIC0gdGhpcy5ncmlkc3Rlci5lbC5vZmZzZXRUb3A7XG4gICAgdGhpcy5kaWZmTGVmdCA9IGUuY2xpZW50WCArIHRoaXMub2Zmc2V0TGVmdCAtIHRoaXMubGVmdDtcbiAgICB0aGlzLmRpZmZSaWdodCA9IGUuY2xpZW50WCArIHRoaXMub2Zmc2V0TGVmdCAtIHRoaXMucmlnaHQ7XG4gICAgdGhpcy5kaWZmVG9wID0gZS5jbGllbnRZICsgdGhpcy5vZmZzZXRUb3AgLSB0aGlzLnRvcDtcbiAgICB0aGlzLmRpZmZCb3R0b20gPSBlLmNsaWVudFkgKyB0aGlzLm9mZnNldFRvcCAtIHRoaXMuYm90dG9tO1xuICAgIHRoaXMubWluSGVpZ2h0ID0gdGhpcy5ncmlkc3Rlci5wb3NpdGlvbllUb1BpeGVscyh0aGlzLmdyaWRzdGVySXRlbS4kaXRlbS5taW5JdGVtUm93cyB8fCB0aGlzLmdyaWRzdGVyLiRvcHRpb25zLm1pbkl0ZW1Sb3dzKVxuICAgICAgLSB0aGlzLm1hcmdpbjtcbiAgICB0aGlzLm1pbldpZHRoID0gdGhpcy5ncmlkc3Rlci5wb3NpdGlvblhUb1BpeGVscyh0aGlzLmdyaWRzdGVySXRlbS4kaXRlbS5taW5JdGVtQ29scyB8fCB0aGlzLmdyaWRzdGVyLiRvcHRpb25zLm1pbkl0ZW1Db2xzKVxuICAgICAgLSB0aGlzLm1hcmdpbjtcbiAgICB0aGlzLmdyaWRzdGVyLm1vdmluZ0l0ZW0gPSB0aGlzLmdyaWRzdGVySXRlbS4kaXRlbTtcbiAgICB0aGlzLmdyaWRzdGVyLnByZXZpZXdTdHlsZSgpO1xuICAgIHRoaXMucHVzaCA9IG5ldyBHcmlkc3RlclB1c2godGhpcy5ncmlkc3Rlckl0ZW0pO1xuICAgIHRoaXMucHVzaFJlc2l6ZSA9IG5ldyBHcmlkc3RlclB1c2hSZXNpemUodGhpcy5ncmlkc3Rlckl0ZW0pO1xuICAgIHRoaXMuZ3JpZHN0ZXIuZHJhZ0luUHJvZ3Jlc3MgPSB0cnVlO1xuICAgIHRoaXMuZ3JpZHN0ZXIudXBkYXRlR3JpZCgpO1xuXG4gICAgaWYgKGUudGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnY2xhc3MnKSAmJiBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykuc3BsaXQoJyAnKS5pbmRleE9mKCdoYW5kbGUtbicpID4gLTEpIHtcbiAgICAgIHRoaXMucmVzaXplRXZlbnRTY3JvbGxUeXBlLm4gPSB0cnVlO1xuICAgICAgdGhpcy5kaXJlY3Rpb25GdW5jdGlvbiA9IHRoaXMuaGFuZGxlTjtcbiAgICB9IGVsc2UgaWYgKGUudGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnY2xhc3MnKSAmJiBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykuc3BsaXQoJyAnKS5pbmRleE9mKCdoYW5kbGUtdycpID4gLTEpIHtcbiAgICAgIHRoaXMucmVzaXplRXZlbnRTY3JvbGxUeXBlLncgPSB0cnVlO1xuICAgICAgdGhpcy5kaXJlY3Rpb25GdW5jdGlvbiA9IHRoaXMuaGFuZGxlVztcbiAgICB9IGVsc2UgaWYgKGUudGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnY2xhc3MnKSAmJiBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykuc3BsaXQoJyAnKS5pbmRleE9mKCdoYW5kbGUtcycpID4gLTEpIHtcbiAgICAgIHRoaXMucmVzaXplRXZlbnRTY3JvbGxUeXBlLnMgPSB0cnVlO1xuICAgICAgdGhpcy5kaXJlY3Rpb25GdW5jdGlvbiA9IHRoaXMuaGFuZGxlUztcbiAgICB9IGVsc2UgaWYgKGUudGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnY2xhc3MnKSAmJiBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykuc3BsaXQoJyAnKS5pbmRleE9mKCdoYW5kbGUtZScpID4gLTEpIHtcbiAgICAgIHRoaXMucmVzaXplRXZlbnRTY3JvbGxUeXBlLmUgPSB0cnVlO1xuICAgICAgdGhpcy5kaXJlY3Rpb25GdW5jdGlvbiA9IHRoaXMuaGFuZGxlRTtcbiAgICB9IGVsc2UgaWYgKGUudGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnY2xhc3MnKSAmJiBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykuc3BsaXQoJyAnKS5pbmRleE9mKCdoYW5kbGUtbncnKSA+IC0xKSB7XG4gICAgICB0aGlzLnJlc2l6ZUV2ZW50U2Nyb2xsVHlwZS5uID0gdHJ1ZTtcbiAgICAgIHRoaXMucmVzaXplRXZlbnRTY3JvbGxUeXBlLncgPSB0cnVlO1xuICAgICAgdGhpcy5kaXJlY3Rpb25GdW5jdGlvbiA9IHRoaXMuaGFuZGxlTlc7XG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5oYXNBdHRyaWJ1dGUoJ2NsYXNzJykgJiYgZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdjbGFzcycpLnNwbGl0KCcgJykuaW5kZXhPZignaGFuZGxlLW5lJykgPiAtMSkge1xuICAgICAgdGhpcy5yZXNpemVFdmVudFNjcm9sbFR5cGUubiA9IHRydWU7XG4gICAgICB0aGlzLnJlc2l6ZUV2ZW50U2Nyb2xsVHlwZS5lID0gdHJ1ZTtcbiAgICAgIHRoaXMuZGlyZWN0aW9uRnVuY3Rpb24gPSB0aGlzLmhhbmRsZU5FO1xuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuaGFzQXR0cmlidXRlKCdjbGFzcycpICYmIGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnY2xhc3MnKS5zcGxpdCgnICcpLmluZGV4T2YoJ2hhbmRsZS1zdycpID4gLTEpIHtcbiAgICAgIHRoaXMucmVzaXplRXZlbnRTY3JvbGxUeXBlLnMgPSB0cnVlO1xuICAgICAgdGhpcy5yZXNpemVFdmVudFNjcm9sbFR5cGUudyA9IHRydWU7XG4gICAgICB0aGlzLmRpcmVjdGlvbkZ1bmN0aW9uID0gdGhpcy5oYW5kbGVTVztcbiAgICB9IGVsc2UgaWYgKGUudGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnY2xhc3MnKSAmJiBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykuc3BsaXQoJyAnKS5pbmRleE9mKCdoYW5kbGUtc2UnKSA+IC0xKSB7XG4gICAgICB0aGlzLnJlc2l6ZUV2ZW50U2Nyb2xsVHlwZS5zID0gdHJ1ZTtcbiAgICAgIHRoaXMucmVzaXplRXZlbnRTY3JvbGxUeXBlLmUgPSB0cnVlO1xuICAgICAgdGhpcy5kaXJlY3Rpb25GdW5jdGlvbiA9IHRoaXMuaGFuZGxlU0U7XG4gICAgfVxuICB9XG5cbiAgZHJhZ01vdmUoZTogYW55KTogdm9pZCB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgR3JpZHN0ZXJVdGlscy5jaGVja1RvdWNoRXZlbnQoZSk7XG4gICAgdGhpcy5vZmZzZXRUb3AgPSB0aGlzLmdyaWRzdGVyLmVsLnNjcm9sbFRvcCAtIHRoaXMuZ3JpZHN0ZXIuZWwub2Zmc2V0VG9wO1xuICAgIHRoaXMub2Zmc2V0TGVmdCA9IHRoaXMuZ3JpZHN0ZXIuZWwuc2Nyb2xsTGVmdCAtIHRoaXMuZ3JpZHN0ZXIuZWwub2Zmc2V0TGVmdDtcbiAgICBzY3JvbGwodGhpcy5ncmlkc3RlciwgdGhpcy5sZWZ0LCB0aGlzLnRvcCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIGUsIHRoaXMubGFzdE1vdXNlLCB0aGlzLmRpcmVjdGlvbkZ1bmN0aW9uLmJpbmQodGhpcyksIHRydWUsXG4gICAgICB0aGlzLnJlc2l6ZUV2ZW50U2Nyb2xsVHlwZSk7XG4gICAgdGhpcy5kaXJlY3Rpb25GdW5jdGlvbihlKTtcblxuICAgIHRoaXMubGFzdE1vdXNlLmNsaWVudFggPSBlLmNsaWVudFg7XG4gICAgdGhpcy5sYXN0TW91c2UuY2xpZW50WSA9IGUuY2xpZW50WTtcbiAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgIHRoaXMuZ3JpZHN0ZXIudXBkYXRlR3JpZCgpO1xuICAgIH0pO1xuICB9XG5cbiAgZHJhZ1N0b3AoZTogYW55KTogdm9pZCB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY2FuY2VsU2Nyb2xsKCk7XG4gICAgdGhpcy5tb3VzZW1vdmUoKTtcbiAgICB0aGlzLm1vdXNldXAoKTtcbiAgICB0aGlzLm1vdXNlbGVhdmUoKTtcbiAgICB0aGlzLmNhbmNlbE9uQmx1cigpO1xuICAgIHRoaXMudG91Y2htb3ZlKCk7XG4gICAgdGhpcy50b3VjaGVuZCgpO1xuICAgIHRoaXMudG91Y2hjYW5jZWwoKTtcbiAgICB0aGlzLmdyaWRzdGVyLmRyYWdJblByb2dyZXNzID0gZmFsc2U7XG4gICAgdGhpcy5ncmlkc3Rlci51cGRhdGVHcmlkKCk7XG4gICAgaWYgKHRoaXMuZ3JpZHN0ZXIub3B0aW9ucy5yZXNpemFibGUgJiYgdGhpcy5ncmlkc3Rlci5vcHRpb25zLnJlc2l6YWJsZS5zdG9wKSB7XG4gICAgICBQcm9taXNlLnJlc29sdmUodGhpcy5ncmlkc3Rlci5vcHRpb25zLnJlc2l6YWJsZS5zdG9wKHRoaXMuZ3JpZHN0ZXJJdGVtLml0ZW0sIHRoaXMuZ3JpZHN0ZXJJdGVtLCBlKSlcbiAgICAgICAgLnRoZW4odGhpcy5tYWtlUmVzaXplLmJpbmQodGhpcyksIHRoaXMuY2FuY2VsUmVzaXplLmJpbmQodGhpcykpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1ha2VSZXNpemUoKTtcbiAgICB9XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmdyaWRzdGVySXRlbS5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmdyaWRzdGVySXRlbS5lbCwgJ2dyaWRzdGVyLWl0ZW0tcmVzaXppbmcnKTtcbiAgICAgIGlmICh0aGlzLmdyaWRzdGVyKSB7XG4gICAgICAgIHRoaXMuZ3JpZHN0ZXIubW92aW5nSXRlbSA9IG51bGw7XG4gICAgICAgIHRoaXMuZ3JpZHN0ZXIucHJldmlld1N0eWxlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjYW5jZWxSZXNpemUoKTogdm9pZCB7XG4gICAgdGhpcy5ncmlkc3Rlckl0ZW0uJGl0ZW0uY29scyA9IHRoaXMuZ3JpZHN0ZXJJdGVtLml0ZW0uY29scyB8fCAxO1xuICAgIHRoaXMuZ3JpZHN0ZXJJdGVtLiRpdGVtLnJvd3MgPSB0aGlzLmdyaWRzdGVySXRlbS5pdGVtLnJvd3MgfHwgMTtcbiAgICB0aGlzLmdyaWRzdGVySXRlbS4kaXRlbS54ID0gdGhpcy5ncmlkc3Rlckl0ZW0uaXRlbS54IHx8IDA7XG4gICAgdGhpcy5ncmlkc3Rlckl0ZW0uJGl0ZW0ueSA9IHRoaXMuZ3JpZHN0ZXJJdGVtLml0ZW0ueSB8fCAwO1xuICAgIHRoaXMuZ3JpZHN0ZXJJdGVtLnNldFNpemUoKTtcbiAgICB0aGlzLnB1c2gucmVzdG9yZUl0ZW1zKCk7XG4gICAgdGhpcy5wdXNoUmVzaXplLnJlc3RvcmVJdGVtcygpO1xuICAgIHRoaXMucHVzaC5kZXN0cm95KCk7XG4gICAgZGVsZXRlIHRoaXMucHVzaDtcbiAgICB0aGlzLnB1c2hSZXNpemUuZGVzdHJveSgpO1xuICAgIGRlbGV0ZSB0aGlzLnB1c2hSZXNpemU7XG4gIH1cblxuICBtYWtlUmVzaXplKCk6IHZvaWQge1xuICAgIHRoaXMuZ3JpZHN0ZXJJdGVtLnNldFNpemUoKTtcbiAgICB0aGlzLmdyaWRzdGVySXRlbS5jaGVja0l0ZW1DaGFuZ2VzKHRoaXMuZ3JpZHN0ZXJJdGVtLiRpdGVtLCB0aGlzLmdyaWRzdGVySXRlbS5pdGVtKTtcbiAgICB0aGlzLnB1c2guc2V0UHVzaGVkSXRlbXMoKTtcbiAgICB0aGlzLnB1c2hSZXNpemUuc2V0UHVzaGVkSXRlbXMoKTtcbiAgICB0aGlzLnB1c2guZGVzdHJveSgpO1xuICAgIGRlbGV0ZSB0aGlzLnB1c2g7XG4gICAgdGhpcy5wdXNoUmVzaXplLmRlc3Ryb3koKTtcbiAgICBkZWxldGUgdGhpcy5wdXNoUmVzaXplO1xuICB9XG5cbiAgaGFuZGxlTihlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnRvcCA9IGUuY2xpZW50WSArIHRoaXMub2Zmc2V0VG9wIC0gdGhpcy5kaWZmVG9wO1xuICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5ib3R0b20gLSB0aGlzLnRvcDtcbiAgICBpZiAodGhpcy5taW5IZWlnaHQgPiB0aGlzLmhlaWdodCkge1xuICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLm1pbkhlaWdodDtcbiAgICAgIHRoaXMudG9wID0gdGhpcy5ib3R0b20gLSB0aGlzLm1pbkhlaWdodDtcbiAgICB9XG4gICAgdGhpcy5uZXdQb3NpdGlvbiA9IHRoaXMuZ3JpZHN0ZXIucGl4ZWxzVG9Qb3NpdGlvblkodGhpcy50b3AgKyB0aGlzLm1hcmdpbiwgTWF0aC5mbG9vcik7XG4gICAgaWYgKHRoaXMuZ3JpZHN0ZXJJdGVtLiRpdGVtLnkgIT09IHRoaXMubmV3UG9zaXRpb24pIHtcbiAgICAgIHRoaXMuaXRlbUJhY2t1cFsxXSA9IHRoaXMuZ3JpZHN0ZXJJdGVtLiRpdGVtLnk7XG4gICAgICB0aGlzLml0ZW1CYWNrdXBbM10gPSB0aGlzLmdyaWRzdGVySXRlbS4kaXRlbS5yb3dzO1xuICAgICAgdGhpcy5ncmlkc3Rlckl0ZW0uJGl0ZW0ucm93cyArPSB0aGlzLmdyaWRzdGVySXRlbS4kaXRlbS55IC0gdGhpcy5uZXdQb3NpdGlvbjtcbiAgICAgIHRoaXMuZ3JpZHN0ZXJJdGVtLiRpdGVtLnkgPSB0aGlzLm5ld1Bvc2l0aW9uO1xuICAgICAgdGhpcy5wdXNoUmVzaXplLnB1c2hJdGVtcyh0aGlzLnB1c2hSZXNpemUuZnJvbVNvdXRoKTtcbiAgICAgIHRoaXMucHVzaC5wdXNoSXRlbXModGhpcy5wdXNoLmZyb21Tb3V0aCwgdGhpcy5ncmlkc3Rlci4kb3B0aW9ucy5kaXNhYmxlUHVzaE9uUmVzaXplKTtcbiAgICAgIGlmICh0aGlzLmdyaWRzdGVyLmNoZWNrQ29sbGlzaW9uKHRoaXMuZ3JpZHN0ZXJJdGVtLiRpdGVtKSkge1xuICAgICAgICB0aGlzLmdyaWRzdGVySXRlbS4kaXRlbS55ID0gdGhpcy5pdGVtQmFja3VwWzFdO1xuICAgICAgICB0aGlzLmdyaWRzdGVySXRlbS4kaXRlbS5yb3dzID0gdGhpcy5pdGVtQmFja3VwWzNdO1xuICAgICAgICB0aGlzLnNldEl0ZW1Ub3AodGhpcy5ncmlkc3Rlci5wb3NpdGlvbllUb1BpeGVscyh0aGlzLmdyaWRzdGVySXRlbS4kaXRlbS55KSk7XG4gICAgICAgIHRoaXMuc2V0SXRlbUhlaWdodCh0aGlzLmdyaWRzdGVyLnBvc2l0aW9uWVRvUGl4ZWxzKHRoaXMuZ3JpZHN0ZXJJdGVtLiRpdGVtLnJvd3MpIC0gdGhpcy5tYXJnaW4pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmdyaWRzdGVyLnByZXZpZXdTdHlsZSgpO1xuICAgICAgfVxuICAgICAgdGhpcy5wdXNoUmVzaXplLmNoZWNrUHVzaEJhY2soKTtcbiAgICAgIHRoaXMucHVzaC5jaGVja1B1c2hCYWNrKCk7XG4gICAgfVxuICAgIHRoaXMuc2V0SXRlbVRvcCh0aGlzLnRvcCk7XG4gICAgdGhpcy5zZXRJdGVtSGVpZ2h0KHRoaXMuaGVpZ2h0KTtcbiAgfVxuXG4gIGhhbmRsZVcoZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy5sZWZ0ID0gZS5jbGllbnRYICsgdGhpcy5vZmZzZXRMZWZ0IC0gdGhpcy5kaWZmTGVmdDtcbiAgICB0aGlzLndpZHRoID0gdGhpcy5yaWdodCAtIHRoaXMubGVmdDtcbiAgICBpZiAodGhpcy5taW5XaWR0aCA+IHRoaXMud2lkdGgpIHtcbiAgICAgIHRoaXMud2lkdGggPSB0aGlzLm1pbldpZHRoO1xuICAgICAgdGhpcy5sZWZ0ID0gdGhpcy5yaWdodCAtIHRoaXMubWluV2lkdGg7XG4gICAgfVxuICAgIHRoaXMubmV3UG9zaXRpb24gPSB0aGlzLmdyaWRzdGVyLnBpeGVsc1RvUG9zaXRpb25YKHRoaXMubGVmdCArIHRoaXMubWFyZ2luLCBNYXRoLmZsb29yKTtcbiAgICBpZiAodGhpcy5ncmlkc3Rlckl0ZW0uJGl0ZW0ueCAhPT0gdGhpcy5uZXdQb3NpdGlvbikge1xuICAgICAgdGhpcy5pdGVtQmFja3VwWzBdID0gdGhpcy5ncmlkc3Rlckl0ZW0uJGl0ZW0ueDtcbiAgICAgIHRoaXMuaXRlbUJhY2t1cFsyXSA9IHRoaXMuZ3JpZHN0ZXJJdGVtLiRpdGVtLmNvbHM7XG4gICAgICB0aGlzLmdyaWRzdGVySXRlbS4kaXRlbS5jb2xzICs9IHRoaXMuZ3JpZHN0ZXJJdGVtLiRpdGVtLnggLSB0aGlzLm5ld1Bvc2l0aW9uO1xuICAgICAgdGhpcy5ncmlkc3Rlckl0ZW0uJGl0ZW0ueCA9IHRoaXMubmV3UG9zaXRpb247XG4gICAgICB0aGlzLnB1c2hSZXNpemUucHVzaEl0ZW1zKHRoaXMucHVzaFJlc2l6ZS5mcm9tRWFzdCk7XG4gICAgICB0aGlzLnB1c2gucHVzaEl0ZW1zKHRoaXMucHVzaC5mcm9tRWFzdCwgdGhpcy5ncmlkc3Rlci4kb3B0aW9ucy5kaXNhYmxlUHVzaE9uUmVzaXplKTtcbiAgICAgIGlmICh0aGlzLmdyaWRzdGVyLmNoZWNrQ29sbGlzaW9uKHRoaXMuZ3JpZHN0ZXJJdGVtLiRpdGVtKSkge1xuICAgICAgICB0aGlzLmdyaWRzdGVySXRlbS4kaXRlbS54ID0gdGhpcy5pdGVtQmFja3VwWzBdO1xuICAgICAgICB0aGlzLmdyaWRzdGVySXRlbS4kaXRlbS5jb2xzID0gdGhpcy5pdGVtQmFja3VwWzJdO1xuICAgICAgICB0aGlzLnNldEl0ZW1MZWZ0KHRoaXMuZ3JpZHN0ZXIucG9zaXRpb25YVG9QaXhlbHModGhpcy5ncmlkc3Rlckl0ZW0uJGl0ZW0ueCkpO1xuICAgICAgICB0aGlzLnNldEl0ZW1XaWR0aCh0aGlzLmdyaWRzdGVyLnBvc2l0aW9uWFRvUGl4ZWxzKHRoaXMuZ3JpZHN0ZXJJdGVtLiRpdGVtLmNvbHMpIC0gdGhpcy5tYXJnaW4pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmdyaWRzdGVyLnByZXZpZXdTdHlsZSgpO1xuICAgICAgfVxuICAgICAgdGhpcy5wdXNoUmVzaXplLmNoZWNrUHVzaEJhY2soKTtcbiAgICAgIHRoaXMucHVzaC5jaGVja1B1c2hCYWNrKCk7XG4gICAgfVxuICAgIHRoaXMuc2V0SXRlbUxlZnQodGhpcy5sZWZ0KTtcbiAgICB0aGlzLnNldEl0ZW1XaWR0aCh0aGlzLndpZHRoKTtcbiAgfVxuXG4gIGhhbmRsZVMoZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy5oZWlnaHQgPSBlLmNsaWVudFkgKyB0aGlzLm9mZnNldFRvcCAtIHRoaXMuZGlmZkJvdHRvbSAtIHRoaXMudG9wO1xuICAgIGlmICh0aGlzLm1pbkhlaWdodCA+IHRoaXMuaGVpZ2h0KSB7XG4gICAgICB0aGlzLmhlaWdodCA9IHRoaXMubWluSGVpZ2h0O1xuICAgIH1cbiAgICB0aGlzLmJvdHRvbSA9IHRoaXMudG9wICsgdGhpcy5oZWlnaHQ7XG4gICAgdGhpcy5uZXdQb3NpdGlvbiA9IHRoaXMuZ3JpZHN0ZXIucGl4ZWxzVG9Qb3NpdGlvblkodGhpcy5ib3R0b20sIE1hdGguY2VpbCk7XG4gICAgaWYgKCh0aGlzLmdyaWRzdGVySXRlbS4kaXRlbS55ICsgdGhpcy5ncmlkc3Rlckl0ZW0uJGl0ZW0ucm93cykgIT09IHRoaXMubmV3UG9zaXRpb24pIHtcbiAgICAgIHRoaXMuaXRlbUJhY2t1cFszXSA9IHRoaXMuZ3JpZHN0ZXJJdGVtLiRpdGVtLnJvd3M7XG4gICAgICB0aGlzLmdyaWRzdGVySXRlbS4kaXRlbS5yb3dzID0gdGhpcy5uZXdQb3NpdGlvbiAtIHRoaXMuZ3JpZHN0ZXJJdGVtLiRpdGVtLnk7XG4gICAgICB0aGlzLnB1c2hSZXNpemUucHVzaEl0ZW1zKHRoaXMucHVzaFJlc2l6ZS5mcm9tTm9ydGgpO1xuICAgICAgdGhpcy5wdXNoLnB1c2hJdGVtcyh0aGlzLnB1c2guZnJvbU5vcnRoLCB0aGlzLmdyaWRzdGVyLiRvcHRpb25zLmRpc2FibGVQdXNoT25SZXNpemUpO1xuICAgICAgaWYgKHRoaXMuZ3JpZHN0ZXIuY2hlY2tDb2xsaXNpb24odGhpcy5ncmlkc3Rlckl0ZW0uJGl0ZW0pKSB7XG4gICAgICAgIHRoaXMuZ3JpZHN0ZXJJdGVtLiRpdGVtLnJvd3MgPSB0aGlzLml0ZW1CYWNrdXBbM107XG4gICAgICAgIHRoaXMuc2V0SXRlbUhlaWdodCh0aGlzLmdyaWRzdGVyLnBvc2l0aW9uWVRvUGl4ZWxzKHRoaXMuZ3JpZHN0ZXJJdGVtLiRpdGVtLnJvd3MpIC0gdGhpcy5tYXJnaW4pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmdyaWRzdGVyLnByZXZpZXdTdHlsZSgpO1xuICAgICAgfVxuICAgICAgdGhpcy5wdXNoUmVzaXplLmNoZWNrUHVzaEJhY2soKTtcbiAgICAgIHRoaXMucHVzaC5jaGVja1B1c2hCYWNrKCk7XG4gICAgfVxuICAgIHRoaXMuc2V0SXRlbUhlaWdodCh0aGlzLmhlaWdodCk7XG4gIH1cblxuICBoYW5kbGVFKGU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMud2lkdGggPSBlLmNsaWVudFggKyB0aGlzLm9mZnNldExlZnQgLSB0aGlzLmRpZmZSaWdodCAtIHRoaXMubGVmdDtcbiAgICBpZiAodGhpcy5taW5XaWR0aCA+IHRoaXMud2lkdGgpIHtcbiAgICAgIHRoaXMud2lkdGggPSB0aGlzLm1pbldpZHRoO1xuICAgIH1cbiAgICB0aGlzLnJpZ2h0ID0gdGhpcy5sZWZ0ICsgdGhpcy53aWR0aDtcbiAgICB0aGlzLm5ld1Bvc2l0aW9uID0gdGhpcy5ncmlkc3Rlci5waXhlbHNUb1Bvc2l0aW9uWCh0aGlzLnJpZ2h0LCBNYXRoLmNlaWwpO1xuICAgIGlmICgodGhpcy5ncmlkc3Rlckl0ZW0uJGl0ZW0ueCArIHRoaXMuZ3JpZHN0ZXJJdGVtLiRpdGVtLmNvbHMpICE9PSB0aGlzLm5ld1Bvc2l0aW9uKSB7XG4gICAgICB0aGlzLml0ZW1CYWNrdXBbMl0gPSB0aGlzLmdyaWRzdGVySXRlbS4kaXRlbS5jb2xzO1xuICAgICAgdGhpcy5ncmlkc3Rlckl0ZW0uJGl0ZW0uY29scyA9IHRoaXMubmV3UG9zaXRpb24gLSB0aGlzLmdyaWRzdGVySXRlbS4kaXRlbS54O1xuICAgICAgdGhpcy5wdXNoUmVzaXplLnB1c2hJdGVtcyh0aGlzLnB1c2hSZXNpemUuZnJvbVdlc3QpO1xuICAgICAgdGhpcy5wdXNoLnB1c2hJdGVtcyh0aGlzLnB1c2guZnJvbVdlc3QsIHRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMuZGlzYWJsZVB1c2hPblJlc2l6ZSk7XG4gICAgICBpZiAodGhpcy5ncmlkc3Rlci5jaGVja0NvbGxpc2lvbih0aGlzLmdyaWRzdGVySXRlbS4kaXRlbSkpIHtcbiAgICAgICAgdGhpcy5ncmlkc3Rlckl0ZW0uJGl0ZW0uY29scyA9IHRoaXMuaXRlbUJhY2t1cFsyXTtcbiAgICAgICAgdGhpcy5zZXRJdGVtV2lkdGgodGhpcy5ncmlkc3Rlci5wb3NpdGlvblhUb1BpeGVscyh0aGlzLmdyaWRzdGVySXRlbS4kaXRlbS5jb2xzKSAtIHRoaXMubWFyZ2luKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5ncmlkc3Rlci5wcmV2aWV3U3R5bGUoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucHVzaFJlc2l6ZS5jaGVja1B1c2hCYWNrKCk7XG4gICAgICB0aGlzLnB1c2guY2hlY2tQdXNoQmFjaygpO1xuICAgIH1cbiAgICB0aGlzLnNldEl0ZW1XaWR0aCh0aGlzLndpZHRoKTtcbiAgfVxuXG4gIGhhbmRsZU5XKGU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuaGFuZGxlTihlKTtcbiAgICB0aGlzLmhhbmRsZVcoZSk7XG4gIH1cblxuICBoYW5kbGVORShlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmhhbmRsZU4oZSk7XG4gICAgdGhpcy5oYW5kbGVFKGUpO1xuICB9XG5cbiAgaGFuZGxlU1coZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy5oYW5kbGVTKGUpO1xuICAgIHRoaXMuaGFuZGxlVyhlKTtcbiAgfVxuXG4gIGhhbmRsZVNFKGU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuaGFuZGxlUyhlKTtcbiAgICB0aGlzLmhhbmRsZUUoZSk7XG4gIH1cblxuICB0b2dnbGUoKTogdm9pZCB7XG4gICAgdGhpcy5yZXNpemVFbmFibGVkID0gdGhpcy5ncmlkc3Rlckl0ZW0uY2FuQmVSZXNpemVkKCk7XG4gIH1cblxuICBkcmFnU3RhcnREZWxheShlOiBhbnkpOiB2b2lkIHtcbiAgICBHcmlkc3RlclV0aWxzLmNoZWNrVG91Y2hFdmVudChlKTtcbiAgICBpZiAoIXRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMucmVzaXphYmxlLmRlbGF5U3RhcnQpIHtcbiAgICAgIHRoaXMuZHJhZ1N0YXJ0KGUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmRyYWdTdGFydChlKTtcbiAgICAgIGNhbmNlbERyYWcoKTtcbiAgICB9LCB0aGlzLmdyaWRzdGVyLiRvcHRpb25zLnJlc2l6YWJsZS5kZWxheVN0YXJ0KTtcbiAgICBjb25zdCBjYW5jZWxNb3VzZSA9IHRoaXMuZ3JpZHN0ZXJJdGVtLnJlbmRlcmVyLmxpc3RlbignZG9jdW1lbnQnLCAnbW91c2V1cCcsIGNhbmNlbERyYWcpO1xuICAgIGNvbnN0IGNhbmNlbE1vdXNlTGVhdmUgPSB0aGlzLmdyaWRzdGVySXRlbS5yZW5kZXJlci5saXN0ZW4oJ2RvY3VtZW50JywgJ21vdXNlbGVhdmUnLCBjYW5jZWxEcmFnKTtcbiAgICBjb25zdCBjYW5jZWxPbkJsdXIgPSB0aGlzLmdyaWRzdGVySXRlbS5yZW5kZXJlci5saXN0ZW4oJ3dpbmRvdycsICdibHVyJywgY2FuY2VsRHJhZyk7XG4gICAgY29uc3QgY2FuY2VsVG91Y2hNb3ZlID0gdGhpcy5ncmlkc3Rlckl0ZW0ucmVuZGVyZXIubGlzdGVuKCdkb2N1bWVudCcsICd0b3VjaG1vdmUnLCBjYW5jZWxNb3ZlKTtcbiAgICBjb25zdCBjYW5jZWxUb3VjaEVuZCA9IHRoaXMuZ3JpZHN0ZXJJdGVtLnJlbmRlcmVyLmxpc3RlbignZG9jdW1lbnQnLCAndG91Y2hlbmQnLCBjYW5jZWxEcmFnKTtcbiAgICBjb25zdCBjYW5jZWxUb3VjaENhbmNlbCA9IHRoaXMuZ3JpZHN0ZXJJdGVtLnJlbmRlcmVyLmxpc3RlbignZG9jdW1lbnQnLCAndG91Y2hjYW5jZWwnLCBjYW5jZWxEcmFnKTtcblxuICAgIGZ1bmN0aW9uIGNhbmNlbE1vdmUoZXZlbnRNb3ZlOiBhbnkpIHtcbiAgICAgIEdyaWRzdGVyVXRpbHMuY2hlY2tUb3VjaEV2ZW50KGV2ZW50TW92ZSk7XG4gICAgICBpZiAoTWF0aC5hYnMoZXZlbnRNb3ZlLmNsaWVudFggLSBlLmNsaWVudFgpID4gOSB8fCBNYXRoLmFicyhldmVudE1vdmUuY2xpZW50WSAtIGUuY2xpZW50WSkgPiA5KSB7XG4gICAgICAgIGNhbmNlbERyYWcoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYW5jZWxEcmFnKCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgY2FuY2VsT25CbHVyKCk7XG4gICAgICBjYW5jZWxNb3VzZSgpO1xuICAgICAgY2FuY2VsTW91c2VMZWF2ZSgpO1xuICAgICAgY2FuY2VsVG91Y2hNb3ZlKCk7XG4gICAgICBjYW5jZWxUb3VjaEVuZCgpO1xuICAgICAgY2FuY2VsVG91Y2hDYW5jZWwoKTtcbiAgICB9XG4gIH1cblxuICBzZXRJdGVtVG9wKHRvcDogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgdHJhbnNmb3JtID0gJ3RyYW5zbGF0ZSgnICsgdGhpcy5sZWZ0ICsgJ3B4LCAnICsgdG9wICsgJ3B4KSc7XG4gICAgdGhpcy5ncmlkc3Rlckl0ZW0ucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5ncmlkc3Rlckl0ZW0uZWwsICd0cmFuc2Zvcm0nLCB0cmFuc2Zvcm0pO1xuICB9XG5cbiAgc2V0SXRlbUxlZnQobGVmdDogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgdHJhbnNmb3JtID0gJ3RyYW5zbGF0ZSgnICsgbGVmdCArICdweCwgJyArIHRoaXMudG9wICsgJ3B4KSc7XG4gICAgdGhpcy5ncmlkc3Rlckl0ZW0ucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5ncmlkc3Rlckl0ZW0uZWwsICd0cmFuc2Zvcm0nLCB0cmFuc2Zvcm0pO1xuICB9XG5cbiAgc2V0SXRlbUhlaWdodChoZWlnaHQ6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuZ3JpZHN0ZXJJdGVtLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZ3JpZHN0ZXJJdGVtLmVsLCAnaGVpZ2h0JywgaGVpZ2h0ICsgJ3B4Jyk7XG4gIH1cblxuICBzZXRJdGVtV2lkdGgod2lkdGg6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuZ3JpZHN0ZXJJdGVtLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZ3JpZHN0ZXJJdGVtLmVsLCAnd2lkdGgnLCB3aWR0aCArICdweCcpO1xuICB9XG59XG4iLCJpbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZiwgSG9zdCwgSW5wdXQsIE5nWm9uZSwgT25EZXN0cm95LCBPbkluaXQsIFJlbmRlcmVyMiwgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge0dyaWRzdGVySXRlbX0gZnJvbSAnLi9ncmlkc3Rlckl0ZW0uaW50ZXJmYWNlJztcbmltcG9ydCB7R3JpZHN0ZXJEcmFnZ2FibGV9IGZyb20gJy4vZ3JpZHN0ZXJEcmFnZ2FibGUuc2VydmljZSc7XG5pbXBvcnQge0dyaWRzdGVyUmVzaXphYmxlfSBmcm9tICcuL2dyaWRzdGVyUmVzaXphYmxlLnNlcnZpY2UnO1xuaW1wb3J0IHtHcmlkc3RlclV0aWxzfSBmcm9tICcuL2dyaWRzdGVyVXRpbHMuc2VydmljZSc7XG5pbXBvcnQge0dyaWRzdGVySXRlbUNvbXBvbmVudEludGVyZmFjZX0gZnJvbSAnLi9ncmlkc3Rlckl0ZW1Db21wb25lbnQuaW50ZXJmYWNlJztcbmltcG9ydCB7R3JpZHN0ZXJDb21wb25lbnR9IGZyb20gJy4vZ3JpZHN0ZXIuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ3JpZHN0ZXItaXRlbScsXG4gIHRlbXBsYXRlVXJsOiAnLi9ncmlkc3Rlckl0ZW0uaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2dyaWRzdGVySXRlbS5jc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBHcmlkc3Rlckl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgR3JpZHN0ZXJJdGVtQ29tcG9uZW50SW50ZXJmYWNlIHtcbiAgQElucHV0KCkgaXRlbTogR3JpZHN0ZXJJdGVtO1xuICAkaXRlbTogR3JpZHN0ZXJJdGVtO1xuICBlbDogYW55O1xuICBncmlkc3RlcjogR3JpZHN0ZXJDb21wb25lbnQ7XG4gIHRvcDogbnVtYmVyO1xuICBsZWZ0OiBudW1iZXI7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xuICBkcmFnOiBHcmlkc3RlckRyYWdnYWJsZTtcbiAgcmVzaXplOiBHcmlkc3RlclJlc2l6YWJsZTtcbiAgbm90UGxhY2VkOiBib29sZWFuO1xuICBpbml0OiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKGVsOiBFbGVtZW50UmVmLCBASG9zdCgpIGdyaWRzdGVyOiBHcmlkc3RlckNvbXBvbmVudCwgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgem9uZTogTmdab25lKSB7XG4gICAgdGhpcy5lbCA9IGVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy4kaXRlbSA9IHtcbiAgICAgIGNvbHM6IC0xLFxuICAgICAgcm93czogLTEsXG4gICAgICB4OiAtMSxcbiAgICAgIHk6IC0xLFxuICAgIH07XG4gICAgdGhpcy5ncmlkc3RlciA9IGdyaWRzdGVyO1xuICAgIHRoaXMuZHJhZyA9IG5ldyBHcmlkc3RlckRyYWdnYWJsZSh0aGlzLCBncmlkc3RlciwgdGhpcy56b25lKTtcbiAgICB0aGlzLnJlc2l6ZSA9IG5ldyBHcmlkc3RlclJlc2l6YWJsZSh0aGlzLCBncmlkc3RlciwgdGhpcy56b25lKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlT3B0aW9ucygpO1xuICAgIHRoaXMuZ3JpZHN0ZXIuYWRkSXRlbSh0aGlzKTtcbiAgfVxuXG4gIHVwZGF0ZU9wdGlvbnMoKTogdm9pZCB7XG4gICAgdGhpcy4kaXRlbSA9IEdyaWRzdGVyVXRpbHMubWVyZ2UodGhpcy4kaXRlbSwgdGhpcy5pdGVtLCB7XG4gICAgICBjb2xzOiB1bmRlZmluZWQsXG4gICAgICByb3dzOiB1bmRlZmluZWQsXG4gICAgICB4OiB1bmRlZmluZWQsXG4gICAgICB5OiB1bmRlZmluZWQsXG4gICAgICBkcmFnRW5hYmxlZDogdW5kZWZpbmVkLFxuICAgICAgcmVzaXplRW5hYmxlZDogdW5kZWZpbmVkLFxuICAgICAgY29tcGFjdEVuYWJsZWQ6IHVuZGVmaW5lZCxcbiAgICAgIG1heEl0ZW1Sb3dzOiB1bmRlZmluZWQsXG4gICAgICBtaW5JdGVtUm93czogdW5kZWZpbmVkLFxuICAgICAgbWF4SXRlbUNvbHM6IHVuZGVmaW5lZCxcbiAgICAgIG1pbkl0ZW1Db2xzOiB1bmRlZmluZWQsXG4gICAgICBtYXhJdGVtQXJlYTogdW5kZWZpbmVkLFxuICAgICAgbWluSXRlbUFyZWE6IHVuZGVmaW5lZCxcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZ3JpZHN0ZXIucmVtb3ZlSXRlbSh0aGlzKTtcbiAgICBkZWxldGUgdGhpcy5ncmlkc3RlcjtcbiAgICB0aGlzLmRyYWcuZGVzdHJveSgpO1xuICAgIGRlbGV0ZSB0aGlzLmRyYWc7XG4gICAgdGhpcy5yZXNpemUuZGVzdHJveSgpO1xuICAgIGRlbGV0ZSB0aGlzLnJlc2l6ZTtcbiAgfVxuXG4gIHNldFNpemUoKTogdm9pZCB7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLCAnZGlzcGxheScsIHRoaXMubm90UGxhY2VkID8gJycgOiAnYmxvY2snKTtcbiAgICB0aGlzLmdyaWRzdGVyLmdyaWRSZW5kZXJlci51cGRhdGVJdGVtKHRoaXMuZWwsIHRoaXMuJGl0ZW0sIHRoaXMucmVuZGVyZXIpO1xuICAgIHRoaXMudXBkYXRlSXRlbVNpemUoKTtcbiAgfVxuXG4gIHVwZGF0ZUl0ZW1TaXplKCkge1xuICAgIGNvbnN0IHRvcCA9IHRoaXMuJGl0ZW0ueSAqIHRoaXMuZ3JpZHN0ZXIuY3VyUm93SGVpZ2h0O1xuICAgIGNvbnN0IGxlZnQgPSB0aGlzLiRpdGVtLnggKiB0aGlzLmdyaWRzdGVyLmN1ckNvbFdpZHRoO1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy4kaXRlbS5jb2xzICogdGhpcy5ncmlkc3Rlci5jdXJDb2xXaWR0aCAtIHRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMubWFyZ2luO1xuICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuJGl0ZW0ucm93cyAqIHRoaXMuZ3JpZHN0ZXIuY3VyUm93SGVpZ2h0IC0gdGhpcy5ncmlkc3Rlci4kb3B0aW9ucy5tYXJnaW47XG5cbiAgICBpZiAoIXRoaXMuaW5pdCAmJiB3aWR0aCA+IDAgJiYgaGVpZ2h0ID4gMCkge1xuICAgICAgdGhpcy5pbml0ID0gdHJ1ZTtcbiAgICAgIGlmICh0aGlzLml0ZW0uaW5pdENhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuaXRlbS5pbml0Q2FsbGJhY2sodGhpcy5pdGVtLCB0aGlzKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmdyaWRzdGVyLm9wdGlvbnMuaXRlbUluaXRDYWxsYmFjaykge1xuICAgICAgICB0aGlzLmdyaWRzdGVyLm9wdGlvbnMuaXRlbUluaXRDYWxsYmFjayh0aGlzLml0ZW0sIHRoaXMpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMuc2Nyb2xsVG9OZXdJdGVtcykge1xuICAgICAgICB0aGlzLmVsLnNjcm9sbEludG9WaWV3KGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHdpZHRoICE9PSB0aGlzLndpZHRoIHx8IGhlaWdodCAhPT0gdGhpcy5oZWlnaHQpIHtcbiAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgaWYgKHRoaXMuZ3JpZHN0ZXIub3B0aW9ucy5pdGVtUmVzaXplQ2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5ncmlkc3Rlci5vcHRpb25zLml0ZW1SZXNpemVDYWxsYmFjayh0aGlzLml0ZW0sIHRoaXMpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnRvcCA9IHRvcDtcbiAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICB9XG5cbiAgaXRlbUNoYW5nZWQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZ3JpZHN0ZXIub3B0aW9ucy5pdGVtQ2hhbmdlQ2FsbGJhY2spIHtcbiAgICAgIHRoaXMuZ3JpZHN0ZXIub3B0aW9ucy5pdGVtQ2hhbmdlQ2FsbGJhY2sodGhpcy5pdGVtLCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICBjaGVja0l0ZW1DaGFuZ2VzKG5ld1ZhbHVlOiBHcmlkc3Rlckl0ZW0sIG9sZFZhbHVlOiBHcmlkc3Rlckl0ZW0pOiB2b2lkIHtcbiAgICBpZiAobmV3VmFsdWUucm93cyA9PT0gb2xkVmFsdWUucm93cyAmJiBuZXdWYWx1ZS5jb2xzID09PSBvbGRWYWx1ZS5jb2xzICYmIG5ld1ZhbHVlLnggPT09IG9sZFZhbHVlLnggJiYgbmV3VmFsdWUueSA9PT0gb2xkVmFsdWUueSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5ncmlkc3Rlci5jaGVja0NvbGxpc2lvbih0aGlzLiRpdGVtKSkge1xuICAgICAgdGhpcy4kaXRlbS54ID0gb2xkVmFsdWUueCB8fCAwO1xuICAgICAgdGhpcy4kaXRlbS55ID0gb2xkVmFsdWUueSB8fCAwO1xuICAgICAgdGhpcy4kaXRlbS5jb2xzID0gb2xkVmFsdWUuY29scyB8fCAxO1xuICAgICAgdGhpcy4kaXRlbS5yb3dzID0gb2xkVmFsdWUucm93cyB8fCAxO1xuICAgICAgdGhpcy5zZXRTaXplKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXRlbS5jb2xzID0gdGhpcy4kaXRlbS5jb2xzO1xuICAgICAgdGhpcy5pdGVtLnJvd3MgPSB0aGlzLiRpdGVtLnJvd3M7XG4gICAgICB0aGlzLml0ZW0ueCA9IHRoaXMuJGl0ZW0ueDtcbiAgICAgIHRoaXMuaXRlbS55ID0gdGhpcy4kaXRlbS55O1xuICAgICAgdGhpcy5ncmlkc3Rlci5jYWxjdWxhdGVMYXlvdXREZWJvdW5jZSgpO1xuICAgICAgdGhpcy5pdGVtQ2hhbmdlZCgpO1xuICAgIH1cbiAgfVxuXG4gIGNhbkJlRHJhZ2dlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXRoaXMuZ3JpZHN0ZXIubW9iaWxlICYmXG4gICAgICAodGhpcy4kaXRlbS5kcmFnRW5hYmxlZCA9PT0gdW5kZWZpbmVkID8gdGhpcy5ncmlkc3Rlci4kb3B0aW9ucy5kcmFnZ2FibGUuZW5hYmxlZCA6IHRoaXMuJGl0ZW0uZHJhZ0VuYWJsZWQpO1xuICB9XG5cbiAgY2FuQmVSZXNpemVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy5ncmlkc3Rlci5tb2JpbGUgJiZcbiAgICAgICh0aGlzLiRpdGVtLnJlc2l6ZUVuYWJsZWQgPT09IHVuZGVmaW5lZCA/IHRoaXMuZ3JpZHN0ZXIuJG9wdGlvbnMucmVzaXphYmxlLmVuYWJsZWQgOiB0aGlzLiRpdGVtLnJlc2l6ZUVuYWJsZWQpO1xuICB9XG5cbn1cbiIsImltcG9ydCB7Q29tcG9uZW50LCBFbGVtZW50UmVmLCBIb3N0LCBPbkRlc3Ryb3ksIFJlbmRlcmVyMiwgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge0dyaWRzdGVyQ29tcG9uZW50fSBmcm9tICcuL2dyaWRzdGVyLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dyaWRzdGVyLXByZXZpZXcnLFxuICB0ZW1wbGF0ZTogJycsXG4gIHN0eWxlVXJsczogWycuL2dyaWRzdGVyUHJldmlldy5jc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBHcmlkc3RlclByZXZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBlbDogYW55O1xuICBncmlkc3RlcjogR3JpZHN0ZXJDb21wb25lbnQ7XG5cbiAgY29uc3RydWN0b3IoZWw6IEVsZW1lbnRSZWYsIEBIb3N0KCkgZ3JpZHN0ZXI6IEdyaWRzdGVyQ29tcG9uZW50LCBwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIHRoaXMuZWwgPSBlbC5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMuZ3JpZHN0ZXIgPSBncmlkc3RlcjtcbiAgICB0aGlzLmdyaWRzdGVyLnByZXZpZXdTdHlsZSA9IHRoaXMucHJldmlld1N0eWxlLmJpbmQodGhpcyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBkZWxldGUgdGhpcy5lbDtcbiAgICBkZWxldGUgdGhpcy5ncmlkc3Rlci5wcmV2aWV3U3R5bGU7XG4gICAgZGVsZXRlIHRoaXMuZ3JpZHN0ZXI7XG4gIH1cblxuICBwcmV2aWV3U3R5bGUoZHJhZz86IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZ3JpZHN0ZXIubW92aW5nSXRlbSkge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLCAnZGlzcGxheScsICcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuZ3JpZHN0ZXIuY29tcGFjdCAmJiBkcmFnKSB7XG4gICAgICAgIHRoaXMuZ3JpZHN0ZXIuY29tcGFjdC5jaGVja0NvbXBhY3RJdGVtKHRoaXMuZ3JpZHN0ZXIubW92aW5nSXRlbSk7XG4gICAgICB9XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwsICdkaXNwbGF5JywgJ2Jsb2NrJyk7XG4gICAgICB0aGlzLmdyaWRzdGVyLmdyaWRSZW5kZXJlci51cGRhdGVJdGVtKHRoaXMuZWwsIHRoaXMuZ3JpZHN0ZXIubW92aW5nSXRlbSwgdGhpcy5yZW5kZXJlcik7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge0dyaWRzdGVyQ29tcG9uZW50fSBmcm9tICcuL2dyaWRzdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQge0dyaWRzdGVySXRlbUNvbXBvbmVudH0gZnJvbSAnLi9ncmlkc3Rlckl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7R3JpZHN0ZXJQcmV2aWV3Q29tcG9uZW50fSBmcm9tICcuL2dyaWRzdGVyUHJldmlldy5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBHcmlkc3RlckNvbXBvbmVudCxcbiAgICBHcmlkc3Rlckl0ZW1Db21wb25lbnQsXG4gICAgR3JpZHN0ZXJQcmV2aWV3Q29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW0dyaWRzdGVyQ29tcG9uZW50LCBHcmlkc3Rlckl0ZW1Db21wb25lbnRdLFxuICBwcm92aWRlcnM6IFtdLFxuICBib290c3RyYXA6IFtdXG59KVxuZXhwb3J0IGNsYXNzIEdyaWRzdGVyTW9kdWxlIHtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7SUFTRSxLQUFNLEtBQUs7SUFDWCxnQkFBaUIsZ0JBQWdCO0lBQ2pDLGtCQUFtQixrQkFBa0I7SUFDckMsT0FBUSxPQUFPO0lBQ2YsZUFBZ0IsZUFBZTtJQUMvQixpQkFBa0IsaUJBQWlCOzs7O0lBSW5DLFFBQVMsUUFBUTtJQUNqQixpQkFBa0IsZUFBZTtJQUNqQyxNQUFPLE1BQU07Ozs7SUFJYixNQUFPLE1BQU07SUFDYixXQUFZLFdBQVc7SUFDdkIsYUFBYyxhQUFhO0lBQzNCLGtCQUFtQixnQkFBZ0I7SUFDbkMsa0JBQW1CLGdCQUFnQjtJQUNuQyxtQkFBb0IsaUJBQWlCOzs7Ozs7O0FDN0J2QztBQUVBLElBQWEscUJBQXFCLEdBQW1CO0lBQ25ELFFBQVEsRUFBRSxRQUFRLENBQUMsR0FBRzs7Ozs7OztJ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RyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7UUFDckMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQztRQUN2QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDO1FBQy9ELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7UUFDOUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFDNUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDO1FBQzVFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztRQUN6RSxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3hELElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDMUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUNyRCxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzNELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDO2NBQ3ZILElBQUksQ0FBQyxNQUFNLENBQUM7UUFDaEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUM7Y0FDdEgsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztRQUNuRCxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUM7UUFFM0IsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ3hHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3ZDO2FBQU0sSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQy9HLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3ZDO2FBQU0sSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQy9HLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3ZDO2FBQU0sSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQy9HLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3ZDO2FBQU0sSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ2hILElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQ3hDO2FBQU0sSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ2hILElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQ3hDO2FBQU0sSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ2hILElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsUUFB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

/***/ }),

/***/ "./src/app/progdash/components/classManager/class-manager.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/progdash/components/classManager/class-manager.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ClassManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassManagerComponent", function() { return ClassManagerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/* tslint:disable component-selector  */
var ClassManagerComponent = /** @class */ (function () {
    function ClassManagerComponent() {
    }
    ClassManagerComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ClassManagerComponent.prototype, "classes", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Function)
    ], ClassManagerComponent.prototype, "selectClassHandler", void 0);
    ClassManagerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ClassManager',
            template: "\n    <div class=\"loading\" *ngIf=\"!classes\">\n      <span>Chargement...</span>\n      <mat-progress-bar mode=\"indeterminate\" color=\"#ffd740\"></mat-progress-bar>\n    </div>\n    <div class=\"container\" *ngIf=\"classes\">\n      <h1 mat-dialog-title>Selectionner une classe</h1>\n      <div class=\"wrapper\">\n        <mat-card\n          *ngFor=\"let clazz of classes |\u00A0keyvalue\"\n          (click)=\"selectClassHandler(clazz.key)\">\n            <h5 class=\"title\">{{ clazz.key }}</h5>\n            <mat-card-content>\n              <p>\n                Class info/Visu...\n              </p>\n            </mat-card-content>\n        </mat-card>\n      </div>\n    </div>\n\n  ",
            styles: ["\n    :host {\n      width: 100%;\n      height: 100%;\n      display: flex;\n      align-items: center;\n    }\n    .loading {\n      width: 100%;\n      height: 100%;\n      display: flex;\n      align-content: center;\n      flex-direction: column;\n      justify-content: center;\n      position: absolute;\n      top: 0;\n      left: 0;\n    }\n    .container {\n      width: 100%;\n      height:70%;\n      display: flex;\n      align-items: center;\n      align-content: center;\n      flex-direction: column;\n    }\n    .container > .title {\n      margin: 12px;\n    }\n    .wrapper {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      flex-wrap: wrap;\n      width: 100%;\n      height: 100%;\n    }\n    .wrapper mat-card {\n      width: 150px;\n      height: 100px;\n      margin-left: 12px;\n      margin-top: 12px;\n    }\n    mat-card:hover {\n      cursor: pointer;\n      transform: scale(1.1);\n      transition: transform 1s ease;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [])
    ], ClassManagerComponent);
    return ClassManagerComponent;
}());



/***/ }),

/***/ "./src/app/progdash/components/classManager/index.ts":
/*!***********************************************************!*\
  !*** ./src/app/progdash/components/classManager/index.ts ***!
  \***********************************************************/
/*! exports provided: ClassManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _class_manager_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class-manager.component */ "./src/app/progdash/components/classManager/class-manager.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClassManagerComponent", function() { return _class_manager_component__WEBPACK_IMPORTED_MODULE_0__["ClassManagerComponent"]; });




/***/ }),

/***/ "./src/app/progdash/components/classNameMenu/class-name-menu.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/progdash/components/classNameMenu/class-name-menu.component.ts ***!
  \********************************************************************************/
/*! exports provided: ClassNameMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassNameMenuComponent", function() { return ClassNameMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/* tslint:disable component-selector  */
var ClassNameMenuComponent = /** @class */ (function () {
    function ClassNameMenuComponent() {
        this.selectClassHandler = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.MAX_NB_USERS = 110;
    }
    ClassNameMenuComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ClassNameMenuComponent.prototype, "selectClassHandler", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ClassNameMenuComponent.prototype, "classListData", void 0);
    ClassNameMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ClassNameMenu',
            template: "\n    <button\n      mat-menu-item\n      [disabled]=\"(clazz.nbUsers > MAX_NB_USERS)\"\n      *ngFor=\"let clazz of classListData\"\n      (click)=\"selectClassHandler.emit( clazz )\">\n        <div class=\"container\">\n          <span class=\"class-name\">{{ clazz.name }}</span>\n          <span\n            class=\"class-nb-users\"\n            matTooltip=\"Nombre d'apprenants\">\n             #{{ clazz.nbUsers }}\n            </span>\n        </div>\n    </button>\n  ",
            styles: ["\n    .container {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n    }\n    .class-name, .class-nb-users {\n      text-overflow: ellipsis;\n      white-space: nowrap;\n      overflow: hidden;\n      display: block;\n    }\n    .class-name {\n      min-width: 120px;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [])
    ], ClassNameMenuComponent);
    return ClassNameMenuComponent;
}());



/***/ }),

/***/ "./src/app/progdash/components/classNameMenu/index.ts":
/*!************************************************************!*\
  !*** ./src/app/progdash/components/classNameMenu/index.ts ***!
  \************************************************************/
/*! exports provided: ClassNameMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _class_name_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class-name-menu.component */ "./src/app/progdash/components/classNameMenu/class-name-menu.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClassNameMenuComponent", function() { return _class_name_menu_component__WEBPACK_IMPORTED_MODULE_0__["ClassNameMenuComponent"]; });




/***/ }),

/***/ "./src/app/progdash/components/deltaWidget/delta-widget.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/progdash/components/deltaWidget/delta-widget.component.ts ***!
  \***************************************************************************/
/*! exports provided: DeltaWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeltaWidgetComponent", function() { return DeltaWidgetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DeltaWidgetComponent = /** @class */ (function () {
    function DeltaWidgetComponent() {
    }
    DeltaWidgetComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DeltaWidgetComponent.prototype, "sign", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DeltaWidgetComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DeltaWidgetComponent.prototype, "styles", void 0);
    DeltaWidgetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'DetlaWidget',
            template: "\n    <div class=\"container\">\n      <mat-icon\n        class=\"sign-icon\"\n        aria-label=\"sign\"\n        [ngClass]=\"{\n          'plus-sign': (sign === 'plus'),\n          'minus-sign': (sign === 'minus')\n        }\">\n        {{ sign === 'plus' ? 'add' : 'remove' }}\n      </mat-icon>\n      <span class=\"label\" >{{ data }}</span>\n    </div>\n  ",
            styles: ["\n    :host {\n      display: block;\n    }\n    .container {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      border: 1px solid #eee;\n      border-radius: 12px;\n      width: auto;\n      height: 22px;\n      font-size: 12px;\n      padding: 0 6px;\n      margin: 6px;\n    }\n    .label {\n      text-overflow: ellipsis;\n      white-space: nowrap;\n      overflow: hidden;\n      display: block;\n    }\n    .sign-icon {\n      width: 18px;\n      height: 18px;\n      font-size: 18px;\n      line-height: 18px;\n    }\n    .plus-sign {\n      color: #B2FF59;\n      transition: transform 0.5s ease;\n    }\n    .minus-sign {\n      color: #FF5252;\n      transition: transform 0.5s ease;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [])
    ], DeltaWidgetComponent);
    return DeltaWidgetComponent;
}());



/***/ }),

/***/ "./src/app/progdash/components/deltaWidget/index.ts":
/*!**********************************************************!*\
  !*** ./src/app/progdash/components/deltaWidget/index.ts ***!
  \**********************************************************/
/*! exports provided: DeltaWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _delta_widget_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delta-widget.component */ "./src/app/progdash/components/deltaWidget/delta-widget.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeltaWidgetComponent", function() { return _delta_widget_component__WEBPACK_IMPORTED_MODULE_0__["DeltaWidgetComponent"]; });




/***/ }),

/***/ "./src/app/progdash/components/index.ts":
/*!**********************************************!*\
  !*** ./src/app/progdash/components/index.ts ***!
  \**********************************************/
/*! exports provided: fromComponents, fromEntryComponents, ClassManagerComponent, UserDetailComponent, InfoWidgetComponent, TimelineWidgetComponent, TopNRulesWidgetComponent, TopNUsersWidgetComponent, OpenPVLiveLinkComponent, ProgdashViewPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromComponents", function() { return fromComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromEntryComponents", function() { return fromEntryComponents; });
/* harmony import */ var _progdashView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./progdashView */ "./src/app/progdash/components/progdashView/index.ts");
/* harmony import */ var _progdashManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./progdashManager */ "./src/app/progdash/components/progdashManager/index.ts");
/* harmony import */ var _progBoard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./progBoard */ "./src/app/progdash/components/progBoard/index.ts");
/* harmony import */ var _infoWidget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./infoWidget */ "./src/app/progdash/components/infoWidget/index.ts");
/* harmony import */ var _topNRulesWidget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./topNRulesWidget */ "./src/app/progdash/components/topNRulesWidget/index.ts");
/* harmony import */ var _topNUsersWidget__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./topNUsersWidget */ "./src/app/progdash/components/topNUsersWidget/index.ts");
/* harmony import */ var _timelineWidget__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./timelineWidget */ "./src/app/progdash/components/timelineWidget/index.ts");
/* harmony import */ var _timescaleMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./timescaleMenu */ "./src/app/progdash/components/timescaleMenu/index.ts");
/* harmony import */ var _deltaWidget__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./deltaWidget */ "./src/app/progdash/components/deltaWidget/index.ts");
/* harmony import */ var _userList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./userList */ "./src/app/progdash/components/userList/index.ts");
/* harmony import */ var _classNameMenu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./classNameMenu */ "./src/app/progdash/components/classNameMenu/index.ts");
/* harmony import */ var _moreMenu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./moreMenu */ "./src/app/progdash/components/moreMenu/index.ts");
/* harmony import */ var _userDetail__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./userDetail */ "./src/app/progdash/components/userDetail/index.ts");
/* harmony import */ var _classManager__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./classManager */ "./src/app/progdash/components/classManager/index.ts");
/* harmony import */ var _progTable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./progTable */ "./src/app/progdash/components/progTable/index.ts");
/* harmony import */ var _userTimelineWidget__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./userTimelineWidget */ "./src/app/progdash/components/userTimelineWidget/index.ts");
/* harmony import */ var _progEvaluation__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./progEvaluation */ "./src/app/progdash/components/progEvaluation/index.ts");
/* harmony import */ var _openPVLiveLink__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./openPVLiveLink */ "./src/app/progdash/components/openPVLiveLink/index.ts");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../containers */ "./src/app/progdash/containers/index.ts");
/* harmony import */ var _pipes__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../pipes */ "./src/app/progdash/pipes/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClassManagerComponent", function() { return _classManager__WEBPACK_IMPORTED_MODULE_13__["ClassManagerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserDetailComponent", function() { return _userDetail__WEBPACK_IMPORTED_MODULE_12__["UserDetailComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgdashViewPageComponent", function() { return _containers__WEBPACK_IMPORTED_MODULE_18__["ProgdashViewPageComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InfoWidgetComponent", function() { return _infoWidget__WEBPACK_IMPORTED_MODULE_3__["InfoWidgetComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimelineWidgetComponent", function() { return _timelineWidget__WEBPACK_IMPORTED_MODULE_6__["TimelineWidgetComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopNRulesWidgetComponent", function() { return _topNRulesWidget__WEBPACK_IMPORTED_MODULE_4__["TopNRulesWidgetComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopNUsersWidgetComponent", function() { return _topNUsersWidget__WEBPACK_IMPORTED_MODULE_5__["TopNUsersWidgetComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OpenPVLiveLinkComponent", function() { return _openPVLiveLink__WEBPACK_IMPORTED_MODULE_17__["OpenPVLiveLinkComponent"]; });





















var fromComponents = [
    _progdashView__WEBPACK_IMPORTED_MODULE_0__["ProgdashViewComponent"],
    _progdashManager__WEBPACK_IMPORTED_MODULE_1__["ProgdashManagerComponent"],
    _progBoard__WEBPACK_IMPORTED_MODULE_2__["ProgBoardComponent"],
    _infoWidget__WEBPACK_IMPORTED_MODULE_3__["InfoWidgetComponent"],
    _timelineWidget__WEBPACK_IMPORTED_MODULE_6__["TimelineWidgetComponent"],
    _timescaleMenu__WEBPACK_IMPORTED_MODULE_7__["TimescaleMenuComponent"],
    _deltaWidget__WEBPACK_IMPORTED_MODULE_8__["DeltaWidgetComponent"],
    _userList__WEBPACK_IMPORTED_MODULE_9__["UserLisrComponent"],
    _userDetail__WEBPACK_IMPORTED_MODULE_12__["UserDetailComponent"],
    _classManager__WEBPACK_IMPORTED_MODULE_13__["ClassManagerComponent"],
    _classNameMenu__WEBPACK_IMPORTED_MODULE_10__["ClassNameMenuComponent"],
    _moreMenu__WEBPACK_IMPORTED_MODULE_11__["MoreMenuComponent"],
    _progTable__WEBPACK_IMPORTED_MODULE_14__["ProgTableComponent"],
    _topNRulesWidget__WEBPACK_IMPORTED_MODULE_4__["TopNRulesWidgetComponent"],
    _topNUsersWidget__WEBPACK_IMPORTED_MODULE_5__["TopNUsersWidgetComponent"],
    _userTimelineWidget__WEBPACK_IMPORTED_MODULE_15__["UserTimelineWidgetComponent"],
    _containers__WEBPACK_IMPORTED_MODULE_18__["ProgdashViewPageComponent"],
    _progEvaluation__WEBPACK_IMPORTED_MODULE_16__["ProgEvaluationComponent"],
    _openPVLiveLink__WEBPACK_IMPORTED_MODULE_17__["OpenPVLiveLinkComponent"],
    _pipes__WEBPACK_IMPORTED_MODULE_19__["FormatAttrPipe"],
    _pipes__WEBPACK_IMPORTED_MODULE_19__["MathAbsPipe"],
    _pipes__WEBPACK_IMPORTED_MODULE_19__["FormatSumdPipe"],
];
var fromEntryComponents = [
    _infoWidget__WEBPACK_IMPORTED_MODULE_3__["InfoWidgetComponent"],
    _userDetail__WEBPACK_IMPORTED_MODULE_12__["UserDetailComponent"],
    _classManager__WEBPACK_IMPORTED_MODULE_13__["ClassManagerComponent"],
    _timelineWidget__WEBPACK_IMPORTED_MODULE_6__["TimelineWidgetComponent"],
    _topNRulesWidget__WEBPACK_IMPORTED_MODULE_4__["TopNRulesWidgetComponent"],
    _topNUsersWidget__WEBPACK_IMPORTED_MODULE_5__["TopNUsersWidgetComponent"],
    _userTimelineWidget__WEBPACK_IMPORTED_MODULE_15__["UserTimelineWidgetComponent"],
    _openPVLiveLink__WEBPACK_IMPORTED_MODULE_17__["OpenPVLiveLinkComponent"],
];










/***/ }),

/***/ "./src/app/progdash/components/infoWidget/index.ts":
/*!*********************************************************!*\
  !*** ./src/app/progdash/components/infoWidget/index.ts ***!
  \*********************************************************/
/*! exports provided: InfoWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _info_widget_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./info-widget.component */ "./src/app/progdash/components/infoWidget/info-widget.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InfoWidgetComponent", function() { return _info_widget_component__WEBPACK_IMPORTED_MODULE_0__["InfoWidgetComponent"]; });




/***/ }),

/***/ "./src/app/progdash/components/infoWidget/info-widget.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/progdash/components/infoWidget/info-widget.component.ts ***!
  \*************************************************************************/
/*! exports provided: InfoWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoWidgetComponent", function() { return InfoWidgetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment_duration_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment-duration-format */ "./node_modules/moment-duration-format/lib/moment-duration-format.js");
/* harmony import */ var moment_duration_format__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment_duration_format__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/* tslint:disable component-selector  */
var InfoWidgetComponent = /** @class */ (function () {
    function InfoWidgetComponent() {
        this.checkWidgetHandler = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    InfoWidgetComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], InfoWidgetComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], InfoWidgetComponent.prototype, "infoLabel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], InfoWidgetComponent.prototype, "timescaleLabel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], InfoWidgetComponent.prototype, "key", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], InfoWidgetComponent.prototype, "id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], InfoWidgetComponent.prototype, "sum", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], InfoWidgetComponent.prototype, "sumd", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], InfoWidgetComponent.prototype, "count", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], InfoWidgetComponent.prototype, "sign", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], InfoWidgetComponent.prototype, "isStartPrintReport", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], InfoWidgetComponent.prototype, "checkWidgetHandler", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], InfoWidgetComponent.prototype, "selectedWidgets", void 0);
    InfoWidgetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'InfoWidget',
            template: "\n    <mat-card class=\"widget-card\" id=\"{{id}}\">\n      <mat-card-header>\n        <mat-card-title>{{ title }}</mat-card-title>\n        <PrintWidget\n          *ngIf=\"isStartPrintReport\"\n          [widgetId]=\"id\"\n          [checked]=\"selectedWidgets.includes(id)\"\n          (checkWidgetHandler)=\"checkWidgetHandler.emit($event)\">\n        </PrintWidget>\n      </mat-card-header>\n      <mat-card-content>\n        <div class=\"item-detail\">\n          <div class=\"item\">\n              <span class=\"item-sum\">\n                {{ sum | formatAttr:key }}\n                <span *ngIf=\"count\"> /{{ count }}</span>\n              </span>\n              <span class=\"item-label\">{{ infoLabel }}</span>\n          </div>\n          <div class=\"item\" *ngIf=\"sign\">\n              <DetlaWidget\n                [sign]=\"sign\"\n                [data]=\"sumd | formatAttr:key\">\n              </DetlaWidget>\n              <span class=\"item-label\">par rapport aux {{ timescaleLabel }}</span>\n          </div>\n        </div>\n      </mat-card-content>\n  </mat-card>\n  ",
            styles: ["\n    :host {\n      display: flex;\n      width: 100%;\n      height: 100%;\n    }\n    .widget-card {\n      width: 100%;\n      height: 100%;\n      padding: 12px;\n      box-sizing: border-box;\n    }\n    mat-card-content {\n      padding: 12px 0px;\n      height: 80%;\n    }\n    .item-detail {\n      flex-direction: column;\n      height: 95%;\n      width: 100%;\n      justify-content: space-between;\n    }\n    .item {\n      display: flex;\n      align-items: flex-start;\n      width: 100%;\n      height: 50%;\n    }\n    .item-sum {\n      font-size: 24px;\n      font-weight: 500;\n      margin-right: 6px;\n      font-size: 24px;\n      font-weight: 500;\n      margin-right: 6px;\n      white-space: nowrap;\n      display: block;\n    }\n    .item-delta {\n      display: flex;\n    }\n    .item-label {\n      font-size: 13px;\n      margin-top: 6px;\n    }\n    .item-sumd {\n      display: flex;\n      align-items: center;\n      border: 1px solid #eee;\n      border-radius: 10px;\n      justify-content: center;\n      background: #eee;\n      width: 80px;\n      margin-right: 6px;\n      font-size: 12px;\n    }\n    "]
        }),
        __metadata("design:paramtypes", [])
    ], InfoWidgetComponent);
    return InfoWidgetComponent;
}());



/***/ }),

/***/ "./src/app/progdash/components/moreMenu/index.ts":
/*!*******************************************************!*\
  !*** ./src/app/progdash/components/moreMenu/index.ts ***!
  \*******************************************************/
/*! exports provided: MoreMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _more_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./more-menu.component */ "./src/app/progdash/components/moreMenu/more-menu.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MoreMenuComponent", function() { return _more_menu_component__WEBPACK_IMPORTED_MODULE_0__["MoreMenuComponent"]; });




/***/ }),

/***/ "./src/app/progdash/components/moreMenu/more-menu.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/progdash/components/moreMenu/more-menu.component.ts ***!
  \*********************************************************************/
/*! exports provided: MoreMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoreMenuComponent", function() { return MoreMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/* tslint:disable component-selector  */
var MoreMenuComponent = /** @class */ (function () {
    function MoreMenuComponent() {
        this.signOutHandler = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.navigateToSuiviStatsHandler = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    MoreMenuComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], MoreMenuComponent.prototype, "signOutHandler", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], MoreMenuComponent.prototype, "navigateToSuiviStatsHandler", void 0);
    MoreMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'MoreMenu',
            template: "\n    <button mat-menu-item (click)=\"signOutHandler.emit()\">\n      <mat-icon>power_settings_new</mat-icon>\n      D\u00E9connexion\n    </button>\n    <button mat-menu-item (click)=\"navigateToSuiviStatsHandler.emit()\">\n      <mat-icon>arrow_back</mat-icon>\n      Retour au portail\n    </button>\n  ",
            styles: ["\n    :host {\n    }\n  "]
        }),
        __metadata("design:paramtypes", [])
    ], MoreMenuComponent);
    return MoreMenuComponent;
}());



/***/ }),

/***/ "./src/app/progdash/components/openPVLiveLink/index.ts":
/*!*************************************************************!*\
  !*** ./src/app/progdash/components/openPVLiveLink/index.ts ***!
  \*************************************************************/
/*! exports provided: OpenPVLiveLinkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _open_pv_live_link_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./open-pv-live-link.component */ "./src/app/progdash/components/openPVLiveLink/open-pv-live-link.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OpenPVLiveLinkComponent", function() { return _open_pv_live_link_component__WEBPACK_IMPORTED_MODULE_0__["OpenPVLiveLinkComponent"]; });




/***/ }),

/***/ "./src/app/progdash/components/openPVLiveLink/open-pv-live-link.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/progdash/components/openPVLiveLink/open-pv-live-link.component.ts ***!
  \***********************************************************************************/
/*! exports provided: OpenPVLiveLinkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenPVLiveLinkComponent", function() { return OpenPVLiveLinkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OpenPVLiveLinkComponent = /** @class */ (function () {
    function OpenPVLiveLinkComponent(dialogRef) {
        this.dialogRef = dialogRef;
        this.link = '';
        this.isGenerateLinkSuccess = false;
        this.selectedRules = [];
        this.launchPVLiveHandler = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cancelPVLiveHandler = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    OpenPVLiveLinkComponent.prototype.ngOnInit = function () { };
    OpenPVLiveLinkComponent.prototype.onNavigate = function (_) {
        this.launchPVLiveHandler.emit(this.selectedRules);
        this.dialogRef.close();
    };
    OpenPVLiveLinkComponent.prototype.onCloseClick = function ($event) {
        this.cancelPVLiveHandler.emit($event);
        this.dialogRef.close();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], OpenPVLiveLinkComponent.prototype, "link", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], OpenPVLiveLinkComponent.prototype, "isGenerateLinkSuccess", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], OpenPVLiveLinkComponent.prototype, "selectedRules", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], OpenPVLiveLinkComponent.prototype, "launchPVLiveHandler", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], OpenPVLiveLinkComponent.prototype, "cancelPVLiveHandler", void 0);
    OpenPVLiveLinkComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'OpenPVLiveLink',
            template: "\n    <div class=\"container\">\n      <div class=\"header\">\n        <span class=\"fill\"></span>\n        <button\n          class=\"fab-button mat-32\"\n          mat-stroked-button\n          (click)=\"onCloseClick( $event )\">\n            <mat-icon aria-label=\"menu\">close</mat-icon>\n        </button>\n      </div>\n      <div class=\"sync\" *ngIf=\"!isGenerateLinkSuccess\">\n        G\u00E9n\u00E9ration du lien...\n        <mat-progress-bar mode=\"indeterminate\" color=\"red\"></mat-progress-bar>\n      </div>\n      <div class=\"info\" *ngIf=\"isGenerateLinkSuccess\">\n        <p>Merci de cliquer sur le lien ci-dessous pour lancer le mode pr\u00E9sentiel </p>\n      </div>\n      <div class=\"link\" *ngIf=\"isGenerateLinkSuccess\">\n        <mat-icon\n          class=\"back-icon\"\n          aria-label=\"open_in_new\">\n            open_in_new\n        </mat-icon>\n        <span>\n          <a target=\"_blank\" href=\"{{link}}\" (click)=\"onNavigate( $event )\">\n            Lancez le mode pr\u00E9sentiel\n          </a>\n        </span>\n      </div>\n    </div>\n  ",
            styles: ["\n    :host {\n      width: 100%;\n      height: 100%;\n    }\n    .header {\n      width: 100%;\n      height: 46px;\n      padding: 0 24px;\n      display: flex;\n      align-items: center;\n    }\n    .container {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n    }\n    .info {\n      height: 100px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      margin-bottom: 24px;\n    }\n    .info p {\n      width: 80%;\n      text-align: center;\n    }\n    .link {\n      font-size: 14px;\n      font-weight: 700;\n      display: flex;\n      align-items: center;\n    }\n    .sync {\n      width: 100%;\n      display: flex;\n      align-content: center;\n      flex-direction: column;\n      justify-content: center;\n      z-index: 1000;\n    }\n\n  "]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
    ], OpenPVLiveLinkComponent);
    return OpenPVLiveLinkComponent;
}());



/***/ }),

/***/ "./src/app/progdash/components/progBoard/index.ts":
/*!********************************************************!*\
  !*** ./src/app/progdash/components/progBoard/index.ts ***!
  \********************************************************/
/*! exports provided: ProgBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _prog_board_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prog-board.component */ "./src/app/progdash/components/progBoard/prog-board.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgBoardComponent", function() { return _prog_board_component__WEBPACK_IMPORTED_MODULE_0__["ProgBoardComponent"]; });




/***/ }),

/***/ "./src/app/progdash/components/progBoard/prog-board.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/progdash/components/progBoard/prog-board.component.ts ***!
  \***********************************************************************/
/*! exports provided: ProgBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgBoardComponent", function() { return ProgBoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_gridster2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-gridster2 */ "./node_modules/angular-gridster2/fesm5/angular-gridster2.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components */ "./src/app/progdash/components/index.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Timescale;
(function (Timescale) {
    Timescale["lastWeek"] = "7 derniers jours";
    Timescale["lastMonth"] = "30 derniers jours";
})(Timescale || (Timescale = {}));
/* tslint:disable component-selector  */
var ProgBoardComponent = /** @class */ (function () {
    function ProgBoardComponent() {
        this.checkRuleHandler = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.launchPVLiveHandler = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.generatePVLiveLinkHandler = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cancelPVLiveHandler = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.checkWidgetHandler = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.hoverWidgetTraceHandler = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.moreRuleClickHandler = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.openProgTableHandler = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.classes$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({ byId: null, allIds: null });
        this.selectedClass$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.selectedTimescale$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        this.selectedRules$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.isStartPrintReport$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.update$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this.selectedClass$, this.selectedTimescale$, this.isStartPrintReport$, this.selectedRules$, this.classes$);
        this.colDefaultWidth = 100;
        this.colDefaultHeight = 30;
    }
    ProgBoardComponent_1 = ProgBoardComponent;
    ProgBoardComponent.itemChange = function (item, itemComponent) {
        // console.log( 'itemChanged', item, itemComponent );
    };
    ProgBoardComponent.itemResize = function (item, itemComponent) {
        // console.log( 'itemResized', item, itemComponent );
    };
    ProgBoardComponent.prototype.ngAfterViewInit = function () { };
    ProgBoardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.boardOptions = {
            itemChangeCallback: ProgBoardComponent_1.itemChange,
            itemResizeCallback: ProgBoardComponent_1.itemResize,
            compactType: angular_gridster2__WEBPACK_IMPORTED_MODULE_2__["CompactType"].CompactLeft,
            swap: true,
            gridType: angular_gridster2__WEBPACK_IMPORTED_MODULE_2__["GridType"].Fixed,
            displayGrid: angular_gridster2__WEBPACK_IMPORTED_MODULE_2__["DisplayGrid"].OnDragAndResize,
            pushItems: true,
            draggable: {
                enabled: false,
            },
            resizable: {
                enabled: false,
            },
            fixedColWidth: Math.floor(this.boardWidth / 12),
            fixedRowHeight: 60,
            margin: 10,
        };
        this.boardGrid = {
            score: {
                grid: { cols: 3, rows: 3, y: 0, x: 0 },
                component: _components__WEBPACK_IMPORTED_MODULE_4__["InfoWidgetComponent"],
                data: {
                    title: 'Règles acquises',
                    infoLabel: 'en moyenne par apprenant',
                },
            },
            time: {
                grid: { cols: 3, rows: 3, y: 0, x: 3 },
                component: _components__WEBPACK_IMPORTED_MODULE_4__["InfoWidgetComponent"],
                data: {
                    title: 'Temps d’entrainement',
                    infoLabel: 'en moyenne par apprenant',
                },
            },
            activeUsers: {
                grid: { cols: 3, rows: 3, y: 0, x: 6 },
                component: _components__WEBPACK_IMPORTED_MODULE_4__["InfoWidgetComponent"],
                data: {
                    title: 'Apprenants actifs',
                    infoLabel: '',
                },
            },
            inactiveUsers: {
                grid: { cols: 3, rows: 3, y: 0, x: 9 },
                component: _components__WEBPACK_IMPORTED_MODULE_4__["InfoWidgetComponent"],
                data: {
                    title: 'Apprenants inactifs',
                    infoLabel: '',
                },
            },
            connections: {
                grid: { cols: 3 * 4, rows: 4, y: 3, x: 0 },
                component: _components__WEBPACK_IMPORTED_MODULE_4__["TimelineWidgetComponent"],
                data: {
                    title: 'Nombre de connexions cumulées par jour',
                },
            },
            'topNUsers.score': {
                grid: { cols: 3, rows: 6, y: 7, x: 0 },
                component: _components__WEBPACK_IMPORTED_MODULE_4__["TopNUsersWidgetComponent"],
                data: {
                    title: 'Meilleurs scores',
                    openProgTableHandler: this.openProgTableHandler,
                },
            },
            'topNUsers.time': {
                grid: { cols: 3, rows: 6, y: 7, x: 3 },
                component: _components__WEBPACK_IMPORTED_MODULE_4__["TopNUsersWidgetComponent"],
                data: {
                    title: 'Meilleurs engagements',
                    openProgTableHandler: this.openProgTableHandler,
                },
            },
            'topNUsers.help': {
                grid: { cols: 3, rows: 6, y: 7, x: 6 },
                component: _components__WEBPACK_IMPORTED_MODULE_4__["TopNUsersWidgetComponent"],
                data: {
                    title: 'Besoin d\'aide',
                    openProgTableHandler: this.openProgTableHandler,
                },
            },
            'topNUsers.dropout': {
                grid: { cols: 3, rows: 6, y: 7, x: 9 },
                component: _components__WEBPACK_IMPORTED_MODULE_4__["TopNUsersWidgetComponent"],
                data: {
                    title: 'Manque de pratique',
                    openProgTableHandler: this.openProgTableHandler,
                },
            },
            'topNRules.focused': {
                grid: { cols: 4, rows: 6, y: 13, x: 0 },
                component: _components__WEBPACK_IMPORTED_MODULE_4__["TopNRulesWidgetComponent"],
                data: {
                    title: 'Les règles les plus difficiles en cours d’apprentissage',
                    checkRuleHandler: this.checkRuleHandler,
                },
            },
            'topNRules.acquired': {
                grid: { cols: 4, rows: 6, y: 13, x: 4 },
                component: _components__WEBPACK_IMPORTED_MODULE_4__["TopNRulesWidgetComponent"],
                data: {
                    title: 'Les règles acquises les plus difficiles',
                    checkRuleHandler: this.checkRuleHandler,
                },
            },
            'topNRules.known': {
                grid: { cols: 4, rows: 6, y: 13, x: 8 },
                component: _components__WEBPACK_IMPORTED_MODULE_4__["TopNRulesWidgetComponent"],
                data: {
                    title: 'Exemples de règles sues initialement',
                    checkRuleHandler: this.checkRuleHandler,
                },
            },
        };
        this.updateSup = this.update$.subscribe(function (_) {
            var data, addedVal;
            if (_this.selectedTimescale) {
                Object(lodash__WEBPACK_IMPORTED_MODULE_3__["each"])(_this.boardGrid, function (value, key) {
                    data = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["get"])(_this.classes, "byId." + _this.selectedClass.id + ".insights." + _this.selectedTimescale + "." + key);
                    if ((key === 'connections') ||
                        (Object(lodash__WEBPACK_IMPORTED_MODULE_3__["startsWith"])(key, 'topNRules')) ||
                        (Object(lodash__WEBPACK_IMPORTED_MODULE_3__["startsWith"])(key, 'topNUsers'))) {
                        addedVal = { data: data };
                    }
                    else {
                        addedVal = __assign({}, data, { sumd: Math.abs(Object(lodash__WEBPACK_IMPORTED_MODULE_3__["get"])(data, 'sumd')), sign: Object(lodash__WEBPACK_IMPORTED_MODULE_3__["get"])(data, 'sumd') >= 0 ? 'plus' : 'minus' });
                    }
                    Object(lodash__WEBPACK_IMPORTED_MODULE_3__["set"])(value, 'data', __assign({}, value.data, addedVal, { id: Object(lodash__WEBPACK_IMPORTED_MODULE_3__["replace"])(key, '.', '-'), key: Object(lodash__WEBPACK_IMPORTED_MODULE_3__["last"])(Object(lodash__WEBPACK_IMPORTED_MODULE_3__["split"])(key, '.')), timescaleLabel: Object(lodash__WEBPACK_IMPORTED_MODULE_3__["get"])(Timescale, _this.selectedTimescale), timescale: _this.selectedTimescale, isStartPrintReport: _this.isStartPrintReport, checkWidgetHandler: _this.checkWidgetHandler, moreRuleClickHandler: _this.moreRuleClickHandler, selectedWidgets: _this.selectedWidgets, selectedRules: _this.selectedRules, isPVLive: true, users: Object(lodash__WEBPACK_IMPORTED_MODULE_3__["get"])(_this.classes, "byId." + _this.selectedClass.id + ".users", []) }));
                });
                console.log('=========== this.boardGrid', _this.boardGrid);
            }
        });
    };
    ProgBoardComponent.prototype.ngOnDestroy = function () {
        this.updateSup.unsubscribe();
    };
    ProgBoardComponent.prototype.changedOptions = function () {
        this.boardOptions.api.optionsChanged();
    };
    ProgBoardComponent.prototype.removeItem = function (item) {
        this.boardGrid.splice(this.boardGrid.indexOf(item), 1);
    };
    ProgBoardComponent.prototype.addItem = function () {
        //  this.boardGrid.push({});
    };
    ProgBoardComponent.prototype.onGeneratePVLiveLinkLive = function () {
        this.generatePVLiveLinkHandler.emit(this.selectedRules$.getValue());
    };
    Object.defineProperty(ProgBoardComponent.prototype, "classes", {
        get: function () {
            return this.classes$.getValue();
        },
        set: function (value) {
            this.classes$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgBoardComponent.prototype, "selectedTimescale", {
        get: function () {
            return this.selectedTimescale$.getValue();
        },
        set: function (value) {
            this.selectedTimescale$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgBoardComponent.prototype, "selectedClass", {
        get: function () {
            return this.selectedClass$.getValue();
        },
        set: function (value) {
            this.selectedClass$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgBoardComponent.prototype, "isStartPrintReport", {
        get: function () {
            return this.isStartPrintReport$.getValue();
        },
        set: function (value) {
            this.isStartPrintReport$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgBoardComponent.prototype, "selectedRules", {
        get: function () {
            return this.selectedRules$.getValue();
        },
        set: function (value) {
            this.selectedRules$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    var ProgBoardComponent_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('gridster'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ProgBoardComponent.prototype, "gridElRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProgBoardComponent.prototype, "boardWidth", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProgBoardComponent.prototype, "selectedWidgets", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProgBoardComponent.prototype, "checkRuleHandler", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProgBoardComponent.prototype, "launchPVLiveHandler", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProgBoardComponent.prototype, "generatePVLiveLinkHandler", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProgBoardComponent.prototype, "cancelPVLiveHandler", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProgBoardComponent.prototype, "checkWidgetHandler", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProgBoardComponent.prototype, "hoverWidgetTraceHandler", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProgBoardComponent.prototype, "moreRuleClickHandler", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProgBoardComponent.prototype, "openProgTableHandler", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ProgBoardComponent.prototype, "classes", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ProgBoardComponent.prototype, "selectedTimescale", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ProgBoardComponent.prototype, "selectedClass", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ProgBoardComponent.prototype, "isStartPrintReport", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ProgBoardComponent.prototype, "selectedRules", null);
    ProgBoardComponent = ProgBoardComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ProgBoard',
            template: "\n    <gridster\n      #gridster\n      [options]=\"boardOptions\"\n      data-simplebar\n      data-simplebar-auto-hide=\"false\">\n        <gridster-item\n          class=\"grid-item mat-elevation-z1\"\n          [item]=\"item.value.grid\"\n          *ngFor=\"let item of boardGrid | keyvalue\"\n          (mouseenter)=\"hoverWidgetTraceHandler.emit( { event: 'mouseenter', id: item.key } )\"\n          (mouseleave)=\"hoverWidgetTraceHandler.emit( { event: 'mouseleave', id: item.key } )\">\n\n            <ndc-dynamic\n              [ndcDynamicComponent]=\"item.value.component\"\n              [ndcDynamicInputs]=\"item.value.data\">\n            </ndc-dynamic>\n\n        </gridster-item>\n    </gridster>\n\n    <div\n      class=\"pv-launcher mat-elevation-z3\"\n      *ngIf=\"selectedRules.length\">\n        <button\n          class=\"raised-button\"\n          mat-raised-button\n          matTooltipPosition=\"above\"\n          matTooltip=\"Lancer le mode pr\u00E9sentiel avec les r\u00E8gles s\u00E9lectionn\u00E9es\"\n          (click)=\"onGeneratePVLiveLinkLive()\">\n            <mat-icon\n              class=\"back-icon\"\n              aria-label=\"open_in_new\">\n                open_in_new\n            </mat-icon>\n            <span>\n              Mode Pr\u00E9sentiel | {{ selectedRules.length | formatAttr:'score' }}\n            </span>\n        </button>\n        <button\n          mat-mini-fab\n          (click)=\"cancelPVLiveHandler.emit($event)\">\n          <mat-icon>cancel</mat-icon>\n        </button>\n    </div>\n\n  ",
            styles: ["\n      :host {\n        display: block;\n        height: calc(100vh - 46px);\n        width: 100%;\n      }\n      gridster {\n        background: #eee;\n        box-sizing: border-box;\n        width: 100vw; /*calc(100vw - 300px);*/\n        overflow-x: hidden !important;\n      }\n      .pv-launcher {\n        position: fixed;\n        bottom: 0px;\n        left: 50%;\n        z-index: 2000;\n        transition: all 0.5 ease;\n        border-radius: 4px;\n        padding: 6px 6px;\n        background: #fff;\n      }\n    "]
        }),
        __metadata("design:paramtypes", [])
    ], ProgBoardComponent);
    return ProgBoardComponent;
}());



/***/ }),

/***/ "./src/app/progdash/components/progEvaluation/index.ts":
/*!*************************************************************!*\
  !*** ./src/app/progdash/components/progEvaluation/index.ts ***!
  \*************************************************************/
/*! exports provided: ProgEvaluationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _prog_evaluation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prog-evaluation.component */ "./src/app/progdash/components/progEvaluation/prog-evaluation.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgEvaluationComponent", function() { return _prog_evaluation_component__WEBPACK_IMPORTED_MODULE_0__["ProgEvaluationComponent"]; });




/***/ }),

/***/ "./src/app/progdash/components/progEvaluation/prog-evaluation.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/progdash/components/progEvaluation/prog-evaluation.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ProgEvaluationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgEvaluationComponent", function() { return ProgEvaluationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment_duration_format__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment-duration-format */ "./node_modules/moment-duration-format/lib/moment-duration-format.js");
/* harmony import */ var moment_duration_format__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment_duration_format__WEBPACK_IMPORTED_MODULE_5__);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






moment__WEBPACK_IMPORTED_MODULE_4__["locale"]('fr');
var ProgEvaluationComponent = /** @class */ (function () {
    function ProgEvaluationComponent() {
        this.checkWidgetHandler = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.sortColumnTraceHandler = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.filterColumnTraceHandler = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.hoverWidgetTraceHandler = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.exportTableToCsvHandler = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.evaluationsData$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
        this.colDefaultWidth = 100;
        this.colDefaultHeight = 30;
    }
    ProgEvaluationComponent.prototype.ngOnInit = function () { };
    ProgEvaluationComponent.prototype.ngAfterContentInit = function () {
        this.columns = {
            fullName: {
                name: 'Apprenant',
                histo: '',
                encoding: 'STRING',
                width: 120,
                topBottom: 0,
            },
            evaluationName: {
                name: 'Évaluation',
                histo: 'categorical',
                encoding: 'CAT',
                width: 120,
                topBottom: 0,
                color: this.evalNameColors,
            },
            time: {
                name: 'Temps',
                histo: 'ordinal',
                encoding: 'BAR',
                width: 120,
                formatter: this.timeFormatter,
                topBottom: 0,
            },
            score: {
                name: 'Score',
                histo: 'ordinal',
                encoding: 'BAR',
                formatter: this.scoreFormatter,
                width: 120,
                topBottom: 0,
            },
            mark: {
                name: 'Note /20',
                histo: 'ordinal',
                encoding: 'BAR',
                formatter: this.markFormatter,
                width: 120,
                topBottom: 0,
            },
        };
    };
    ProgEvaluationComponent.prototype.ngOnDestroy = function () {
    };
    Object.defineProperty(ProgEvaluationComponent.prototype, "evaluationsData", {
        get: function () {
            return this.evaluationsData$.getValue();
        },
        set: function (value) {
            this.evaluationsData$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgEvaluationComponent.prototype, "evalNameColors", {
        get: function () {
            var evalNames = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["uniq"])(Object(lodash__WEBPACK_IMPORTED_MODULE_3__["map"])(this.evaluationsData, 'evaluationName'));
            var colorScheme = Object(d3__WEBPACK_IMPORTED_MODULE_2__["scaleOrdinal"])(d3__WEBPACK_IMPORTED_MODULE_2__["schemeCategory10"]).domain(evalNames);
            return Object(lodash__WEBPACK_IMPORTED_MODULE_3__["reduce"])(evalNames, function (acc, key) {
                var _a;
                return (__assign({}, acc, (_a = {}, _a[key] = colorScheme(key), _a)));
            }, {});
        },
        enumerable: true,
        configurable: true
    });
    ProgEvaluationComponent.prototype.timeFormatter = function (time) {
        // replace mins in min because the moment add the letter 's' automatic.
        return moment__WEBPACK_IMPORTED_MODULE_4__["duration"](time, 'minutes').format('h [h] mm [min]').replace('mins', 'min');
    };
    ProgEvaluationComponent.prototype.markFormatter = function (mark) {
        return Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isNil"])(mark) ? '' : mark;
    };
    ProgEvaluationComponent.prototype.scoreFormatter = function (score) {
        return score + '%';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProgEvaluationComponent.prototype, "isStartPrintReport", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ProgEvaluationComponent.prototype, "selectedWidgets", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProgEvaluationComponent.prototype, "checkWidgetHandler", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProgEvaluationComponent.prototype, "sortColumnTraceHandler", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProgEvaluationComponent.prototype, "filterColumnTraceHandler", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProgEvaluationComponent.prototype, "hoverWidgetTraceHandler", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProgEvaluationComponent.prototype, "exportTableToCsvHandler", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ProgEvaluationComponent.prototype, "evaluationsData", null);
    ProgEvaluationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'ProgEvaluation',
            template: "\n  <div class=\"container\">\n    <mat-card\n      id=\"table-view\"\n      class=\"widget-card table-widget\"\n      data-simplebar\n      data-simplebar-auto-hide=\"false\"\n      (mouseenter)=\"hoverWidgetTraceHandler.emit({event: 'mouseenter',id: 'table-view'})\"\n      (mouseleave)=\"hoverWidgetTraceHandler.emit({event: 'mouseleave',id: 'table-view'})\">\n      <mat-card-header>\n        <span class=\"fill\"></span>\n        <PrintWidget\n          *ngIf=\"isStartPrintReport\"\n          [widgetId]=\"'table-view'\"\n          [checked]=\"selectedWidgets.includes('table-view')\"\n          (checkWidgetHandler)=\"checkWidgetHandler.emit($event)\">\n        </PrintWidget>\n        <button\n          mat-button\n          (click)=\"exportTableToCsvHandler.emit({\n          tableName: 'evaluations', data: evaluationsData\n          })\">\n          <mat-icon class=\"mat-24\" aria-label=\"cloud_download\">cloud_download</mat-icon>\n            <span class=\"csv-export\">Export CSV</span>\n        </button>\n      </mat-card-header>\n      <mat-card-content>\n        <TableViewManager\n          class=\"table-widget\"\n          [tableMode]=\"'normal'\"\n          [data]=\"evaluationsData\"\n          [columns]=\"columns\"\n          [options]=\"{ filter: true, header: true }\"\n          [colDefaultWidth]=\"colDefaultWidth\"\n          [colDefaultHeight]=\"colDefaultHeight\"\n          [isStartPrintReport]=\"isStartPrintReport\"\n          [selectedWidgets]=\"selectedWidgets\"\n          (checkWidgetHandler)=\"checkWidgetHandler.emit($event)\"\n          (sortColumnTraceHandler)=\"sortColumnTraceHandler.emit($event)\"\n          (filterColumnTraceHandler)=\"filterColumnTraceHandler.emit($event)\">\n        </TableViewManager>\n      </mat-card-content>\n    </mat-card>\n  </div>\n  ",
            styles: ["\n      :host {\n        display: flex;\n        align-items: flex-start;\n        width: 100vw;\n        height: 100%;\n        padding: 0px;\n      }\n      .container {\n        display: flex;\n        margin-left: auto;\n        margin-right: auto;\n        padding: 3px;\n        box-sizing: border-box;\n      }\n      .widget-card {\n        padding: 0px;\n        margin: 3px;\n        box-sizing: border-box;\n      }\n      mat-card-content {\n        padding: 12px 0px;\n        width: 700px !important;\n        height: 100%;\n      }\n      mat-card-header {\n        padding: 0px 24px;\n        box-sizing: border-box;\n      }\n      .widget-content {\n        width: 100%;\n        height: 100%;\n      }\n      .table-widget {\n        width: 700px;\n        height: calc(100vh - 58px);\n      }\n      .export-btn {\n        height: 24px;\n        line-height: 24px;\n      }\n      .csv-export {\n        display: inline-block;\n        margin-left: 5px;\n        font-size: smaller;\n      }\n    "]
        }),
        __metadata("design:paramtypes", [])
    ], ProgEvaluationComponent);
    return ProgEvaluationComponent;
}());



/***/ }),

/***/ "./src/app/progdash/components/progTable/index.ts":
/*!********************************************************!*\
  !*** ./src/app/progdash/components/progTable/index.ts ***!
  \********************************************************/
/*! exports provided: ProgTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _prog_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prog-table.component */ "./src/app/progdash/components/progTable/prog-table.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgTableComponent", function() { return _prog_table_component__WEBPACK_IMPORTED_MODULE_0__["ProgTableComponent"]; });




/***/ }),

/***/ "./src/app/progdash/components/progTable/prog-table.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/progdash/components/progTable/prog-table.component.ts ***!
  \***********************************************************************/
/*! exports provided: ProgTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgTableComponent", function() { return ProgTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment_duration_format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment-duration-format */ "./node_modules/moment-duration-format/lib/moment-duration-format.js");
/* harmony import */ var moment_duration_format__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment_duration_format__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





moment__WEBPACK_IMPORTED_MODULE_3__["locale"]('fr');
var ProgTableComponent = /** @class */ (function () {
    function ProgTableComponent() {
        this.checkWidgetHandler = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.sortColumnTraceHandler = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.filterColumnTraceHandler = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.hoverWidgetTraceHandler = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.userMoreMenuHandler = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.exportTableToCsvHandler = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.userListData$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
        this.colDefaultWidth = 100;
        this.colDefaultHeight = 30;
        this.columns = {};
    }
    ProgTableComponent.prototype.ngOnInit = function () { };
    ProgTableComponent.prototype.ngAfterContentInit = function () {
        this.columns = {
            moremenu: {
                name: '',
                histo: '',
                encoding: 'NG',
                width: 24,
                topBottom: 0,
                filter: 0,
            },
            fullName: {
                name: 'Apprenant',
                histo: '',
                encoding: 'STRING',
                width: 110,
                topBottom: 0,
                filter: 0,
            },
            'score.sum': {
                name: 'Score',
                histo: 'ordinal',
                encoding: 'BAR',
                // hint: 'score.format',
                compositeHint: ['score.sum', 'score.count'],
                subHint: this.scoreSubHint.bind(null, 'score'),
                width: 90,
                topBottom: 0,
            },
            time: {
                name: 'Temps cumulé',
                // hint: 'time.format',
                formatter: this.timeFormatter,
                histo: 'ordinal',
                encoding: 'BAR',
                width: 80,
                topBottom: 0,
            },
            lastConnection: {
                name: 'Dernière connexion',
                histo: '',
                formatter: this.lastConnectionFormatter,
                encoding: 'STRING',
                width: 100,
                topBottom: 0,
                filter: '',
            },
            connectionsNbr: {
                name: 'Nbr. connexions',
                histo: 'ordinal',
                encoding: 'BAR',
                width: 80,
                topBottom: 0,
            },
            initialEval: {
                name: 'Éval. Initiale',
                histo: 'ordinal',
                encoding: 'BAR',
                width: 80,
                topBottom: 0,
            },
            'initialLevel.sum': {
                name: 'Règles sues initialement',
                compositeHint: ['initialLevel.sum', 'initialLevel.count'],
                subHint: this.scoreSubHint.bind(null, 'initialLevel'),
                histo: 'ordinal',
                encoding: 'BAR',
                width: 90,
                topBottom: 0,
            },
            lastModule: {
                name: 'Module atteint',
                histo: 'categorical',
                encoding: 'CAT',
                width: 100,
                topBottom: 0,
                color: Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(this.modulesData, 'forColor'),
            },
            print: {
                name: '',
                histo: '',
                encoding: 'NG',
                width: 35,
                topBottom: 0,
                filter: 0,
            },
        };
    };
    ProgTableComponent.prototype.ngOnDestroy = function () { };
    Object.defineProperty(ProgTableComponent.prototype, "userListData", {
        get: function () {
            return this.userListData$.getValue();
        },
        set: function (value) {
            this.userListData$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    ProgTableComponent.prototype.timeFormatter = function (time) {
        // replace mins in min because the moment add the letter 's' automatic.
        return moment__WEBPACK_IMPORTED_MODULE_3__["duration"](time, 'minutes')
            .format('h [h] mm [min]')
            .replace('mins', 'min');
    };
    ProgTableComponent.prototype.lastConnectionFormatter = function (date) {
        var d = moment__WEBPACK_IMPORTED_MODULE_3__(date);
        return d.isValid() ? d.fromNow() : '';
    };
    ProgTableComponent.prototype.scoreSubHint = function (key, data) {
        var d = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["divide"])(Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(data, key + ".sum", 0), Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(data, key + ".count")) * 100;
        return isNaN(d) ? '0%' : Object(lodash__WEBPACK_IMPORTED_MODULE_2__["round"])(d) + '%';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProgTableComponent.prototype, "isStartPrintReport", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProgTableComponent.prototype, "progTableMode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ProgTableComponent.prototype, "selectedWidgets", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProgTableComponent.prototype, "modulesData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProgTableComponent.prototype, "checkWidgetHandler", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProgTableComponent.prototype, "sortColumnTraceHandler", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProgTableComponent.prototype, "filterColumnTraceHandler", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProgTableComponent.prototype, "hoverWidgetTraceHandler", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProgTableComponent.prototype, "userMoreMenuHandler", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProgTableComponent.prototype, "exportTableToCsvHandler", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ProgTableComponent.prototype, "userListData", null);
    ProgTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'ProgTable',
            template: "\n  <div class=\"container\">\n    <mat-card\n      id=\"table-view\"\n      class=\"widget-card table-widget\"\n      data-simplebar\n      data-simplebar-auto-hide=\"false\"\n      (mouseenter)=\"hoverWidgetTraceHandler.emit({event: 'mouseenter',id: 'table-view'})\"\n      (mouseleave)=\"hoverWidgetTraceHandler.emit({event: 'mouseleave',id: 'table-view'})\">\n      <mat-card-header>\n        <span class=\"fill\"></span>\n        <PrintWidget\n          *ngIf=\"isStartPrintReport\"\n          [widgetId]=\"'table-view'\"\n          [checked]=\"selectedWidgets.includes('table-view')\"\n          (checkWidgetHandler)=\"checkWidgetHandler.emit($event)\">\n        </PrintWidget>\n        <button\n          mat-button\n          (click)=\"exportTableToCsvHandler.emit({\n            tableName: 'details', data: userListData\n          })\">\n            <mat-icon class=\"mat-24\" aria-label=\"cloud_download\">cloud_download</mat-icon>\n            <span class=\"csv-export\">Export CSV</span>\n        </button>\n      </mat-card-header>\n      <mat-card-content>\n        <TableViewManager\n          class=\"table-widget\"\n          [tableMode]=\"'normal'\"\n          [data]=\"userListData | values\"\n          [columns]=\"columns\"\n          [options]=\"{ filter: true, header: true }\"\n          [colDefaultWidth]=\"colDefaultWidth\"\n          [colDefaultHeight]=\"colDefaultHeight\"\n          [isStartPrintReport]=\"isStartPrintReport\"\n          [selectedWidgets]=\"selectedWidgets\"\n          (checkWidgetHandler)=\"checkWidgetHandler.emit($event)\"\n          (sortColumnTraceHandler)=\"sortColumnTraceHandler.emit($event)\"\n          (filterColumnTraceHandler)=\"filterColumnTraceHandler.emit($event)\"\n          (userMoreMenuHandler)=\"userMoreMenuHandler.emit($event)\">\n        </TableViewManager>\n      </mat-card-content>\n    </mat-card>\n\n    <mat-card\n      id=\"line-chart\"\n      class=\"widget-card line-widget\"\n      (mouseenter)=\"hoverWidgetTraceHandler.emit({event: 'mouseenter',id: 'line-chart'})\"\n      (mouseleave)=\"hoverWidgetTraceHandler.emit({event: 'mouseleave',id: 'table-view'})\">\n      <mat-card-header>\n        <mat-card-title>Progression dans le temps</mat-card-title>\n        <mat-card-subtitle *ngIf=\"modulesData.isHasSupProAndSup\">\n          <div class=\"info\">\n            <mat-icon class=\"mat-24\">info</mat-icon>\n            <span>\n              <span class=\"highlight\">Sup\u00E9rieur</span> est \u00E9quivalent \u00E0\n              <span class=\"highlight\">Pro</span> + <span class=\"highlight\">Pont Sup\u00E9.</span>\n            </span>\n          </div>\n        </mat-card-subtitle>\n      </mat-card-header>\n      <mat-card-content #lineWidget>\n        <MlineChart\n          *ngIf=\"lineWidget.offsetWidth && lineWidget.offsetHeight\"\n          [data]=\"userListData | values\"\n          [modulesData]=\"modulesData\"\n          [width]=\"lineWidget.offsetWidth\"\n          [height]=\"lineWidget.offsetHeight\"\n          [timeScale]=\"'day'\"\n          [ykey]=\"'sumscore'\">\n        </MlineChart>\n      </mat-card-content>\n    </mat-card>\n\n  </div>\n  ",
            styles: ["\n      :host {\n        display: flex;\n        align-items: flex-start;\n        width: 100vw;\n        height: 100%;\n      }\n      .container {\n        display: flex;\n        margin-left: auto;\n        margin-right: auto;\n        padding: 3px;\n        box-sizing: border-box;\n      }\n      .widget-card {\n        padding: 0px;\n        margin: 3px;\n        box-sizing: border-box;\n      }\n      mat-card-content {\n        padding: 12px 0px;\n        width: calc(100% - 12px);\n        height: 90%;\n      }\n      mat-card-header {\n        padding: 0px 12px;\n        box-sizing: border-box;\n      }\n      .widget-content {\n        width: 100%;\n        height: 100%;\n      }\n      .table-widget {\n        width: 65vw;\n        height: calc(100vh - 58px);\n      }\n      .line-widget {\n        width: 35vw;\n        height: calc(100vh - 58px);\n        padding: 12px 0px;\n        box-sizing: border-box;\n      }\n      .info {\n        display: flex;\n        align-items: center;\n      }\n      .highlight {\n        background: #eee;\n        font-weight: 300;\n        display: inline-block;\n        padding: 0 6px;\n        border-radius: 10px;\n        font-style: italic;\n      }\n      .export-btn {\n        height: 24px;\n        line-height: 24px;\n      }\n      .csv-export {\n        display: inline-block;\n        margin-left: 5px;\n        font-size: smaller;\n      }\n    "]
        }),
        __metadata("design:paramtypes", [])
    ], ProgTableComponent);
    return ProgTableComponent;
}());



/***/ }),

/***/ "./src/app/progdash/components/progdashManager/index.ts":
/*!**************************************************************!*\
  !*** ./src/app/progdash/components/progdashManager/index.ts ***!
  \**************************************************************/
/*! exports provided: ProgdashManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _progdash_manager_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./progdash-manager.component */ "./src/app/progdash/components/progdashManager/progdash-manager.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgdashManagerComponent", function() { return _progdash_manager_component__WEBPACK_IMPORTED_MODULE_0__["ProgdashManagerComponent"]; });




/***/ }),

/***/ "./src/app/progdash/components/progdashManager/progdash-manager.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/progdash/components/progdashManager/progdash-manager.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ProgdashManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgdashManagerComponent", function() { return ProgdashManagerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components */ "./src/app/progdash/components/index.ts");
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components */ "./src/app/shared/components/index.ts");
/* harmony import */ var _openPVLiveLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../openPVLiveLink */ "./src/app/progdash/components/openPVLiveLink/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/* tslint:disable component-selector  */
var ProgdashManagerComponent = /** @class */ (function () {
    function ProgdashManagerComponent(dialog) {
        this.dialog = dialog;
        this.isGeneratingPVLiveLink$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.isGeneratePVLiveLinkSuccess$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.generatedLivePVLink$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.timescaleHandler = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selectClassHandler = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.userMoreMenuHandler = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.openProgTableHandler = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.openProgEvaluationHandler = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.openProgBoardHandler = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.checkRuleHandler = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.launchPVLiveHandler = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.generatePVLiveLinkHandler = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cancelPVLiveHandler = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.startPrintReportHandler = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.closePrintReportHandler = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.checkWidgetHandler = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.printReportHandler = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.hotPrintWidgetHandler = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.sortColumnTraceHandler = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.filterColumnTraceHandler = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.openUserDialogTraceHandler = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.hoverWidgetTraceHandler = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.moreRuleClickHandler = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.signOutHandler = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.navigateToSuiviStatsHandler = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.exportTableToCsvHandler = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.classes$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({
            byId: {},
            allIds: [],
        });
        this.classDialogRef = null;
        this.marginOffset = 125;
        this.isProgTableRank = false;
        this.isProgTableCompare = true;
        this.isProgTableFilter = true;
        this.pvLiveModalData = {
            component: _openPVLiveLink__WEBPACK_IMPORTED_MODULE_6__["OpenPVLiveLinkComponent"],
            link: '',
            isGenerateLinkSuccess: false,
            selectedRules: [],
            launchPVLiveHandler: this.launchPVLiveHandler,
            cancelPVLiveHandler: this.cancelPVLiveHandler,
        };
    }
    ProgdashManagerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.lauchSupPV1 = this.isGeneratingPVLiveLink$
            .subscribe(function (isGeneratingPVLiveLink) {
            if (isGeneratingPVLiveLink) {
                setTimeout(function () {
                    // workaround https://github.com/angular/material2/issues/5268
                    _this.dialog.open(_shared_components__WEBPACK_IMPORTED_MODULE_5__["Modal"], {
                        width: '60vw',
                        height: '50vh',
                        data: _this.pvLiveModalData,
                    });
                }, 0);
            }
        });
        this.lauchSupPV2 = this.isGeneratePVLiveLinkSuccess$
            .subscribe(function (_) {
            if (_this.isGeneratePVLiveLinkSuccess) {
                _this.pvLiveModalData.isGenerateLinkSuccess = _this.isGeneratePVLiveLinkSuccess;
                _this.pvLiveModalData.selectedRules = _this.selectedRules;
                _this.pvLiveModalData.link = _this.generatedLivePVLink;
            }
        });
    };
    ProgdashManagerComponent.prototype.ngOnDestroy = function () {
        this.lauchSupPV1.unsubscribe();
        this.lauchSupPV2.unsubscribe();
    };
    ProgdashManagerComponent.prototype.ngAfterContentInit = function () {
        this.boardWidth = this.boardElRef.nativeElement.offsetWidth - this.marginOffset;
        // removed for now:
        // => a dialog box to choose a group/class after the view is init
        // if ( !this.selectedClass ) {
        //   this.classDialogRef = this.dialog.open( Modal, {
        //     width: '90vw',
        //     height: '90vh',
        //     disableClose: true,
        //     data: {
        //       classes: this.classes ? this.classes.byId : null,
        //       selectClassHandler: null,
        //       component: ClassManagerComponent,
        //     },
        //   });
        // }
        // this.classes$.subscribe( _ => {
        //   if ( this.classes && this.classes.allIds ) {
        //     this.classDialogRef.comp        onentInstance.data = {
        //       ...this.classDialogRef.componentInstance.data,
        //       classes: this.classes.byId,
        //       selectClassHandler: this.onSelectClassDialog.bind( this ),
        //     };
        //   }
        // });
    };
    ProgdashManagerComponent.prototype.handleUserMoreMenuClick = function (_a) {
        var _this = this;
        var user = _a.user;
        // workaround https://github.com/angular/material2/issues/5268
        setTimeout(function () {
            _this.dialog.open(_shared_components__WEBPACK_IMPORTED_MODULE_5__["Modal"], {
                width: '95vw',
                height: '100vh',
                data: {
                    user: user,
                    component: _components__WEBPACK_IMPORTED_MODULE_4__["UserDetailComponent"],
                    modulesData: (_this.selectedClass ?
                        (_this.classes.byId[_this.selectedClass.id] ?
                            _this.classes.byId[_this.selectedClass.id].modules : []) : []),
                    hoverWidgetTraceHandler: _this.hoverWidgetTraceHandler,
                    hotPrintWidgetHandler: _this.hotPrintWidgetHandler,
                },
            });
        }, 0);
        // Trace purpose
        this.openUserDialogTraceHandler.emit(user);
    };
    ProgdashManagerComponent.prototype.onSelectClassDialog = function (className) {
        if (this.classDialogRef) {
            this.classDialogRef.close();
        }
        this.selectClassHandler.emit(className);
    };
    ProgdashManagerComponent.prototype.compareProgressionHandler = function () {
        this.isProgTableCompare = !this.isProgTableCompare;
    };
    ProgdashManagerComponent.prototype.rankUsersHandler = function () {
        this.isProgTableRank = !this.isProgTableRank;
    };
    ProgdashManagerComponent.prototype.showFiltersHandler = function () {
        this.isProgTableFilter = !this.isProgTableFilter;
    };
    Object.defineProperty(ProgdashManagerComponent.prototype, "classes", {
        get: function () {
            return this.classes$.getValue();
        },
        set: function (value) {
            this.classes$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgdashManagerComponent.prototype, "isGeneratingPVLiveLink", {
        get: function () {
            return this.isGeneratingPVLiveLink$.getValue();
        },
        set: function (value) {
            this.isGeneratingPVLiveLink$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgdashManagerComponent.prototype, "generatedLivePVLink", {
        get: function () {
            return this.generatedLivePVLink$.getValue();
        },
        set: function (value) {
            this.generatedLivePVLink$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgdashManagerComponent.prototype, "isGeneratePVLiveLinkSuccess", {
        get: function () {
            return this.isGeneratePVLiveLinkSuccess$.getValue();
        },
        set: function (value) {
            this.isGeneratePVLiveLinkSuccess$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgdashManagerComponent.prototype, "_userListData", {
        get: function () {
            return Object(lodash__WEBPACK_IMPORTED_MODULE_3__["get"])(this.classes, "byId." + this.selectedClass + ".id.users", []);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('board'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ProgdashManagerComponent.prototype, "boardElRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProgdashManagerComponent.prototype, "isDataLoaded", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProgdashManagerComponent.prototype, "isProgTableOpened", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProgdashManagerComponent.prototype, "isProgEvaluationOpened", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProgdashManagerComponent.prototype, "isStartPrintReport", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProgdashManagerComponent.prototype, "isGeneratingPVLiveLink$", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProgdashManagerComponent.prototype, "isGeneratePVLiveLinkSuccess$", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProgdashManagerComponent.prototype, "generatedLivePVLink$", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProgdashManagerComponent.prototype, "selectedClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProgdashManagerComponent.prototype, "selectedTimescale", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProgdashManagerComponent.prototype, "selectedRules", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProgdashManagerComponent.prototype, "selectedWidgets", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProgdashManagerComponent.prototype, "timescaleHandler", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProgdashManagerComponent.prototype, "selectClassHandler", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProgdashManagerComponent.prototype, "userMoreMenuHandler", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProgdashManagerComponent.prototype, "openProgTableHandler", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProgdashManagerComponent.prototype, "openProgEvaluationHandler", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProgdashManagerComponent.prototype, "openProgBoardHandler", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProgdashManagerComponent.prototype, "checkRuleHandler", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProgdashManagerComponent.prototype, "launchPVLiveHandler", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProgdashManagerComponent.prototype, "generatePVLiveLinkHandler", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProgdashManagerComponent.prototype, "cancelPVLiveHandler", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProgdashManagerComponent.prototype, "startPrintReportHandler", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProgdashManagerComponent.prototype, "closePrintReportHandler", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProgdashManagerComponent.prototype, "checkWidgetHandler", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProgdashManagerComponent.prototype, "printReportHandler", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProgdashManagerComponent.prototype, "hotPrintWidgetHandler", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProgdashManagerComponent.prototype, "sortColumnTraceHandler", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProgdashManagerComponent.prototype, "filterColumnTraceHandler", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProgdashManagerComponent.prototype, "openUserDialogTraceHandler", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProgdashManagerComponent.prototype, "hoverWidgetTraceHandler", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProgdashManagerComponent.prototype, "moreRuleClickHandler", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProgdashManagerComponent.prototype, "signOutHandler", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProgdashManagerComponent.prototype, "navigateToSuiviStatsHandler", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProgdashManagerComponent.prototype, "exportTableToCsvHandler", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ProgdashManagerComponent.prototype, "classes", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ProgdashManagerComponent.prototype, "isGeneratingPVLiveLink", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ProgdashManagerComponent.prototype, "generatedLivePVLink", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ProgdashManagerComponent.prototype, "isGeneratePVLiveLinkSuccess", null);
    ProgdashManagerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ProgdashManager',
            template: "\n    <ProgdashView [isSidenavOpened]=\"!isProgTableOpened\">\n      <app-navbar class=\"toolbar mat-elevation-z3\">\n        <div class=\"logo\">\n          <!-- mat-icon aria-label=\"menu\">graphic_eq</mat-icon -->\n          <img src=\"assets/icon/voltaire-logo.jpg\" alt=\"\">\n          <span>Suivi Voltaire</span>\n        </div>\n\n\n        <span class=\"fill\"></span>\n\n        <!-- from table -> back to dash -->\n        <button\n          *ngIf=\"isProgTableOpened || isProgEvaluationOpened\"\n          mat-stroked-button\n          (click)=\"openProgBoardHandler.emit($event)\">\n            <mat-icon aria-label=\"menu\">arrow_back</mat-icon>\n            Tableau de bord\n        </button>\n\n        <TimescaleMenu\n          *ngIf=\"!(isProgTableOpened || isProgEvaluationOpened) && selectedClass\"\n          [selectedTimescale]=\"selectedTimescale\"\n          (timescaleHandler)=\"timescaleHandler.emit($event)\">\n        </TimescaleMenu>\n\n        <span class=\"fill\"></span>\n\n        <div class=\"class-picker\">\n          <button\n            mat-button\n            [matMenuTriggerFor]=\"className\"\n            yPosition=\"below\">\n            <span *ngIf=\"!selectedClass.name\">\n                S\u00E9lectionner une classe\n            </span>\n            <span class=\"class-name\">{{ selectedClass ? selectedClass.name : '' }}</span>\n              <mat-icon>arrow_drop_down</mat-icon>\n          </button>\n        </div>\n\n        <button\n          mat-button\n          [disabled]=\"!selectedClass.name\"\n          (click)=\"openProgTableHandler.emit({ id: 'call-to-action-btn' })\">\n          <mat-icon aria-label=\"menu\">multiline_chart</mat-icon>\n          D\u00E9tails\n        </button>\n\n        <button\n          mat-button\n          [disabled]=\"!selectedClass.name\"\n          (click)=\"openProgEvaluationHandler.emit($event)\">\n          <mat-icon aria-label=\"menu\">bubble_chart</mat-icon>\n          \u00C9valuations\n        </button>\n\n        <div class=\"print-container\">\n          <button\n            class=\"raised-button\"\n            mat-raised-button\n            *ngIf=\"isStartPrintReport\"\n            (click)=\"printReportHandler.emit( selectedWidgets )\">\n              Imprimer | {{ selectedWidgets.length | formatAttr:'widget' }}\n          </button>\n          <button\n            class=\"fab-button mat-32\"\n            mat-button\n            [disabled]=\"!selectedClass.name\"\n            *ngIf=\"!isStartPrintReport\"\n            (click)=\"startPrintReportHandler.emit($event)\">\n              <mat-icon *ngIf=\"!isStartPrintReport\">print</mat-icon>\n          </button>\n          <button\n            mat-mini-fab\n            *ngIf=\"isStartPrintReport\"\n            (click)=\"closePrintReportHandler.emit($event)\">\n              <mat-icon>print_disabled</mat-icon>\n          </button>\n        </div>\n\n        <button\n          class=\"fab-button mat-32\"\n          mat-stroked-button\n          [matMenuTriggerFor]=\"more\"\n          yPosition=\"below\">\n            <mat-icon aria-label=\"menu\">more_vert</mat-icon>\n        </button>\n\n      </app-navbar>\n\n      <mat-menu #className=\"matMenu\">\n        <ClassNameMenu\n          [classListData]=\"(classes ? classes.allIds : [])\"\n          (selectClassHandler)=\"selectClassHandler.emit($event)\">\n        </ClassNameMenu>\n      </mat-menu>\n\n      <mat-menu #more=\"matMenu\">\n        <MoreMenu\n          (navigateToSuiviStatsHandler)=\"navigateToSuiviStatsHandler.emit()\"\n          (signOutHandler)=\"signOutHandler.emit()\">\n        </MoreMenu>\n      </mat-menu>\n\n      <div #board class=\"board\">\n\n        <ProgBoard\n          id=\"progboard\"\n          *ngIf=\"boardWidth && !(isProgTableOpened || isProgEvaluationOpened)\"\n          [boardWidth]=\"boardWidth\"\n          [classes]=\"classes\"\n          [isStartPrintReport]=\"isStartPrintReport\"\n\n          [selectedClass]=\"selectedClass\"\n          [selectedTimescale]=\"selectedTimescale\"\n          [selectedRules]=\"selectedRules\"\n          [selectedWidgets]=\"selectedWidgets\"\n\n          (checkRuleHandler)=\"checkRuleHandler.emit($event)\"\n          (launchPVLiveHandler)=\"launchPVLiveHandler.emit($event)\"\n          (generatePVLiveLinkHandler)=\"generatePVLiveLinkHandler.emit($event)\"\n          (cancelPVLiveHandler)=\"cancelPVLiveHandler.emit($event)\"\n          (checkWidgetHandler)=\"checkWidgetHandler.emit($event)\"\n          (hoverWidgetTraceHandler)=\"hoverWidgetTraceHandler.emit($event)\"\n          (moreRuleClickHandler)=\"moreRuleClickHandler.emit($event)\"\n          (openProgTableHandler)=\"openProgTableHandler.emit($event)\">\n        </ProgBoard>\n\n        <ProgTable\n          *ngIf=\"isProgTableOpened\"\n          [isStartPrintReport]=\"isStartPrintReport\"\n          [selectedWidgets]=\"selectedWidgets\"\n          [modulesData]=\"(selectedClass ?\n            (classes.byId[selectedClass.id] ?\n              classes.byId[selectedClass.id].modules : []) : [])\"\n          [userListData]=\"(selectedClass ?\n            (classes.byId[selectedClass.id] ?\n              classes.byId[selectedClass.id].users : []) : [])\"\n          (checkWidgetHandler)=\"checkWidgetHandler.emit($event)\"\n          (closeProgTableHandler)=\"closeProgTableHandler.emit($event)\"\n\n          (sortColumnTraceHandler)=\"sortColumnTraceHandler.emit($event)\"\n          (filterColumnTraceHandler)=\"filterColumnTraceHandler.emit($event)\"\n          (hoverWidgetTraceHandler)=\"hoverWidgetTraceHandler.emit($event)\"\n          (userMoreMenuHandler)=\"handleUserMoreMenuClick($event)\"\n          (exportTableToCsvHandler)=\"exportTableToCsvHandler.emit($event)\">\n        </ProgTable>\n\n        <ProgEvaluation\n          *ngIf=\"isProgEvaluationOpened\"\n          [isStartPrintReport]=\"isStartPrintReport\"\n          [selectedWidgets]=\"selectedWidgets\"\n          [evaluationsData]=\"(selectedClass ?\n            (classes.byId[selectedClass.id] ?\n              classes.byId[selectedClass.id].evaluations : []) : [])\"\n          (checkWidgetHandler)=\"checkWidgetHandler.emit($event)\"\n          (closeProgTableHandler)=\"closeProgTableHandler.emit($event)\"\n\n          (sortColumnTraceHandler)=\"sortColumnTraceHandler.emit($event)\"\n          (filterColumnTraceHandler)=\"filterColumnTraceHandler.emit($event)\"\n          (hoverWidgetTraceHandler)=\"hoverWidgetTraceHandler.emit($event)\"\n          (exportTableToCsvHandler)=\"exportTableToCsvHandler.emit($event)\">\n        </ProgEvaluation>\n\n      </div>\n\n    </ProgdashView>\n  ",
            styles: ["\n      :host {\n        display: block;\n      }\n      app-navbar {\n        width: calc(100vw);\n        position: fixed;\n        z-index: 1000;\n        top: 0;\n        left: 0;\n      }\n      .class-picker {\n        display: flex;\n        align-items: center;\n        margin: 0 5px;\n      }\n      .class-picker span {\n        color: #2196f3;\n        font-family: \"Roboto Mono\", monospace;\n        font-size: 19px;\n        font-weight: 600;\n        letter-spacing: 0px;\n      }\n      .sidenav {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        height: calc(100vh - 46px - 36px);\n        overflow: hidden;\n      }\n      .logo {\n        display: flex;\n        height: 46px;\n        align-items: center;\n        justify-content: center;\n        color: rgba(0, 0, 0, 0.87);\n        font-size: 20px;\n        font-weight: 700;\n        text-transform: uppercase;\n        font-family: \"Roboto Mono\", monospace;\n        background: rgba(255, 255, 255, 0.95);\n      }\n      .prog-table,\n      .prog-table-btn {\n        width: 98%;\n        position: sticky;\n        margin-left: auto;\n      }\n      .prog-table-btn {\n        background: rgba(255, 215, 64, 0.95);\n        color: rgba(0, 0, 0, 0.87);\n      }\n      .prog-table-menu-btn {\n        border: 1px solid #ccc;\n        border-radius: 2px;\n        background: transparent;\n        color: rgba(0,0,0,.87);\n        margin-right: 6px;\n        font-size: 13px;\n      }\n      .print-container {\n        margin: 0 5px;\n      }\n      .logo img {\n        width: 46px;\n        height: 46px;\n        margin-right: 12px;\n      }\n    "]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], ProgdashManagerComponent);
    return ProgdashManagerComponent;
}());



/***/ }),

/***/ "./src/app/progdash/components/progdashView/index.ts":
/*!***********************************************************!*\
  !*** ./src/app/progdash/components/progdashView/index.ts ***!
  \***********************************************************/
/*! exports provided: ProgdashViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _progdash_view_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./progdash-view.component */ "./src/app/progdash/components/progdashView/progdash-view.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgdashViewComponent", function() { return _progdash_view_component__WEBPACK_IMPORTED_MODULE_0__["ProgdashViewComponent"]; });




/***/ }),

/***/ "./src/app/progdash/components/progdashView/progdash-view.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/progdash/components/progdashView/progdash-view.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ProgdashViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgdashViewComponent", function() { return ProgdashViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/* tslint:disable component-selector  */
var ProgdashViewComponent = /** @class */ (function () {
    function ProgdashViewComponent() {
    }
    ProgdashViewComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProgdashViewComponent.prototype, "isSidenavOpened", void 0);
    ProgdashViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ProgdashView',
            template: "\n  <!-- toolbar -->\n  <ng-content select=\".toolbar\"></ng-content>\n  <mat-drawer-container class=\"container\">\n    <mat-drawer\n      disableClose\n      mode=\"side\"\n      [opened]=\"isSidenavOpened\"\n      class=\"sidenav mat-elevation-z2\">\n      <!-- user list content\n      <ng-content select=\".sidenav\"></ng-content> -->\n      <!-- sidebar users detail\n      <ng-content select=\".prog-table\"></ng-content> -->\n    </mat-drawer>\n    <mat-drawer-content\n      class=\"content\"\n      [ngStyle]=\"{\n        'margin-left': isSidenavOpened ? 0 : 'auto',\n        'margin-right': isSidenavOpened ? 0 : 'auto',\n        'width.vw': 100\n      }\">\n      <!-- prog dash content -->\n      <ng-content select=\".board\"></ng-content>\n    </mat-drawer-content>\n  </mat-drawer-container>\n  ",
            styles: ["\n    :host {\n      display: block;\n    }\n    .container {\n      width: 100vw;\n      height: calc(100vh - 46px);\n      margin-top: 46px;\n    }\n    mat-drawer-content {\n      overflow: hidden;\n    }\n    .sidenav {\n      width: 0px; /* 300px;*/\n      height: 100vh;\n    }\n    .content {\n      width: 100vw;/*calc(100vw - 300px);*/\n    }\n  "]
        }),
        __metadata("design:paramtypes", [])
    ], ProgdashViewComponent);
    return ProgdashViewComponent;
}());



/***/ }),

/***/ "./src/app/progdash/components/timelineWidget/index.ts":
/*!*************************************************************!*\
  !*** ./src/app/progdash/components/timelineWidget/index.ts ***!
  \*************************************************************/
/*! exports provided: TimelineWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _timeline_widget_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timeline-widget.component */ "./src/app/progdash/components/timelineWidget/timeline-widget.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimelineWidgetComponent", function() { return _timeline_widget_component__WEBPACK_IMPORTED_MODULE_0__["TimelineWidgetComponent"]; });




/***/ }),

/***/ "./src/app/progdash/components/timelineWidget/timeline-widget.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/progdash/components/timelineWidget/timeline-widget.component.ts ***!
  \*********************************************************************************/
/*! exports provided: TimelineWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineWidgetComponent", function() { return TimelineWidgetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment_duration_format__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment-duration-format */ "./node_modules/moment-duration-format/lib/moment-duration-format.js");
/* harmony import */ var moment_duration_format__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment_duration_format__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






moment__WEBPACK_IMPORTED_MODULE_4__["locale"]('fr');
/* tslint:disable component-selector  */
var TimelineWidgetComponent = /** @class */ (function () {
    function TimelineWidgetComponent() {
        this.checkWidgetHandler = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.timescale$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.data$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({});
        this.update$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(this.data$, this.timescale$);
        this.timer = null;
        this.height = 200;
        this.barWidth = 20;
        this.margin = { topBottom: 20, leftRight: 70 };
        this.xScale = Object(d3__WEBPACK_IMPORTED_MODULE_1__["scaleBand"])();
        this.yScale = Object(d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"])();
    }
    TimelineWidgetComponent.prototype.onAllDone = function () {
        this.width = this.svgRef.nativeElement.offsetWidth;
        this.height = this.svgRef.nativeElement.offsetHeight;
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
        }
        if (!this.width || !this.height) {
            this.timer = setTimeout(this.onAllDone.bind(this), 1000);
            return;
        }
        Object(d3__WEBPACK_IMPORTED_MODULE_1__["select"])(this.svgRef.nativeElement)
            .select('svg')
            .attr('viewBox', "0 0 " + this.width + " " + this.height);
        this.render();
    };
    TimelineWidgetComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.updateSub = this.update$
            .subscribe(function (_) {
            _this.onAllDone();
        });
    };
    TimelineWidgetComponent.prototype.ngOnDestroy = function () {
        this.updateSub.unsubscribe();
    };
    TimelineWidgetComponent.prototype.render = function () {
        this.updateScale();
        this.renderGrid();
        this.renderBars();
    };
    TimelineWidgetComponent.prototype.updateScale = function () {
        this.xScale
            .domain(Object(lodash__WEBPACK_IMPORTED_MODULE_2__["map"])(Object(lodash__WEBPACK_IMPORTED_MODULE_2__["values"])(this.data), 'date'))
            .range([0, this.width - 2 * this.margin.leftRight]);
        this.yScale
            .domain(Object(d3__WEBPACK_IMPORTED_MODULE_1__["extent"])(Object(lodash__WEBPACK_IMPORTED_MODULE_2__["map"])(Object(lodash__WEBPACK_IMPORTED_MODULE_2__["values"])(this.data), 'count')))
            .range([this.height - 2 * this.margin.topBottom, 0]);
    };
    TimelineWidgetComponent.prototype.renderBars = function () {
        var _this = this;
        var barWidth = 20;
        var group = Object(d3__WEBPACK_IMPORTED_MODULE_1__["select"])(this.barsRef.nativeElement)
            .attr('transform', "translate(" + this.margin.leftRight / 2 + ", " + this.margin.topBottom + ")")
            .selectAll('.bars')
            .data(Object(lodash__WEBPACK_IMPORTED_MODULE_2__["values"])(this.data));
        var enter = group
            .enter()
            .append('g')
            .classed('bars', true)
            .merge(group)
            .attr('transform', function (d, _) {
            return "translate(" + _this.xScale(Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(d, 'date')) + ", 0)";
        });
        enter.append('rect');
        enter.append('text');
        enter
            .select('rect')
            .attr('width', barWidth)
            .attr('height', function (d) { return _this.yScale(0) - _this.yScale(Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(d, 'count')); })
            .attr('y', function (d) { return _this.yScale(Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(d, 'count')); })
            .attr('x', this.xScale.bandwidth() / 2)
            .style('fill', '#ccc')
            .style('stroke', 'none');
        enter
            .select('text')
            .text(function (d) { return Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(d, 'count'); })
            .attr('class', 'text-label middle')
            .attr('x', this.xScale.bandwidth() / 2 + barWidth / 2)
            .attr('y', function (d) { return _this.yScale(Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(d, 'count')) - 8; })
            .attr('font-size', 18)
            .attr('font-family', 'sans-serif');
        group.exit().remove();
    };
    TimelineWidgetComponent.prototype.renderGrid = function () {
        var _this = this;
        var group = Object(d3__WEBPACK_IMPORTED_MODULE_1__["select"])(this.gridRef.nativeElement)
            .attr('transform', "translate(" + this.margin.leftRight + ", " + this.margin.topBottom + ")")
            .selectAll('.grid')
            .data(Object(lodash__WEBPACK_IMPORTED_MODULE_2__["values"])(this.data));
        var enter = group
            .enter()
            .append('g')
            .classed('grid', true)
            .merge(group)
            .attr('transform', function (d, _) { return "translate(" + (_this.xScale(Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(d, 'date')) - 20) + ", 0)"; });
        enter.append('line');
        enter.append('text');
        enter
            .select('line')
            .attr('y1', -20)
            .attr('y2', function (d, _) {
            var text = moment__WEBPACK_IMPORTED_MODULE_4__(Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(d, 'date')).format('ddd DD/MM/YY');
            if (_this.timescale !== 'lastWeek') {
                if (Object(lodash__WEBPACK_IMPORTED_MODULE_2__["startsWith"])(text, 'lun.')) {
                    return _this.yScale.range()[0] + 20;
                }
            }
            return _this.yScale.range()[0];
        })
            .style('stroke-width', 2)
            .style('stroke', function (d, i) {
            var stroke = '#777';
            var text = moment__WEBPACK_IMPORTED_MODULE_4__(Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(d, 'date')).format('ddd DD/MM/YY');
            if (_this.timescale !== 'lastWeek') {
                if ( /*startsWith( text, 'ven.' ) ||*/Object(lodash__WEBPACK_IMPORTED_MODULE_2__["startsWith"])(text, 'lun.')) {
                    return stroke;
                }
                else {
                    return '#ccc5';
                }
            }
            else {
                return stroke;
            }
        });
        enter
            .select('text')
            .attr('y', -20)
            .classed('text-label', true)
            .attr('transform', "translate(2, " + (this.height - this.margin.topBottom + 10) + ")")
            .attr('font-size', 18)
            .attr('font-family', 'sans-serif')
            .text(function (d, i) {
            var text = moment__WEBPACK_IMPORTED_MODULE_4__(Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(d, 'date')).format('ddd DD/MM/YY');
            if (_this.timescale !== 'lastWeek') {
                if (Object(lodash__WEBPACK_IMPORTED_MODULE_2__["startsWith"])(text, 'lun.')) {
                    return text;
                }
                else {
                    return null;
                }
            }
            else {
                return text;
            }
        });
        group.exit().remove();
    };
    Object.defineProperty(TimelineWidgetComponent.prototype, "data", {
        get: function () {
            return this.data$.getValue();
        },
        set: function (value) {
            this.data$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimelineWidgetComponent.prototype, "timescale", {
        get: function () {
            return this.timescale$.getValue();
        },
        set: function (value) {
            this.timescale$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('svg'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], TimelineWidgetComponent.prototype, "svgRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('grid'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], TimelineWidgetComponent.prototype, "gridRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('bars'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], TimelineWidgetComponent.prototype, "barsRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TimelineWidgetComponent.prototype, "checkWidgetHandler", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TimelineWidgetComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TimelineWidgetComponent.prototype, "id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TimelineWidgetComponent.prototype, "isStartPrintReport", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TimelineWidgetComponent.prototype, "selectedWidgets", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], TimelineWidgetComponent.prototype, "data", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], TimelineWidgetComponent.prototype, "timescale", null);
    TimelineWidgetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'TimelineWidget',
            template: "\n    <mat-card #parent class=\"widget-card\" id=\"{{id}}\">\n      <mat-card-header>\n        <mat-card-title>{{ title }}</mat-card-title>\n        <PrintWidget\n          *ngIf=\"isStartPrintReport\"\n          [widgetId]=\"id\"\n          [checked]=\"selectedWidgets.includes(id)\"\n          (checkWidgetHandler)=\"checkWidgetHandler.emit($event)\">\n        </PrintWidget>\n      </mat-card-header>\n      <mat-card-content>\n        <div #svg class=\"widget-content\">\n          <svg\n            id=\"svg-{{id}}\"\n            preserveAspectRatio=\"xMidYMid meet\">\n            <g #grid class=\"axis\"></g>\n            <g #bars class=\"chart\"></g>\n          </svg>\n       </div>\n      </mat-card-content>\n    </mat-card>\n  ",
            styles: ["\n    :host {\n      display: flex;\n      width: 100%;\n      height: 100%;\n    }\n    .widget-card {\n      width: 100%;\n      height: 100%;\n      padding: 12px;\n      box-sizing: border-box;\n    }\n    mat-card-content {\n      padding: 12px 0px;\n      height: 80%;\n    }\n    .widget-content {\n      width: 100%;\n      height: 100%;\n    }\n    svg {\n      // width: 100%;\n      // border: 1px solid #eee;\n    }\n    svg .tick text {\n      display: none;\n    }"]
        }),
        __metadata("design:paramtypes", [])
    ], TimelineWidgetComponent);
    return TimelineWidgetComponent;
}());



/***/ }),

/***/ "./src/app/progdash/components/timescaleMenu/index.ts":
/*!************************************************************!*\
  !*** ./src/app/progdash/components/timescaleMenu/index.ts ***!
  \************************************************************/
/*! exports provided: TimescaleMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _timescale_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timescale-menu.component */ "./src/app/progdash/components/timescaleMenu/timescale-menu.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimescaleMenuComponent", function() { return _timescale_menu_component__WEBPACK_IMPORTED_MODULE_0__["TimescaleMenuComponent"]; });




/***/ }),

/***/ "./src/app/progdash/components/timescaleMenu/timescale-menu.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/progdash/components/timescaleMenu/timescale-menu.component.ts ***!
  \*******************************************************************************/
/*! exports provided: TimescaleMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimescaleMenuComponent", function() { return TimescaleMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/* tslint:disable component-selector  */
var TimescaleMenuComponent = /** @class */ (function () {
    function TimescaleMenuComponent() {
        this.timescaleHandler = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    TimescaleMenuComponent.prototype.ngOnInit = function () { };
    TimescaleMenuComponent.prototype.onTimescaleChange = function (timescale) {
        this.timescaleHandler.emit(timescale);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TimescaleMenuComponent.prototype, "selectedTimescale", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TimescaleMenuComponent.prototype, "timescaleHandler", void 0);
    TimescaleMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'TimescaleMenu',
            template: "\n    <mat-button-toggle-group>\n      <mat-button-toggle\n        value=\"left\"\n        [checked]=\"(selectedTimescale === 'lastWeek' ? true : false)\"\n        (click)=\"onTimescaleChange('lastWeek')\">\n        <div class=\"timescale-label\">\n          7 derniers jours\n        </div>\n      </mat-button-toggle>\n      <div class=\"divider\"></div>\n      <mat-button-toggle\n        value=\"right\"\n        [checked]=\"(selectedTimescale === 'lastMonth' ? true : false)\"\n        (click)=\"onTimescaleChange('lastMonth')\">\n        <div class=\"timescale-label\">\n          30 derniers jours\n        </div>\n      </mat-button-toggle>\n    </mat-button-toggle-group>\n  ",
            styles: ["\n    :host {\n      display: block;\n    }\n    .timescale-label {\n      font-size: 13px;\n      color: rgba(0,0,0,.87);\n    }\n    mat-button-toggle-group {\n      display: flex;\n      justify-content: space-around;\n      box-shadow: none;\n      align-items: center;\n      height: 32px;\n    }\n    mat-button-toggle {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      width: 130px;\n    }\n    .divider {\n      border: 0.5px solid #ccc;\n      height: 100%;\n    }\n\n  "]
        }),
        __metadata("design:paramtypes", [])
    ], TimescaleMenuComponent);
    return TimescaleMenuComponent;
}());



/***/ }),

/***/ "./src/app/progdash/components/topNRulesWidget/index.ts":
/*!**************************************************************!*\
  !*** ./src/app/progdash/components/topNRulesWidget/index.ts ***!
  \**************************************************************/
/*! exports provided: TopNRulesWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _topn_rules_widget_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./topn-rules-widget.component */ "./src/app/progdash/components/topNRulesWidget/topn-rules-widget.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopNRulesWidgetComponent", function() { return _topn_rules_widget_component__WEBPACK_IMPORTED_MODULE_0__["TopNRulesWidgetComponent"]; });




/***/ }),

/***/ "./src/app/progdash/components/topNRulesWidget/topn-rules-widget.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/progdash/components/topNRulesWidget/topn-rules-widget.component.ts ***!
  \************************************************************************************/
/*! exports provided: TopNRulesWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopNRulesWidgetComponent", function() { return TopNRulesWidgetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/* tslint:disable component-selector  */
var TopNRulesWidgetComponent = /** @class */ (function () {
    function TopNRulesWidgetComponent() {
        this.checkRuleHandler = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.checkWidgetHandler = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.moreRuleClickHandler = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    TopNRulesWidgetComponent.prototype.ngOnInit = function () { };
    TopNRulesWidgetComponent.prototype.onRuleChecked = function (_a, ruleId) {
        var isChecked = _a.checked;
        this.checkRuleHandler.emit({ isChecked: isChecked, ruleId: ruleId });
    };
    Object.defineProperty(TopNRulesWidgetComponent.prototype, "isData", {
        get: function () {
            return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["size"])(this.data) > 0;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TopNRulesWidgetComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TopNRulesWidgetComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TopNRulesWidgetComponent.prototype, "key", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TopNRulesWidgetComponent.prototype, "id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TopNRulesWidgetComponent.prototype, "isPVLive", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TopNRulesWidgetComponent.prototype, "isStartPrintReport", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TopNRulesWidgetComponent.prototype, "checkRuleHandler", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TopNRulesWidgetComponent.prototype, "checkWidgetHandler", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TopNRulesWidgetComponent.prototype, "moreRuleClickHandler", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], TopNRulesWidgetComponent.prototype, "selectedWidgets", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], TopNRulesWidgetComponent.prototype, "selectedRules", void 0);
    TopNRulesWidgetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'TopNRulesWidget',
            template: "\n    <mat-card class=\"widget-card\" id=\"{{id}}\">\n      <mat-card-header>\n        <mat-card-title>{{ title }}</mat-card-title>\n        <PrintWidget\n          *ngIf=\"isStartPrintReport\"\n          [widgetId]=\"id\"\n          [checked]=\"selectedWidgets.includes(id)\"\n          (checkWidgetHandler)=\"checkWidgetHandler.emit($event)\">\n        </PrintWidget>\n      </mat-card-header>\n      <mat-card-content>\n        <mat-list role=\"list\">\n          <mat-divider></mat-divider>\n          <div\n            class=\"list-item\"\n            *ngFor=\"let item of data\">\n              <div class=\"list-item-content\">\n                <span class=\"label\">\n                    {{ item.name }}\n                </span>\n                <div class=\"item-detail\"\n                  *ngIf=\"isPVLive\">\n                  <mat-checkbox\n                    class=\"checkbox\"\n                    matTooltipPosition=\"above\"\n                    matTooltip=\"S\u00E9lectionnez la r\u00E8gle pour le mode pr\u00E9sentiel\"\n                    [disabled]=\"isStartPrintReport\"\n                    [checked]=\"selectedRules.includes( item.id )\"\n                    (change)=\"onRuleChecked($event, item.id)\">\n                  </mat-checkbox>\n                </div>\n              </div>\n              <mat-divider></mat-divider>\n          </div>\n        </mat-list>\n      </mat-card-content>\n\n      <mat-card-actions\n        class=\"actions\"\n        *ngIf=\"isData\">\n          <button\n          mat-stroked-button\n          matTooltipPosition=\"above\"\n          [matTooltipShowDelay]=\"2000\"\n          matTooltip=\"Fonctionnalit\u00E9 en cours de d\u00E9veloppement\"\n          (click)=\"moreRuleClickHandler.emit( id )\">\n            Plus de r\u00E8gles\n        </button>\n      </mat-card-actions>\n    </mat-card>\n  ",
            styles: ["\n    :host {\n      display: flex;\n      width: 100%;\n      height: 100%;\n    }\n    .widget-card {\n      width: 100%;\n      height: 100%;\n      box-sizing: border-box;\n      padding: 12px;\n    }\n    mat-card-header {\n      height: 18px;\n    }\n    mat-card-content {\n      padding: 12px 0px;\n      height: 75%;\n    }\n    .title {\n      margin: 12px;\n    }\n    .list-item {\n      height: 60px;\n      padding: 0px;\n    }\n    .list-item-content {\n      display: flex;\n      align-items: center;\n      width: 100%;\n      height: 100%;\n      font-size: 16px;\n    }\n    .label {\n      text-overflow: ellipsis;\n      white-space: nowrap;\n      overflow: hidden;\n      max-width: 90%;\n    }\n    .item-detail {\n      margin-left: auto;\n    }\n    .actions {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [])
    ], TopNRulesWidgetComponent);
    return TopNRulesWidgetComponent;
}());



/***/ }),

/***/ "./src/app/progdash/components/topNUsersWidget/index.ts":
/*!**************************************************************!*\
  !*** ./src/app/progdash/components/topNUsersWidget/index.ts ***!
  \**************************************************************/
/*! exports provided: TopNUsersWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _topn_users_widget_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./topn-users-widget.component */ "./src/app/progdash/components/topNUsersWidget/topn-users-widget.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopNUsersWidgetComponent", function() { return _topn_users_widget_component__WEBPACK_IMPORTED_MODULE_0__["TopNUsersWidgetComponent"]; });




/***/ }),

/***/ "./src/app/progdash/components/topNUsersWidget/topn-users-widget.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/progdash/components/topNUsersWidget/topn-users-widget.component.ts ***!
  \************************************************************************************/
/*! exports provided: TopNUsersWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopNUsersWidgetComponent", function() { return TopNUsersWidgetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/* tslint:disable component-selector  */
var TopNUsersWidgetComponent = /** @class */ (function () {
    function TopNUsersWidgetComponent() {
        this.checkWidgetHandler = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.openProgTableHandler = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    TopNUsersWidgetComponent.prototype.ngOnInit = function () { };
    Object.defineProperty(TopNUsersWidgetComponent.prototype, "isData", {
        get: function () {
            return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["size"])(this.data) > 0;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TopNUsersWidgetComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TopNUsersWidgetComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TopNUsersWidgetComponent.prototype, "timescale", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TopNUsersWidgetComponent.prototype, "key", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TopNUsersWidgetComponent.prototype, "id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TopNUsersWidgetComponent.prototype, "users", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TopNUsersWidgetComponent.prototype, "isStartPrintReport", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TopNUsersWidgetComponent.prototype, "checkWidgetHandler", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TopNUsersWidgetComponent.prototype, "openProgTableHandler", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], TopNUsersWidgetComponent.prototype, "selectedWidgets", void 0);
    TopNUsersWidgetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'TopNUsersWidget',
            template: "\n    <mat-card class=\"widget-card\" id=\"{{id}}\">\n      <mat-card-header>\n        <mat-card-title>{{ title }}</mat-card-title>\n        <PrintWidget\n          *ngIf=\"isStartPrintReport\"\n          [widgetId]=\"id\"\n          [checked]=\"selectedWidgets.includes(id)\"\n          (checkWidgetHandler)=\"checkWidgetHandler.emit($event)\">\n        </PrintWidget>\n      </mat-card-header>\n      <mat-card-content>\n        <mat-list role=\"list\">\n        <mat-divider></mat-divider>\n        <div\n          class=\"list-item\"\n          *ngFor=\"let item of data\">\n            <div class=\"list-item-content\">\n              <span> {{ users[item.id].fullName }} </span>\n              <div class=\"item-detail\">\n                <span class=\"item-sum\">\n                  {{ item.sum.sum | formatAttr:key }}\n                </span>\n                <DetlaWidget\n                  [sign]=\"(item.sum.sumd >= 0 ? 'plus' : 'minus')\"\n                  [data]=\"(item.sum.sumd | mathAbs) | formatSumd:key\">\n                </DetlaWidget>\n              </div>\n            </div>\n            <mat-divider></mat-divider>\n        </div>\n      </mat-list>\n      </mat-card-content>\n\n      <mat-card-actions\n        class=\"actions\">\n        <button\n          mat-stroked-button\n          (click)=\"openProgTableHandler.emit({ id: id })\">\n            Plus de D\u00E9tails\n        </button>\n      </mat-card-actions>\n    </mat-card>\n\n\n  ",
            styles: ["\n    :host {\n      display: flex;\n      width: 100%;\n      height: 100%;\n    }\n    .widget-card {\n      width: 100%;\n      height: 100%;\n      padding: 12px;\n      box-sizing: border-box;\n    }\n    mat-card-header {\n      height: 18px;\n    }\n    mat-card-content {\n      padding: 12px 0px;\n      height: 75%;\n    }\n    .title {\n      margin: 12px;\n    }\n    .list-item {\n      height: 60px;\n      padding: 0px;\n    }\n    .list-item-content {\n      display: flex;\n      align-items: center;\n      width: 100%;\n      height: 100%;\n      font-size: 16px;\n    }\n    .item-detail {\n      margin-left: auto;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n    }\n    .item-sum {\n      font-size: 14px;\n      font-weight: 500;\n      white-space: nowrap;\n    }\n    .actions {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [])
    ], TopNUsersWidgetComponent);
    return TopNUsersWidgetComponent;
}());



/***/ }),

/***/ "./src/app/progdash/components/userDetail/index.ts":
/*!*********************************************************!*\
  !*** ./src/app/progdash/components/userDetail/index.ts ***!
  \*********************************************************/
/*! exports provided: UserDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_detail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-detail.component */ "./src/app/progdash/components/userDetail/user-detail.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserDetailComponent", function() { return _user_detail_component__WEBPACK_IMPORTED_MODULE_0__["UserDetailComponent"]; });




/***/ }),

/***/ "./src/app/progdash/components/userDetail/user-detail.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/progdash/components/userDetail/user-detail.component.ts ***!
  \*************************************************************************/
/*! exports provided: UserDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailComponent", function() { return UserDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _infoWidget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../infoWidget */ "./src/app/progdash/components/infoWidget/index.ts");
/* harmony import */ var _userTimelineWidget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../userTimelineWidget */ "./src/app/progdash/components/userTimelineWidget/index.ts");
/* harmony import */ var _topNRulesWidget__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../topNRulesWidget */ "./src/app/progdash/components/topNRulesWidget/index.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/* tslint:disable component-selector  */
var UserDetailComponent = /** @class */ (function () {
    function UserDetailComponent(dialogRef) {
        this.dialogRef = dialogRef;
        this.hoverWidgetTraceHandler = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.hotPrintWidgetHandler = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.marginOffset = 125;
    }
    UserDetailComponent.prototype.ngOnInit = function () { };
    UserDetailComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.offsetWidth = this.elRef.nativeElement.offsetWidth - this.marginOffset;
        this.boardGrid = {
            score: {
                grid: { cols: 4, rows: 2, y: 0, x: 0 },
                component: _infoWidget__WEBPACK_IMPORTED_MODULE_3__["InfoWidgetComponent"],
                data: {
                    title: 'Règles acquises',
                    infoLabel: '',
                },
            },
            time: {
                grid: { cols: 4, rows: 2, y: 0, x: 4 },
                component: _infoWidget__WEBPACK_IMPORTED_MODULE_3__["InfoWidgetComponent"],
                data: {
                    title: 'Temps d’entrainement',
                    infoLabel: '',
                },
            },
            initialLevel: {
                grid: { cols: 4, rows: 2, y: 0, x: 8 },
                component: _infoWidget__WEBPACK_IMPORTED_MODULE_3__["InfoWidgetComponent"],
                data: {
                    title: 'Règles sues initialement',
                    infoLabel: '',
                },
            },
            progData: {
                grid: { cols: 3 * 4, rows: 5, y: 2, x: 0 },
                component: _userTimelineWidget__WEBPACK_IMPORTED_MODULE_4__["UserTimelineWidgetComponent"],
                data: {
                    title: 'Progression dans le temps',
                },
            },
            'topNRules.focused': {
                grid: { cols: 4, rows: 6, y: 7, x: 0 },
                component: _topNRulesWidget__WEBPACK_IMPORTED_MODULE_5__["TopNRulesWidgetComponent"],
                data: {
                    title: 'Les règles les plus difficiles en cours d’apprentissage',
                },
            },
            'topNRules.acquired': {
                grid: { cols: 4, rows: 6, y: 7, x: 4 },
                component: _topNRulesWidget__WEBPACK_IMPORTED_MODULE_5__["TopNRulesWidgetComponent"],
                data: {
                    title: 'Les règles acquises les plus difficiles',
                },
            },
            'topNRules.known': {
                grid: { cols: 4, rows: 6, y: 7, x: 8 },
                component: _topNRulesWidget__WEBPACK_IMPORTED_MODULE_5__["TopNRulesWidgetComponent"],
                data: {
                    title: 'Exemples de règles sues initialement',
                },
            },
        };
        Object(lodash__WEBPACK_IMPORTED_MODULE_2__["each"])(this.boardGrid, function (value, key) {
            var data;
            if (key === 'time') {
                data = { sum: Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(_this.user, key) };
            }
            else if (Object(lodash__WEBPACK_IMPORTED_MODULE_2__["startsWith"])(key, 'topNRules')) {
                data = { data: Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(_this.user, key) };
            }
            else {
                data = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(_this.user, key);
            }
            Object(lodash__WEBPACK_IMPORTED_MODULE_2__["set"])(value, 'data', __assign({}, value.data, data, { key: Object(lodash__WEBPACK_IMPORTED_MODULE_2__["last"])(Object(lodash__WEBPACK_IMPORTED_MODULE_2__["split"])(key, '.')), offsetWidth: _this.offsetWidth, userData: _this.user, modulesData: _this.modulesData, isPVLive: false }));
        });
        this.boardGridElements = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["keys"])(this.boardGrid);
        console.log('=========== this.boardGrid', this.boardGrid);
    };
    UserDetailComponent.prototype.onCloseClick = function () {
        this.dialogRef.close();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('containerRef'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], UserDetailComponent.prototype, "elRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UserDetailComponent.prototype, "user", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UserDetailComponent.prototype, "modulesData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UserDetailComponent.prototype, "hoverWidgetTraceHandler", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UserDetailComponent.prototype, "hotPrintWidgetHandler", void 0);
    UserDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'UserDetail',
            template: "\n  <div\n    #containerRef\n    id=\"learner-report\"\n    class=\"container\">\n    <div class=\"header\">\n      <h3>{{ user.fullName }}</h3>\n\n      <span class=\"fill\"></span>\n\n      <button\n        class=\"fab-button mat-32 skip-print\"\n        mat-button\n        (click)=\"hotPrintWidgetHandler.emit( 'learner-report' )\">\n          <mat-icon>print</mat-icon>\n      </button>\n\n      <button\n        class=\"fab-button mat-32 skip-print\"\n        mat-stroked-button\n        (click)=\"onCloseClick()\">\n          <mat-icon aria-label=\"menu\">close</mat-icon>\n      </button>\n    </div>\n\n    <div class=\"grid\"\n      data-simplebar\n      data-simplebar-auto-hide=\"false\">\n        <mat-grid-list cols=\"12\" rowHeight=\"60px\" gutterSize=\"10px\">\n        <mat-grid-tile\n          mat-elevation-z1\n          *ngFor=\"let key of boardGridElements\"\n          [colspan]=\"boardGrid[key].grid.cols\"\n          [rowspan]=\"boardGrid[key].grid.rows\"\n          (mouseenter)=\"hoverWidgetTraceHandler.emit({\n            event: 'mouseenter', id: 'learner-' + key\n          })\"\n          (mouseleave)=\"hoverWidgetTraceHandler.emit({\n              event: 'mouseleave', id: 'learner-' + key\n          })\">\n\n            <ndc-dynamic\n              [ndcDynamicComponent]=\"boardGrid[key].component\"\n              [ndcDynamicInputs]=\"boardGrid[key].data\">\n            </ndc-dynamic>\n\n        </mat-grid-tile>\n      </mat-grid-list>\n    </div>\n\n  </div>\n  ",
            styles: ["\n    :host {\n      display: block;\n      width: 100%;\n      height: 100%;\n      overflow: hidden;\n    }\n      #learner-report {\n        display: flex;\n        flex-direction: column;\n        height: 100%;\n      }\n      .header {\n        display: flex;\n        width: 100%;\n        height: 46px;\n        z-index: 1001;\n      }\n      .grid {\n        box-sizing: border-box;\n        width: 100%; /*calc(100vw - 300px);*/\n        height: calc(100% - 46px);\n      }\n      mat-grid-list {\n        margin: 20px;\n      }\n      mat-grid-tile {\n        box-shadow: 0 2px 1px -1px rgba(0,0,0,.2),\n        0 1px 1px 0 rgba(0,0,0,.14),\n        0 1px 3px 0 rgba(0,0,0,.12);\n      }\n    "]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
    ], UserDetailComponent);
    return UserDetailComponent;
}());



/***/ }),

/***/ "./src/app/progdash/components/userList/index.ts":
/*!*******************************************************!*\
  !*** ./src/app/progdash/components/userList/index.ts ***!
  \*******************************************************/
/*! exports provided: UserLisrComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-list.component */ "./src/app/progdash/components/userList/user-list.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserLisrComponent", function() { return _user_list_component__WEBPACK_IMPORTED_MODULE_0__["UserLisrComponent"]; });




/***/ }),

/***/ "./src/app/progdash/components/userList/user-list.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/progdash/components/userList/user-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: UserLisrComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLisrComponent", function() { return UserLisrComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/* tslint:disable component-selector  */
var UserLisrComponent = /** @class */ (function () {
    function UserLisrComponent() {
        this.userMoreMenuHandler = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.userListData$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
        this.dataStream = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
    }
    UserLisrComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userListData$.subscribe(function (_) {
            _this.data = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["values"])(_this.userListData);
            _this.dataStream.next(_this.data);
        });
    };
    Object.defineProperty(UserLisrComponent.prototype, "userListData", {
        get: function () {
            return this.userListData$.getValue();
        },
        set: function (value) {
            this.userListData$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UserLisrComponent.prototype, "userMoreMenuHandler", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UserLisrComponent.prototype, "timescale", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], UserLisrComponent.prototype, "userListData", null);
    UserLisrComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'UserList',
            template: "\n    <mat-list role=\"list\"\n      data-simplebar\n      data-simplebar-auto-hide=\"false\">\n      <mat-divider></mat-divider>\n      <div\n        class=\"list-item\"\n        *ngFor=\"let user of userListData | keyvalue\">\n          <div class=\"list-item-content\">\n            <span class=\"user-name\"> {{ user.value.fullName }} </span>\n            <div class=\"item-detail\">\n              <span class=\"item-sum\">\n                {{ user.value.score.sum | formatAttr:'score' }}/{{ user.value.score.count }}\n              </span>\n              <DetlaWidget\n                [sign]=\"sign\"\n                [data]=\"user.value.insights[timescale].score.sumd | formatAttr:'score'\">\n              </DetlaWidget>\n            </div>\n            <button\n              mat-icon-button\n              [matMenuTriggerFor]=\"more\"\n              [matMenuTriggerData]=\"{ user: user.value }\">\n                <mat-icon class=\"mat-12\" aria-label=\"menu\">more_vert</mat-icon>\n            </button>\n          </div>\n          <mat-divider></mat-divider>\n      </div>\n    </mat-list>\n\n    <mat-menu #more=\"matMenu\">\n      <ng-template matMenuContent let-user=\"user\">\n        <button\n          mat-menu-item\n          (click)=\"userMoreMenuHandler.emit({ user: user, action: 'detail' })\">\n            <span>D\u00E9tail</span>\n        </button>\n      </ng-template>\n    </mat-menu>\n  ",
            styles: ["\n    :host {\n      width: 100%;\n      height: 100%;\n      overflow: hidden;\n    }\n    mat-list {\n      overflow-x: hidden;\n    }\n    .title {\n      margin: 12px;\n    }\n    .list-item {\n      height: 60px;\n    }\n    .list-item-content {\n      width: 100%;\n      height: 100%;\n      display: flex;\n      align-items: center;\n      font-size: 16px;\n      padding: 0 12px;\n      box-sizing: border-box;\n    }\n    .item-detail {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      margin-left: auto;\n    }\n    .item-sum {\n      font-size: 14px;\n      font-weight: 500;\n    }\n    .user-name {\n      width: 100px;\n    }\n    .item-sum {\n      font-size: 14px;\n      font-weight: 500;\n    }\n    "]
        }),
        __metadata("design:paramtypes", [])
    ], UserLisrComponent);
    return UserLisrComponent;
}());



/***/ }),

/***/ "./src/app/progdash/components/userTimelineWidget/index.ts":
/*!*****************************************************************!*\
  !*** ./src/app/progdash/components/userTimelineWidget/index.ts ***!
  \*****************************************************************/
/*! exports provided: UserTimelineWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_timeline_widget_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-timeline-widget.component */ "./src/app/progdash/components/userTimelineWidget/user-timeline-widget.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserTimelineWidgetComponent", function() { return _user_timeline_widget_component__WEBPACK_IMPORTED_MODULE_0__["UserTimelineWidgetComponent"]; });




/***/ }),

/***/ "./src/app/progdash/components/userTimelineWidget/user-timeline-widget.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/progdash/components/userTimelineWidget/user-timeline-widget.component.ts ***!
  \******************************************************************************************/
/*! exports provided: UserTimelineWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserTimelineWidgetComponent", function() { return UserTimelineWidgetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserTimelineWidgetComponent = /** @class */ (function () {
    function UserTimelineWidgetComponent() {
    }
    UserTimelineWidgetComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UserTimelineWidgetComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UserTimelineWidgetComponent.prototype, "userData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UserTimelineWidgetComponent.prototype, "offsetWidth", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], UserTimelineWidgetComponent.prototype, "modulesData", void 0);
    UserTimelineWidgetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'UserTimelineWidget',
            template: "\n    <mat-card\n      id=\"learner-line-chart\"\n      class=\"widget-card line-widget\">\n      <mat-card-header>\n        <mat-card-title>Progression dans le temps</mat-card-title>\n      </mat-card-header>\n      <mat-card-content #lineWidget>\n        <MlineChart\n          *ngIf=\"lineWidget.offsetWidth && lineWidget.offsetHeight\"\n          [data]=\"[userData]\"\n          [modulesData]=\"modulesData\"\n          [width]=\"lineWidget.offsetWidth\"\n          [height]=\"lineWidget.offsetHeight\"\n          [timeScale]=\"'day'\"\n          [ykey]=\"'sumscore'\">\n        </MlineChart>\n      </mat-card-content>\n    </mat-card>\n  ",
            styles: ["\n    :host {\n      display: flex;\n      width: calc(100% - 0px);\n      height: calc(100% - 0px);\n    }\n    .widget-card {\n      padding: 0px;\n      box-sizing: border-box;\n    }\n    mat-card-content {\n      width: 100%;\n      height: 90%;\n    }\n    mat-card-header {\n      box-sizing: border-box;\n    }\n    .line-widget {\n      width: 100%;\n      height: 100%;\n      padding: 12px 0px;\n      box-sizing: border-box;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [])
    ], UserTimelineWidgetComponent);
    return UserTimelineWidgetComponent;
}());



/***/ }),

/***/ "./src/app/progdash/containers/index.ts":
/*!**********************************************!*\
  !*** ./src/app/progdash/containers/index.ts ***!
  \**********************************************/
/*! exports provided: ProgdashViewPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _progdashViewPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./progdashViewPage */ "./src/app/progdash/containers/progdashViewPage/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgdashViewPageComponent", function() { return _progdashViewPage__WEBPACK_IMPORTED_MODULE_0__["ProgdashViewPageComponent"]; });




/***/ }),

/***/ "./src/app/progdash/containers/progdashViewPage/index.ts":
/*!***************************************************************!*\
  !*** ./src/app/progdash/containers/progdashViewPage/index.ts ***!
  \***************************************************************/
/*! exports provided: ProgdashViewPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _progdash_view_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./progdash-view-page.component */ "./src/app/progdash/containers/progdashViewPage/progdash-view-page.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgdashViewPageComponent", function() { return _progdash_view_page_component__WEBPACK_IMPORTED_MODULE_0__["ProgdashViewPageComponent"]; });




/***/ }),

/***/ "./src/app/progdash/containers/progdashViewPage/progdash-view-page.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/progdash/containers/progdashViewPage/progdash-view-page.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ProgdashViewPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgdashViewPageComponent", function() { return ProgdashViewPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store */ "./src/app/progdash/store/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/* tslint:disable component-selector  */
var ProgdashViewPageComponent = /** @class */ (function () {
    function ProgdashViewPageComponent(store) {
        this.store = store;
        this.selectedTimescale$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])('lastWeek');
        this.isLoading$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store__WEBPACK_IMPORTED_MODULE_3__["isLoading"]));
        this.isProgTableOpened$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store__WEBPACK_IMPORTED_MODULE_3__["isProgTableOpened"]));
        this.isStartPrintReport$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store__WEBPACK_IMPORTED_MODULE_3__["isStartPrintReport"]));
        this.isProgEvaluationOpened$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store__WEBPACK_IMPORTED_MODULE_3__["isProgEvaluationOpened"]));
        this.classes$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store__WEBPACK_IMPORTED_MODULE_3__["classes"]));
        this.selectedClass$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store__WEBPACK_IMPORTED_MODULE_3__["selectedClass"]));
        this.selectedTimescale$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store__WEBPACK_IMPORTED_MODULE_3__["selectedTimescale"]));
        this.selectedRules$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store__WEBPACK_IMPORTED_MODULE_3__["selectedRules"]));
        this.selectedWidgets$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store__WEBPACK_IMPORTED_MODULE_3__["selectedWidgets"]));
        this.isGeneratingPVLiveLink$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store__WEBPACK_IMPORTED_MODULE_3__["isGeneratingPVLiveLink"]));
        this.isGeneratePVLiveLinkSuccess$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store__WEBPACK_IMPORTED_MODULE_3__["isGeneratePVLiveLinkSuccess"]));
        this.generatedLivePVLink$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store__WEBPACK_IMPORTED_MODULE_3__["generatedLivePVLink"]));
    }
    ProgdashViewPageComponent.prototype.ngOnInit = function () {
        // MOCK FROM CSV
        // this.store.dispatch( new fromStore.LoadData());
        this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_3__["LoadGroupsData"]());
    };
    ProgdashViewPageComponent.prototype.onTimescaleChange = function (timescale) {
        this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_3__["SelectTimescale"](timescale));
    };
    ProgdashViewPageComponent.prototype.onSelectClass = function (className) {
        this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_3__["SelectClass"](className));
    };
    ProgdashViewPageComponent.prototype.onOpenProgTable = function (_a) {
        var id = _a.id;
        this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_3__["OpenProgTable"](id));
    };
    ProgdashViewPageComponent.prototype.onOpenProgBoard = function () {
        this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_3__["OpenProgBoard"]());
    };
    ProgdashViewPageComponent.prototype.onOpenProgEvaluation = function () {
        this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_3__["OpenProgEvaluation"]());
    };
    ProgdashViewPageComponent.prototype.onCheckRule = function (_a) {
        var isChecked = _a.isChecked, ruleId = _a.ruleId;
        this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_3__["CheckRule"]({ isChecked: isChecked, ruleId: ruleId }));
    };
    ProgdashViewPageComponent.prototype.onLaunchPVLive = function (event) {
        this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_3__["LaunchPVLive"]({ lessons: event }));
    };
    ProgdashViewPageComponent.prototype.onGeneratePVLiveLinkHandler = function (event) {
        this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_3__["GeneratePVLiveLink"]({ lessons: event }));
    };
    ProgdashViewPageComponent.prototype.onCancelPVLive = function () {
        this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_3__["CancelPVLive"]());
    };
    ProgdashViewPageComponent.prototype.onStartPrintReport = function () {
        this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_3__["StartPrintReport"]());
    };
    ProgdashViewPageComponent.prototype.onClosePrintReport = function () {
        this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_3__["ClosePrintReport"]());
    };
    ProgdashViewPageComponent.prototype.onCheckWidget = function (_a) {
        var isChecked = _a.isChecked, widgetId = _a.widgetId;
        this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_3__["CheckWidget"]({ isChecked: isChecked, widgetId: widgetId }));
    };
    ProgdashViewPageComponent.prototype.onPrintReport = function (selectedWidgets) {
        this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_3__["PrintReport"](selectedWidgets));
    };
    ProgdashViewPageComponent.prototype.onSortColumnTrace = function (payload) {
        this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_3__["SortColumn"](payload));
    };
    ProgdashViewPageComponent.prototype.onFilterColumnTrace = function (payload) {
        this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_3__["FilterColumn"](payload));
    };
    ProgdashViewPageComponent.prototype.onOpenUserDialogTrace = function (payload) {
        this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_3__["OpenUserDialog"](payload));
    };
    ProgdashViewPageComponent.prototype.onHoverWidgetTrace = function (payload) {
        this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_3__["HoverWidget"](payload));
    };
    ProgdashViewPageComponent.prototype.onHotPrintWidget = function (payload) {
        this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_3__["HotPrintWidget"](payload));
    };
    ProgdashViewPageComponent.prototype.onMoreRuleClickHandler = function (payload) {
        this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_3__["MoreRuleClick"](payload));
    };
    ProgdashViewPageComponent.prototype.onNavigateToSuiviStats = function () {
        this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_3__["NavigateToSuiviStats"]({ from: 'menuPage' }));
    };
    ProgdashViewPageComponent.prototype.onSignOut = function () {
        this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_3__["SignOut"]());
    };
    ProgdashViewPageComponent.prototype.onExportTableToCsv = function (_a) {
        var tableName = _a.tableName, data = _a.data;
        this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_3__["ExportTableToCsv"]({ tableName: tableName, data: data }));
    };
    ProgdashViewPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ProgdashViewPage',
            template: "\n    <div class=\"loading\" *ngIf=\"isLoading$ | async\">\n      <mat-progress-bar mode=\"indeterminate\" color=\"#ffd740\"></mat-progress-bar>\n    </div>\n    <ProgdashManager\n      [isDataLoaded]=\"isDataLoaded$ | async\"\n      [isProgTableOpened]=\"isProgTableOpened$ | async\"\n      [isProgEvaluationOpened]=\"isProgEvaluationOpened$ | async\"\n      [isStartPrintReport]=\"isStartPrintReport$ | async\"\n      [isGeneratingPVLiveLink]=\"isGeneratingPVLiveLink$ | async\"\n      [isGeneratePVLiveLinkSuccess]=\"isGeneratePVLiveLinkSuccess$ | async\"\n      [generatedLivePVLink]=\"generatedLivePVLink$ | async\"\n\n      [classes]=\"classes$ | async\"\n      [selectedClass]=\"selectedClass$ | async\"\n      [selectedTimescale]=\"selectedTimescale$ | async\"\n      [selectedRules]=\"selectedRules$ | async\"\n      [selectedWidgets]=\"selectedWidgets$ | async\"\n\n      (selectClassHandler)=\"onSelectClass($event)\"\n      (timescaleHandler)=\"onTimescaleChange($event)\"\n      (openProgTableHandler)=\"onOpenProgTable($event)\"\n      (openProgEvaluationHandler)=\"onOpenProgEvaluation()\"\n      (openProgBoardHandler)=\"onOpenProgBoard()\"\n\n      (checkRuleHandler)=\"onCheckRule($event)\"\n      (launchPVLiveHandler)=\"onLaunchPVLive($event)\"\n      (generatePVLiveLinkHandler)=\"onGeneratePVLiveLinkHandler($event)\"\n      (cancelPVLiveHandler)=\"onCancelPVLive()\"\n\n      (startPrintReportHandler)=\"onStartPrintReport()\"\n      (closePrintReportHandler)=\"onClosePrintReport()\"\n      (checkWidgetHandler)=\"onCheckWidget($event)\"\n      (printReportHandler)=\"onPrintReport($event)\"\n      (hotPrintWidgetHandler)=\"onHotPrintWidget($event)\"\n\n      (sortColumnTraceHandler)=\"onSortColumnTrace($event)\"\n      (filterColumnTraceHandler)=\"onFilterColumnTrace($event)\"\n      (openUserDialogTraceHandler)=\"onOpenUserDialogTrace($event)\"\n      (hoverWidgetTraceHandler)=\"onHoverWidgetTrace($event)\"\n      (moreRuleClickHandler)=\"onMoreRuleClickHandler($event)\"\n      (navigateToSuiviStatsHandler)=\"onNavigateToSuiviStats()\"\n      (signOutHandler)=\"onSignOut()\"\n      (exportTableToCsvHandler)=\"onExportTableToCsv($event)\">\n    </ProgdashManager>\n  ",
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], ProgdashViewPageComponent);
    return ProgdashViewPageComponent;
}());



/***/ }),

/***/ "./src/app/progdash/pipes/format-attr.pipe.ts":
/*!****************************************************!*\
  !*** ./src/app/progdash/pipes/format-attr.pipe.ts ***!
  \****************************************************/
/*! exports provided: FormatAttrPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatAttrPipe", function() { return FormatAttrPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment_duration_format__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment-duration-format */ "./node_modules/moment-duration-format/lib/moment-duration-format.js");
/* harmony import */ var moment_duration_format__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment_duration_format__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FormatAttrPipe = /** @class */ (function () {
    function FormatAttrPipe() {
    }
    FormatAttrPipe.prototype.transform = function (value, key, options) {
        return this.keyFormat(value, key);
    };
    FormatAttrPipe.prototype.keyFormat = function (value, key) {
        var kf = null;
        switch (key) {
            case 'score': {
                kf = this.pluralFormater(value, 'règle');
                break;
            }
            case 'dropout':
            case 'time': {
                kf = this.timeFormater(value);
                break;
            }
            case 'help': {
                kf = this.helpFormatter(value);
                break;
            }
            case 'activeUsers': {
                kf = this.pluralFormater(value, 'actif');
                break;
            }
            case 'inactiveUsers': {
                kf = this.pluralFormater(value, 'inactif');
                break;
            }
            case 'widget': {
                kf = this.pluralFormater(value, 'widget');
                break;
            }
            default: {
                kf = value;
            }
        }
        return kf;
    };
    FormatAttrPipe.prototype.timeFormater = function (value) {
        // replace mins in min because the moment add the letter 's' automatic.
        return moment__WEBPACK_IMPORTED_MODULE_2__["duration"](value, 'minutes').format('h [h] mm [min]').replace("mins", "min");
    };
    FormatAttrPipe.prototype.helpFormatter = function (value) {
        return value + ' exo/règle(moy.)';
    };
    FormatAttrPipe.prototype.pluralFormater = function (value) {
        var labels = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            labels[_i - 1] = arguments[_i];
        }
        return value && value > 1
            ? (value || 0) + " " + Object(lodash__WEBPACK_IMPORTED_MODULE_1__["join"])(labels, 's ') + "s"
            : (value || 0) + " " + Object(lodash__WEBPACK_IMPORTED_MODULE_1__["join"])(labels, ' ');
    };
    FormatAttrPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'formatAttr' })
    ], FormatAttrPipe);
    return FormatAttrPipe;
}());



/***/ }),

/***/ "./src/app/progdash/pipes/format-sumd.pipe.ts":
/*!****************************************************!*\
  !*** ./src/app/progdash/pipes/format-sumd.pipe.ts ***!
  \****************************************************/
/*! exports provided: FormatSumdPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatSumdPipe", function() { return FormatSumdPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment_duration_format__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment-duration-format */ "./node_modules/moment-duration-format/lib/moment-duration-format.js");
/* harmony import */ var moment_duration_format__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment_duration_format__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FormatSumdPipe = /** @class */ (function () {
    function FormatSumdPipe() {
    }
    FormatSumdPipe.prototype.transform = function (value, key, options) {
        return this.keyFormat(value, key);
    };
    FormatSumdPipe.prototype.keyFormat = function (value, key) {
        var kf = null;
        switch (key) {
            case 'dropout':
            case 'time': {
                kf = this.timeFormater(Object(lodash__WEBPACK_IMPORTED_MODULE_1__["toNumber"])(value));
                break;
            }
            default: {
                kf = value;
            }
        }
        return kf;
    };
    FormatSumdPipe.prototype.timeFormater = function (value) {
        // replace mins in min because the moment add the letter 's' automatic.
        return moment__WEBPACK_IMPORTED_MODULE_2__["duration"](value, 'minutes').format('h [h] mm [min]').replace("mins", "min");
    };
    FormatSumdPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'formatSumd' })
    ], FormatSumdPipe);
    return FormatSumdPipe;
}());



/***/ }),

/***/ "./src/app/progdash/pipes/index.ts":
/*!*****************************************!*\
  !*** ./src/app/progdash/pipes/index.ts ***!
  \*****************************************/
/*! exports provided: FormatAttrPipe, FormatSumdPipe, MathAbsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _format_attr_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./format-attr.pipe */ "./src/app/progdash/pipes/format-attr.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormatAttrPipe", function() { return _format_attr_pipe__WEBPACK_IMPORTED_MODULE_0__["FormatAttrPipe"]; });

/* harmony import */ var _format_sumd_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./format-sumd.pipe */ "./src/app/progdash/pipes/format-sumd.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormatSumdPipe", function() { return _format_sumd_pipe__WEBPACK_IMPORTED_MODULE_1__["FormatSumdPipe"]; });

/* harmony import */ var _math_abs_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math-abs.pipe */ "./src/app/progdash/pipes/math-abs.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MathAbsPipe", function() { return _math_abs_pipe__WEBPACK_IMPORTED_MODULE_2__["MathAbsPipe"]; });






/***/ }),

/***/ "./src/app/progdash/pipes/math-abs.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/progdash/pipes/math-abs.pipe.ts ***!
  \*************************************************/
/*! exports provided: MathAbsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MathAbsPipe", function() { return MathAbsPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MathAbsPipe = /** @class */ (function () {
    function MathAbsPipe() {
    }
    MathAbsPipe.prototype.transform = function (value) {
        return '' + Math.abs(value);
    };
    MathAbsPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'mathAbs' })
    ], MathAbsPipe);
    return MathAbsPipe;
}());



/***/ }),

/***/ "./src/app/progdash/progdash.module.ts":
/*!*********************************************!*\
  !*** ./src/app/progdash/progdash.module.ts ***!
  \*********************************************/
/*! exports provided: ProgdashModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgdashModule", function() { return ProgdashModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var ng_dynamic_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-dynamic-component */ "./node_modules/ng-dynamic-component/bundles/ng-dynamic-component.es5.js");
/* harmony import */ var angular_gridster2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-gridster2 */ "./node_modules/angular-gridster2/fesm5/angular-gridster2.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../material */ "./src/app/material/index.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _visualization__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../visualization */ "./src/app/visualization/index.ts");
/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../table */ "./src/app/table/index.ts");
/* harmony import */ var _progdash_routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./progdash.routes */ "./src/app/progdash/progdash.routes.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components */ "./src/app/progdash/components/index.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./store */ "./src/app/progdash/store/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services */ "./src/app/progdash/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var ProgdashModule = /** @class */ (function () {
    function ProgdashModule() {
    }
    ProgdashModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_http__WEBPACK_IMPORTED_MODULE_5__["HttpModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                angular_gridster2__WEBPACK_IMPORTED_MODULE_4__["GridsterModule"],
                ng_dynamic_component__WEBPACK_IMPORTED_MODULE_3__["DynamicModule"],
                _material__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                _visualization__WEBPACK_IMPORTED_MODULE_8__["VisualizationModule"],
                _table__WEBPACK_IMPORTED_MODULE_9__["TableModule"],
                _progdash_routes__WEBPACK_IMPORTED_MODULE_10__["DashRoutingModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["StoreModule"].forFeature('progdash', _store__WEBPACK_IMPORTED_MODULE_12__["reducers"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["EffectsModule"].forFeature(_store__WEBPACK_IMPORTED_MODULE_12__["effects"]),
            ],
            providers: _services__WEBPACK_IMPORTED_MODULE_13__["fromSerices"].slice(),
            entryComponents: _components__WEBPACK_IMPORTED_MODULE_11__["fromEntryComponents"].slice(),
            declarations: _components__WEBPACK_IMPORTED_MODULE_11__["fromComponents"].slice(),
            exports: _components__WEBPACK_IMPORTED_MODULE_11__["fromComponents"].slice(),
        })
    ], ProgdashModule);
    return ProgdashModule;
}());



/***/ }),

/***/ "./src/app/progdash/progdash.routes.ts":
/*!*********************************************!*\
  !*** ./src/app/progdash/progdash.routes.ts ***!
  \*********************************************/
/*! exports provided: dashRoutes, DashRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dashRoutes", function() { return dashRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashRoutingModule", function() { return DashRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers */ "./src/app/progdash/containers/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var externalUrlProvider = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('externalUrlRedirectResolver');
var dashRoutes = [
    // {
    //   path: '',
    //   redirectTo: 'prog',
    //   pathMatch: 'full',
    // },
    {
        path: '',
        component: _containers__WEBPACK_IMPORTED_MODULE_2__["ProgdashViewPageComponent"],
    },
];
var DashRoutingModule = /** @class */ (function () {
    function DashRoutingModule() {
    }
    DashRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(dashRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], DashRoutingModule);
    return DashRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=progdash-progdash-module.js.map