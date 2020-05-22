webpackHotUpdate("static/development/pages/about.js",{

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useAuth */ "./hooks/useAuth.js");
var _this = undefined,
    _jsxFileName = "/Applications/CrowdMOT/crowdmot-nextjs/pages/about.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var user = Object(_hooks_useAuth__WEBPACK_IMPORTED_MODULE_6__["default"])(props.user);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
    className: "jsx-3454503111" + " " + "fixed-top px-3 text-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "https://www.npmjs.com/package/react-annotation-tool",
    className: "jsx-3454503111",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "https://img.shields.io/npm/v/react-annotation-tool.svg?branch=master",
    alt: "Responsive image",
    className: "jsx-3454503111" + " " + "img-fluid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 21
    }
  }))), __jsx("div", {
    style: {
      margin: 10
    },
    className: "jsx-3454503111" + " " + "login-link  px-3 text-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, user._id ? "".concat(user.name) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/login",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 23
    }
  }, "Login"), user._id ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/profile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 23
    }
  }, __jsx("a", {
    className: "jsx-3454503111",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 46
    }
  }, "Profile")) : "", __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/about",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }, "About")), __jsx("div", {
    className: "jsx-3454503111" + " " + "text-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    fluid: true,
    className: "py-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }, __jsx("h1", {
    className: "jsx-3454503111" + " " + "display-4  text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 21
    }
  }, "CrowdMOT: A Video Annotation Tool"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "my-3 col-xs-12 col-lg-10 offset-lg-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 21
    }
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3454503111",
    __self: _this
  }, ".login-link.jsx-3454503111{font-size:20px;!important position:relative;top:8px;left:10px;font-weight:normal;font-family:\"Times New Roman\",Times,serif;margin-right:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvQ3Jvd2RNT1QvY3Jvd2Rtb3QtbmV4dGpzL3BhZ2VzL2Fib3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFDd0IsQUFHMEIsZUFDRyw2QkFDVixRQUNFLFVBQ1MsbUJBQ3lCLDBDQUMxQixrQkFDcEIiLCJmaWxlIjoiL0FwcGxpY2F0aW9ucy9Dcm93ZE1PVC9jcm93ZG1vdC1uZXh0anMvcGFnZXMvYWJvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ29sLCBDYXJkLCBDYXJkQm9keSwgQ2FyZFRpdGxlLCBDYXJkVGV4dCB9IGZyb20gJ3JlYWN0c3RyYXAnO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xuaW1wb3J0IHVzZUF1dGggZnJvbSBcIi4uL2hvb2tzL3VzZUF1dGhcIjtcbmltcG9ydCBBdXRoU2VydmljZSBmcm9tIFwiLi4vc2VydmljZXMvYXV0aFwiO1xuXG5leHBvcnQgZGVmYXVsdCAocHJvcHMpID0+IHtcbiAgICBjb25zdCB1c2VyID0gdXNlQXV0aChwcm9wcy51c2VyKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkLXRvcCBweC0zIHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvcmVhY3QtYW5ub3RhdGlvbi10b29sXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuc2hpZWxkcy5pby9ucG0vdi9yZWFjdC1hbm5vdGF0aW9uLXRvb2wuc3ZnP2JyYW5jaD1tYXN0ZXJcIiBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBhbHQ9XCJSZXNwb25zaXZlIGltYWdlXCIgLz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tbGluayAgcHgtMyB0ZXh0LWxlZnRcIiBzdHlsZT17e21hcmdpbjogMTB9fT5cbiAgICAgICAgICAgICAgICB7dXNlci5faWRcbiAgICAgICAgICAgICAgICAgICAgPyBgJHt1c2VyLm5hbWV9YFxuICAgICAgICAgICAgICAgICAgICA6IDxMaW5rIGhyZWY9XCIvbG9naW5cIj5Mb2dpblxuICAgICAgICAgICAgIDwvTGluaz59XG4gICAgICAgICAgICAgICAge3VzZXIuX2lkXG4gICAgICAgICAgICAgICAgICAgID8gPExpbmsgaHJlZj1cIi9wcm9maWxlXCIgPjxhPlByb2ZpbGU8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgOiBgYH1cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+QWJvdXQ8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgIDxDb250YWluZXIgZmx1aWQgY2xhc3NOYW1lPVwicHktM1wiPlxuXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJkaXNwbGF5LTQgIHRleHQtY2VudGVyXCI+Q3Jvd2RNT1Q6IEEgVmlkZW8gQW5ub3RhdGlvbiBUb29sPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJteS0zIGNvbC14cy0xMiBjb2wtbGctMTAgb2Zmc2V0LWxnLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmxvZ2luLWxpbmsge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDsgIWltcG9ydGFudFxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB0b3A6IDhweDtcbiAgICAgICAgICBsZWZ0OiAxMHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHVzZXI6IGF3YWl0IEF1dGhTZXJ2aWNlLmdldFVzZXJGcm9tQ29va2llKGNvbnRleHQucmVxKSxcbiAgICAgICAgfSxcbiAgICB9O1xufSJdfQ== */\n/*@ sourceURL=/Applications/CrowdMOT/crowdmot-nextjs/pages/about.js */"));
});

/***/ })

})
//# sourceMappingURL=about.js.ec2125873b55a417ca5e.hot-update.js.map