exports.ids = [1];
exports.modules = {

/***/ "./components/imageAnnotationDemo/ImageAnnotationDemo.js":
/*!***************************************************************!*\
  !*** ./components/imageAnnotationDemo/ImageAnnotationDemo.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_annotation_tool__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-annotation-tool */ "react-annotation-tool");
/* harmony import */ var react_annotation_tool__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_annotation_tool__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Applications/CrowdMOT/crowdmot-nextjs/components/imageAnnotationDemo/ImageAnnotationDemo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class Demo extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleSubmit", r => {
      this.setState({
        result: r
      });
    });

    this.state = {
      result: null
    };
  }

  render() {
    const {
      result
    } = this.state;
    const annotations = [{
      "id": "jlvnw6az",
      "name": "jlvnw6az",
      "closed": true,
      "color": "rgba(227,0,255,1)",
      "vertices": [{
        "id": "jlvnw6az",
        "name": "jlvnw6az",
        "x": 189.5625,
        "y": 201
      }, {
        "id": "jlvnw8qs",
        "name": "jlvnw8qs",
        "x": 309.25,
        "y": 200
      }, {
        "id": "jlvnw9vp",
        "name": "jlvnw9vp",
        "x": 313.25,
        "y": 203
      }, {
        "id": "jlvnwbvk",
        "name": "jlvnwbvk",
        "x": 316.25,
        "y": 288
      }, {
        "id": "jlvnwczb",
        "name": "jlvnwczb",
        "x": 310.25,
        "y": 292
      }, {
        "id": "jlvnwfhm",
        "name": "jlvnwfhm",
        "x": 187.25,
        "y": 294
      }, {
        "id": "jlvnwgoe",
        "name": "jlvnwgoe",
        "x": 181.25,
        "y": 290
      }, {
        "id": "jlvnwidd",
        "name": "jlvnwidd",
        "x": 183.25,
        "y": 205
      }],
      "selected": [{
        "id": "0",
        "value": "root"
      }, {
        "id": "1",
        "value": "Electronic"
      }, {
        "id": "1-1",
        "value": "Laptop"
      }, {
        "id": "1-1-1",
        "value": "Apple"
      }]
    }, {
      "id": "jlvnxa79",
      "name": "jlvnxa79",
      "color": "rgba(0,255,81,1)",
      "closed": true,
      "vertices": [{
        "id": "jlvnxa79",
        "name": "jlvnxa79",
        "x": 369.25,
        "y": 350.5
      }, {
        "id": "jlvnxbct",
        "name": "jlvnxbct",
        "x": 372.25,
        "y": 343.5
      }, {
        "id": "jlvnxcg6",
        "name": "jlvnxcg6",
        "x": 387.25,
        "y": 341
      }, {
        "id": "jlvnxdic",
        "name": "jlvnxdic",
        "x": 393.25,
        "y": 343
      }, {
        "id": "jlvnxfp2",
        "name": "jlvnxfp2",
        "x": 424.25,
        "y": 342
      }, {
        "id": "jlvnxgfx",
        "name": "jlvnxgfx",
        "x": 426.25,
        "y": 347
      }, {
        "id": "jlvnxjd8",
        "name": "jlvnxjd8",
        "x": 381.25,
        "y": 350
      }],
      "selected": [{
        "id": "0",
        "value": "root"
      }, {
        "id": "2",
        "value": "Stationery"
      }, {
        "id": "2-1",
        "value": "Pen"
      }]
    }];
    const menu = {
      id: "0",
      value: "root",
      options: [{
        id: "1",
        value: "Electronic",
        options: [{
          id: "1-1",
          value: "Laptop",
          options: [{
            id: "1-1-1",
            value: "Apple",
            options: []
          }, {
            id: "1-1-2",
            value: "Asus",
            options: []
          }]
        }, {
          id: "1-2",
          value: "Charger",
          options: []
        }, {
          id: "1-3",
          value: "Wire",
          options: []
        }, {
          id: "1-4",
          value: "Watch",
          options: []
        }]
      }, {
        id: "2",
        value: "Stationery",
        options: [{
          id: "2-1",
          value: "Pen",
          options: []
        }, {
          id: "2-2",
          value: "Eraser",
          options: []
        }]
      }]
    };
    return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
      className: "py-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 4
      }
    }, __jsx("h1", {
      className: "display-4 text-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 5
      }
    }, "Image Tool"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      className: "py-3",
      style: {
        background: "rgb(246, 246, 246)"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 8
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 12
      }
    }, __jsx(react_annotation_tool__WEBPACK_IMPORTED_MODULE_1__["ImageTool"], {
      annotationWidth: 500,
      onNextClick: this.handleSubmit,
      onPreviousClick: this.handleSubmit,
      onSkipClick: this.handleSubmit,
      menu: menu,
      category: "Others",
      categoryOptions: ["No Objects", "No Image"],
      dynamicOptions: true,
      annotations: annotations,
      disabledOptionLevels: [1],
      url: "https://images.pexels.com/photos/57750/pexels-photo-57750.jpeg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 8
      }
    }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      className: "my-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 5
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 12
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 8
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 10
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardTitle"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 10
      }
    }, "Output"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardText"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 11
      }
    }, JSON.stringify(result, null, 2)))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Demo);

/***/ })

};;
//# sourceMappingURL=1.js.map