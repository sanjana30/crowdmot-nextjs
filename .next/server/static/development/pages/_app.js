module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/GlobalStyles.js":
/*!************************************!*\
  !*** ./components/GlobalStyles.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (({
  children
}) => __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2349441335",
  __self: undefined
}, "@font-face{font-family:\"Poppins\";font-style:normal;font-weight:300;font-display:swap;src:local(\"Poppins Light\"),local(\"Poppins-Light\"), url(https://fonts.gstatic.com/s/poppins/v9/pxiByp8kv8JHgFVrLDz8Z1xlFd2JQEk.woff2) format(\"woff2\");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6, U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193, U+2212,U+2215,U+FEFF,U+FFFD;}@font-face{font-family:\"Poppins\";font-style:normal;font-weight:500;font-display:swap;src:local(\"Poppins Medium\"),local(\"Poppins-Medium\"), url(https://fonts.gstatic.com/s/poppins/v9/pxiByp8kv8JHgFVrLGT9Z1xlFd2JQEk.woff2) format(\"woff2\");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6, U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193, U+2212,U+2215,U+FEFF,U+FFFD;}@font-face{font-family:\"Poppins\";font-style:normal;font-weight:700;font-display:swap;src:local(\"Poppins Bold\"),local(\"Poppins-Bold\"), url(https://fonts.gstatic.com/s/poppins/v9/pxiByp8kv8JHgFVrLCz7Z1xlFd2JQEk.woff2) format(\"woff2\");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6, U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193, U+2212,U+2215,U+FEFF,U+FFFD;}:root{--foreground:#000000;--background:#ffffff;--primary:#6bc3b9;--secondary:#ffc12f;--error:#ff0033;--font:\"Poppins\",sans-serif;--border-radius:0.25rem;}h1,h2,h3,h4,h5,h6{color:var(--primary);}body,html{box-sizing:border-box;font-family:var(--font);padding-top:10px;}a,p{margin-right:10px;}*>*{box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvQ3Jvd2RNT1QvY3Jvd2Rtb3QtbmV4dGpzL2NvbXBvbmVudHMvR2xvYmFsU3R5bGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUt1QixBQUc4QixBQWNBLEFBSUMsQUFPSixBQUdJLEFBR0EsQUFZQSxBQVlBLGtCQTdCeEIsR0F6QnVCLEFBY3ZCLENBSTBCLEFBVTFCLEFBR29CLEFBWUEsQUFZQSxrQkF2QkYsQUFZQSxBQVlBLEVBdkRFLElBa0JELFVBY0MsQUFZQSxBQVlBLElBdkRFLEdBb0J0QixXQWNxQixBQVlBLEFBWUEsTUF6REgsZ0JBQ2EsNEJBQ0wsd0JBQzFCLHlFQXlEa0MsRUF4QkEsRUFZQSx1SkFhbEMsRUF4QkEsRUFZQSIsImZpbGUiOiIvQXBwbGljYXRpb25zL0Nyb3dkTU9UL2Nyb3dkbW90LW5leHRqcy9jb21wb25lbnRzL0dsb2JhbFN0eWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8PlxuICAgIHtjaGlsZHJlbn1cbiAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgOnJvb3Qge1xuICAgICAgICAtLWZvcmVncm91bmQ6ICMwMDAwMDA7XG4gICAgICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAgICAgLS1wcmltYXJ5OiAjNmJjM2I5O1xuICAgICAgICAtLXNlY29uZGFyeTogI2ZmYzEyZjtcbiAgICAgICAgLS1lcnJvcjogI2ZmMDAzMztcbiAgICAgICAgLS1mb250OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICAgICAgfVxuICAgICAgaDEsXG4gICAgICBoMixcbiAgICAgIGgzLFxuICAgICAgaDQsXG4gICAgICBoNSxcbiAgICAgIGg2IHtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgfVxuICAgICAgYm9keSxcbiAgICAgIGh0bWwge1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udCk7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgIFxuICAgICAgICBcbiAgICAgIH1cbiAgICAgIGEsIHB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgIH1cbiAgICAgICogPiAqIHtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIH1cbiAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICAgICAgICBzcmM6IGxvY2FsKFwiUG9wcGlucyBMaWdodFwiKSwgbG9jYWwoXCJQb3BwaW5zLUxpZ2h0XCIpLFxuICAgICAgICAgIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvcG9wcGlucy92OS9weGlCeXA4a3Y4SkhnRlZyTER6OFoxeGxGZDJKUUVrLndvZmYyKVxuICAgICAgICAgICAgZm9ybWF0KFwid29mZjJcIik7XG4gICAgICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDAwMC0wMEZGLCBVKzAxMzEsIFUrMDE1Mi0wMTUzLCBVKzAyQkItMDJCQywgVSswMkM2LFxuICAgICAgICAgIFUrMDJEQSwgVSswMkRDLCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsXG4gICAgICAgICAgVSsyMjEyLCBVKzIyMTUsIFUrRkVGRiwgVStGRkZEO1xuICAgICAgfVxuICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBmb250LWRpc3BsYXk6IHN3YXA7XG4gICAgICAgIHNyYzogbG9jYWwoXCJQb3BwaW5zIE1lZGl1bVwiKSwgbG9jYWwoXCJQb3BwaW5zLU1lZGl1bVwiKSxcbiAgICAgICAgICB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3BvcHBpbnMvdjkvcHhpQnlwOGt2OEpIZ0ZWckxHVDlaMXhsRmQySlFFay53b2ZmMilcbiAgICAgICAgICAgIGZvcm1hdChcIndvZmYyXCIpO1xuICAgICAgICB1bmljb2RlLXJhbmdlOiBVKzAwMDAtMDBGRiwgVSswMTMxLCBVKzAxNTItMDE1MywgVSswMkJCLTAyQkMsIFUrMDJDNixcbiAgICAgICAgICBVKzAyREEsIFUrMDJEQywgVSsyMDAwLTIwNkYsIFUrMjA3NCwgVSsyMEFDLCBVKzIxMjIsIFUrMjE5MSwgVSsyMTkzLFxuICAgICAgICAgIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcbiAgICAgIH1cbiAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICAgICAgICBzcmM6IGxvY2FsKFwiUG9wcGlucyBCb2xkXCIpLCBsb2NhbChcIlBvcHBpbnMtQm9sZFwiKSxcbiAgICAgICAgICB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3BvcHBpbnMvdjkvcHhpQnlwOGt2OEpIZ0ZWckxDejdaMXhsRmQySlFFay53b2ZmMilcbiAgICAgICAgICAgIGZvcm1hdChcIndvZmYyXCIpO1xuICAgICAgICB1bmljb2RlLXJhbmdlOiBVKzAwMDAtMDBGRiwgVSswMTMxLCBVKzAxNTItMDE1MywgVSswMkJCLTAyQkMsIFUrMDJDNixcbiAgICAgICAgICBVKzAyREEsIFUrMDJEQywgVSsyMDAwLTIwNkYsIFUrMjA3NCwgVSsyMEFDLCBVKzIxMjIsIFUrMjE5MSwgVSsyMTkzLFxuICAgICAgICAgIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvPlxuKTsiXX0= */\n/*@ sourceURL=/Applications/CrowdMOT/crowdmot-nextjs/components/GlobalStyles.js */")));

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_GlobalStyles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/GlobalStyles.js */ "./components/GlobalStyles.js");
var _jsxFileName = "/Applications/CrowdMOT/crowdmot-nextjs/pages/_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




/* harmony default export */ __webpack_exports__["default"] = (({
  Component,
  pageProps
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, "CrowdMOT")), __jsx(_components_GlobalStyles_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx(Component, _extends({}, pageProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }))));
});

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map