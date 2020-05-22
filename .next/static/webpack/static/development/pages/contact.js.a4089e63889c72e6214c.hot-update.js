webpackHotUpdate("static/development/pages/contact.js",{

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
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
    _jsxFileName = "/Applications/CrowdMOT/crowdmot-nextjs/pages/contact.js";


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
  }, user._id ? __jsx("p", {
    style: {
      display: "inline",
      color: "#007bff"
    },
    className: "jsx-3454503111",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 23
    }
  }, user.name) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/login",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 23
    }
  }, __jsx("a", {
    className: "jsx-3454503111",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 43
    }
  }, "Login")), user._id ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
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
  }, __jsx("a", {
    className: "jsx-3454503111",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 37
    }
  }, "About"))), __jsx("div", {
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
  }, __jsx("h3", {
    className: "jsx-3454503111" + " " + "display-4  text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 21
    }
  }, "CrowdMOT: A Video Annotation Tool"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 21
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 25
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    style: {
      marginLeft: 100,
      marginRight: 100
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 28
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 32
    }
  }, __jsx("p", {
    className: "jsx-3454503111",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 36
    }
  }, "Hello I am a card!"))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3454503111",
    __self: _this
  }, ".login-link.jsx-3454503111{font-size:20px;!important position:relative;top:8px;left:10px;font-weight:normal;font-family:\"Times New Roman\",Times,serif;margin-right:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvQ3Jvd2RNT1QvY3Jvd2Rtb3QtbmV4dGpzL3BhZ2VzL2NvbnRhY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEN3QixBQUcwQixlQUNHLDZCQUNWLFFBQ0UsVUFDUyxtQkFDeUIsMENBQzFCLGtCQUNwQiIsImZpbGUiOiIvQXBwbGljYXRpb25zL0Nyb3dkTU9UL2Nyb3dkbW90LW5leHRqcy9wYWdlcy9jb250YWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCwgQ2FyZCwgQ2FyZEJvZHksIENhcmRUaXRsZSwgQ2FyZFRleHQgfSBmcm9tICdyZWFjdHN0cmFwJztcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcbmltcG9ydCB1c2VBdXRoIGZyb20gXCIuLi9ob29rcy91c2VBdXRoXCI7XG5pbXBvcnQgQXV0aFNlcnZpY2UgZnJvbSBcIi4uL3NlcnZpY2VzL2F1dGhcIjtcblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiB7XG4gICAgY29uc3QgdXNlciA9IHVzZUF1dGgocHJvcHMudXNlcik7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZC10b3AgcHgtMyB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL3JlYWN0LWFubm90YXRpb24tdG9vbFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1nLnNoaWVsZHMuaW8vbnBtL3YvcmVhY3QtYW5ub3RhdGlvbi10b29sLnN2Zz9icmFuY2g9bWFzdGVyXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgYWx0PVwiUmVzcG9uc2l2ZSBpbWFnZVwiIC8+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWxpbmsgIHB4LTMgdGV4dC1sZWZ0XCIgc3R5bGU9e3sgbWFyZ2luOiAxMCB9fT5cbiAgICAgICAgICAgICAgICB7dXNlci5faWRcbiAgICAgICAgICAgICAgICAgICAgPyA8cCBzdHlsZT17eyBkaXNwbGF5OiBcImlubGluZVwiLCBjb2xvcjogXCIjMDA3YmZmXCIgfX0+e3VzZXIubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDogPExpbmsgaHJlZj1cIi9sb2dpblwiPjxhPkxvZ2luPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+fVxuICAgICAgICAgICAgICAgIHt1c2VyLl9pZFxuICAgICAgICAgICAgICAgICAgICA/IDxMaW5rIGhyZWY9XCIvcHJvZmlsZVwiID48YT5Qcm9maWxlPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDogYGB9XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPjxhPkFib3V0PC9hPjwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgPENvbnRhaW5lciBmbHVpZCBjbGFzc05hbWU9XCJweS0zXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImRpc3BsYXktNCAgdGV4dC1jZW50ZXJcIj5Dcm93ZE1PVDogQSBWaWRlbyBBbm5vdGF0aW9uIFRvb2w8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIHN0eWxlPXt7bWFyZ2luTGVmdDogMTAwLCBtYXJnaW5SaWdodDogMTAwfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRCb2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5IZWxsbyBJIGFtIGEgY2FyZCE8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAubG9naW4tbGluayB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4OyAhaW1wb3J0YW50XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHRvcDogOHB4O1xuICAgICAgICAgIGxlZnQ6IDEwcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgdXNlcjogYXdhaXQgQXV0aFNlcnZpY2UuZ2V0VXNlckZyb21Db29raWUoY29udGV4dC5yZXEpLFxuICAgICAgICB9LFxuICAgIH07XG59Il19 */\n/*@ sourceURL=/Applications/CrowdMOT/crowdmot-nextjs/pages/contact.js */"));
});

/***/ })

})
//# sourceMappingURL=contact.js.a4089e63889c72e6214c.hot-update.js.map