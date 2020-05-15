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
        defaultAnnotations = [];

        if (result.annotations) {
          if (result.annotations.length === 0) {
            defaultAnnotations = this.isJsonString(input.defaultAnnotations) ? JSON.parse(input.defaultAnnotations) : "[]";
          } else {
            defaultAnnotations = JSON.parse(JSON.stringify(result.annotations));
          }
        } //defaultAnnotations = this.isJsonString(input.defaultAnnotations) ? JSON.parse(input.defaultAnnotations) : "[]";


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
        lineNumber: 537,
        columnNumber: 5
      }
    }, __jsx("h1", {
      className: "display-4  text-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 539,
        columnNumber: 6
      }
    }, "CrowdMOT: A Video Annotation Tool"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      className: "my-3 col-xs-12 col-lg-10 offset-lg-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 540,
        columnNumber: 6
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 541,
        columnNumber: 7
      }
    }, __jsx(_videoInstruction_VideoInstruction__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 542,
        columnNumber: 8
      }
    }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Form"], {
      className: "mb-2 col-xs-12 col-lg-10 offset-lg-1",
      onSubmit: this.handleSubmit,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 545,
        columnNumber: 6
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 546,
        columnNumber: 7
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Label"], {
      for: "URL",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 547,
        columnNumber: 8
      }
    }, __jsx("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 547,
        columnNumber: 25
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
        lineNumber: 548,
        columnNumber: 8
      }
    })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 550,
        columnNumber: 7
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Label"], {
      for: "Annotation Width",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 551,
        columnNumber: 8
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
        lineNumber: 552,
        columnNumber: 8
      }
    })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 554,
        columnNumber: 7
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Label"], {
      for: "exampleFile",
      className: "pr-2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 555,
        columnNumber: 8
      }
    }, "Upload Default Annotations"), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 555,
        columnNumber: 84
      }
    }), __jsx("input", {
      type: "file",
      name: "file",
      id: "exampleFile",
      ref: this.fileInput,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 556,
        columnNumber: 8
      }
    })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      className: "my-3 col-xs-12 col-lg-10 offset-lg-6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 558,
        columnNumber: 7
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 559,
        columnNumber: 8
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 560,
        columnNumber: 9
      }
    }, "Submit")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      className: "py-3",
      style: {
        background: "rgb(246, 246, 246)"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 565,
        columnNumber: 6
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 567,
        columnNumber: 7
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
        lineNumber: 568,
        columnNumber: 8
      }
    })), console.log("Passed annotations: " + JSON.stringify(params.defaultAnnotations))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      className: "my-3 col-xs-12",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 603,
        columnNumber: 6
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 604,
        columnNumber: 7
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      color: "primary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 605,
        columnNumber: 8
      }
    }, __jsx(react_csv__WEBPACK_IMPORTED_MODULE_4__["CSVLink"], {
      data: JSON.stringify(result, null, 2),
      style: {
        color: 'white'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 605,
        columnNumber: 32
      }
    }, "Download Raw Data")), console.log(JSON.stringify(result, null, 2))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 608,
        columnNumber: 7
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      color: "primary",
      onClick: this.getInterpolatedData,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 609,
        columnNumber: 8
      }
    }, "Generate Interpolated Data")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 611,
        columnNumber: 7
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
        lineNumber: 612,
        columnNumber: 8
      }
    }, "Download Interpolated Data"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      className: "my-3 col-xs-12",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 620,
        columnNumber: 6
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 621,
        columnNumber: 7
      }
    }, __jsx("table", {
      id: "interpol-table",
      style: {
        display: 'none'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 622,
        columnNumber: 8
      }
    }, __jsx("tbody", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 623,
        columnNumber: 9
      }
    }, __jsx("tr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 624,
        columnNumber: 10
      }
    }, __jsx("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 626,
        columnNumber: 11
      }
    }, "Track ID"), __jsx("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 627,
        columnNumber: 11
      }
    }, "x-min"), __jsx("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 628,
        columnNumber: 11
      }
    }, "y-min"), __jsx("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 629,
        columnNumber: 11
      }
    }, "width"), __jsx("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 630,
        columnNumber: 11
      }
    }, "height"), __jsx("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 631,
        columnNumber: 11
      }
    }, "Frame"), __jsx("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 632,
        columnNumber: 11
      }
    }, "Lost"), __jsx("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 633,
        columnNumber: 11
      }
    }, "Occluded"), __jsx("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 634,
        columnNumber: 11
      }
    }, "Generated"), __jsx("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 635,
        columnNumber: 11
      }
    }, "Label"), __jsx("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 636,
        columnNumber: 11
      }
    }, "Parent")))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      className: "my-3 col-xs-12 col-lg-10 offset-lg-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 644,
        columnNumber: 6
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 645,
        columnNumber: 7
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 646,
        columnNumber: 8
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardBody"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 646,
        columnNumber: 14
      }
    }, __jsx("a", {
      href: dataStr,
      className: "btn btn-secondary btn-lg",
      download: `${params.url}.json`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 646,
        columnNumber: 24
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3ZpZGVvQW5ub3RhdGlvbkRlbW8vVmlkZW9Bbm5vdGF0aW9uRGVtby5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3ZpZGVvSW5zdHJ1Y3Rpb24vVmlkZW9JbnN0cnVjdGlvbi5qcyJdLCJuYW1lcyI6WyJEZW1vIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInJlc3VsdCIsInNldFN0YXRlIiwiZXZlbnQiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJ0eXBlIiwiY2hlY2tlZCIsInByZVN0YXRlIiwiaW5wdXQiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsInN0YXRlIiwicHJldmVudERlZmF1bHQiLCJhbm5vdGF0aW9ucyIsImlzSnNvblN0cmluZyIsImRlZmF1bHRBbm5vdGF0aW9ucyIsInBhcmFtcyIsInBhcnNlIiwidXJsIiwiYW5ub3RhdGlvbldpZHRoIiwicGFyc2VJbnQiLCJmaWxlSW5wdXQiLCJjdXJyZW50IiwiZmlsZXMiLCJyZWFkRmlsZVByb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImZpbGVSZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwib25lcnJvciIsInJlYWRBc1RleHQiLCJ2aWRlb1dpZHRoIiwibGVuZ3RoIiwic3RyIiwiZSIsImR1cmF0aW9uIiwidGltZXJhdGUiLCJ0aW1lTm93IiwiRGF0ZSIsImdldFRpbWUiLCJ0b1N0cmluZyIsImludGVycG9sYXRlZFJlc3VsdCIsInRlbXAiLCJhbm5vdGF0aW9uIiwiaW5jaWRlbnQiLCJpbmNpZGVudHMiLCJwYXJlbnROYW1lIiwibGFiZWwiLCJpIiwiYW5ub3RJbmNpZGVudExlbmd0aCIsImoiLCJzdGF0dXMiLCJzb3VyY2UiLCJ0ZGlmZiIsInRpbWUiLCJ4U2xvcGUiLCJ4IiwieVNsb3BlIiwieSIsIndTbG9wZSIsIndpZHRoIiwiaFNsb3BlIiwiaGVpZ2h0Iiwic0ZyYW1lIiwiTWF0aCIsInJvdW5kIiwidEZyYW1lIiwiayIsIm9mZiIsImludGVycG9sWCIsInRvRml4ZWQiLCJpbnRlcnBvbFkiLCJpbnRlcnBvbFciLCJpbnRlcnBvbEgiLCJzcGxpY2UiLCJpZCIsImludGVycG9sX2RhdGFfYXJyIiwic25vIiwicHVzaCIsInAiLCJxIiwic3RvcCIsInN3YXAiLCJzZXJpYWwiLCJwYSIsInFhIiwic3RvcGEiLCJzd2FwYSIsImludGVycG9sYXRpb25SZXN1bHQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJkaXNwbGF5IiwidGFibGUiLCJyb3ciLCJjcmVhdGVFbGVtZW50IiwiY2VsbF9zbm8iLCJpbm5lckhUTUwiLCJhcHBlbmRDaGlsZCIsImNlbGxfeF9taW4iLCJjZWxsX3lfbWluIiwiY2VsbF93aWR0aCIsImNlbGxfaGVpZ2h0IiwiY2VsbF9mcmFtZSIsImNlbGxfbG9zdCIsImNlbGxfb2NjbHVkZWQiLCJjZWxsX2dlbmVyYXRlZCIsImNlbGxfbGFiZWwiLCJjZWxsX3BhcmVudCIsImRvd25sb2FkSW50ZXJwb2xUYWJsZSIsImh0bWwiLCJmaWxlbmFtZSIsImNzdiIsInJvd3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY29scyIsImlubmVyVGV4dCIsImpvaW4iLCJkb3dubG9hZF9jc3YiLCJjc3ZGaWxlIiwiZG93bmxvYWRMaW5rIiwiQmxvYiIsImRvd25sb2FkIiwiaHJlZiIsIndpbmRvdyIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImJvZHkiLCJjbGljayIsInF1ZXJ5U2VsZWN0b3IiLCJvdXRlckhUTUwiLCJleHBvcnRfdGFibGVfdG9fY3N2IiwibXlTdHJlYW0iLCJwcmV2aWV3SGVhZGVyIiwicHJldmlld05vdGljZUxpc3QiLCJlbXB0eUNoZWNrU3VibWlzc2lvbldhcm5pbmdUZXh0IiwiZW1wdHlDaGVja0Fubm90YXRpb25JdGVtV2FybmluZ1RleHQiLCJlbXB0eUFubm90YXRpb25SZW1pbmRlclRleHQiLCJjb2xvciIsImNoaWxkcmVuTmFtZXMiLCJSZWFjdCIsImNyZWF0ZVJlZiIsInJlbmRlciIsImRhdGFTdHIiLCJlbmNvZGVVUklDb21wb25lbnQiLCJoYW5kbGVTdWJtaXQiLCJoYW5kbGVDaGFuZ2UiLCJiYWNrZ3JvdW5kIiwiaGFuZGxlUmVzdWx0U3VibWl0IiwiZ2V0SW50ZXJwb2xhdGVkRGF0YSIsImJvcmRlciIsImNyZWF0ZVRhYmxlIiwiSW5zdHJ1Y3Rpb25zIiwiY29sbGFwc2UiLCJtYXJnaW4iLCJvcGFjaXR5IiwibWFyZ2luQm90dG9tIiwidG9nZ2xlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsTUFBTUEsSUFBTixTQUFtQkMsK0NBQW5CLENBQTZCO0FBQzVCQyxhQUFXLENBQUNDLEtBQUQsRUFBUTtBQUNsQixVQUFNQSxLQUFOLEVBRGtCLENBRWxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQXBCa0IsZ0RBNExFQyxNQUFNLElBQUk7QUFDOUIsV0FBS0MsUUFBTCxDQUFjO0FBQUVELGNBQU0sRUFBRUE7QUFBVixPQUFkO0FBRUEsS0EvTGtCOztBQUFBLDBDQWlNSkUsS0FBSyxJQUFJO0FBQ3ZCLFlBQU1DLE1BQU0sR0FBR0QsS0FBSyxDQUFDQyxNQUFyQjtBQUNBLFlBQU1DLElBQUksR0FBR0QsTUFBTSxDQUFDQyxJQUFwQjtBQUNBLFlBQU1DLEtBQUssR0FBR0YsTUFBTSxDQUFDRyxJQUFQLEtBQWdCLFVBQWhCLEdBQTZCSCxNQUFNLENBQUNJLE9BQXBDLEdBQThDSixNQUFNLENBQUNFLEtBQW5FO0FBQ0EsV0FBS0osUUFBTCxDQUFlTyxRQUFELElBQWM7QUFDM0IsY0FBTTtBQUFFQztBQUFGLFlBQVlELFFBQWxCO0FBQ0EsZUFBTztBQUNOQyxlQUFLLGtDQUFPQSxLQUFQO0FBQWMsYUFBQ0ws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SSxlQUFTLEVBQUMscUNBQWQ7QUFBb0QsV0FBSyxFQUFFO0FBQUNDLG9CQUFZLEVBQUU7QUFBZixPQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFGQUpJLEVBS0M7QUFBSSxlQUFTLEVBQUMscUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1Q0FBZ0UsTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQWhFLENBTEQsRUFNRTtBQUFJLGVBQVMsRUFBQyxxQ0FBZDtBQUFvRCxXQUFLLEVBQUU7QUFBQ0Esb0JBQVksRUFBRTtBQUFmLE9BQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaURBTkYsQ0FyRUssQ0FERixDQURGLENBREosRUFtRkEsTUFBQyxpREFBRDtBQUFRLFdBQUssTUFBYjtBQUFjLFdBQUssRUFBQyxXQUFwQjtBQUFnQyxhQUFPLEVBQUUsS0FBS0MsTUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUF1RCxLQUFLcEosS0FBTCxDQUFXZ0osUUFBWCxHQUFxQixNQUFyQixHQUE2QixNQUFwRixrQkFuRkEsQ0FERjtBQXNGQzs7QUFsR2tDOztBQXFHdEJELDJFQUFmLEUiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUd29EaW1lbnNpb25hbFZpZGVvIH0gZnJvbSBcInJlYWN0LWFubm90YXRpb24tdG9vbFwiXG5pbXBvcnQgSW5zdHJ1Y3Rpb25zIGZyb20gXCIuLi92aWRlb0luc3RydWN0aW9uL1ZpZGVvSW5zdHJ1Y3Rpb25cIlxuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCwgQ2FyZCwgQ2FyZEJvZHksIENhcmRUaXRsZSwgQ2FyZFRleHQgfSBmcm9tICdyZWFjdHN0cmFwJztcbmltcG9ydCB7IEJ1dHRvbiwgRm9ybSwgRm9ybUdyb3VwLCBMYWJlbCwgSW5wdXQgfSBmcm9tICdyZWFjdHN0cmFwJztcbmltcG9ydCB7IENTVkxpbmssIENTVkRvd25sb2FkIH0gZnJvbSBcInJlYWN0LWNzdlwiO1xuXG5cbmNsYXNzIERlbW8gZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdC8vY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xuXHRcdC8vIGNvbnN0IGFubm90YXRpb25zID0gW107Ly9bIHsgXCJpZFwiOiBcImp0MTkyd3lkXCIsIFwibmFtZVwiOiBcImp0MTkyd3lkXCIsIFwibGFiZWxcIjogXCIxLTJcIiwgXCJjb2xvclwiOiBcInJnYmEoMjU1LDAsMCwxKVwiLCBcImluY2lkZW50c1wiOiBbIHsgXCJpZFwiOiBcImp0MTkyd3liXCIsIFwibmFtZVwiOiBcImp0MTkyd3liXCIsIFwieFwiOiAyOTUuMDA0MDIzMzU1ODY4NzUsIFwieVwiOiAxOTMuMzY4OTY0OTY2MTk2OCwgXCJ3aWR0aFwiOiA0MC43NTQwMjMzNTU4Njg3OCwgXCJoZWlnaHRcIjogNDEuNjMxMDM1MDMzODAzMTcsIFwidGltZVwiOiAwLjAzMDgyMjY0OTU3MjY0OTYsIFwic3RhdHVzXCI6IFwiU2hvd1wiIH0sIHsgXCJpZFwiOiBcImp0MTkzMG5iXCIsIFwibmFtZVwiOiBcImp0MTkzMG5iXCIsIFwieFwiOiAzMDQuMDA0MDIzMzU1ODY4NzUsIFwieVwiOiAyMDIuMzY4OTY0OTY2MTk2OCwgXCJ3aWR0aFwiOiA1OC43NTQwMjMzNTU4Njg3NSwgXCJoZWlnaHRcIjogNjAuNjMxMDM1MDMzODAzMTksIFwidGltZVwiOiAwLjAzMTc4NDcyMjIyMjIyMjIyLCBcInN0YXR1c1wiOiBcIlNob3dcIiB9LCB7IFwiaWRcIjogXCJqdDE5M2ZpbVwiLCBcIm5hbWVcIjogXCJqdDE5M2ZpbVwiLCBcInhcIjogMzA5LjAwNDAyMzM1NTg2ODc1LCBcInlcIjogMjEzLjM2ODk2NDk2NjE5NjgsIFwid2lkdGhcIjogNTguNzU0MDIzMzU1ODY4NzUsIFwiaGVpZ2h0XCI6IDYwLjYzMTAzNTAzMzgwMzE5LCBcInRpbWVcIjogMC4wNjM4ODYxMTExMTExMTExMiwgXCJzdGF0dXNcIjogXCJTaG93XCIgfSwgeyBcImlkXCI6IFwianQxOTNpam9cIiwgXCJuYW1lXCI6IFwianQxOTNpam9cIiwgXCJ4XCI6IDMyMC4wMDQwMjMzNTU4Njg3NSwgXCJ5XCI6IDIyMC4zNjg5NjQ5NjYxOTY4LCBcIndpZHRoXCI6IDU4Ljc1NDAyMzM1NTg2ODc1LCBcImhlaWdodFwiOiA3NC42MzEwMzUwMzM4MDMxOSwgXCJ0aW1lXCI6IDAuMDg2NzcyNDIwNjM0OTIwNjMsIFwic3RhdHVzXCI6IFwiU2hvd1wiIH0sIHsgXCJpZFwiOiBcImp0MTk0ODRtXCIsIFwibmFtZVwiOiBcImp0MTk0ODRtXCIsIFwieFwiOiAzMjAuNDg5OTIxNTY1ODc2MzMsIFwieVwiOiAyMTguNDI1MzcyMTI2MTY2NDIsIFwid2lkdGhcIjogNjAuNjk3NjE2MTk1ODk5MTE2LCBcImhlaWdodFwiOiA3OC4xNzMzNDA0MDM3ODA0MywgXCJ0aW1lXCI6IDAuMDk2NjcxODI1Mzk2ODI1NCwgXCJzdGF0dXNcIjogXCJTaG93XCIgfSwgeyBcImlkXCI6IFwianQxOTNvNHlcIiwgXCJuYW1lXCI6IFwianQxOTNvNHlcIiwgXCJ4XCI6IDMyMS4wMDQwMjMzNTU4Njg3NSwgXCJ5XCI6IDIxNi4zNjg5NjQ5NjYxOTY4LCBcIndpZHRoXCI6IDYyLjc1NDAyMzM1NTg2ODc1LCBcImhlaWdodFwiOiA3MS42MzEwMzUwMzM4MDMxOSwgXCJ0aW1lXCI6IDAuMTA3MTQ1ODMzMzMzMzMzMzQsIFwic3RhdHVzXCI6IFwiU2hvd1wiIH0sIHsgXCJpZFwiOiBcImp0MTk0ZG9tXCIsIFwibmFtZVwiOiBcImp0MTk0ZG9tXCIsIFwieFwiOiAzMjEuMDA0MDIzMzU1ODY4NzUsIFwieVwiOiAyMTguODA4MzA0NDY0MDI0MywgXCJ3aWR0aFwiOiA2Mi43NTQwMjMzNTU4Njg3NSwgXCJoZWlnaHRcIjogNjkuMTkxNjk1NTM1OTc1NywgXCJ0aW1lXCI6IDAuMTE5NTg1NzE0Mjg1NzE0MywgXCJzdGF0dXNcIjogXCJTaG93XCIgfSwgeyBcImlkXCI6IFwianQxOTN0YXdcIiwgXCJuYW1lXCI6IFwianQxOTN0YXdcIiwgXCJ4XCI6IDMyMS4wMDQwMjMzNTU4Njg3NSwgXCJ5XCI6IDIyOC4zNjg5NjQ5NjYxOTY4LCBcIndpZHRoXCI6IDYyLjc1NDAyMzM1NTg2ODc1LCBcImhlaWdodFwiOiA1OS42MzEwMzUwMzM4MDMxOSwgXCJ0aW1lXCI6IDAuMTM0NTkwMDc5MzY1MDc5MzYsIFwic3RhdHVzXCI6IFwiU2hvd1wiIH0sIHsgXCJpZFwiOiBcImp0MTkzemI0XCIsIFwibmFtZVwiOiBcImp0MTkzemI0XCIsIFwieFwiOiAzMTguMDA0MDIzMzU1ODY4NzUsIFwieVwiOiAyMjguMzY4OTY0OTY2MTk2OCwgXCJ3aWR0aFwiOiA4MS43NTQwMjMzNTU4Njg3NSwgXCJoZWlnaHRcIjogNTkuNjMxMDM1MDMzODAzMTksIFwidGltZVwiOiAwLjE2OTM5NTIzODA5NTIzODEsIFwic3RhdHVzXCI6IFwiU2hvd1wiIH0sIHsgXCJpZFwiOiBcImp0MTk1bHR6XCIsIFwibmFtZVwiOiBcImp0MTk1bHR6XCIsIFwieFwiOiAzMjguMjg3NDA5ODY0MTI0NCwgXCJ5XCI6IDIzMC42NTIzNTE0NzQ0NTI1LCBcIndpZHRoXCI6IDcwLjg1MTY0MjMxODEzOTA2LCBcImhlaWdodFwiOiA1Ni42MzEwMzUwMzM4MDMyMTUsIFwidGltZVwiOiAwLjE5ODU1MjM2MjIwNDcyNDQsIFwic3RhdHVzXCI6IFwiU2hvd1wiIH0sIHsgXCJpZFwiOiBcImp0MTk0dHJnXCIsIFwibmFtZVwiOiBcImp0MTk0dHJnXCIsIFwieFwiOiAzMjIuMDA0MDIzMzU1ODY4NzUsIFwieVwiOiAyMzIuMzY4OTY0OTY2MTk2OCwgXCJ3aWR0aFwiOiA3Ni42Njk2Nzg2Mjk3NTk1MiwgXCJoZWlnaHRcIjogNTkuNjMxMDM1MDMzODAzMTksIFwidGltZVwiOiAwLjIyMDQ3MjIyMjIyMjIyMjI0LCBcInN0YXR1c1wiOiBcIlNob3dcIiB9LCB7IFwiaWRcIjogXCJqdDE5NGxnbVwiLCBcIm5hbWVcIjogXCJqdDE5NGxnbVwiLCBcInhcIjogMzE4LjAwNDAyMzM1NTg2ODc1LCBcInlcIjogMjI4LjM2ODk2NDk2NjE5NjgsIFwid2lkdGhcIjogNzUuNzU0MDIzMzU1ODY4NzUsIFwiaGVpZ2h0XCI6IDU5LjYzMTAzNTAzMzgwMzE5LCBcInRpbWVcIjogMC4yMjk2NzA4MzMzMzMzMzMzMiwgXCJzdGF0dXNcIjogXCJTaG93XCIgfSwgeyBcImlkXCI6IFwianQxOTVwN21cIiwgXCJuYW1lXCI6IFwianQxOTVwN21cIiwgXCJ4XCI6IDMxOC4wMDQwMjMzNTU4Njg3NSwgXCJ5XCI6IDIyOC4zNjg5NjQ5NjYxOTY4LCBcIndpZHRoXCI6IDY4Ljc1NDAyMzM1NTg2ODc1LCBcImhlaWdodFwiOiA1OC4xOTY4NDk0NjM4NTkwNSwgXCJ0aW1lXCI6IDAuMjUzNTkzNTAzOTM3MDA3ODYsIFwic3RhdHVzXCI6IFwiU2hvd1wiIH0sIHsgXCJpZFwiOiBcImp0MTk1MXI5XCIsIFwibmFtZVwiOiBcImp0MTk1MXI5XCIsIFwieFwiOiAzMTguMDA0MDIzMzU1ODY4NzUsIFwieVwiOiAyMjguMzY4OTY0OTY2MTk2OCwgXCJ3aWR0aFwiOiA3NS43NTQwMjMzNTU4Njg3NSwgXCJoZWlnaHRcIjogNTQuNjMxMDM1MDMzODAzMTksIFwidGltZVwiOiAwLjMxMzA3MjQyMDYzNDkyMDYzLCBcInN0YXR1c1wiOiBcIlNob3dcIiB9LCB7IFwiaWRcIjogXCJqdDE5NXY5bFwiLCBcIm5hbWVcIjogXCJqdDE5NXY5bFwiLCBcInhcIjogMzE4LjAwNDAyMzM1NTg2ODc1LCBcInlcIjogMjI4LjM2ODk2NDk2NjE5NjgsIFwid2lkdGhcIjogNzUuNzU0MDIzMzU1ODY4NzUsIFwiaGVpZ2h0XCI6IDU0LjYzMTAzNTAzMzgwMzE5LCBcInRpbWVcIjogMC4zNDYyMzkzNzAwNzg3NDAxNywgXCJzdGF0dXNcIjogXCJIaWRlXCIgfSBdLCBcImNoaWxkcmVuXCI6IFtdLCBcInBhcmVudFwiOiBcImp0MTkyMnh1XCIgfSwgeyBcImlkXCI6IFwianQxOTJ3eWNcIiwgXCJuYW1lXCI6IFwianQxOTJ3eWNcIiwgXCJsYWJlbFwiOiBcIjEtMVwiLCBcImNvbG9yXCI6IFwicmdiYSgyNTUsMCwwLDEpXCIsIFwiaW5jaWRlbnRzXCI6IFsgeyBcImlkXCI6IFwianQxOTJ3eWJcIiwgXCJuYW1lXCI6IFwianQxOTJ3eWJcIiwgXCJ4XCI6IDI3NC4yNSwgXCJ5XCI6IDE3MS43Mzc5Mjk5MzIzOTM2NiwgXCJ3aWR0aFwiOiA0MC43NTQwMjMzNTU4Njg3OCwgXCJoZWlnaHRcIjogNDEuNjMxMDM1MDMzODAzMTcsIFwidGltZVwiOiAwLjAzMDgyMjY0OTU3MjY0OTYsIFwic3RhdHVzXCI6IFwiU2hvd1wiIH0sIHsgXCJpZFwiOiBcImp0MTkzNDl4XCIsIFwibmFtZVwiOiBcImp0MTkzNDl4XCIsIFwieFwiOiAyNzEuMjUsIFwieVwiOiAxNjcuNzM3OTI5OTMyMzkzNjYsIFwid2lkdGhcIjogNjAuNzU0MDIzMzU1ODY4NzUsIFwiaGVpZ2h0XCI6IDU4LjYzMTAzNTAzMzgwMzE2LCBcInRpbWVcIjogMC4wMzE3ODQ3MjIyMjIyMjIyMiwgXCJzdGF0dXNcIjogXCJTaG93XCIgfSwgeyBcImlkXCI6IFwianQxOTNla2RcIiwgXCJuYW1lXCI6IFwianQxOTNla2RcIiwgXCJ4XCI6IDI3NC4yNSwgXCJ5XCI6IDE2MC43Mzc5Mjk5MzIzOTM2NiwgXCJ3aWR0aFwiOiA2MC43NTQwMjMzNTU4Njg3NSwgXCJoZWlnaHRcIjogNTguNjMxMDM1MDMzODAzMTYsIFwidGltZVwiOiAwLjA2Mzg4NjExMTExMTExMTEyLCBcInN0YXR1c1wiOiBcIlNob3dcIiB9LCB7IFwiaWRcIjogXCJqdDE5M2hwMVwiLCBcIm5hbWVcIjogXCJqdDE5M2hwMVwiLCBcInhcIjogMjgwLjI1LCBcInlcIjogMTYwLjczNzkyOTkzMjM5MzY2LCBcIndpZHRoXCI6IDYwLjc1NDAyMzM1NTg2ODc1LCBcImhlaWdodFwiOiA1OC42MzEwMzUwMzM4MDMxNiwgXCJ0aW1lXCI6IDAuMDg2NzcyNDIwNjM0OTIwNjMsIFwic3RhdHVzXCI6IFwiU2hvd1wiIH0sIHsgXCJpZFwiOiBcImp0MTk0Y2J2XCIsIFwibmFtZVwiOiBcImp0MTk0Y2J2XCIsIFwieFwiOiAyODAuMTMyNjk3NTgyMTY3NywgXCJ5XCI6IDE1OC42MjA2Mjc1MTQ1NjEzNiwgXCJ3aWR0aFwiOiA2MC43NTQwMjMzNTU4Njg3NSwgXCJoZWlnaHRcIjogNTguNjMxMDM1MDMzODAzMTYsIFwidGltZVwiOiAwLjExOTU4NTcxNDI4NTcxNDMsIFwic3RhdHVzXCI6IFwiU2hvd1wiIH0sIHsgXCJpZFwiOiBcImp0MTkzdW1nXCIsIFwibmFtZVwiOiBcImp0MTkzdW1nXCIsIFwieFwiOiAyNzQuMjUsIFwieVwiOiAxNTQuNzM3OTI5OTMyMzkzNjYsIFwid2lkdGhcIjogNjAuNzU0MDIzMzU1ODY4NzUsIFwiaGVpZ2h0XCI6IDU4LjYzMTAzNTAzMzgwMzE2LCBcInRpbWVcIjogMC4xMzQ1OTAwNzkzNjUwNzkzNiwgXCJzdGF0dXNcIjogXCJTaG93XCIgfSwgeyBcImlkXCI6IFwianQxOTN5N3FcIiwgXCJuYW1lXCI6IFwianQxOTN5N3FcIiwgXCJ4XCI6IDI2OC4yNSwgXCJ5XCI6IDE1NS43Mzc5Mjk5MzIzOTM2NiwgXCJ3aWR0aFwiOiA2MC43NTQwMjMzNTU4Njg3NSwgXCJoZWlnaHRcIjogNTguNjMxMDM1MDMzODAzMTYsIFwidGltZVwiOiAwLjE2OTM5NTIzODA5NTIzODEsIFwic3RhdHVzXCI6IFwiU2hvd1wiIH0sIHsgXCJpZFwiOiBcImp0MTk0aHhnXCIsIFwibmFtZVwiOiBcImp0MTk0aHhnXCIsIFwieFwiOiAyNjAuMjUsIFwieVwiOiAxNTcuNzM3OTI5OTMyMzkzNjYsIFwid2lkdGhcIjogNjAuNzU0MDIzMzU1ODY4NzUsIFwiaGVpZ2h0XCI6IDU4LjYzMTAzNTAzMzgwMzE2LCBcInRpbWVcIjogMC4yMDIzMzM5Mjg1NzE0Mjg1NywgXCJzdGF0dXNcIjogXCJTaG93XCIgfSwgeyBcImlkXCI6IFwianQxOTRtajFcIiwgXCJuYW1lXCI6IFwianQxOTRtajFcIiwgXCJ4XCI6IDI1My4yNSwgXCJ5XCI6IDE1Ni43Mzc5Mjk5MzIzOTM2NiwgXCJ3aWR0aFwiOiA2MC43NTQwMjMzNTU4Njg3NSwgXCJoZWlnaHRcIjogNTguNjMxMDM1MDMzODAzMTYsIFwidGltZVwiOiAwLjIyOTY3MDgzMzMzMzMzMzMyLCBcInN0YXR1c1wiOiBcIlNob3dcIiB9LCB7IFwiaWRcIjogXCJqdDE5NXFnd1wiLCBcIm5hbWVcIjogXCJqdDE5NXFnd1wiLCBcInhcIjogMjQ2LjI1LCBcInlcIjogMTU2LjczNzkyOTkzMjM5MzY2LCBcIndpZHRoXCI6IDYzLjY2MDQ3ODA1NzEzNzAzLCBcImhlaWdodFwiOiA1OC42MzEwMzUwMzM4MDMxNiwgXCJ0aW1lXCI6IDAuMjUzNTkzNTAzOTM3MDA3ODYsIFwic3RhdHVzXCI6IFwiU2hvd1wiIH0sIHsgXCJpZFwiOiBcImp0MTk0eHFoXCIsIFwibmFtZVwiOiBcImp0MTk0eHFoXCIsIFwieFwiOiAyNTMuMjUsIFwieVwiOiAxNTYuNzM3OTI5OTMyMzkzNjYsIFwid2lkdGhcIjogNTIuNzU0MDIzMzU1ODY4NzUsIFwiaGVpZ2h0XCI6IDU4LjYzMTAzNTAzMzgwMzE2LCBcInRpbWVcIjogMC4yNzY0MjI4MTc0NjAzMTc0NCwgXCJzdGF0dXNcIjogXCJTaG93XCIgfSwgeyBcImlkXCI6IFwianQxOTU1dTFcIiwgXCJuYW1lXCI6IFwianQxOTU1dTFcIiwgXCJ4XCI6IDI2NS4yNSwgXCJ5XCI6IDE1OS43Mzc5Mjk5MzIzOTM2NiwgXCJ3aWR0aFwiOiA0MC43NTQwMjMzNTU4Njg3NSwgXCJoZWlnaHRcIjogNDkuNjMxMDM1MDMzODAzMTYsIFwidGltZVwiOiAwLjM1NjQ4MzMzMzMzMzMzMzMsIFwic3RhdHVzXCI6IFwiU2hvd1wiIH0sIHsgXCJpZFwiOiBcImp0MTk1YjNpXCIsIFwibmFtZVwiOiBcImp0MTk1YjNpXCIsIFwieFwiOiAyNjUuMjUsIFwieVwiOiAxNDEuNzM3OTI5OTMyMzkzNjYsIFwid2lkdGhcIjogNDAuNzU0MDIzMzU1ODY4NzUsIFwiaGVpZ2h0XCI6IDQ5LjYzMTAzNTAzMzgwMzE2LCBcInRpbWVcIjogMC40NTk4NDk4MDE1ODczMDE1NCwgXCJzdGF0dXNcIjogXCJTaG93XCIgfSwgeyBcImlkXCI6IFwianQxOTYxdjZcIiwgXCJuYW1lXCI6IFwianQxOTYxdjZcIiwgXCJ4XCI6IDI2OS4yNSwgXCJ5XCI6IDE0NC43Mzc5Mjk5MzIzOTM2NiwgXCJ3aWR0aFwiOiA0MC43NTQwMjMzNTU4Njg3NSwgXCJoZWlnaHRcIjogNDkuNjMxMDM1MDMzODAzMTYsIFwidGltZVwiOiAwLjQ3ODUxNzUxOTY4NTAzOTM2LCBcInN0YXR1c1wiOiBcIlNob3dcIiB9LCB7IFwiaWRcIjogXCJqdDE5NjVhelwiLCBcIm5hbWVcIjogXCJqdDE5NjVhelwiLCBcInhcIjogMjYyLjI1LCBcInlcIjogMTQ0LjczNzkyOTkzMjM5MzY2LCBcIndpZHRoXCI6IDQ3Ljc1NDAyMzM1NTg2ODc1LCBcImhlaWdodFwiOiA0OS42MzEwMzUwMzM4MDMxNiwgXCJ0aW1lXCI6IDAuNTM0MjQ5NjA2Mjk5MjEyNiwgXCJzdGF0dXNcIjogXCJTaG93XCIgfSwgeyBcImlkXCI6IFwianQxOTY4bmtcIiwgXCJuYW1lXCI6IFwianQxOTY4bmtcIiwgXCJ4XCI6IDI2Mi4yNSwgXCJ5XCI6IDE0OS43Mzc5Mjk5MzIzOTM2NiwgXCJ3aWR0aFwiOiA0Ny43NTQwMjMzNTU4Njg3NSwgXCJoZWlnaHRcIjogNDkuNjMxMDM1MDMzODAzMTYsIFwidGltZVwiOiAwLjU5MDQxMDYyOTkyMTI1OTgsIFwic3RhdHVzXCI6IFwiU2hvd1wiIH0sIHsgXCJpZFwiOiBcImp0MTk2YXgzXCIsIFwibmFtZVwiOiBcImp0MTk2YXgzXCIsIFwieFwiOiAyNzAuMjUsIFwieVwiOiAxNTguNzM3OTI5OTMyMzkzNjYsIFwid2lkdGhcIjogNDcuNzU0MDIzMzU1ODY4NzUsIFwiaGVpZ2h0XCI6IDQ5LjYzMTAzNTAzMzgwMzE2LCBcInRpbWVcIjogMC42NjYyNTk2NDU2NjkyOTEzLCBcInN0YXR1c1wiOiBcIlNob3dcIiB9LCB7IFwiaWRcIjogXCJqdDE5NmR5c1wiLCBcIm5hbWVcIjogXCJqdDE5NmR5c1wiLCBcInhcIjogMjY4LjI1LCBcInlcIjogMTY0LjczNzkyOTkzMjM5MzY2LCBcIndpZHRoXCI6IDQ3Ljc1NDAyMzM1NTg2ODc1LCBcImhlaWdodFwiOiA0OS42MzEwMzUwMzM4MDMxNiwgXCJ0aW1lXCI6IDAuNzM2ODM3MDA3ODc0MDE1NywgXCJzdGF0dXNcIjogXCJTaG93XCIgfSwgeyBcImlkXCI6IFwianQxOTZndXVcIiwgXCJuYW1lXCI6IFwianQxOTZndXVcIiwgXCJ4XCI6IDI3Mi4yNSwgXCJ5XCI6IDE1NC43Mzc5Mjk5MzIzOTM2NiwgXCJ3aWR0aFwiOiA0Ny43NTQwMjMzNTU4Njg3NSwgXCJoZWlnaHRcIjogNDkuNjMxMDM1MDMzODAzMTYsIFwidGltZVwiOiAwLjgwMTA1MzkzNzAwNzg3NCwgXCJzdGF0dXNcIjogXCJTaG93XCIgfSwgeyBcImlkXCI6IFwianQxOTZrN2hcIiwgXCJuYW1lXCI6IFwianQxOTZrN2hcIiwgXCJ4XCI6IDI3My4yNSwgXCJ5XCI6IDE1Ny43Mzc5Mjk5MzIzOTM2NiwgXCJ3aWR0aFwiOiA0Ny43NTQwMjMzNTU4Njg3NSwgXCJoZWlnaHRcIjogNDkuNjMxMDM1MDMzODAzMTYsIFwidGltZVwiOiAwLjg2MjYzNTAzOTM3MDA3ODcsIFwic3RhdHVzXCI6IFwiU2hvd1wiIH0gXSwgXCJjaGlsZHJlblwiOiBbXSwgXCJwYXJlbnRcIjogXCJqdDE5MjJ4dVwiIH0sIHsgXCJpZFwiOiBcImp0MTkyMnh1XCIsIFwibmFtZVwiOiBcImp0MTkyMnh1XCIsIFwibGFiZWxcIjogXCIxXCIsIFwiY29sb3JcIjogXCJyZ2JhKDI1NSwyMTksMCwxKVwiLCBcImluY2lkZW50c1wiOiBbIHsgXCJpZFwiOiBcImp0MTkyMnh1XCIsIFwibmFtZVwiOiBcImp0MTkyMnh1XCIsIFwieFwiOiAyNzQuMjUsIFwieVwiOiAxNzQsIFwid2lkdGhcIjogODAsIFwiaGVpZ2h0XCI6IDgxLCBcInRpbWVcIjogMCwgXCJzdGF0dXNcIjogXCJTaG93XCIgfSwgeyBcImlkXCI6IFwianQxOTJ3eWJcIiwgXCJuYW1lXCI6IFwianQxOTJ3eWJcIiwgXCJ4XCI6IDI3NC4yNSwgXCJ5XCI6IDE3MS43Mzc5Mjk5MzIzOTM2NiwgXCJ3aWR0aFwiOiA4MS41MDgwNDY3MTE3Mzc1NiwgXCJoZWlnaHRcIjogODMuMjYyMDcwMDY3NjA2MzQsIFwidGltZVwiOiAwLjAzMDgyMjY0OTU3MjY0OTYsIFwic3RhdHVzXCI6IFwiU3BsaXRcIiB9IF0sIFwiY2hpbGRyZW5cIjogWyBcImp0MTkyd3ljXCIsIFwianQxOTJ3eWRcIiBdLCBcInBhcmVudFwiOiBcIlwiIH0gXTtcblx0XHQvLyBjb25zdCBwcmV2aWV3Tm90aWNlcyA9IFtcIkNlbGxzJyBib2R5IHJhbmdlLlwiLCBcIlRoZSB0aW1lIHRoYXQgY2VsbHMgPHU+c3BsaXQ8L3U+LCA8dT5sZWF2ZTwvdT4sIDx1Pm9ic2N1cmVkPC91PiBhbmQgPHU+c2hvdyB1cDwvdT4gKGlmIGFwcGxpY2FibGUpLlwiXTtcblx0XHQvLyBjb25zdCB1cmwgPSAnaHR0cHM6Ly9jaWxkYXRhLmNyYnMudWNzZC5lZHUvbWVkaWEvdmlkZW9zLzUwNTA3LzUwNTA3X3dlYi5tcDQnO1xuXHRcdC8vIGNvbnN0IGFubm90YXRpb25XaWR0aCA9IDYwMDtcblx0XHQvLyB0aGlzLnN0YXRlID0ge1xuXHRcdC8vIFx0cmVzdWx0OiBudWxsLFxuXHRcdC8vIFx0aW5wdXQ6IHtcblx0XHQvLyBcdFx0YW5ub3RhdGlvbnM6IEpTT04uc3RyaW5naWZ5KGFubm90YXRpb25zKSxcblx0XHQvLyBcdFx0dXJsOiB1cmwsXG5cdFx0Ly8gXHRcdGFubm90YXRpb25XaWR0aDogYW5ub3RhdGlvbldpZHRoXG5cdFx0Ly8gXHQgfSxcblx0XHQvLyBcdHBhcmFtczoge1xuXHRcdC8vIFx0XHRhbm5vdGF0aW9uczogYW5ub3RhdGlvbnMsXG5cdFx0Ly8gXHRcdHVybDogdXJsLFxuXHRcdC8vIFx0XHRwcmV2aWV3Tm90aWNlczogcHJldmlld05vdGljZXMsXG5cdFx0Ly8gXHRcdGFubm90YXRpb25XaWR0aDogYW5ub3RhdGlvbldpZHRoXG5cdFx0Ly8gXHR9XG5cdFx0Ly8gfVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRteVN0cmVhbTogbnVsbCxcblx0XHRcdHJlc3VsdDogbnVsbCxcblx0XHRcdGludGVycG9sYXRpb25SZXN1bHQ6IG51bGwsXG5cdFx0XHRpbnB1dDoge1xuXHRcdFx0XHRkZWZhdWx0QW5ub3RhdGlvbnM6IEpTT04uc3RyaW5naWZ5KGRlZmF1bHRBbm5vdGF0aW9ucyksXG5cdFx0XHRcdHVybCxcblx0XHRcdFx0dmlkZW9XaWR0aCxcblx0XHRcdFx0cHJldmlld0hlYWRlcixcblx0XHRcdFx0cHJldmlld05vdGljZUxpc3QsXG5cdFx0XHRcdGVtcHR5Q2hlY2tTdWJtaXNzaW9uV2FybmluZ1RleHQsXG5cdFx0XHRcdGVtcHR5Q2hlY2tBbm5vdGF0aW9uSXRlbVdhcm5pbmdUZXh0LFxuXHRcdFx0XHRlbXB0eUFubm90YXRpb25SZW1pbmRlclRleHQsXG5cdFx0XHR9LFxuXHRcdFx0cGFyYW1zOiB7XG5cdFx0XHRcdGRlZmF1bHRBbm5vdGF0aW9uczogW10sXG5cdFx0XHRcdHVybCxcblx0XHRcdFx0dmlkZW9XaWR0aCxcblx0XHRcdFx0cHJldmlld0hlYWRlcixcblx0XHRcdFx0cHJldmlld05vdGljZUxpc3QsXG5cdFx0XHRcdGVtcHR5Q2hlY2tTdWJtaXNzaW9uV2FybmluZ1RleHQsXG5cdFx0XHRcdGVtcHR5Q2hlY2tBbm5vdGF0aW9uSXRlbVdhcm5pbmdUZXh0LFxuXHRcdFx0XHRlbXB0eUFubm90YXRpb25SZW1pbmRlclRleHQsXG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vc3RhcnQgY29udGVudCBmcm9tIHJlYWN0IHRvb2xcblx0XHRjb25zdCB0ZW1wID0ge307XG5cdFx0Y29uc3QgZGVmYXVsdEFubm90YXRpb25zID0gW3tcblx0XHRcdGlkOiAnanQxOTJ3eWQnLFxuXHRcdFx0bmFtZTogJ2p0MTkyd3lkJyxcblx0XHRcdGxhYmVsOiAnMS0yJyxcblx0XHRcdGNvbG9yOiAncmdiYSgyNTUsMCwwLDEpJyxcblx0XHRcdGluY2lkZW50czogW3tcblx0XHRcdFx0aWQ6ICdqdDE5Mnd5YicsIG5hbWU6ICdqdDE5Mnd5YicsIHg6IDI5NS4wMDQwMjMzNTU4Njg3NSwgeTogMTkzLjM2ODk2NDk2NjE5NjgsIHdpZHRoOiA0MC43NTQwMjMzNTU4Njg3OCwgaGVpZ2h0OiA0MS42MzEwMzUwMzM4MDMxNywgdGltZTogMC4wMzA4MjI2NDk1NzI2NDk2LCBzdGF0dXM6ICdTaG93Jyxcblx0XHRcdH0sIHtcblx0XHRcdFx0aWQ6ICdqdDE5MzBuYicsIG5hbWU6ICdqdDE5MzBuYicsIHg6IDMwNC4wMDQwMjMzNTU4Njg3NSwgeTogMjAyLjM2ODk2NDk2NjE5NjgsIHdpZHRoOiA1OC43NTQwMjMzNTU4Njg3NSwgaGVpZ2h0OiA2MC42MzEwMzUwMzM4MDMxOSwgdGltZTogMC4wMzE3ODQ3MjIyMjIyMjIyMiwgc3RhdHVzOiAnU2hvdycsXG5cdFx0XHR9LCB7XG5cdFx0XHRcdGlkOiAnanQxOTNmaW0nLCBuYW1lOiAnanQxOTNmaW0nLCB4OiAzMDkuMDA0MDIzMzU1ODY4NzUsIHk6IDIxMy4zNjg5NjQ5NjYxOTY4LCB3aWR0aDogNTguNzU0MDIzMzU1ODY4NzUsIGhlaWdodDogNjAuNjMxMDM1MDMzODAzMTksIHRpbWU6IDAuMDYzODg2MTExMTExMTExMTIsIHN0YXR1czogJ1Nob3cnLFxuXHRcdFx0fSwge1xuXHRcdFx0XHRpZDogJ2p0MTkzaWpvJywgbmFtZTogJ2p0MTkzaWpvJywgeDogMzIwLjAwNDAyMzM1NTg2ODc1LCB5OiAyMjAuMzY4OTY0OTY2MTk2OCwgd2lkdGg6IDU4Ljc1NDAyMzM1NTg2ODc1LCBoZWlnaHQ6IDc0LjYzMTAzNTAzMzgwMzE5LCB0aW1lOiAwLjA4Njc3MjQyMDYzNDkyMDYzLCBzdGF0dXM6ICdTaG93Jyxcblx0XHRcdH0sIHtcblx0XHRcdFx0aWQ6ICdqdDE5NDg0bScsIG5hbWU6ICdqdDE5NDg0bScsIHg6IDMyMC40ODk5MjE1NjU4NzYzMywgeTogMjE4LjQyNTM3MjEyNjE2NjQyLCB3aWR0aDogNjAuNjk3NjE2MTk1ODk5MTE2LCBoZWlnaHQ6IDc4LjE3MzM0MDQwMzc4MDQzLCB0aW1lOiAwLjA5NjY3MTgyNTM5NjgyNTQsIHN0YXR1czogJ1Nob3cnLFxuXHRcdFx0fSwge1xuXHRcdFx0XHRpZDogJ2p0MTkzbzR5JywgbmFtZTogJ2p0MTkzbzR5JywgeDogMzIxLjAwNDAyMzM1NTg2ODc1LCB5OiAyMTYuMzY4OTY0OTY2MTk2OCwgd2lkdGg6IDYyLjc1NDAyMzM1NTg2ODc1LCBoZWlnaHQ6IDcxLjYzMTAzNTAzMzgwMzE5LCB0aW1lOiAwLjEwNzE0NTgzMzMzMzMzMzM0LCBzdGF0dXM6ICdTaG93Jyxcblx0XHRcdH0sIHtcblx0XHRcdFx0aWQ6ICdqdDE5NGRvbScsIG5hbWU6ICdqdDE5NGRvbScsIHg6IDMyMS4wMDQwMjMzNTU4Njg3NSwgeTogMjE4LjgwODMwNDQ2NDAyNDMsIHdpZHRoOiA2Mi43NTQwMjMzNTU4Njg3NSwgaGVpZ2h0OiA2OS4xOTE2OTU1MzU5NzU3LCB0aW1lOiAwLjExOTU4NTcxNDI4NTcxNDMsIHN0YXR1czogJ1Nob3cnLFxuXHRcdFx0fSwge1xuXHRcdFx0XHRpZDogJ2p0MTkzdGF3JywgbmFtZTogJ2p0MTkzdGF3JywgeDogMzIxLjAwNDAyMzM1NTg2ODc1LCB5OiAyMjguMzY4OTY0OTY2MTk2OCwgd2lkdGg6IDYyLjc1NDAyMzM1NTg2ODc1LCBoZWlnaHQ6IDU5LjYzMTAzNTAzMzgwMzE5LCB0aW1lOiAwLjEzNDU5MDA3OTM2NTA3OTM2LCBzdGF0dXM6ICdTaG93Jyxcblx0XHRcdH0sIHtcblx0XHRcdFx0aWQ6ICdqdDE5M3piNCcsIG5hbWU6ICdqdDE5M3piNCcsIHg6IDMxOC4wMDQwMjMzNTU4Njg3NSwgeTogMjI4LjM2ODk2NDk2NjE5NjgsIHdpZHRoOiA4MS43NTQwMjMzNTU4Njg3NSwgaGVpZ2h0OiA1OS42MzEwMzUwMzM4MDMxOSwgdGltZTogMC4xNjkzOTUyMzgwOTUyMzgxLCBzdGF0dXM6ICdTaG93Jyxcblx0XHRcdH0sIHtcblx0XHRcdFx0aWQ6ICdqdDE5NWx0eicsIG5hbWU6ICdqdDE5NWx0eicsIHg6IDMyOC4yODc0MDk4NjQxMjQ0LCB5OiAyMzAuNjUyMzUxNDc0NDUyNSwgd2lkdGg6IDcwLjg1MTY0MjMxODEzOTA2LCBoZWlnaHQ6IDU2LjYzMTAzNTAzMzgwMzIxNSwgdGltZTogMC4xOTg1NTIzNjIyMDQ3MjQ0LCBzdGF0dXM6ICdTaG93Jyxcblx0XHRcdH0sIHtcblx0XHRcdFx0aWQ6ICdqdDE5NHRyZycsIG5hbWU6ICdqdDE5NHRyZycsIHg6IDMyMi4wMDQwMjMzNTU4Njg3NSwgeTogMjMyLjM2ODk2NDk2NjE5NjgsIHdpZHRoOiA3Ni42Njk2Nzg2Mjk3NTk1MiwgaGVpZ2h0OiA1OS42MzEwMzUwMzM4MDMxOSwgdGltZTogMC4yMjA0NzIyMjIyMjIyMjIyNCwgc3RhdHVzOiAnU2hvdycsXG5cdFx0XHR9LCB7XG5cdFx0XHRcdGlkOiAnanQxOTRsZ20nLCBuYW1lOiAnanQxOTRsZ20nLCB4OiAzMTguMDA0MDIzMzU1ODY4NzUsIHk6IDIyOC4zNjg5NjQ5NjYxOTY4LCB3aWR0aDogNzUuNzU0MDIzMzU1ODY4NzUsIGhlaWdodDogNTkuNjMxMDM1MDMzODAzMTksIHRpbWU6IDAuMjI5NjcwODMzMzMzMzMzMzIsIHN0YXR1czogJ1Nob3cnLFxuXHRcdFx0fSwge1xuXHRcdFx0XHRpZDogJ2p0MTk1cDdtJywgbmFtZTogJ2p0MTk1cDdtJywgeDogMzE4LjAwNDAyMzM1NTg2ODc1LCB5OiAyMjguMzY4OTY0OTY2MTk2OCwgd2lkdGg6IDY4Ljc1NDAyMzM1NTg2ODc1LCBoZWlnaHQ6IDU4LjE5Njg0OTQ2Mzg1OTA1LCB0aW1lOiAwLjI1MzU5MzUwMzkzNzAwNzg2LCBzdGF0dXM6ICdTaG93Jyxcblx0XHRcdH0sIHtcblx0XHRcdFx0aWQ6ICdqdDE5NTFyOScsIG5hbWU6ICdqdDE5NTFyOScsIHg6IDMxOC4wMDQwMjMzNTU4Njg3NSwgeTogMjI4LjM2ODk2NDk2NjE5NjgsIHdpZHRoOiA3NS43NTQwMjMzNTU4Njg3NSwgaGVpZ2h0OiA1NC42MzEwMzUwMzM4MDMxOSwgdGltZTogMC4zMTMwNzI0MjA2MzQ5MjA2Mywgc3RhdHVzOiAnU2hvdycsXG5cdFx0XHR9LCB7XG5cdFx0XHRcdGlkOiAnanQxOTV2OWwnLCBuYW1lOiAnanQxOTV2OWwnLCB4OiAzMTguMDA0MDIzMzU1ODY4NzUsIHk6IDIyOC4zNjg5NjQ5NjYxOTY4LCB3aWR0aDogNzUuNzU0MDIzMzU1ODY4NzUsIGhlaWdodDogNTQuNjMxMDM1MDMzODAzMTksIHRpbWU6IDAuMzQ2MjM5MzcwMDc4NzQwMTcsIHN0YXR1czogJ0hpZGUnLFxuXHRcdFx0fV0sXG5cdFx0XHRjaGlsZHJlbk5hbWVzOiBbXSxcblx0XHRcdHBhcmVudE5hbWU6ICdqdDE5MjJ4dScsXG5cdFx0fSwge1xuXHRcdFx0aWQ6ICdqdDE5Mnd5YycsXG5cdFx0XHRuYW1lOiAnanQxOTJ3eWMnLFxuXHRcdFx0bGFiZWw6ICcxLTEnLFxuXHRcdFx0Y29sb3I6ICdyZ2JhKDI1NSwwLDAsMSknLFxuXHRcdFx0aW5jaWRlbnRzOiBbe1xuXHRcdFx0XHRpZDogJ2p0MTkyd3liJywgbmFtZTogJ2p0MTkyd3liJywgeDogMjc0LjI1LCB5OiAxNzEuNzM3OTI5OTMyMzkzNjYsIHdpZHRoOiA0MC43NTQwMjMzNTU4Njg3OCwgaGVpZ2h0OiA0MS42MzEwMzUwMzM4MDMxNywgdGltZTogMC4wMzA4MjI2NDk1NzI2NDk2LCBzdGF0dXM6ICdTaG93Jyxcblx0XHRcdH0sIHtcblx0XHRcdFx0aWQ6ICdqdDE5MzQ5eCcsIG5hbWU6ICdqdDE5MzQ5eCcsIHg6IDI3MS4yNSwgeTogMTY3LjczNzkyOTkzMjM5MzY2LCB3aWR0aDogNjAuNzU0MDIzMzU1ODY4NzUsIGhlaWdodDogNTguNjMxMDM1MDMzODAzMTYsIHRpbWU6IDAuMDMxNzg0NzIyMjIyMjIyMjIsIHN0YXR1czogJ1Nob3cnLFxuXHRcdFx0fSwge1xuXHRcdFx0XHRpZDogJ2p0MTkzZWtkJywgbmFtZTogJ2p0MTkzZWtkJywgeDogMjc0LjI1LCB5OiAxNjAuNzM3OTI5OTMyMzkzNjYsIHdpZHRoOiA2MC43NTQwMjMzNTU4Njg3NSwgaGVpZ2h0OiA1OC42MzEwMzUwMzM4MDMxNiwgdGltZTogMC4wNjM4ODYxMTExMTExMTExMiwgc3RhdHVzOiAnU2hvdycsXG5cdFx0XHR9LCB7XG5cdFx0XHRcdGlkOiAnanQxOTNocDEnLCBuYW1lOiAnanQxOTNocDEnLCB4OiAyODAuMjUsIHk6IDE2MC43Mzc5Mjk5MzIzOTM2Niwgd2lkdGg6IDYwLjc1NDAyMzM1NTg2ODc1LCBoZWlnaHQ6IDU4LjYzMTAzNTAzMzgwMzE2LCB0aW1lOiAwLjA4Njc3MjQyMDYzNDkyMDYzLCBzdGF0dXM6ICdTaG93Jyxcblx0XHRcdH0sIHtcblx0XHRcdFx0aWQ6ICdqdDE5NGNidicsIG5hbWU6ICdqdDE5NGNidicsIHg6IDI4MC4xMzI2OTc1ODIxNjc3LCB5OiAxNTguNjIwNjI3NTE0NTYxMzYsIHdpZHRoOiA2MC43NTQwMjMzNTU4Njg3NSwgaGVpZ2h0OiA1OC42MzEwMzUwMzM4MDMxNiwgdGltZTogMC4xMTk1ODU3MTQyODU3MTQzLCBzdGF0dXM6ICdTaG93Jyxcblx0XHRcdH0sIHtcblx0XHRcdFx0aWQ6ICdqdDE5M3VtZycsIG5hbWU6ICdqdDE5M3VtZycsIHg6IDI3NC4yNSwgeTogMTU0LjczNzkyOTkzMjM5MzY2LCB3aWR0aDogNjAuNzU0MDIzMzU1ODY4NzUsIGhlaWdodDogNTguNjMxMDM1MDMzODAzMTYsIHRpbWU6IDAuMTM0NTkwMDc5MzY1MDc5MzYsIHN0YXR1czogJ1Nob3cnLFxuXHRcdFx0fSwge1xuXHRcdFx0XHRpZDogJ2p0MTkzeTdxJywgbmFtZTogJ2p0MTkzeTdxJywgeDogMjY4LjI1LCB5OiAxNTUuNzM3OTI5OTMyMzkzNjYsIHdpZHRoOiA2MC43NTQwMjMzNTU4Njg3NSwgaGVpZ2h0OiA1OC42MzEwMzUwMzM4MDMxNiwgdGltZTogMC4xNjkzOTUyMzgwOTUyMzgxLCBzdGF0dXM6ICdTaG93Jyxcblx0XHRcdH0sIHtcblx0XHRcdFx0aWQ6ICdqdDE5NGh4ZycsIG5hbWU6ICdqdDE5NGh4ZycsIHg6IDI2MC4yNSwgeTogMTU3LjczNzkyOTkzMjM5MzY2LCB3aWR0aDogNjAuNzU0MDIzMzU1ODY4NzUsIGhlaWdodDogNTguNjMxMDM1MDMzODAzMTYsIHRpbWU6IDAuMjAyMzMzOTI4NTcxNDI4NTcsIHN0YXR1czogJ1Nob3cnLFxuXHRcdFx0fSwge1xuXHRcdFx0XHRpZDogJ2p0MTk0bWoxJywgbmFtZTogJ2p0MTk0bWoxJywgeDogMjUzLjI1LCB5OiAxNTYuNzM3OTI5OTMyMzkzNjYsIHdpZHRoOiA2MC43NTQwMjMzNTU4Njg3NSwgaGVpZ2h0OiA1OC42MzEwMzUwMzM4MDMxNiwgdGltZTogMC4yMjk2NzA4MzMzMzMzMzMzMiwgc3RhdHVzOiAnU2hvdycsXG5cdFx0XHR9LCB7XG5cdFx0XHRcdGlkOiAnanQxOTVxZ3cnLCBuYW1lOiAnanQxOTVxZ3cnLCB4OiAyNDYuMjUsIHk6IDE1Ni43Mzc5Mjk5MzIzOTM2Niwgd2lkdGg6IDYzLjY2MDQ3ODA1NzEzNzAzLCBoZWlnaHQ6IDU4LjYzMTAzNTAzMzgwMzE2LCB0aW1lOiAwLjI1MzU5MzUwMzkzNzAwNzg2LCBzdGF0dXM6ICdTaG93Jyxcblx0XHRcdH0sIHtcblx0XHRcdFx0aWQ6ICdqdDE5NHhxaCcsIG5hbWU6ICdqdDE5NHhxaCcsIHg6IDI1My4yNSwgeTogMTU2LjczNzkyOTkzMjM5MzY2LCB3aWR0aDogNTIuNzU0MDIzMzU1ODY4NzUsIGhlaWdodDogNTguNjMxMDM1MDMzODAzMTYsIHRpbWU6IDAuMjc2NDIyODE3NDYwMzE3NDQsIHN0YXR1czogJ1Nob3cnLFxuXHRcdFx0fSwge1xuXHRcdFx0XHRpZDogJ2p0MTk1NXUxJywgbmFtZTogJ2p0MTk1NXUxJywgeDogMjY1LjI1LCB5OiAxNTkuNzM3OTI5OTMyMzkzNjYsIHdpZHRoOiA0MC43NTQwMjMzNTU4Njg3NSwgaGVpZ2h0OiA0OS42MzEwMzUwMzM4MDMxNiwgdGltZTogMC4zNTY0ODMzMzMzMzMzMzMzLCBzdGF0dXM6ICdTaG93Jyxcblx0XHRcdH0sIHtcblx0XHRcdFx0aWQ6ICdqdDE5NWIzaScsIG5hbWU6ICdqdDE5NWIzaScsIHg6IDI2NS4yNSwgeTogMTQxLjczNzkyOTkzMjM5MzY2LCB3aWR0aDogNDAuNzU0MDIzMzU1ODY4NzUsIGhlaWdodDogNDkuNjMxMDM1MDMzODAzMTYsIHRpbWU6IDAuNDU5ODQ5ODAxNTg3MzAxNTQsIHN0YXR1czogJ1Nob3cnLFxuXHRcdFx0fSwge1xuXHRcdFx0XHRpZDogJ2p0MTk2MXY2JywgbmFtZTogJ2p0MTk2MXY2JywgeDogMjY5LjI1LCB5OiAxNDQuNzM3OTI5OTMyMzkzNjYsIHdpZHRoOiA0MC43NTQwMjMzNTU4Njg3NSwgaGVpZ2h0OiA0OS42MzEwMzUwMzM4MDMxNiwgdGltZTogMC40Nzg1MTc1MTk2ODUwMzkzNiwgc3RhdHVzOiAnU2hvdycsXG5cdFx0XHR9LCB7XG5cdFx0XHRcdGlkOiAnanQxOTY1YXonLCBuYW1lOiAnanQxOTY1YXonLCB4OiAyNjIuMjUsIHk6IDE0NC43Mzc5Mjk5MzIzOTM2Niwgd2lkdGg6IDQ3Ljc1NDAyMzM1NTg2ODc1LCBoZWlnaHQ6IDQ5LjYzMTAzNTAzMzgwMzE2LCB0aW1lOiAwLjUzNDI0OTYwNjI5OTIxMjYsIHN0YXR1czogJ1Nob3cnLFxuXHRcdFx0fSwge1xuXHRcdFx0XHRpZDogJ2p0MTk2OG5rJywgbmFtZTogJ2p0MTk2OG5rJywgeDogMjYyLjI1LCB5OiAxNDkuNzM3OTI5OTMyMzkzNjYsIHdpZHRoOiA0Ny43NTQwMjMzNTU4Njg3NSwgaGVpZ2h0OiA0OS42MzEwMzUwMzM4MDMxNiwgdGltZTogMC41OTA0MTA2Mjk5MjEyNTk4LCBzdGF0dXM6ICdTaG93Jyxcblx0XHRcdH0sIHtcblx0XHRcdFx0aWQ6ICdqdDE5NmF4MycsIG5hbWU6ICdqdDE5NmF4MycsIHg6IDI3MC4yNSwgeTogMTU4LjczNzkyOTkzMjM5MzY2LCB3aWR0aDogNDcuNzU0MDIzMzU1ODY4NzUsIGhlaWdodDogNDkuNjMxMDM1MDMzODAzMTYsIHRpbWU6IDAuNjY2MjU5NjQ1NjY5MjkxMywgc3RhdHVzOiAnU2hvdycsXG5cdFx0XHR9LCB7XG5cdFx0XHRcdGlkOiAnanQxOTZkeXMnLCBuYW1lOiAnanQxOTZkeXMnLCB4OiAyNjguMjUsIHk6IDE2NC43Mzc5Mjk5MzIzOTM2Niwgd2lkdGg6IDQ3Ljc1NDAyMzM1NTg2ODc1LCBoZWlnaHQ6IDQ5LjYzMTAzNTAzMzgwMzE2LCB0aW1lOiAwLjczNjgzNzAwNzg3NDAxNTcsIHN0YXR1czogJ1Nob3cnLFxuXHRcdFx0fSwge1xuXHRcdFx0XHRpZDogJ2p0MTk2Z3V1JywgbmFtZTogJ2p0MTk2Z3V1JywgeDogMjcyLjI1LCB5OiAxNTQuNzM3OTI5OTMyMzkzNjYsIHdpZHRoOiA0Ny43NTQwMjMzNTU4Njg3NSwgaGVpZ2h0OiA0OS42MzEwMzUwMzM4MDMxNiwgdGltZTogMC44MDEwNTM5MzcwMDc4NzQsIHN0YXR1czogJ1Nob3cnLFxuXHRcdFx0fSwge1xuXHRcdFx0XHRpZDogJ2p0MTk2azdoJywgbmFtZTogJ2p0MTk2azdoJywgeDogMjczLjI1LCB5OiAxNTcuNzM3OTI5OTMyMzkzNjYsIHdpZHRoOiA0Ny43NTQwMjMzNTU4Njg3NSwgaGVpZ2h0OiA0OS42MzEwMzUwMzM4MDMxNiwgdGltZTogMC44NjI2MzUwMzkzNzAwNzg3LCBzdGF0dXM6ICdTaG93Jyxcblx0XHRcdH1dLFxuXHRcdFx0Y2hpbGRyZW5OYW1lczogW10sXG5cdFx0XHRwYXJlbnROYW1lOiAnanQxOTIyeHUnLFxuXHRcdH0sIHtcblx0XHRcdGlkOiAnanQxOTIyeHUnLFxuXHRcdFx0bmFtZTogJ2p0MTkyMnh1Jyxcblx0XHRcdGxhYmVsOiAnMScsXG5cdFx0XHRjb2xvcjogJ3JnYmEoMjU1LDIxOSwwLDEpJyxcblx0XHRcdGluY2lkZW50czogW3tcblx0XHRcdFx0aWQ6ICdqdDE5MjJ4dScsIG5hbWU6ICdqdDE5MjJ4dScsIHg6IDI3NC4yNSwgeTogMTc0LCB3aWR0aDogODAsIGhlaWdodDogODEsIHRpbWU6IDAsIHN0YXR1czogJ1Nob3cnLFxuXHRcdFx0fSwge1xuXHRcdFx0XHRpZDogJ2p0MTkyd3liJywgbmFtZTogJ2p0MTkyd3liJywgeDogMjc0LjI1LCB5OiAxNzEuNzM3OTI5OTMyMzkzNjYsIHdpZHRoOiA4MS41MDgwNDY3MTE3Mzc1NiwgaGVpZ2h0OiA4My4yNjIwNzAwNjc2MDYzNCwgdGltZTogMC4wMzA4MjI2NDk1NzI2NDk2LCBzdGF0dXM6ICdTcGxpdCcsXG5cdFx0XHR9XSxcblx0XHRcdGNoaWxkcmVuTmFtZXM6IFsnanQxOTJ3eWMnLCAnanQxOTJ3eWQnXSxcblx0XHRcdHBhcmVudE5hbWU6ICcnLFxuXHRcdH1dO1xuXHRcdGNvbnN0IHVybCA9ICdodHRwczovL2NpbGRhdGEuY3Jicy51Y3NkLmVkdS9tZWRpYS92aWRlb3MvNTA1MDcvNTA1MDdfd2ViLm1wNCc7XG5cdFx0Y29uc3QgdmlkZW9XaWR0aCA9IDUwMDtcblx0XHRjb25zdCBwcmV2aWV3Tm90aWNlTGlzdCA9IFtcblx0XHRcdCdDZWxsc1xcJyBib2R5IHJhbmdlLicsXG5cdFx0XHQnVGhlIHRpbWUgdGhhdCBjZWxscyA8dT5zcGxpdDwvdT4sIDx1PmxlYXZlPC91PiwgPHU+b2JzY3VyZWQ8L3U+IGFuZCA8dT5TaG93IHVwPC91PiAoaWYgYXBwbGljYWJsZSkuJyxcblx0XHRdO1xuXHRcdGNvbnN0IHByZXZpZXdIZWFkZXIgPSAnUGxlYXNlIHNjYW4gdGhlIHZpZGVvIGFuZCBvYnNlcnZlIHRoZSBmb2xsb3dpbmcgdG8gaGVscCB5b3UgY29tcGxldGUgdGhlIHRhc2s6Jztcblx0XHRjb25zdCBlbXB0eUNoZWNrU3VibWlzc2lvbldhcm5pbmdUZXh0ID0gJ1BsZWFzZSBhbm5vdGF0ZSBBTkQgdHJhY2sgb25lIHVubWFya2VkIGNlbGwgdG8gY29tcGxldGUgdGhpcyB0YXNrLic7XG5cdFx0Y29uc3QgZW1wdHlDaGVja0Fubm90YXRpb25JdGVtV2FybmluZ1RleHQgPSAnU3RlcCAyOiBQbGVhc2UgdHJhY2sgdGhlIGNlbGwgYm91bmQgYnkgdGhpcyBib3gnO1xuXHRcdGNvbnN0IGVtcHR5QW5ub3RhdGlvblJlbWluZGVyVGV4dCA9ICdTdGVwIDE6IENsaWNrIHRoZSBidXR0b24gYWJvdmUgdG8gYWRkIGEgbmV3IGJveCBhcm91bmQgYSBjZWxsJztcblxuXHRcdHRoaXMuZmlsZUlucHV0ID0gUmVhY3QuY3JlYXRlUmVmKCk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdG15U3RyZWFtOiBudWxsLFxuXHRcdFx0cmVzdWx0OiBudWxsLFxuXHRcdFx0aW50ZXJwb2xhdGlvblJlc3VsdDogbnVsbCxcblx0XHRcdGlucHV0OiB7XG5cdFx0XHRcdGRlZmF1bHRBbm5vdGF0aW9uczogSlNPTi5zdHJpbmdpZnkoZGVmYXVsdEFubm90YXRpb25zKSxcblx0XHRcdFx0dXJsLFxuXHRcdFx0XHR2aWRlb1dpZHRoLFxuXHRcdFx0XHRwcmV2aWV3SGVhZGVyLFxuXHRcdFx0XHRwcmV2aWV3Tm90aWNlTGlzdCxcblx0XHRcdFx0ZW1wdHlDaGVja1N1Ym1pc3Npb25XYXJuaW5nVGV4dCxcblx0XHRcdFx0ZW1wdHlDaGVja0Fubm90YXRpb25JdGVtV2FybmluZ1RleHQsXG5cdFx0XHRcdGVtcHR5QW5ub3RhdGlvblJlbWluZGVyVGV4dCxcblx0XHRcdH0sXG5cdFx0XHRwYXJhbXM6IHtcblx0XHRcdFx0ZGVmYXVsdEFubm90YXRpb25zOiBbXSxcblx0XHRcdFx0dXJsLFxuXHRcdFx0XHR2aWRlb1dpZHRoLFxuXHRcdFx0XHRwcmV2aWV3SGVhZGVyLFxuXHRcdFx0XHRwcmV2aWV3Tm90aWNlTGlzdCxcblx0XHRcdFx0ZW1wdHlDaGVja1N1Ym1pc3Npb25XYXJuaW5nVGV4dCxcblx0XHRcdFx0ZW1wdHlDaGVja0Fubm90YXRpb25JdGVtV2FybmluZ1RleHQsXG5cdFx0XHRcdGVtcHR5QW5ub3RhdGlvblJlbWluZGVyVGV4dCxcblx0XHRcdH1cblx0XHR9XG5cdFx0Ly9lbmQgY29udGVudCBmcm9tIHJlYWN0IHRvb2xcblx0XHQvL2Nsb3NlIGNvbnN0cnVjdG9yIHByb3BzXHRcblx0fVxuXG5cdGhhbmRsZVJlc3VsdFN1Ym1pdCA9IHJlc3VsdCA9PiB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IHJlc3VsdDogcmVzdWx0IH0pO1xuXG5cdH1cblxuXHRoYW5kbGVDaGFuZ2UgPSBldmVudCA9PiB7XG5cdFx0Y29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuXHRcdGNvbnN0IG5hbWUgPSB0YXJnZXQubmFtZTtcblx0XHRjb25zdCB2YWx1ZSA9IHRhcmdldC50eXBlID09PSBcImNoZWNrYm94XCIgPyB0YXJnZXQuY2hlY2tlZCA6IHRhcmdldC52YWx1ZTtcblx0XHR0aGlzLnNldFN0YXRlKChwcmVTdGF0ZSkgPT4ge1xuXHRcdFx0Y29uc3QgeyBpbnB1dCB9ID0gcHJlU3RhdGU7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRpbnB1dDogeyAuLi5pbnB1dCwgW25hbWVdOiB2YWx1ZSB9XG5cdFx0XHR9XG5cblx0XHR9KVxuXG5cdFx0Y29uc29sZS5sb2coXCJWaWRlbyB1cmwgY2FuIGJlIGZvdW5kIGJlbG93OlwiKVxuXHRcdGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUpKVxuXHR9XG5cblx0aGFuZGxlRXJyb3JTdWJtaXQgPSBldmVudCA9PiB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHR0aGlzLnNldFN0YXRlKChwcmVTdGF0ZSkgPT4ge1xuXHRcdFx0Y29uc3QgeyBpbnB1dCB9ID0gcHJlU3RhdGU7XG5cblx0XHRcdGNvbnN0IGFubm90YXRpb25zID0gdGhpcy5pc0pzb25TdHJpbmcoaW5wdXQuZGVmYXVsdEFubm90YXRpb25zKSA/IGlucHV0LmRlZmF1bHRBbm5vdGF0aW9ucyA6IFwiW11cIjtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHBhcmFtczoge1xuXHRcdFx0XHRcdGRlZmF1bHRBbm5vdGF0aW9uczogSlNPTi5wYXJzZShhbm5vdGF0aW9ucyksXG5cdFx0XHRcdFx0dXJsOiBpbnB1dC51cmwsXG5cdFx0XHRcdFx0YW5ub3RhdGlvbldpZHRoOiBwYXJzZUludChpbnB1dC5hbm5vdGF0aW9uV2lkdGgsIDEwKVxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdH1cblx0XHQpO1xuXHR9XG5cdGhhbmRsZVN1Ym1pdCA9IGFzeW5jIGV2ZW50ID0+IHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGxldCByZXN1bHQgPSB7fTtcblx0XHRpZiAodGhpcy5maWxlSW5wdXQuY3VycmVudC5maWxlc1swXSkge1xuXHRcdFx0Y29uc3QgcmVhZEZpbGVQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0XHRjb25zdCBmaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcblx0XHRcdFx0ZmlsZVJlYWRlci5vbmxvYWQgPSBldmVudCA9PiB7XG5cdFx0XHRcdFx0aWYgKCF0aGlzLmlzSnNvblN0cmluZyhldmVudC50YXJnZXQucmVzdWx0KSlcblx0XHRcdFx0XHRcdHJlamVjdCgnV3JvbmcganNvbiBmb3JtYXQnKTtcblx0XHRcdFx0XHRsZXQgcmVzdWx0ID0gSlNPTi5wYXJzZShldmVudC50YXJnZXQucmVzdWx0KTtcblx0XHRcdFx0XHRyZXNvbHZlKHJlc3VsdClcblx0XHRcdFx0fVxuXHRcdFx0XHRmaWxlUmVhZGVyLm9uZXJyb3IgPSBldmVudCA9PiB7XG5cdFx0XHRcdFx0cmVqZWN0KGV2ZW50KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRmaWxlUmVhZGVyLnJlYWRBc1RleHQodGhpcy5maWxlSW5wdXQuY3VycmVudC5maWxlc1swXSk7XG5cdFx0XHR9KVxuXHRcdFx0cmVzdWx0ID0gYXdhaXQgcmVhZEZpbGVQcm9taXNlO1xuXHRcdH1cblx0XHRsZXQgeyB1cmwgPSAnJywgdmlkZW9XaWR0aCA9IDAsIGRlZmF1bHRBbm5vdGF0aW9ucyA9IFtdIH0gPSByZXN1bHQ7XG5cdFx0dGhpcy5zZXRTdGF0ZSgocHJlU3RhdGUpID0+IHtcblx0XHRcdGNvbnN0IHsgaW5wdXQgfSA9IHByZVN0YXRlO1xuXHRcdFx0ZGVmYXVsdEFubm90YXRpb25zID0gW11cblx0XHRcdGlmIChyZXN1bHQuYW5ub3RhdGlvbnMpIHtcblx0XHRcdFx0aWYgKHJlc3VsdC5hbm5vdGF0aW9ucy5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHRkZWZhdWx0QW5ub3RhdGlvbnMgPSB0aGlzLmlzSnNvblN0cmluZyhpbnB1dC5kZWZhdWx0QW5ub3RhdGlvbnMpID8gSlNPTi5wYXJzZShpbnB1dC5kZWZhdWx0QW5ub3RhdGlvbnMpIDogXCJbXVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdGRlZmF1bHRBbm5vdGF0aW9ucyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocmVzdWx0LmFubm90YXRpb25zKSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC8vZGVmYXVsdEFubm90YXRpb25zID0gdGhpcy5pc0pzb25TdHJpbmcoaW5wdXQuZGVmYXVsdEFubm90YXRpb25zKSA/IEpTT04ucGFyc2UoaW5wdXQuZGVmYXVsdEFubm90YXRpb25zKSA6IFwiW11cIjtcblx0XHRcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHBhcmFtczoge1xuXHRcdFx0XHRcdGRlZmF1bHRBbm5vdGF0aW9ucyxcblx0XHRcdFx0XHR1cmw6IGlucHV0LnVybCxcblx0XHRcdFx0XHR2aWRlb1dpZHRoOiAodmlkZW9XaWR0aCAhPT0gMCA/IHZpZGVvV2lkdGggOiBwYXJzZUludChpbnB1dC52aWRlb1dpZHRoLCAxMCkpXG5cblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHR9XG5cdFx0KTtcblx0XHQvLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlKSlcblx0fVxuXG5cdGlzSnNvblN0cmluZyA9IHN0ciA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdEpTT04ucGFyc2Uoc3RyKTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0Ly9mdW5jdGlvbiBmb3IgZ2V0dGluZyBpbnRlcnBvbGF0ZWQgZGF0YSBzdGFydHNcblx0Z2V0SW50ZXJwb2xhdGVkRGF0YSA9IGV2ZW50ID0+IHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGNvbnNvbGUubG9nKFwiTG9vayBoZXJlXCIpXG5cdFx0Y29uc29sZS5sb2coXCJJbnRlcnBvbGF0aW9uIGZ1Y250aW9uXCIgKyBKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlLnJlc3VsdCkpXG5cdFx0Ly9jb25zdCBkdXJhdGlvbiA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5zdGF0ZS5yZXN1bHQuZHVyYXRpb24pKVxuXHRcdGNvbnN0IGR1cmF0aW9uID0gNS4wNFxuXHRcdGNvbnNvbGUubG9nKFwiSSBhbSBoZXJlXCIpXG5cdFx0Y29uc29sZS5sb2coZHVyYXRpb24pXG5cdFx0Y29uc3QgdGltZXJhdGUgPSBkdXJhdGlvbiAqIDYwXG5cdFx0Ly9jb2xsZWN0IGZyYW1lL3NlY29uZCBmb3IgdGhlIHZpZGVvXG5cdFx0Y29uc3QgdGltZU5vdyA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkudG9TdHJpbmcoMzYpO1xuXHRcdGxldCBpbnRlcnBvbGF0ZWRSZXN1bHQgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUucmVzdWx0KSk7XG5cdFx0bGV0IHRlbXAgPSBpbnRlcnBvbGF0ZWRSZXN1bHRcblx0XHRjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0ZW1wKSlcblx0XHRmb3IgKGxldCBhbm5vdGF0aW9uID0gMDsgYW5ub3RhdGlvbiA8IHRlbXAuYW5ub3RhdGlvbnMubGVuZ3RoOyBhbm5vdGF0aW9uKyspIHtcblx0XHRcdGZvciAobGV0IGluY2lkZW50ID0gMDsgaW5jaWRlbnQgPCB0ZW1wLmFubm90YXRpb25zW2Fubm90YXRpb25dLmluY2lkZW50cy5sZW5ndGg7IGluY2lkZW50KyspIHtcblx0XHRcdFx0dGVtcC5hbm5vdGF0aW9uc1thbm5vdGF0aW9uXS5pbmNpZGVudHNbaW5jaWRlbnRdLnBhcmVudE5hbWUgPSB0ZW1wLmFubm90YXRpb25zW2Fubm90YXRpb25dLnBhcmVudE5hbWVcblx0XHRcdH1cblx0XHR9XG5cdFx0Zm9yIChsZXQgYW5ub3RhdGlvbiA9IDA7IGFubm90YXRpb24gPCB0ZW1wLmFubm90YXRpb25zLmxlbmd0aDsgYW5ub3RhdGlvbisrKSB7XG5cblx0XHRcdGZvciAobGV0IGluY2lkZW50ID0gMDsgaW5jaWRlbnQgPCB0ZW1wLmFubm90YXRpb25zW2Fubm90YXRpb25dLmluY2lkZW50cy5sZW5ndGg7IGluY2lkZW50KyspIHtcblx0XHRcdFx0dGVtcC5hbm5vdGF0aW9uc1thbm5vdGF0aW9uXS5pbmNpZGVudHNbaW5jaWRlbnRdLmxhYmVsID0gdGVtcC5hbm5vdGF0aW9uc1thbm5vdGF0aW9uXS5sYWJlbFxuXHRcdFx0fVxuXHRcdH1cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGludGVycG9sYXRlZFJlc3VsdC5hbm5vdGF0aW9ucy5sZW5ndGg7IGkrKykge1xuXG5cdFx0XHRsZXQgYW5ub3RJbmNpZGVudExlbmd0aCA9IGludGVycG9sYXRlZFJlc3VsdC5hbm5vdGF0aW9uc1tpXS5pbmNpZGVudHMubGVuZ3RoXG5cdFx0XHRpZiAoYW5ub3RJbmNpZGVudExlbmd0aCA9PT0gMSkge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcIlRoaXMgaXMgbm90IHBvc3NpYmxlIDpQXCIpXG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmIChhbm5vdEluY2lkZW50TGVuZ3RoID4gMSkge1xuXG5cdFx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgYW5ub3RJbmNpZGVudExlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0aWYgKChqICE9IGFubm90SW5jaWRlbnRMZW5ndGggLSAxKSAmJiAoaW50ZXJwb2xhdGVkUmVzdWx0LmFubm90YXRpb25zW2ldLmluY2lkZW50c1tqICsgMV0uc3RhdHVzID09IFwiU2hvd1wiIHx8IGludGVycG9sYXRlZFJlc3VsdC5hbm5vdGF0aW9uc1tpXS5pbmNpZGVudHNbaiArIDFdLnN0YXR1cyA9PSBcIlwiIHx8IGludGVycG9sYXRlZFJlc3VsdC5hbm5vdGF0aW9uc1tpXS5pbmNpZGVudHNbaiArIDFdLnN0YXR1cyA9PSBcIlNwbGl0XCIpKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBzb3VyY2UgPSBpbnRlcnBvbGF0ZWRSZXN1bHQuYW5ub3RhdGlvbnNbaV0uaW5jaWRlbnRzW2pdXG5cdFx0XHRcdFx0XHRjb25zdCB0YXJnZXQgPSBpbnRlcnBvbGF0ZWRSZXN1bHQuYW5ub3RhdGlvbnNbaV0uaW5jaWRlbnRzW2ogKyAxXVxuXHRcdFx0XHRcdFx0Y29uc3QgdGRpZmYgPSAodGFyZ2V0LnRpbWUgKiB0aW1lcmF0ZSkgLSAoc291cmNlLnRpbWUgKiB0aW1lcmF0ZSlcblx0XHRcdFx0XHRcdGNvbnN0IHhTbG9wZSA9ICh0YXJnZXQueCAtIHNvdXJjZS54KSAvIHRkaWZmXG5cdFx0XHRcdFx0XHRjb25zdCB5U2xvcGUgPSAodGFyZ2V0LnkgLSBzb3VyY2UueSkgLyB0ZGlmZlxuXHRcdFx0XHRcdFx0Y29uc3Qgd1Nsb3BlID0gKHRhcmdldC53aWR0aCAtIHNvdXJjZS53aWR0aCkgLyB0ZGlmZlxuXHRcdFx0XHRcdFx0Y29uc3QgaFNsb3BlID0gKHRhcmdldC5oZWlnaHQgLSBzb3VyY2UuaGVpZ2h0KSAvIHRkaWZmXG5cdFx0XHRcdFx0XHRjb25zdCBzRnJhbWUgPSBNYXRoLnJvdW5kKHNvdXJjZS50aW1lICogdGltZXJhdGUpXG5cdFx0XHRcdFx0XHRjb25zdCB0RnJhbWUgPSBNYXRoLnJvdW5kKHRhcmdldC50aW1lICogdGltZXJhdGUpXG5cdFx0XHRcdFx0XHRmb3IgKGxldCBrID0gc0ZyYW1lICsgMTsgayA8PSB0RnJhbWU7IGsrKykge1xuXHRcdFx0XHRcdFx0XHRsZXQgb2ZmID0gayAtIE1hdGgucm91bmQoc291cmNlLnRpbWUgKiB0aW1lcmF0ZSlcblx0XHRcdFx0XHRcdFx0bGV0IGludGVycG9sWCA9IChzb3VyY2UueCArICh4U2xvcGUgKiBvZmYpKS50b0ZpeGVkKDIpXG5cdFx0XHRcdFx0XHRcdGxldCBpbnRlcnBvbFkgPSAoc291cmNlLnkgKyAoeVNsb3BlICogb2ZmKSkudG9GaXhlZCgyKVxuXHRcdFx0XHRcdFx0XHRsZXQgaW50ZXJwb2xXID0gKHNvdXJjZS53aWR0aCArICh3U2xvcGUgKiBvZmYpKS50b0ZpeGVkKDIpXG5cdFx0XHRcdFx0XHRcdGxldCBpbnRlcnBvbEggPSAoc291cmNlLmhlaWdodCArIChoU2xvcGUgKiBvZmYpKS50b0ZpeGVkKDIpXG5cdFx0XHRcdFx0XHRcdHRlbXAuYW5ub3RhdGlvbnNbaV0uaW5jaWRlbnRzLnNwbGljZShqICsgMSwgMCwgKHtcblx0XHRcdFx0XHRcdFx0XHRpZDogYCR7dGltZU5vd31gLCBuYW1lOiBgJHt0aW1lTm93fWAsIHg6IGludGVycG9sWCwgeTogaW50ZXJwb2xZLCBoZWlnaHQ6IGludGVycG9sSCwgd2lkdGg6IGludGVycG9sVywgdGltZTogaywgc3RhdHVzLCBwYXJlbnROYW1lOiBpbnRlcnBvbGF0ZWRSZXN1bHQuYW5ub3RhdGlvbnNbaV0ucGFyZW50TmFtZSwgbGFiZWw6IGludGVycG9sYXRlZFJlc3VsdC5hbm5vdGF0aW9uc1tpXS5sYWJlbFxuXHRcdFx0XHRcdFx0XHR9KSk7XG5cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdH0gLy9jbG9zZSBpZiBcblxuXHRcdFx0XHRcdGlmICgoaiA9PSBhbm5vdEluY2lkZW50TGVuZ3RoIC0gMSkgJiYgKGludGVycG9sYXRlZFJlc3VsdC5hbm5vdGF0aW9uc1tpXS5pbmNpZGVudHNbal0uc3RhdHVzID09IFwiU2hvd1wiIHx8IGludGVycG9sYXRlZFJlc3VsdC5hbm5vdGF0aW9uc1tpXS5pbmNpZGVudHNbal0uc3RhdHVzID09IFwiXCIgfHwgaW50ZXJwb2xhdGVkUmVzdWx0LmFubm90YXRpb25zW2ldLmluY2lkZW50c1tqICsgMV0uc3RhdHVzID09IFwiU3BsaXRcIikpIHtcblxuXHRcdFx0XHRcdFx0Y29uc3Qgc291cmNlID0gaW50ZXJwb2xhdGVkUmVzdWx0LmFubm90YXRpb25zW2ldLmluY2lkZW50c1tqXVxuXHRcdFx0XHRcdFx0Y29uc3QgdGFyZ2V0ID0gaW50ZXJwb2xhdGVkUmVzdWx0LmFubm90YXRpb25zW2ldLmluY2lkZW50c1tqXVxuXHRcdFx0XHRcdFx0Y29uc3QgdGRpZmYgPSAoZHVyYXRpb24gKiB0aW1lcmF0ZSkgLSAoc291cmNlLnRpbWUgKiB0aW1lcmF0ZSlcblx0XHRcdFx0XHRcdGNvbnN0IHhTbG9wZSA9ICh0YXJnZXQueCAtIHNvdXJjZS54KSAvIHRkaWZmXG5cdFx0XHRcdFx0XHRjb25zdCB5U2xvcGUgPSAodGFyZ2V0LnkgLSBzb3VyY2UueSkgLyB0ZGlmZlxuXHRcdFx0XHRcdFx0Y29uc3Qgd1Nsb3BlID0gKHRhcmdldC53aWR0aCAtIHNvdXJjZS53aWR0aCkgLyB0ZGlmZlxuXHRcdFx0XHRcdFx0Y29uc3QgaFNsb3BlID0gKHRhcmdldC5oZWlnaHQgLSBzb3VyY2UuaGVpZ2h0KSAvIHRkaWZmXG5cdFx0XHRcdFx0XHRjb25zdCBzRnJhbWUgPSBNYXRoLnJvdW5kKHNvdXJjZS50aW1lICogdGltZXJhdGUpXG5cdFx0XHRcdFx0XHRjb25zdCB0RnJhbWUgPSBNYXRoLnJvdW5kKHRhcmdldC50aW1lICogdGltZXJhdGUpXG5cdFx0XHRcdFx0XHRmb3IgKGxldCBrID0gc0ZyYW1lICsgMTsgayA8PSB0RnJhbWU7IGsrKykge1xuXHRcdFx0XHRcdFx0XHRsZXQgb2ZmID0gayAtIE1hdGgucm91bmQoc291cmNlLnRpbWUgKiB0aW1lcmF0ZSlcblx0XHRcdFx0XHRcdFx0bGV0IGludGVycG9sWCA9IHNvdXJjZS54ICsgKHhTbG9wZSAqIG9mZilcblx0XHRcdFx0XHRcdFx0bGV0IGludGVycG9sWSA9IHNvdXJjZS55ICsgKHlTbG9wZSAqIG9mZilcblx0XHRcdFx0XHRcdFx0bGV0IGludGVycG9sVyA9IHNvdXJjZS53aWR0aCArICh3U2xvcGUgKiBvZmYpXG5cdFx0XHRcdFx0XHRcdGxldCBpbnRlcnBvbEggPSBzb3VyY2UuaGVpZ2h0ICsgKGhTbG9wZSAqIG9mZilcblx0XHRcdFx0XHRcdFx0dGVtcC5hbm5vdGF0aW9uc1tpXS5pbmNpZGVudHMuc3BsaWNlKGogKyAxLCAwLCAoe1xuXHRcdFx0XHRcdFx0XHRcdGlkOiBgJHt0aW1lTm93fWAsIG5hbWU6IGAke3RpbWVOb3d9YCwgeDogaW50ZXJwb2xYLCB5OiBpbnRlcnBvbFksIGhlaWdodDogaW50ZXJwb2xILCB3aWR0aDogaW50ZXJwb2xXLCB0aW1lOiBrLCBzdGF0dXMsIHBhcmVudE5hbWU6IHRlbXAuYW5ub3RhdGlvbnNbaV0ucGFyZW50TmFtZSwgbGFiZWw6IGludGVycG9sYXRlZFJlc3VsdC5hbm5vdGF0aW9uc1tpXS5sYWJlbFxuXHRcdFx0XHRcdFx0XHR9KSk7XG5cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdH0gLy9jbG9zZSBzZWNvbmQgaWZcblxuXG5cblx0XHRcdFx0fSAvL2Nsb3NlIGZvciBsb29wIGZvciBqXG5cblxuXG5cdFx0XHR9IC8vY2xvc2UgZWxzZS1pZiBhbm5vdGxlbmd0aD4xXG5cblx0XHR9IC8vY2xvc2UgZm9yIGxvb3AgZm9yIGlcblxuXHRcdC8vc29ydCB0aGUgdGVtcCBvYmplY3QgYmFzZWQgb24gdGltZS9mcmFtZSB2YWx1ZVxuXHRcdGxldCBpbnRlcnBvbF9kYXRhX2FyciA9IFtdLCBzbm8gPSAxXG5cdFx0Y29uc29sZS5sb2coXCJUZW1wIGFycmF5OiBcIiArIEpTT04uc3RyaW5naWZ5KHRlbXApKVxuXHRcdGZvciAobGV0IHggPSAwOyB4IDwgdGVtcC5hbm5vdGF0aW9ucy5sZW5ndGg7IHgrKykge1xuXHRcdFx0Zm9yIChsZXQgeSA9IDA7IHkgPCB0ZW1wLmFubm90YXRpb25zW3hdLmluY2lkZW50cy5sZW5ndGg7IHkrKykge1xuXHRcdFx0XHRpZiAoISh0ZW1wLmFubm90YXRpb25zW3hdLmluY2lkZW50c1t5XS50aW1lID4gMCAmJiB0ZW1wLmFubm90YXRpb25zW3hdLmluY2lkZW50c1t5XS50aW1lIDwgMSkpXG5cdFx0XHRcdFx0aW50ZXJwb2xfZGF0YV9hcnIucHVzaCh0ZW1wLmFubm90YXRpb25zW3hdLmluY2lkZW50c1t5XSlcblx0XHRcdH1cblx0XHR9XG5cblx0XHRmb3IgKGxldCBwID0gMDsgcCA8IGludGVycG9sX2RhdGFfYXJyLmxlbmd0aDsgcCsrKSB7XG5cdFx0XHRmb3IgKGxldCBxID0gMCwgc3RvcCA9IGludGVycG9sX2RhdGFfYXJyLmxlbmd0aCAtIHAgLSAxOyBxIDwgc3RvcDsgcSsrKSB7XG5cdFx0XHRcdGlmIChpbnRlcnBvbF9kYXRhX2FycltxXS50aW1lID09IGludGVycG9sX2RhdGFfYXJyW3EgKyAxXS50aW1lKSB7XG5cdFx0XHRcdFx0dmFyIHN3YXAgPSBpbnRlcnBvbF9kYXRhX2FycltxXTtcblx0XHRcdFx0XHRpbnRlcnBvbF9kYXRhX2FycltxXSA9IGludGVycG9sX2RhdGFfYXJyW3EgKyAxXTtcblx0XHRcdFx0XHRpbnRlcnBvbF9kYXRhX2FycltxICsgMV0gPSBzd2FwO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChpbnRlcnBvbF9kYXRhX2FycltxXS50aW1lID4gaW50ZXJwb2xfZGF0YV9hcnJbcSArIDFdLnRpbWUpIHtcblx0XHRcdFx0XHR2YXIgc3dhcCA9IGludGVycG9sX2RhdGFfYXJyW3FdO1xuXHRcdFx0XHRcdGludGVycG9sX2RhdGFfYXJyW3FdID0gaW50ZXJwb2xfZGF0YV9hcnJbcSArIDFdO1xuXHRcdFx0XHRcdGludGVycG9sX2RhdGFfYXJyW3EgKyAxXSA9IHN3YXA7XG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXHRcdH1cblx0XHQvL3NvcnRpbmcgZW5kc1xuXG5cblx0XHQvL2FkZCBTbm8vSUQgdG8gZWFjaCByb3dcblx0XHRmb3IgKGxldCBpZCA9IDA7IGlkIDwgaW50ZXJwb2xfZGF0YV9hcnIubGVuZ3RoOyBpZCsrKSB7XG5cdFx0XHRpbnRlcnBvbF9kYXRhX2FycltpZF0uc2VyaWFsID0gaW50ZXJwb2xfZGF0YV9hcnJbaWRdLmxhYmVsXG5cdFx0XHQvL3NubysrXG5cdFx0fVxuXG5cdFx0Zm9yIChsZXQgcGEgPSAwOyBwYSA8IGludGVycG9sX2RhdGFfYXJyLmxlbmd0aDsgcGErKykge1xuXHRcdFx0Zm9yIChsZXQgcWEgPSAwLCBzdG9wYSA9IGludGVycG9sX2RhdGFfYXJyLmxlbmd0aCAtIHBhIC0gMTsgcWEgPCBzdG9wYTsgcWErKykge1xuXHRcdFx0XHQvLyBpZihpbnRlcnBvbF9kYXRhX2FycltxYV0udGltZSA9PSBpbnRlcnBvbF9kYXRhX2FycltxYSsxXS50aW1lKXtcblx0XHRcdFx0Ly8gXHR2YXIgc3dhcGEgPSBpbnRlcnBvbF9kYXRhX2FycltxYV07XG5cdFx0XHRcdC8vIFx0aW50ZXJwb2xfZGF0YV9hcnJbcWFdID0gaW50ZXJwb2xfZGF0YV9hcnJbcWErMV07XG5cdFx0XHRcdC8vIFx0aW50ZXJwb2xfZGF0YV9hcnJbcWErMV0gPSBzd2FwYTtcblx0XHRcdFx0Ly8gfVxuXHRcdFx0XHRpZiAoaW50ZXJwb2xfZGF0YV9hcnJbcWFdLnNlcmlhbCA+IGludGVycG9sX2RhdGFfYXJyW3FhICsgMV0uc2VyaWFsKSB7XG5cdFx0XHRcdFx0dmFyIHN3YXBhID0gaW50ZXJwb2xfZGF0YV9hcnJbcWFdO1xuXHRcdFx0XHRcdGludGVycG9sX2RhdGFfYXJyW3FhXSA9IGludGVycG9sX2RhdGFfYXJyW3FhICsgMV07XG5cdFx0XHRcdFx0aW50ZXJwb2xfZGF0YV9hcnJbcWEgKyAxXSA9IHN3YXBhO1xuXHRcdFx0XHR9XG5cblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gZm9yKGxldCBsYWJlbG5vPTA7IGxhYmVsbm88aW50ZXJwb2xfZGF0YV9hcnIubGVuZ3RoOyBsYWJlbG5vKyspe1xuXHRcdC8vIFx0dmFyIG4gPSBpbnRlcnBvbF9kYXRhX2FycltsYWJlbG5vXS5sYWJlbC5zZWFyY2goXCItXCIpO1xuXHRcdC8vIFx0aWYobjwwKXtcblx0XHQvLyBcdFx0aW50ZXJwb2xfZGF0YV9hcnJbbGFiZWxub10uc2VyaWFsID0gaW50ZXJwb2xfZGF0YV9hcnJbbGFiZWxub10ubGFiZWxcblx0XHQvLyBcdH1cblx0XHQvLyBcdGVsc2Uge1xuXHRcdC8vIFx0XHRpbnRlcnBvbF9kYXRhX2FycltsYWJlbG5vXS5zZXJpYWwgPSBpbnRlcnBvbF9kYXRhX2FycltsYWJlbG5vXS5sYWJlbFtuKzFdXG5cdFx0Ly8gXHR9XG5cdFx0Ly8gfVxuXHRcdC8vU25vL0lEIGFkZGVkXG5cblx0XHR0aGlzLnNldFN0YXRlKHsgaW50ZXJwb2xhdGlvblJlc3VsdDogaW50ZXJwb2xfZGF0YV9hcnIgfSk7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJleHBvcnQtaW50ZXJwb2xcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblx0fVxuXHQvL2Z1bmN0aW9uIGZvciBnZXR0aW5nIGludGVycG9sYXRlZCBkYXRhIGVuZHNcblxuXHRjcmVhdGVUYWJsZSA9IGUgPT4ge1xuXHRcdGxldCB0ZW1wID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlLmludGVycG9sYXRpb25SZXN1bHQpKTtcblx0XHRjb25zb2xlLmxvZyhcIlRhYmxlIHRlbXA9IFxcblwiICsgSlNPTi5zdHJpbmdpZnkodGhpcy5zdGF0ZS5pbnRlcnBvbGF0aW9uUmVzdWx0KSk7XG5cdFx0dmFyIHRhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnRlcnBvbC10YWJsZVwiKTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRlbXAubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuXHRcdFx0dmFyIGNlbGxfc25vID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKVxuXHRcdFx0Y2VsbF9zbm8uaW5uZXJIVE1MID0gdGVtcFtpXS5zZXJpYWxcblx0XHRcdHJvdy5hcHBlbmRDaGlsZChjZWxsX3Nubylcblx0XHRcdHZhciBjZWxsX3hfbWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcblx0XHRcdHZhciBjZWxsX3lfbWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcblx0XHRcdHZhciBjZWxsX3dpZHRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcblx0XHRcdHZhciBjZWxsX2hlaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG5cdFx0XHR2YXIgY2VsbF9mcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG5cdFx0XHR2YXIgY2VsbF9sb3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcblx0XHRcdHZhciBjZWxsX29jY2x1ZGVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcblx0XHRcdHZhciBjZWxsX2dlbmVyYXRlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG5cdFx0XHR2YXIgY2VsbF9sYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG5cdFx0XHR2YXIgY2VsbF9wYXJlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuXHRcdFx0Y2VsbF94X21pbi5pbm5lckhUTUwgPSB0ZW1wW2ldLng7XG5cdFx0XHRjZWxsX3lfbWluLmlubmVySFRNTCA9IHRlbXBbaV0ueTtcblx0XHRcdGNlbGxfd2lkdGguaW5uZXJIVE1MID0gdGVtcFtpXS53aWR0aDtcblx0XHRcdGNlbGxfaGVpZ2h0LmlubmVySFRNTCA9IHRlbXBbaV0uaGVpZ2h0O1xuXHRcdFx0Y2VsbF9mcmFtZS5pbm5lckhUTUwgPSB0ZW1wW2ldLnRpbWU7XG5cdFx0XHRjZWxsX2xvc3QuaW5uZXJIVE1MID0gMDtcblx0XHRcdGNlbGxfb2NjbHVkZWQuaW5uZXJIVE1MID0gMDtcblx0XHRcdGNlbGxfZ2VuZXJhdGVkLmlubmVySFRNTCA9IDA7XG5cdFx0XHRjZWxsX2xhYmVsLmlubmVySFRNTCA9IHRlbXBbaV0ubGFiZWw7XG5cdFx0XHRjZWxsX3BhcmVudC5pbm5lckhUTUwgPSB0ZW1wW2ldLnBhcmVudE5hbWU7XG5cdFx0XHQvL3Jvdy5hcHBlbmRDaGlsZChjZWxsX2lkKTtcblx0XHRcdHJvdy5hcHBlbmRDaGlsZChjZWxsX3hfbWluKTtcblx0XHRcdHJvdy5hcHBlbmRDaGlsZChjZWxsX3lfbWluKTtcblx0XHRcdHJvdy5hcHBlbmRDaGlsZChjZWxsX3dpZHRoKTtcblx0XHRcdHJvdy5hcHBlbmRDaGlsZChjZWxsX2hlaWdodCk7XG5cdFx0XHRyb3cuYXBwZW5kQ2hpbGQoY2VsbF9mcmFtZSk7XG5cdFx0XHRyb3cuYXBwZW5kQ2hpbGQoY2VsbF9sb3N0KTtcblx0XHRcdHJvdy5hcHBlbmRDaGlsZChjZWxsX29jY2x1ZGVkKTtcblx0XHRcdHJvdy5hcHBlbmRDaGlsZChjZWxsX2dlbmVyYXRlZCk7XG5cdFx0XHRyb3cuYXBwZW5kQ2hpbGQoY2VsbF9sYWJlbCk7XG5cdFx0XHRyb3cuYXBwZW5kQ2hpbGQoY2VsbF9wYXJlbnQpO1xuXHRcdFx0dGFibGUuYXBwZW5kQ2hpbGQocm93KTtcblx0XHR9XG5cdFx0dGhpcy5kb3dubG9hZEludGVycG9sVGFibGUoKTtcblx0fVxuXG5cdGV4cG9ydF90YWJsZV90b19jc3YgPSAoaHRtbCwgZmlsZW5hbWUpID0+IHtcblx0XHR2YXIgY3N2ID0gW107XG5cdFx0dmFyIHJvd3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwidGFibGUgdHJcIik7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCByb3dzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgcm93ID0gW10sIGNvbHMgPSByb3dzW2ldLnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0ZCwgdGhcIik7XG5cdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNvbHMubGVuZ3RoOyBqKyspXG5cdFx0XHRcdHJvdy5wdXNoKGNvbHNbal0uaW5uZXJUZXh0KTtcblx0XHRcdGNzdi5wdXNoKHJvdy5qb2luKFwiLFwiKSk7XG5cdFx0fVxuXHRcdC8vIERvd25sb2FkIENTVlxuXHRcdHRoaXMuZG93bmxvYWRfY3N2KGNzdi5qb2luKFwiXFxuXCIpLCBmaWxlbmFtZSk7XG5cdH1cblxuXHRkb3dubG9hZF9jc3YgPSAoY3N2LCBmaWxlbmFtZSkgPT4ge1xuXHRcdHZhciBjc3ZGaWxlO1xuXHRcdHZhciBkb3dubG9hZExpbms7XG5cdFx0Ly8gQ1NWIEZJTEVcblx0XHRjc3ZGaWxlID0gbmV3IEJsb2IoW2Nzdl0sIHsgdHlwZTogXCJ0ZXh0L2NzdlwiIH0pO1xuXHRcdC8vIERvd25sb2FkIGxpbmtcblx0XHRkb3dubG9hZExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblx0XHQvLyBGaWxlIG5hbWVcblx0XHRkb3dubG9hZExpbmsuZG93bmxvYWQgPSBmaWxlbmFtZTtcblx0XHQvLyBXZSBoYXZlIHRvIGNyZWF0ZSBhIGxpbmsgdG8gdGhlIGZpbGVcblx0XHRkb3dubG9hZExpbmsuaHJlZiA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGNzdkZpbGUpO1xuXHRcdC8vIE1ha2Ugc3VyZSB0aGF0IHRoZSBsaW5rIGlzIG5vdCBkaXNwbGF5ZWRcblx0XHRkb3dubG9hZExpbmsuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdC8vIEFkZCB0aGUgbGluayB0byB5b3VyIERPTVxuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZG93bmxvYWRMaW5rKTtcblx0XHQvLyBMYW56YW1vc1xuXHRcdGRvd25sb2FkTGluay5jbGljaygpO1xuXHR9XG5cblx0ZG93bmxvYWRJbnRlcnBvbFRhYmxlID0gKCkgPT4ge1xuXHRcdHZhciBodG1sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInRhYmxlXCIpLm91dGVySFRNTDtcblx0XHR0aGlzLmV4cG9ydF90YWJsZV90b19jc3YoaHRtbCwgXCJ0YWJsZS5jc3ZcIik7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cblx0XHRjb25zdCB7IHJlc3VsdCwgaW5wdXQsIHBhcmFtcyB9ID0gdGhpcy5zdGF0ZVxuXHRcdGxldCBkYXRhU3RyID0gXCJkYXRhOnRleHQvanNvbjtjaGFyc2V0PXV0Zi04LFwiICsgZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8PlxuXHRcdFx0XHQ8Q29udGFpbmVyIGZsdWlkIGNsYXNzTmFtZT1cInB5LTNcIj5cblxuXHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJkaXNwbGF5LTQgIHRleHQtY2VudGVyXCI+Q3Jvd2RNT1Q6IEEgVmlkZW8gQW5ub3RhdGlvbiBUb29sPC9oMT5cblx0XHRcdFx0XHQ8Um93IGNsYXNzTmFtZT1cIm15LTMgY29sLXhzLTEyIGNvbC1sZy0xMCBvZmZzZXQtbGctMVwiPlxuXHRcdFx0XHRcdFx0PENvbD5cblx0XHRcdFx0XHRcdFx0PEluc3RydWN0aW9ucyAvPlxuXHRcdFx0XHRcdFx0PC9Db2w+XG5cdFx0XHRcdFx0PC9Sb3c+XG5cdFx0XHRcdFx0PEZvcm0gY2xhc3NOYW1lPVwibWItMiBjb2wteHMtMTIgY29sLWxnLTEwIG9mZnNldC1sZy0xXCIgb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cblx0XHRcdFx0XHRcdDxGb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDxMYWJlbCBmb3I9XCJVUkxcIj48Yj5FbnRlciB0aGUgdmlkZW8gVVJMOjwvYj48L0xhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8SW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidXJsXCIgcGxhY2Vob2xkZXI9XCJodHRwOi8vLi4uXCIgdmFsdWU9e2lucHV0LnVybH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSAvPlxuXHRcdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHQ8Rm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0XHQ8TGFiZWwgZm9yPVwiQW5ub3RhdGlvbiBXaWR0aFwiPlZpZGVvIFdpZHRoPC9MYWJlbD5cblx0XHRcdFx0XHRcdFx0PElucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInZpZGVvV2lkdGhcIiBwbGFjZWhvbGRlcj1cIm51bWJlclwiIHZhbHVlPXtpbnB1dC52aWRlb1dpZHRofSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IC8+XG5cdFx0XHRcdFx0XHQ8L0Zvcm1Hcm91cD5cblx0XHRcdFx0XHRcdDxGb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDxMYWJlbCBmb3I9XCJleGFtcGxlRmlsZVwiIGNsYXNzTmFtZT1cInByLTJcIj5VcGxvYWQgRGVmYXVsdCBBbm5vdGF0aW9uczwvTGFiZWw+PGJyPjwvYnI+XG5cdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiZmlsZVwiIG5hbWU9XCJmaWxlXCIgaWQ9XCJleGFtcGxlRmlsZVwiIHJlZj17dGhpcy5maWxlSW5wdXR9IC8+XG5cdFx0XHRcdFx0XHQ8L0Zvcm1Hcm91cD5cblx0XHRcdFx0XHRcdDxSb3cgY2xhc3NOYW1lPVwibXktMyBjb2wteHMtMTIgY29sLWxnLTEwIG9mZnNldC1sZy02XCI+XG5cdFx0XHRcdFx0XHRcdDxDb2w+XG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbj5TdWJtaXQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0PC9Db2w+XG5cdFx0XHRcdFx0XHQ8L1Jvdz5cblx0XHRcdFx0XHQ8L0Zvcm0+XG5cblx0XHRcdFx0XHQ8Um93IGNsYXNzTmFtZT1cInB5LTNcIiBzdHlsZT17eyBiYWNrZ3JvdW5kOiBcInJnYigyNDYsIDI0NiwgMjQ2KVwiIH19PlxuXG5cdFx0XHRcdFx0XHQ8Q29sPlxuXHRcdFx0XHRcdFx0XHQ8VHdvRGltZW5zaW9uYWxWaWRlb1xuXHRcdFx0XHRcdFx0XHRcdGtleT17XG5cdFx0XHRcdFx0XHRcdFx0XHRgJHtKU09OLnN0cmluZ2lmeShwYXJhbXMudXJsKX1cblx0XHRcdFx0XHRcdFx0XHQgJHtKU09OLnN0cmluZ2lmeShwYXJhbXMuZGVmYXVsdEFubm90YXRpb25zKX1cblx0XHRcdFx0XHRcdFx0XHQgJHtKU09OLnN0cmluZ2lmeShwYXJhbXMudmlkZW9XaWR0aCl9XG5cdFx0XHRcdFx0XHRcdFx0ICR7SlNPTi5zdHJpbmdpZnkocGFyYW1zLnByZXZpZXdIZWFkZXIpfVxuXHRcdFx0XHRcdFx0XHRcdCAke0pTT04uc3RyaW5naWZ5KHBhcmFtcy5wcmV2aWV3Tm90aWNlTGlzdCl9YFxuXHRcdFx0XHRcdFx0XHRcdFx0Ly90aGUgbGFzdCB0aHJlZSB0byBiZSByZXBsYWNlZCBieSB0aGUgdHdvIGJlbG93IGFuZCBjaGFuZ2UgZGVmYXVsdEFubm90YXRpb25zIHRvIGFubm90YXRpb25zXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyAgJHtKU09OLnN0cmluZ2lmeShwYXJhbXMuYW5ub3RhdGlvbldpZHRoKX1cblx0XHRcdFx0XHRcdFx0XHRcdC8vICAke0pTT04uc3RyaW5naWZ5KHBhcmFtcy5wcmV2aWV3Tm90aWNlcyl9YFxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRvblN1Ym1pdD17dGhpcy5oYW5kbGVSZXN1bHRTdWJtaXR9XG5cdFx0XHRcdFx0XHRcdFx0dXJsPXtwYXJhbXMudXJsfVxuXHRcdFx0XHRcdFx0XHRcdC8vbWFkZSBjaGFuZ2VzIGhlcmUgYW5ub3RhdGlvbnMgKG9uIGJvdGggc2lkZXMpIGNoYW5nZWQgdG8gZGVmYXVsdEFubm90YXRpb25cblx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0QW5ub3RhdGlvbnM9e3BhcmFtcy5kZWZhdWx0QW5ub3RhdGlvbnN9XG5cdFx0XHRcdFx0XHRcdFx0dmlkZW9XaWR0aD17cGFyYW1zLnZpZGVvV2lkdGh9XG5cdFx0XHRcdFx0XHRcdFx0cHJldmlld0hlYWRlcj17cGFyYW1zLnByZXZpZXdIZWFkZXJ9XG5cdFx0XHRcdFx0XHRcdFx0cHJldmlld05vdGljZUxpc3Q9e3BhcmFtcy5wcmV2aWV3Tm90aWNlTGlzdH1cblx0XHRcdFx0XHRcdFx0XHRoYXNSZXZpZXdcblx0XHRcdFx0XHRcdFx0XHRpc0VtcHR5Q2hlY2tFbmFibGVcblx0XHRcdFx0XHRcdFx0XHRpc1NwbGl0RW5hYmxlXG5cdFx0XHRcdFx0XHRcdFx0aXNTaG93SGlkZUVuYWJsZVxuXHRcdFx0XHRcdFx0XHRcdG51bUFubm90YXRpb25zVG9CZUFkZGVkPXsyMH1cblx0XHRcdFx0XHRcdFx0XHRlbXB0eUNoZWNrU3VibWlzc2lvbldhcm5pbmdUZXh0PXtwYXJhbXMuZW1wdHlDaGVja1N1Ym1pc3Npb25XYXJuaW5nVGV4dH1cblx0XHRcdFx0XHRcdFx0XHRlbXB0eUNoZWNrQW5ub3RhdGlvbkl0ZW1XYXJuaW5nVGV4dD17cGFyYW1zLmVtcHR5Q2hlY2tBbm5vdGF0aW9uSXRlbVdhcm5pbmdUZXh0fVxuXHRcdFx0XHRcdFx0XHRcdGVtcHR5QW5ub3RhdGlvblJlbWluZGVyVGV4dD17cGFyYW1zLmVtcHR5QW5ub3RhdGlvblJlbWluZGVyVGV4dH1cblx0XHRcdFx0XHRcdFx0Ly9yZXBsYWNlIGV2ZXJ5dGhpbmcgYWZ0ZXIgZGVmYXVsdGFubm90YXRpb25zIHdpdGggdGhlIHdoYXQgaXMgZG93biBiZWxvd1xuXHRcdFx0XHRcdFx0XHQvLyBhbm5vdGF0aW9uV2lkdGg9e3BhcmFtcy5hbm5vdGF0aW9uV2lkdGh9XG5cdFx0XHRcdFx0XHRcdC8vIG51bWJlck9mUGFyZW50QW5ub3RhdGlvbnNUb0JlQWRkZWQ9ezEwMDAwMH1cblx0XHRcdFx0XHRcdFx0Ly8gcHJldmlld05vdGljZXM9e3BhcmFtcy5wcmV2aWV3Tm90aWNlc31cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvQ29sPlxuXHRcdFx0XHRcdFx0e2NvbnNvbGUubG9nKFwiUGFzc2VkIGFubm90YXRpb25zOiBcIiArIEpTT04uc3RyaW5naWZ5KHBhcmFtcy5kZWZhdWx0QW5ub3RhdGlvbnMpKX1cblx0XHRcdFx0XHQ8L1Jvdz5cblxuXHRcdFx0XHRcdDxSb3cgY2xhc3NOYW1lPVwibXktMyBjb2wteHMtMTJcIj5cblx0XHRcdFx0XHRcdDxDb2w+XG5cdFx0XHRcdFx0XHRcdDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCI+PENTVkxpbmsgZGF0YT17SlNPTi5zdHJpbmdpZnkocmVzdWx0LCBudWxsLCAyKX0gc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0+RG93bmxvYWQgUmF3IERhdGE8L0NTVkxpbms+PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdHtjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXN1bHQsIG51bGwsIDIpKX1cblx0XHRcdFx0XHRcdDwvQ29sPlxuXHRcdFx0XHRcdFx0PENvbD5cblx0XHRcdFx0XHRcdFx0PEJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBvbkNsaWNrPXt0aGlzLmdldEludGVycG9sYXRlZERhdGF9PkdlbmVyYXRlIEludGVycG9sYXRlZCBEYXRhPC9CdXR0b24+XG5cdFx0XHRcdFx0XHQ8L0NvbD5cblx0XHRcdFx0XHRcdDxDb2w+XG5cdFx0XHRcdFx0XHRcdDxCdXR0b24gaWQ9XCJleHBvcnQtaW50ZXJwb2xcIiBjb2xvcj0ncHJpbWFyeScgc3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiAnbm9uZScsIGNvbG9yOiAnI2ZmZmZmZicsXG5cdFx0XHRcdFx0XHRcdFx0Ym9yZGVyOiBgMXB4IHNvbGlkYCxcblx0XHRcdFx0XHRcdFx0fX0gb25DbGljaz17dGhpcy5jcmVhdGVUYWJsZX0+RG93bmxvYWQgSW50ZXJwb2xhdGVkIERhdGE8L0J1dHRvbj5cblx0XHRcdFx0XHRcdDwvQ29sPlxuXHRcdFx0XHRcdDwvUm93PlxuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0ey8qIGNyZWF0ZSBpbnZpc2libGUgdGFibGUgZm9yIGludGVycG9sYXRlZCBkYXRhICovfVxuXHRcdFx0XHRcdDxSb3cgY2xhc3NOYW1lPVwibXktMyBjb2wteHMtMTJcIj5cblx0XHRcdFx0XHRcdDxDb2w+XG5cdFx0XHRcdFx0XHRcdDx0YWJsZSBpZD1cImludGVycG9sLXRhYmxlXCIgc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnIH19PlxuXHRcdFx0XHRcdFx0XHRcdDx0Ym9keT5cblx0XHRcdFx0XHRcdFx0XHRcdDx0cj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0ey8qIDx0aD5JRDwvdGg+ICovfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGggPlRyYWNrIElEPC90aD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHRoPngtbWluPC90aD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHRoPnktbWluPC90aD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHRoPndpZHRoPC90aD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHRoPmhlaWdodDwvdGg+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx0aD5GcmFtZTwvdGg+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx0aD5Mb3N0PC90aD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHRoPk9jY2x1ZGVkPC90aD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHRoPkdlbmVyYXRlZDwvdGg+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx0aD5MYWJlbDwvdGg+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx0aD5QYXJlbnQ8L3RoPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0XHRcdFx0XHQ8L3Rib2R5PlxuXHRcdFx0XHRcdFx0XHQ8L3RhYmxlPlxuXHRcdFx0XHRcdFx0PC9Db2w+XG5cdFx0XHRcdFx0PC9Sb3c+XG5cblxuXHRcdFx0XHRcdDxSb3cgY2xhc3NOYW1lPVwibXktMyBjb2wteHMtMTIgY29sLWxnLTEwIG9mZnNldC1sZy0xXCI+XG5cdFx0XHRcdFx0XHQ8Q29sPlxuXHRcdFx0XHRcdFx0XHQ8Q2FyZD48Q2FyZEJvZHk+PGEgaHJlZj17ZGF0YVN0cn0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLWxnXCIgZG93bmxvYWQ9e2Ake3BhcmFtcy51cmx9Lmpzb25gfT4gRG93bmxvYWQgdGhlIEFubm90YXRpb25zPC9hPjwvQ2FyZEJvZHk+PC9DYXJkPlxuXG5cblx0XHRcdFx0XHRcdDwvQ29sPiAgPC9Sb3c+XG5cblxuXG5cdFx0XHRcdDwvQ29udGFpbmVyPlxuXHRcdFx0PC8+XG5cdFx0KTtcblxuXG5cblx0fVxufVxuZXhwb3J0IGRlZmF1bHQgRGVtbztcbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzcyc7XG5pbXBvcnQgeyBCdXR0b25Hcm91cCwgQnV0dG9uLCBDb2xsYXBzZSB9IGZyb20gJ3JlYWN0c3RyYXAnO1xuaW1wb3J0IHsgQ2FyZCwgQ2FyZEJvZHksIENhcmRUaXRsZSwgQ2FyZFN1YnRpdGxlLCBDYXJkVGV4dCB9IGZyb20gJ3JlYWN0c3RyYXAnO1xuaW1wb3J0IFJlYWN0UGxheWVyIGZyb20gJ3JlYWN0LXBsYXllcidcblxuaW1wb3J0IHsgTWRBZGQsIE1kQ2FsbFNwbGl0LCBNZERlbGV0ZSwgTWRSZWRvLCBNZFVuZG8sIE1kQXJyb3dGb3J3YXJkfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIjtcbmltcG9ydCB7IElvTWRFeWVPZmYsIElvTWRFeWUgfSBmcm9tIFwicmVhY3QtaWNvbnMvaW9cIjtcbmltcG9ydCB7IEZhQ2hldnJvbkRvd24gfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmltcG9ydCAnLi92aWRlb0luc3RydWN0aW9uLmNzcyc7XG5cblxuY2xhc3MgSW5zdHJ1Y3Rpb25zIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5zdGF0ZSA9IHsgY29sbGFwc2U6IGZhbHNlIH07XG5cdH1cblxuXHR0b2dnbGUgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNvbGxhcHNlOiAhdGhpcy5zdGF0ZS5jb2xsYXBzZSB9KTtcbiAgfVxuXG5cdHJlbmRlcigpe1xuXHRcdHJldHVybihcblx0XHRcdFx0PGRpdj5cbiAgICAgICAgPENvbGxhcHNlIGlzT3Blbj17dGhpcy5zdGF0ZS5jb2xsYXBzZX0+XG4gICAgICAgICAgPENhcmQ+XG4gICAgICAgICAgICA8Q2FyZEJvZHk+XG5cdFx0XHRcdFx0XHRcdDxDYXJkVGl0bGU+PGI+TW90aXZhdGlvbjwvYj48L0NhcmRUaXRsZT5cblx0XHRcdFx0XHRcdFx0PENhcmRUZXh0IGNsYXNzTmFtZT1cIm1iLTVcIj5cblx0XHRcdFx0XHRcdFx0VGhlIHJlc3VsdCBvZiB0aGlzIHRhc2sgd2lsbCBlbXBvd2VyIHJlc2VhcmNoZXJzIHRvIHRyYWNrIGNlbGxzIGluIGRpZmZlcmVudCBsaWZlIGN5Y2xlIHBoYXNlcyBhbmQgY29udHJpYnV0ZSB0b3dhcmRzIHRyZWF0aW5nIGFuZCBwcmV2ZW50aW5nIGRpc2Vhc2VzLCBsZWFkaW5nIHRvIG5ldyBiaW8taW5zcGlyZWQgdGVjaG5vbG9neSwgYW5kIGFuc3dlcmluZ1xuXHRcdFx0XHRcdFx0XHRiYXNpYyBzY2llbmNlIHF1ZXN0aW9ucyBhYm91dCBmdW5kYW1lbnRhbCBiaW9sb2dpY2FsIHByb2Nlc3Nlcy5cblx0XHRcdFx0XHRcdFx0PC9DYXJkVGV4dD5cblx0XHRcdFx0XHRcdFx0PENhcmRUaXRsZT48Yj5UYXNrPC9iPjwvQ2FyZFRpdGxlPlxuXHRcdFx0PENhcmRUZXh0IGNsYXNzTmFtZT1cIm1iLTNcIj5Zb3VyIHRhc2sgaXMgdG8gPGI+IGFubm90YXRlIHRoZSB2aWRlbyBieSBkcmF3aW5nIGJvdW5kaW5nIGJveGVzIGFyb3VuZCBlYWNoIGJpb2xvZ2ljYWwgY2VsbCBhbmQgdHJhY2tpbmcgdGhlIGNlbGxzIHByZWNpc2VseTwvYj4gKGFzIHNob3duIGluIHRoZSB2aWRlbykuIFlvdSB3aWxsIGFkanVzdCB0aGUgYm94ZXMgYXQgZGlmZmVyZW50IGludGVydmFscyBvZiB0aGUgdmlkZW8sIGFuZCB0aGUgdG9vbCB3aWxsIGF1dG9tYXRpY2FsbHkgZmlsbCB0aGUgZ2FwcyBpbiB0aGUgdmlkZW8uIFlvdSBtYXksIGhvd2V2ZXIsIGhhdmUgdG8gY29ycmVjdCBhbnkgaW1wZXJmZWN0aW9ucyBpbiB0aGUgYW5ub3RhdGlvbnMgYXV0b2NvbXBsZXRlZCBieSB0aGUgdG9vbCB0byBlbnN1cmUgdGhhdCB0aGUgZ2FwcyBhcmUgY29ycmVjdGx5IGFubm90YXRlZC4gIDwvQ2FyZFRleHQ+IFxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1iLTUgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHRcdDxmaWd1cmUgY2xhc3NOYW1lPVwiZmlndXJlXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8UmVhY3RQbGF5ZXIgdXJsPSdodHRwczovL3lvdXR1LmJlL2RucVM3dU9XY09VJyBoZWlnaHQ9eycxNDAnfSB3aWR0aD17JzEwMCUnfSBwbGF5aW5nIGxvb3AgbXV0ZWQgLz5cblx0XHRcdFx0XHRcdFx0XHQgIDxmaWdjYXB0aW9uIGNsYXNzTmFtZT1cImZpZ3VyZS1jYXB0aW9uXCI+QmVmb3JlPC9maWdjYXB0aW9uPlxuXHRcdFx0XHRcdFx0XHRcdDwvZmlndXJlPlxuXHRcdFx0XHRcdFx0XHRcdDxNZEFycm93Rm9yd2FyZCBzdHlsZT17e21hcmdpbjogXCIwcHggMTBweCAzMHB4IDEwcHhcIn19IC8+XG5cdFx0XHRcdFx0XHRcdFx0PGZpZ3VyZSBjbGFzc05hbWU9XCJmaWd1cmVcIj5cblx0XHRcdFx0XHRcdFx0XHQgIDxSZWFjdFBsYXllciB1cmw9J2h0dHBzOi8veW91dHUuYmUvQmNYbWRRclVlaUknIGhlaWdodD17JzE0MCd9IHdpZHRoPXsnMTAwJSd9IHBsYXlpbmcgbG9vcCBtdXRlZCAvPlxuXHRcdFx0XHRcdFx0XHRcdCAgPGZpZ2NhcHRpb24gY2xhc3NOYW1lPVwiZmlndXJlLWNhcHRpb25cIj5BZnRlcjwvZmlnY2FwdGlvbj5cblx0XHRcdFx0XHRcdFx0XHQ8L2ZpZ3VyZT5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8Q2FyZFRpdGxlIGNsYXNzTmFtZT1cIm1iLTRcIj48Yj5JbnN0cnVjdGlvbnM8L2I+PC9DYXJkVGl0bGU+XG5cdFx0XHQ8Q2FyZFN1YnRpdGxlIGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGRcIj5TdGVwIDE6IEJlZm9yZSB5b3Ugc3RhcnQgPC9DYXJkU3VidGl0bGU+XG5cdFx0XHQ8Q2FyZFRleHQgY2xhc3NOYW1lPVwibWItNFwiPllvdSBtdXN0IDxiPiBiZWdpbiB0aGlzIHRhc2sgZnJvbSB0aGUgc3RhcnQgb2YgdGhlIHZpZGVvPC9iPiBhbmQgYW5ub3RhdGUgb25lIGNlbGwgYXQgYSB0aW1lLiBZb3UgY2FuIGFsc28gYWRqdXN0IHRoZSBzcGVlZCBvZiB0aGUgdmlkZW8gYnkgY2xpY2tpbmcgdGhlIFwieDFcIiBidXR0b24gbG9jYXRlZCBiZWxvdyB0aGUgY2VsbCB2aWRlby4gPC9DYXJkVGV4dD5cblx0XHRcdFx0XHRcdFx0PENhcmRTdWJ0aXRsZSBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkXCI+U3RlcCAyOiA8YiBjbGFzc05hbWU9XCJ0ZXh0LXVwcGVyY2FzZSB0ZXh0LWRhbmdlclwiPiBBZGQgPC9iPiBhIG5ldyBib3VuZGluZyBib3ggPC9DYXJkU3VidGl0bGU+XG5cdFx0XHQ8Q2FyZFRleHQgY2xhc3NOYW1lPVwibWItNCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+Q2xpY2sgdGhlICA8QnV0dG9uIGRpc2FibGVkIHN0eWxlPXt7b3BhY2l0eTogMX19IGNvbG9yPVwicHJpbWFyeVwiIGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgaW5zdHJ1Yy1idXR0b25cIj48TWRBZGQvPiBBZGQgYSBOZXcgQm94PC9CdXR0b24+IGJ1dHRvbiB0byBkcmF3IGEgbmV3IGJvdW5kaW5nIGJveCBhcm91bmQgYSBjZWxsLiBUaGVuLCBkcmFnIGFuZCByZXNpemUgdGhlIGJveCB0byBib3VuZCB0aGF0IGNlbGwuPC9DYXJkVGV4dD5cblx0XHRcdFx0XHRcdFx0PENhcmRTdWJ0aXRsZSBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkXCI+U3RlcCAzOiBUcmFjayBhbmQgYm91bmQgPGIgY2xhc3NOYW1lPVwidGV4dC11cHBlcmNhc2UgdGV4dC1kYW5nZXJcIj5PTkxZPC9iPiB0aGUgY2VsbCB0aGF0IHlvdSBjaG9zZTwvQ2FyZFN1YnRpdGxlPlxuXHRcdFx0PENhcmRUZXh0IGNsYXNzTmFtZT1cIm1iLTRcIj5QcmVzcyB0aGUgcGxheSBidXR0b24sIGFuZCB3aGVuIHRoZSBjZWxsIG1vdmVzLCBwYXVzZSB0aGUgdmlkZW8uIFRoZW4sIGRyYWcgYW5kIHJlc2l6ZSB0aGUgYm94IHRvIGVuc3VyZSB0aGUgY2VsbCBpcyBib3VuZGVkIDxiIGNsYXNzTmFtZT1cInRleHQtdXBwZXJjYXNlIHRleHQtZGFuZ2VyXCI+cHJlY2lzZWx5PC9iPi4gQ29udGludWUgdGhpcyBwcm9jZXNzIHRpbGwgdGhlIDxiPmVuZCBvZiB0aGUgdmlkZW88L2I+LiA8Yj5Ob3RlPC9iPjogVGhlIHRvb2wgd2lsbCBhdXRvbWF0aWNhbGx5IGZpbGwgdGhlIGFubm90YXRpb25zIGluIHRoZSBtaXNzaW5nIGZyYW1lcyBiZXR3ZWVuIHRoZSBpbnRlcnZhbHMgeW91IGFubm90YXRlZC4gWW91IG11c3QgcmVwbGF5IHRoZSB2aWRlbyB0byB2ZXJpZnkgdGhhdCB0aGUgYXV0b21hdGVkIGFubm90YXRpb24gaXMgYWNjdXJhdGUgLS0gaWYgbm90LCBwYXVzZSB0aGUgdmlkZW8gYW5kIGFkanVzdCB0aGUgYm94IHRvIGNvcnJlY3QgdGhlIGFubm90YXRpb24uPC9DYXJkVGV4dD5cblx0XHRcdFx0XHRcdFx0PENhcmRTdWJ0aXRsZSBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkXCI+IFN0ZXAgNGE6IDxiIGNsYXNzTmFtZT1cInRleHQtdXBwZXJjYXNlIHRleHQtZGFuZ2VyXCI+IFNwbGl0IDwvYj4gdGhlIGJvdW5kaW5nIGJveCAoaWYgYXBwbGljYWJsZSk8L0NhcmRTdWJ0aXRsZT5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCIgc3R5bGU9e3ttYXJnaW5Cb3R0b206IDV9fT5JZiB0aGUgY2VsbCBzcGxpdHMgaW50byB0d28gY2VsbHMsIHVzZSB0aGUgPEJ1dHRvbiBkaXNhYmxlZCBzdHlsZT17e29wYWNpdHk6IDF9fSBvdXRsaW5lIGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgaW5zdHJ1Yy1idXR0b25cIj48TWRDYWxsU3BsaXQvPiBTcGxpdDwvQnV0dG9uPiBidXR0b24gdG8gc3BsaXQgdGhlIHBhcmVudCBib3VuZGluZyBib3ggaW50byB0d28gY2hpbGRyZW4gYm94ZXMgYW5kIGFkanVzdCB0aGUgbmV3IGJveGVzIHRvIGZpdCB0aGUgbmV3IGNlbGxzLjwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYi0yIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cblx0XHRcdFxuXHRcdFx0XHRcdFx0XHRcdDxmaWd1cmUgY2xhc3NOYW1lPVwiZmlndXJlXCI+XG5cdFx0XHRcdFx0XHRcdFx0ICA8UmVhY3RQbGF5ZXIgdXJsPSdodHRwczovL3lvdXR1LmJlL0hFQnIzTzlaNDdJJyBoZWlnaHQ9eycxMjAnfSB3aWR0aD17JzEwMCUnfSBwbGF5aW5nIGxvb3AgbXV0ZWQgLz5cblx0XHRcdFx0XHRcdFx0XHQgIDxmaWdjYXB0aW9uIGNsYXNzTmFtZT1cImZpZ3VyZS1jYXB0aW9uXCI+QmVmb3JlPC9maWdjYXB0aW9uPlxuXHRcdFx0XHRcdFx0XHRcdDwvZmlndXJlPlxuXHRcdFx0XHRcdFx0XHRcdDxNZEFycm93Rm9yd2FyZCBzdHlsZT17e21hcmdpbjogXCIwcHggMTBweCAzMHB4IDEwcHhcIn19IC8+XG5cdFx0XHRcdFx0XHRcdFx0PGZpZ3VyZSBjbGFzc05hbWU9XCJmaWd1cmVcIj5cblx0XHRcdFx0XHRcdFx0XHQgIDxSZWFjdFBsYXllciB1cmw9J2h0dHBzOi8veW91dHUuYmUvOUVEUWRlc29scTAnIGhlaWdodD17JzEyMCd9IHdpZHRoPXsnMTAwJSd9IHBsYXlpbmcgbG9vcCBtdXRlZCAvPlxuXHRcdFx0XHRcdFx0XHRcdCAgPGZpZ2NhcHRpb24gY2xhc3NOYW1lPVwiZmlndXJlLWNhcHRpb25cIj5BZnRlcjwvZmlnY2FwdGlvbj5cblx0XHRcdFx0XHRcdFx0XHQ8L2ZpZ3VyZT5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxDYXJkU3VidGl0bGUgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZFwiPlN0ZXAgNGI6IDxiIGNsYXNzTmFtZT1cInRleHQtdXBwZXJjYXNlIHRleHQtZGFuZ2VyXCI+IEhpZGUgPC9iPiB0aGUgYm91bmRpbmcgYm94IGlmIHRoZSBjZWxsIGxlYXZlcyB0aGUgdmlkZW8gZnJhbWUgb3IgaXMgb2JzY3VyZWQgKGlmIGFwcGxpY2FibGUpPC9DYXJkU3VidGl0bGU+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiIHN0eWxlPXt7bWFyZ2luQm90dG9tOiA1fX0+SWYgdGhlIGNlbGwgbGVhdmVzIHRoZSB2aWRlbyBmcmFtZSBvciBpcyBvYnNjdXJlZCBieSBvdGhlciBvYmplY3RzLCB1c2UgdGhlIDxCdXR0b24gZGlzYWJsZWQgc3R5bGU9e3tvcGFjaXR5OiAxfX0gb3V0bGluZSBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGluc3RydWMtYnV0dG9uXCI+PElvTWRFeWVPZmYvPiBIaWRlIDwvQnV0dG9uPiBidXR0b24gdG8gaGlkZSBpdHMgYm94LiA8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYi0yIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxmaWd1cmUgY2xhc3NOYW1lPVwiZmlndXJlXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQgIDxSZWFjdFBsYXllciB1cmw9J2h0dHBzOi8veW91dHUuYmUvWXhpbEhxa0tyZmMnIGhlaWdodD17JzEyMCd9IHdpZHRoPXsnMTAwJSd9IHBsYXlpbmcgbG9vcCBtdXRlZCAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0ICA8ZmlnY2FwdGlvbiBjbGFzc05hbWU9XCJmaWd1cmUtY2FwdGlvblwiPkJlZm9yZTwvZmlnY2FwdGlvbj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZmlndXJlPlxuXHRcdFx0XHRcdFx0XHRcdFx0PE1kQXJyb3dGb3J3YXJkIHN0eWxlPXt7bWFyZ2luOiBcIjBweCAxMHB4IDMwcHggMTBweFwifX0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdDxmaWd1cmUgY2xhc3NOYW1lPVwiZmlndXJlXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQgIDxSZWFjdFBsYXllciB1cmw9J2h0dHBzOi8veW91dHUuYmUvMGVjbGNyRG9KVHcnIGhlaWdodD17JzEyMCd9IHdpZHRoPXsnMTAwJSd9IHBsYXlpbmcgbG9vcCBtdXRlZCAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0ICA8ZmlnY2FwdGlvbiBjbGFzc05hbWU9XCJmaWd1cmUtY2FwdGlvblwiPkFmdGVyPC9maWdjYXB0aW9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9maWd1cmU+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8Q2FyZFN1YnRpdGxlIGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGRcIj5TdGVwIDU6IFN1Ym1pdCB0aGUgdGFzazwvQ2FyZFN1YnRpdGxlPlxuXHRcdFx0PENhcmRUZXh0IGNsYXNzTmFtZT1cImFsaWduLWl0ZW1zLWNlbnRlciBtYi01XCI+QWZ0ZXIgeW91IGhhdmUgYW5ub3RhdGVkIHRoZSBjZWxsIGluIHRoZSBlbnRpcmUgdmlkZW8sIHJlcGxheSB0aGUgZW50aXJlIHZpZGVvIHRvIGNoZWNrIHlvdXIgd29yay4gSWYgdGhlIGFubm90YXRpb25zIGFyZSBub3QgY29ycmVjdCwgcGF1c2UgdGhlIHZpZGVvLCBhbmQgYWRqdXN0IHRoZSBib3hlcy4gUmVwZWF0IHRoaXMgcHJvY2VzcyB1bnRpbCBhbGwgY2VsbHMgaW4gdGhlIHZpZGVvIGFyZSBhbm5vdGF0ZWQuIE9uY2UgeW91IGVuc3VyZSB0aGF0IHRoZSBhbm5vdGF0aW9ucyBhcmUgY29ycmVjdCwgY2xpY2sgdGhlIDxCdXR0b24gZGlzYWJsZWQgc3R5bGU9e3tvcGFjaXR5OiAxfX0gY2xhc3NOYW1lPVwiYWxpZ24taXRlbXMtY2VudGVyIGluc3RydWMtYnV0dG9uXCIgPlN1Ym1pdDwvQnV0dG9uPiBidXR0b24gdG8gc3VibWl0IHRoZSByZXN1bHRzLiBDbGljayBvbiB0aGUgPEJ1dHRvbiBkaXNhYmxlZCBzdHlsZT17e29wYWNpdHk6IDF9fSBjbGFzc05hbWU9XCJhbGlnbi1pdGVtcy1jZW50ZXIgaW5zdHJ1Yy1idXR0b25cIiA+IERvd25sb2FkIHRoZSBhbm5vdGF0aW9ucyA8L0J1dHRvbj4gYnV0dG9uIHRvIHNhdmUgdGhlIHJlc3VsdHMuIDwvQ2FyZFRleHQ+ICA8Q2FyZFRleHQgY2xhc3NOYW1lPVwibWItNVwiPiA8Yj5Ob3RlPC9iPjogWW91IGNhbiBkZWxldGUgYW5kIHJlZG8gdGhlIGFubm90YXRpb24gb3IgZ28gYmFjayBhbmQgZm9ydGggaW4gdGhlIHZpZGVvIGFzIG1hbnkgdGltZXMgYXMgeW91IGxpa2UgdG8gZW5zdXJlIHRoZSBjZWxsIGlzIGNvcnJlY3RseSBhbm5vdGF0ZWQgZnJvbSB0aGUgc3RhcnQgdG8gdGhlIGVuZCBvZiB0aGUgdmlkZW8uPC9DYXJkVGV4dD5cblx0XHRcdFxuXHRcdFxuXG5cdFx0XHQ8Q2FyZFRpdGxlPjxiPkRlbW8gb2YgdGhlIFRvb2w8L2I+PC9DYXJkVGl0bGU+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIiBzdHlsZT17e21hcmdpbkJvdHRvbTogMTB9fT5IZXJlIGlzIGEgc2hvcnQgZGVtbyBvZiB0aGUgdGFzazo8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxuXHRcdFx0XG5cdFx0XHQ8UmVhY3RQbGF5ZXIgdXJsPSdodHRwczovL3lvdXR1LmJlL1d2LW1DV00tS0l3JyBoZWlnaHQ9eyc0MDBweCd9IHdpZHRoPXsnODAwcHgnfSBjb250cm9scyBtdXRlZCAvPlxuXHRcdFx0XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cblx0XHQgICBcblx0XHQgICAgXG5cdFx0XHQ8Q2FyZFRpdGxlIGNsYXNzTmFtZT1cInB0LTEwXCI+PGI+T3RoZXIgQnV0dG9uczo8L2I+PC9DYXJkVGl0bGU+XG5cdFx0XHRcdFx0XHRcdDxkbCBjbGFzc05hbWU9XCJyb3dcIj5cblx0XHRcdFx0XHRcdFx0ICA8ZHQgY2xhc3NOYW1lPVwiY29sLXNtLTIgdGV4dC1yaWdodFwiPjxCdXR0b25Hcm91cD48QnV0dG9uIGRpc2FibGVkIHN0eWxlPXt7b3BhY2l0eTogMX19IG91dGxpbmUgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPjxNZFVuZG8vPjwvQnV0dG9uPjxCdXR0b24gZGlzYWJsZWQgc3R5bGU9e3tvcGFjaXR5OiAxfX0gb3V0bGluZSBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+PE1kUmVkby8+PC9CdXR0b24+PC9CdXR0b25Hcm91cD48L2R0PlxuXHRcdFx0XHRcdFx0XHQgIDxkZCBjbGFzc05hbWU9XCJjb2wtc20tMTAgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiIHN0eWxlPXt7bWFyZ2luQm90dG9tOiAwfX0+Y2FuIGJlIHVzZWQgdG8gcmVkbyBhbmQgdW5kbyB0aGUgY2hhbmdlcy48L2RkPlxuXHRcdFx0XHRcdFx0XHRcdDxkdCBjbGFzc05hbWU9XCJjb2wtc20tMiB0ZXh0LXJpZ2h0XCI+PEJ1dHRvbiBkaXNhYmxlZCBzdHlsZT17e29wYWNpdHk6IDF9fSBvdXRsaW5lIGNsYXNzTmFtZT1cImluc3RydWMtZGVsZXRlLWJ1dHRvblwiPjxNZERlbGV0ZS8+PC9CdXR0b24+PC9kdD5cblx0XHRcdDxkZCBjbGFzc05hbWU9XCJjb2wtc20tMTAgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiIHN0eWxlPXt7bWFyZ2luQm90dG9tOiAwfX0+Y2FuIGJlIHVzZWQgdG8gZGVsZXRlIGEgYm91bmRpbmcgYm94IG9yIGEgdHJhamVjdG9yeSAodHJhY2tpbmcgYW5ub3RhdGlvbikuPC9kZD5cblx0XHRcdFx0XHRcdFx0XHQ8ZHQgY2xhc3NOYW1lPVwiY29sLXNtLTIgdGV4dC1yaWdodFwiPlJlc2l6aW5nICYgVHJhY2tpbmcgaGlzdG9yeSA8RmFDaGV2cm9uRG93bi8+PC9kdD5cblx0XHRcdFx0XHRcdFx0ICA8ZGQgY2xhc3NOYW1lPVwiY29sLXNtLTEwIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIiBzdHlsZT17e21hcmdpbkJvdHRvbTogMH19PiBjYW4gYmUgdXNlZCB0byB0cmFjayB5b3VyIGFubm90YXRpb25zLjwvZGQ+XG5cdFx0XHRcdFx0XHRcdDwvZGw+XG5cdFx0XHRcdFx0XHQ8L0NhcmRCb2R5PlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPC9Db2xsYXBzZT5cblx0XHRcdFx0PEJ1dHRvbiBibG9jayBjb2xvcj1cInNlY29uZGFyeVwiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlfT57dGhpcy5zdGF0ZS5jb2xsYXBzZT8gXCJIaWRlXCI6IFwiU2hvd1wiIH0gSW5zdHJ1Y3Rpb25zPC9CdXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXHQpfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnN0cnVjdGlvbnM7XG4iXSwic291cmNlUm9vdCI6IiJ9