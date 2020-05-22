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
    className: "jsx-1752604994" + " " + "fixed-top px-3 text-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "https://www.npmjs.com/package/react-annotation-tool",
    className: "jsx-1752604994",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "https://img.shields.io/npm/v/react-annotation-tool.svg?branch=master",
    alt: "Responsive image",
    className: "jsx-1752604994" + " " + "img-fluid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: "jsx-1752604994" + " " + "login-link  px-3 text-left",
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
    className: "jsx-1752604994",
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
    className: "jsx-1752604994" + " " + "text-right",
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
    className: "jsx-1752604994" + " " + "display-4  text-center",
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
    id: "1752604994",
    __self: _this
  }, ".login-link.jsx-1752604994{font-size:20px;!important position:relative;top:8px;left:10px;font-weight:normal;font-family:\"Times New Roman\",Times,serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvQ3Jvd2RNT1QvY3Jvd2Rtb3QtbmV4dGpzL3BhZ2VzL2Fib3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFDd0IsQUFHMEIsZUFDRyw2QkFDVixRQUNFLFVBQ1MsbUJBQ3lCLDBDQUM5QyIsImZpbGUiOiIvQXBwbGljYXRpb25zL0Nyb3dkTU9UL2Nyb3dkbW90LW5leHRqcy9wYWdlcy9hYm91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wsIENhcmQsIENhcmRCb2R5LCBDYXJkVGl0bGUsIENhcmRUZXh0IH0gZnJvbSAncmVhY3RzdHJhcCc7XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XG5pbXBvcnQgdXNlQXV0aCBmcm9tIFwiLi4vaG9va3MvdXNlQXV0aFwiO1xuaW1wb3J0IEF1dGhTZXJ2aWNlIGZyb20gXCIuLi9zZXJ2aWNlcy9hdXRoXCI7XG5cbmV4cG9ydCBkZWZhdWx0IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHVzZXIgPSB1c2VBdXRoKHByb3BzLnVzZXIpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQtdG9wIHB4LTMgdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9yZWFjdC1hbm5vdGF0aW9uLXRvb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2ltZy5zaGllbGRzLmlvL25wbS92L3JlYWN0LWFubm90YXRpb24tdG9vbC5zdmc/YnJhbmNoPW1hc3RlclwiIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIGFsdD1cIlJlc3BvbnNpdmUgaW1hZ2VcIiAvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbi1saW5rICBweC0zIHRleHQtbGVmdFwiPlxuICAgICAgICAgICAgICAgIHt1c2VyLl9pZFxuICAgICAgICAgICAgICAgICAgICA/IGAke3VzZXIubmFtZX1gXG4gICAgICAgICAgICAgICAgICAgIDogPExpbmsgaHJlZj1cIi9sb2dpblwiPkxvZ2luXG4gICAgICAgICAgICAgPC9MaW5rPn1cbiAgICAgICAgICAgICAgICB7dXNlci5faWRcbiAgICAgICAgICAgICAgICAgICAgPyA8TGluayBocmVmPVwiL3Byb2ZpbGVcIiA+PGE+UHJvZmlsZTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA6IGBgfVxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5BYm91dDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgPENvbnRhaW5lciBmbHVpZCBjbGFzc05hbWU9XCJweS0zXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImRpc3BsYXktNCAgdGV4dC1jZW50ZXJcIj5Dcm93ZE1PVDogQSBWaWRlbyBBbm5vdGF0aW9uIFRvb2w8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cIm15LTMgY29sLXhzLTEyIGNvbC1sZy0xMCBvZmZzZXQtbGctMVwiPlxuICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAubG9naW4tbGluayB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4OyAhaW1wb3J0YW50XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHRvcDogOHB4O1xuICAgICAgICAgIGxlZnQ6IDEwcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICB1c2VyOiBhd2FpdCBBdXRoU2VydmljZS5nZXRVc2VyRnJvbUNvb2tpZShjb250ZXh0LnJlcSksXG4gICAgICAgIH0sXG4gICAgfTtcbn0iXX0= */\n/*@ sourceURL=/Applications/CrowdMOT/crowdmot-nextjs/pages/about.js */"));
});

/***/ })

})
//# sourceMappingURL=about.js.b2774fab8d68622fbec9.hot-update.js.map