webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useAuth */ "./hooks/useAuth.js");
var _this = undefined,
    _jsxFileName = "/Applications/CrowdMOT/crowdmot-nextjs/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var DynamicVideoComponent = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("styles"), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! ../components/videoAnnotationDemo/VideoAnnotationDemo.js */ "./components/videoAnnotationDemo/VideoAnnotationDemo.js"));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../components/videoAnnotationDemo/VideoAnnotationDemo.js */ "./components/videoAnnotationDemo/VideoAnnotationDemo.js")];
    },
    modules: ['../components/videoAnnotationDemo/VideoAnnotationDemo.js']
  }
});
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var user = Object(_hooks_useAuth__WEBPACK_IMPORTED_MODULE_5__["default"])(props.user);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-2820749512" + " " + "fixed-top px-3 text-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "https://www.npmjs.com/package/react-annotation-tool",
    className: "jsx-2820749512",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "https://img.shields.io/npm/v/react-annotation-tool.svg?branch=master",
    alt: "Responsive image",
    className: "jsx-2820749512" + " " + "img-fluid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }))), __jsx("div", {
    className: "jsx-2820749512" + " " + "login-link  px-3 text-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, user._id ? "".concat(user.name) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/login",
    style: {
      marginLeft: 5
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "jsx-2820749512",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 57
    }
  }, "Login")), user._id ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/profile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "jsx-2820749512",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 36
    }
  }, "Profile")) : "", __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/about",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 12
    }
  }, __jsx("a", {
    className: "jsx-2820749512",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 32
    }
  }, "About"))), __jsx("hr", {
    className: "jsx-2820749512",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }), __jsx(DynamicVideoComponent, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2820749512",
    __self: _this
  }, ".login-link.jsx-2820749512{font-size:20px;!important position:fixed !important;top:8px;left:10px;font-weight:normal;font-family:\"Times New Roman\",Times,serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvQ3Jvd2RNT1QvY3Jvd2Rtb3QtbmV4dGpzL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdDa0IsQUFHMEIsZUFDVyxxQ0FDbEIsUUFDRSxVQUNTLG1CQUN5QiwwQ0FDOUMiLCJmaWxlIjoiL0FwcGxpY2F0aW9ucy9Dcm93ZE1PVC9jcm93ZG1vdC1uZXh0anMvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XG5pbXBvcnQgdXNlQXV0aCBmcm9tIFwiLi4vaG9va3MvdXNlQXV0aFwiO1xuaW1wb3J0IEF1dGhTZXJ2aWNlIGZyb20gXCIuLi9zZXJ2aWNlcy9hdXRoXCI7XG5cblxuY29uc3QgRHluYW1pY1ZpZGVvQ29tcG9uZW50ID0gZHluYW1pYyhpbXBvcnQoJy4uL2NvbXBvbmVudHMvdmlkZW9Bbm5vdGF0aW9uRGVtby9WaWRlb0Fubm90YXRpb25EZW1vLmpzJyksIHtcbiAgc3NyOiBmYWxzZVxufSlcblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiB7XG4gIGNvbnN0IHVzZXIgPSB1c2VBdXRoKHByb3BzLnVzZXIpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHsvKiA8TGluayBocmVmPVwiL2xvZ2luXCI+PGJ1dHRvbj5Mb2dpbjwvYnV0dG9uPlxuICAgICAgICA8L0xpbms+ICovfVxuICAgICAgICBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQtdG9wIHB4LTMgdGV4dC1yaWdodFwiPlxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvcmVhY3QtYW5ub3RhdGlvbi10b29sXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2ltZy5zaGllbGRzLmlvL25wbS92L3JlYWN0LWFubm90YXRpb24tdG9vbC5zdmc/YnJhbmNoPW1hc3RlclwiIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIGFsdD1cIlJlc3BvbnNpdmUgaW1hZ2VcIiAvPlxuICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tbGluayAgcHgtMyB0ZXh0LWxlZnRcIj5cbiAgICAgICAge3VzZXIuX2lkXG4gICAgICAgICAgPyBgJHt1c2VyLm5hbWV9YFxuICAgICAgICAgIDogPExpbmsgaHJlZj1cIi9sb2dpblwiIHN0eWxlPXt7bWFyZ2luTGVmdDogNX19PjxhPkxvZ2luPC9hPlxuICAgICAgICAgICAgIDwvTGluaz59XG4gICAgICAgIHt1c2VyLl9pZFxuICAgICAgICAgID8gPExpbmsgaHJlZj1cIi9wcm9maWxlXCIgPjxhPlByb2ZpbGU8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDogYGB9XG4gICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj48YT5BYm91dDwvYT48L0xpbms+XG4gICAgICA8L2Rpdj5cblxuXG4gICAgICA8aHIgLz5cbiAgICAgIDxEeW5hbWljVmlkZW9Db21wb25lbnQgLz5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmxvZ2luLWxpbmsge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDsgIWltcG9ydGFudFxuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xuICAgICAgICAgIHRvcDogOHB4O1xuICAgICAgICAgIGxlZnQ6IDEwcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvPlxuICApO1xufTtcblxuLy8gTk9ERSBKUyBDT0RFXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcbiAgXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHVzZXI6IGF3YWl0IEF1dGhTZXJ2aWNlLmdldFVzZXJGcm9tQ29va2llKGNvbnRleHQucmVxKSxcbiAgICB9LFxuICB9O1xufVxuXG4iXX0= */\n/*@ sourceURL=/Applications/CrowdMOT/crowdmot-nextjs/pages/index.js */"));
}); // NODE JS CODE

/***/ })

})
//# sourceMappingURL=index.js.699e7e7c06c8d74ce40d.hot-update.js.map