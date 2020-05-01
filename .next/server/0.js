exports.ids = [0];
exports.modules = {

/***/ "./components/videoAnnotationDemo/VideoAnnotationDemo.js":
/*!***************************************************************!*\
  !*** ./components/videoAnnotationDemo/VideoAnnotationDemo.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_annotation_tool__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-annotation-tool */ "react-annotation-tool");
/* harmony import */ var react_annotation_tool__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_annotation_tool__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _videoInstruction_VideoInstruction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../videoInstruction/VideoInstruction */ "./components/videoInstruction/VideoInstruction.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_csv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-csv */ "react-csv");
/* harmony import */ var react_csv__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_csv__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Applications/CrowdMOT/crowdmot-nextjs/components/videoAnnotationDemo/VideoAnnotationDemo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







 // import { array } from 'prop-types';
// import ReactHTMLTableToExcel from 'react-html-table-to-excel';
// import { MdBubbleChart } from 'react-icons/md';

class Demo extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props); //const fs = require('fs');
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

    _defineProperty(this, "handleResultSubmit", result => {
      this.setState({
        result: result
      });
      console.log(JSON.stringify(this.state.result));
    });

    _defineProperty(this, "handleChange", event => {
      const target = event.target;
      const name = target.name;
      const value = target.type === "checkbox" ? target.checked : target.value;
      this.setState(preState => {
        const {
          input
        } = preState;
        return {
          input: _objectSpread({}, input, {
            [name]: value
          })
        };
      });
    });

    _defineProperty(this, "handleSubmit", async event => {
      event.preventDefault();
      let result = {};

      if (this.fileInput.current.files[0]) {
        const readFilePromise = new Promise((resolve, reject) => {
          const fileReader = new FileReader();

          fileReader.onload = event => {
            if (!this.isJsonString(event.target.result)) reject('Wrong json format');
            let result = JSON.parse(event.target.result);
            resolve(result);
          };

          fileReader.onerror = event => {
            reject(event);
          };

          fileReader.readAsText(this.fileInput.current.files[0]);
        });
        result = await readFilePromise;
      }

      let {
        url = '',
        videoWidth = 0,
        defaultAnnotations = []
      } = result;
      this.setState(preState => {
        const {
          input
        } = preState;

        if (result.annotations.length === 0) {
          defaultAnnotations = this.isJsonString(input.defaultAnnotations) ? JSON.parse(input.defaultAnnotations) : "[]";
        } else {
          defaultAnnotations = result.annotations;
        }

        return {
          params: {
            defaultAnnotations,
            url: url || input.url,
            videoWidth: videoWidth !== 0 ? videoWidth : parseInt(input.videoWidth, 10)
          }
        };
      });
      console.log(this.state.result);
    });

    _defineProperty(this, "isJsonString", str => {
      try {
        JSON.parse(str);
      } catch (e) {
        return false;
      }

      return true;
    });

    _defineProperty(this, "getInterpolatedData", event => {
      event.preventDefault();
      console.log("Interpolation fucntion" + JSON.stringify(this.state.result)); //const duration = JSON.parse(JSON.stringify(this.state.result.duration))

      const duration = 5.04;
      console.log("I am here");
      console.log(duration);
      const timerate = duration * 60; //collect frame/second for the video

      const timeNow = new Date().getTime().toString(36);
      let interpolatedResult = JSON.parse(JSON.stringify(this.state.result));
      let temp = interpolatedResult;
      console.log(JSON.stringify(temp));

      for (let annotation = 0; annotation < temp.annotations.length; annotation++) {
        for (let incident = 0; incident < temp.annotations[annotation].trajectories.length; incident++) {
          temp.annotations[annotation].trajectories[incident].parentName = temp.annotations[annotation].parentName;
        }
      }

      for (let annotation = 0; annotation < temp.annotations.length; annotation++) {
        for (let incident = 0; incident < temp.annotations[annotation].trajectories.length; incident++) {
          temp.annotations[annotation].trajectories[incident].label = temp.annotations[annotation].label;
        }
      }

      for (let i = 0; i < interpolatedResult.annotations.length; i++) {
        let annotIncidentLength = interpolatedResult.annotations[i].trajectories.length;

        if (annotIncidentLength === 1) {
          console.log("This is not possible :P");
        } else if (annotIncidentLength > 1) {
          for (let j = 0; j < annotIncidentLength; j++) {
            if (j != annotIncidentLength - 1 && (interpolatedResult.annotations[i].trajectories[j + 1].status == "Show" || interpolatedResult.annotations[i].trajectories[j + 1].status == "" || interpolatedResult.annotations[i].trajectories[j + 1].status == "Split")) {
              const source = interpolatedResult.annotations[i].trajectories[j];
              const target = interpolatedResult.annotations[i].trajectories[j + 1];
              const tdiff = target.time * timerate - source.time * timerate;
              const xSlope = (target.x - source.x) / tdiff;
              const ySlope = (target.y - source.y) / tdiff;
              const wSlope = (target.width - source.width) / tdiff;
              const hSlope = (target.height - source.height) / tdiff;
              const sFrame = Math.round(source.time * timerate);
              const tFrame = Math.round(target.time * timerate);

              for (let k = sFrame + 1; k <= tFrame; k++) {
                let off = k - Math.round(source.time * timerate);
                let interpolX = (source.x + xSlope * off).toFixed(2);
                let interpolY = (source.y + ySlope * off).toFixed(2);
                let interpolW = (source.width + wSlope * off).toFixed(2);
                let interpolH = (source.height + hSlope * off).toFixed(2);
                temp.annotations[i].trajectories.splice(j + 1, 0, {
                  id: `${timeNow}`,
                  name: `${timeNow}`,
                  x: interpolX,
                  y: interpolY,
                  height: interpolH,
                  width: interpolW,
                  time: k,
                  status,
                  parentName: interpolatedResult.annotations[i].parentName,
                  label: interpolatedResult.annotations[i].label
                });
              }
            } //close if 


            if (j == annotIncidentLength - 1 && (interpolatedResult.annotations[i].trajectories[j].status == "Show" || interpolatedResult.annotations[i].trajectories[j].status == "" || interpolatedResult.annotations[i].trajectories[j + 1].status == "Split")) {
              const source = interpolatedResult.annotations[i].trajectories[j];
              const target = interpolatedResult.annotations[i].trajectories[j];
              const tdiff = duration * timerate - source.time * timerate;
              const xSlope = (target.x - source.x) / tdiff;
              const ySlope = (target.y - source.y) / tdiff;
              const wSlope = (target.width - source.width) / tdiff;
              const hSlope = (target.height - source.height) / tdiff;
              const sFrame = Math.round(source.time * timerate);
              const tFrame = Math.round(target.time * timerate);

              for (let k = sFrame + 1; k <= tFrame; k++) {
                let off = k - Math.round(source.time * timerate);
                let interpolX = source.x + xSlope * off;
                let interpolY = source.y + ySlope * off;
                let interpolW = source.width + wSlope * off;
                let interpolH = source.height + hSlope * off;
                temp.annotations[i].trajectories.splice(j + 1, 0, {
                  id: `${timeNow}`,
                  name: `${timeNow}`,
                  x: interpolX,
                  y: interpolY,
                  height: interpolH,
                  width: interpolW,
                  time: k,
                  status,
                  parentName: temp.annotations[i].parentName,
                  label: interpolatedResult.annotations[i].label
                });
              }
            } //close second if

          } //close for loop for j

        } //close else-if annotlength>1

      } //close for loop for i
      //sort the temp object based on time/frame value


      let interpol_data_arr = [],
          sno = 1;
      console.log("Temp array: " + JSON.stringify(temp));

      for (let x = 0; x < temp.annotations.length; x++) {
        for (let y = 0; y < temp.annotations[x].trajectories.length; y++) {
          if (!(temp.annotations[x].trajectories[y].time > 0 && temp.annotations[x].trajectories[y].time < 1)) interpol_data_arr.push(temp.annotations[x].trajectories[y]);
        }
      }

      for (let p = 0; p < interpol_data_arr.length; p++) {
        for (let q = 0, stop = interpol_data_arr.length - p - 1; q < stop; q++) {
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


      for (let id = 0; id < interpol_data_arr.length; id++) {
        interpol_data_arr[id].serial = interpol_data_arr[id].label; //sno++
      }

      for (let pa = 0; pa < interpol_data_arr.length; pa++) {
        for (let qa = 0, stopa = interpol_data_arr.length - pa - 1; qa < stopa; qa++) {
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


      this.setState({
        interpolationResult: interpol_data_arr
      });
      document.getElementById("export-interpol").style.display = "block";
    });

    _defineProperty(this, "createTable", e => {
      let temp = JSON.parse(JSON.stringify(this.state.interpolationResult));
      console.log("Table temp= \n" + JSON.stringify(this.state.interpolationResult));
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

      this.downloadInterpolTable();
    });

    _defineProperty(this, "export_table_to_csv", (html, filename) => {
      var csv = [];
      var rows = document.querySelectorAll("table tr");

      for (var i = 0; i < rows.length; i++) {
        var row = [],
            cols = rows[i].querySelectorAll("td, th");

        for (var j = 0; j < cols.length; j++) row.push(cols[j].innerText);

        csv.push(row.join(","));
      } // Download CSV


      this.download_csv(csv.join("\n"), filename);
    });

    _defineProperty(this, "download_csv", (csv, filename) => {
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

    _defineProperty(this, "downloadInterpolTable", () => {
      var html = document.querySelector("table").outerHTML;
      this.export_table_to_csv(html, "table.csv");
    });

    this.state = {
      myStream: null,
      result: null,
      interpolationResult: null,
      input: {
        defaultAnnotations: JSON.stringify(_defaultAnnotations),
        url: _url,
        videoWidth: _videoWidth,
        previewHeader,
        previewNoticeList,
        emptyCheckSubmissionWarningText,
        emptyCheckAnnotationItemWarningText,
        emptyAnnotationReminderText
      },
      params: {
        defaultAnnotations: [],
        url: _url,
        videoWidth: _videoWidth,
        previewHeader,
        previewNoticeList,
        emptyCheckSubmissionWarningText,
        emptyCheckAnnotationItemWarningText,
        emptyAnnotationReminderText
      }
    }; //start content from react tool

    const _temp = {};
    const _defaultAnnotations = [{
      id: 'jt192wyd',
      name: 'jt192wyd',
      label: '1-2',
      color: 'rgba(255,0,0,1)',
      trajectories: [{
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
      trajectories: [{
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
      trajectories: [{
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
    const _url = 'https://cildata.crbs.ucsd.edu/media/videos/50507/50507_web.mp4';
    const _videoWidth = 500;
    const previewNoticeList = ['Cells\' body range.', 'The time that cells <u>split</u>, <u>leave</u>, <u>obscured</u> and <u>Show up</u> (if applicable).'];
    const previewHeader = 'Please scan the video and observe the following to help you complete the task:';
    const emptyCheckSubmissionWarningText = 'Please annotate AND track one unmarked cell to complete this task.';
    const emptyCheckAnnotationItemWarningText = 'Step 2: Please track the cell bound by this box';
    const emptyAnnotationReminderText = 'Step 1: Click the button above to add a new box around a cell';
    this.fileInput = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    this.state = {
      myStream: null,
      result: null,
      interpolationResult: null,
      input: {
        defaultAnnotations: JSON.stringify(_defaultAnnotations),
        url: _url,
        videoWidth: _videoWidth,
        previewHeader,
        previewNoticeList,
        emptyCheckSubmissionWarningText,
        emptyCheckAnnotationItemWarningText,
        emptyAnnotationReminderText
      },
      params: {
        defaultAnnotations: [],
        url: _url,
        videoWidth: _videoWidth,
        previewHeader,
        previewNoticeList,
        emptyCheckSubmissionWarningText,
        emptyCheckAnnotationItemWarningText,
        emptyAnnotationReminderText
      }
    }; //end content from react tool
    //close constructor props	
  }

  render() {
    const {
      result,
      input,
      params
    } = this.state;
    let dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(result));
    return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
      fluid: true,
      className: "py-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 528,
        columnNumber: 4
      }
    }, __jsx("a", {
      href: "/login",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 529,
        columnNumber: 5
      }
    }, "Login"), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 529,
        columnNumber: 33
      }
    }), __jsx("h1", {
      className: "display-4  text-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 530,
        columnNumber: 5
      }
    }, "CrowdMOT: A Video Annotation Tool"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      className: "my-3 col-xs-12 col-lg-10 offset-lg-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 531,
        columnNumber: 5
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 532,
        columnNumber: 6
      }
    }, __jsx(_videoInstruction_VideoInstruction__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 533,
        columnNumber: 7
      }
    }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Form"], {
      className: "mb-2 col-xs-12 col-lg-10 offset-lg-1",
      onSubmit: this.handleSubmit,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 536,
        columnNumber: 5
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 537,
        columnNumber: 6
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Label"], {
      for: "URL",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 538,
        columnNumber: 7
      }
    }, __jsx("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 538,
        columnNumber: 24
      }
    }, "Enter the video URL:")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], {
      type: "text",
      name: "url",
      placeholder: "http://...",
      value: input.url,
      onChange: this.handleChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 539,
        columnNumber: 7
      }
    })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 541,
        columnNumber: 6
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Label"], {
      for: "Annotation Width",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 542,
        columnNumber: 7
      }
    }, "Video Width"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], {
      type: "text",
      name: "videoWidth",
      placeholder: "number",
      value: input.videoWidth,
      onChange: this.handleChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 543,
        columnNumber: 7
      }
    })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 545,
        columnNumber: 6
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Label"], {
      for: "exampleFile",
      className: "pr-2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 546,
        columnNumber: 7
      }
    }, "Upload Default Annotations"), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 546,
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
        lineNumber: 547,
        columnNumber: 7
      }
    })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      className: "my-3 col-xs-12 col-lg-10 offset-lg-6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 549,
        columnNumber: 6
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 550,
        columnNumber: 7
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 551,
        columnNumber: 8
      }
    }, "Submit")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      className: "py-3",
      style: {
        background: "rgb(246, 246, 246)"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 556,
        columnNumber: 5
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 557,
        columnNumber: 6
      }
    }, __jsx(react_annotation_tool__WEBPACK_IMPORTED_MODULE_1__["VideoTool"], {
      key: `${JSON.stringify(params.url)}
								 ${JSON.stringify(params.defaultAnnotations)}
								 ${JSON.stringify(params.videoWidth)}
								 ${JSON.stringify(params.previewHeader)}
								 ${JSON.stringify(params.previewNoticeList)}` //the last three to be replaced by the two below and change defaultAnnotations to annotations
      //  ${JSON.stringify(params.annotationWidth)}
      //  ${JSON.stringify(params.previewNotices)}`
      ,
      onSubmit: this.handleResultSubmit,
      url: params.url //made changes here annotations (on both sides) changed to defaultAnnotation
      ,
      annotations: params.defaultAnnotations,
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
        lineNumber: 558,
        columnNumber: 7
      }
    }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      className: "my-3 col-xs-12",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 592,
        columnNumber: 5
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 593,
        columnNumber: 6
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      color: "primary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 594,
        columnNumber: 7
      }
    }, __jsx(react_csv__WEBPACK_IMPORTED_MODULE_5__["CSVLink"], {
      data: JSON.stringify(result, null, 2),
      style: {
        color: 'white'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 594,
        columnNumber: 31
      }
    }, "Download Raw Data")), console.log(JSON.stringify(result, null, 2))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 597,
        columnNumber: 6
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      color: "primary",
      onClick: this.getInterpolatedData,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 598,
        columnNumber: 7
      }
    }, "Generate Interpolated Data")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 600,
        columnNumber: 6
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      id: "export-interpol",
      color: "primary",
      style: {
        display: 'none',
        color: '#ffffff',
        border: `1px solid`
      },
      onClick: this.createTable,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 601,
        columnNumber: 7
      }
    }, "Download Interpolated Data"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      className: "my-3 col-xs-12",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 609,
        columnNumber: 5
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 610,
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
        lineNumber: 611,
        columnNumber: 7
      }
    }, __jsx("tbody", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 612,
        columnNumber: 8
      }
    }, __jsx("tr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 613,
        columnNumber: 9
      }
    }, __jsx("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 615,
        columnNumber: 10
      }
    }, "Track ID"), __jsx("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 616,
        columnNumber: 10
      }
    }, "x-min"), __jsx("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 617,
        columnNumber: 10
      }
    }, "y-min"), __jsx("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 618,
        columnNumber: 10
      }
    }, "width"), __jsx("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 619,
        columnNumber: 10
      }
    }, "height"), __jsx("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 620,
        columnNumber: 10
      }
    }, "Frame"), __jsx("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 621,
        columnNumber: 10
      }
    }, "Lost"), __jsx("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 622,
        columnNumber: 10
      }
    }, "Occluded"), __jsx("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 623,
        columnNumber: 10
      }
    }, "Generated"), __jsx("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 624,
        columnNumber: 10
      }
    }, "Label"), __jsx("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 625,
        columnNumber: 10
      }
    }, "Parent")))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      className: "my-3 col-xs-12 col-lg-10 offset-lg-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 633,
        columnNumber: 5
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 634,
        columnNumber: 6
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 635,
        columnNumber: 7
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardBody"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 635,
        columnNumber: 13
      }
    }, __jsx("a", {
      href: dataStr,
      className: "btn btn-secondary btn-lg",
      download: `${params.url}.json`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 635,
        columnNumber: 23
      }
    }, " Download the Annotations")))), "  "));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Demo);

