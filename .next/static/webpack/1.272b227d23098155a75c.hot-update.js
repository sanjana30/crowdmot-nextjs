webpackHotUpdate(1,{

/***/ "./components/videoAnnotationDemo/VideoAnnotationDemo.js":
/*!***************************************************************!*\
  !*** ./components/videoAnnotationDemo/VideoAnnotationDemo.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_annotation_tool__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-annotation-tool */ "./node_modules/react-annotation-tool/dist/bundle.js");
/* harmony import */ var react_annotation_tool__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_annotation_tool__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _videoInstruction_VideoInstruction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../videoInstruction/VideoInstruction */ "./components/videoInstruction/VideoInstruction.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_csv__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-csv */ "./node_modules/react-csv/index.js");
/* harmony import */ var react_csv__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_csv__WEBPACK_IMPORTED_MODULE_13__);








var _jsxFileName = "/Applications/CrowdMOT/crowdmot-nextjs/components/videoAnnotationDemo/VideoAnnotationDemo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







 // import { array } from 'prop-types';
// import ReactHTMLTableToExcel from 'react-html-table-to-excel';
// import { MdBubbleChart } from 'react-icons/md';

var Demo = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Demo, _Component);

  var _super = _createSuper(Demo);

  function Demo(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Demo);

    _this = _super.call(this, props); // const fs = require('fs');
    // const annotations = [];//[ { "id": "jt192wyd", "name": "jt192wyd", "label": "1-2", "color": "rgba(255,0,0,1)", "trajectories": [ { "id": "jt192wyb", "name": "jt192wyb", "x": 295.00402335586875, "y": 193.3689649661968, "width": 40.75402335586878, "height": 41.63103503380317, "time": 0.0308226495726496, "status": "Show" }, { "id": "jt1930nb", "name": "jt1930nb", "x": 304.00402335586875, "y": 202.3689649661968, "width": 58.75402335586875, "height": 60.63103503380319, "time": 0.03178472222222222, "status": "Show" }, { "id": "jt193fim", "name": "jt193fim", "x": 309.00402335586875, "y": 213.3689649661968, "width": 58.75402335586875, "height": 60.63103503380319, "time": 0.06388611111111112, "status": "Show" }, { "id": "jt193ijo", "name": "jt193ijo", "x": 320.00402335586875, "y": 220.3689649661968, "width": 58.75402335586875, "height": 74.63103503380319, "time": 0.08677242063492063, "status": "Show" }, { "id": "jt19484m", "name": "jt19484m", "x": 320.48992156587633, "y": 218.42537212616642, "width": 60.697616195899116, "height": 78.17334040378043, "time": 0.0966718253968254, "status": "Show" }, { "id": "jt193o4y", "name": "jt193o4y", "x": 321.00402335586875, "y": 216.3689649661968, "width": 62.75402335586875, "height": 71.63103503380319, "time": 0.10714583333333334, "status": "Show" }, { "id": "jt194dom", "name": "jt194dom", "x": 321.00402335586875, "y": 218.8083044640243, "width": 62.75402335586875, "height": 69.1916955359757, "time": 0.1195857142857143, "status": "Show" }, { "id": "jt193taw", "name": "jt193taw", "x": 321.00402335586875, "y": 228.3689649661968, "width": 62.75402335586875, "height": 59.63103503380319, "time": 0.13459007936507936, "status": "Show" }, { "id": "jt193zb4", "name": "jt193zb4", "x": 318.00402335586875, "y": 228.3689649661968, "width": 81.75402335586875, "height": 59.63103503380319, "time": 0.1693952380952381, "status": "Show" }, { "id": "jt195ltz", "name": "jt195ltz", "x": 328.2874098641244, "y": 230.6523514744525, "width": 70.85164231813906, "height": 56.631035033803215, "time": 0.1985523622047244, "status": "Show" }, { "id": "jt194trg", "name": "jt194trg", "x": 322.00402335586875, "y": 232.3689649661968, "width": 76.66967862975952, "height": 59.63103503380319, "time": 0.22047222222222224, "status": "Show" }, { "id": "jt194lgm", "name": "jt194lgm", "x": 318.00402335586875, "y": 228.3689649661968, "width": 75.75402335586875, "height": 59.63103503380319, "time": 0.22967083333333332, "status": "Show" }, { "id": "jt195p7m", "name": "jt195p7m", "x": 318.00402335586875, "y": 228.3689649661968, "width": 68.75402335586875, "height": 58.19684946385905, "time": 0.25359350393700786, "status": "Show" }, { "id": "jt1951r9", "name": "jt1951r9", "x": 318.00402335586875, "y": 228.3689649661968, "width": 75.75402335586875, "height": 54.63103503380319, "time": 0.31307242063492063, "status": "Show" }, { "id": "jt195v9l", "name": "jt195v9l", "x": 318.00402335586875, "y": 228.3689649661968, "width": 75.75402335586875, "height": 54.63103503380319, "time": 0.34623937007874017, "status": "Hide" } ], "children": [], "parent": "jt1922xu" }, { "id": "jt192wyc", "name": "jt192wyc", "label": "1-1", "color": "rgba(255,0,0,1)", "trajectories": [ { "id": "jt192wyb", "name": "jt192wyb", "x": 274.25, "y": 171.73792993239366, "width": 40.75402335586878, "height": 41.63103503380317, "time": 0.0308226495726496, "status": "Show" }, { "id": "jt19349x", "name": "jt19349x", "x": 271.25, "y": 167.73792993239366, "width": 60.75402335586875, "height": 58.63103503380316, "time": 0.03178472222222222, "status": "Show" }, { "id": "jt193ekd", "name": "jt193ekd", "x": 274.25, "y": 160.73792993239366, "width": 60.75402335586875, "height": 58.63103503380316, "time": 0.06388611111111112, "status": "Show" }, { "id": "jt193hp1", "name": "jt193hp1", "x": 280.25, "y": 160.73792993239366, "width": 60.75402335586875, "height": 58.63103503380316, "time": 0.08677242063492063, "status": "Show" }, { "id": "jt194cbv", "name": "jt194cbv", "x": 280.1326975821677, "y": 158.62062751456136, "width": 60.75402335586875, "height": 58.63103503380316, "time": 0.1195857142857143, "status": "Show" }, { "id": "jt193umg", "name": "jt193umg", "x": 274.25, "y": 154.73792993239366, "width": 60.75402335586875, "height": 58.63103503380316, "time": 0.13459007936507936, "status": "Show" }, { "id": "jt193y7q", "name": "jt193y7q", "x": 268.25, "y": 155.73792993239366, "width": 60.75402335586875, "height": 58.63103503380316, "time": 0.1693952380952381, "status": "Show" }, { "id": "jt194hxg", "name": "jt194hxg", "x": 260.25, "y": 157.73792993239366, "width": 60.75402335586875, "height": 58.63103503380316, "time": 0.20233392857142857, "status": "Show" }, { "id": "jt194mj1", "name": "jt194mj1", "x": 253.25, "y": 156.73792993239366, "width": 60.75402335586875, "height": 58.63103503380316, "time": 0.22967083333333332, "status": "Show" }, { "id": "jt195qgw", "name": "jt195qgw", "x": 246.25, "y": 156.73792993239366, "width": 63.66047805713703, "height": 58.63103503380316, "time": 0.25359350393700786, "status": "Show" }, { "id": "jt194xqh", "name": "jt194xqh", "x": 253.25, "y": 156.73792993239366, "width": 52.75402335586875, "height": 58.63103503380316, "time": 0.27642281746031744, "status": "Show" }, { "id": "jt1955u1", "name": "jt1955u1", "x": 265.25, "y": 159.73792993239366, "width": 40.75402335586875, "height": 49.63103503380316, "time": 0.3564833333333333, "status": "Show" }, { "id": "jt195b3i", "name": "jt195b3i", "x": 265.25, "y": 141.73792993239366, "width": 40.75402335586875, "height": 49.63103503380316, "time": 0.45984980158730154, "status": "Show" }, { "id": "jt1961v6", "name": "jt1961v6", "x": 269.25, "y": 144.73792993239366, "width": 40.75402335586875, "height": 49.63103503380316, "time": 0.47851751968503936, "status": "Show" }, { "id": "jt1965az", "name": "jt1965az", "x": 262.25, "y": 144.73792993239366, "width": 47.75402335586875, "height": 49.63103503380316, "time": 0.5342496062992126, "status": "Show" }, { "id": "jt1968nk", "name": "jt1968nk", "x": 262.25, "y": 149.73792993239366, "width": 47.75402335586875, "height": 49.63103503380316, "time": 0.5904106299212598, "status": "Show" }, { "id": "jt196ax3", "name": "jt196ax3", "x": 270.25, "y": 158.73792993239366, "width": 47.75402335586875, "height": 49.63103503380316, "time": 0.6662596456692913, "status": "Show" }, { "id": "jt196dys", "name": "jt196dys", "x": 268.25, "y": 164.73792993239366, "width": 47.75402335586875, "height": 49.63103503380316, "time": 0.7368370078740157, "status": "Show" }, { "id": "jt196guu", "name": "jt196guu", "x": 272.25, "y": 154.73792993239366, "width": 47.75402335586875, "height": 49.63103503380316, "time": 0.801053937007874, "status": "Show" }, { "id": "jt196k7h", "name": "jt196k7h", "x": 273.25, "y": 157.73792993239366, "width": 47.75402335586875, "height": 49.63103503380316, "time": 0.8626350393700787, "status": "Show" } ], "children": [], "parent": "jt1922xu" }, { "id": "jt1922xu", "name": "jt1922xu", "label": "1", "color": "rgba(255,219,0,1)", "trajectories": [ { "id": "jt1922xu", "name": "jt1922xu", "x": 274.25, "y": 174, "width": 80, "height": 81, "time": 0, "status": "Show" }, { "id": "jt192wyb", "name": "jt192wyb", "x": 274.25, "y": 171.73792993239366, "width": 81.50804671173756, "height": 83.26207006760634, "time": 0.0308226495726496, "status": "Split" } ], "children": [ "jt192wyc", "jt192wyd" ], "parent": "" } ];
    // const previewNotices = ["Cells' body range.", "The time that cells <u>split</u>, <u>leave</u>, <u>obscured</u> and <u>show up</u> (if applicable)."];
    // const url = 'https://cildata.crbs.ucsd.edu/media/videos/50507/50507_web.mp4';
    // const annotationWidth = 600;
    // this.state = {
    // 	result: null,
    // 	input: {
    // 		annotations: JSON.stringify(annotations),
    // 		url: url,
    // 		annotationWidth: annotationWidth
    // 	 },
    // 	params: {
    // 		annotations: annotations,
    // 		url: url,
    // 		previewNotices: previewNotices,
    // 		annotationWidth: annotationWidth
    // 	}
    // }

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "handleResultSubmit", function (result) {
      _this.setState({
        result: result
      });

      console.log(JSON.stringify(_this.state.result));
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "handleChange", function (event) {
      var target = event.target;
      var name = target.name;
      var value = target.type === "checkbox" ? target.checked : target.value;

      _this.setState(function (preState) {
        var input = preState.input;
        return {
          input: _objectSpread({}, input, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])({}, name, value))
        };
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "handleSubmit", function _callee(event) {
      var result, readFilePromise, _result, _result$url, url, _result$videoWidth, videoWidth, _result$defaultAnnota, defaultAnnotations;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              result = {};

              if (!_this.fileInput.current.files[0]) {
                _context.next = 7;
                break;
              }

              readFilePromise = new Promise(function (resolve, reject) {
                var fileReader = new FileReader();

                fileReader.onload = function (event) {
                  if (!_this.isJsonString(event.target.result)) reject('Wrong json format');
                  var result = JSON.parse(event.target.result);
                  resolve(result);
                };

                fileReader.onerror = function (event) {
                  reject(event);
                };

                fileReader.readAsText(_this.fileInput.current.files[0]);
              });
              _context.next = 6;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(readFilePromise);

            case 6:
              result = _context.sent;

            case 7:
              _result = result, _result$url = _result.url, url = _result$url === void 0 ? '' : _result$url, _result$videoWidth = _result.videoWidth, videoWidth = _result$videoWidth === void 0 ? 0 : _result$videoWidth, _result$defaultAnnota = _result.defaultAnnotations, defaultAnnotations = _result$defaultAnnota === void 0 ? [] : _result$defaultAnnota;

              _this.setState(function (preState) {
                var input = preState.input;

                if (result.annotations.length === 0) {
                  defaultAnnotations = _this.isJsonString(input.defaultAnnotations) ? JSON.parse(input.defaultAnnotations) : [];
                } else {
                  defaultAnnotations = result.annotations;
                }

                return {
                  params: {
                    defaultAnnotations: defaultAnnotations,
                    url: url || input.url,
                    videoWidth: videoWidth !== 0 ? videoWidth : parseInt(input.videoWidth, 10)
                  }
                };
              });

              console.log(_this.state.result);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, null, Promise);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "isJsonString", function (str) {
      try {
        JSON.parse(str);
      } catch (e) {
        return false;
      }

      return true;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "getInterpolatedData", function (event) {
      event.preventDefault();
      var duration = JSON.parse(JSON.stringify(_this.state.result.duration));
      console.log(duration);
      var timerate = duration * 60; //collect frame/second for the video

      var timeNow = new Date().getTime().toString(36);
      var interpolatedResult = JSON.parse(JSON.stringify(_this.state.result));
      var temp = interpolatedResult;

      for (var annotation = 0; annotation < temp.annotations.length; annotation++) {
        for (var incident = 0; incident < temp.annotations[annotation].incidents.length; incident++) {
          temp.annotations[annotation].incidents[incident].parentName = temp.annotations[annotation].parentName;
        }
      }

      for (var _annotation = 0; _annotation < temp.annotations.length; _annotation++) {
        for (var _incident = 0; _incident < temp.annotations[_annotation].incidents.length; _incident++) {
          temp.annotations[_annotation].incidents[_incident].label = temp.annotations[_annotation].label;
        }
      }

      for (var i = 0; i < interpolatedResult.annotations.length; i++) {
        var annotIncidentLength = interpolatedResult.annotations[i].incidents.length;

        if (annotIncidentLength === 1) {
          console.log("This is not possible :P");
        } else if (annotIncidentLength > 1) {
          for (var j = 0; j < annotIncidentLength; j++) {
            if (j != annotIncidentLength - 1 && (interpolatedResult.annotations[i].incidents[j + 1].status == "Re-appear" || interpolatedResult.annotations[i].incidents[j + 1].status == "" || interpolatedResult.annotations[i].incidents[j + 1].status == "Split")) {
              var source = interpolatedResult.annotations[i].incidents[j];
              var target = interpolatedResult.annotations[i].incidents[j + 1];
              var tdiff = target.time * timerate - source.time * timerate;
              var xSlope = (target.x - source.x) / tdiff;
              var ySlope = (target.y - source.y) / tdiff;
              var wSlope = (target.width - source.width) / tdiff;
              var hSlope = (target.height - source.height) / tdiff;
              var sFrame = Math.round(source.time * timerate);
              var tFrame = Math.round(target.time * timerate);

              for (var k = sFrame + 1; k <= tFrame; k++) {
                var off = k - Math.round(source.time * timerate);
                var interpolX = (source.x + xSlope * off).toFixed(2);
                var interpolY = (source.y + ySlope * off).toFixed(2);
                var interpolW = (source.width + wSlope * off).toFixed(2);
                var interpolH = (source.height + hSlope * off).toFixed(2);
                temp.annotations[i].incidents.splice(j + 1, 0, {
                  id: "".concat(timeNow),
                  name: "".concat(timeNow),
                  x: interpolX,
                  y: interpolY,
                  height: interpolH,
                  width: interpolW,
                  time: k,
                  status: status,
                  parentName: interpolatedResult.annotations[i].parentName,
                  label: interpolatedResult.annotations[i].label
                });
              }
            } //close if 


            if (j == annotIncidentLength - 1 && (interpolatedResult.annotations[i].incidents[j].status == "Re-appear" || interpolatedResult.annotations[i].incidents[j].status == "" || interpolatedResult.annotations[i].incidents[j + 1].status == "Split")) {
              var _source = interpolatedResult.annotations[i].incidents[j];
              var _target = interpolatedResult.annotations[i].incidents[j];

              var _tdiff = duration * timerate - _source.time * timerate;

              var _xSlope = (_target.x - _source.x) / _tdiff;

              var _ySlope = (_target.y - _source.y) / _tdiff;

              var _wSlope = (_target.width - _source.width) / _tdiff;

              var _hSlope = (_target.height - _source.height) / _tdiff;

              var _sFrame = Math.round(_source.time * timerate);

              var _tFrame = Math.round(_target.time * timerate);

              for (var _k = _sFrame + 1; _k <= _tFrame; _k++) {
                var _off = _k - Math.round(_source.time * timerate);

                var _interpolX = _source.x + _xSlope * _off;

                var _interpolY = _source.y + _ySlope * _off;

                var _interpolW = _source.width + _wSlope * _off;

                var _interpolH = _source.height + _hSlope * _off;

                temp.annotations[i].incidents.splice(j + 1, 0, {
                  id: "".concat(timeNow),
                  name: "".concat(timeNow),
                  x: _interpolX,
                  y: _interpolY,
                  height: _interpolH,
                  width: _interpolW,
                  time: _k,
                  status: status,
                  parentName: temp.annotations[i].parentName,
                  label: interpolatedResult.annotations[i].label
                });
              }
            } //close second if

          } //close for loop for j

        } //close else-if annotlength>1

      } //close for loop for i
      //sort the temp object based on time/frame value


      var interpol_data_arr = [],
          sno = 1;
      console.log("Temp array: " + JSON.stringify(temp));

      for (var x = 0; x < temp.annotations.length; x++) {
        for (var y = 0; y < temp.annotations[x].incidents.length; y++) {
          if (!(temp.annotations[x].incidents[y].time > 0 && temp.annotations[x].incidents[y].time < 1)) interpol_data_arr.push(temp.annotations[x].incidents[y]);
        }
      }

      for (var p = 0; p < interpol_data_arr.length; p++) {
        for (var q = 0, stop = interpol_data_arr.length - p - 1; q < stop; q++) {
          if (interpol_data_arr[q].time == interpol_data_arr[q + 1].time) {
            var swap = interpol_data_arr[q];
            interpol_data_arr[q] = interpol_data_arr[q + 1];
            interpol_data_arr[q + 1] = swap;
          }

          if (interpol_data_arr[q].time > interpol_data_arr[q + 1].time) {
            var swap = interpol_data_arr[q];
            interpol_data_arr[q] = interpol_data_arr[q + 1];
            interpol_data_arr[q + 1] = swap;
          }
        }
      } //sorting ends
      //add Sno/ID to each row


      for (var id = 0; id < interpol_data_arr.length; id++) {
        interpol_data_arr[id].serial = interpol_data_arr[id].label; //sno++
      }

      for (var pa = 0; pa < interpol_data_arr.length; pa++) {
        for (var qa = 0, stopa = interpol_data_arr.length - pa - 1; qa < stopa; qa++) {
          // if(interpol_data_arr[qa].time == interpol_data_arr[qa+1].time){
          // 	var swapa = interpol_data_arr[qa];
          // 	interpol_data_arr[qa] = interpol_data_arr[qa+1];
          // 	interpol_data_arr[qa+1] = swapa;
          // }
          if (interpol_data_arr[qa].serial > interpol_data_arr[qa + 1].serial) {
            var swapa = interpol_data_arr[qa];
            interpol_data_arr[qa] = interpol_data_arr[qa + 1];
            interpol_data_arr[qa + 1] = swapa;
          }
        }
      } // for(let labelno=0; labelno<interpol_data_arr.length; labelno++){
      // 	var n = interpol_data_arr[labelno].label.search("-");
      // 	if(n<0){
      // 		interpol_data_arr[labelno].serial = interpol_data_arr[labelno].label
      // 	}
      // 	else {
      // 		interpol_data_arr[labelno].serial = interpol_data_arr[labelno].label[n+1]
      // 	}
      // }
      //Sno/ID added


      _this.setState({
        interpolationResult: interpol_data_arr
      });

      document.getElementById("export-interpol").style.display = "block";
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "createTable", function (e) {
      var temp = JSON.parse(JSON.stringify(_this.state.interpolationResult));
      console.log("Table temp= \n" + JSON.stringify(_this.state.interpolationResult));
      var table = document.getElementById("interpol-table");

      for (var i = 0; i < temp.length; i++) {
        var row = document.createElement('tr');
        var cell_sno = document.createElement('td');
        cell_sno.innerHTML = temp[i].serial;
        row.appendChild(cell_sno);
        var cell_x_min = document.createElement('td');
        var cell_y_min = document.createElement('td');
        var cell_width = document.createElement('td');
        var cell_height = document.createElement('td');
        var cell_frame = document.createElement('td');
        var cell_lost = document.createElement('td');
        var cell_occluded = document.createElement('td');
        var cell_generated = document.createElement('td');
        var cell_label = document.createElement('td');
        var cell_parent = document.createElement('td');
        cell_x_min.innerHTML = temp[i].x;
        cell_y_min.innerHTML = temp[i].y;
        cell_width.innerHTML = temp[i].width;
        cell_height.innerHTML = temp[i].height;
        cell_frame.innerHTML = temp[i].time;
        cell_lost.innerHTML = 0;
        cell_occluded.innerHTML = 0;
        cell_generated.innerHTML = 0;
        cell_label.innerHTML = temp[i].label;
        cell_parent.innerHTML = temp[i].parentName; //row.appendChild(cell_id);

        row.appendChild(cell_x_min);
        row.appendChild(cell_y_min);
        row.appendChild(cell_width);
        row.appendChild(cell_height);
        row.appendChild(cell_frame);
        row.appendChild(cell_lost);
        row.appendChild(cell_occluded);
        row.appendChild(cell_generated);
        row.appendChild(cell_label);
        row.appendChild(cell_parent);
        table.appendChild(row);
      }

      _this.downloadInterpolTable();
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "export_table_to_csv", function (html, filename) {
      var csv = [];
      var rows = document.querySelectorAll("table tr");

      for (var i = 0; i < rows.length; i++) {
        var row = [],
            cols = rows[i].querySelectorAll("td, th");

        for (var j = 0; j < cols.length; j++) {
          row.push(cols[j].innerText);
        }

        csv.push(row.join(","));
      } // Download CSV


      _this.download_csv(csv.join("\n"), filename);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "download_csv", function (csv, filename) {
      var csvFile;
      var downloadLink; // CSV FILE

      csvFile = new Blob([csv], {
        type: "text/csv"
      }); // Download link

      downloadLink = document.createElement("a"); // File name

      downloadLink.download = filename; // We have to create a link to the file

      downloadLink.href = window.URL.createObjectURL(csvFile); // Make sure that the link is not displayed

      downloadLink.style.display = "none"; // Add the link to your DOM

      document.body.appendChild(downloadLink); // Lanzamos

      downloadLink.click();
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "downloadInterpolTable", function () {
      var html = document.querySelector("table").outerHTML;

      _this.export_table_to_csv(html, "table.csv");
    });

    _this.state = {
      myStream: null,
      result: null,
      interpolationResult: null,
      input: {
        defaultAnnotations: JSON.stringify(_defaultAnnotations),
        url: _url,
        videoWidth: _videoWidth,
        previewHeader: previewHeader,
        previewNoticeList: previewNoticeList,
        emptyCheckSubmissionWarningText: emptyCheckSubmissionWarningText,
        emptyCheckAnnotationItemWarningText: emptyCheckAnnotationItemWarningText,
        emptyAnnotationReminderText: emptyAnnotationReminderText
      },
      params: {
        defaultAnnotations: [],
        url: _url,
        videoWidth: _videoWidth,
        previewHeader: previewHeader,
        previewNoticeList: previewNoticeList,
        emptyCheckSubmissionWarningText: emptyCheckSubmissionWarningText,
        emptyCheckAnnotationItemWarningText: emptyCheckAnnotationItemWarningText,
        emptyAnnotationReminderText: emptyAnnotationReminderText
      }
    }; //start content from react tool

    var _temp = {};
    var _defaultAnnotations = [{
      id: 'jt192wyd',
      name: 'jt192wyd',
      label: '1-2',
      color: 'rgba(255,0,0,1)',
      incidents: [{
        id: 'jt192wyb',
        name: 'jt192wyb',
        x: 295.00402335586875,
        y: 193.3689649661968,
        width: 40.75402335586878,
        height: 41.63103503380317,
        time: 0.0308226495726496,
        status: 'Show'
      }, {
        id: 'jt1930nb',
        name: 'jt1930nb',
        x: 304.00402335586875,
        y: 202.3689649661968,
        width: 58.75402335586875,
        height: 60.63103503380319,
        time: 0.03178472222222222,
        status: 'Show'
      }, {
        id: 'jt193fim',
        name: 'jt193fim',
        x: 309.00402335586875,
        y: 213.3689649661968,
        width: 58.75402335586875,
        height: 60.63103503380319,
        time: 0.06388611111111112,
        status: 'Show'
      }, {
        id: 'jt193ijo',
        name: 'jt193ijo',
        x: 320.00402335586875,
        y: 220.3689649661968,
        width: 58.75402335586875,
        height: 74.63103503380319,
        time: 0.08677242063492063,
        status: 'Show'
      }, {
        id: 'jt19484m',
        name: 'jt19484m',
        x: 320.48992156587633,
        y: 218.42537212616642,
        width: 60.697616195899116,
        height: 78.17334040378043,
        time: 0.0966718253968254,
        status: 'Show'
      }, {
        id: 'jt193o4y',
        name: 'jt193o4y',
        x: 321.00402335586875,
        y: 216.3689649661968,
        width: 62.75402335586875,
        height: 71.63103503380319,
        time: 0.10714583333333334,
        status: 'Show'
      }, {
        id: 'jt194dom',
        name: 'jt194dom',
        x: 321.00402335586875,
        y: 218.8083044640243,
        width: 62.75402335586875,
        height: 69.1916955359757,
        time: 0.1195857142857143,
        status: 'Show'
      }, {
        id: 'jt193taw',
        name: 'jt193taw',
        x: 321.00402335586875,
        y: 228.3689649661968,
        width: 62.75402335586875,
        height: 59.63103503380319,
        time: 0.13459007936507936,
        status: 'Show'
      }, {
        id: 'jt193zb4',
        name: 'jt193zb4',
        x: 318.00402335586875,
        y: 228.3689649661968,
        width: 81.75402335586875,
        height: 59.63103503380319,
        time: 0.1693952380952381,
        status: 'Show'
      }, {
        id: 'jt195ltz',
        name: 'jt195ltz',
        x: 328.2874098641244,
        y: 230.6523514744525,
        width: 70.85164231813906,
        height: 56.631035033803215,
        time: 0.1985523622047244,
        status: 'Show'
      }, {
        id: 'jt194trg',
        name: 'jt194trg',
        x: 322.00402335586875,
        y: 232.3689649661968,
        width: 76.66967862975952,
        height: 59.63103503380319,
        time: 0.22047222222222224,
        status: 'Show'
      }, {
        id: 'jt194lgm',
        name: 'jt194lgm',
        x: 318.00402335586875,
        y: 228.3689649661968,
        width: 75.75402335586875,
        height: 59.63103503380319,
        time: 0.22967083333333332,
        status: 'Show'
      }, {
        id: 'jt195p7m',
        name: 'jt195p7m',
        x: 318.00402335586875,
        y: 228.3689649661968,
        width: 68.75402335586875,
        height: 58.19684946385905,
        time: 0.25359350393700786,
        status: 'Show'
      }, {
        id: 'jt1951r9',
        name: 'jt1951r9',
        x: 318.00402335586875,
        y: 228.3689649661968,
        width: 75.75402335586875,
        height: 54.63103503380319,
        time: 0.31307242063492063,
        status: 'Show'
      }, {
        id: 'jt195v9l',
        name: 'jt195v9l',
        x: 318.00402335586875,
        y: 228.3689649661968,
        width: 75.75402335586875,
        height: 54.63103503380319,
        time: 0.34623937007874017,
        status: 'Hide'
      }],
      childrenNames: [],
      parentName: 'jt1922xu'
    }, {
      id: 'jt192wyc',
      name: 'jt192wyc',
      label: '1-1',
      color: 'rgba(255,0,0,1)',
      incidents: [{
        id: 'jt192wyb',
        name: 'jt192wyb',
        x: 274.25,
        y: 171.73792993239366,
        width: 40.75402335586878,
        height: 41.63103503380317,
        time: 0.0308226495726496,
        status: 'Show'
      }, {
        id: 'jt19349x',
        name: 'jt19349x',
        x: 271.25,
        y: 167.73792993239366,
        width: 60.75402335586875,
        height: 58.63103503380316,
        time: 0.03178472222222222,
        status: 'Show'
      }, {
        id: 'jt193ekd',
        name: 'jt193ekd',
        x: 274.25,
        y: 160.73792993239366,
        width: 60.75402335586875,
        height: 58.63103503380316,
        time: 0.06388611111111112,
        status: 'Show'
      }, {
        id: 'jt193hp1',
        name: 'jt193hp1',
        x: 280.25,
        y: 160.73792993239366,
        width: 60.75402335586875,
        height: 58.63103503380316,
        time: 0.08677242063492063,
        status: 'Show'
      }, {
        id: 'jt194cbv',
        name: 'jt194cbv',
        x: 280.1326975821677,
        y: 158.62062751456136,
        width: 60.75402335586875,
        height: 58.63103503380316,
        time: 0.1195857142857143,
        status: 'Show'
      }, {
        id: 'jt193umg',
        name: 'jt193umg',
        x: 274.25,
        y: 154.73792993239366,
        width: 60.75402335586875,
        height: 58.63103503380316,
        time: 0.13459007936507936,
        status: 'Show'
      }, {
        id: 'jt193y7q',
        name: 'jt193y7q',
        x: 268.25,
        y: 155.73792993239366,
        width: 60.75402335586875,
        height: 58.63103503380316,
        time: 0.1693952380952381,
        status: 'Show'
      }, {
        id: 'jt194hxg',
        name: 'jt194hxg',
        x: 260.25,
        y: 157.73792993239366,
        width: 60.75402335586875,
        height: 58.63103503380316,
        time: 0.20233392857142857,
        status: 'Show'
      }, {
        id: 'jt194mj1',
        name: 'jt194mj1',
        x: 253.25,
        y: 156.73792993239366,
        width: 60.75402335586875,
        height: 58.63103503380316,
        time: 0.22967083333333332,
        status: 'Show'
      }, {
        id: 'jt195qgw',
        name: 'jt195qgw',
        x: 246.25,
        y: 156.73792993239366,
        width: 63.66047805713703,
        height: 58.63103503380316,
        time: 0.25359350393700786,
        status: 'Show'
      }, {
        id: 'jt194xqh',
        name: 'jt194xqh',
        x: 253.25,
        y: 156.73792993239366,
        width: 52.75402335586875,
        height: 58.63103503380316,
        time: 0.27642281746031744,
        status: 'Show'
      }, {
        id: 'jt1955u1',
        name: 'jt1955u1',
        x: 265.25,
        y: 159.73792993239366,
        width: 40.75402335586875,
        height: 49.63103503380316,
        time: 0.3564833333333333,
        status: 'Show'
      }, {
        id: 'jt195b3i',
        name: 'jt195b3i',
        x: 265.25,
        y: 141.73792993239366,
        width: 40.75402335586875,
        height: 49.63103503380316,
        time: 0.45984980158730154,
        status: 'Show'
      }, {
        id: 'jt1961v6',
        name: 'jt1961v6',
        x: 269.25,
        y: 144.73792993239366,
        width: 40.75402335586875,
        height: 49.63103503380316,
        time: 0.47851751968503936,
        status: 'Show'
      }, {
        id: 'jt1965az',
        name: 'jt1965az',
        x: 262.25,
        y: 144.73792993239366,
        width: 47.75402335586875,
        height: 49.63103503380316,
        time: 0.5342496062992126,
        status: 'Show'
      }, {
        id: 'jt1968nk',
        name: 'jt1968nk',
        x: 262.25,
        y: 149.73792993239366,
        width: 47.75402335586875,
        height: 49.63103503380316,
        time: 0.5904106299212598,
        status: 'Show'
      }, {
        id: 'jt196ax3',
        name: 'jt196ax3',
        x: 270.25,
        y: 158.73792993239366,
        width: 47.75402335586875,
        height: 49.63103503380316,
        time: 0.6662596456692913,
        status: 'Show'
      }, {
        id: 'jt196dys',
        name: 'jt196dys',
        x: 268.25,
        y: 164.73792993239366,
        width: 47.75402335586875,
        height: 49.63103503380316,
        time: 0.7368370078740157,
        status: 'Show'
      }, {
        id: 'jt196guu',
        name: 'jt196guu',
        x: 272.25,
        y: 154.73792993239366,
        width: 47.75402335586875,
        height: 49.63103503380316,
        time: 0.801053937007874,
        status: 'Show'
      }, {
        id: 'jt196k7h',
        name: 'jt196k7h',
        x: 273.25,
        y: 157.73792993239366,
        width: 47.75402335586875,
        height: 49.63103503380316,
        time: 0.8626350393700787,
        status: 'Show'
      }],
      childrenNames: [],
      parentName: 'jt1922xu'
    }, {
      id: 'jt1922xu',
      name: 'jt1922xu',
      label: '1',
      color: 'rgba(255,219,0,1)',
      incidents: [{
        id: 'jt1922xu',
        name: 'jt1922xu',
        x: 274.25,
        y: 174,
        width: 80,
        height: 81,
        time: 0,
        status: 'Show'
      }, {
        id: 'jt192wyb',
        name: 'jt192wyb',
        x: 274.25,
        y: 171.73792993239366,
        width: 81.50804671173756,
        height: 83.26207006760634,
        time: 0.0308226495726496,
        status: 'Split'
      }],
      childrenNames: ['jt192wyc', 'jt192wyd'],
      parentName: ''
    }];
    var _url = 'https://cildata.crbs.ucsd.edu/media/videos/50507/50507_web.mp4';
    var _videoWidth = 500;
    var previewNoticeList = ['Cells\' body range.', 'The time that cells <u>split</u>, <u>leave</u>, <u>obscured</u> and <u>Show up</u> (if applicable).'];
    var previewHeader = 'Please scan the video and observe the following to help you complete the task:';
    var emptyCheckSubmissionWarningText = 'Please annotate AND track one unmarked cell to complete this task.';
    var emptyCheckAnnotationItemWarningText = 'Step 2: Please track the cell bound by this box';
    var emptyAnnotationReminderText = 'Step 1: Click the button above to add a new box around a cell';
    _this.fileInput = react__WEBPACK_IMPORTED_MODULE_8___default.a.createRef();
    _this.state = {
      myStream: null,
      result: null,
      interpolationResult: null,
      input: {
        defaultAnnotations: JSON.stringify(_defaultAnnotations),
        url: _url,
        videoWidth: _videoWidth,
        previewHeader: previewHeader,
        previewNoticeList: previewNoticeList,
        emptyCheckSubmissionWarningText: emptyCheckSubmissionWarningText,
        emptyCheckAnnotationItemWarningText: emptyCheckAnnotationItemWarningText,
        emptyAnnotationReminderText: emptyAnnotationReminderText
      },
      params: {
        defaultAnnotations: [],
        url: _url,
        videoWidth: _videoWidth,
        previewHeader: previewHeader,
        previewNoticeList: previewNoticeList,
        emptyCheckSubmissionWarningText: emptyCheckSubmissionWarningText,
        emptyCheckAnnotationItemWarningText: emptyCheckAnnotationItemWarningText,
        emptyAnnotationReminderText: emptyAnnotationReminderText
      }
    }; //end content from react tool
    //close constructor props	

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Demo, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          result = _this$state.result,
          input = _this$state.input,
          params = _this$state.params;
      var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(result));
      return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Container"], {
        fluid: true,
        className: "py-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 525,
          columnNumber: 4
        }
      }, __jsx("a", {
        href: "/login",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 526,
          columnNumber: 5
        }
      }, "Login"), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 526,
          columnNumber: 33
        }
      }), __jsx("h1", {
        className: "display-4  text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 527,
          columnNumber: 5
        }
      }, "CrowdMOT: A Video Annotation Tool"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], {
        className: "my-3 col-xs-12 col-lg-10 offset-lg-1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 528,
          columnNumber: 5
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 529,
          columnNumber: 6
        }
      }, __jsx(_videoInstruction_VideoInstruction__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 530,
          columnNumber: 7
        }
      }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Form"], {
        className: "mb-2 col-xs-12 col-lg-10 offset-lg-1",
        onSubmit: this.handleSubmit,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 533,
          columnNumber: 5
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["FormGroup"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 534,
          columnNumber: 6
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Label"], {
        "for": "URL",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 535,
          columnNumber: 7
        }
      }, __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 535,
          columnNumber: 24
        }
      }, "Enter the video URL:")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Input"], {
        type: "text",
        name: "url",
        placeholder: "http://...",
        value: input.url,
        onChange: this.handleChange,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 536,
          columnNumber: 7
        }
      })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["FormGroup"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 538,
          columnNumber: 6
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Label"], {
        "for": "Annotation Width",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 539,
          columnNumber: 7
        }
      }, "Video Width"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Input"], {
        type: "text",
        name: "videoWidth",
        placeholder: "number",
        value: input.videoWidth,
        onChange: this.handleChange,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 540,
          columnNumber: 7
        }
      })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["FormGroup"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 542,
          columnNumber: 6
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Label"], {
        "for": "exampleFile",
        className: "pr-2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 543,
          columnNumber: 7
        }
      }, "Upload Default Annotations"), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 543,
          columnNumber: 83
        }
      }), __jsx("input", {
        type: "file",
        name: "file",
        id: "exampleFile",
        ref: this.fileInput,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 544,
          columnNumber: 7
        }
      })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], {
        className: "my-3 col-xs-12 col-lg-10 offset-lg-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 546,
          columnNumber: 6
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 547,
          columnNumber: 7
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Button"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 548,
          columnNumber: 8
        }
      }, "Submit")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], {
        className: "py-3",
        style: {
          background: "rgb(246, 246, 246)"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 553,
          columnNumber: 5
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 554,
          columnNumber: 6
        }
      }, __jsx(react_annotation_tool__WEBPACK_IMPORTED_MODULE_9__["VideoTool"], {
        key: "".concat(JSON.stringify(params.url), "\n\t\t\t\t\t\t\t\t ").concat(JSON.stringify(params.defaultAnnotations), "\n\t\t\t\t\t\t\t\t ").concat(JSON.stringify(params.videoWidth), "\n\t\t\t\t\t\t\t\t ").concat(JSON.stringify(params.previewHeader), "\n\t\t\t\t\t\t\t\t ").concat(JSON.stringify(params.previewNoticeList)) //the last three to be replaced by the two below and change defaultAnnotations to annotations
        //  ${JSON.stringify(params.annotationWidth)}
        //  ${JSON.stringify(params.previewNotices)}`
        ,
        onSubmit: this.handleResultSubmit,
        url: params.url //made changes here annotations (on both sides) changed to defaultAnnotation
        ,
        defaultAnnotations: params.defaultAnnotations,
        videoWidth: params.videoWidth,
        previewHeader: params.previewHeader,
        previewNoticeList: params.previewNoticeList,
        hasReview: true,
        isEmptyCheckEnable: true,
        isSplitEnable: true,
        isShowHideEnable: true,
        numAnnotationsToBeAdded: 20,
        emptyCheckSubmissionWarningText: params.emptyCheckSubmissionWarningText,
        emptyCheckAnnotationItemWarningText: params.emptyCheckAnnotationItemWarningText,
        emptyAnnotationReminderText: params.emptyAnnotationReminderText //replace everything after defaultannotations with the what is down below
        // annotationWidth={params.annotationWidth}
        // numberOfParentAnnotationsToBeAdded={100000}
        // previewNotices={params.previewNotices}
        ,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 555,
          columnNumber: 7
        }
      }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], {
        className: "my-3 col-xs-12",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 589,
          columnNumber: 5
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 590,
          columnNumber: 6
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Button"], {
        color: "primary",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 591,
          columnNumber: 7
        }
      }, __jsx(react_csv__WEBPACK_IMPORTED_MODULE_13__["CSVLink"], {
        data: JSON.stringify(result, null, 2),
        style: {
          color: 'white'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 591,
          columnNumber: 31
        }
      }, "Download Raw Data")), console.log(JSON.stringify(result, null, 2))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 594,
          columnNumber: 6
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Button"], {
        color: "primary",
        onClick: this.getInterpolatedData,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 595,
          columnNumber: 7
        }
      }, "Generate Interpolated Data")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 597,
          columnNumber: 6
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Button"], {
        id: "export-interpol",
        color: "primary",
        style: {
          display: 'none',
          color: '#ffffff',
          border: "1px solid"
        },
        onClick: this.createTable,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 598,
          columnNumber: 7
        }
      }, "Download Interpolated Data"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], {
        className: "my-3 col-xs-12",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 606,
          columnNumber: 5
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 607,
          columnNumber: 6
        }
      }, __jsx("table", {
        id: "interpol-table",
        style: {
          display: 'none'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 608,
          columnNumber: 7
        }
      }, __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 609,
          columnNumber: 8
        }
      }, __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 611,
          columnNumber: 9
        }
      }, "Track ID"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 612,
          columnNumber: 9
        }
      }, "x-min"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 613,
          columnNumber: 9
        }
      }, "y-min"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 614,
          columnNumber: 9
        }
      }, "width"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 615,
          columnNumber: 9
        }
      }, "height"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 616,
          columnNumber: 9
        }
      }, "Frame"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 617,
          columnNumber: 9
        }
      }, "Lost"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 618,
          columnNumber: 9
        }
      }, "Occluded"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 619,
          columnNumber: 9
        }
      }, "Generated"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 620,
          columnNumber: 9
        }
      }, "Label"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 621,
          columnNumber: 9
        }
      }, "Parent"))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], {
        className: "my-3 col-xs-12 col-lg-10 offset-lg-1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 628,
          columnNumber: 5
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 629,
          columnNumber: 6
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Card"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 630,
          columnNumber: 7
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["CardBody"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 630,
          columnNumber: 13
        }
      }, __jsx("a", {
        href: dataStr,
        className: "btn btn-secondary btn-lg",
        download: "".concat(params.url, ".json"),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 630,
          columnNumber: 23
        }
      }, " Download the Annotations")))), "  "));
    }
  }]);

  return Demo;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Demo);

/***/ })

})
//# sourceMappingURL=1.272b227d23098155a75c.hot-update.js.map