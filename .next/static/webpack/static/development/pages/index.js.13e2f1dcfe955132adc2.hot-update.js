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
    className: "jsx-137408264" + " " + "fixed-top px-3 text-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "https://www.npmjs.com/package/react-annotation-tool",
    className: "jsx-137408264",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "https://img.shields.io/npm/v/react-annotation-tool.svg?branch=master",
    alt: "Responsive image",
    className: "jsx-137408264" + " " + "img-fluid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }))), __jsx("div", {
    className: "jsx-137408264" + " " + "login-link  px-3 text-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, user._id ? __jsx("p", {
    style: {
      display: "inline",
      color: "#007bff"
    },
    className: "jsx-137408264",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, user.name) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/login",
    className: "loginClass",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "jsx-137408264",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 56
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
    className: "jsx-137408264",
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
    className: "jsx-137408264",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 32
    }
  }, "About")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/contact",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 12
    }
  }, __jsx("a", {
    className: "jsx-137408264",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 34
    }
  }, "Contact"))), __jsx("hr", {
    className: "jsx-137408264",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }), __jsx(DynamicVideoComponent, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "137408264",
    __self: _this
  }, ".login-link.jsx-137408264{font-size:20px;!important position:fixed !important;top:8px;left:10px;font-weight:normal;font-family:\"Times New Roman\",Times,serif;}.loginClass.jsx-137408264{margin-left:50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvQ3Jvd2RNT1QvY3Jvd2Rtb3QtbmV4dGpzL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlDa0IsQUFHMEIsQUFRRSxlQVBTLEVBUTVCLG1DQVBVLFFBQ0UsVUFDUyxtQkFDeUIsMENBQzlDIiwiZmlsZSI6Ii9BcHBsaWNhdGlvbnMvQ3Jvd2RNT1QvY3Jvd2Rtb3QtbmV4dGpzL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xuaW1wb3J0IHVzZUF1dGggZnJvbSBcIi4uL2hvb2tzL3VzZUF1dGhcIjtcbmltcG9ydCBBdXRoU2VydmljZSBmcm9tIFwiLi4vc2VydmljZXMvYXV0aFwiO1xuXG5cbmNvbnN0IER5bmFtaWNWaWRlb0NvbXBvbmVudCA9IGR5bmFtaWMoaW1wb3J0KCcuLi9jb21wb25lbnRzL3ZpZGVvQW5ub3RhdGlvbkRlbW8vVmlkZW9Bbm5vdGF0aW9uRGVtby5qcycpLCB7XG4gIHNzcjogZmFsc2Vcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IChwcm9wcykgPT4ge1xuICBjb25zdCB1c2VyID0gdXNlQXV0aChwcm9wcy51c2VyKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7LyogPExpbmsgaHJlZj1cIi9sb2dpblwiPjxidXR0b24+TG9naW48L2J1dHRvbj5cbiAgICAgICAgPC9MaW5rPiAqL31cbiAgICAgICAgXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkLXRvcCBweC0zIHRleHQtcmlnaHRcIj5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL3JlYWN0LWFubm90YXRpb24tdG9vbFwiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuc2hpZWxkcy5pby9ucG0vdi9yZWFjdC1hbm5vdGF0aW9uLXRvb2wuc3ZnP2JyYW5jaD1tYXN0ZXJcIiBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBhbHQ9XCJSZXNwb25zaXZlIGltYWdlXCIgLz5cbiAgICAgICAgPC9hPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWxpbmsgIHB4LTMgdGV4dC1sZWZ0XCI+XG4gICAgICAgIHt1c2VyLl9pZFxuICAgICAgICAgID8gPHAgc3R5bGU9e3tkaXNwbGF5OiBcImlubGluZVwiLCBjb2xvcjogXCIjMDA3YmZmXCJ9fT57dXNlci5uYW1lfTwvcD5cbiAgICAgICAgICA6IDxMaW5rIGhyZWY9XCIvbG9naW5cIiBjbGFzc05hbWU9J2xvZ2luQ2xhc3MnPjxhPkxvZ2luPC9hPlxuICAgICAgICAgICAgIDwvTGluaz59XG4gICAgICAgIHt1c2VyLl9pZFxuICAgICAgICAgID8gPExpbmsgaHJlZj1cIi9wcm9maWxlXCIgPjxhPlByb2ZpbGU8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDogYGB9XG4gICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj48YT5BYm91dDwvYT48L0xpbms+XG4gICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiPjxhPkNvbnRhY3Q8L2E+PC9MaW5rPlxuICAgICAgPC9kaXY+XG5cblxuICAgICAgPGhyIC8+XG4gICAgICA8RHluYW1pY1ZpZGVvQ29tcG9uZW50IC8+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5sb2dpbi1saW5rIHtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7ICFpbXBvcnRhbnRcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcbiAgICAgICAgICB0b3A6IDhweDtcbiAgICAgICAgICBsZWZ0OiAxMHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbiAgICAgICAgfVxuICAgICAgICAubG9naW5DbGFzc3tcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNTBweDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbi8vIE5PREUgSlMgQ09ERVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG4gIFxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICB1c2VyOiBhd2FpdCBBdXRoU2VydmljZS5nZXRVc2VyRnJvbUNvb2tpZShjb250ZXh0LnJlcSksXG4gICAgfSxcbiAgfTtcbn1cblxuIl19 */\n/*@ sourceURL=/Applications/CrowdMOT/crowdmot-nextjs/pages/index.js */"));
}); // NODE JS CODE

/***/ })

})
//# sourceMappingURL=index.js.13e2f1dcfe955132adc2.hot-update.js.map