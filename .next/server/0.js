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
/* harmony import */ var react_csv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-csv */ "react-csv");
/* harmony import */ var react_csv__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_csv__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Applications/CrowdMOT/crowdmot-nextjs/components/videoAnnotationDemo/VideoAnnotationDemo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class Demo extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props); //const fs = require('fs');
    // const annotations = [];//[ { "id": "jt192wyd", "name": "jt192wyd", "label": "1-2", "color": "rgba(255,0,0,1)", "incidents": [ { "id": "jt192wyb", "name": "jt192wyb", "x": 295.00402335586875, "y": 193.3689649661968, "width": 40.75402335586878, "height": 41.63103503380317, "time": 0.0308226495726496, "status": "Show" }, { "id": "jt1930nb", "name": "jt1930nb", "x": 304.00402335586875, "y": 202.3689649661968, "width": 58.75402335586875, "height": 60.63103503380319, "time": 0.03178472222222222, "status": "Show" }, { "id": "jt193fim", "name": "jt193fim", "x": 309.00402335586875, "y": 213.3689649661968, "width": 58.75402335586875, "height": 60.63103503380319, "time": 0.06388611111111112, "status": "Show" }, { "id": "jt193ijo", "name": "jt193ijo", "x": 320.00402335586875, "y": 220.3689649661968, "width": 58.75402335586875, "height": 74.63103503380319, "time": 0.08677242063492063, "status": "Show" }, { "id": "jt19484m", "name": "jt19484m", "x": 320.48992156587633, "y": 218.42537212616642, "width": 60.697616195899116, "height": 78.17334040378043, "time": 0.0966718253968254, "status": "Show" }, { "id": "jt193o4y", "name": "jt193o4y", "x": 321.00402335586875, "y": 216.3689649661968, "width": 62.75402335586875, "height": 71.63103503380319, "time": 0.10714583333333334, "status": "Show" }, { "id": "jt194dom", "name": "jt194dom", "x": 321.00402335586875, "y": 218.8083044640243, "width": 62.75402335586875, "height": 69.1916955359757, "time": 0.1195857142857143, "status": "Show" }, { "id": "jt193taw", "name": "jt193taw", "x": 321.00402335586875, "y": 228.3689649661968, "width": 62.75402335586875, "height": 59.63103503380319, "time": 0.13459007936507936, "status": "Show" }, { "id": "jt193zb4", "name": "jt193zb4", "x": 318.00402335586875, "y": 228.3689649661968, "width": 81.75402335586875, "height": 59.63103503380319, "time": 0.1693952380952381, "status": "Show" }, { "id": "jt195ltz", "name": "jt195ltz", "x": 328.2874098641244, "y": 230.6523514744525, "width": 70.85164231813906, "height": 56.631035033803215, "time": 0.1985523622047244, "status": "Show" }, { "id": "jt194trg", "name": "jt194trg", "x": 322.00402335586875, "y": 232.3689649661968, "width": 76.66967862975952, "height": 59.63103503380319, "time": 0.22047222222222224, "status": "Show" }, { "id": "jt194lgm", "name": "jt194lgm", "x": 318.00402335586875, "y": 228.3689649661968, "width": 75.75402335586875, "height": 59.63103503380319, "time": 0.22967083333333332, "status": "Show" }, { "id": "jt195p7m", "name": "jt195p7m", "x": 318.00402335586875, "y": 228.3689649661968, "width": 68.75402335586875, "height": 58.19684946385905, "time": 0.25359350393700786, "status": "Show" }, { "id": "jt1951r9", "name": "jt1951r9", "x": 318.00402335586875, "y": 228.3689649661968, "width": 75.75402335586875, "height": 54.63103503380319, "time": 0.31307242063492063, "status": "Show" }, { "id": "jt195v9l", "name": "jt195v9l", "x": 318.00402335586875, "y": 228.3689649661968, "width": 75.75402335586875, "height": 54.63103503380319, "time": 0.34623937007874017, "status": "Hide" } ], "children": [], "parent": "jt1922xu" }, { "id": "jt192wyc", "name": "jt192wyc", "label": "1-1", "color": "rgba(255,0,0,1)", "incidents": [ { "id": "jt192wyb", "name": "jt192wyb", "x": 274.25, "y": 171.73792993239366, "width": 40.75402335586878, "height": 41.63103503380317, "time": 0.0308226495726496, "status": "Show" }, { "id": "jt19349x", "name": "jt19349x", "x": 271.25, "y": 167.73792993239366, "width": 60.75402335586875, "height": 58.63103503380316, "time": 0.03178472222222222, "status": "Show" }, { "id": "jt193ekd", "name": "jt193ekd", "x": 274.25, "y": 160.73792993239366, "width": 60.75402335586875, "height": 58.63103503380316, "time": 0.06388611111111112, "status": "Show" }, { "id": "jt193hp1", "name": "jt193hp1", "x": 280.25, "y": 160.73792993239366, "width": 60.75402335586875, "height": 58.63103503380316, "time": 0.08677242063492063, "status": "Show" }, { "id": "jt194cbv", "name": "jt194cbv", "x": 280.1326975821677, "y": 158.62062751456136, "width": 60.75402335586875, "height": 58.63103503380316, "time": 0.1195857142857143, "status": "Show" }, { "id": "jt193umg", "name": "jt193umg", "x": 274.25, "y": 154.73792993239366, "width": 60.75402335586875, "height": 58.63103503380316, "time": 0.13459007936507936, "status": "Show" }, { "id": "jt193y7q", "name": "jt193y7q", "x": 268.25, "y": 155.73792993239366, "width": 60.75402335586875, "height": 58.63103503380316, "time": 0.1693952380952381, "status": "Show" }, { "id": "jt194hxg", "name": "jt194hxg", "x": 260.25, "y": 157.73792993239366, "width": 60.75402335586875, "height": 58.63103503380316, "time": 0.20233392857142857, "status": "Show" }, { "id": "jt194mj1", "name": "jt194mj1", "x": 253.25, "y": 156.73792993239366, "width": 60.75402335586875, "height": 58.63103503380316, "time": 0.22967083333333332, "status": "Show" }, { "id": "jt195qgw", "name": "jt195qgw", "x": 246.25, "y": 156.73792993239366, "width": 63.66047805713703, "height": 58.63103503380316, "time": 0.25359350393700786, "status": "Show" }, { "id": "jt194xqh", "name": "jt194xqh", "x": 253.25, "y": 156.73792993239366, "width": 52.75402335586875, "height": 58.63103503380316, "time": 0.27642281746031744, "status": "Show" }, { "id": "jt1955u1", "name": "jt1955u1", "x": 265.25, "y": 159.73792993239366, "width": 40.75402335586875, "height": 49.63103503380316, "time": 0.3564833333333333, "status": "Show" }, { "id": "jt195b3i", "name": "jt195b3i", "x": 265.25, "y": 141.73792993239366, "width": 40.75402335586875, "height": 49.63103503380316, "time": 0.45984980158730154, "status": "Show" }, { "id": "jt1961v6", "name": "jt1961v6", "x": 269.25, "y": 144.73792993239366, "width": 40.75402335586875, "height": 49.63103503380316, "time": 0.47851751968503936, "status": "Show" }, { "id": "jt1965az", "name": "jt1965az", "x": 262.25, "y": 144.73792993239366, "width": 47.75402335586875, "height": 49.63103503380316, "time": 0.5342496062992126, "status": "Show" }, { "id": "jt1968nk", "name": "jt1968nk", "x": 262.25, "y": 149.73792993239366, "width": 47.75402335586875, "height": 49.63103503380316, "time": 0.5904106299212598, "status": "Show" }, { "id": "jt196ax3", "name": "jt196ax3", "x": 270.25, "y": 158.73792993239366, "width": 47.75402335586875, "height": 49.63103503380316, "time": 0.6662596456692913, "status": "Show" }, { "id": "jt196dys", "name": "jt196dys", "x": 268.25, "y": 164.73792993239366, "width": 47.75402335586875, "height": 49.63103503380316, "time": 0.7368370078740157, "status": "Show" }, { "id": "jt196guu", "name": "jt196guu", "x": 272.25, "y": 154.73792993239366, "width": 47.75402335586875, "height": 49.63103503380316, "time": 0.801053937007874, "status": "Show" }, { "id": "jt196k7h", "name": "jt196k7h", "x": 273.25, "y": 157.73792993239366, "width": 47.75402335586875, "height": 49.63103503380316, "time": 0.8626350393700787, "status": "Show" } ], "children": [], "parent": "jt1922xu" }, { "id": "jt1922xu", "name": "jt1922xu", "label": "1", "color": "rgba(255,219,0,1)", "incidents": [ { "id": "jt1922xu", "name": "jt1922xu", "x": 274.25, "y": 174, "width": 80, "height": 81, "time": 0, "status": "Show" }, { "id": "jt192wyb", "name": "jt192wyb", "x": 274.25, "y": 171.73792993239366, "width": 81.50804671173756, "height": 83.26207006760634, "time": 0.0308226495726496, "status": "Split" } ], "children": [ "jt192wyc", "jt192wyd" ], "parent": "" } ];
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
          input: _objectSpread(_objectSpread({}, input), {}, {
            [name]: value
          })
        };
      });
      console.log("Video url can be found below:");
      console.log(JSON.stringify(this.state));
    });

    _defineProperty(this, "handleErrorSubmit", event => {
      event.preventDefault();
      this.setState(preState => {
        const {
          input
        } = preState;
        const annotations = this.isJsonString(input.defaultAnnotations) ? input.defaultAnnotations : "[]";
        return {
          params: {
            defaultAnnotations: JSON.parse(annotations),
            url: input.url,
            annotationWidth: parseInt(input.annotationWidth, 10)
          }
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
          defaultAnnotations = JSON.parse(JSON.stringify(result.annotations));
        }

        return {
          params: {
            defaultAnnotations,
            url: input.url,
            videoWidth: videoWidth !== 0 ? videoWidth : parseInt(input.videoWidth, 10)
          }
        };
      }); // console.log(JSON.stringify(this.state))
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
      console.log("Look here");
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
        for (let incident = 0; incident < temp.annotations[annotation].incidents.length; incident++) {
          temp.annotations[annotation].incidents[incident].parentName = temp.annotations[annotation].parentName;
        }
      }

      for (let annotation = 0; annotation < temp.annotations.length; annotation++) {
        for (let incident = 0; incident < temp.annotations[annotation].incidents.length; incident++) {
          temp.annotations[annotation].incidents[incident].label = temp.annotations[annotation].label;
        }
      }

      for (let i = 0; i < interpolatedResult.annotations.length; i++) {
        let annotIncidentLength = interpolatedResult.annotations[i].incidents.length;

        if (annotIncidentLength === 1) {
          console.log("This is not possible :P");
        } else if (annotIncidentLength > 1) {
          for (let j = 0; j < annotIncidentLength; j++) {
            if (j != annotIncidentLength - 1 && (interpolatedResult.annotations[i].incidents[j + 1].status == "Show" || interpolatedResult.annotations[i].incidents[j + 1].status == "" || interpolatedResult.annotations[i].incidents[j + 1].status == "Split")) {
              const source = interpolatedResult.annotations[i].incidents[j];
              const target = interpolatedResult.annotations[i].incidents[j + 1];
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
                temp.annotations[i].incidents.splice(j + 1, 0, {
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


            if (j == annotIncidentLength - 1 && (interpolatedResult.annotations[i].incidents[j].status == "Show" || interpolatedResult.annotations[i].incidents[j].status == "" || interpolatedResult.annotations[i].incidents[j + 1].status == "Split")) {
              const source = interpolatedResult.annotations[i].incidents[j];
              const target = interpolatedResult.annotations[i].incidents[j];
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
                temp.annotations[i].incidents.splice(j + 1, 0, {
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
        for (let y = 0; y < temp.annotations[x].incidents.length; y++) {
          if (!(temp.annotations[x].incidents[y].time > 0 && temp.annotations[x].incidents[y].time < 1)) interpol_data_arr.push(temp.annotations[x].incidents[y]);
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
        url,
        videoWidth: _videoWidth,
        previewHeader,
        previewNoticeList,
        emptyCheckSubmissionWarningText,
        emptyCheckAnnotationItemWarningText,
        emptyAnnotationReminderText
      },
      params: {
        defaultAnnotations: [],
        url,
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
    const url = 'https://cildata.crbs.ucsd.edu/media/videos/50507/50507_web.mp4';
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
        url,
        videoWidth: _videoWidth,
        previewHeader,
        previewNoticeList,
        emptyCheckSubmissionWarningText,
        emptyCheckAnnotationItemWarningText,
        emptyAnnotationReminderText
      },
      params: {
        defaultAnnotations: [],
        url,
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
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
      fluid: true,
      className: "py-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 534,
        columnNumber: 4
      }
    }, __jsx("h1", {
      className: "display-4  text-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 536,
        columnNumber: 5
      }
    }, "CrowdMOT: A Video Annotation Tool"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      className: "my-3 col-xs-12 col-lg-10 offset-lg-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 537,
        columnNumber: 5
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 538,
        columnNumber: 6
      }
    }, __jsx(_videoInstruction_VideoInstruction__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 539,
        columnNumber: 7
      }
    }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Form"], {
      className: "mb-2 col-xs-12 col-lg-10 offset-lg-1",
      onSubmit: this.handleSubmit,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 542,
        columnNumber: 5
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 543,
        columnNumber: 6
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Label"], {
      for: "URL",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 544,
        columnNumber: 7
      }
    }, __jsx("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 544,
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
        lineNumber: 545,
        columnNumber: 7
      }
    })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 547,
        columnNumber: 6
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Label"], {
      for: "Annotation Width",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 548,
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
        lineNumber: 549,
        columnNumber: 7
      }
    })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 551,
        columnNumber: 6
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Label"], {
      for: "exampleFile",
      className: "pr-2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 552,
        columnNumber: 7
      }
    }, "Upload Default Annotations"), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 552,
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
        lineNumber: 553,
        columnNumber: 7
      }
    })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      className: "my-3 col-xs-12 col-lg-10 offset-lg-6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 555,
        columnNumber: 6
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 556,
        columnNumber: 7
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 557,
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
        lineNumber: 562,
        columnNumber: 5
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 564,
        columnNumber: 6
      }
    }, __jsx(react_annotation_tool__WEBPACK_IMPORTED_MODULE_1__["TwoDimensionalVideo"], {
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
        lineNumber: 565,
        columnNumber: 7
      }
    })), console.log("Passed annotations: " + JSON.stringify(params.defaultAnnotations))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      className: "my-3 col-xs-12",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 600,
        columnNumber: 5
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 601,
        columnNumber: 6
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      color: "primary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 602,
        columnNumber: 7
      }
    }, __jsx(react_csv__WEBPACK_IMPORTED_MODULE_4__["CSVLink"], {
      data: JSON.stringify(result, null, 2),
      style: {
        color: 'white'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 602,
        columnNumber: 31
      }
    }, "Download Raw Data")), console.log(JSON.stringify(result, null, 2))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 605,
        columnNumber: 6
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      color: "primary",
      onClick: this.getInterpolatedData,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 606,
        columnNumber: 7
      }
    }, "Generate Interpolated Data")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 608,
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
        lineNumber: 609,
        columnNumber: 7
      }
    }, "Download Interpolated Data"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      className: "my-3 col-xs-12",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 617,
        columnNumber: 5
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 618,
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
        lineNumber: 619,
        columnNumber: 7
      }
    }, __jsx("tbody", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 620,
        columnNumber: 8
      }
    }, __jsx("tr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 621,
        columnNumber: 9
      }
    }, __jsx("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 623,
        columnNumber: 10
      }
    }, "Track ID"), __jsx("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 624,
        columnNumber: 10
      }
    }, "x-min"), __jsx("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 625,
        columnNumber: 10
      }
    }, "y-min"), __jsx("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 626,
        columnNumber: 10
      }
    }, "width"), __jsx("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 627,
        columnNumber: 10
      }
    }, "height"), __jsx("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 628,
        columnNumber: 10
      }
    }, "Frame"), __jsx("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 629,
        columnNumber: 10
      }
    }, "Lost"), __jsx("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 630,
        columnNumber: 10
      }
    }, "Occluded"), __jsx("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 631,
        columnNumber: 10
      }
    }, "Generated"), __jsx("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 632,
        columnNumber: 10
      }
    }, "Label"), __jsx("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 633,
        columnNumber: 10
      }
    }, "Parent")))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      className: "my-3 col-xs-12 col-lg-10 offset-lg-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 641,
        columnNumber: 5
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 642,
        columnNumber: 6
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 643,
        columnNumber: 7
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardBody"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 643,
        columnNumber: 13
      }
    }, __jsx("a", {
      href: dataStr,
      className: "btn btn-secondary btn-lg",
      download: `${params.url}.json`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 643,
        columnNumber: 23
      }
    }, " Download the Annotations")))), "  ")));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3ZpZGVvQW5ub3RhdGlvbkRlbW8vVmlkZW9Bbm5vdGF0aW9uRGVtby5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3ZpZGVvSW5zdHJ1Y3Rpb24vVmlkZW9JbnN0cnVjdGlvbi5qcyJdLCJuYW1lcyI6WyJEZW1vIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInJlc3VsdCIsInNldFN0YXRlIiwiZXZlbnQiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJ0eXBlIiwiY2hlY2tlZCIsInByZVN0YXRlIiwiaW5wdXQiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsInN0YXRlIiwicHJldmVudERlZmF1bHQiLCJhbm5vdGF0aW9ucyIsImlzSnNvblN0cmluZyIsImRlZmF1bHRBbm5vdGF0aW9ucyIsInBhcmFtcyIsInBhcnNlIiwidXJsIiwiYW5ub3RhdGlvbldpZHRoIiwicGFyc2VJbnQiLCJmaWxlSW5wdXQiLCJjdXJyZW50IiwiZmlsZXMiLCJyZWFkRmlsZVByb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImZpbGVSZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwib25lcnJvciIsInJlYWRBc1RleHQiLCJ2aWRlb1dpZHRoIiwibGVuZ3RoIiwic3RyIiwiZSIsImR1cmF0aW9uIiwidGltZXJhdGUiLCJ0aW1lTm93IiwiRGF0ZSIsImdldFRpbWUiLCJ0b1N0cmluZyIsImludGVycG9sYXRlZFJlc3VsdCIsInRlbXAiLCJhbm5vdGF0aW9uIiwiaW5jaWRlbnQiLCJpbmNpZGVudHMiLCJwYXJlbnROYW1lIiwibGFiZWwiLCJpIiwiYW5ub3RJbmNpZGVudExlbmd0aCIsImoiLCJzdGF0dXMiLCJzb3VyY2UiLCJ0ZGlmZiIsInRpbWUiLCJ4U2xvcGUiLCJ4IiwieVNsb3BlIiwieSIsIndTbG9wZSIsIndpZHRoIiwiaFNsb3BlIiwiaGVpZ2h0Iiwic0ZyYW1lIiwiTWF0aCIsInJvdW5kIiwidEZyYW1lIiwiayIsIm9mZiIsImludGVycG9sWCIsInRvRml4ZWQiLCJpbnRlcnBvbFkiLCJpbnRlcnBvbFciLCJpbnRlcnBvbEgiLCJzcGxpY2UiLCJpZCIsImludGVycG9sX2RhdGFfYXJyIiwic25vIiwicHVzaCIsInAiLCJxIiwic3RvcCIsInN3YXAiLCJzZXJpYWwiLCJwYSIsInFhIiwic3RvcGEiLCJzd2FwYSIsImludGVycG9sYXRpb25SZXN1bHQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJkaXNwbGF5IiwidGFibGUiLCJyb3ciLCJjcmVhdGVFbGVtZW50IiwiY2VsbF9zbm8iLCJpbm5lckhUTUwiLCJhcHBlbmRDaGlsZCIsImNlbGxfeF9taW4iLCJjZWxsX3lfbWluIiwiY2VsbF93aWR0aCIsImNlbGxfaGVpZ2h0IiwiY2VsbF9mcmFtZSIsImNlbGxfbG9zdCIsImNlbGxfb2NjbHVkZWQiLCJjZWxsX2dlbmVyYXRlZCIsImNlbGxfbGFiZWwiLCJjZWxsX3BhcmVudCIsImRvd25sb2FkSW50ZXJwb2xUYWJsZSIsImh0bWwiLCJmaWxlbmFtZSIsImNzdiIsInJvd3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY29scyIsImlubmVyVGV4dCIsImpvaW4iLCJkb3dubG9hZF9jc3YiLCJjc3ZGaWxlIiwiZG93bmxvYWRMaW5rIiwiQmxvYiIsImRvd25sb2FkIiwiaHJlZiIsIndpbmRvdyIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImJvZHkiLCJjbGljayIsInF1ZXJ5U2VsZWN0b3IiLCJvdXRlckhUTUwiLCJleHBvcnRfdGFibGVfdG9fY3N2IiwibXlTdHJlYW0iLCJwcmV2aWV3SGVhZGVyIiwicHJldmlld05vdGljZUxpc3QiLCJlbXB0eUNoZWNrU3VibWlzc2lvbldhcm5pbmdUZXh0IiwiZW1wdHlDaGVja0Fubm90YXRpb25JdGVtV2FybmluZ1RleHQiLCJlbXB0eUFubm90YXRpb25SZW1pbmRlclRleHQiLCJjb2xvciIsImNoaWxkcmVuTmFtZXMiLCJSZWFjdCIsImNyZWF0ZVJlZiIsInJlbmRlciIsImRhdGFTdHIiLCJlbmNvZGVVUklDb21wb25lbnQiLCJoYW5kbGVTdWJtaXQiLCJoYW5kbGVDaGFuZ2UiLCJiYWNrZ3JvdW5kIiwiaGFuZGxlUmVzdWx0U3VibWl0IiwiZ2V0SW50ZXJwb2xhdGVkRGF0YSIsImJvcmRlciIsImNyZWF0ZVRhYmxlIiwiSW5zdHJ1Y3Rpb25zIiwiY29sbGFwc2UiLCJtYXJnaW4iLCJvcGFjaXR5IiwibWFyZ2luQm90dG9tIiwidG9nZ2xlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsSUFBTixTQUFtQkMsK0NBQW5CLENBQTZCO0FBQzVCQyxhQUFXLENBQUNDLEtBQUQsRUFBUTtBQUNsQixVQUFNQSxLQUFOLEVBRGtCLENBRWxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQXBCa0IsZ0RBNExFQyxNQUFNLElBQUk7QUFDOUIsV0FBS0MsUUFBTCxDQUFjO0FBQUVELGNBQU0sRUFBRUE7QUFBVixPQUFkO0FBRUEsS0EvTGtCOztBQUFBLDBDQWlNSkUsS0FBSyxJQUFJO0FBQ3ZCLFlBQU1DLE1BQU0sR0FBR0QsS0FBSyxDQUFDQyxNQUFyQjtBQUNBLFlBQU1DLElBQUksR0FBR0QsTUFBTSxDQUFDQyxJQUFwQjtBQUNBLFlBQU1DLEtBQUssR0FBR0YsTUFBTSxDQUFDRyxJQUFQLEtBQWdCLFVBQWhCLEdBQTZCSCxNQUFNLENBQUNJLE9BQXBDLEdBQThDSixNQUFNLENBQUNFLEtBQW5FO0FBQ0EsV0FBS0osUUFBTCxDQUFlTyxRQUFELElBQWM7QUFDM0IsY0FBTTtBQUFFQztBQUFGLFlBQVlELFFBQWxCO0FBQ0EsZUFBTztBQUNOQyxlQUFLLGtDQUFPQSxLQUFQO0FBQWMsYUFBQ0ws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QUFBQTtBQUFBO0FBQUE7QUFBQSxxRkFKSSxFQUtDO0FBQUksZUFBUyxFQUFDLHFCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUNBQWdFLE1BQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFoRSxDQUxELEVBTUU7QUFBSSxlQUFTLEVBQUMscUNBQWQ7QUFBb0QsV0FBSyxFQUFFO0FBQUNBLG9CQUFZLEVBQUU7QUFBZixPQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlEQU5GLENBckVLLENBREYsQ0FERixDQURKLEVBbUZBLE1BQUMsaURBQUQ7QUFBUSxXQUFLLE1BQWI7QUFBYyxXQUFLLEVBQUMsV0FBcEI7QUFBZ0MsYUFBTyxFQUFFLEtBQUtDLE1BQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBdUQsS0FBS3BKLEtBQUwsQ0FBV2dKLFFBQVgsR0FBcUIsTUFBckIsR0FBNkIsTUFBcEYsa0JBbkZBLENBREY7QUFzRkM7O0FBbEdrQzs7QUFxR3RCRCwyRUFBZixFIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICB7VHdvRGltZW5zaW9uYWxWaWRlb30gIGZyb20gXCJyZWFjdC1hbm5vdGF0aW9uLXRvb2xcIlxuaW1wb3J0IEluc3RydWN0aW9ucyBmcm9tIFwiLi4vdmlkZW9JbnN0cnVjdGlvbi9WaWRlb0luc3RydWN0aW9uXCJcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wsIENhcmQsIENhcmRCb2R5LCBDYXJkVGl0bGUsIENhcmRUZXh0IH0gZnJvbSAncmVhY3RzdHJhcCc7XG5pbXBvcnQgeyBCdXR0b24sIEZvcm0sIEZvcm1Hcm91cCwgTGFiZWwsIElucHV0IH0gZnJvbSAncmVhY3RzdHJhcCc7XG5pbXBvcnQgeyBDU1ZMaW5rLCBDU1ZEb3dubG9hZCB9IGZyb20gXCJyZWFjdC1jc3ZcIjtcblxuY2xhc3MgRGVtbyBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0Ly9jb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJyk7XG5cdFx0Ly8gY29uc3QgYW5ub3RhdGlvbnMgPSBbXTsvL1sgeyBcImlkXCI6IFwianQxOTJ3eWRcIiwgXCJuYW1lXCI6IFwianQxOTJ3eWRcIiwgXCJsYWJlbFwiOiBcIjEtMlwiLCBcImNvbG9yXCI6IFwicmdiYSgyNTUsMCwwLDEpXCIsIFwiaW5jaWRlbnRzXCI6IFsgeyBcImlkXCI6IFwianQxOTJ3eWJcIiwgXCJuYW1lXCI6IFwianQxOTJ3eWJcIiwgXCJ4XCI6IDI5NS4wMDQwMjMzNTU4Njg3NSwgXCJ5XCI6IDE5My4zNjg5NjQ5NjYxOTY4LCBcIndpZHRoXCI6IDQwLjc1NDAyMzM1NTg2ODc4LCBcImhlaWdodFwiOiA0MS42MzEwMzUwMzM4MDMxNywgXCJ0aW1lXCI6IDAuMDMwODIyNjQ5NTcyNjQ5NiwgXCJzdGF0dXNcIjogXCJTaG93XCIgfSwgeyBcImlkXCI6IFwianQxOTMwbmJcIiwgXCJuYW1lXCI6IFwianQxOTMwbmJcIiwgXCJ4XCI6IDMwNC4wMDQwMjMzNTU4Njg3NSwgXCJ5XCI6IDIwMi4zNjg5NjQ5NjYxOTY4LCBcIndpZHRoXCI6IDU4Ljc1NDAyMzM1NTg2ODc1LCBcImhlaWdodFwiOiA2MC42MzEwMzUwMzM4MDMxOSwgXCJ0aW1lXCI6IDAuMDMxNzg0NzIyMjIyMjIyMjIsIFwic3RhdHVzXCI6IFwiU2hvd1wiIH0sIHsgXCJpZFwiOiBcImp0MTkzZmltXCIsIFwibmFtZVwiOiBcImp0MTkzZmltXCIsIFwieFwiOiAzMDkuMDA0MDIzMzU1ODY4NzUsIFwieVwiOiAyMTMuMzY4OTY0OTY2MTk2OCwgXCJ3aWR0aFwiOiA1OC43NTQwMjMzNTU4Njg3NSwgXCJoZWlnaHRcIjogNjAuNjMxMDM1MDMzODAzMTksIFwidGltZVwiOiAwLjA2Mzg4NjExMTExMTExMTEyLCBcInN0YXR1c1wiOiBcIlNob3dcIiB9LCB7IFwiaWRcIjogXCJqdDE5M2lqb1wiLCBcIm5hbWVcIjogXCJqdDE5M2lqb1wiLCBcInhcIjogMzIwLjAwNDAyMzM1NTg2ODc1LCBcInlcIjogMjIwLjM2ODk2NDk2NjE5NjgsIFwid2lkdGhcIjogNTguNzU0MDIzMzU1ODY4NzUsIFwiaGVpZ2h0XCI6IDc0LjYzMTAzNTAzMzgwMzE5LCBcInRpbWVcIjogMC4wODY3NzI0MjA2MzQ5MjA2MywgXCJzdGF0dXNcIjogXCJTaG93XCIgfSwgeyBcImlkXCI6IFwianQxOTQ4NG1cIiwgXCJuYW1lXCI6IFwianQxOTQ4NG1cIiwgXCJ4XCI6IDMyMC40ODk5MjE1NjU4NzYzMywgXCJ5XCI6IDIxOC40MjUzNzIxMjYxNjY0MiwgXCJ3aWR0aFwiOiA2MC42OTc2MTYxOTU4OTkxMTYsIFwiaGVpZ2h0XCI6IDc4LjE3MzM0MDQwMzc4MDQzLCBcInRpbWVcIjogMC4wOTY2NzE4MjUzOTY4MjU0LCBcInN0YXR1c1wiOiBcIlNob3dcIiB9LCB7IFwiaWRcIjogXCJqdDE5M280eVwiLCBcIm5hbWVcIjogXCJqdDE5M280eVwiLCBcInhcIjogMzIxLjAwNDAyMzM1NTg2ODc1LCBcInlcIjogMjE2LjM2ODk2NDk2NjE5NjgsIFwid2lkdGhcIjogNjIuNzU0MDIzMzU1ODY4NzUsIFwiaGVpZ2h0XCI6IDcxLjYzMTAzNTAzMzgwMzE5LCBcInRpbWVcIjogMC4xMDcxNDU4MzMzMzMzMzMzNCwgXCJzdGF0dXNcIjogXCJTaG93XCIgfSwgeyBcImlkXCI6IFwianQxOTRkb21cIiwgXCJuYW1lXCI6IFwianQxOTRkb21cIiwgXCJ4XCI6IDMyMS4wMDQwMjMzNTU4Njg3NSwgXCJ5XCI6IDIxOC44MDgzMDQ0NjQwMjQzLCBcIndpZHRoXCI6IDYyLjc1NDAyMzM1NTg2ODc1LCBcImhlaWdodFwiOiA2OS4xOTE2OTU1MzU5NzU3LCBcInRpbWVcIjogMC4xMTk1ODU3MTQyODU3MTQzLCBcInN0YXR1c1wiOiBcIlNob3dcIiB9LCB7IFwiaWRcIjogXCJqdDE5M3Rhd1wiLCBcIm5hbWVcIjogXCJqdDE5M3Rhd1wiLCBcInhcIjogMzIxLjAwNDAyMzM1NTg2ODc1LCBcInlcIjogMjI4LjM2ODk2NDk2NjE5NjgsIFwid2lkdGhcIjogNjIuNzU0MDIzMzU1ODY4NzUsIFwiaGVpZ2h0XCI6IDU5LjYzMTAzNTAzMzgwMzE5LCBcInRpbWVcIjogMC4xMzQ1OTAwNzkzNjUwNzkzNiwgXCJzdGF0dXNcIjogXCJTaG93XCIgfSwgeyBcImlkXCI6IFwianQxOTN6YjRcIiwgXCJuYW1lXCI6IFwianQxOTN6YjRcIiwgXCJ4XCI6IDMxOC4wMDQwMjMzNTU4Njg3NSwgXCJ5XCI6IDIyOC4zNjg5NjQ5NjYxOTY4LCBcIndpZHRoXCI6IDgxLjc1NDAyMzM1NTg2ODc1LCBcImhlaWdodFwiOiA1OS42MzEwMzUwMzM4MDMxOSwgXCJ0aW1lXCI6IDAuMTY5Mzk1MjM4MDk1MjM4MSwgXCJzdGF0dXNcIjogXCJTaG93XCIgfSwgeyBcImlkXCI6IFwianQxOTVsdHpcIiwgXCJuYW1lXCI6IFwianQxOTVsdHpcIiwgXCJ4XCI6IDMyOC4yODc0MDk4NjQxMjQ0LCBcInlcIjogMjMwLjY1MjM1MTQ3NDQ1MjUsIFwid2lkdGhcIjogNzAuODUxNjQyMzE4MTM5MDYsIFwiaGVpZ2h0XCI6IDU2LjYzMTAzNTAzMzgwMzIxNSwgXCJ0aW1lXCI6IDAuMTk4NTUyMzYyMjA0NzI0NCwgXCJzdGF0dXNcIjogXCJTaG93XCIgfSwgeyBcImlkXCI6IFwianQxOTR0cmdcIiwgXCJuYW1lXCI6IFwianQxOTR0cmdcIiwgXCJ4XCI6IDMyMi4wMDQwMjMzNTU4Njg3NSwgXCJ5XCI6IDIzMi4zNjg5NjQ5NjYxOTY4LCBcIndpZHRoXCI6IDc2LjY2OTY3ODYyOTc1OTUyLCBcImhlaWdodFwiOiA1OS42MzEwMzUwMzM4MDMxOSwgXCJ0aW1lXCI6IDAuMjIwNDcyMjIyMjIyMjIyMjQsIFwic3RhdHVzXCI6IFwiU2hvd1wiIH0sIHsgXCJpZFwiOiBcImp0MTk0bGdtXCIsIFwibmFtZVwiOiBcImp0MTk0bGdtXCIsIFwieFwiOiAzMTguMDA0MDIzMzU1ODY4NzUsIFwieVwiOiAyMjguMzY4OTY0OTY2MTk2OCwgXCJ3aWR0aFwiOiA3NS43NTQwMjMzNTU4Njg3NSwgXCJoZWlnaHRcIjogNTkuNjMxMDM1MDMzODAzMTksIFwidGltZVwiOiAwLjIyOTY3MDgzMzMzMzMzMzMyLCBcInN0YXR1c1wiOiBcIlNob3dcIiB9LCB7IFwiaWRcIjogXCJqdDE5NXA3bVwiLCBcIm5hbWVcIjogXCJqdDE5NXA3bVwiLCBcInhcIjogMzE4LjAwNDAyMzM1NTg2ODc1LCBcInlcIjogMjI4LjM2ODk2NDk2NjE5NjgsIFwid2lkdGhcIjogNjguNzU0MDIzMzU1ODY4NzUsIFwiaGVpZ2h0XCI6IDU4LjE5Njg0OTQ2Mzg1OTA1LCBcInRpbWVcIjogMC4yNTM1OTM1MDM5MzcwMDc4NiwgXCJzdGF0dXNcIjogXCJTaG93XCIgfSwgeyBcImlkXCI6IFwianQxOTUxcjlcIiwgXCJuYW1lXCI6IFwianQxOTUxcjlcIiwgXCJ4XCI6IDMxOC4wMDQwMjMzNTU4Njg3NSwgXCJ5XCI6IDIyOC4zNjg5NjQ5NjYxOTY4LCBcIndpZHRoXCI6IDc1Ljc1NDAyMzM1NTg2ODc1LCBcImhlaWdodFwiOiA1NC42MzEwMzUwMzM4MDMxOSwgXCJ0aW1lXCI6IDAuMzEzMDcyNDIwNjM0OTIwNjMsIFwic3RhdHVzXCI6IFwiU2hvd1wiIH0sIHsgXCJpZFwiOiBcImp0MTk1djlsXCIsIFwibmFtZVwiOiBcImp0MTk1djlsXCIsIFwieFwiOiAzMTguMDA0MDIzMzU1ODY4NzUsIFwieVwiOiAyMjguMzY4OTY0OTY2MTk2OCwgXCJ3aWR0aFwiOiA3NS43NTQwMjMzNTU4Njg3NSwgXCJoZWlnaHRcIjogNTQuNjMxMDM1MDMzODAzMTksIFwidGltZVwiOiAwLjM0NjIzOTM3MDA3ODc0MDE3LCBcInN0YXR1c1wiOiBcIkhpZGVcIiB9IF0sIFwiY2hpbGRyZW5cIjogW10sIFwicGFyZW50XCI6IFwianQxOTIyeHVcIiB9LCB7IFwiaWRcIjogXCJqdDE5Mnd5Y1wiLCBcIm5hbWVcIjogXCJqdDE5Mnd5Y1wiLCBcImxhYmVsXCI6IFwiMS0xXCIsIFwiY29sb3JcIjogXCJyZ2JhKDI1NSwwLDAsMSlcIiwgXCJpbmNpZGVudHNcIjogWyB7IFwiaWRcIjogXCJqdDE5Mnd5YlwiLCBcIm5hbWVcIjogXCJqdDE5Mnd5YlwiLCBcInhcIjogMjc0LjI1LCBcInlcIjogMTcxLjczNzkyOTkzMjM5MzY2LCBcIndpZHRoXCI6IDQwLjc1NDAyMzM1NTg2ODc4LCBcImhlaWdodFwiOiA0MS42MzEwMzUwMzM4MDMxNywgXCJ0aW1lXCI6IDAuMDMwODIyNjQ5NTcyNjQ5NiwgXCJzdGF0dXNcIjogXCJTaG93XCIgfSwgeyBcImlkXCI6IFwianQxOTM0OXhcIiwgXCJuYW1lXCI6IFwianQxOTM0OXhcIiwgXCJ4XCI6IDI3MS4yNSwgXCJ5XCI6IDE2Ny43Mzc5Mjk5MzIzOTM2NiwgXCJ3aWR0aFwiOiA2MC43NTQwMjMzNTU4Njg3NSwgXCJoZWlnaHRcIjogNTguNjMxMDM1MDMzODAzMTYsIFwidGltZVwiOiAwLjAzMTc4NDcyMjIyMjIyMjIyLCBcInN0YXR1c1wiOiBcIlNob3dcIiB9LCB7IFwiaWRcIjogXCJqdDE5M2VrZFwiLCBcIm5hbWVcIjogXCJqdDE5M2VrZFwiLCBcInhcIjogMjc0LjI1LCBcInlcIjogMTYwLjczNzkyOTkzMjM5MzY2LCBcIndpZHRoXCI6IDYwLjc1NDAyMzM1NTg2ODc1LCBcImhlaWdodFwiOiA1OC42MzEwMzUwMzM4MDMxNiwgXCJ0aW1lXCI6IDAuMDYzODg2MTExMTExMTExMTIsIFwic3RhdHVzXCI6IFwiU2hvd1wiIH0sIHsgXCJpZFwiOiBcImp0MTkzaHAxXCIsIFwibmFtZVwiOiBcImp0MTkzaHAxXCIsIFwieFwiOiAyODAuMjUsIFwieVwiOiAxNjAuNzM3OTI5OTMyMzkzNjYsIFwid2lkdGhcIjogNjAuNzU0MDIzMzU1ODY4NzUsIFwiaGVpZ2h0XCI6IDU4LjYzMTAzNTAzMzgwMzE2LCBcInRpbWVcIjogMC4wODY3NzI0MjA2MzQ5MjA2MywgXCJzdGF0dXNcIjogXCJTaG93XCIgfSwgeyBcImlkXCI6IFwianQxOTRjYnZcIiwgXCJuYW1lXCI6IFwianQxOTRjYnZcIiwgXCJ4XCI6IDI4MC4xMzI2OTc1ODIxNjc3LCBcInlcIjogMTU4LjYyMDYyNzUxNDU2MTM2LCBcIndpZHRoXCI6IDYwLjc1NDAyMzM1NTg2ODc1LCBcImhlaWdodFwiOiA1OC42MzEwMzUwMzM4MDMxNiwgXCJ0aW1lXCI6IDAuMTE5NTg1NzE0Mjg1NzE0MywgXCJzdGF0dXNcIjogXCJTaG93XCIgfSwgeyBcImlkXCI6IFwianQxOTN1bWdcIiwgXCJuYW1lXCI6IFwianQxOTN1bWdcIiwgXCJ4XCI6IDI3NC4yNSwgXCJ5XCI6IDE1NC43Mzc5Mjk5MzIzOTM2NiwgXCJ3aWR0aFwiOiA2MC43NTQwMjMzNTU4Njg3NSwgXCJoZWlnaHRcIjogNTguNjMxMDM1MDMzODAzMTYsIFwidGltZVwiOiAwLjEzNDU5MDA3OTM2NTA3OTM2LCBcInN0YXR1c1wiOiBcIlNob3dcIiB9LCB7IFwiaWRcIjogXCJqdDE5M3k3cVwiLCBcIm5hbWVcIjogXCJqdDE5M3k3cVwiLCBcInhcIjogMjY4LjI1LCBcInlcIjogMTU1LjczNzkyOTkzMjM5MzY2LCBcIndpZHRoXCI6IDYwLjc1NDAyMzM1NTg2ODc1LCBcImhlaWdodFwiOiA1OC42MzEwMzUwMzM4MDMxNiwgXCJ0aW1lXCI6IDAuMTY5Mzk1MjM4MDk1MjM4MSwgXCJzdGF0dXNcIjogXCJTaG93XCIgfSwgeyBcImlkXCI6IFwianQxOTRoeGdcIiwgXCJuYW1lXCI6IFwianQxOTRoeGdcIiwgXCJ4XCI6IDI2MC4yNSwgXCJ5XCI6IDE1Ny43Mzc5Mjk5MzIzOTM2NiwgXCJ3aWR0aFwiOiA2MC43NTQwMjMzNTU4Njg3NSwgXCJoZWlnaHRcIjogNTguNjMxMDM1MDMzODAzMTYsIFwidGltZVwiOiAwLjIwMjMzMzkyODU3MTQyODU3LCBcInN0YXR1c1wiOiBcIlNob3dcIiB9LCB7IFwiaWRcIjogXCJqdDE5NG1qMVwiLCBcIm5hbWVcIjogXCJqdDE5NG1qMVwiLCBcInhcIjogMjUzLjI1LCBcInlcIjogMTU2LjczNzkyOTkzMjM5MzY2LCBcIndpZHRoXCI6IDYwLjc1NDAyMzM1NTg2ODc1LCBcImhlaWdodFwiOiA1OC42MzEwMzUwMzM4MDMxNiwgXCJ0aW1lXCI6IDAuMjI5NjcwODMzMzMzMzMzMzIsIFwic3RhdHVzXCI6IFwiU2hvd1wiIH0sIHsgXCJpZFwiOiBcImp0MTk1cWd3XCIsIFwibmFtZVwiOiBcImp0MTk1cWd3XCIsIFwieFwiOiAyNDYuMjUsIFwieVwiOiAxNTYuNzM3OTI5OTMyMzkzNjYsIFwid2lkdGhcIjogNjMuNjYwNDc4MDU3MTM3MDMsIFwiaGVpZ2h0XCI6IDU4LjYzMTAzNTAzMzgwMzE2LCBcInRpbWVcIjogMC4yNTM1OTM1MDM5MzcwMDc4NiwgXCJzdGF0dXNcIjogXCJTaG93XCIgfSwgeyBcImlkXCI6IFwianQxOTR4cWhcIiwgXCJuYW1lXCI6IFwianQxOTR4cWhcIiwgXCJ4XCI6IDI1My4yNSwgXCJ5XCI6IDE1Ni43Mzc5Mjk5MzIzOTM2NiwgXCJ3aWR0aFwiOiA1Mi43NTQwMjMzNTU4Njg3NSwgXCJoZWlnaHRcIjogNTguNjMxMDM1MDMzODAzMTYsIFwidGltZVwiOiAwLjI3NjQyMjgxNzQ2MDMxNzQ0LCBcInN0YXR1c1wiOiBcIlNob3dcIiB9LCB7IFwiaWRcIjogXCJqdDE5NTV1MVwiLCBcIm5hbWVcIjogXCJqdDE5NTV1MVwiLCBcInhcIjogMjY1LjI1LCBcInlcIjogMTU5LjczNzkyOTkzMjM5MzY2LCBcIndpZHRoXCI6IDQwLjc1NDAyMzM1NTg2ODc1LCBcImhlaWdodFwiOiA0OS42MzEwMzUwMzM4MDMxNiwgXCJ0aW1lXCI6IDAuMzU2NDgzMzMzMzMzMzMzMywgXCJzdGF0dXNcIjogXCJTaG93XCIgfSwgeyBcImlkXCI6IFwianQxOTViM2lcIiwgXCJuYW1lXCI6IFwianQxOTViM2lcIiwgXCJ4XCI6IDI2NS4yNSwgXCJ5XCI6IDE0MS43Mzc5Mjk5MzIzOTM2NiwgXCJ3aWR0aFwiOiA0MC43NTQwMjMzNTU4Njg3NSwgXCJoZWlnaHRcIjogNDkuNjMxMDM1MDMzODAzMTYsIFwidGltZVwiOiAwLjQ1OTg0OTgwMTU4NzMwMTU0LCBcInN0YXR1c1wiOiBcIlNob3dcIiB9LCB7IFwiaWRcIjogXCJqdDE5NjF2NlwiLCBcIm5hbWVcIjogXCJqdDE5NjF2NlwiLCBcInhcIjogMjY5LjI1LCBcInlcIjogMTQ0LjczNzkyOTkzMjM5MzY2LCBcIndpZHRoXCI6IDQwLjc1NDAyMzM1NTg2ODc1LCBcImhlaWdodFwiOiA0OS42MzEwMzUwMzM4MDMxNiwgXCJ0aW1lXCI6IDAuNDc4NTE3NTE5Njg1MDM5MzYsIFwic3RhdHVzXCI6IFwiU2hvd1wiIH0sIHsgXCJpZFwiOiBcImp0MTk2NWF6XCIsIFwibmFtZVwiOiBcImp0MTk2NWF6XCIsIFwieFwiOiAyNjIuMjUsIFwieVwiOiAxNDQuNzM3OTI5OTMyMzkzNjYsIFwid2lkdGhcIjogNDcuNzU0MDIzMzU1ODY4NzUsIFwiaGVpZ2h0XCI6IDQ5LjYzMTAzNTAzMzgwMzE2LCBcInRpbWVcIjogMC41MzQyNDk2MDYyOTkyMTI2LCBcInN0YXR1c1wiOiBcIlNob3dcIiB9LCB7IFwiaWRcIjogXCJqdDE5Njhua1wiLCBcIm5hbWVcIjogXCJqdDE5Njhua1wiLCBcInhcIjogMjYyLjI1LCBcInlcIjogMTQ5LjczNzkyOTkzMjM5MzY2LCBcIndpZHRoXCI6IDQ3Ljc1NDAyMzM1NTg2ODc1LCBcImhlaWdodFwiOiA0OS42MzEwMzUwMzM4MDMxNiwgXCJ0aW1lXCI6IDAuNTkwNDEwNjI5OTIxMjU5OCwgXCJzdGF0dXNcIjogXCJTaG93XCIgfSwgeyBcImlkXCI6IFwianQxOTZheDNcIiwgXCJuYW1lXCI6IFwianQxOTZheDNcIiwgXCJ4XCI6IDI3MC4yNSwgXCJ5XCI6IDE1OC43Mzc5Mjk5MzIzOTM2NiwgXCJ3aWR0aFwiOiA0Ny43NTQwMjMzNTU4Njg3NSwgXCJoZWlnaHRcIjogNDkuNjMxMDM1MDMzODAzMTYsIFwidGltZVwiOiAwLjY2NjI1OTY0NTY2OTI5MTMsIFwic3RhdHVzXCI6IFwiU2hvd1wiIH0sIHsgXCJpZFwiOiBcImp0MTk2ZHlzXCIsIFwibmFtZVwiOiBcImp0MTk2ZHlzXCIsIFwieFwiOiAyNjguMjUsIFwieVwiOiAxNjQuNzM3OTI5OTMyMzkzNjYsIFwid2lkdGhcIjogNDcuNzU0MDIzMzU1ODY4NzUsIFwiaGVpZ2h0XCI6IDQ5LjYzMTAzNTAzMzgwMzE2LCBcInRpbWVcIjogMC43MzY4MzcwMDc4NzQwMTU3LCBcInN0YXR1c1wiOiBcIlNob3dcIiB9LCB7IFwiaWRcIjogXCJqdDE5Nmd1dVwiLCBcIm5hbWVcIjogXCJqdDE5Nmd1dVwiLCBcInhcIjogMjcyLjI1LCBcInlcIjogMTU0LjczNzkyOTkzMjM5MzY2LCBcIndpZHRoXCI6IDQ3Ljc1NDAyMzM1NTg2ODc1LCBcImhlaWdodFwiOiA0OS42MzEwMzUwMzM4MDMxNiwgXCJ0aW1lXCI6IDAuODAxMDUzOTM3MDA3ODc0LCBcInN0YXR1c1wiOiBcIlNob3dcIiB9LCB7IFwiaWRcIjogXCJqdDE5Nms3aFwiLCBcIm5hbWVcIjogXCJqdDE5Nms3aFwiLCBcInhcIjogMjczLjI1LCBcInlcIjogMTU3LjczNzkyOTkzMjM5MzY2LCBcIndpZHRoXCI6IDQ3Ljc1NDAyMzM1NTg2ODc1LCBcImhlaWdodFwiOiA0OS42MzEwMzUwMzM4MDMxNiwgXCJ0aW1lXCI6IDAuODYyNjM1MDM5MzcwMDc4NywgXCJzdGF0dXNcIjogXCJTaG93XCIgfSBdLCBcImNoaWxkcmVuXCI6IFtdLCBcInBhcmVudFwiOiBcImp0MTkyMnh1XCIgfSwgeyBcImlkXCI6IFwianQxOTIyeHVcIiwgXCJuYW1lXCI6IFwianQxOTIyeHVcIiwgXCJsYWJlbFwiOiBcIjFcIiwgXCJjb2xvclwiOiBcInJnYmEoMjU1LDIxOSwwLDEpXCIsIFwiaW5jaWRlbnRzXCI6IFsgeyBcImlkXCI6IFwianQxOTIyeHVcIiwgXCJuYW1lXCI6IFwianQxOTIyeHVcIiwgXCJ4XCI6IDI3NC4yNSwgXCJ5XCI6IDE3NCwgXCJ3aWR0aFwiOiA4MCwgXCJoZWlnaHRcIjogODEsIFwidGltZVwiOiAwLCBcInN0YXR1c1wiOiBcIlNob3dcIiB9LCB7IFwiaWRcIjogXCJqdDE5Mnd5YlwiLCBcIm5hbWVcIjogXCJqdDE5Mnd5YlwiLCBcInhcIjogMjc0LjI1LCBcInlcIjogMTcxLjczNzkyOTkzMjM5MzY2LCBcIndpZHRoXCI6IDgxLjUwODA0NjcxMTczNzU2LCBcImhlaWdodFwiOiA4My4yNjIwNzAwNjc2MDYzNCwgXCJ0aW1lXCI6IDAuMDMwODIyNjQ5NTcyNjQ5NiwgXCJzdGF0dXNcIjogXCJTcGxpdFwiIH0gXSwgXCJjaGlsZHJlblwiOiBbIFwianQxOTJ3eWNcIiwgXCJqdDE5Mnd5ZFwiIF0sIFwicGFyZW50XCI6IFwiXCIgfSBdO1xuXHRcdC8vIGNvbnN0IHByZXZpZXdOb3RpY2VzID0gW1wiQ2VsbHMnIGJvZHkgcmFuZ2UuXCIsIFwiVGhlIHRpbWUgdGhhdCBjZWxscyA8dT5zcGxpdDwvdT4sIDx1PmxlYXZlPC91PiwgPHU+b2JzY3VyZWQ8L3U+IGFuZCA8dT5zaG93IHVwPC91PiAoaWYgYXBwbGljYWJsZSkuXCJdO1xuXHRcdC8vIGNvbnN0IHVybCA9ICdodHRwczovL2NpbGRhdGEuY3Jicy51Y3NkLmVkdS9tZWRpYS92aWRlb3MvNTA1MDcvNTA1MDdfd2ViLm1wNCc7XG5cdFx0Ly8gY29uc3QgYW5ub3RhdGlvbldpZHRoID0gNjAwO1xuXHRcdC8vIHRoaXMuc3RhdGUgPSB7XG5cdFx0Ly8gXHRyZXN1bHQ6IG51bGwsXG5cdFx0Ly8gXHRpbnB1dDoge1xuXHRcdC8vIFx0XHRhbm5vdGF0aW9uczogSlNPTi5zdHJpbmdpZnkoYW5ub3RhdGlvbnMpLFxuXHRcdC8vIFx0XHR1cmw6IHVybCxcblx0XHQvLyBcdFx0YW5ub3RhdGlvbldpZHRoOiBhbm5vdGF0aW9uV2lkdGhcblx0XHQvLyBcdCB9LFxuXHRcdC8vIFx0cGFyYW1zOiB7XG5cdFx0Ly8gXHRcdGFubm90YXRpb25zOiBhbm5vdGF0aW9ucyxcblx0XHQvLyBcdFx0dXJsOiB1cmwsXG5cdFx0Ly8gXHRcdHByZXZpZXdOb3RpY2VzOiBwcmV2aWV3Tm90aWNlcyxcblx0XHQvLyBcdFx0YW5ub3RhdGlvbldpZHRoOiBhbm5vdGF0aW9uV2lkdGhcblx0XHQvLyBcdH1cblx0XHQvLyB9XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdG15U3RyZWFtOiBudWxsLFxuXHRcdFx0cmVzdWx0OiBudWxsLFxuXHRcdFx0aW50ZXJwb2xhdGlvblJlc3VsdDogbnVsbCxcblx0XHRcdGlucHV0OiB7XG5cdFx0XHRcdGRlZmF1bHRBbm5vdGF0aW9uczogSlNPTi5zdHJpbmdpZnkoZGVmYXVsdEFubm90YXRpb25zKSxcblx0XHRcdFx0dXJsLFxuXHRcdFx0XHR2aWRlb1dpZHRoLFxuXHRcdFx0XHRwcmV2aWV3SGVhZGVyLFxuXHRcdFx0XHRwcmV2aWV3Tm90aWNlTGlzdCxcblx0XHRcdFx0ZW1wdHlDaGVja1N1Ym1pc3Npb25XYXJuaW5nVGV4dCxcblx0XHRcdFx0ZW1wdHlDaGVja0Fubm90YXRpb25JdGVtV2FybmluZ1RleHQsXG5cdFx0XHRcdGVtcHR5QW5ub3RhdGlvblJlbWluZGVyVGV4dCxcblx0XHRcdH0sXG5cdFx0XHRwYXJhbXM6IHtcblx0XHRcdFx0ZGVmYXVsdEFubm90YXRpb25zOiBbXSxcblx0XHRcdFx0dXJsLFxuXHRcdFx0XHR2aWRlb1dpZHRoLFxuXHRcdFx0XHRwcmV2aWV3SGVhZGVyLFxuXHRcdFx0XHRwcmV2aWV3Tm90aWNlTGlzdCxcblx0XHRcdFx0ZW1wdHlDaGVja1N1Ym1pc3Npb25XYXJuaW5nVGV4dCxcblx0XHRcdFx0ZW1wdHlDaGVja0Fubm90YXRpb25JdGVtV2FybmluZ1RleHQsXG5cdFx0XHRcdGVtcHR5QW5ub3RhdGlvblJlbWluZGVyVGV4dCxcblx0XHRcdH1cblx0XHR9XG5cdFx0Ly9zdGFydCBjb250ZW50IGZyb20gcmVhY3QgdG9vbFxuXHRcdGNvbnN0IHRlbXAgPSB7fTtcblx0XHRjb25zdCBkZWZhdWx0QW5ub3RhdGlvbnMgPSBbe1xuXHRcdFx0aWQ6ICdqdDE5Mnd5ZCcsXG5cdFx0XHRuYW1lOiAnanQxOTJ3eWQnLFxuXHRcdFx0bGFiZWw6ICcxLTInLFxuXHRcdFx0Y29sb3I6ICdyZ2JhKDI1NSwwLDAsMSknLFxuXHRcdFx0aW5jaWRlbnRzOiBbe1xuXHRcdFx0XHRpZDogJ2p0MTkyd3liJywgbmFtZTogJ2p0MTkyd3liJywgeDogMjk1LjAwNDAyMzM1NTg2ODc1LCB5OiAxOTMuMzY4OTY0OTY2MTk2OCwgd2lkdGg6IDQwLjc1NDAyMzM1NTg2ODc4LCBoZWlnaHQ6IDQxLjYzMTAzNTAzMzgwMzE3LCB0aW1lOiAwLjAzMDgyMjY0OTU3MjY0OTYsIHN0YXR1czogJ1Nob3cnLFxuXHRcdFx0fSwge1xuXHRcdFx0XHRpZDogJ2p0MTkzMG5iJywgbmFtZTogJ2p0MTkzMG5iJywgeDogMzA0LjAwNDAyMzM1NTg2ODc1LCB5OiAyMDIuMzY4OTY0OTY2MTk2OCwgd2lkdGg6IDU4Ljc1NDAyMzM1NTg2ODc1LCBoZWlnaHQ6IDYwLjYzMTAzNTAzMzgwMzE5LCB0aW1lOiAwLjAzMTc4NDcyMjIyMjIyMjIyLCBzdGF0dXM6ICdTaG93Jyxcblx0XHRcdH0sIHtcblx0XHRcdFx0aWQ6ICdqdDE5M2ZpbScsIG5hbWU6ICdqdDE5M2ZpbScsIHg6IDMwOS4wMDQwMjMzNTU4Njg3NSwgeTogMjEzLjM2ODk2NDk2NjE5NjgsIHdpZHRoOiA1OC43NTQwMjMzNTU4Njg3NSwgaGVpZ2h0OiA2MC42MzEwMzUwMzM4MDMxOSwgdGltZTogMC4wNjM4ODYxMTExMTExMTExMiwgc3RhdHVzOiAnU2hvdycsXG5cdFx0XHR9LCB7XG5cdFx0XHRcdGlkOiAnanQxOTNpam8nLCBuYW1lOiAnanQxOTNpam8nLCB4OiAzMjAuMDA0MDIzMzU1ODY4NzUsIHk6IDIyMC4zNjg5NjQ5NjYxOTY4LCB3aWR0aDogNTguNzU0MDIzMzU1ODY4NzUsIGhlaWdodDogNzQuNjMxMDM1MDMzODAzMTksIHRpbWU6IDAuMDg2NzcyNDIwNjM0OTIwNjMsIHN0YXR1czogJ1Nob3cnLFxuXHRcdFx0fSwge1xuXHRcdFx0XHRpZDogJ2p0MTk0ODRtJywgbmFtZTogJ2p0MTk0ODRtJywgeDogMzIwLjQ4OTkyMTU2NTg3NjMzLCB5OiAyMTguNDI1MzcyMTI2MTY2NDIsIHdpZHRoOiA2MC42OTc2MTYxOTU4OTkxMTYsIGhlaWdodDogNzguMTczMzQwNDAzNzgwNDMsIHRpbWU6IDAuMDk2NjcxODI1Mzk2ODI1NCwgc3RhdHVzOiAnU2hvdycsXG5cdFx0XHR9LCB7XG5cdFx0XHRcdGlkOiAnanQxOTNvNHknLCBuYW1lOiAnanQxOTNvNHknLCB4OiAzMjEuMDA0MDIzMzU1ODY4NzUsIHk6IDIxNi4zNjg5NjQ5NjYxOTY4LCB3aWR0aDogNjIuNzU0MDIzMzU1ODY4NzUsIGhlaWdodDogNzEuNjMxMDM1MDMzODAzMTksIHRpbWU6IDAuMTA3MTQ1ODMzMzMzMzMzMzQsIHN0YXR1czogJ1Nob3cnLFxuXHRcdFx0fSwge1xuXHRcdFx0XHRpZDogJ2p0MTk0ZG9tJywgbmFtZTogJ2p0MTk0ZG9tJywgeDogMzIxLjAwNDAyMzM1NTg2ODc1LCB5OiAyMTguODA4MzA0NDY0MDI0Mywgd2lkdGg6IDYyLjc1NDAyMzM1NTg2ODc1LCBoZWlnaHQ6IDY5LjE5MTY5NTUzNTk3NTcsIHRpbWU6IDAuMTE5NTg1NzE0Mjg1NzE0Mywgc3RhdHVzOiAnU2hvdycsXG5cdFx0XHR9LCB7XG5cdFx0XHRcdGlkOiAnanQxOTN0YXcnLCBuYW1lOiAnanQxOTN0YXcnLCB4OiAzMjEuMDA0MDIzMzU1ODY4NzUsIHk6IDIyOC4zNjg5NjQ5NjYxOTY4LCB3aWR0aDogNjIuNzU0MDIzMzU1ODY4NzUsIGhlaWdodDogNTkuNjMxMDM1MDMzODAzMTksIHRpbWU6IDAuMTM0NTkwMDc5MzY1MDc5MzYsIHN0YXR1czogJ1Nob3cnLFxuXHRcdFx0fSwge1xuXHRcdFx0XHRpZDogJ2p0MTkzemI0JywgbmFtZTogJ2p0MTkzemI0JywgeDogMzE4LjAwNDAyMzM1NTg2ODc1LCB5OiAyMjguMzY4OTY0OTY2MTk2OCwgd2lkdGg6IDgxLjc1NDAyMzM1NTg2ODc1LCBoZWlnaHQ6IDU5LjYzMTAzNTAzMzgwMzE5LCB0aW1lOiAwLjE2OTM5NTIzODA5NTIzODEsIHN0YXR1czogJ1Nob3cnLFxuXHRcdFx0fSwge1xuXHRcdFx0XHRpZDogJ2p0MTk1bHR6JywgbmFtZTogJ2p0MTk1bHR6JywgeDogMzI4LjI4NzQwOTg2NDEyNDQsIHk6IDIzMC42NTIzNTE0NzQ0NTI1LCB3aWR0aDogNzAuODUxNjQyMzE4MTM5MDYsIGhlaWdodDogNTYuNjMxMDM1MDMzODAzMjE1LCB0aW1lOiAwLjE5ODU1MjM2MjIwNDcyNDQsIHN0YXR1czogJ1Nob3cnLFxuXHRcdFx0fSwge1xuXHRcdFx0XHRpZDogJ2p0MTk0dHJnJywgbmFtZTogJ2p0MTk0dHJnJywgeDogMzIyLjAwNDAyMzM1NTg2ODc1LCB5OiAyMzIuMzY4OTY0OTY2MTk2OCwgd2lkdGg6IDc2LjY2OTY3ODYyOTc1OTUyLCBoZWlnaHQ6IDU5LjYzMTAzNTAzMzgwMzE5LCB0aW1lOiAwLjIyMDQ3MjIyMjIyMjIyMjI0LCBzdGF0dXM6ICdTaG93Jyxcblx0XHRcdH0sIHtcblx0XHRcdFx0aWQ6ICdqdDE5NGxnbScsIG5hbWU6ICdqdDE5NGxnbScsIHg6IDMxOC4wMDQwMjMzNTU4Njg3NSwgeTogMjI4LjM2ODk2NDk2NjE5NjgsIHdpZHRoOiA3NS43NTQwMjMzNTU4Njg3NSwgaGVpZ2h0OiA1OS42MzEwMzUwMzM4MDMxOSwgdGltZTogMC4yMjk2NzA4MzMzMzMzMzMzMiwgc3RhdHVzOiAnU2hvdycsXG5cdFx0XHR9LCB7XG5cdFx0XHRcdGlkOiAnanQxOTVwN20nLCBuYW1lOiAnanQxOTVwN20nLCB4OiAzMTguMDA0MDIzMzU1ODY4NzUsIHk6IDIyOC4zNjg5NjQ5NjYxOTY4LCB3aWR0aDogNjguNzU0MDIzMzU1ODY4NzUsIGhlaWdodDogNTguMTk2ODQ5NDYzODU5MDUsIHRpbWU6IDAuMjUzNTkzNTAzOTM3MDA3ODYsIHN0YXR1czogJ1Nob3cnLFxuXHRcdFx0fSwge1xuXHRcdFx0XHRpZDogJ2p0MTk1MXI5JywgbmFtZTogJ2p0MTk1MXI5JywgeDogMzE4LjAwNDAyMzM1NTg2ODc1LCB5OiAyMjguMzY4OTY0OTY2MTk2OCwgd2lkdGg6IDc1Ljc1NDAyMzM1NTg2ODc1LCBoZWlnaHQ6IDU0LjYzMTAzNTAzMzgwMzE5LCB0aW1lOiAwLjMxMzA3MjQyMDYzNDkyMDYzLCBzdGF0dXM6ICdTaG93Jyxcblx0XHRcdH0sIHtcblx0XHRcdFx0aWQ6ICdqdDE5NXY5bCcsIG5hbWU6ICdqdDE5NXY5bCcsIHg6IDMxOC4wMDQwMjMzNTU4Njg3NSwgeTogMjI4LjM2ODk2NDk2NjE5NjgsIHdpZHRoOiA3NS43NTQwMjMzNTU4Njg3NSwgaGVpZ2h0OiA1NC42MzEwMzUwMzM4MDMxOSwgdGltZTogMC4zNDYyMzkzNzAwNzg3NDAxNywgc3RhdHVzOiAnSGlkZScsXG5cdFx0XHR9XSxcblx0XHRcdGNoaWxkcmVuTmFtZXM6IFtdLFxuXHRcdFx0cGFyZW50TmFtZTogJ2p0MTkyMnh1Jyxcblx0XHR9LCB7XG5cdFx0XHRpZDogJ2p0MTkyd3ljJyxcblx0XHRcdG5hbWU6ICdqdDE5Mnd5YycsXG5cdFx0XHRsYWJlbDogJzEtMScsXG5cdFx0XHRjb2xvcjogJ3JnYmEoMjU1LDAsMCwxKScsXG5cdFx0XHRpbmNpZGVudHM6IFt7XG5cdFx0XHRcdGlkOiAnanQxOTJ3eWInLCBuYW1lOiAnanQxOTJ3eWInLCB4OiAyNzQuMjUsIHk6IDE3MS43Mzc5Mjk5MzIzOTM2Niwgd2lkdGg6IDQwLjc1NDAyMzM1NTg2ODc4LCBoZWlnaHQ6IDQxLjYzMTAzNTAzMzgwMzE3LCB0aW1lOiAwLjAzMDgyMjY0OTU3MjY0OTYsIHN0YXR1czogJ1Nob3cnLFxuXHRcdFx0fSwge1xuXHRcdFx0XHRpZDogJ2p0MTkzNDl4JywgbmFtZTogJ2p0MTkzNDl4JywgeDogMjcxLjI1LCB5OiAxNjcuNzM3OTI5OTMyMzkzNjYsIHdpZHRoOiA2MC43NTQwMjMzNTU4Njg3NSwgaGVpZ2h0OiA1OC42MzEwMzUwMzM4MDMxNiwgdGltZTogMC4wMzE3ODQ3MjIyMjIyMjIyMiwgc3RhdHVzOiAnU2hvdycsXG5cdFx0XHR9LCB7XG5cdFx0XHRcdGlkOiAnanQxOTNla2QnLCBuYW1lOiAnanQxOTNla2QnLCB4OiAyNzQuMjUsIHk6IDE2MC43Mzc5Mjk5MzIzOTM2Niwgd2lkdGg6IDYwLjc1NDAyMzM1NTg2ODc1LCBoZWlnaHQ6IDU4LjYzMTAzNTAzMzgwMzE2LCB0aW1lOiAwLjA2Mzg4NjExMTExMTExMTEyLCBzdGF0dXM6ICdTaG93Jyxcblx0XHRcdH0sIHtcblx0XHRcdFx0aWQ6ICdqdDE5M2hwMScsIG5hbWU6ICdqdDE5M2hwMScsIHg6IDI4MC4yNSwgeTogMTYwLjczNzkyOTkzMjM5MzY2LCB3aWR0aDogNjAuNzU0MDIzMzU1ODY4NzUsIGhlaWdodDogNTguNjMxMDM1MDMzODAzMTYsIHRpbWU6IDAuMDg2NzcyNDIwNjM0OTIwNjMsIHN0YXR1czogJ1Nob3cnLFxuXHRcdFx0fSwge1xuXHRcdFx0XHRpZDogJ2p0MTk0Y2J2JywgbmFtZTogJ2p0MTk0Y2J2JywgeDogMjgwLjEzMjY5NzU4MjE2NzcsIHk6IDE1OC42MjA2Mjc1MTQ1NjEzNiwgd2lkdGg6IDYwLjc1NDAyMzM1NTg2ODc1LCBoZWlnaHQ6IDU4LjYzMTAzNTAzMzgwMzE2LCB0aW1lOiAwLjExOTU4NTcxNDI4NTcxNDMsIHN0YXR1czogJ1Nob3cnLFxuXHRcdFx0fSwge1xuXHRcdFx0XHRpZDogJ2p0MTkzdW1nJywgbmFtZTogJ2p0MTkzdW1nJywgeDogMjc0LjI1LCB5OiAxNTQuNzM3OTI5OTMyMzkzNjYsIHdpZHRoOiA2MC43NTQwMjMzNTU4Njg3NSwgaGVpZ2h0OiA1OC42MzEwMzUwMzM4MDMxNiwgdGltZTogMC4xMzQ1OTAwNzkzNjUwNzkzNiwgc3RhdHVzOiAnU2hvdycsXG5cdFx0XHR9LCB7XG5cdFx0XHRcdGlkOiAnanQxOTN5N3EnLCBuYW1lOiAnanQxOTN5N3EnLCB4OiAyNjguMjUsIHk6IDE1NS43Mzc5Mjk5MzIzOTM2Niwgd2lkdGg6IDYwLjc1NDAyMzM1NTg2ODc1LCBoZWlnaHQ6IDU4LjYzMTAzNTAzMzgwMzE2LCB0aW1lOiAwLjE2OTM5NTIzODA5NTIzODEsIHN0YXR1czogJ1Nob3cnLFxuXHRcdFx0fSwge1xuXHRcdFx0XHRpZDogJ2p0MTk0aHhnJywgbmFtZTogJ2p0MTk0aHhnJywgeDogMjYwLjI1LCB5OiAxNTcuNzM3OTI5OTMyMzkzNjYsIHdpZHRoOiA2MC43NTQwMjMzNTU4Njg3NSwgaGVpZ2h0OiA1OC42MzEwMzUwMzM4MDMxNiwgdGltZTogMC4yMDIzMzM5Mjg1NzE0Mjg1Nywgc3RhdHVzOiAnU2hvdycsXG5cdFx0XHR9LCB7XG5cdFx0XHRcdGlkOiAnanQxOTRtajEnLCBuYW1lOiAnanQxOTRtajEnLCB4OiAyNTMuMjUsIHk6IDE1Ni43Mzc5Mjk5MzIzOTM2Niwgd2lkdGg6IDYwLjc1NDAyMzM1NTg2ODc1LCBoZWlnaHQ6IDU4LjYzMTAzNTAzMzgwMzE2LCB0aW1lOiAwLjIyOTY3MDgzMzMzMzMzMzMyLCBzdGF0dXM6ICdTaG93Jyxcblx0XHRcdH0sIHtcblx0XHRcdFx0aWQ6ICdqdDE5NXFndycsIG5hbWU6ICdqdDE5NXFndycsIHg6IDI0Ni4yNSwgeTogMTU2LjczNzkyOTkzMjM5MzY2LCB3aWR0aDogNjMuNjYwNDc4MDU3MTM3MDMsIGhlaWdodDogNTguNjMxMDM1MDMzODAzMTYsIHRpbWU6IDAuMjUzNTkzNTAzOTM3MDA3ODYsIHN0YXR1czogJ1Nob3cnLFxuXHRcdFx0fSwge1xuXHRcdFx0XHRpZDogJ2p0MTk0eHFoJywgbmFtZTogJ2p0MTk0eHFoJywgeDogMjUzLjI1LCB5OiAxNTYuNzM3OTI5OTMyMzkzNjYsIHdpZHRoOiA1Mi43NTQwMjMzNTU4Njg3NSwgaGVpZ2h0OiA1OC42MzEwMzUwMzM4MDMxNiwgdGltZTogMC4yNzY0MjI4MTc0NjAzMTc0NCwgc3RhdHVzOiAnU2hvdycsXG5cdFx0XHR9LCB7XG5cdFx0XHRcdGlkOiAnanQxOTU1dTEnLCBuYW1lOiAnanQxOTU1dTEnLCB4OiAyNjUuMjUsIHk6IDE1OS43Mzc5Mjk5MzIzOTM2Niwgd2lkdGg6IDQwLjc1NDAyMzM1NTg2ODc1LCBoZWlnaHQ6IDQ5LjYzMTAzNTAzMzgwMzE2LCB0aW1lOiAwLjM1NjQ4MzMzMzMzMzMzMzMsIHN0YXR1czogJ1Nob3cnLFxuXHRcdFx0fSwge1xuXHRcdFx0XHRpZDogJ2p0MTk1YjNpJywgbmFtZTogJ2p0MTk1YjNpJywgeDogMjY1LjI1LCB5OiAxNDEuNzM3OTI5OTMyMzkzNjYsIHdpZHRoOiA0MC43NTQwMjMzNTU4Njg3NSwgaGVpZ2h0OiA0OS42MzEwMzUwMzM4MDMxNiwgdGltZTogMC40NTk4NDk4MDE1ODczMDE1NCwgc3RhdHVzOiAnU2hvdycsXG5cdFx0XHR9LCB7XG5cdFx0XHRcdGlkOiAnanQxOTYxdjYnLCBuYW1lOiAnanQxOTYxdjYnLCB4OiAyNjkuMjUsIHk6IDE0NC43Mzc5Mjk5MzIzOTM2Niwgd2lkdGg6IDQwLjc1NDAyMzM1NTg2ODc1LCBoZWlnaHQ6IDQ5LjYzMTAzNTAzMzgwMzE2LCB0aW1lOiAwLjQ3ODUxNzUxOTY4NTAzOTM2LCBzdGF0dXM6ICdTaG93Jyxcblx0XHRcdH0sIHtcblx0XHRcdFx0aWQ6ICdqdDE5NjVheicsIG5hbWU6ICdqdDE5NjVheicsIHg6IDI2Mi4yNSwgeTogMTQ0LjczNzkyOTkzMjM5MzY2LCB3aWR0aDogNDcuNzU0MDIzMzU1ODY4NzUsIGhlaWdodDogNDkuNjMxMDM1MDMzODAzMTYsIHRpbWU6IDAuNTM0MjQ5NjA2Mjk5MjEyNiwgc3RhdHVzOiAnU2hvdycsXG5cdFx0XHR9LCB7XG5cdFx0XHRcdGlkOiAnanQxOTY4bmsnLCBuYW1lOiAnanQxOTY4bmsnLCB4OiAyNjIuMjUsIHk6IDE0OS43Mzc5Mjk5MzIzOTM2Niwgd2lkdGg6IDQ3Ljc1NDAyMzM1NTg2ODc1LCBoZWlnaHQ6IDQ5LjYzMTAzNTAzMzgwMzE2LCB0aW1lOiAwLjU5MDQxMDYyOTkyMTI1OTgsIHN0YXR1czogJ1Nob3cnLFxuXHRcdFx0fSwge1xuXHRcdFx0XHRpZDogJ2p0MTk2YXgzJywgbmFtZTogJ2p0MTk2YXgzJywgeDogMjcwLjI1LCB5OiAxNTguNzM3OTI5OTMyMzkzNjYsIHdpZHRoOiA0Ny43NTQwMjMzNTU4Njg3NSwgaGVpZ2h0OiA0OS42MzEwMzUwMzM4MDMxNiwgdGltZTogMC42NjYyNTk2NDU2NjkyOTEzLCBzdGF0dXM6ICdTaG93Jyxcblx0XHRcdH0sIHtcblx0XHRcdFx0aWQ6ICdqdDE5NmR5cycsIG5hbWU6ICdqdDE5NmR5cycsIHg6IDI2OC4yNSwgeTogMTY0LjczNzkyOTkzMjM5MzY2LCB3aWR0aDogNDcuNzU0MDIzMzU1ODY4NzUsIGhlaWdodDogNDkuNjMxMDM1MDMzODAzMTYsIHRpbWU6IDAuNzM2ODM3MDA3ODc0MDE1Nywgc3RhdHVzOiAnU2hvdycsXG5cdFx0XHR9LCB7XG5cdFx0XHRcdGlkOiAnanQxOTZndXUnLCBuYW1lOiAnanQxOTZndXUnLCB4OiAyNzIuMjUsIHk6IDE1NC43Mzc5Mjk5MzIzOTM2Niwgd2lkdGg6IDQ3Ljc1NDAyMzM1NTg2ODc1LCBoZWlnaHQ6IDQ5LjYzMTAzNTAzMzgwMzE2LCB0aW1lOiAwLjgwMTA1MzkzNzAwNzg3NCwgc3RhdHVzOiAnU2hvdycsXG5cdFx0XHR9LCB7XG5cdFx0XHRcdGlkOiAnanQxOTZrN2gnLCBuYW1lOiAnanQxOTZrN2gnLCB4OiAyNzMuMjUsIHk6IDE1Ny43Mzc5Mjk5MzIzOTM2Niwgd2lkdGg6IDQ3Ljc1NDAyMzM1NTg2ODc1LCBoZWlnaHQ6IDQ5LjYzMTAzNTAzMzgwMzE2LCB0aW1lOiAwLjg2MjYzNTAzOTM3MDA3ODcsIHN0YXR1czogJ1Nob3cnLFxuXHRcdFx0fV0sXG5cdFx0XHRjaGlsZHJlbk5hbWVzOiBbXSxcblx0XHRcdHBhcmVudE5hbWU6ICdqdDE5MjJ4dScsXG5cdFx0fSwge1xuXHRcdFx0aWQ6ICdqdDE5MjJ4dScsXG5cdFx0XHRuYW1lOiAnanQxOTIyeHUnLFxuXHRcdFx0bGFiZWw6ICcxJyxcblx0XHRcdGNvbG9yOiAncmdiYSgyNTUsMjE5LDAsMSknLFxuXHRcdFx0aW5jaWRlbnRzOiBbe1xuXHRcdFx0XHRpZDogJ2p0MTkyMnh1JywgbmFtZTogJ2p0MTkyMnh1JywgeDogMjc0LjI1LCB5OiAxNzQsIHdpZHRoOiA4MCwgaGVpZ2h0OiA4MSwgdGltZTogMCwgc3RhdHVzOiAnU2hvdycsXG5cdFx0XHR9LCB7XG5cdFx0XHRcdGlkOiAnanQxOTJ3eWInLCBuYW1lOiAnanQxOTJ3eWInLCB4OiAyNzQuMjUsIHk6IDE3MS43Mzc5Mjk5MzIzOTM2Niwgd2lkdGg6IDgxLjUwODA0NjcxMTczNzU2LCBoZWlnaHQ6IDgzLjI2MjA3MDA2NzYwNjM0LCB0aW1lOiAwLjAzMDgyMjY0OTU3MjY0OTYsIHN0YXR1czogJ1NwbGl0Jyxcblx0XHRcdH1dLFxuXHRcdFx0Y2hpbGRyZW5OYW1lczogWydqdDE5Mnd5YycsICdqdDE5Mnd5ZCddLFxuXHRcdFx0cGFyZW50TmFtZTogJycsXG5cdFx0fV07XG5cdFx0Y29uc3QgdXJsID0gJ2h0dHBzOi8vY2lsZGF0YS5jcmJzLnVjc2QuZWR1L21lZGlhL3ZpZGVvcy81MDUwNy81MDUwN193ZWIubXA0Jztcblx0XHRjb25zdCB2aWRlb1dpZHRoID0gNTAwO1xuXHRcdGNvbnN0IHByZXZpZXdOb3RpY2VMaXN0ID0gW1xuXHRcdFx0J0NlbGxzXFwnIGJvZHkgcmFuZ2UuJyxcblx0XHRcdCdUaGUgdGltZSB0aGF0IGNlbGxzIDx1PnNwbGl0PC91PiwgPHU+bGVhdmU8L3U+LCA8dT5vYnNjdXJlZDwvdT4gYW5kIDx1PlNob3cgdXA8L3U+IChpZiBhcHBsaWNhYmxlKS4nLFxuXHRcdF07XG5cdFx0Y29uc3QgcHJldmlld0hlYWRlciA9ICdQbGVhc2Ugc2NhbiB0aGUgdmlkZW8gYW5kIG9ic2VydmUgdGhlIGZvbGxvd2luZyB0byBoZWxwIHlvdSBjb21wbGV0ZSB0aGUgdGFzazonO1xuXHRcdGNvbnN0IGVtcHR5Q2hlY2tTdWJtaXNzaW9uV2FybmluZ1RleHQgPSAnUGxlYXNlIGFubm90YXRlIEFORCB0cmFjayBvbmUgdW5tYXJrZWQgY2VsbCB0byBjb21wbGV0ZSB0aGlzIHRhc2suJztcblx0XHRjb25zdCBlbXB0eUNoZWNrQW5ub3RhdGlvbkl0ZW1XYXJuaW5nVGV4dCA9ICdTdGVwIDI6IFBsZWFzZSB0cmFjayB0aGUgY2VsbCBib3VuZCBieSB0aGlzIGJveCc7XG5cdFx0Y29uc3QgZW1wdHlBbm5vdGF0aW9uUmVtaW5kZXJUZXh0ID0gJ1N0ZXAgMTogQ2xpY2sgdGhlIGJ1dHRvbiBhYm92ZSB0byBhZGQgYSBuZXcgYm94IGFyb3VuZCBhIGNlbGwnO1xuXG5cdFx0dGhpcy5maWxlSW5wdXQgPSBSZWFjdC5jcmVhdGVSZWYoKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0bXlTdHJlYW06IG51bGwsXG5cdFx0XHRyZXN1bHQ6IG51bGwsXG5cdFx0XHRpbnRlcnBvbGF0aW9uUmVzdWx0OiBudWxsLFxuXHRcdFx0aW5wdXQ6IHtcblx0XHRcdFx0ZGVmYXVsdEFubm90YXRpb25zOiBKU09OLnN0cmluZ2lmeShkZWZhdWx0QW5ub3RhdGlvbnMpLFxuXHRcdFx0XHR1cmwsXG5cdFx0XHRcdHZpZGVvV2lkdGgsXG5cdFx0XHRcdHByZXZpZXdIZWFkZXIsXG5cdFx0XHRcdHByZXZpZXdOb3RpY2VMaXN0LFxuXHRcdFx0XHRlbXB0eUNoZWNrU3VibWlzc2lvbldhcm5pbmdUZXh0LFxuXHRcdFx0XHRlbXB0eUNoZWNrQW5ub3RhdGlvbkl0ZW1XYXJuaW5nVGV4dCxcblx0XHRcdFx0ZW1wdHlBbm5vdGF0aW9uUmVtaW5kZXJUZXh0LFxuXHRcdFx0fSxcblx0XHRcdHBhcmFtczoge1xuXHRcdFx0XHRkZWZhdWx0QW5ub3RhdGlvbnM6IFtdLFxuXHRcdFx0XHR1cmwsXG5cdFx0XHRcdHZpZGVvV2lkdGgsXG5cdFx0XHRcdHByZXZpZXdIZWFkZXIsXG5cdFx0XHRcdHByZXZpZXdOb3RpY2VMaXN0LFxuXHRcdFx0XHRlbXB0eUNoZWNrU3VibWlzc2lvbldhcm5pbmdUZXh0LFxuXHRcdFx0XHRlbXB0eUNoZWNrQW5ub3RhdGlvbkl0ZW1XYXJuaW5nVGV4dCxcblx0XHRcdFx0ZW1wdHlBbm5vdGF0aW9uUmVtaW5kZXJUZXh0LFxuXHRcdFx0fVxuXHRcdH1cblx0XHQvL2VuZCBjb250ZW50IGZyb20gcmVhY3QgdG9vbFxuXHRcdC8vY2xvc2UgY29uc3RydWN0b3IgcHJvcHNcdFxuXHR9XG5cblx0aGFuZGxlUmVzdWx0U3VibWl0ID0gcmVzdWx0ID0+IHtcblx0XHR0aGlzLnNldFN0YXRlKHsgcmVzdWx0OiByZXN1bHQgfSk7XG5cblx0fVxuXG5cdGhhbmRsZUNoYW5nZSA9IGV2ZW50ID0+IHtcblx0XHRjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG5cdFx0Y29uc3QgbmFtZSA9IHRhcmdldC5uYW1lO1xuXHRcdGNvbnN0IHZhbHVlID0gdGFyZ2V0LnR5cGUgPT09IFwiY2hlY2tib3hcIiA/IHRhcmdldC5jaGVja2VkIDogdGFyZ2V0LnZhbHVlO1xuXHRcdHRoaXMuc2V0U3RhdGUoKHByZVN0YXRlKSA9PiB7XG5cdFx0XHRjb25zdCB7IGlucHV0IH0gPSBwcmVTdGF0ZTtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGlucHV0OiB7IC4uLmlucHV0LCBbbmFtZV06IHZhbHVlIH1cblx0XHRcdH1cblxuXHRcdH0pXG5cdFx0XG5cdFx0Y29uc29sZS5sb2coXCJWaWRlbyB1cmwgY2FuIGJlIGZvdW5kIGJlbG93OlwiKVxuXHRcdGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUpKVxuXHR9XG5cblx0aGFuZGxlRXJyb3JTdWJtaXQgPSBldmVudCA9PiB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0ICBcdHRoaXMuc2V0U3RhdGUoKHByZVN0YXRlKSA9PiB7XG5cdFx0XHRcdGNvbnN0IHsgaW5wdXQgfSA9IHByZVN0YXRlO1xuXHRcdFx0XHRcblx0XHRcdFx0Y29uc3QgYW5ub3RhdGlvbnMgPSB0aGlzLmlzSnNvblN0cmluZyhpbnB1dC5kZWZhdWx0QW5ub3RhdGlvbnMpID8gaW5wdXQuZGVmYXVsdEFubm90YXRpb25zIDogXCJbXVwiO1xuXHRcdCAgXHRcdHJldHVybiB7IHBhcmFtczoge1xuXHRcdFx0XHRcdFx0XHRkZWZhdWx0QW5ub3RhdGlvbnM6IEpTT04ucGFyc2UoYW5ub3RhdGlvbnMpLFxuXHRcdFx0XHRcdFx0XHR1cmw6IGlucHV0LnVybCxcblx0XHRcdFx0XHRcdFx0YW5ub3RhdGlvbldpZHRoOiBwYXJzZUludChpbnB1dC5hbm5vdGF0aW9uV2lkdGgsIDEwKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHR9O1xuXHQgIFx0XHR9XG5cdFx0KTtcblx0fVxuXHRoYW5kbGVTdWJtaXQgPSBhc3luYyBldmVudCA9PiB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRsZXQgcmVzdWx0ID0ge307XG5cdFx0aWYgKHRoaXMuZmlsZUlucHV0LmN1cnJlbnQuZmlsZXNbMF0pIHtcblx0XHRcdGNvbnN0IHJlYWRGaWxlUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdFx0Y29uc3QgZmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cdFx0XHRcdGZpbGVSZWFkZXIub25sb2FkID0gZXZlbnQgPT4ge1xuXHRcdFx0XHRcdGlmICghdGhpcy5pc0pzb25TdHJpbmcoZXZlbnQudGFyZ2V0LnJlc3VsdCkpXG5cdFx0XHRcdFx0XHRyZWplY3QoJ1dyb25nIGpzb24gZm9ybWF0Jyk7XG5cdFx0XHRcdFx0bGV0IHJlc3VsdCA9IEpTT04ucGFyc2UoZXZlbnQudGFyZ2V0LnJlc3VsdCk7XG5cdFx0XHRcdFx0cmVzb2x2ZShyZXN1bHQpXG5cdFx0XHRcdH1cblx0XHRcdFx0ZmlsZVJlYWRlci5vbmVycm9yID0gZXZlbnQgPT4ge1xuXHRcdFx0XHRcdHJlamVjdChldmVudCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZmlsZVJlYWRlci5yZWFkQXNUZXh0KHRoaXMuZmlsZUlucHV0LmN1cnJlbnQuZmlsZXNbMF0pO1xuXHRcdFx0fSlcblx0XHRcdHJlc3VsdCA9IGF3YWl0IHJlYWRGaWxlUHJvbWlzZTtcblx0XHR9XG5cdFx0bGV0IHsgdXJsID0gJycsIHZpZGVvV2lkdGggPSAwLCBkZWZhdWx0QW5ub3RhdGlvbnMgPSBbXSB9ID0gcmVzdWx0O1xuXHRcdHRoaXMuc2V0U3RhdGUoKHByZVN0YXRlKSA9PiB7XG5cdFx0XHRjb25zdCB7IGlucHV0IH0gPSBwcmVTdGF0ZTtcblx0XHRcdFxuXHRcdFx0aWYgKHJlc3VsdC5hbm5vdGF0aW9ucy5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0ZGVmYXVsdEFubm90YXRpb25zID0gdGhpcy5pc0pzb25TdHJpbmcoaW5wdXQuZGVmYXVsdEFubm90YXRpb25zKSA/IEpTT04ucGFyc2UoaW5wdXQuZGVmYXVsdEFubm90YXRpb25zKSA6IFwiW11cIjtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRkZWZhdWx0QW5ub3RhdGlvbnMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHJlc3VsdC5hbm5vdGF0aW9ucykpO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRcblx0XHRcdFxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0cGFyYW1zOiB7XG5cdFx0XHRcdFx0ZGVmYXVsdEFubm90YXRpb25zLFxuXHRcdFx0XHRcdHVybDogaW5wdXQudXJsLFxuXHRcdFx0XHRcdHZpZGVvV2lkdGg6ICh2aWRlb1dpZHRoICE9PSAwID8gdmlkZW9XaWR0aCA6IHBhcnNlSW50KGlucHV0LnZpZGVvV2lkdGgsIDEwKSlcblx0XHRcdFx0XHRcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHR9XG5cdFx0KTtcblx0XHQvLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlKSlcblx0fVxuXG5cdGlzSnNvblN0cmluZyA9IHN0ciA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdEpTT04ucGFyc2Uoc3RyKTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0Ly9mdW5jdGlvbiBmb3IgZ2V0dGluZyBpbnRlcnBvbGF0ZWQgZGF0YSBzdGFydHNcblx0Z2V0SW50ZXJwb2xhdGVkRGF0YSA9IGV2ZW50ID0+IHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGNvbnNvbGUubG9nKFwiTG9vayBoZXJlXCIpXG5cdFx0Y29uc29sZS5sb2coXCJJbnRlcnBvbGF0aW9uIGZ1Y250aW9uXCIgKyBKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlLnJlc3VsdCkpXG5cdFx0Ly9jb25zdCBkdXJhdGlvbiA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5zdGF0ZS5yZXN1bHQuZHVyYXRpb24pKVxuXHRcdGNvbnN0IGR1cmF0aW9uID0gNS4wNFxuXHRcdGNvbnNvbGUubG9nKFwiSSBhbSBoZXJlXCIpXG5cdFx0Y29uc29sZS5sb2coZHVyYXRpb24pXG5cdFx0Y29uc3QgdGltZXJhdGUgPSBkdXJhdGlvbiAqIDYwXG5cdFx0Ly9jb2xsZWN0IGZyYW1lL3NlY29uZCBmb3IgdGhlIHZpZGVvXG5cdFx0Y29uc3QgdGltZU5vdyA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkudG9TdHJpbmcoMzYpO1xuXHRcdGxldCBpbnRlcnBvbGF0ZWRSZXN1bHQgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUucmVzdWx0KSk7XG5cdFx0bGV0IHRlbXAgPSBpbnRlcnBvbGF0ZWRSZXN1bHRcblx0XHRjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0ZW1wKSlcblx0XHRmb3IgKGxldCBhbm5vdGF0aW9uID0gMDsgYW5ub3RhdGlvbiA8IHRlbXAuYW5ub3RhdGlvbnMubGVuZ3RoOyBhbm5vdGF0aW9uKyspIHtcblx0XHRcdGZvciAobGV0IGluY2lkZW50ID0gMDsgaW5jaWRlbnQgPCB0ZW1wLmFubm90YXRpb25zW2Fubm90YXRpb25dLmluY2lkZW50cy5sZW5ndGg7IGluY2lkZW50KyspIHtcblx0XHRcdFx0dGVtcC5hbm5vdGF0aW9uc1thbm5vdGF0aW9uXS5pbmNpZGVudHNbaW5jaWRlbnRdLnBhcmVudE5hbWUgPSB0ZW1wLmFubm90YXRpb25zW2Fubm90YXRpb25dLnBhcmVudE5hbWVcblx0XHRcdH1cblx0XHR9XG5cdFx0Zm9yIChsZXQgYW5ub3RhdGlvbiA9IDA7IGFubm90YXRpb24gPCB0ZW1wLmFubm90YXRpb25zLmxlbmd0aDsgYW5ub3RhdGlvbisrKSB7XG5cblx0XHRcdGZvciAobGV0IGluY2lkZW50ID0gMDsgaW5jaWRlbnQgPCB0ZW1wLmFubm90YXRpb25zW2Fubm90YXRpb25dLmluY2lkZW50cy5sZW5ndGg7IGluY2lkZW50KyspIHtcblx0XHRcdFx0dGVtcC5hbm5vdGF0aW9uc1thbm5vdGF0aW9uXS5pbmNpZGVudHNbaW5jaWRlbnRdLmxhYmVsID0gdGVtcC5hbm5vdGF0aW9uc1thbm5vdGF0aW9uXS5sYWJlbFxuXHRcdFx0fVxuXHRcdH1cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGludGVycG9sYXRlZFJlc3VsdC5hbm5vdGF0aW9ucy5sZW5ndGg7IGkrKykge1xuXG5cdFx0XHRsZXQgYW5ub3RJbmNpZGVudExlbmd0aCA9IGludGVycG9sYXRlZFJlc3VsdC5hbm5vdGF0aW9uc1tpXS5pbmNpZGVudHMubGVuZ3RoXG5cdFx0XHRpZiAoYW5ub3RJbmNpZGVudExlbmd0aCA9PT0gMSkge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcIlRoaXMgaXMgbm90IHBvc3NpYmxlIDpQXCIpXG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmIChhbm5vdEluY2lkZW50TGVuZ3RoID4gMSkge1xuXG5cdFx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgYW5ub3RJbmNpZGVudExlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0aWYgKChqICE9IGFubm90SW5jaWRlbnRMZW5ndGggLSAxKSAmJiAoaW50ZXJwb2xhdGVkUmVzdWx0LmFubm90YXRpb25zW2ldLmluY2lkZW50c1tqICsgMV0uc3RhdHVzID09IFwiU2hvd1wiIHx8IGludGVycG9sYXRlZFJlc3VsdC5hbm5vdGF0aW9uc1tpXS5pbmNpZGVudHNbaiArIDFdLnN0YXR1cyA9PSBcIlwiIHx8IGludGVycG9sYXRlZFJlc3VsdC5hbm5vdGF0aW9uc1tpXS5pbmNpZGVudHNbaiArIDFdLnN0YXR1cyA9PSBcIlNwbGl0XCIpKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBzb3VyY2UgPSBpbnRlcnBvbGF0ZWRSZXN1bHQuYW5ub3RhdGlvbnNbaV0uaW5jaWRlbnRzW2pdXG5cdFx0XHRcdFx0XHRjb25zdCB0YXJnZXQgPSBpbnRlcnBvbGF0ZWRSZXN1bHQuYW5ub3RhdGlvbnNbaV0uaW5jaWRlbnRzW2ogKyAxXVxuXHRcdFx0XHRcdFx0Y29uc3QgdGRpZmYgPSAodGFyZ2V0LnRpbWUgKiB0aW1lcmF0ZSkgLSAoc291cmNlLnRpbWUgKiB0aW1lcmF0ZSlcblx0XHRcdFx0XHRcdGNvbnN0IHhTbG9wZSA9ICh0YXJnZXQueCAtIHNvdXJjZS54KSAvIHRkaWZmXG5cdFx0XHRcdFx0XHRjb25zdCB5U2xvcGUgPSAodGFyZ2V0LnkgLSBzb3VyY2UueSkgLyB0ZGlmZlxuXHRcdFx0XHRcdFx0Y29uc3Qgd1Nsb3BlID0gKHRhcmdldC53aWR0aCAtIHNvdXJjZS53aWR0aCkgLyB0ZGlmZlxuXHRcdFx0XHRcdFx0Y29uc3QgaFNsb3BlID0gKHRhcmdldC5oZWlnaHQgLSBzb3VyY2UuaGVpZ2h0KSAvIHRkaWZmXG5cdFx0XHRcdFx0XHRjb25zdCBzRnJhbWUgPSBNYXRoLnJvdW5kKHNvdXJjZS50aW1lICogdGltZXJhdGUpXG5cdFx0XHRcdFx0XHRjb25zdCB0RnJhbWUgPSBNYXRoLnJvdW5kKHRhcmdldC50aW1lICogdGltZXJhdGUpXG5cdFx0XHRcdFx0XHRmb3IgKGxldCBrID0gc0ZyYW1lICsgMTsgayA8PSB0RnJhbWU7IGsrKykge1xuXHRcdFx0XHRcdFx0XHRsZXQgb2ZmID0gayAtIE1hdGgucm91bmQoc291cmNlLnRpbWUgKiB0aW1lcmF0ZSlcblx0XHRcdFx0XHRcdFx0bGV0IGludGVycG9sWCA9IChzb3VyY2UueCArICh4U2xvcGUgKiBvZmYpKS50b0ZpeGVkKDIpXG5cdFx0XHRcdFx0XHRcdGxldCBpbnRlcnBvbFkgPSAoc291cmNlLnkgKyAoeVNsb3BlICogb2ZmKSkudG9GaXhlZCgyKVxuXHRcdFx0XHRcdFx0XHRsZXQgaW50ZXJwb2xXID0gKHNvdXJjZS53aWR0aCArICh3U2xvcGUgKiBvZmYpKS50b0ZpeGVkKDIpXG5cdFx0XHRcdFx0XHRcdGxldCBpbnRlcnBvbEggPSAoc291cmNlLmhlaWdodCArIChoU2xvcGUgKiBvZmYpKS50b0ZpeGVkKDIpXG5cdFx0XHRcdFx0XHRcdHRlbXAuYW5ub3RhdGlvbnNbaV0uaW5jaWRlbnRzLnNwbGljZShqICsgMSwgMCwgKHtcblx0XHRcdFx0XHRcdFx0XHRpZDogYCR7dGltZU5vd31gLCBuYW1lOiBgJHt0aW1lTm93fWAsIHg6IGludGVycG9sWCwgeTogaW50ZXJwb2xZLCBoZWlnaHQ6IGludGVycG9sSCwgd2lkdGg6IGludGVycG9sVywgdGltZTogaywgc3RhdHVzLCBwYXJlbnROYW1lOiBpbnRlcnBvbGF0ZWRSZXN1bHQuYW5ub3RhdGlvbnNbaV0ucGFyZW50TmFtZSwgbGFiZWw6IGludGVycG9sYXRlZFJlc3VsdC5hbm5vdGF0aW9uc1tpXS5sYWJlbFxuXHRcdFx0XHRcdFx0XHR9KSk7XG5cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdH0gLy9jbG9zZSBpZiBcblxuXHRcdFx0XHRcdGlmICgoaiA9PSBhbm5vdEluY2lkZW50TGVuZ3RoIC0gMSkgJiYgKGludGVycG9sYXRlZFJlc3VsdC5hbm5vdGF0aW9uc1tpXS5pbmNpZGVudHNbal0uc3RhdHVzID09IFwiU2hvd1wiIHx8IGludGVycG9sYXRlZFJlc3VsdC5hbm5vdGF0aW9uc1tpXS5pbmNpZGVudHNbal0uc3RhdHVzID09IFwiXCIgfHwgaW50ZXJwb2xhdGVkUmVzdWx0LmFubm90YXRpb25zW2ldLmluY2lkZW50c1tqICsgMV0uc3RhdHVzID09IFwiU3BsaXRcIikpIHtcblxuXHRcdFx0XHRcdFx0Y29uc3Qgc291cmNlID0gaW50ZXJwb2xhdGVkUmVzdWx0LmFubm90YXRpb25zW2ldLmluY2lkZW50c1tqXVxuXHRcdFx0XHRcdFx0Y29uc3QgdGFyZ2V0ID0gaW50ZXJwb2xhdGVkUmVzdWx0LmFubm90YXRpb25zW2ldLmluY2lkZW50c1tqXVxuXHRcdFx0XHRcdFx0Y29uc3QgdGRpZmYgPSAoZHVyYXRpb24gKiB0aW1lcmF0ZSkgLSAoc291cmNlLnRpbWUgKiB0aW1lcmF0ZSlcblx0XHRcdFx0XHRcdGNvbnN0IHhTbG9wZSA9ICh0YXJnZXQueCAtIHNvdXJjZS54KSAvIHRkaWZmXG5cdFx0XHRcdFx0XHRjb25zdCB5U2xvcGUgPSAodGFyZ2V0LnkgLSBzb3VyY2UueSkgLyB0ZGlmZlxuXHRcdFx0XHRcdFx0Y29uc3Qgd1Nsb3BlID0gKHRhcmdldC53aWR0aCAtIHNvdXJjZS53aWR0aCkgLyB0ZGlmZlxuXHRcdFx0XHRcdFx0Y29uc3QgaFNsb3BlID0gKHRhcmdldC5oZWlnaHQgLSBzb3VyY2UuaGVpZ2h0KSAvIHRkaWZmXG5cdFx0XHRcdFx0XHRjb25zdCBzRnJhbWUgPSBNYXRoLnJvdW5kKHNvdXJjZS50aW1lICogdGltZXJhdGUpXG5cdFx0XHRcdFx0XHRjb25zdCB0RnJhbWUgPSBNYXRoLnJvdW5kKHRhcmdldC50aW1lICogdGltZXJhdGUpXG5cdFx0XHRcdFx0XHRmb3IgKGxldCBrID0gc0ZyYW1lICsgMTsgayA8PSB0RnJhbWU7IGsrKykge1xuXHRcdFx0XHRcdFx0XHRsZXQgb2ZmID0gayAtIE1hdGgucm91bmQoc291cmNlLnRpbWUgKiB0aW1lcmF0ZSlcblx0XHRcdFx0XHRcdFx0bGV0IGludGVycG9sWCA9IHNvdXJjZS54ICsgKHhTbG9wZSAqIG9mZilcblx0XHRcdFx0XHRcdFx0bGV0IGludGVycG9sWSA9IHNvdXJjZS55ICsgKHlTbG9wZSAqIG9mZilcblx0XHRcdFx0XHRcdFx0bGV0IGludGVycG9sVyA9IHNvdXJjZS53aWR0aCArICh3U2xvcGUgKiBvZmYpXG5cdFx0XHRcdFx0XHRcdGxldCBpbnRlcnBvbEggPSBzb3VyY2UuaGVpZ2h0ICsgKGhTbG9wZSAqIG9mZilcblx0XHRcdFx0XHRcdFx0dGVtcC5hbm5vdGF0aW9uc1tpXS5pbmNpZGVudHMuc3BsaWNlKGogKyAxLCAwLCAoe1xuXHRcdFx0XHRcdFx0XHRcdGlkOiBgJHt0aW1lTm93fWAsIG5hbWU6IGAke3RpbWVOb3d9YCwgeDogaW50ZXJwb2xYLCB5OiBpbnRlcnBvbFksIGhlaWdodDogaW50ZXJwb2xILCB3aWR0aDogaW50ZXJwb2xXLCB0aW1lOiBrLCBzdGF0dXMsIHBhcmVudE5hbWU6IHRlbXAuYW5ub3RhdGlvbnNbaV0ucGFyZW50TmFtZSwgbGFiZWw6IGludGVycG9sYXRlZFJlc3VsdC5hbm5vdGF0aW9uc1tpXS5sYWJlbFxuXHRcdFx0XHRcdFx0XHR9KSk7XG5cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdH0gLy9jbG9zZSBzZWNvbmQgaWZcblxuXG5cblx0XHRcdFx0fSAvL2Nsb3NlIGZvciBsb29wIGZvciBqXG5cblxuXG5cdFx0XHR9IC8vY2xvc2UgZWxzZS1pZiBhbm5vdGxlbmd0aD4xXG5cblx0XHR9IC8vY2xvc2UgZm9yIGxvb3AgZm9yIGlcblxuXHRcdC8vc29ydCB0aGUgdGVtcCBvYmplY3QgYmFzZWQgb24gdGltZS9mcmFtZSB2YWx1ZVxuXHRcdGxldCBpbnRlcnBvbF9kYXRhX2FyciA9IFtdLCBzbm8gPSAxXG5cdFx0Y29uc29sZS5sb2coXCJUZW1wIGFycmF5OiBcIiArIEpTT04uc3RyaW5naWZ5KHRlbXApKVxuXHRcdGZvciAobGV0IHggPSAwOyB4IDwgdGVtcC5hbm5vdGF0aW9ucy5sZW5ndGg7IHgrKykge1xuXHRcdFx0Zm9yIChsZXQgeSA9IDA7IHkgPCB0ZW1wLmFubm90YXRpb25zW3hdLmluY2lkZW50cy5sZW5ndGg7IHkrKykge1xuXHRcdFx0XHRpZiAoISh0ZW1wLmFubm90YXRpb25zW3hdLmluY2lkZW50c1t5XS50aW1lID4gMCAmJiB0ZW1wLmFubm90YXRpb25zW3hdLmluY2lkZW50c1t5XS50aW1lIDwgMSkpXG5cdFx0XHRcdFx0aW50ZXJwb2xfZGF0YV9hcnIucHVzaCh0ZW1wLmFubm90YXRpb25zW3hdLmluY2lkZW50c1t5XSlcblx0XHRcdH1cblx0XHR9XG5cblx0XHRmb3IgKGxldCBwID0gMDsgcCA8IGludGVycG9sX2RhdGFfYXJyLmxlbmd0aDsgcCsrKSB7XG5cdFx0XHRmb3IgKGxldCBxID0gMCwgc3RvcCA9IGludGVycG9sX2RhdGFfYXJyLmxlbmd0aCAtIHAgLSAxOyBxIDwgc3RvcDsgcSsrKSB7XG5cdFx0XHRcdGlmIChpbnRlcnBvbF9kYXRhX2FycltxXS50aW1lID09IGludGVycG9sX2RhdGFfYXJyW3EgKyAxXS50aW1lKSB7XG5cdFx0XHRcdFx0dmFyIHN3YXAgPSBpbnRlcnBvbF9kYXRhX2FycltxXTtcblx0XHRcdFx0XHRpbnRlcnBvbF9kYXRhX2FycltxXSA9IGludGVycG9sX2RhdGFfYXJyW3EgKyAxXTtcblx0XHRcdFx0XHRpbnRlcnBvbF9kYXRhX2FycltxICsgMV0gPSBzd2FwO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChpbnRlcnBvbF9kYXRhX2FycltxXS50aW1lID4gaW50ZXJwb2xfZGF0YV9hcnJbcSArIDFdLnRpbWUpIHtcblx0XHRcdFx0XHR2YXIgc3dhcCA9IGludGVycG9sX2RhdGFfYXJyW3FdO1xuXHRcdFx0XHRcdGludGVycG9sX2RhdGFfYXJyW3FdID0gaW50ZXJwb2xfZGF0YV9hcnJbcSArIDFdO1xuXHRcdFx0XHRcdGludGVycG9sX2RhdGFfYXJyW3EgKyAxXSA9IHN3YXA7XG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXHRcdH1cblx0XHQvL3NvcnRpbmcgZW5kc1xuXG5cblx0XHQvL2FkZCBTbm8vSUQgdG8gZWFjaCByb3dcblx0XHRmb3IgKGxldCBpZCA9IDA7IGlkIDwgaW50ZXJwb2xfZGF0YV9hcnIubGVuZ3RoOyBpZCsrKSB7XG5cdFx0XHRpbnRlcnBvbF9kYXRhX2FycltpZF0uc2VyaWFsID0gaW50ZXJwb2xfZGF0YV9hcnJbaWRdLmxhYmVsXG5cdFx0XHQvL3NubysrXG5cdFx0fVxuXG5cdFx0Zm9yIChsZXQgcGEgPSAwOyBwYSA8IGludGVycG9sX2RhdGFfYXJyLmxlbmd0aDsgcGErKykge1xuXHRcdFx0Zm9yIChsZXQgcWEgPSAwLCBzdG9wYSA9IGludGVycG9sX2RhdGFfYXJyLmxlbmd0aCAtIHBhIC0gMTsgcWEgPCBzdG9wYTsgcWErKykge1xuXHRcdFx0XHQvLyBpZihpbnRlcnBvbF9kYXRhX2FycltxYV0udGltZSA9PSBpbnRlcnBvbF9kYXRhX2FycltxYSsxXS50aW1lKXtcblx0XHRcdFx0Ly8gXHR2YXIgc3dhcGEgPSBpbnRlcnBvbF9kYXRhX2FycltxYV07XG5cdFx0XHRcdC8vIFx0aW50ZXJwb2xfZGF0YV9hcnJbcWFdID0gaW50ZXJwb2xfZGF0YV9hcnJbcWErMV07XG5cdFx0XHRcdC8vIFx0aW50ZXJwb2xfZGF0YV9hcnJbcWErMV0gPSBzd2FwYTtcblx0XHRcdFx0Ly8gfVxuXHRcdFx0XHRpZiAoaW50ZXJwb2xfZGF0YV9hcnJbcWFdLnNlcmlhbCA+IGludGVycG9sX2RhdGFfYXJyW3FhICsgMV0uc2VyaWFsKSB7XG5cdFx0XHRcdFx0dmFyIHN3YXBhID0gaW50ZXJwb2xfZGF0YV9hcnJbcWFdO1xuXHRcdFx0XHRcdGludGVycG9sX2RhdGFfYXJyW3FhXSA9IGludGVycG9sX2RhdGFfYXJyW3FhICsgMV07XG5cdFx0XHRcdFx0aW50ZXJwb2xfZGF0YV9hcnJbcWEgKyAxXSA9IHN3YXBhO1xuXHRcdFx0XHR9XG5cblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gZm9yKGxldCBsYWJlbG5vPTA7IGxhYmVsbm88aW50ZXJwb2xfZGF0YV9hcnIubGVuZ3RoOyBsYWJlbG5vKyspe1xuXHRcdC8vIFx0dmFyIG4gPSBpbnRlcnBvbF9kYXRhX2FycltsYWJlbG5vXS5sYWJlbC5zZWFyY2goXCItXCIpO1xuXHRcdC8vIFx0aWYobjwwKXtcblx0XHQvLyBcdFx0aW50ZXJwb2xfZGF0YV9hcnJbbGFiZWxub10uc2VyaWFsID0gaW50ZXJwb2xfZGF0YV9hcnJbbGFiZWxub10ubGFiZWxcblx0XHQvLyBcdH1cblx0XHQvLyBcdGVsc2Uge1xuXHRcdC8vIFx0XHRpbnRlcnBvbF9kYXRhX2FycltsYWJlbG5vXS5zZXJpYWwgPSBpbnRlcnBvbF9kYXRhX2FycltsYWJlbG5vXS5sYWJlbFtuKzFdXG5cdFx0Ly8gXHR9XG5cdFx0Ly8gfVxuXHRcdC8vU25vL0lEIGFkZGVkXG5cblx0XHR0aGlzLnNldFN0YXRlKHsgaW50ZXJwb2xhdGlvblJlc3VsdDogaW50ZXJwb2xfZGF0YV9hcnIgfSk7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJleHBvcnQtaW50ZXJwb2xcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblx0fVxuXHQvL2Z1bmN0aW9uIGZvciBnZXR0aW5nIGludGVycG9sYXRlZCBkYXRhIGVuZHNcblxuXHRjcmVhdGVUYWJsZSA9IGUgPT4ge1xuXHRcdGxldCB0ZW1wID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlLmludGVycG9sYXRpb25SZXN1bHQpKTtcblx0XHRjb25zb2xlLmxvZyhcIlRhYmxlIHRlbXA9IFxcblwiICsgSlNPTi5zdHJpbmdpZnkodGhpcy5zdGF0ZS5pbnRlcnBvbGF0aW9uUmVzdWx0KSk7XG5cdFx0dmFyIHRhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnRlcnBvbC10YWJsZVwiKTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRlbXAubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuXHRcdFx0dmFyIGNlbGxfc25vID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKVxuXHRcdFx0Y2VsbF9zbm8uaW5uZXJIVE1MID0gdGVtcFtpXS5zZXJpYWxcblx0XHRcdHJvdy5hcHBlbmRDaGlsZChjZWxsX3Nubylcblx0XHRcdHZhciBjZWxsX3hfbWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcblx0XHRcdHZhciBjZWxsX3lfbWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcblx0XHRcdHZhciBjZWxsX3dpZHRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcblx0XHRcdHZhciBjZWxsX2hlaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG5cdFx0XHR2YXIgY2VsbF9mcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG5cdFx0XHR2YXIgY2VsbF9sb3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcblx0XHRcdHZhciBjZWxsX29jY2x1ZGVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcblx0XHRcdHZhciBjZWxsX2dlbmVyYXRlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG5cdFx0XHR2YXIgY2VsbF9sYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG5cdFx0XHR2YXIgY2VsbF9wYXJlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuXHRcdFx0Y2VsbF94X21pbi5pbm5lckhUTUwgPSB0ZW1wW2ldLng7XG5cdFx0XHRjZWxsX3lfbWluLmlubmVySFRNTCA9IHRlbXBbaV0ueTtcblx0XHRcdGNlbGxfd2lkdGguaW5uZXJIVE1MID0gdGVtcFtpXS53aWR0aDtcblx0XHRcdGNlbGxfaGVpZ2h0LmlubmVySFRNTCA9IHRlbXBbaV0uaGVpZ2h0O1xuXHRcdFx0Y2VsbF9mcmFtZS5pbm5lckhUTUwgPSB0ZW1wW2ldLnRpbWU7XG5cdFx0XHRjZWxsX2xvc3QuaW5uZXJIVE1MID0gMDtcblx0XHRcdGNlbGxfb2NjbHVkZWQuaW5uZXJIVE1MID0gMDtcblx0XHRcdGNlbGxfZ2VuZXJhdGVkLmlubmVySFRNTCA9IDA7XG5cdFx0XHRjZWxsX2xhYmVsLmlubmVySFRNTCA9IHRlbXBbaV0ubGFiZWw7XG5cdFx0XHRjZWxsX3BhcmVudC5pbm5lckhUTUwgPSB0ZW1wW2ldLnBhcmVudE5hbWU7XG5cdFx0XHQvL3Jvdy5hcHBlbmRDaGlsZChjZWxsX2lkKTtcblx0XHRcdHJvdy5hcHBlbmRDaGlsZChjZWxsX3hfbWluKTtcblx0XHRcdHJvdy5hcHBlbmRDaGlsZChjZWxsX3lfbWluKTtcblx0XHRcdHJvdy5hcHBlbmRDaGlsZChjZWxsX3dpZHRoKTtcblx0XHRcdHJvdy5hcHBlbmRDaGlsZChjZWxsX2hlaWdodCk7XG5cdFx0XHRyb3cuYXBwZW5kQ2hpbGQoY2VsbF9mcmFtZSk7XG5cdFx0XHRyb3cuYXBwZW5kQ2hpbGQoY2VsbF9sb3N0KTtcblx0XHRcdHJvdy5hcHBlbmRDaGlsZChjZWxsX29jY2x1ZGVkKTtcblx0XHRcdHJvdy5hcHBlbmRDaGlsZChjZWxsX2dlbmVyYXRlZCk7XG5cdFx0XHRyb3cuYXBwZW5kQ2hpbGQoY2VsbF9sYWJlbCk7XG5cdFx0XHRyb3cuYXBwZW5kQ2hpbGQoY2VsbF9wYXJlbnQpO1xuXHRcdFx0dGFibGUuYXBwZW5kQ2hpbGQocm93KTtcblx0XHR9XG5cdFx0dGhpcy5kb3dubG9hZEludGVycG9sVGFibGUoKTtcblx0fVxuXG5cdGV4cG9ydF90YWJsZV90b19jc3YgPSAoaHRtbCwgZmlsZW5hbWUpID0+IHtcblx0XHR2YXIgY3N2ID0gW107XG5cdFx0dmFyIHJvd3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwidGFibGUgdHJcIik7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCByb3dzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgcm93ID0gW10sIGNvbHMgPSByb3dzW2ldLnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0ZCwgdGhcIik7XG5cdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNvbHMubGVuZ3RoOyBqKyspXG5cdFx0XHRcdHJvdy5wdXNoKGNvbHNbal0uaW5uZXJUZXh0KTtcblx0XHRcdGNzdi5wdXNoKHJvdy5qb2luKFwiLFwiKSk7XG5cdFx0fVxuXHRcdC8vIERvd25sb2FkIENTVlxuXHRcdHRoaXMuZG93bmxvYWRfY3N2KGNzdi5qb2luKFwiXFxuXCIpLCBmaWxlbmFtZSk7XG5cdH1cblxuXHRkb3dubG9hZF9jc3YgPSAoY3N2LCBmaWxlbmFtZSkgPT4ge1xuXHRcdHZhciBjc3ZGaWxlO1xuXHRcdHZhciBkb3dubG9hZExpbms7XG5cdFx0Ly8gQ1NWIEZJTEVcblx0XHRjc3ZGaWxlID0gbmV3IEJsb2IoW2Nzdl0sIHsgdHlwZTogXCJ0ZXh0L2NzdlwiIH0pO1xuXHRcdC8vIERvd25sb2FkIGxpbmtcblx0XHRkb3dubG9hZExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblx0XHQvLyBGaWxlIG5hbWVcblx0XHRkb3dubG9hZExpbmsuZG93bmxvYWQgPSBmaWxlbmFtZTtcblx0XHQvLyBXZSBoYXZlIHRvIGNyZWF0ZSBhIGxpbmsgdG8gdGhlIGZpbGVcblx0XHRkb3dubG9hZExpbmsuaHJlZiA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGNzdkZpbGUpO1xuXHRcdC8vIE1ha2Ugc3VyZSB0aGF0IHRoZSBsaW5rIGlzIG5vdCBkaXNwbGF5ZWRcblx0XHRkb3dubG9hZExpbmsuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdC8vIEFkZCB0aGUgbGluayB0byB5b3VyIERPTVxuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZG93bmxvYWRMaW5rKTtcblx0XHQvLyBMYW56YW1vc1xuXHRcdGRvd25sb2FkTGluay5jbGljaygpO1xuXHR9XG5cblx0ZG93bmxvYWRJbnRlcnBvbFRhYmxlID0gKCkgPT4ge1xuXHRcdHZhciBodG1sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInRhYmxlXCIpLm91dGVySFRNTDtcblx0XHR0aGlzLmV4cG9ydF90YWJsZV90b19jc3YoaHRtbCwgXCJ0YWJsZS5jc3ZcIik7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cblx0XHRjb25zdCB7IHJlc3VsdCwgaW5wdXQsIHBhcmFtcyB9ID0gdGhpcy5zdGF0ZVxuXHRcdGxldCBkYXRhU3RyID0gXCJkYXRhOnRleHQvanNvbjtjaGFyc2V0PXV0Zi04LFwiICsgZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8PlxuXHRcdFx0PENvbnRhaW5lciBmbHVpZCBjbGFzc05hbWU9XCJweS0zXCI+XG5cdFx0XHRcdFxuXHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwiZGlzcGxheS00ICB0ZXh0LWNlbnRlclwiPkNyb3dkTU9UOiBBIFZpZGVvIEFubm90YXRpb24gVG9vbDwvaDE+XG5cdFx0XHRcdDxSb3cgY2xhc3NOYW1lPVwibXktMyBjb2wteHMtMTIgY29sLWxnLTEwIG9mZnNldC1sZy0xXCI+XG5cdFx0XHRcdFx0PENvbD5cblx0XHRcdFx0XHRcdDxJbnN0cnVjdGlvbnMgLz5cblx0XHRcdFx0XHQ8L0NvbD5cblx0XHRcdFx0PC9Sb3c+XG5cdFx0XHRcdDxGb3JtIGNsYXNzTmFtZT1cIm1iLTIgY29sLXhzLTEyIGNvbC1sZy0xMCBvZmZzZXQtbGctMVwiIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG5cdFx0XHRcdFx0PEZvcm1Hcm91cD5cblx0XHRcdFx0XHRcdDxMYWJlbCBmb3I9XCJVUkxcIj48Yj5FbnRlciB0aGUgdmlkZW8gVVJMOjwvYj48L0xhYmVsPlxuXHRcdFx0XHRcdFx0PElucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVybFwiIHBsYWNlaG9sZGVyPVwiaHR0cDovLy4uLlwiIHZhbHVlPXtpbnB1dC51cmx9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gLz5cblx0XHRcdFx0XHQ8L0Zvcm1Hcm91cD5cblx0XHRcdFx0XHQ8Rm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0PExhYmVsIGZvcj1cIkFubm90YXRpb24gV2lkdGhcIj5WaWRlbyBXaWR0aDwvTGFiZWw+XG5cdFx0XHRcdFx0XHQ8SW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidmlkZW9XaWR0aFwiIHBsYWNlaG9sZGVyPVwibnVtYmVyXCIgdmFsdWU9e2lucHV0LnZpZGVvV2lkdGh9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gLz5cblx0XHRcdFx0XHQ8L0Zvcm1Hcm91cD5cblx0XHRcdFx0XHQ8Rm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0PExhYmVsIGZvcj1cImV4YW1wbGVGaWxlXCIgY2xhc3NOYW1lPVwicHItMlwiPlVwbG9hZCBEZWZhdWx0IEFubm90YXRpb25zPC9MYWJlbD48YnI+PC9icj5cblx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiZmlsZVwiIG5hbWU9XCJmaWxlXCIgaWQ9XCJleGFtcGxlRmlsZVwiIHJlZj17dGhpcy5maWxlSW5wdXR9IC8+XG5cdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XG5cdFx0XHRcdFx0PFJvdyBjbGFzc05hbWU9XCJteS0zIGNvbC14cy0xMiBjb2wtbGctMTAgb2Zmc2V0LWxnLTZcIj5cblx0XHRcdFx0XHRcdDxDb2w+XG5cdFx0XHRcdFx0XHRcdDxCdXR0b24+U3VibWl0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHQ8L0NvbD5cblx0XHRcdFx0XHQ8L1Jvdz5cblx0XHRcdFx0PC9Gb3JtPlxuXG5cdFx0XHRcdDxSb3cgY2xhc3NOYW1lPVwicHktM1wiIHN0eWxlPXt7IGJhY2tncm91bmQ6IFwicmdiKDI0NiwgMjQ2LCAyNDYpXCIgfX0+XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0PENvbD5cblx0XHRcdFx0XHRcdDxUd29EaW1lbnNpb25hbFZpZGVvXG5cdFx0XHRcdFx0XHRcdGtleT17XG5cdFx0XHRcdFx0XHRcdFx0YCR7SlNPTi5zdHJpbmdpZnkocGFyYW1zLnVybCl9XG5cdFx0XHRcdFx0XHRcdFx0ICR7SlNPTi5zdHJpbmdpZnkocGFyYW1zLmRlZmF1bHRBbm5vdGF0aW9ucyl9XG5cdFx0XHRcdFx0XHRcdFx0ICR7SlNPTi5zdHJpbmdpZnkocGFyYW1zLnZpZGVvV2lkdGgpfVxuXHRcdFx0XHRcdFx0XHRcdCAke0pTT04uc3RyaW5naWZ5KHBhcmFtcy5wcmV2aWV3SGVhZGVyKX1cblx0XHRcdFx0XHRcdFx0XHQgJHtKU09OLnN0cmluZ2lmeShwYXJhbXMucHJldmlld05vdGljZUxpc3QpfWBcblx0XHRcdFx0XHRcdFx0XHQvL3RoZSBsYXN0IHRocmVlIHRvIGJlIHJlcGxhY2VkIGJ5IHRoZSB0d28gYmVsb3cgYW5kIGNoYW5nZSBkZWZhdWx0QW5ub3RhdGlvbnMgdG8gYW5ub3RhdGlvbnNcblx0XHRcdFx0XHRcdFx0XHQvLyAgJHtKU09OLnN0cmluZ2lmeShwYXJhbXMuYW5ub3RhdGlvbldpZHRoKX1cblx0XHRcdFx0XHRcdFx0XHQvLyAgJHtKU09OLnN0cmluZ2lmeShwYXJhbXMucHJldmlld05vdGljZXMpfWBcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRvblN1Ym1pdD17dGhpcy5oYW5kbGVSZXN1bHRTdWJtaXR9XG5cdFx0XHRcdFx0XHRcdHVybD17cGFyYW1zLnVybH1cblx0XHRcdFx0XHRcdFx0Ly9tYWRlIGNoYW5nZXMgaGVyZSBhbm5vdGF0aW9ucyAob24gYm90aCBzaWRlcykgY2hhbmdlZCB0byBkZWZhdWx0QW5ub3RhdGlvblxuXHRcdFx0XHRcdFx0XHRkZWZhdWx0QW5ub3RhdGlvbnM9e3BhcmFtcy5kZWZhdWx0QW5ub3RhdGlvbnN9XG5cdFx0XHRcdFx0XHRcdHZpZGVvV2lkdGg9e3BhcmFtcy52aWRlb1dpZHRofVxuXHRcdFx0XHRcdFx0XHRwcmV2aWV3SGVhZGVyPXtwYXJhbXMucHJldmlld0hlYWRlcn1cblx0XHRcdFx0XHRcdFx0cHJldmlld05vdGljZUxpc3Q9e3BhcmFtcy5wcmV2aWV3Tm90aWNlTGlzdH1cblx0XHRcdFx0XHRcdFx0aGFzUmV2aWV3XG5cdFx0XHRcdFx0XHRcdGlzRW1wdHlDaGVja0VuYWJsZVxuXHRcdFx0XHRcdFx0XHRpc1NwbGl0RW5hYmxlXG5cdFx0XHRcdFx0XHRcdGlzU2hvd0hpZGVFbmFibGVcblx0XHRcdFx0XHRcdFx0bnVtQW5ub3RhdGlvbnNUb0JlQWRkZWQ9ezIwfVxuXHRcdFx0XHRcdFx0XHRlbXB0eUNoZWNrU3VibWlzc2lvbldhcm5pbmdUZXh0PXtwYXJhbXMuZW1wdHlDaGVja1N1Ym1pc3Npb25XYXJuaW5nVGV4dH1cblx0XHRcdFx0XHRcdFx0ZW1wdHlDaGVja0Fubm90YXRpb25JdGVtV2FybmluZ1RleHQ9e3BhcmFtcy5lbXB0eUNoZWNrQW5ub3RhdGlvbkl0ZW1XYXJuaW5nVGV4dH1cblx0XHRcdFx0XHRcdFx0ZW1wdHlBbm5vdGF0aW9uUmVtaW5kZXJUZXh0PXtwYXJhbXMuZW1wdHlBbm5vdGF0aW9uUmVtaW5kZXJUZXh0fVxuXHRcdFx0XHRcdFx0Ly9yZXBsYWNlIGV2ZXJ5dGhpbmcgYWZ0ZXIgZGVmYXVsdGFubm90YXRpb25zIHdpdGggdGhlIHdoYXQgaXMgZG93biBiZWxvd1xuXHRcdFx0XHRcdFx0Ly8gYW5ub3RhdGlvbldpZHRoPXtwYXJhbXMuYW5ub3RhdGlvbldpZHRofVxuXHRcdFx0XHRcdFx0Ly8gbnVtYmVyT2ZQYXJlbnRBbm5vdGF0aW9uc1RvQmVBZGRlZD17MTAwMDAwfVxuXHRcdFx0XHRcdFx0Ly8gcHJldmlld05vdGljZXM9e3BhcmFtcy5wcmV2aWV3Tm90aWNlc31cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9Db2w+XG5cdFx0XHRcdFx0e2NvbnNvbGUubG9nKFwiUGFzc2VkIGFubm90YXRpb25zOiBcIitKU09OLnN0cmluZ2lmeShwYXJhbXMuZGVmYXVsdEFubm90YXRpb25zKSl9XG5cdFx0XHRcdDwvUm93PlxuXG5cdFx0XHRcdDxSb3cgY2xhc3NOYW1lPVwibXktMyBjb2wteHMtMTJcIj5cblx0XHRcdFx0XHQ8Q29sPlxuXHRcdFx0XHRcdFx0PEJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIj48Q1NWTGluayBkYXRhPXtKU09OLnN0cmluZ2lmeShyZXN1bHQsIG51bGwsIDIpfSBzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fT5Eb3dubG9hZCBSYXcgRGF0YTwvQ1NWTGluaz48L0J1dHRvbj5cblx0XHRcdFx0XHRcdHtjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXN1bHQsIG51bGwsIDIpKX1cblx0XHRcdFx0XHQ8L0NvbD5cblx0XHRcdFx0XHQ8Q29sPlxuXHRcdFx0XHRcdFx0PEJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBvbkNsaWNrPXt0aGlzLmdldEludGVycG9sYXRlZERhdGF9PkdlbmVyYXRlIEludGVycG9sYXRlZCBEYXRhPC9CdXR0b24+XG5cdFx0XHRcdFx0PC9Db2w+XG5cdFx0XHRcdFx0PENvbD5cblx0XHRcdFx0XHRcdDxCdXR0b24gaWQ9XCJleHBvcnQtaW50ZXJwb2xcIiBjb2xvcj0ncHJpbWFyeScgc3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogJ25vbmUnLCBjb2xvcjogJyNmZmZmZmYnLFxuXHRcdFx0XHRcdFx0XHRib3JkZXI6IGAxcHggc29saWRgLFxuXHRcdFx0XHRcdFx0fX0gb25DbGljaz17dGhpcy5jcmVhdGVUYWJsZX0+RG93bmxvYWQgSW50ZXJwb2xhdGVkIERhdGE8L0J1dHRvbj5cblx0XHRcdFx0XHQ8L0NvbD5cblx0XHRcdFx0PC9Sb3c+XG5cblx0XHRcdFx0ey8qIGNyZWF0ZSBpbnZpc2libGUgdGFibGUgZm9yIGludGVycG9sYXRlZCBkYXRhICovfVxuXHRcdFx0XHQ8Um93IGNsYXNzTmFtZT1cIm15LTMgY29sLXhzLTEyXCI+XG5cdFx0XHRcdFx0PENvbD5cblx0XHRcdFx0XHRcdDx0YWJsZSBpZD1cImludGVycG9sLXRhYmxlXCIgc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnIH19PlxuXHRcdFx0XHRcdFx0XHQ8dGJvZHk+XG5cdFx0XHRcdFx0XHRcdFx0PHRyPlxuXHRcdFx0XHRcdFx0XHRcdFx0ey8qIDx0aD5JRDwvdGg+ICovfVxuXHRcdFx0XHRcdFx0XHRcdFx0PHRoID5UcmFjayBJRDwvdGg+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGg+eC1taW48L3RoPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHRoPnktbWluPC90aD5cblx0XHRcdFx0XHRcdFx0XHRcdDx0aD53aWR0aDwvdGg+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGg+aGVpZ2h0PC90aD5cblx0XHRcdFx0XHRcdFx0XHRcdDx0aD5GcmFtZTwvdGg+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGg+TG9zdDwvdGg+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGg+T2NjbHVkZWQ8L3RoPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHRoPkdlbmVyYXRlZDwvdGg+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGg+TGFiZWw8L3RoPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHRoPlBhcmVudDwvdGg+XG5cdFx0XHRcdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0XHRcdFx0PC90Ym9keT5cblx0XHRcdFx0XHRcdDwvdGFibGU+XG5cdFx0XHRcdFx0PC9Db2w+XG5cdFx0XHRcdDwvUm93PlxuXG5cblx0XHRcdFx0PFJvdyBjbGFzc05hbWU9XCJteS0zIGNvbC14cy0xMiBjb2wtbGctMTAgb2Zmc2V0LWxnLTFcIj5cblx0XHRcdFx0XHQ8Q29sPlxuXHRcdFx0XHRcdFx0PENhcmQ+PENhcmRCb2R5PjxhIGhyZWY9e2RhdGFTdHJ9IGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1sZ1wiIGRvd25sb2FkPXtgJHtwYXJhbXMudXJsfS5qc29uYH0+IERvd25sb2FkIHRoZSBBbm5vdGF0aW9uczwvYT48L0NhcmRCb2R5PjwvQ2FyZD5cblxuXG5cdFx0XHRcdFx0PC9Db2w+ICA8L1Jvdz5cblxuXG5cblx0XHRcdDwvQ29udGFpbmVyPlxuPC8+XG5cdFx0KTtcblxuXG5cblx0fVxufVxuZXhwb3J0IGRlZmF1bHQgRGVtbztcbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzcyc7XG5pbXBvcnQgeyBCdXR0b25Hcm91cCwgQnV0dG9uLCBDb2xsYXBzZSB9IGZyb20gJ3JlYWN0c3RyYXAnO1xuaW1wb3J0IHsgQ2FyZCwgQ2FyZEJvZHksIENhcmRUaXRsZSwgQ2FyZFN1YnRpdGxlLCBDYXJkVGV4dCB9IGZyb20gJ3JlYWN0c3RyYXAnO1xuaW1wb3J0IFJlYWN0UGxheWVyIGZyb20gJ3JlYWN0LXBsYXllcidcblxuaW1wb3J0IHsgTWRBZGQsIE1kQ2FsbFNwbGl0LCBNZERlbGV0ZSwgTWRSZWRvLCBNZFVuZG8sIE1kQXJyb3dGb3J3YXJkfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIjtcbmltcG9ydCB7IElvTWRFeWVPZmYsIElvTWRFeWUgfSBmcm9tIFwicmVhY3QtaWNvbnMvaW9cIjtcbmltcG9ydCB7IEZhQ2hldnJvbkRvd24gfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmltcG9ydCAnLi92aWRlb0luc3RydWN0aW9uLmNzcyc7XG5cblxuY2xhc3MgSW5zdHJ1Y3Rpb25zIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5zdGF0ZSA9IHsgY29sbGFwc2U6IGZhbHNlIH07XG5cdH1cblxuXHR0b2dnbGUgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNvbGxhcHNlOiAhdGhpcy5zdGF0ZS5jb2xsYXBzZSB9KTtcbiAgfVxuXG5cdHJlbmRlcigpe1xuXHRcdHJldHVybihcblx0XHRcdFx0PGRpdj5cbiAgICAgICAgPENvbGxhcHNlIGlzT3Blbj17dGhpcy5zdGF0ZS5jb2xsYXBzZX0+XG4gICAgICAgICAgPENhcmQ+XG4gICAgICAgICAgICA8Q2FyZEJvZHk+XG5cdFx0XHRcdFx0XHRcdDxDYXJkVGl0bGU+PGI+TW90aXZhdGlvbjwvYj48L0NhcmRUaXRsZT5cblx0XHRcdFx0XHRcdFx0PENhcmRUZXh0IGNsYXNzTmFtZT1cIm1iLTVcIj5cblx0XHRcdFx0XHRcdFx0VGhlIHJlc3VsdCBvZiB0aGlzIHRhc2sgd2lsbCBlbXBvd2VyIHJlc2VhcmNoZXJzIHRvIHRyYWNrIGNlbGxzIGluIGRpZmZlcmVudCBsaWZlIGN5Y2xlIHBoYXNlcyBhbmQgY29udHJpYnV0ZSB0b3dhcmRzIHRyZWF0aW5nIGFuZCBwcmV2ZW50aW5nIGRpc2Vhc2VzLCBsZWFkaW5nIHRvIG5ldyBiaW8taW5zcGlyZWQgdGVjaG5vbG9neSwgYW5kIGFuc3dlcmluZ1xuXHRcdFx0XHRcdFx0XHRiYXNpYyBzY2llbmNlIHF1ZXN0aW9ucyBhYm91dCBmdW5kYW1lbnRhbCBiaW9sb2dpY2FsIHByb2Nlc3Nlcy5cblx0XHRcdFx0XHRcdFx0PC9DYXJkVGV4dD5cblx0XHRcdFx0XHRcdFx0PENhcmRUaXRsZT48Yj5UYXNrPC9iPjwvQ2FyZFRpdGxlPlxuXHRcdFx0PENhcmRUZXh0IGNsYXNzTmFtZT1cIm1iLTNcIj5Zb3VyIHRhc2sgaXMgdG8gPGI+IGFubm90YXRlIHRoZSB2aWRlbyBieSBkcmF3aW5nIGJvdW5kaW5nIGJveGVzIGFyb3VuZCBlYWNoIGJpb2xvZ2ljYWwgY2VsbCBhbmQgdHJhY2tpbmcgdGhlIGNlbGxzIHByZWNpc2VseTwvYj4gKGFzIHNob3duIGluIHRoZSB2aWRlbykuIFlvdSB3aWxsIGFkanVzdCB0aGUgYm94ZXMgYXQgZGlmZmVyZW50IGludGVydmFscyBvZiB0aGUgdmlkZW8sIGFuZCB0aGUgdG9vbCB3aWxsIGF1dG9tYXRpY2FsbHkgZmlsbCB0aGUgZ2FwcyBpbiB0aGUgdmlkZW8uIFlvdSBtYXksIGhvd2V2ZXIsIGhhdmUgdG8gY29ycmVjdCBhbnkgaW1wZXJmZWN0aW9ucyBpbiB0aGUgYW5ub3RhdGlvbnMgYXV0b2NvbXBsZXRlZCBieSB0aGUgdG9vbCB0byBlbnN1cmUgdGhhdCB0aGUgZ2FwcyBhcmUgY29ycmVjdGx5IGFubm90YXRlZC4gIDwvQ2FyZFRleHQ+IFxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1iLTUgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHRcdDxmaWd1cmUgY2xhc3NOYW1lPVwiZmlndXJlXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8UmVhY3RQbGF5ZXIgdXJsPSdodHRwczovL3lvdXR1LmJlL2RucVM3dU9XY09VJyBoZWlnaHQ9eycxNDAnfSB3aWR0aD17JzEwMCUnfSBwbGF5aW5nIGxvb3AgbXV0ZWQgLz5cblx0XHRcdFx0XHRcdFx0XHQgIDxmaWdjYXB0aW9uIGNsYXNzTmFtZT1cImZpZ3VyZS1jYXB0aW9uXCI+QmVmb3JlPC9maWdjYXB0aW9uPlxuXHRcdFx0XHRcdFx0XHRcdDwvZmlndXJlPlxuXHRcdFx0XHRcdFx0XHRcdDxNZEFycm93Rm9yd2FyZCBzdHlsZT17e21hcmdpbjogXCIwcHggMTBweCAzMHB4IDEwcHhcIn19IC8+XG5cdFx0XHRcdFx0XHRcdFx0PGZpZ3VyZSBjbGFzc05hbWU9XCJmaWd1cmVcIj5cblx0XHRcdFx0XHRcdFx0XHQgIDxSZWFjdFBsYXllciB1cmw9J2h0dHBzOi8veW91dHUuYmUvQmNYbWRRclVlaUknIGhlaWdodD17JzE0MCd9IHdpZHRoPXsnMTAwJSd9IHBsYXlpbmcgbG9vcCBtdXRlZCAvPlxuXHRcdFx0XHRcdFx0XHRcdCAgPGZpZ2NhcHRpb24gY2xhc3NOYW1lPVwiZmlndXJlLWNhcHRpb25cIj5BZnRlcjwvZmlnY2FwdGlvbj5cblx0XHRcdFx0XHRcdFx0XHQ8L2ZpZ3VyZT5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8Q2FyZFRpdGxlIGNsYXNzTmFtZT1cIm1iLTRcIj48Yj5JbnN0cnVjdGlvbnM8L2I+PC9DYXJkVGl0bGU+XG5cdFx0XHQ8Q2FyZFN1YnRpdGxlIGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGRcIj5TdGVwIDE6IEJlZm9yZSB5b3Ugc3RhcnQgPC9DYXJkU3VidGl0bGU+XG5cdFx0XHQ8Q2FyZFRleHQgY2xhc3NOYW1lPVwibWItNFwiPllvdSBtdXN0IDxiPiBiZWdpbiB0aGlzIHRhc2sgZnJvbSB0aGUgc3RhcnQgb2YgdGhlIHZpZGVvPC9iPiBhbmQgYW5ub3RhdGUgb25lIGNlbGwgYXQgYSB0aW1lLiBZb3UgY2FuIGFsc28gYWRqdXN0IHRoZSBzcGVlZCBvZiB0aGUgdmlkZW8gYnkgY2xpY2tpbmcgdGhlIFwieDFcIiBidXR0b24gbG9jYXRlZCBiZWxvdyB0aGUgY2VsbCB2aWRlby4gPC9DYXJkVGV4dD5cblx0XHRcdFx0XHRcdFx0PENhcmRTdWJ0aXRsZSBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkXCI+U3RlcCAyOiA8YiBjbGFzc05hbWU9XCJ0ZXh0LXVwcGVyY2FzZSB0ZXh0LWRhbmdlclwiPiBBZGQgPC9iPiBhIG5ldyBib3VuZGluZyBib3ggPC9DYXJkU3VidGl0bGU+XG5cdFx0XHQ8Q2FyZFRleHQgY2xhc3NOYW1lPVwibWItNCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+Q2xpY2sgdGhlICA8QnV0dG9uIGRpc2FibGVkIHN0eWxlPXt7b3BhY2l0eTogMX19IGNvbG9yPVwicHJpbWFyeVwiIGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgaW5zdHJ1Yy1idXR0b25cIj48TWRBZGQvPiBBZGQgYSBOZXcgQm94PC9CdXR0b24+IGJ1dHRvbiB0byBkcmF3IGEgbmV3IGJvdW5kaW5nIGJveCBhcm91bmQgYSBjZWxsLiBUaGVuLCBkcmFnIGFuZCByZXNpemUgdGhlIGJveCB0byBib3VuZCB0aGF0IGNlbGwuPC9DYXJkVGV4dD5cblx0XHRcdFx0XHRcdFx0PENhcmRTdWJ0aXRsZSBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkXCI+U3RlcCAzOiBUcmFjayBhbmQgYm91bmQgPGIgY2xhc3NOYW1lPVwidGV4dC11cHBlcmNhc2UgdGV4dC1kYW5nZXJcIj5PTkxZPC9iPiB0aGUgY2VsbCB0aGF0IHlvdSBjaG9zZTwvQ2FyZFN1YnRpdGxlPlxuXHRcdFx0PENhcmRUZXh0IGNsYXNzTmFtZT1cIm1iLTRcIj5QcmVzcyB0aGUgcGxheSBidXR0b24sIGFuZCB3aGVuIHRoZSBjZWxsIG1vdmVzLCBwYXVzZSB0aGUgdmlkZW8uIFRoZW4sIGRyYWcgYW5kIHJlc2l6ZSB0aGUgYm94IHRvIGVuc3VyZSB0aGUgY2VsbCBpcyBib3VuZGVkIDxiIGNsYXNzTmFtZT1cInRleHQtdXBwZXJjYXNlIHRleHQtZGFuZ2VyXCI+cHJlY2lzZWx5PC9iPi4gQ29udGludWUgdGhpcyBwcm9jZXNzIHRpbGwgdGhlIDxiPmVuZCBvZiB0aGUgdmlkZW88L2I+LiA8Yj5Ob3RlPC9iPjogVGhlIHRvb2wgd2lsbCBhdXRvbWF0aWNhbGx5IGZpbGwgdGhlIGFubm90YXRpb25zIGluIHRoZSBtaXNzaW5nIGZyYW1lcyBiZXR3ZWVuIHRoZSBpbnRlcnZhbHMgeW91IGFubm90YXRlZC4gWW91IG11c3QgcmVwbGF5IHRoZSB2aWRlbyB0byB2ZXJpZnkgdGhhdCB0aGUgYXV0b21hdGVkIGFubm90YXRpb24gaXMgYWNjdXJhdGUgLS0gaWYgbm90LCBwYXVzZSB0aGUgdmlkZW8gYW5kIGFkanVzdCB0aGUgYm94IHRvIGNvcnJlY3QgdGhlIGFubm90YXRpb24uPC9DYXJkVGV4dD5cblx0XHRcdFx0XHRcdFx0PENhcmRTdWJ0aXRsZSBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkXCI+IFN0ZXAgNGE6IDxiIGNsYXNzTmFtZT1cInRleHQtdXBwZXJjYXNlIHRleHQtZGFuZ2VyXCI+IFNwbGl0IDwvYj4gdGhlIGJvdW5kaW5nIGJveCAoaWYgYXBwbGljYWJsZSk8L0NhcmRTdWJ0aXRsZT5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCIgc3R5bGU9e3ttYXJnaW5Cb3R0b206IDV9fT5JZiB0aGUgY2VsbCBzcGxpdHMgaW50byB0d28gY2VsbHMsIHVzZSB0aGUgPEJ1dHRvbiBkaXNhYmxlZCBzdHlsZT17e29wYWNpdHk6IDF9fSBvdXRsaW5lIGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgaW5zdHJ1Yy1idXR0b25cIj48TWRDYWxsU3BsaXQvPiBTcGxpdDwvQnV0dG9uPiBidXR0b24gdG8gc3BsaXQgdGhlIHBhcmVudCBib3VuZGluZyBib3ggaW50byB0d28gY2hpbGRyZW4gYm94ZXMgYW5kIGFkanVzdCB0aGUgbmV3IGJveGVzIHRvIGZpdCB0aGUgbmV3IGNlbGxzLjwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYi0yIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cblx0XHRcdFxuXHRcdFx0XHRcdFx0XHRcdDxmaWd1cmUgY2xhc3NOYW1lPVwiZmlndXJlXCI+XG5cdFx0XHRcdFx0XHRcdFx0ICA8UmVhY3RQbGF5ZXIgdXJsPSdodHRwczovL3lvdXR1LmJlL0hFQnIzTzlaNDdJJyBoZWlnaHQ9eycxMjAnfSB3aWR0aD17JzEwMCUnfSBwbGF5aW5nIGxvb3AgbXV0ZWQgLz5cblx0XHRcdFx0XHRcdFx0XHQgIDxmaWdjYXB0aW9uIGNsYXNzTmFtZT1cImZpZ3VyZS1jYXB0aW9uXCI+QmVmb3JlPC9maWdjYXB0aW9uPlxuXHRcdFx0XHRcdFx0XHRcdDwvZmlndXJlPlxuXHRcdFx0XHRcdFx0XHRcdDxNZEFycm93Rm9yd2FyZCBzdHlsZT17e21hcmdpbjogXCIwcHggMTBweCAzMHB4IDEwcHhcIn19IC8+XG5cdFx0XHRcdFx0XHRcdFx0PGZpZ3VyZSBjbGFzc05hbWU9XCJmaWd1cmVcIj5cblx0XHRcdFx0XHRcdFx0XHQgIDxSZWFjdFBsYXllciB1cmw9J2h0dHBzOi8veW91dHUuYmUvOUVEUWRlc29scTAnIGhlaWdodD17JzEyMCd9IHdpZHRoPXsnMTAwJSd9IHBsYXlpbmcgbG9vcCBtdXRlZCAvPlxuXHRcdFx0XHRcdFx0XHRcdCAgPGZpZ2NhcHRpb24gY2xhc3NOYW1lPVwiZmlndXJlLWNhcHRpb25cIj5BZnRlcjwvZmlnY2FwdGlvbj5cblx0XHRcdFx0XHRcdFx0XHQ8L2ZpZ3VyZT5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxDYXJkU3VidGl0bGUgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZFwiPlN0ZXAgNGI6IDxiIGNsYXNzTmFtZT1cInRleHQtdXBwZXJjYXNlIHRleHQtZGFuZ2VyXCI+IEhpZGUgPC9iPiB0aGUgYm91bmRpbmcgYm94IGlmIHRoZSBjZWxsIGxlYXZlcyB0aGUgdmlkZW8gZnJhbWUgb3IgaXMgb2JzY3VyZWQgKGlmIGFwcGxpY2FibGUpPC9DYXJkU3VidGl0bGU+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiIHN0eWxlPXt7bWFyZ2luQm90dG9tOiA1fX0+SWYgdGhlIGNlbGwgbGVhdmVzIHRoZSB2aWRlbyBmcmFtZSBvciBpcyBvYnNjdXJlZCBieSBvdGhlciBvYmplY3RzLCB1c2UgdGhlIDxCdXR0b24gZGlzYWJsZWQgc3R5bGU9e3tvcGFjaXR5OiAxfX0gb3V0bGluZSBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGluc3RydWMtYnV0dG9uXCI+PElvTWRFeWVPZmYvPiBIaWRlIDwvQnV0dG9uPiBidXR0b24gdG8gaGlkZSBpdHMgYm94LiA8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYi0yIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxmaWd1cmUgY2xhc3NOYW1lPVwiZmlndXJlXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQgIDxSZWFjdFBsYXllciB1cmw9J2h0dHBzOi8veW91dHUuYmUvWXhpbEhxa0tyZmMnIGhlaWdodD17JzEyMCd9IHdpZHRoPXsnMTAwJSd9IHBsYXlpbmcgbG9vcCBtdXRlZCAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0ICA8ZmlnY2FwdGlvbiBjbGFzc05hbWU9XCJmaWd1cmUtY2FwdGlvblwiPkJlZm9yZTwvZmlnY2FwdGlvbj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZmlndXJlPlxuXHRcdFx0XHRcdFx0XHRcdFx0PE1kQXJyb3dGb3J3YXJkIHN0eWxlPXt7bWFyZ2luOiBcIjBweCAxMHB4IDMwcHggMTBweFwifX0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdDxmaWd1cmUgY2xhc3NOYW1lPVwiZmlndXJlXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQgIDxSZWFjdFBsYXllciB1cmw9J2h0dHBzOi8veW91dHUuYmUvMGVjbGNyRG9KVHcnIGhlaWdodD17JzEyMCd9IHdpZHRoPXsnMTAwJSd9IHBsYXlpbmcgbG9vcCBtdXRlZCAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0ICA8ZmlnY2FwdGlvbiBjbGFzc05hbWU9XCJmaWd1cmUtY2FwdGlvblwiPkFmdGVyPC9maWdjYXB0aW9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9maWd1cmU+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8Q2FyZFN1YnRpdGxlIGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGRcIj5TdGVwIDU6IFN1Ym1pdCB0aGUgdGFzazwvQ2FyZFN1YnRpdGxlPlxuXHRcdFx0PENhcmRUZXh0IGNsYXNzTmFtZT1cImFsaWduLWl0ZW1zLWNlbnRlciBtYi01XCI+QWZ0ZXIgeW91IGhhdmUgYW5ub3RhdGVkIHRoZSBjZWxsIGluIHRoZSBlbnRpcmUgdmlkZW8sIHJlcGxheSB0aGUgZW50aXJlIHZpZGVvIHRvIGNoZWNrIHlvdXIgd29yay4gSWYgdGhlIGFubm90YXRpb25zIGFyZSBub3QgY29ycmVjdCwgcGF1c2UgdGhlIHZpZGVvLCBhbmQgYWRqdXN0IHRoZSBib3hlcy4gUmVwZWF0IHRoaXMgcHJvY2VzcyB1bnRpbCBhbGwgY2VsbHMgaW4gdGhlIHZpZGVvIGFyZSBhbm5vdGF0ZWQuIE9uY2UgeW91IGVuc3VyZSB0aGF0IHRoZSBhbm5vdGF0aW9ucyBhcmUgY29ycmVjdCwgY2xpY2sgdGhlIDxCdXR0b24gZGlzYWJsZWQgc3R5bGU9e3tvcGFjaXR5OiAxfX0gY2xhc3NOYW1lPVwiYWxpZ24taXRlbXMtY2VudGVyIGluc3RydWMtYnV0dG9uXCIgPlN1Ym1pdDwvQnV0dG9uPiBidXR0b24gdG8gc3VibWl0IHRoZSByZXN1bHRzLiBDbGljayBvbiB0aGUgPEJ1dHRvbiBkaXNhYmxlZCBzdHlsZT17e29wYWNpdHk6IDF9fSBjbGFzc05hbWU9XCJhbGlnbi1pdGVtcy1jZW50ZXIgaW5zdHJ1Yy1idXR0b25cIiA+IERvd25sb2FkIHRoZSBhbm5vdGF0aW9ucyA8L0J1dHRvbj4gYnV0dG9uIHRvIHNhdmUgdGhlIHJlc3VsdHMuIDwvQ2FyZFRleHQ+ICA8Q2FyZFRleHQgY2xhc3NOYW1lPVwibWItNVwiPiA8Yj5Ob3RlPC9iPjogWW91IGNhbiBkZWxldGUgYW5kIHJlZG8gdGhlIGFubm90YXRpb24gb3IgZ28gYmFjayBhbmQgZm9ydGggaW4gdGhlIHZpZGVvIGFzIG1hbnkgdGltZXMgYXMgeW91IGxpa2UgdG8gZW5zdXJlIHRoZSBjZWxsIGlzIGNvcnJlY3RseSBhbm5vdGF0ZWQgZnJvbSB0aGUgc3RhcnQgdG8gdGhlIGVuZCBvZiB0aGUgdmlkZW8uPC9DYXJkVGV4dD5cblx0XHRcdFxuXHRcdFxuXG5cdFx0XHQ8Q2FyZFRpdGxlPjxiPkRlbW8gb2YgdGhlIFRvb2w8L2I+PC9DYXJkVGl0bGU+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIiBzdHlsZT17e21hcmdpbkJvdHRvbTogMTB9fT5IZXJlIGlzIGEgc2hvcnQgZGVtbyBvZiB0aGUgdGFzazo8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxuXHRcdFx0XG5cdFx0XHQ8UmVhY3RQbGF5ZXIgdXJsPSdodHRwczovL3lvdXR1LmJlL1d2LW1DV00tS0l3JyBoZWlnaHQ9eyc0MDBweCd9IHdpZHRoPXsnODAwcHgnfSBjb250cm9scyBtdXRlZCAvPlxuXHRcdFx0XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cblx0XHQgICBcblx0XHQgICAgXG5cdFx0XHQ8Q2FyZFRpdGxlIGNsYXNzTmFtZT1cInB0LTEwXCI+PGI+T3RoZXIgQnV0dG9uczo8L2I+PC9DYXJkVGl0bGU+XG5cdFx0XHRcdFx0XHRcdDxkbCBjbGFzc05hbWU9XCJyb3dcIj5cblx0XHRcdFx0XHRcdFx0ICA8ZHQgY2xhc3NOYW1lPVwiY29sLXNtLTIgdGV4dC1yaWdodFwiPjxCdXR0b25Hcm91cD48QnV0dG9uIGRpc2FibGVkIHN0eWxlPXt7b3BhY2l0eTogMX19IG91dGxpbmUgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPjxNZFVuZG8vPjwvQnV0dG9uPjxCdXR0b24gZGlzYWJsZWQgc3R5bGU9e3tvcGFjaXR5OiAxfX0gb3V0bGluZSBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+PE1kUmVkby8+PC9CdXR0b24+PC9CdXR0b25Hcm91cD48L2R0PlxuXHRcdFx0XHRcdFx0XHQgIDxkZCBjbGFzc05hbWU9XCJjb2wtc20tMTAgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiIHN0eWxlPXt7bWFyZ2luQm90dG9tOiAwfX0+Y2FuIGJlIHVzZWQgdG8gcmVkbyBhbmQgdW5kbyB0aGUgY2hhbmdlcy48L2RkPlxuXHRcdFx0XHRcdFx0XHRcdDxkdCBjbGFzc05hbWU9XCJjb2wtc20tMiB0ZXh0LXJpZ2h0XCI+PEJ1dHRvbiBkaXNhYmxlZCBzdHlsZT17e29wYWNpdHk6IDF9fSBvdXRsaW5lIGNsYXNzTmFtZT1cImluc3RydWMtZGVsZXRlLWJ1dHRvblwiPjxNZERlbGV0ZS8+PC9CdXR0b24+PC9kdD5cblx0XHRcdDxkZCBjbGFzc05hbWU9XCJjb2wtc20tMTAgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiIHN0eWxlPXt7bWFyZ2luQm90dG9tOiAwfX0+Y2FuIGJlIHVzZWQgdG8gZGVsZXRlIGEgYm91bmRpbmcgYm94IG9yIGEgdHJhamVjdG9yeSAodHJhY2tpbmcgYW5ub3RhdGlvbikuPC9kZD5cblx0XHRcdFx0XHRcdFx0XHQ8ZHQgY2xhc3NOYW1lPVwiY29sLXNtLTIgdGV4dC1yaWdodFwiPlJlc2l6aW5nICYgVHJhY2tpbmcgaGlzdG9yeSA8RmFDaGV2cm9uRG93bi8+PC9kdD5cblx0XHRcdFx0XHRcdFx0ICA8ZGQgY2xhc3NOYW1lPVwiY29sLXNtLTEwIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIiBzdHlsZT17e21hcmdpbkJvdHRvbTogMH19PiBjYW4gYmUgdXNlZCB0byB0cmFjayB5b3VyIGFubm90YXRpb25zLjwvZGQ+XG5cdFx0XHRcdFx0XHRcdDwvZGw+XG5cdFx0XHRcdFx0XHQ8L0NhcmRCb2R5PlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPC9Db2xsYXBzZT5cblx0XHRcdFx0PEJ1dHRvbiBibG9jayBjb2xvcj1cInNlY29uZGFyeVwiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlfT57dGhpcy5zdGF0ZS5jb2xsYXBzZT8gXCJIaWRlXCI6IFwiU2hvd1wiIH0gSW5zdHJ1Y3Rpb25zPC9CdXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXHQpfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnN0cnVjdGlvbnM7XG4iXSwic291cmNlUm9vdCI6IiJ9