/***/ }),

/***/ "./components/videoInstruction/VideoInstruction.js":
/*!*********************************************************!*\
  !*** ./components/videoInstruction/VideoInstruction.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-player */ "react-player");
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_player__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/md */ "react-icons/md");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _videoInstruction_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./videoInstruction.css */ "./components/videoInstruction/videoInstruction.css");
/* harmony import */ var _videoInstruction_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_videoInstruction_css__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Applications/CrowdMOT/crowdmot-nextjs/components/videoInstruction/VideoInstruction.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











class Instructions extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "toggle", () => {
      this.setState({
        collapse: !this.state.collapse
      });
    });

    this.state = {
      collapse: false
    };
  }

  render() {
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 5
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
      isOpen: this.state.collapse,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 11
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 13
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardTitle"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 8
      }
    }, __jsx("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 19
      }
    }, "Motivation")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardText"], {
      className: "mb-5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 8
      }
    }, "The result of this task will empower researchers to track cells in different life cycle phases and contribute towards treating and preventing diseases, leading to new bio-inspired technology, and answering basic science questions about fundamental biological processes."), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardTitle"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 8
      }
    }, __jsx("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 19
      }
    }, "Task")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardText"], {
      className: "mb-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 4
      }
    }, "Your task is to ", __jsx("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 47
      }
    }, " annotate the video by drawing bounding boxes around each biological cell and tracking the cells precisely"), " (as shown in the video). You will adjust the boxes at different intervals of the video, and the tool will automatically fill the gaps in the video. You may, however, have to correct any imperfections in the annotations autocompleted by the tool to ensure that the gaps are correctly annotated.  "), __jsx("div", {
      className: "mb-5 d-flex align-items-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 8
      }
    }, __jsx("figure", {
      className: "figure",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }
    }, __jsx(react_player__WEBPACK_IMPORTED_MODULE_3___default.a, {
      url: "https://youtu.be/dnqS7uOWcOU",
      height: '140',
      width: '100%',
      playing: true,
      loop: true,
      muted: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 10
      }
    }), __jsx("figcaption", {
      className: "figure-caption",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 11
      }
    }, "Before")), __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_4__["MdArrowForward"], {
      style: {
        margin: "0px 10px 30px 10px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }
    }), __jsx("figure", {
      className: "figure",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }
    }, __jsx(react_player__WEBPACK_IMPORTED_MODULE_3___default.a, {
      url: "https://youtu.be/BcXmdQrUeiI",
      height: '140',
      width: '100%',
      playing: true,
      loop: true,
      muted: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 11
      }
    }), __jsx("figcaption", {
      className: "figure-caption",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 11
      }
    }, "After"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardTitle"], {
      className: "mb-4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 4
      }
    }, __jsx("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 32
      }
    }, "Instructions")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardSubtitle"], {
      className: "font-weight-bold",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 4
      }
    }, "Step 1: Before you start "), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardText"], {
      className: "mb-4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 4
      }
    }, "You must ", __jsx("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 40
      }
    }, " begin this task from the start of the video"), " and annotate one cell at a time. You can also adjust the speed of the video by clicking the \"x1\" button located below the cell video. "), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardSubtitle"], {
      className: "font-weight-bold",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 8
      }
    }, "Step 2: ", __jsx("b", {
      className: "text-uppercase text-danger",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 59
      }
    }, " Add "), " a new bounding box "), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardText"], {
      className: "mb-4 d-flex align-items-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 4
      }
    }, "Click the  ", __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      disabled: true,
      style: {
        opacity: 1
      },
      color: "primary",
      className: "d-flex align-items-center instruc-button",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 68
      }
    }, __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_4__["MdAdd"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 175
      }
    }), " Add a New Box"), " button to draw a new bounding box around a cell. Then, drag and resize the box to bound that cell."), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardSubtitle"], {
      className: "font-weight-bold",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 8
      }
    }, "Step 3: Track and bound ", __jsx("b", {
      className: "text-uppercase text-danger",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 75
      }
    }, "ONLY"), " the cell that you chose"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardText"], {
      className: "mb-4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 4
      }
    }, "Press the play button, and when the cell moves, pause the video. Then, drag and resize the box to ensure the cell is bounded ", __jsx("b", {
      className: "text-uppercase text-danger",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 156
      }
    }, "precisely"), ". Continue this process till the ", __jsx("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 244
      }
    }, "end of the video"), ". ", __jsx("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 269
      }
    }, "Note"), ": The tool will automatically fill the annotations in the missing frames between the intervals you annotated. You must replay the video to verify that the automated annotation is accurate -- if not, pause the video and adjust the box to correct the annotation."), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardSubtitle"], {
      className: "font-weight-bold",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 8
      }
    }, " Step 4a: ", __jsx("b", {
      className: "text-uppercase text-danger",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 61
      }
    }, " Split "), " the bounding box (if applicable)"), __jsx("div", {
      className: "d-flex align-items-center",
      style: {
        marginBottom: 5
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 8
      }
    }, "If the cell splits into two cells, use the ", __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      disabled: true,
      style: {
        opacity: 1
      },
      outline: true,
      className: "d-flex align-items-center instruc-button",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 120
      }
    }, __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_4__["MdCallSplit"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 219
      }
    }), " Split"), " button to split the parent bounding box into two children boxes and adjust the new boxes to fit the new cells."), __jsx("div", {
      className: "mb-2 d-flex align-items-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 4
      }
    }, __jsx("figure", {
      className: "figure",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }
    }, __jsx(react_player__WEBPACK_IMPORTED_MODULE_3___default.a, {
      url: "https://youtu.be/HEBr3O9Z47I",
      height: '120',
      width: '100%',
      playing: true,
      loop: true,
      muted: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 11
      }
    }), __jsx("figcaption", {
      className: "figure-caption",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 11
      }
    }, "Before")), __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_4__["MdArrowForward"], {
      style: {
        margin: "0px 10px 30px 10px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }
    }), __jsx("figure", {
      className: "figure",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }
    }, __jsx(react_player__WEBPACK_IMPORTED_MODULE_3___default.a, {
      url: "https://youtu.be/9EDQdesolq0",
      height: '120',
      width: '100%',
      playing: true,
      loop: true,
      muted: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 11
      }
    }), __jsx("figcaption", {
      className: "figure-caption",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 11
      }
    }, "After"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardSubtitle"], {
      className: "font-weight-bold",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 8
      }
    }, "Step 4b: ", __jsx("b", {
      className: "text-uppercase text-danger",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 60
      }
    }, " Hide "), " the bounding box if the cell leaves the video frame or is obscured (if applicable)"), __jsx("div", {
      className: "d-flex align-items-center",
      style: {
        marginBottom: 5
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 8
      }
    }, "If the cell leaves the video frame or is obscured by other objects, use the ", __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      disabled: true,
      style: {
        opacity: 1
      },
      outline: true,
      className: "d-flex align-items-center instruc-button",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 153
      }
    }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_5__["IoMdEyeOff"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 252
      }
    }), " Hide "), " button to hide its box. "), __jsx("div", {
      className: "mb-2 d-flex align-items-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 8
      }
    }, __jsx("figure", {
      className: "figure",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 10
      }
    }, __jsx(react_player__WEBPACK_IMPORTED_MODULE_3___default.a, {
      url: "https://youtu.be/YxilHqkKrfc",
      height: '120',
      width: '100%',
      playing: true,
      loop: true,
      muted: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 12
      }
    }), __jsx("figcaption", {
      className: "figure-caption",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 12
      }
    }, "Before")), __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_4__["MdArrowForward"], {
      style: {
        margin: "0px 10px 30px 10px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 10
      }
    }), __jsx("figure", {
      className: "figure",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 10
      }
    }, __jsx(react_player__WEBPACK_IMPORTED_MODULE_3___default.a, {
      url: "https://youtu.be/0eclcrDoJTw",
      height: '120',
      width: '100%',
      playing: true,
      loop: true,
      muted: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 12
      }
    }), __jsx("figcaption", {
      className: "figure-caption",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 12
      }
    }, "After"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardSubtitle"], {
      className: "font-weight-bold",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 8
      }
    }, "Step 5: Submit the task"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardText"], {
      className: "align-items-center mb-5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 4
      }
    }, "After you have annotated the cell in the entire video, replay the entire video to check your work. If the annotations are not correct, pause the video, and adjust the boxes. Repeat this process until all cells in the video are annotated. Once you ensure that the annotations are correct, click the ", __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      disabled: true,
      style: {
        opacity: 1
      },
      className: "align-items-center instruc-button",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 348
      }
    }, "Submit"), " button to submit the results. Click on the ", __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      disabled: true,
      style: {
        opacity: 1
      },
      className: "align-items-center instruc-button",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 492
      }
    }, " Download the annotations "), " button to save the results. "), "  ", __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardText"], {
      className: "mb-5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 654
      }
    }, " ", __jsx("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 682
      }
    }, "Note"), ": You can delete and redo the annotation or go back and forth in the video as many times as you like to ensure the cell is correctly annotated from the start to the end of the video."), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardTitle"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 4
      }
    }, __jsx("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 15
      }
    }, "Demo of the Tool")), __jsx("div", {
      className: "d-flex align-items-center",
      style: {
        marginBottom: 10
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 4
      }
    }, "Here is a short demo of the task:"), __jsx("div", {
      className: "mb-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 4
      }
    }, __jsx(react_player__WEBPACK_IMPORTED_MODULE_3___default.a, {
      url: "https://youtu.be/Wv-mCWM-KIw",
      height: '400px',
      width: '800px',
      controls: true,
      muted: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 4
      }
    })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardTitle"], {
      className: "pt-10",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 4
      }
    }, __jsx("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 33
      }
    }, "Other Buttons:")), __jsx("dl", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 8
      }
    }, __jsx("dt", {
      className: "col-sm-2 text-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 10
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["ButtonGroup"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 46
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      disabled: true,
      style: {
        opacity: 1
      },
      outline: true,
      className: "d-flex align-items-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 59
      }
    }, __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_4__["MdUndo"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 143
      }
    })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      disabled: true,
      style: {
        opacity: 1
      },
      outline: true,
      className: "d-flex align-items-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 161
      }
    }, __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_4__["MdRedo"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 245
      }
    })))), __jsx("dd", {
      className: "col-sm-10 d-flex align-items-center",
      style: {
        marginBottom: 0
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 10
      }
    }, "can be used to redo and undo the changes."), __jsx("dt", {
      className: "col-sm-2 text-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 9
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      disabled: true,
      style: {
        opacity: 1
      },
      outline: true,
      className: "instruc-delete-button",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 45
      }
    }, __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_4__["MdDelete"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 125
      }
    }))), __jsx("dd", {
      className: "col-sm-10 d-flex align-items-center",
      style: {
        marginBottom: 0
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 4
      }
    }, "can be used to delete a bounding box or a trajectory (tracking annotation)."), __jsx("dt", {
      className: "col-sm-2 text-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 9
      }
    }, "Resizing & Tracking history ", __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaChevronDown"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 73
      }
    })), __jsx("dd", {
      className: "col-sm-10 d-flex align-items-center",
      style: {
        marginBottom: 0
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 10
      }
    }, " can be used to track your annotations."))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      block: true,
      color: "secondary",
      onClick: this.toggle,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 5
      }
    }, this.state.collapse ? "Hide" : "Show", " Instructions"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Instructions);

/***/ }),

/***/ "./components/videoInstruction/videoInstruction.css":
/*!**********************************************************!*\
  !*** ./components/videoInstruction/videoInstruction.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.css":
/*!*******************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ })

};;
//# sourceMappingURL=0.js.map