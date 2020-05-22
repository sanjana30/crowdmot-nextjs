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
  }, __jsx("p", {
    style: {
      textAlign: "left",
      fontSize: 18,
      padding: 40,
      fontWeight: "normal"
    },
    className: "jsx-3454503111",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 29
    }
  }, "CrowdMOT enables users to easily track objects of interest in a video. This crowdsourcing system is equipped with the functionality to handle when an object splits into fragments; for instance in the case of cell mitosis, where a cell divides into two children cells.", __jsx("br", {
    className: "jsx-3454503111",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 29
    }
  }), __jsx("div", {
    style: {
      textAlign: "center"
    },
    className: "jsx-3454503111",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: "https://live.staticflickr.com/4666/39926524554_a296f63a10_b.jpg",
    style: {
      width: 500,
      height: 200,
      margin: 40,
      textAlign: "center"
    },
    className: "jsx-3454503111",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 29
    }
  }), __jsx("br", {
    className: "jsx-3454503111",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 176
    }
  })), "Users are required to follow two key steps when using Crowd- MOT. First, a user draws a bounding box around an object to begin annotation by clicking and dragging a new bounding box around it, with eight adjustable points that can be moved to tighten the box\u2019s fit around the object. Second, the user moves the box to track the object. To do so, the user plays the video and, at any time, pauses it to relocate and refit the bounding box to a new location for the object."))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3454503111",
    __self: _this
  }, ".login-link.jsx-3454503111{font-size:20px;!important position:relative;top:8px;left:10px;font-weight:normal;font-family:\"Times New Roman\",Times,serif;margin-right:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvQ3Jvd2RNT1QvY3Jvd2Rtb3QtbmV4dGpzL3BhZ2VzL2Fib3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThDd0IsQUFHMEIsZUFDRyw2QkFDVixRQUNFLFVBQ1MsbUJBQ3lCLDBDQUMxQixrQkFDcEIiLCJmaWxlIjoiL0FwcGxpY2F0aW9ucy9Dcm93ZE1PVC9jcm93ZG1vdC1uZXh0anMvcGFnZXMvYWJvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ29sLCBDYXJkLCBDYXJkQm9keSwgQ2FyZFRpdGxlLCBDYXJkVGV4dCB9IGZyb20gJ3JlYWN0c3RyYXAnO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xuaW1wb3J0IHVzZUF1dGggZnJvbSBcIi4uL2hvb2tzL3VzZUF1dGhcIjtcbmltcG9ydCBBdXRoU2VydmljZSBmcm9tIFwiLi4vc2VydmljZXMvYXV0aFwiO1xuXG5leHBvcnQgZGVmYXVsdCAocHJvcHMpID0+IHtcbiAgICBjb25zdCB1c2VyID0gdXNlQXV0aChwcm9wcy51c2VyKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkLXRvcCBweC0zIHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvcmVhY3QtYW5ub3RhdGlvbi10b29sXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuc2hpZWxkcy5pby9ucG0vdi9yZWFjdC1hbm5vdGF0aW9uLXRvb2wuc3ZnP2JyYW5jaD1tYXN0ZXJcIiBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBhbHQ9XCJSZXNwb25zaXZlIGltYWdlXCIgLz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tbGluayAgcHgtMyB0ZXh0LWxlZnRcIiBzdHlsZT17eyBtYXJnaW46IDEwIH19PlxuICAgICAgICAgICAgICAgIHt1c2VyLl9pZFxuICAgICAgICAgICAgICAgICAgICA/IDxwIHN0eWxlPXt7IGRpc3BsYXk6IFwiaW5saW5lXCIsIGNvbG9yOiBcIiMwMDdiZmZcIiB9fT57dXNlci5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgOiA8TGluayBocmVmPVwiL2xvZ2luXCI+PGE+TG9naW48L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz59XG4gICAgICAgICAgICAgICAge3VzZXIuX2lkXG4gICAgICAgICAgICAgICAgICAgID8gPExpbmsgaHJlZj1cIi9wcm9maWxlXCIgPjxhPlByb2ZpbGU8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgOiBgYH1cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+PGE+QWJvdXQ8L2E+PC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyIGZsdWlkIGNsYXNzTmFtZT1cInB5LTNcIj5cblxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZGlzcGxheS00ICB0ZXh0LWNlbnRlclwiPkNyb3dkTU9UOiBBIFZpZGVvIEFubm90YXRpb24gVG9vbDwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IHRleHRBbGlnbjogXCJsZWZ0XCIsIGZvbnRTaXplOiAxOCwgcGFkZGluZzogNDAsIGZvbnRXZWlnaHQ6IFwibm9ybWFsXCIgfX0+Q3Jvd2RNT1QgZW5hYmxlcyB1c2VycyB0byBlYXNpbHkgdHJhY2sgb2JqZWN0cyBvZiBpbnRlcmVzdCBpbiBhIHZpZGVvLiBUaGlzIGNyb3dkc291cmNpbmcgc3lzdGVtIGlzIGVxdWlwcGVkIHdpdGggdGhlIGZ1bmN0aW9uYWxpdHkgdG8gaGFuZGxlIHdoZW4gYW4gb2JqZWN0IHNwbGl0cyBpbnRvIGZyYWdtZW50czsgZm9yIGluc3RhbmNlIGluIHRoZSBjYXNlIG9mIGNlbGwgbWl0b3Npcywgd2hlcmUgYSBjZWxsIGRpdmlkZXMgaW50byB0d28gY2hpbGRyZW4gY2VsbHMuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3RleHRBbGlnbjogXCJjZW50ZXJcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9saXZlLnN0YXRpY2ZsaWNrci5jb20vNDY2Ni8zOTkyNjUyNDU1NF9hMjk2ZjYzYTEwX2IuanBnXCIgc3R5bGU9e3t3aWR0aDogNTAwLCBoZWlnaHQ6MjAwLCBtYXJnaW46IDQwLCB0ZXh0QWxpZ246IFwiY2VudGVyXCJ9fT48L2ltZz48YnI+PC9icj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBVc2VycyBhcmUgcmVxdWlyZWQgdG8gZm9sbG93IHR3byBrZXkgc3RlcHMgd2hlbiB1c2luZyBDcm93ZC0gTU9ULiBGaXJzdCwgYSB1c2VyIGRyYXdzIGEgYm91bmRpbmcgYm94IGFyb3VuZCBhbiBvYmplY3QgdG8gYmVnaW4gYW5ub3RhdGlvbiBieSBjbGlja2luZyBhbmQgZHJhZ2dpbmcgYSBuZXcgYm91bmRpbmcgYm94IGFyb3VuZCBpdCwgd2l0aCBlaWdodCBhZGp1c3RhYmxlIHBvaW50cyB0aGF0IGNhbiBiZSBtb3ZlZCB0byB0aWdodGVuIHRoZSBib3jigJlzIGZpdCBhcm91bmQgdGhlIG9iamVjdC4gU2Vjb25kLCB0aGUgdXNlciBtb3ZlcyB0aGUgYm94IHRvIHRyYWNrIHRoZSBvYmplY3QuIFRvIGRvIHNvLCB0aGUgdXNlciBwbGF5cyB0aGUgdmlkZW8gYW5kLCBhdCBhbnkgdGltZSwgcGF1c2VzIGl0IHRvIHJlbG9jYXRlIGFuZCByZWZpdCB0aGUgYm91bmRpbmcgYm94IHRvIGEgbmV3IGxvY2F0aW9uIGZvciB0aGUgb2JqZWN0LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAubG9naW4tbGluayB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4OyAhaW1wb3J0YW50XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHRvcDogOHB4O1xuICAgICAgICAgIGxlZnQ6IDEwcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgdXNlcjogYXdhaXQgQXV0aFNlcnZpY2UuZ2V0VXNlckZyb21Db29raWUoY29udGV4dC5yZXEpLFxuICAgICAgICB9LFxuICAgIH07XG59Il19 */\n/*@ sourceURL=/Applications/CrowdMOT/crowdmot-nextjs/pages/about.js */"));
});

/***/ })

})
//# sourceMappingURL=about.js.72fede9471e8485f8f58.hot-update.js.map