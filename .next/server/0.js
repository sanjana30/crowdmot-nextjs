exports.ids = [0];
exports.modules = {

/***/ "./components/videoAnnotationDemo/Modal.js":
/*!*************************************************!*\
  !*** ./components/videoAnnotationDemo/Modal.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Modal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Applications/CrowdMOT/crowdmot-nextjs/components/videoAnnotationDemo/Modal.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
class Modal extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    if (!this.props.modalShow) {
      return null;
    }

    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 12
      }
    }, "Hello Modal");
  }

}

/***/ }),

/***/ "./components/videoAnnotationDemo/VideoAnnotationDemo.js":
/*!***************************************************************!*\
  !*** ./components/videoAnnotationDemo/VideoAnnotationDemo.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_annotation_tool__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-annotation-tool */ "react-annotation-tool");
/* harmony import */ var react_annotation_tool__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_annotation_tool__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _videoInstruction_VideoInstruction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../videoInstruction/VideoInstruction */ "./components/videoInstruction/VideoInstruction.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_csv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-csv */ "react-csv");
/* harmony import */ var react_csv__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_csv__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Modal */ "./components/videoAnnotationDemo/Modal.js");
var _jsxFileName = "/Applications/CrowdMOT/crowdmot-nextjs/components/videoAnnotationDemo/VideoAnnotationDemo.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









class Demo extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "scrollToRef", () => window.scrollTo(0, this.myRef.current.offsetTop));

    _defineProperty(this, "handleResultSubmit", result => {
      this.setState({
        result: result
      });
      this.setState({
        videoDuration: this.state.videoDuration
      });
      this.setState({
        showMe: true
      });
      alert("Submission was successful. Use the buttons at the end of the page to download data points."); // this.createRawData(result);
    });

    _defineProperty(this, "executeScroll", () => this.scrollToRef(myRef));

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

    _defineProperty(this, "handleVidFrameChange", event => {
      console.log(event.target.value);
      this.setState({
        videoFramerate: event.target.value
      });
    });

    _defineProperty(this, "handleVidDurationChange", event => {
      console.log(event.target.value);
      this.setState({
        videoDuration: event.target.value
      });
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
        console.log(preState);
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
            url: this.state.videoFileURL ? this.state.videoFileURL : input.url,
            videoWidth: videoWidth !== 0 ? videoWidth : parseInt(input.videoWidth, 10),
            videoDuration: this.state.videoDuration,
            videoFramerate: this.state.videoFramerate
          }
        };
      });
    });

    _defineProperty(this, "isJsonString", str => {
      try {
        JSON.parse(str);
      } catch (e) {
        return false;
      }

      return true;
    });

    _defineProperty(this, "saveInformation", async () => {
      // console.log(this.state)
      // console.log(getServerSideProps())
      // let values = {defaultAnnotations: ""};
      // const request = await fetch("http://localhost:3000/")
      // // body: JSON.stringify({
      // //   ...this.state
      // // }),
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          mp4: 'https://cildata.crbs.ucsd.edu/media/videos/50507/50507_web.mp4'
        })
      };
      const response = await fetch('/mp4toavi', requestOptions); //const data = await response.json();
    });

    _defineProperty(this, "getInterpolatedData", event => {
      event.preventDefault(); //const duration = JSON.parse(JSON.stringify(this.state.result.duration))

      const duration = this.state.videoDuration;
      const timerate = duration * this.state.videoFramerate; //collect frame/second for the video

      const timeNow = new Date().getTime().toString(36);
      let interpolatedResult = JSON.parse(JSON.stringify(this.state.result));
      let temp = interpolatedResult;

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
                  label: interpolatedResult.annotations[i].label,
                  generated: 1
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
                  label: interpolatedResult.annotations[i].label,
                  generated: 1
                });
              }
            } //close second if

          } //close for loop for j

        } //close else-if annotlength>1

      } //close for loop for i
      //sort the temp object based on time/frame value


      let interpol_data_arr = [],
          sno = 1;

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
      }); // document.getElementById("export-interpol").style.display = "block";

      this.createTable(interpol_data_arr);
    });

    _defineProperty(this, "createTable", e => {
      let temp = e; // let temp = JSON.parse(JSON.stringify(this.state.interpolationResult));

      var table = document.getElementById("interpol-table");

      for (var i = 0; i < temp.length; i++) {
        var row = document.createElement('tr');
        row.classList.add("interpoltableclasstabletr");
        var cell_sno = document.createElement('td');
        cell_sno.classList.add("interpoltableclasstdth");
        cell_sno.innerHTML = temp[i].serial;
        row.appendChild(cell_sno);
        var cell_x_min = document.createElement('td');
        cell_x_min.classList.add("interpoltableclasstdth");
        var cell_y_min = document.createElement('td');
        cell_y_min.classList.add("interpoltableclasstdth");
        var cell_width = document.createElement('td');
        cell_width.classList.add("interpoltableclasstdth");
        var cell_height = document.createElement('td');
        cell_height.classList.add("interpoltableclasstdth");
        var cell_frame = document.createElement('td');
        cell_frame.classList.add("interpoltableclasstdth");
        var cell_lost = document.createElement('td');
        cell_lost.classList.add("interpoltableclasstdth");
        var cell_occluded = document.createElement('td');
        cell_occluded.classList.add("interpoltableclasstdth");
        var cell_generated = document.createElement('td');
        cell_generated.classList.add("interpoltableclasstdth");
        var cell_label = document.createElement('td');
        cell_label.classList.add("interpoltableclasstdth");
        var cell_parent = document.createElement('td');
        cell_parent.classList.add("interpoltableclasstdth");
        cell_x_min.innerHTML = temp[i].x;
        cell_y_min.innerHTML = temp[i].y;
        cell_width.innerHTML = temp[i].width;
        cell_height.innerHTML = temp[i].height;
        cell_frame.innerHTML = temp[i].time;
        cell_lost.innerHTML = 0;
        cell_occluded.innerHTML = 0;

        if (temp[i].generated == 1) {
          cell_generated.innerHTML = 1;
        } else {
          cell_generated.innerHTML = 0;
        }

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
      var rows = document.querySelectorAll("table tr"); // var rows = document.getElementsByClassName("interpoltableclasstabletr");

      for (var i = 0; i < rows.length; i++) {
        var row = [],
            cols = rows[i].querySelectorAll("td, th"); // var row = [], cols = rows[i].getElementsByClassName("interpoltableclasstdth");

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
      var html = document.getElementById("interpol-table").outerHTML;
      this.export_table_to_csv(html, "table.csv");
    });

    _defineProperty(this, "handleVideoLoad", e => {
      let files = e.target.files;

      if (files.length === 1) {
        let file = files[0];
        this.setState({
          videoFileURL: URL.createObjectURL(file),
          videoFileObject: file
        });
      }
    });

    _defineProperty(this, "download", (content, fileName, contentType) => {
      const a = document.createElement("a");
      const file = new Blob([content], {
        type: contentType
      });
      a.href = URL.createObjectURL(file);
      a.download = fileName;
      a.click();
    });

    _defineProperty(this, "onDownload", () => {
      let temp = JSON.parse(JSON.stringify(this.state.result));

      for (let n = 0; n < temp.annotations.length; n++) {
        delete temp.annotations[n].name;
      }

      for (let a = 0; a < temp.annotations.length; a++) {
        for (let b = 0; b < temp.annotations[a].incidents.length; b++) {
          delete temp.annotations[a].incidents[b].name;
          delete temp.annotations[a].incidents[b].label;
        }
      }

      this.download(JSON.stringify(temp), "yourfile.json", "text/plain");
    });

    this.myRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
    const abc = 9; //const fs = require('fs');
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

    this.state = {
      videoFileURL: '',
      videoFileObject: null,
      myStream: null,
      result: null,
      rawData: null,
      interpolationResult: null,
      showMe: false,
      videoDuration: 5.04,
      videoFramerate: 60,
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
    this.videoFileInput = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
    this.fileInput = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
    this.state = {
      myStream: null,
      result: null,
      interpolationResult: null,
      showMe: false,
      videoDuration: 5.04,
      videoFramerate: 60,
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
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
      fluid: true,
      className: "py-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 648,
        columnNumber: 5
      }
    }, __jsx("h1", {
      className: "jsx-4220423162" + " " + "display-4  text-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 650,
        columnNumber: 6
      }
    }, "CrowdMOT: A Video Annotation Tool"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
      className: "my-3 col-xs-12 col-lg-10 offset-lg-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 651,
        columnNumber: 6
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 652,
        columnNumber: 7
      }
    }, __jsx(_videoInstruction_VideoInstruction__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 653,
        columnNumber: 8
      }
    }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Form"], {
      className: "mb-2 col-xs-12 col-lg-10 offset-lg-1",
      onSubmit: this.handleSubmit,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 656,
        columnNumber: 6
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 657,
        columnNumber: 7
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Label"], {
      for: "URL",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 658,
        columnNumber: 8
      }
    }, __jsx("b", {
      className: "jsx-4220423162",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 658,
        columnNumber: 25
      }
    }, "Enter the video URL:")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Input"], {
      type: "text",
      name: "url",
      placeholder: "http://...",
      ref: this.videoFileInput,
      value: input.url,
      onChange: this.handleChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 659,
        columnNumber: 8
      }
    })), __jsx("h3", {
      className: "jsx-4220423162",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 661,
        columnNumber: 7
      }
    }, "OR"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 662,
        columnNumber: 7
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Label"], {
      for: "exampleFile",
      className: "pr-2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 663,
        columnNumber: 8
      }
    }, __jsx("b", {
      className: "jsx-4220423162",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 663,
        columnNumber: 50
      }
    }, "Upload Video")), __jsx("br", {
      className: "jsx-4220423162",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 663,
        columnNumber: 77
      }
    }), __jsx("input", {
      type: "file",
      name: "videofile",
      id: "videoFile",
      onChange: this.handleVideoLoad,
      className: "jsx-4220423162",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 664,
        columnNumber: 8
      }
    })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 666,
        columnNumber: 7
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Label"], {
      for: "URL",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 667,
        columnNumber: 8
      }
    }, __jsx("b", {
      className: "jsx-4220423162",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 667,
        columnNumber: 25
      }
    }, "Duration of the Video (in seconds):")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Input"], {
      type: "text",
      name: "videoDuration",
      placeholder: "5.00",
      onChange: this.handleVidDurationChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 668,
        columnNumber: 8
      }
    })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 670,
        columnNumber: 7
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Label"], {
      for: "URL",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 671,
        columnNumber: 8
      }
    }, __jsx("b", {
      className: "jsx-4220423162",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 671,
        columnNumber: 25
      }
    }, "Framerate of the Video:")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Input"], {
      type: "text",
      name: "videoFramerate",
      placeholder: "60",
      value: this.state.videoFramerate,
      onChange: this.handleVidFrameChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 672,
        columnNumber: 8
      }
    })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 674,
        columnNumber: 7
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Label"], {
      for: "Annotation Width",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 675,
        columnNumber: 8
      }
    }, __jsx("b", {
      className: "jsx-4220423162",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 675,
        columnNumber: 38
      }
    }, "Video Width")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Input"], {
      type: "text",
      name: "videoWidth",
      placeholder: "number",
      value: input.videoWidth,
      onChange: this.handleChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 676,
        columnNumber: 8
      }
    })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 678,
        columnNumber: 7
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Label"], {
      for: "exampleFile",
      className: "pr-2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 679,
        columnNumber: 8
      }
    }, __jsx("b", {
      className: "jsx-4220423162",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 679,
        columnNumber: 50
      }
    }, "Upload Previous Annotations")), __jsx("br", {
      className: "jsx-4220423162",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 679,
        columnNumber: 92
      }
    }), __jsx("input", {
      type: "file",
      name: "file",
      id: "exampleFile",
      ref: this.fileInput,
      className: "jsx-4220423162",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 680,
        columnNumber: 8
      }
    })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
      className: "my-3 col-xs-12 col-lg-10 offset-lg-6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 682,
        columnNumber: 7
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 683,
        columnNumber: 8
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 684,
        columnNumber: 9
      }
    }, "Submit")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
      className: "py-3",
      style: {
        background: "rgb(246, 246, 246)"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 689,
        columnNumber: 6
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 691,
        columnNumber: 7
      }
    }, __jsx(react_annotation_tool__WEBPACK_IMPORTED_MODULE_2__["TwoDimensionalVideo"], {
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
        lineNumber: 692,
        columnNumber: 8
      }
    }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
      className: "my-3 col-xs-12",
      ref: this.myRef,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 727,
        columnNumber: 6
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 728,
        columnNumber: 7
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      color: "primary",
      style: {
        display: this.state.showMe ? "block" : "none",
        color: '#ffffff'
      },
      className: "download-buttons",
      onClick: this.onDownload,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 729,
        columnNumber: 8
      }
    }, "Download Raw Data")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 735,
        columnNumber: 7
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      color: "primary",
      className: "download-buttons",
      style: {
        display: this.state.showMe ? "block" : "none"
      },
      onClick: this.getInterpolatedData,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 736,
        columnNumber: 8
      }
    }, "Generate Interpolated Data"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
      className: "my-3 col-xs-12",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 748,
        columnNumber: 6
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 749,
        columnNumber: 7
      }
    }, __jsx("table", {
      id: "interpol-table",
      style: {
        display: 'none'
      },
      className: "jsx-4220423162" + " " + "interpoltableclasstabletr",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 750,
        columnNumber: 8
      }
    }, __jsx("tbody", {
      className: "jsx-4220423162",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 751,
        columnNumber: 9
      }
    }, __jsx("tr", {
      className: "jsx-4220423162" + " " + "interpoltableclasstabletr",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 752,
        columnNumber: 10
      }
    }, __jsx("th", {
      className: "jsx-4220423162" + " " + "interpoltableclasstdth",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 754,
        columnNumber: 11
      }
    }, "Track ID"), __jsx("th", {
      className: "jsx-4220423162" + " " + "interpoltableclasstdth",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 755,
        columnNumber: 11
      }
    }, "x-min"), __jsx("th", {
      className: "jsx-4220423162" + " " + "interpoltableclasstdth",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 756,
        columnNumber: 11
      }
    }, "y-min"), __jsx("th", {
      className: "jsx-4220423162" + " " + "interpoltableclasstdth",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 757,
        columnNumber: 11
      }
    }, "width"), __jsx("th", {
      className: "jsx-4220423162" + " " + "interpoltableclasstdth",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 758,
        columnNumber: 11
      }
    }, "height"), __jsx("th", {
      className: "jsx-4220423162" + " " + "interpoltableclasstdth",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 759,
        columnNumber: 11
      }
    }, "Frame"), __jsx("th", {
      className: "jsx-4220423162" + " " + "interpoltableclasstdth",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 760,
        columnNumber: 11
      }
    }, "Lost"), __jsx("th", {
      className: "jsx-4220423162" + " " + "interpoltableclasstdth",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 761,
        columnNumber: 11
      }
    }, "Occluded"), __jsx("th", {
      className: "jsx-4220423162" + " " + "interpoltableclasstdth",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 762,
        columnNumber: 11
      }
    }, "Generated"), __jsx("th", {
      className: "jsx-4220423162" + " " + "interpoltableclasstdth",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 763,
        columnNumber: 11
      }
    }, "Label"), __jsx("th", {
      className: "jsx-4220423162" + " " + "interpoltableclasstdth",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 764,
        columnNumber: 11
      }
    }, "Parent")))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 771,
        columnNumber: 7
      }
    }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 783,
        columnNumber: 6
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 784,
        columnNumber: 7
      }
    }, __jsx("table", {
      id: "raw-table",
      style: {
        display: 'none'
      },
      className: "jsx-4220423162" + " " + "rawtableclass",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 785,
        columnNumber: 6
      }
    }, __jsx("tbody", {
      className: "jsx-4220423162",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 786,
        columnNumber: 9
      }
    }, __jsx("tr", {
      className: "jsx-4220423162" + " " + "rawtableclass",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 787,
        columnNumber: 10
      }
    }, __jsx("th", {
      className: "jsx-4220423162" + " " + "rawtableclasstdth",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 789,
        columnNumber: 11
      }
    }, " "))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "4220423162",
      __self: this
    }, ".download-buttons.jsx-4220423162{display:none !important, color:#ffffff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvQ3Jvd2RNT1QvY3Jvd2Rtb3QtbmV4dGpzL2NvbXBvbmVudHMvdmlkZW9Bbm5vdGF0aW9uRGVtby9WaWRlb0Fubm90YXRpb25EZW1vLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWd5QmdCLEFBS0ssdUNBQUMiLCJmaWxlIjoiL0FwcGxpY2F0aW9ucy9Dcm93ZE1PVC9jcm93ZG1vdC1uZXh0anMvY29tcG9uZW50cy92aWRlb0Fubm90YXRpb25EZW1vL1ZpZGVvQW5ub3RhdGlvbkRlbW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVHdvRGltZW5zaW9uYWxWaWRlbyB9IGZyb20gXCJyZWFjdC1hbm5vdGF0aW9uLXRvb2xcIlxuaW1wb3J0IEluc3RydWN0aW9ucyBmcm9tIFwiLi4vdmlkZW9JbnN0cnVjdGlvbi9WaWRlb0luc3RydWN0aW9uXCJcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wsIENhcmQsIENhcmRCb2R5LCBDYXJkVGl0bGUsIENhcmRUZXh0IH0gZnJvbSAncmVhY3RzdHJhcCc7XG5pbXBvcnQgeyBCdXR0b24sIEZvcm0sIEZvcm1Hcm91cCwgTGFiZWwsIElucHV0IH0gZnJvbSAncmVhY3RzdHJhcCc7XG5pbXBvcnQgeyBDU1ZMaW5rLCBDU1ZEb3dubG9hZCB9IGZyb20gXCJyZWFjdC1jc3ZcIjtcbmltcG9ydCBNb2RhbCBmcm9tICcuL01vZGFsJztcblxuY2xhc3MgRGVtbyBleHRlbmRzIENvbXBvbmVudCB7XG5cdFxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMubXlSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKVxuXHRcdGNvbnN0IGFiYyA9IDlcblx0XHQvL2NvbnN0IGZzID0gcmVxdWlyZSgnZnMnKTtcblx0XHQvLyBjb25zdCBhbm5vdGF0aW9ucyA9IFtdOy8vWyB7IFwiaWRcIjogXCJqdDE5Mnd5ZFwiLCBcIm5hbWVcIjogXCJqdDE5Mnd5ZFwiLCBcImxhYmVsXCI6IFwiMS0yXCIsIFwiY29sb3JcIjogXCJyZ2JhKDI1NSwwLDAsMSlcIiwgXCJpbmNpZGVudHNcIjogWyB7IFwiaWRcIjogXCJqdDE5Mnd5YlwiLCBcIm5hbWVcIjogXCJqdDE5Mnd5YlwiLCBcInhcIjogMjk1LjAwNDAyMzM1NTg2ODc1LCBcInlcIjogMTkzLjM2ODk2NDk2NjE5NjgsIFwid2lkdGhcIjogNDAuNzU0MDIzMzU1ODY4NzgsIFwiaGVpZ2h0XCI6IDQxLjYzMTAzNTAzMzgwMzE3LCBcInRpbWVcIjogMC4wMzA4MjI2NDk1NzI2NDk2LCBcInN0YXR1c1wiOiBcIlNob3dcIiB9LCB7IFwiaWRcIjogXCJqdDE5MzBuYlwiLCBcIm5hbWVcIjogXCJqdDE5MzBuYlwiLCBcInhcIjogMzA0LjAwNDAyMzM1NTg2ODc1LCBcInlcIjogMjAyLjM2ODk2NDk2NjE5NjgsIFwid2lkdGhcIjogNTguNzU0MDIzMzU1ODY4NzUsIFwiaGVpZ2h0XCI6IDYwLjYzMTAzNTAzMzgwMzE5LCBcInRpbWVcIjogMC4wMzE3ODQ3MjIyMjIyMjIyMiwgXCJzdGF0dXNcIjogXCJTaG93XCIgfSwgeyBcImlkXCI6IFwianQxOTNmaW1cIiwgXCJuYW1lXCI6IFwianQxOTNmaW1cIiwgXCJ4XCI6IDMwOS4wMDQwMjMzNTU4Njg3NSwgXCJ5XCI6IDIxMy4zNjg5NjQ5NjYxOTY4LCBcIndpZHRoXCI6IDU4Ljc1NDAyMzM1NTg2ODc1LCBcImhlaWdodFwiOiA2MC42MzEwMzUwMzM4MDMxOSwgXCJ0aW1lXCI6IDAuMDYzODg2MTExMTExMTExMTIsIFwic3RhdHVzXCI6IFwiU2hvd1wiIH0sIHsgXCJpZFwiOiBcImp0MTkzaWpvXCIsIFwibmFtZVwiOiBcImp0MTkzaWpvXCIsIFwieFwiOiAzMjAuMDA0MDIzMzU1ODY4NzUsIFwieVwiOiAyMjAuMzY4OTY0OTY2MTk2OCwgXCJ3aWR0aFwiOiA1OC43NTQwMjMzNTU4Njg3NSwgXCJoZWlnaHRcIjogNzQuNjMxMDM1MDMzODAzMTksIFwidGltZVwiOiAwLjA4Njc3MjQyMDYzNDkyMDYzLCBcInN0YXR1c1wiOiBcIlNob3dcIiB9LCB7IFwiaWRcIjogXCJqdDE5NDg0bVwiLCBcIm5hbWVcIjogXCJqdDE5NDg0bVwiLCBcInhcIjogMzIwLjQ4OTkyMTU2NTg3NjMzLCBcInlcIjogMjE4LjQyNTM3MjEyNjE2NjQyLCBcIndpZHRoXCI6IDYwLjY5NzYxNjE5NTg5OTExNiwgXCJoZWlnaHRcIjogNzguMTczMzQwNDAzNzgwNDMsIFwidGltZVwiOiAwLjA5NjY3MTgyNTM5NjgyNTQsIFwic3RhdHVzXCI6IFwiU2hvd1wiIH0sIHsgXCJpZFwiOiBcImp0MTkzbzR5XCIsIFwibmFtZVwiOiBcImp0MTkzbzR5XCIsIFwieFwiOiAzMjEuMDA0MDIzMzU1ODY4NzUsIFwieVwiOiAyMTYuMzY4OTY0OTY2MTk2OCwgXCJ3aWR0aFwiOiA2Mi43NTQwMjMzNTU4Njg3NSwgXCJoZWlnaHRcIjogNzEuNjMxMDM1MDMzODAzMTksIFwidGltZVwiOiAwLjEwNzE0NTgzMzMzMzMzMzM0LCBcInN0YXR1c1wiOiBcIlNob3dcIiB9LCB7IFwiaWRcIjogXCJqdDE5NGRvbVwiLCBcIm5hbWVcIjogXCJqdDE5NGRvbVwiLCBcInhcIjogMzIxLjAwNDAyMzM1NTg2ODc1LCBcInlcIjogMjE4LjgwODMwNDQ2NDAyNDMsIFwid2lkdGhcIjogNjIuNzU0MDIzMzU1ODY4NzUsIFwiaGVpZ2h0XCI6IDY5LjE5MTY5NTUzNTk3NTcsIFwidGltZVwiOiAwLjExOTU4NTcxNDI4NTcxNDMsIFwic3RhdHVzXCI6IFwiU2hvd1wiIH0sIHsgXCJpZFwiOiBcImp0MTkzdGF3XCIsIFwibmFtZVwiOiBcImp0MTkzdGF3XCIsIFwieFwiOiAzMjEuMDA0MDIzMzU1ODY4NzUsIFwieVwiOiAyMjguMzY4OTY0OTY2MTk2OCwgXCJ3aWR0aFwiOiA2Mi43NTQwMjMzNTU4Njg3NSwgXCJoZWlnaHRcIjogNTkuNjMxMDM1MDMzODAzMTksIFwidGltZVwiOiAwLjEzNDU5MDA3OTM2NTA3OTM2LCBcInN0YXR1c1wiOiBcIlNob3dcIiB9LCB7IFwiaWRcIjogXCJqdDE5M3piNFwiLCBcIm5hbWVcIjogXCJqdDE5M3piNFwiLCBcInhcIjogMzE4LjAwNDAyMzM1NTg2ODc1LCBcInlcIjogMjI4LjM2ODk2NDk2NjE5NjgsIFwid2lkdGhcIjogODEuNzU0MDIzMzU1ODY4NzUsIFwiaGVpZ2h0XCI6IDU5LjYzMTAzNTAzMzgwMzE5LCBcInRpbWVcIjogMC4xNjkzOTUyMzgwOTUyMzgxLCBcInN0YXR1c1wiOiBcIlNob3dcIiB9LCB7IFwiaWRcIjogXCJqdDE5NWx0elwiLCBcIm5hbWVcIjogXCJqdDE5NWx0elwiLCBcInhcIjogMzI4LjI4NzQwOTg2NDEyNDQsIFwieVwiOiAyMzAuNjUyMzUxNDc0NDUyNSwgXCJ3aWR0aFwiOiA3MC44NTE2NDIzMTgxMzkwNiwgXCJoZWlnaHRcIjogNTYuNjMxMDM1MDMzODAzMjE1LCBcInRpbWVcIjogMC4xOTg1NTIzNjIyMDQ3MjQ0LCBcInN0YXR1c1wiOiBcIlNob3dcIiB9LCB7IFwiaWRcIjogXCJqdDE5NHRyZ1wiLCBcIm5hbWVcIjogXCJqdDE5NHRyZ1wiLCBcInhcIjogMzIyLjAwNDAyMzM1NTg2ODc1LCBcInlcIjogMjMyLjM2ODk2NDk2NjE5NjgsIFwid2lkdGhcIjogNzYuNjY5Njc4NjI5NzU5NTIsIFwiaGVpZ2h0XCI6IDU5LjYzMTAzNTAzMzgwMzE5LCBcInRpbWVcIjogMC4yMjA0NzIyMjIyMjIyMjIyNCwgXCJzdGF0dXNcIjogXCJTaG93XCIgfSwgeyBcImlkXCI6IFwianQxOTRsZ21cIiwgXCJuYW1lXCI6IFwianQxOTRsZ21cIiwgXCJ4XCI6IDMxOC4wMDQwMjMzNTU4Njg3NSwgXCJ5XCI6IDIyOC4zNjg5NjQ5NjYxOTY4LCBcIndpZHRoXCI6IDc1Ljc1NDAyMzM1NTg2ODc1LCBcImhlaWdodFwiOiA1OS42MzEwMzUwMzM4MDMxOSwgXCJ0aW1lXCI6IDAuMjI5NjcwODMzMzMzMzMzMzIsIFwic3RhdHVzXCI6IFwiU2hvd1wiIH0sIHsgXCJpZFwiOiBcImp0MTk1cDdtXCIsIFwibmFtZVwiOiBcImp0MTk1cDdtXCIsIFwieFwiOiAzMTguMDA0MDIzMzU1ODY4NzUsIFwieVwiOiAyMjguMzY4OTY0OTY2MTk2OCwgXCJ3aWR0aFwiOiA2OC43NTQwMjMzNTU4Njg3NSwgXCJoZWlnaHRcIjogNTguMTk2ODQ5NDYzODU5MDUsIFwidGltZVwiOiAwLjI1MzU5MzUwMzkzNzAwNzg2LCBcInN0YXR1c1wiOiBcIlNob3dcIiB9LCB7IFwiaWRcIjogXCJqdDE5NTFyOVwiLCBcIm5hbWVcIjogXCJqdDE5NTFyOVwiLCBcInhcIjogMzE4LjAwNDAyMzM1NTg2ODc1LCBcInlcIjogMjI4LjM2ODk2NDk2NjE5NjgsIFwid2lkdGhcIjogNzUuNzU0MDIzMzU1ODY4NzUsIFwiaGVpZ2h0XCI6IDU0LjYzMTAzNTAzMzgwMzE5LCBcInRpbWVcIjogMC4zMTMwNzI0MjA2MzQ5MjA2MywgXCJzdGF0dXNcIjogXCJTaG93XCIgfSwgeyBcImlkXCI6IFwianQxOTV2OWxcIiwgXCJuYW1lXCI6IFwianQxOTV2OWxcIiwgXCJ4XCI6IDMxOC4wMDQwMjMzNTU4Njg3NSwgXCJ5XCI6IDIyOC4zNjg5NjQ5NjYxOTY4LCBcIndpZHRoXCI6IDc1Ljc1NDAyMzM1NTg2ODc1LCBcImhlaWdodFwiOiA1NC42MzEwMzUwMzM4MDMxOSwgXCJ0aW1lXCI6IDAuMzQ2MjM5MzcwMDc4NzQwMTcsIFwic3RhdHVzXCI6IFwiSGlkZVwiIH0gXSwgXCJjaGlsZHJlblwiOiBbXSwgXCJwYXJlbnRcIjogXCJqdDE5MjJ4dVwiIH0sIHsgXCJpZFwiOiBcImp0MTkyd3ljXCIsIFwibmFtZVwiOiBcImp0MTkyd3ljXCIsIFwibGFiZWxcIjogXCIxLTFcIiwgXCJjb2xvclwiOiBcInJnYmEoMjU1LDAsMCwxKVwiLCBcImluY2lkZW50c1wiOiBbIHsgXCJpZFwiOiBcImp0MTkyd3liXCIsIFwibmFtZVwiOiBcImp0MTkyd3liXCIsIFwieFwiOiAyNzQuMjUsIFwieVwiOiAxNzEuNzM3OTI5OTMyMzkzNjYsIFwid2lkdGhcIjogNDAuNzU0MDIzMzU1ODY4NzgsIFwiaGVpZ2h0XCI6IDQxLjYzMTAzNTAzMzgwMzE3LCBcInRpbWVcIjogMC4wMzA4MjI2NDk1NzI2NDk2LCBcInN0YXR1c1wiOiBcIlNob3dcIiB9LCB7IFwiaWRcIjogXCJqdDE5MzQ5eFwiLCBcIm5hbWVcIjogXCJqdDE5MzQ5eFwiLCBcInhcIjogMjcxLjI1LCBcInlcIjogMTY3LjczNzkyOTkzMjM5MzY2LCBcIndpZHRoXCI6IDYwLjc1NDAyMzM1NTg2ODc1LCBcImhlaWdodFwiOiA1OC42MzEwMzUwMzM4MDMxNiwgXCJ0aW1lXCI6IDAuMDMxNzg0NzIyMjIyMjIyMjIsIFwic3RhdHVzXCI6IFwiU2hvd1wiIH0sIHsgXCJpZFwiOiBcImp0MTkzZWtkXCIsIFwibmFtZVwiOiBcImp0MTkzZWtkXCIsIFwieFwiOiAyNzQuMjUsIFwieVwiOiAxNjAuNzM3OTI5OTMyMzkzNjYsIFwid2lkdGhcIjogNjAuNzU0MDIzMzU1ODY4NzUsIFwiaGVpZ2h0XCI6IDU4LjYzMTAzNTAzMzgwMzE2LCBcInRpbWVcIjogMC4wNjM4ODYxMTExMTExMTExMiwgXCJzdGF0dXNcIjogXCJTaG93XCIgfSwgeyBcImlkXCI6IFwianQxOTNocDFcIiwgXCJuYW1lXCI6IFwianQxOTNocDFcIiwgXCJ4XCI6IDI4MC4yNSwgXCJ5XCI6IDE2MC43Mzc5Mjk5MzIzOTM2NiwgXCJ3aWR0aFwiOiA2MC43NTQwMjMzNTU4Njg3NSwgXCJoZWlnaHRcIjogNTguNjMxMDM1MDMzODAzMTYsIFwidGltZVwiOiAwLjA4Njc3MjQyMDYzNDkyMDYzLCBcInN0YXR1c1wiOiBcIlNob3dcIiB9LCB7IFwiaWRcIjogXCJqdDE5NGNidlwiLCBcIm5hbWVcIjogXCJqdDE5NGNidlwiLCBcInhcIjogMjgwLjEzMjY5NzU4MjE2NzcsIFwieVwiOiAxNTguNjIwNjI3NTE0NTYxMzYsIFwid2lkdGhcIjogNjAuNzU0MDIzMzU1ODY4NzUsIFwiaGVpZ2h0XCI6IDU4LjYzMTAzNTAzMzgwMzE2LCBcInRpbWVcIjogMC4xMTk1ODU3MTQyODU3MTQzLCBcInN0YXR1c1wiOiBcIlNob3dcIiB9LCB7IFwiaWRcIjogXCJqdDE5M3VtZ1wiLCBcIm5hbWVcIjogXCJqdDE5M3VtZ1wiLCBcInhcIjogMjc0LjI1LCBcInlcIjogMTU0LjczNzkyOTkzMjM5MzY2LCBcIndpZHRoXCI6IDYwLjc1NDAyMzM1NTg2ODc1LCBcImhlaWdodFwiOiA1OC42MzEwMzUwMzM4MDMxNiwgXCJ0aW1lXCI6IDAuMTM0NTkwMDc5MzY1MDc5MzYsIFwic3RhdHVzXCI6IFwiU2hvd1wiIH0sIHsgXCJpZFwiOiBcImp0MTkzeTdxXCIsIFwibmFtZVwiOiBcImp0MTkzeTdxXCIsIFwieFwiOiAyNjguMjUsIFwieVwiOiAxNTUuNzM3OTI5OTMyMzkzNjYsIFwid2lkdGhcIjogNjAuNzU0MDIzMzU1ODY4NzUsIFwiaGVpZ2h0XCI6IDU4LjYzMTAzNTAzMzgwMzE2LCBcInRpbWVcIjogMC4xNjkzOTUyMzgwOTUyMzgxLCBcInN0YXR1c1wiOiBcIlNob3dcIiB9LCB7IFwiaWRcIjogXCJqdDE5NGh4Z1wiLCBcIm5hbWVcIjogXCJqdDE5NGh4Z1wiLCBcInhcIjogMjYwLjI1LCBcInlcIjogMTU3LjczNzkyOTkzMjM5MzY2LCBcIndpZHRoXCI6IDYwLjc1NDAyMzM1NTg2ODc1LCBcImhlaWdodFwiOiA1OC42MzEwMzUwMzM4MDMxNiwgXCJ0aW1lXCI6IDAuMjAyMzMzOTI4NTcxNDI4NTcsIFwic3RhdHVzXCI6IFwiU2hvd1wiIH0sIHsgXCJpZFwiOiBcImp0MTk0bWoxXCIsIFwibmFtZVwiOiBcImp0MTk0bWoxXCIsIFwieFwiOiAyNTMuMjUsIFwieVwiOiAxNTYuNzM3OTI5OTMyMzkzNjYsIFwid2lkdGhcIjogNjAuNzU0MDIzMzU1ODY4NzUsIFwiaGVpZ2h0XCI6IDU4LjYzMTAzNTAzMzgwMzE2LCBcInRpbWVcIjogMC4yMjk2NzA4MzMzMzMzMzMzMiwgXCJzdGF0dXNcIjogXCJTaG93XCIgfSwgeyBcImlkXCI6IFwianQxOTVxZ3dcIiwgXCJuYW1lXCI6IFwianQxOTVxZ3dcIiwgXCJ4XCI6IDI0Ni4yNSwgXCJ5XCI6IDE1Ni43Mzc5Mjk5MzIzOTM2NiwgXCJ3aWR0aFwiOiA2My42NjA0NzgwNTcxMzcwMywgXCJoZWlnaHRcIjogNTguNjMxMDM1MDMzODAzMTYsIFwidGltZVwiOiAwLjI1MzU5MzUwMzkzNzAwNzg2LCBcInN0YXR1c1wiOiBcIlNob3dcIiB9LCB7IFwiaWRcIjogXCJqdDE5NHhxaFwiLCBcIm5hbWVcIjogXCJqdDE5NHhxaFwiLCBcInhcIjogMjUzLjI1LCBcInlcIjogMTU2LjczNzkyOTkzMjM5MzY2LCBcIndpZHRoXCI6IDUyLjc1NDAyMzM1NTg2ODc1LCBcImhlaWdodFwiOiA1OC42MzEwMzUwMzM4MDMxNiwgXCJ0aW1lXCI6IDAuMjc2NDIyODE3NDYwMzE3NDQsIFwic3RhdHVzXCI6IFwiU2hvd1wiIH0sIHsgXCJpZFwiOiBcImp0MTk1NXUxXCIsIFwibmFtZVwiOiBcImp0MTk1NXUxXCIsIFwieFwiOiAyNjUuMjUsIFwieVwiOiAxNTkuNzM3OTI5OTMyMzkzNjYsIFwid2lkdGhcIjogNDAuNzU0MDIzMzU1ODY4NzUsIFwiaGVpZ2h0XCI6IDQ5LjYzMTAzNTAzMzgwMzE2LCBcInRpbWVcIjogMC4zNTY0ODMzMzMzMzMzMzMzLCBcInN0YXR1c1wiOiBcIlNob3dcIiB9LCB7IFwiaWRcIjogXCJqdDE5NWIzaVwiLCBcIm5hbWVcIjogXCJqdDE5NWIzaVwiLCBcInhcIjogMjY1LjI1LCBcInlcIjogMTQxLjczNzkyOTkzMjM5MzY2LCBcIndpZHRoXCI6IDQwLjc1NDAyMzM1NTg2ODc1LCBcImhlaWdodFwiOiA0OS42MzEwMzUwMzM4MDMxNiwgXCJ0aW1lXCI6IDAuNDU5ODQ5ODAxNTg3MzAxNTQsIFwic3RhdHVzXCI6IFwiU2hvd1wiIH0sIHsgXCJpZFwiOiBcImp0MTk2MXY2XCIsIFwibmFtZVwiOiBcImp0MTk2MXY2XCIsIFwieFwiOiAyNjkuMjUsIFwieVwiOiAxNDQuNzM3OTI5OTMyMzkzNjYsIFwid2lkdGhcIjogNDAuNzU0MDIzMzU1ODY4NzUsIFwiaGVpZ2h0XCI6IDQ5LjYzMTAzNTAzMzgwMzE2LCBcInRpbWVcIjogMC40Nzg1MTc1MTk2ODUwMzkzNiwgXCJzdGF0dXNcIjogXCJTaG93XCIgfSwgeyBcImlkXCI6IFwianQxOTY1YXpcIiwgXCJuYW1lXCI6IFwianQxOTY1YXpcIiwgXCJ4XCI6IDI2Mi4yNSwgXCJ5XCI6IDE0NC43Mzc5Mjk5MzIzOTM2NiwgXCJ3aWR0aFwiOiA0Ny43NTQwMjMzNTU4Njg3NSwgXCJoZWlnaHRcIjogNDkuNjMxMDM1MDMzODAzMTYsIFwidGltZVwiOiAwLjUzNDI0OTYwNjI5OTIxMjYsIFwic3RhdHVzXCI6IFwiU2hvd1wiIH0sIHsgXCJpZFwiOiBcImp0MTk2OG5rXCIsIFwibmFtZVwiOiBcImp0MTk2OG5rXCIsIFwieFwiOiAyNjIuMjUsIFwieVwiOiAxNDkuNzM3OTI5OTMyMzkzNjYsIFwid2lkdGhcIjogNDcuNzU0MDIzMzU1ODY4NzUsIFwiaGVpZ2h0XCI6IDQ5LjYzMTAzNTAzMzgwMzE2LCBcInRpbWVcIjogMC41OTA0MTA2Mjk5MjEyNTk4LCBcInN0YXR1c1wiOiBcIlNob3dcIiB9LCB7IFwiaWRcIjogXCJqdDE5NmF4M1wiLCBcIm5hbWVcIjogXCJqdDE5NmF4M1wiLCBcInhcIjogMjcwLjI1LCBcInlcIjogMTU4LjczNzkyOTkzMjM5MzY2LCBcIndpZHRoXCI6IDQ3Ljc1NDAyMzM1NTg2ODc1LCBcImhlaWdodFwiOiA0OS42MzEwMzUwMzM4MDMxNiwgXCJ0aW1lXCI6IDAuNjY2MjU5NjQ1NjY5MjkxMywgXCJzdGF0dXNcIjogXCJTaG93XCIgfSwgeyBcImlkXCI6IFwianQxOTZkeXNcIiwgXCJuYW1lXCI6IFwianQxOTZkeXNcIiwgXCJ4XCI6IDI2OC4yNSwgXCJ5XCI6IDE2NC43Mzc5Mjk5MzIzOTM2NiwgXCJ3aWR0aFwiOiA0Ny43NTQwMjMzNTU4Njg3NSwgXCJoZWlnaHRcIjogNDkuNjMxMDM1MDMzODAzMTYsIFwidGltZVwiOiAwLjczNjgzNzAwNzg3NDAxNTcsIFwic3RhdHVzXCI6IFwiU2hvd1wiIH0sIHsgXCJpZFwiOiBcImp0MTk2Z3V1XCIsIFwibmFtZVwiOiBcImp0MTk2Z3V1XCIsIFwieFwiOiAyNzIuMjUsIFwieVwiOiAxNTQuNzM3OTI5OTMyMzkzNjYsIFwid2lkdGhcIjogNDcuNzU0MDIzMzU1ODY4NzUsIFwiaGVpZ2h0XCI6IDQ5LjYzMTAzNTAzMzgwMzE2LCBcInRpbWVcIjogMC44MDEwNTM5MzcwMDc4NzQsIFwic3RhdHVzXCI6IFwiU2hvd1wiIH0sIHsgXCJpZFwiOiBcImp0MTk2azdoXCIsIFwibmFtZVwiOiBcImp0MTk2azdoXCIsIFwieFwiOiAyNzMuMjUsIFwieVwiOiAxNTcuNzM3OTI5OTMyMzkzNjYsIFwid2lkdGhcIjogNDcuNzU0MDIzMzU1ODY4NzUsIFwiaGVpZ2h0XCI6IDQ5LjYzMTAzNTAzMzgwMzE2LCBcInRpbWVcIjogMC44NjI2MzUwMzkzNzAwNzg3LCBcInN0YXR1c1wiOiBcIlNob3dcIiB9IF0sIFwiY2hpbGRyZW5cIjogW10sIFwicGFyZW50XCI6IFwianQxOTIyeHVcIiB9LCB7IFwiaWRcIjogXCJqdDE5MjJ4dVwiLCBcIm5hbWVcIjogXCJqdDE5MjJ4dVwiLCBcImxhYmVsXCI6IFwiMVwiLCBcImNvbG9yXCI6IFwicmdiYSgyNTUsMjE5LDAsMSlcIiwgXCJpbmNpZGVudHNcIjogWyB7IFwiaWRcIjogXCJqdDE5MjJ4dVwiLCBcIm5hbWVcIjogXCJqdDE5MjJ4dVwiLCBcInhcIjogMjc0LjI1LCBcInlcIjogMTc0LCBcIndpZHRoXCI6IDgwLCBcImhlaWdodFwiOiA4MSwgXCJ0aW1lXCI6IDAsIFwic3RhdHVzXCI6IFwiU2hvd1wiIH0sIHsgXCJpZFwiOiBcImp0MTkyd3liXCIsIFwibmFtZVwiOiBcImp0MTkyd3liXCIsIFwieFwiOiAyNzQuMjUsIFwieVwiOiAxNzEuNzM3OTI5OTMyMzkzNjYsIFwid2lkdGhcIjogODEuNTA4MDQ2NzExNzM3NTYsIFwiaGVpZ2h0XCI6IDgzLjI2MjA3MDA2NzYwNjM0LCBcInRpbWVcIjogMC4wMzA4MjI2NDk1NzI2NDk2LCBcInN0YXR1c1wiOiBcIlNwbGl0XCIgfSBdLCBcImNoaWxkcmVuXCI6IFsgXCJqdDE5Mnd5Y1wiLCBcImp0MTkyd3lkXCIgXSwgXCJwYXJlbnRcIjogXCJcIiB9IF07XG5cdFx0Ly8gY29uc3QgcHJldmlld05vdGljZXMgPSBbXCJDZWxscycgYm9keSByYW5nZS5cIiwgXCJUaGUgdGltZSB0aGF0IGNlbGxzIDx1PnNwbGl0PC91PiwgPHU+bGVhdmU8L3U+LCA8dT5vYnNjdXJlZDwvdT4gYW5kIDx1PnNob3cgdXA8L3U+IChpZiBhcHBsaWNhYmxlKS5cIl07XG5cdFx0Ly8gY29uc3QgdXJsID0gJ2h0dHBzOi8vY2lsZGF0YS5jcmJzLnVjc2QuZWR1L21lZGlhL3ZpZGVvcy81MDUwNy81MDUwN193ZWIubXA0Jztcblx0XHQvLyBjb25zdCBhbm5vdGF0aW9uV2lkdGggPSA2MDA7XG5cdFx0Ly8gdGhpcy5zdGF0ZSA9IHtcblx0XHQvLyBcdHJlc3VsdDogbnVsbCxcblx0XHQvLyBcdGlucHV0OiB7XG5cdFx0Ly8gXHRcdGFubm90YXRpb25zOiBKU09OLnN0cmluZ2lmeShhbm5vdGF0aW9ucyksXG5cdFx0Ly8gXHRcdHVybDogdXJsLFxuXHRcdC8vIFx0XHRhbm5vdGF0aW9uV2lkdGg6IGFubm90YXRpb25XaWR0aFxuXHRcdC8vIFx0IH0sXG5cdFx0Ly8gXHRwYXJhbXM6IHtcblx0XHQvLyBcdFx0YW5ub3RhdGlvbnM6IGFubm90YXRpb25zLFxuXHRcdC8vIFx0XHR1cmw6IHVybCxcblx0XHQvLyBcdFx0cHJldmlld05vdGljZXM6IHByZXZpZXdOb3RpY2VzLFxuXHRcdC8vIFx0XHRhbm5vdGF0aW9uV2lkdGg6IGFubm90YXRpb25XaWR0aFxuXHRcdC8vIFx0fVxuXHRcdC8vIH1cblxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHR2aWRlb0ZpbGVVUkw6ICcnLFxuXHRcdFx0dmlkZW9GaWxlT2JqZWN0OiBudWxsLFxuXHRcdFx0bXlTdHJlYW06IG51bGwsXG5cdFx0XHRyZXN1bHQ6IG51bGwsXG5cdFx0XHRyYXdEYXRhOiBudWxsLFxuXHRcdFx0aW50ZXJwb2xhdGlvblJlc3VsdDogbnVsbCxcblx0XHRcdHNob3dNZTogZmFsc2UsXG5cdFx0XHR2aWRlb0R1cmF0aW9uOiA1LjA0LFxuXHRcdFx0dmlkZW9GcmFtZXJhdGU6IDYwLFxuXHRcdFx0aW5wdXQ6IHtcblx0XHRcdFx0ZGVmYXVsdEFubm90YXRpb25zOiBKU09OLnN0cmluZ2lmeShkZWZhdWx0QW5ub3RhdGlvbnMpLFxuXHRcdFx0XHR1cmwsXG5cdFx0XHRcdHZpZGVvV2lkdGgsXG5cdFx0XHRcdHByZXZpZXdIZWFkZXIsXG5cdFx0XHRcdHByZXZpZXdOb3RpY2VMaXN0LFxuXHRcdFx0XHRlbXB0eUNoZWNrU3VibWlzc2lvbldhcm5pbmdUZXh0LFxuXHRcdFx0XHRlbXB0eUNoZWNrQW5ub3RhdGlvbkl0ZW1XYXJuaW5nVGV4dCxcblx0XHRcdFx0ZW1wdHlBbm5vdGF0aW9uUmVtaW5kZXJUZXh0LFxuXG5cdFx0XHR9LFxuXHRcdFx0cGFyYW1zOiB7XG5cdFx0XHRcdGRlZmF1bHRBbm5vdGF0aW9uczogW10sXG5cdFx0XHRcdHVybCxcblx0XHRcdFx0dmlkZW9XaWR0aCxcblx0XHRcdFx0cHJldmlld0hlYWRlcixcblx0XHRcdFx0cHJldmlld05vdGljZUxpc3QsXG5cdFx0XHRcdGVtcHR5Q2hlY2tTdWJtaXNzaW9uV2FybmluZ1RleHQsXG5cdFx0XHRcdGVtcHR5Q2hlY2tBbm5vdGF0aW9uSXRlbVdhcm5pbmdUZXh0LFxuXHRcdFx0XHRlbXB0eUFubm90YXRpb25SZW1pbmRlclRleHQsXG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vc3RhcnQgY29udGVudCBmcm9tIHJlYWN0IHRvb2xcblx0XHRjb25zdCB0ZW1wID0ge307XG5cblxuXHRcdGNvbnN0IGRlZmF1bHRBbm5vdGF0aW9ucyA9IFt7XG5cdFx0XHRpZDogJ2p0MTkyd3lkJyxcblx0XHRcdG5hbWU6ICdqdDE5Mnd5ZCcsXG5cdFx0XHRsYWJlbDogJzEtMicsXG5cdFx0XHRjb2xvcjogJ3JnYmEoMjU1LDAsMCwxKScsXG5cdFx0XHRpbmNpZGVudHM6IFt7XG5cdFx0XHRcdGlkOiAnanQxOTJ3eWInLCBuYW1lOiAnanQxOTJ3eWInLCB4OiAyOTUuMDA0MDIzMzU1ODY4NzUsIHk6IDE5My4zNjg5NjQ5NjYxOTY4LCB3aWR0aDogNDAuNzU0MDIzMzU1ODY4NzgsIGhlaWdodDogNDEuNjMxMDM1MDMzODAzMTcsIHRpbWU6IDAuMDMwODIyNjQ5NTcyNjQ5Niwgc3RhdHVzOiAnU2hvdycsXG5cdFx0XHR9LCB7XG5cdFx0XHRcdGlkOiAnanQxOTMwbmInLCBuYW1lOiAnanQxOTMwbmInLCB4OiAzMDQuMDA0MDIzMzU1ODY4NzUsIHk6IDIwMi4zNjg5NjQ5NjYxOTY4LCB3aWR0aDogNTguNzU0MDIzMzU1ODY4NzUsIGhlaWdodDogNjAuNjMxMDM1MDMzODAzMTksIHRpbWU6IDAuMDMxNzg0NzIyMjIyMjIyMjIsIHN0YXR1czogJ1Nob3cnLFxuXHRcdFx0fSwge1xuXHRcdFx0XHRpZDogJ2p0MTkzZmltJywgbmFtZTogJ2p0MTkzZmltJywgeDogMzA5LjAwNDAyMzM1NTg2ODc1LCB5OiAyMTMuMzY4OTY0OTY2MTk2OCwgd2lkdGg6IDU4Ljc1NDAyMzM1NTg2ODc1LCBoZWlnaHQ6IDYwLjYzMTAzNTAzMzgwMzE5LCB0aW1lOiAwLjA2Mzg4NjExMTExMTExMTEyLCBzdGF0dXM6ICdTaG93Jyxcblx0XHRcdH0sIHtcblx0XHRcdFx0aWQ6ICdqdDE5M2lqbycsIG5hbWU6ICdqdDE5M2lqbycsIHg6IDMyMC4wMDQwMjMzNTU4Njg3NSwgeTogMjIwLjM2ODk2NDk2NjE5NjgsIHdpZHRoOiA1OC43NTQwMjMzNTU4Njg3NSwgaGVpZ2h0OiA3NC42MzEwMzUwMzM4MDMxOSwgdGltZTogMC4wODY3NzI0MjA2MzQ5MjA2Mywgc3RhdHVzOiAnU2hvdycsXG5cdFx0XHR9LCB7XG5cdFx0XHRcdGlkOiAnanQxOTQ4NG0nLCBuYW1lOiAnanQxOTQ4NG0nLCB4OiAzMjAuNDg5OTIxNTY1ODc2MzMsIHk6IDIxOC40MjUzNzIxMjYxNjY0Miwgd2lkdGg6IDYwLjY5NzYxNjE5NTg5OTExNiwgaGVpZ2h0OiA3OC4xNzMzNDA0MDM3ODA0MywgdGltZTogMC4wOTY2NzE4MjUzOTY4MjU0LCBzdGF0dXM6ICdTaG93Jyxcblx0XHRcdH0sIHtcblx0XHRcdFx0aWQ6ICdqdDE5M280eScsIG5hbWU6ICdqdDE5M280eScsIHg6IDMyMS4wMDQwMjMzNTU4Njg3NSwgeTogMjE2LjM2ODk2NDk2NjE5NjgsIHdpZHRoOiA2Mi43NTQwMjMzNTU4Njg3NSwgaGVpZ2h0OiA3MS42MzEwMzUwMzM4MDMxOSwgdGltZTogMC4xMDcxNDU4MzMzMzMzMzMzNCwgc3RhdHVzOiAnU2hvdycsXG5cdFx0XHR9LCB7XG5cdFx0XHRcdGlkOiAnanQxOTRkb20nLCBuYW1lOiAnanQxOTRkb20nLCB4OiAzMjEuMDA0MDIzMzU1ODY4NzUsIHk6IDIxOC44MDgzMDQ0NjQwMjQzLCB3aWR0aDogNjIuNzU0MDIzMzU1ODY4NzUsIGhlaWdodDogNjkuMTkxNjk1NTM1OTc1NywgdGltZTogMC4xMTk1ODU3MTQyODU3MTQzLCBzdGF0dXM6ICdTaG93Jyxcblx0XHRcdH0sIHtcblx0XHRcdFx0aWQ6ICdqdDE5M3RhdycsIG5hbWU6ICdqdDE5M3RhdycsIHg6IDMyMS4wMDQwMjMzNTU4Njg3NSwgeTogMjI4LjM2ODk2NDk2NjE5NjgsIHdpZHRoOiA2Mi43NTQwMjMzNTU4Njg3NSwgaGVpZ2h0OiA1OS42MzEwMzUwMzM4MDMxOSwgdGltZTogMC4xMzQ1OTAwNzkzNjUwNzkzNiwgc3RhdHVzOiAnU2hvdycsXG5cdFx0XHR9LCB7XG5cdFx0XHRcdGlkOiAnanQxOTN6YjQnLCBuYW1lOiAnanQxOTN6YjQnLCB4OiAzMTguMDA0MDIzMzU1ODY4NzUsIHk6IDIyOC4zNjg5NjQ5NjYxOTY4LCB3aWR0aDogODEuNzU0MDIzMzU1ODY4NzUsIGhlaWdodDogNTkuNjMxMDM1MDMzODAzMTksIHRpbWU6IDAuMTY5Mzk1MjM4MDk1MjM4MSwgc3RhdHVzOiAnU2hvdycsXG5cdFx0XHR9LCB7XG5cdFx0XHRcdGlkOiAnanQxOTVsdHonLCBuYW1lOiAnanQxOTVsdHonLCB4OiAzMjguMjg3NDA5ODY0MTI0NCwgeTogMjMwLjY1MjM1MTQ3NDQ1MjUsIHdpZHRoOiA3MC44NTE2NDIzMTgxMzkwNiwgaGVpZ2h0OiA1Ni42MzEwMzUwMzM4MDMyMTUsIHRpbWU6IDAuMTk4NTUyMzYyMjA0NzI0NCwgc3RhdHVzOiAnU2hvdycsXG5cdFx0XHR9LCB7XG5cdFx0XHRcdGlkOiAnanQxOTR0cmcnLCBuYW1lOiAnanQxOTR0cmcnLCB4OiAzMjIuMDA0MDIzMzU1ODY4NzUsIHk6IDIzMi4zNjg5NjQ5NjYxOTY4LCB3aWR0aDogNzYuNjY5Njc4NjI5NzU5NTIsIGhlaWdodDogNTkuNjMxMDM1MDMzODAzMTksIHRpbWU6IDAuMjIwNDcyMjIyMjIyMjIyMjQsIHN0YXR1czogJ1Nob3cnLFxuXHRcdFx0fSwge1xuXHRcdFx0XHRpZDogJ2p0MTk0bGdtJywgbmFtZTogJ2p0MTk0bGdtJywgeDogMzE4LjAwNDAyMzM1NTg2ODc1LCB5OiAyMjguMzY4OTY0OTY2MTk2OCwgd2lkdGg6IDc1Ljc1NDAyMzM1NTg2ODc1LCBoZWlnaHQ6IDU5LjYzMTAzNTAzMzgwMzE5LCB0aW1lOiAwLjIyOTY3MDgzMzMzMzMzMzMyLCBzdGF0dXM6ICdTaG93Jyxcblx0XHRcdH0sIHtcblx0XHRcdFx0aWQ6ICdqdDE5NXA3bScsIG5hbWU6ICdqdDE5NXA3bScsIHg6IDMxOC4wMDQwMjMzNTU4Njg3NSwgeTogMjI4LjM2ODk2NDk2NjE5NjgsIHdpZHRoOiA2OC43NTQwMjMzNTU4Njg3NSwgaGVpZ2h0OiA1OC4xOTY4NDk0NjM4NTkwNSwgdGltZTogMC4yNTM1OTM1MDM5MzcwMDc4Niwgc3RhdHVzOiAnU2hvdycsXG5cdFx0XHR9LCB7XG5cdFx0XHRcdGlkOiAnanQxOTUxcjknLCBuYW1lOiAnanQxOTUxcjknLCB4OiAzMTguMDA0MDIzMzU1ODY4NzUsIHk6IDIyOC4zNjg5NjQ5NjYxOTY4LCB3aWR0aDogNzUuNzU0MDIzMzU1ODY4NzUsIGhlaWdodDogNTQuNjMxMDM1MDMzODAzMTksIHRpbWU6IDAuMzEzMDcyNDIwNjM0OTIwNjMsIHN0YXR1czogJ1Nob3cnLFxuXHRcdFx0fSwge1xuXHRcdFx0XHRpZDogJ2p0MTk1djlsJywgbmFtZTogJ2p0MTk1djlsJywgeDogMzE4LjAwNDAyMzM1NTg2ODc1LCB5OiAyMjguMzY4OTY0OTY2MTk2OCwgd2lkdGg6IDc1Ljc1NDAyMzM1NTg2ODc1LCBoZWlnaHQ6IDU0LjYzMTAzNTAzMzgwMzE5LCB0aW1lOiAwLjM0NjIzOTM3MDA3ODc0MDE3LCBzdGF0dXM6ICdIaWRlJyxcblx0XHRcdH1dLFxuXHRcdFx0Y2hpbGRyZW5OYW1lczogW10sXG5cdFx0XHRwYXJlbnROYW1lOiAnanQxOTIyeHUnLFxuXHRcdH0sIHtcblx0XHRcdGlkOiAnanQxOTJ3eWMnLFxuXHRcdFx0bmFtZTogJ2p0MTkyd3ljJyxcblx0XHRcdGxhYmVsOiAnMS0xJyxcblx0XHRcdGNvbG9yOiAncmdiYSgyNTUsMCwwLDEpJyxcblx0XHRcdGluY2lkZW50czogW3tcblx0XHRcdFx0aWQ6ICdqdDE5Mnd5YicsIG5hbWU6ICdqdDE5Mnd5YicsIHg6IDI3NC4yNSwgeTogMTcxLjczNzkyOTkzMjM5MzY2LCB3aWR0aDogNDAuNzU0MDIzMzU1ODY4NzgsIGhlaWdodDogNDEuNjMxMDM1MDMzODAzMTcsIHRpbWU6IDAuMDMwODIyNjQ5NTcyNjQ5Niwgc3RhdHVzOiAnU2hvdycsXG5cdFx0XHR9LCB7XG5cdFx0XHRcdGlkOiAnanQxOTM0OXgnLCBuYW1lOiAnanQxOTM0OXgnLCB4OiAyNzEuMjUsIHk6IDE2Ny43Mzc5Mjk5MzIzOTM2Niwgd2lkdGg6IDYwLjc1NDAyMzM1NTg2ODc1LCBoZWlnaHQ6IDU4LjYzMTAzNTAzMzgwMzE2LCB0aW1lOiAwLjAzMTc4NDcyMjIyMjIyMjIyLCBzdGF0dXM6ICdTaG93Jyxcblx0XHRcdH0sIHtcblx0XHRcdFx0aWQ6ICdqdDE5M2VrZCcsIG5hbWU6ICdqdDE5M2VrZCcsIHg6IDI3NC4yNSwgeTogMTYwLjczNzkyOTkzMjM5MzY2LCB3aWR0aDogNjAuNzU0MDIzMzU1ODY4NzUsIGhlaWdodDogNTguNjMxMDM1MDMzODAzMTYsIHRpbWU6IDAuMDYzODg2MTExMTExMTExMTIsIHN0YXR1czogJ1Nob3cnLFxuXHRcdFx0fSwge1xuXHRcdFx0XHRpZDogJ2p0MTkzaHAxJywgbmFtZTogJ2p0MTkzaHAxJywgeDogMjgwLjI1LCB5OiAxNjAuNzM3OTI5OTMyMzkzNjYsIHdpZHRoOiA2MC43NTQwMjMzNTU4Njg3NSwgaGVpZ2h0OiA1OC42MzEwMzUwMzM4MDMxNiwgdGltZTogMC4wODY3NzI0MjA2MzQ5MjA2Mywgc3RhdHVzOiAnU2hvdycsXG5cdFx0XHR9LCB7XG5cdFx0XHRcdGlkOiAnanQxOTRjYnYnLCBuYW1lOiAnanQxOTRjYnYnLCB4OiAyODAuMTMyNjk3NTgyMTY3NywgeTogMTU4LjYyMDYyNzUxNDU2MTM2LCB3aWR0aDogNjAuNzU0MDIzMzU1ODY4NzUsIGhlaWdodDogNTguNjMxMDM1MDMzODAzMTYsIHRpbWU6IDAuMTE5NTg1NzE0Mjg1NzE0Mywgc3RhdHVzOiAnU2hvdycsXG5cdFx0XHR9LCB7XG5cdFx0XHRcdGlkOiAnanQxOTN1bWcnLCBuYW1lOiAnanQxOTN1bWcnLCB4OiAyNzQuMjUsIHk6IDE1NC43Mzc5Mjk5MzIzOTM2Niwgd2lkdGg6IDYwLjc1NDAyMzM1NTg2ODc1LCBoZWlnaHQ6IDU4LjYzMTAzNTAzMzgwMzE2LCB0aW1lOiAwLjEzNDU5MDA3OTM2NTA3OTM2LCBzdGF0dXM6ICdTaG93Jyxcblx0XHRcdH0sIHtcblx0XHRcdFx0aWQ6ICdqdDE5M3k3cScsIG5hbWU6ICdqdDE5M3k3cScsIHg6IDI2OC4yNSwgeTogMTU1LjczNzkyOTkzMjM5MzY2LCB3aWR0aDogNjAuNzU0MDIzMzU1ODY4NzUsIGhlaWdodDogNTguNjMxMDM1MDMzODAzMTYsIHRpbWU6IDAuMTY5Mzk1MjM4MDk1MjM4MSwgc3RhdHVzOiAnU2hvdycsXG5cdFx0XHR9LCB7XG5cdFx0XHRcdGlkOiAnanQxOTRoeGcnLCBuYW1lOiAnanQxOTRoeGcnLCB4OiAyNjAuMjUsIHk6IDE1Ny43Mzc5Mjk5MzIzOTM2Niwgd2lkdGg6IDYwLjc1NDAyMzM1NTg2ODc1LCBoZWlnaHQ6IDU4LjYzMTAzNTAzMzgwMzE2LCB0aW1lOiAwLjIwMjMzMzkyODU3MTQyODU3LCBzdGF0dXM6ICdTaG93Jyxcblx0XHRcdH0sIHtcblx0XHRcdFx0aWQ6ICdqdDE5NG1qMScsIG5hbWU6ICdqdDE5NG1qMScsIHg6IDI1My4yNSwgeTogMTU2LjczNzkyOTkzMjM5MzY2LCB3aWR0aDogNjAuNzU0MDIzMzU1ODY4NzUsIGhlaWdodDogNTguNjMxMDM1MDMzODAzMTYsIHRpbWU6IDAuMjI5NjcwODMzMzMzMzMzMzIsIHN0YXR1czogJ1Nob3cnLFxuXHRcdFx0fSwge1xuXHRcdFx0XHRpZDogJ2p0MTk1cWd3JywgbmFtZTogJ2p0MTk1cWd3JywgeDogMjQ2LjI1LCB5OiAxNTYuNzM3OTI5OTMyMzkzNjYsIHdpZHRoOiA2My42NjA0NzgwNTcxMzcwMywgaGVpZ2h0OiA1OC42MzEwMzUwMzM4MDMxNiwgdGltZTogMC4yNTM1OTM1MDM5MzcwMDc4Niwgc3RhdHVzOiAnU2hvdycsXG5cdFx0XHR9LCB7XG5cdFx0XHRcdGlkOiAnanQxOTR4cWgnLCBuYW1lOiAnanQxOTR4cWgnLCB4OiAyNTMuMjUsIHk6IDE1Ni43Mzc5Mjk5MzIzOTM2Niwgd2lkdGg6IDUyLjc1NDAyMzM1NTg2ODc1LCBoZWlnaHQ6IDU4LjYzMTAzNTAzMzgwMzE2LCB0aW1lOiAwLjI3NjQyMjgxNzQ2MDMxNzQ0LCBzdGF0dXM6ICdTaG93Jyxcblx0XHRcdH0sIHtcblx0XHRcdFx0aWQ6ICdqdDE5NTV1MScsIG5hbWU6ICdqdDE5NTV1MScsIHg6IDI2NS4yNSwgeTogMTU5LjczNzkyOTkzMjM5MzY2LCB3aWR0aDogNDAuNzU0MDIzMzU1ODY4NzUsIGhlaWdodDogNDkuNjMxMDM1MDMzODAzMTYsIHRpbWU6IDAuMzU2NDgzMzMzMzMzMzMzMywgc3RhdHVzOiAnU2hvdycsXG5cdFx0XHR9LCB7XG5cdFx0XHRcdGlkOiAnanQxOTViM2knLCBuYW1lOiAnanQxOTViM2knLCB4OiAyNjUuMjUsIHk6IDE0MS43Mzc5Mjk5MzIzOTM2Niwgd2lkdGg6IDQwLjc1NDAyMzM1NTg2ODc1LCBoZWlnaHQ6IDQ5LjYzMTAzNTAzMzgwMzE2LCB0aW1lOiAwLjQ1OTg0OTgwMTU4NzMwMTU0LCBzdGF0dXM6ICdTaG93Jyxcblx0XHRcdH0sIHtcblx0XHRcdFx0aWQ6ICdqdDE5NjF2NicsIG5hbWU6ICdqdDE5NjF2NicsIHg6IDI2OS4yNSwgeTogMTQ0LjczNzkyOTkzMjM5MzY2LCB3aWR0aDogNDAuNzU0MDIzMzU1ODY4NzUsIGhlaWdodDogNDkuNjMxMDM1MDMzODAzMTYsIHRpbWU6IDAuNDc4NTE3NTE5Njg1MDM5MzYsIHN0YXR1czogJ1Nob3cnLFxuXHRcdFx0fSwge1xuXHRcdFx0XHRpZDogJ2p0MTk2NWF6JywgbmFtZTogJ2p0MTk2NWF6JywgeDogMjYyLjI1LCB5OiAxNDQuNzM3OTI5OTMyMzkzNjYsIHdpZHRoOiA0Ny43NTQwMjMzNTU4Njg3NSwgaGVpZ2h0OiA0OS42MzEwMzUwMzM4MDMxNiwgdGltZTogMC41MzQyNDk2MDYyOTkyMTI2LCBzdGF0dXM6ICdTaG93Jyxcblx0XHRcdH0sIHtcblx0XHRcdFx0aWQ6ICdqdDE5NjhuaycsIG5hbWU6ICdqdDE5NjhuaycsIHg6IDI2Mi4yNSwgeTogMTQ5LjczNzkyOTkzMjM5MzY2LCB3aWR0aDogNDcuNzU0MDIzMzU1ODY4NzUsIGhlaWdodDogNDkuNjMxMDM1MDMzODAzMTYsIHRpbWU6IDAuNTkwNDEwNjI5OTIxMjU5OCwgc3RhdHVzOiAnU2hvdycsXG5cdFx0XHR9LCB7XG5cdFx0XHRcdGlkOiAnanQxOTZheDMnLCBuYW1lOiAnanQxOTZheDMnLCB4OiAyNzAuMjUsIHk6IDE1OC43Mzc5Mjk5MzIzOTM2Niwgd2lkdGg6IDQ3Ljc1NDAyMzM1NTg2ODc1LCBoZWlnaHQ6IDQ5LjYzMTAzNTAzMzgwMzE2LCB0aW1lOiAwLjY2NjI1OTY0NTY2OTI5MTMsIHN0YXR1czogJ1Nob3cnLFxuXHRcdFx0fSwge1xuXHRcdFx0XHRpZDogJ2p0MTk2ZHlzJywgbmFtZTogJ2p0MTk2ZHlzJywgeDogMjY4LjI1LCB5OiAxNjQuNzM3OTI5OTMyMzkzNjYsIHdpZHRoOiA0Ny43NTQwMjMzNTU4Njg3NSwgaGVpZ2h0OiA0OS42MzEwMzUwMzM4MDMxNiwgdGltZTogMC43MzY4MzcwMDc4NzQwMTU3LCBzdGF0dXM6ICdTaG93Jyxcblx0XHRcdH0sIHtcblx0XHRcdFx0aWQ6ICdqdDE5Nmd1dScsIG5hbWU6ICdqdDE5Nmd1dScsIHg6IDI3Mi4yNSwgeTogMTU0LjczNzkyOTkzMjM5MzY2LCB3aWR0aDogNDcuNzU0MDIzMzU1ODY4NzUsIGhlaWdodDogNDkuNjMxMDM1MDMzODAzMTYsIHRpbWU6IDAuODAxMDUzOTM3MDA3ODc0LCBzdGF0dXM6ICdTaG93Jyxcblx0XHRcdH0sIHtcblx0XHRcdFx0aWQ6ICdqdDE5Nms3aCcsIG5hbWU6ICdqdDE5Nms3aCcsIHg6IDI3My4yNSwgeTogMTU3LjczNzkyOTkzMjM5MzY2LCB3aWR0aDogNDcuNzU0MDIzMzU1ODY4NzUsIGhlaWdodDogNDkuNjMxMDM1MDMzODAzMTYsIHRpbWU6IDAuODYyNjM1MDM5MzcwMDc4Nywgc3RhdHVzOiAnU2hvdycsXG5cdFx0XHR9XSxcblx0XHRcdGNoaWxkcmVuTmFtZXM6IFtdLFxuXHRcdFx0cGFyZW50TmFtZTogJ2p0MTkyMnh1Jyxcblx0XHR9LCB7XG5cdFx0XHRpZDogJ2p0MTkyMnh1Jyxcblx0XHRcdG5hbWU6ICdqdDE5MjJ4dScsXG5cdFx0XHRsYWJlbDogJzEnLFxuXHRcdFx0Y29sb3I6ICdyZ2JhKDI1NSwyMTksMCwxKScsXG5cdFx0XHRpbmNpZGVudHM6IFt7XG5cdFx0XHRcdGlkOiAnanQxOTIyeHUnLCBuYW1lOiAnanQxOTIyeHUnLCB4OiAyNzQuMjUsIHk6IDE3NCwgd2lkdGg6IDgwLCBoZWlnaHQ6IDgxLCB0aW1lOiAwLCBzdGF0dXM6ICdTaG93Jyxcblx0XHRcdH0sIHtcblx0XHRcdFx0aWQ6ICdqdDE5Mnd5YicsIG5hbWU6ICdqdDE5Mnd5YicsIHg6IDI3NC4yNSwgeTogMTcxLjczNzkyOTkzMjM5MzY2LCB3aWR0aDogODEuNTA4MDQ2NzExNzM3NTYsIGhlaWdodDogODMuMjYyMDcwMDY3NjA2MzQsIHRpbWU6IDAuMDMwODIyNjQ5NTcyNjQ5Niwgc3RhdHVzOiAnU3BsaXQnLFxuXHRcdFx0fV0sXG5cdFx0XHRjaGlsZHJlbk5hbWVzOiBbJ2p0MTkyd3ljJywgJ2p0MTkyd3lkJ10sXG5cdFx0XHRwYXJlbnROYW1lOiAnJyxcblx0XHR9XTtcblx0XHRjb25zdCB1cmwgPSAnaHR0cHM6Ly9jaWxkYXRhLmNyYnMudWNzZC5lZHUvbWVkaWEvdmlkZW9zLzUwNTA3LzUwNTA3X3dlYi5tcDQnO1xuXHRcdGNvbnN0IHZpZGVvV2lkdGggPSA1MDA7XG5cdFx0Y29uc3QgcHJldmlld05vdGljZUxpc3QgPSBbXG5cdFx0XHQnQ2VsbHNcXCcgYm9keSByYW5nZS4nLFxuXHRcdFx0J1RoZSB0aW1lIHRoYXQgY2VsbHMgPHU+c3BsaXQ8L3U+LCA8dT5sZWF2ZTwvdT4sIDx1Pm9ic2N1cmVkPC91PiBhbmQgPHU+U2hvdyB1cDwvdT4gKGlmIGFwcGxpY2FibGUpLicsXG5cdFx0XTtcblx0XHRjb25zdCBwcmV2aWV3SGVhZGVyID0gJ1BsZWFzZSBzY2FuIHRoZSB2aWRlbyBhbmQgb2JzZXJ2ZSB0aGUgZm9sbG93aW5nIHRvIGhlbHAgeW91IGNvbXBsZXRlIHRoZSB0YXNrOic7XG5cdFx0Y29uc3QgZW1wdHlDaGVja1N1Ym1pc3Npb25XYXJuaW5nVGV4dCA9ICdQbGVhc2UgYW5ub3RhdGUgQU5EIHRyYWNrIG9uZSB1bm1hcmtlZCBjZWxsIHRvIGNvbXBsZXRlIHRoaXMgdGFzay4nO1xuXHRcdGNvbnN0IGVtcHR5Q2hlY2tBbm5vdGF0aW9uSXRlbVdhcm5pbmdUZXh0ID0gJ1N0ZXAgMjogUGxlYXNlIHRyYWNrIHRoZSBjZWxsIGJvdW5kIGJ5IHRoaXMgYm94Jztcblx0XHRjb25zdCBlbXB0eUFubm90YXRpb25SZW1pbmRlclRleHQgPSAnU3RlcCAxOiBDbGljayB0aGUgYnV0dG9uIGFib3ZlIHRvIGFkZCBhIG5ldyBib3ggYXJvdW5kIGEgY2VsbCc7XG5cdFx0dGhpcy52aWRlb0ZpbGVJbnB1dCA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuXHRcdHRoaXMuZmlsZUlucHV0ID0gUmVhY3QuY3JlYXRlUmVmKCk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdG15U3RyZWFtOiBudWxsLFxuXHRcdFx0cmVzdWx0OiBudWxsLFxuXHRcdFx0aW50ZXJwb2xhdGlvblJlc3VsdDogbnVsbCxcblx0XHRcdHNob3dNZTogZmFsc2UsXG5cdFx0XHR2aWRlb0R1cmF0aW9uOiA1LjA0LFxuXHRcdFx0dmlkZW9GcmFtZXJhdGU6IDYwLFxuXHRcdFx0aW5wdXQ6IHtcblx0XHRcdFx0ZGVmYXVsdEFubm90YXRpb25zOiBKU09OLnN0cmluZ2lmeShkZWZhdWx0QW5ub3RhdGlvbnMpLFxuXHRcdFx0XHR1cmwsXG5cdFx0XHRcdHZpZGVvV2lkdGgsXG5cdFx0XHRcdHByZXZpZXdIZWFkZXIsXG5cdFx0XHRcdHByZXZpZXdOb3RpY2VMaXN0LFxuXHRcdFx0XHRlbXB0eUNoZWNrU3VibWlzc2lvbldhcm5pbmdUZXh0LFxuXHRcdFx0XHRlbXB0eUNoZWNrQW5ub3RhdGlvbkl0ZW1XYXJuaW5nVGV4dCxcblx0XHRcdFx0ZW1wdHlBbm5vdGF0aW9uUmVtaW5kZXJUZXh0LFxuXHRcdFx0fSxcblx0XHRcdHBhcmFtczoge1xuXHRcdFx0XHRkZWZhdWx0QW5ub3RhdGlvbnM6IFtdLFxuXHRcdFx0XHR1cmwsXG5cdFx0XHRcdHZpZGVvV2lkdGgsXG5cdFx0XHRcdHByZXZpZXdIZWFkZXIsXG5cdFx0XHRcdHByZXZpZXdOb3RpY2VMaXN0LFxuXHRcdFx0XHRlbXB0eUNoZWNrU3VibWlzc2lvbldhcm5pbmdUZXh0LFxuXHRcdFx0XHRlbXB0eUNoZWNrQW5ub3RhdGlvbkl0ZW1XYXJuaW5nVGV4dCxcblx0XHRcdFx0ZW1wdHlBbm5vdGF0aW9uUmVtaW5kZXJUZXh0LFxuXHRcdFx0fVxuXHRcdH1cblx0XHQvL2VuZCBjb250ZW50IGZyb20gcmVhY3QgdG9vbFxuXHRcdC8vY2xvc2UgY29uc3RydWN0b3IgcHJvcHNcdFxuXHR9XG5cdHNjcm9sbFRvUmVmID0gKCkgPT4gd2luZG93LnNjcm9sbFRvKDAsIHRoaXMubXlSZWYuY3VycmVudC5vZmZzZXRUb3ApXG5cdGhhbmRsZVJlc3VsdFN1Ym1pdCA9IHJlc3VsdCA9PiB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IHJlc3VsdDogcmVzdWx0IH0pO1xuXHRcdHRoaXMuc2V0U3RhdGUoe3ZpZGVvRHVyYXRpb246IHRoaXMuc3RhdGUudmlkZW9EdXJhdGlvbn0pXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRzaG93TWU6IHRydWVcblx0XHR9KTtcblxuXHRcdGFsZXJ0KFwiU3VibWlzc2lvbiB3YXMgc3VjY2Vzc2Z1bC4gVXNlIHRoZSBidXR0b25zIGF0IHRoZSBlbmQgb2YgdGhlIHBhZ2UgdG8gZG93bmxvYWQgZGF0YSBwb2ludHMuXCIpXG5cdFx0Ly8gdGhpcy5jcmVhdGVSYXdEYXRhKHJlc3VsdCk7XG5cdH1cblxuXHRleGVjdXRlU2Nyb2xsID0gKCkgPT4gdGhpcy5zY3JvbGxUb1JlZihteVJlZilcblxuXG5cdGhhbmRsZUNoYW5nZSA9IGV2ZW50ID0+IHtcblx0XHRjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG5cdFx0Y29uc3QgbmFtZSA9IHRhcmdldC5uYW1lO1xuXHRcdGNvbnN0IHZhbHVlID0gdGFyZ2V0LnR5cGUgPT09IFwiY2hlY2tib3hcIiA/IHRhcmdldC5jaGVja2VkIDogdGFyZ2V0LnZhbHVlO1xuXHRcdHRoaXMuc2V0U3RhdGUoKHByZVN0YXRlKSA9PiB7XG5cdFx0XHRjb25zdCB7IGlucHV0IH0gPSBwcmVTdGF0ZTtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGlucHV0OiB7IC4uLmlucHV0LCBbbmFtZV06IHZhbHVlIH1cblx0XHRcdH1cblxuXHRcdH0pXG5cdH1cblxuXHRoYW5kbGVWaWRGcmFtZUNoYW5nZSA9IGV2ZW50ID0+e1xuXHRcdGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC52YWx1ZSlcblx0XHR0aGlzLnNldFN0YXRlKHt2aWRlb0ZyYW1lcmF0ZTogZXZlbnQudGFyZ2V0LnZhbHVlfSlcblx0fVxuXHRoYW5kbGVWaWREdXJhdGlvbkNoYW5nZSA9IGV2ZW50ID0+e1xuXHRcdGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC52YWx1ZSlcblx0XHR0aGlzLnNldFN0YXRlKHt2aWRlb0R1cmF0aW9uOiBldmVudC50YXJnZXQudmFsdWV9KVxuXHR9XG5cdGhhbmRsZUVycm9yU3VibWl0ID0gZXZlbnQgPT4ge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0dGhpcy5zZXRTdGF0ZSgocHJlU3RhdGUpID0+IHtcblx0XHRcdGNvbnN0IHsgaW5wdXQgfSA9IHByZVN0YXRlO1xuXG5cdFx0XHRjb25zdCBhbm5vdGF0aW9ucyA9IHRoaXMuaXNKc29uU3RyaW5nKGlucHV0LmRlZmF1bHRBbm5vdGF0aW9ucykgPyBpbnB1dC5kZWZhdWx0QW5ub3RhdGlvbnMgOiBcIltdXCI7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRwYXJhbXM6IHtcblx0XHRcdFx0XHRkZWZhdWx0QW5ub3RhdGlvbnM6IEpTT04ucGFyc2UoYW5ub3RhdGlvbnMpLFxuXHRcdFx0XHRcdHVybDogaW5wdXQudXJsLFxuXHRcdFx0XHRcdGFubm90YXRpb25XaWR0aDogcGFyc2VJbnQoaW5wdXQuYW5ub3RhdGlvbldpZHRoLCAxMClcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHR9XG5cdFx0KTtcblx0fVxuXHRoYW5kbGVTdWJtaXQgPSBhc3luYyBldmVudCA9PiB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRsZXQgcmVzdWx0ID0ge307XG5cdFx0aWYgKHRoaXMuZmlsZUlucHV0LmN1cnJlbnQuZmlsZXNbMF0pIHtcblx0XHRcdGNvbnN0IHJlYWRGaWxlUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdFx0Y29uc3QgZmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cdFx0XHRcdGZpbGVSZWFkZXIub25sb2FkID0gZXZlbnQgPT4ge1xuXHRcdFx0XHRcdGlmICghdGhpcy5pc0pzb25TdHJpbmcoZXZlbnQudGFyZ2V0LnJlc3VsdCkpXG5cdFx0XHRcdFx0XHRyZWplY3QoJ1dyb25nIGpzb24gZm9ybWF0Jyk7XG5cdFx0XHRcdFx0bGV0IHJlc3VsdCA9IEpTT04ucGFyc2UoZXZlbnQudGFyZ2V0LnJlc3VsdCk7XG5cdFx0XHRcdFx0cmVzb2x2ZShyZXN1bHQpXG5cdFx0XHRcdH1cblx0XHRcdFx0ZmlsZVJlYWRlci5vbmVycm9yID0gZXZlbnQgPT4ge1xuXHRcdFx0XHRcdHJlamVjdChldmVudCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZmlsZVJlYWRlci5yZWFkQXNUZXh0KHRoaXMuZmlsZUlucHV0LmN1cnJlbnQuZmlsZXNbMF0pO1xuXHRcdFx0fSlcblx0XHRcdHJlc3VsdCA9IGF3YWl0IHJlYWRGaWxlUHJvbWlzZTtcblx0XHR9XG5cdFx0bGV0IHsgdXJsID0gJycsIHZpZGVvV2lkdGggPSAwLCBkZWZhdWx0QW5ub3RhdGlvbnMgPSBbXSB9ID0gcmVzdWx0O1xuXHRcdHRoaXMuc2V0U3RhdGUoKHByZVN0YXRlKSA9PiB7XG5cdFx0XHRjb25zdCB7IGlucHV0IH0gPSBwcmVTdGF0ZTtcblx0XHRcdGNvbnNvbGUubG9nKHByZVN0YXRlKVxuXHRcdFx0ZGVmYXVsdEFubm90YXRpb25zID0gW11cblx0XHRcdGlmIChyZXN1bHQuYW5ub3RhdGlvbnMpIHtcblx0XHRcdFx0aWYgKHJlc3VsdC5hbm5vdGF0aW9ucy5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHRkZWZhdWx0QW5ub3RhdGlvbnMgPSB0aGlzLmlzSnNvblN0cmluZyhpbnB1dC5kZWZhdWx0QW5ub3RhdGlvbnMpID8gSlNPTi5wYXJzZShpbnB1dC5kZWZhdWx0QW5ub3RhdGlvbnMpIDogXCJbXVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdGRlZmF1bHRBbm5vdGF0aW9ucyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocmVzdWx0LmFubm90YXRpb25zKSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC8vZGVmYXVsdEFubm90YXRpb25zID0gdGhpcy5pc0pzb25TdHJpbmcoaW5wdXQuZGVmYXVsdEFubm90YXRpb25zKSA/IEpTT04ucGFyc2UoaW5wdXQuZGVmYXVsdEFubm90YXRpb25zKSA6IFwiW11cIjtcblxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0cGFyYW1zOiB7XG5cdFx0XHRcdFx0ZGVmYXVsdEFubm90YXRpb25zLFxuXHRcdFx0XHRcdHVybDogdGhpcy5zdGF0ZS52aWRlb0ZpbGVVUkwgPyB0aGlzLnN0YXRlLnZpZGVvRmlsZVVSTCA6IGlucHV0LnVybCxcblx0XHRcdFx0XHR2aWRlb1dpZHRoOiAodmlkZW9XaWR0aCAhPT0gMCA/IHZpZGVvV2lkdGggOiBwYXJzZUludChpbnB1dC52aWRlb1dpZHRoLCAxMCkpLFxuXHRcdFx0XHRcdHZpZGVvRHVyYXRpb246IHRoaXMuc3RhdGUudmlkZW9EdXJhdGlvbixcblx0XHRcdFx0XHR2aWRlb0ZyYW1lcmF0ZTogdGhpcy5zdGF0ZS52aWRlb0ZyYW1lcmF0ZVxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0fVxuXHRcdCk7XG5cdFx0XG5cdH1cblxuXHRpc0pzb25TdHJpbmcgPSBzdHIgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRKU09OLnBhcnNlKHN0cik7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuLy9hc3luYyAoY29udGV4dClcblx0c2F2ZUluZm9ybWF0aW9uID0gYXN5bmMoKSA9PiB7XG5cdFx0Ly8gY29uc29sZS5sb2codGhpcy5zdGF0ZSlcblx0XHQvLyBjb25zb2xlLmxvZyhnZXRTZXJ2ZXJTaWRlUHJvcHMoKSlcblx0XHQvLyBsZXQgdmFsdWVzID0ge2RlZmF1bHRBbm5vdGF0aW9uczogXCJcIn07XG5cblx0XHQvLyBjb25zdCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvXCIpXG5cdFx0Ly8gLy8gYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuXHRcdC8vIC8vICAgLi4udGhpcy5zdGF0ZVxuXHRcdC8vIC8vIH0pLFxuXHRcdGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcblx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgbXA0OiAnaHR0cHM6Ly9jaWxkYXRhLmNyYnMudWNzZC5lZHUvbWVkaWEvdmlkZW9zLzUwNTA3LzUwNTA3X3dlYi5tcDQnIH0pXG5cdFx0fTtcblx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvbXA0dG9hdmknLCByZXF1ZXN0T3B0aW9ucyk7XG5cdFx0Ly9jb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXHRcdFxuXHR9XG5cblxuXG5cdC8vZnVuY3Rpb24gZm9yIGdldHRpbmcgaW50ZXJwb2xhdGVkIGRhdGEgc3RhcnRzXG5cdGdldEludGVycG9sYXRlZERhdGEgPSBldmVudCA9PiB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcblx0XHQvL2NvbnN0IGR1cmF0aW9uID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlLnJlc3VsdC5kdXJhdGlvbikpXG5cdFx0XG5cdFx0Y29uc3QgZHVyYXRpb24gPSB0aGlzLnN0YXRlLnZpZGVvRHVyYXRpb247XG5cdFx0Y29uc3QgdGltZXJhdGUgPSBkdXJhdGlvbiAqIHRoaXMuc3RhdGUudmlkZW9GcmFtZXJhdGU7XG5cdFx0XG5cdFx0Ly9jb2xsZWN0IGZyYW1lL3NlY29uZCBmb3IgdGhlIHZpZGVvXG5cdFx0Y29uc3QgdGltZU5vdyA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkudG9TdHJpbmcoMzYpO1xuXHRcdGxldCBpbnRlcnBvbGF0ZWRSZXN1bHQgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUucmVzdWx0KSk7XG5cdFx0bGV0IHRlbXAgPSBpbnRlcnBvbGF0ZWRSZXN1bHRcblx0XHRmb3IgKGxldCBhbm5vdGF0aW9uID0gMDsgYW5ub3RhdGlvbiA8IHRlbXAuYW5ub3RhdGlvbnMubGVuZ3RoOyBhbm5vdGF0aW9uKyspIHtcblx0XHRcdGZvciAobGV0IGluY2lkZW50ID0gMDsgaW5jaWRlbnQgPCB0ZW1wLmFubm90YXRpb25zW2Fubm90YXRpb25dLmluY2lkZW50cy5sZW5ndGg7IGluY2lkZW50KyspIHtcblx0XHRcdFx0dGVtcC5hbm5vdGF0aW9uc1thbm5vdGF0aW9uXS5pbmNpZGVudHNbaW5jaWRlbnRdLnBhcmVudE5hbWUgPSB0ZW1wLmFubm90YXRpb25zW2Fubm90YXRpb25dLnBhcmVudE5hbWVcblx0XHRcdH1cblx0XHR9XG5cdFx0Zm9yIChsZXQgYW5ub3RhdGlvbiA9IDA7IGFubm90YXRpb24gPCB0ZW1wLmFubm90YXRpb25zLmxlbmd0aDsgYW5ub3RhdGlvbisrKSB7XG5cblx0XHRcdGZvciAobGV0IGluY2lkZW50ID0gMDsgaW5jaWRlbnQgPCB0ZW1wLmFubm90YXRpb25zW2Fubm90YXRpb25dLmluY2lkZW50cy5sZW5ndGg7IGluY2lkZW50KyspIHtcblx0XHRcdFx0dGVtcC5hbm5vdGF0aW9uc1thbm5vdGF0aW9uXS5pbmNpZGVudHNbaW5jaWRlbnRdLmxhYmVsID0gdGVtcC5hbm5vdGF0aW9uc1thbm5vdGF0aW9uXS5sYWJlbFxuXHRcdFx0fVxuXHRcdH1cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGludGVycG9sYXRlZFJlc3VsdC5hbm5vdGF0aW9ucy5sZW5ndGg7IGkrKykge1xuXG5cdFx0XHRsZXQgYW5ub3RJbmNpZGVudExlbmd0aCA9IGludGVycG9sYXRlZFJlc3VsdC5hbm5vdGF0aW9uc1tpXS5pbmNpZGVudHMubGVuZ3RoXG5cdFx0XHRpZiAoYW5ub3RJbmNpZGVudExlbmd0aCA9PT0gMSkge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcIlRoaXMgaXMgbm90IHBvc3NpYmxlIDpQXCIpXG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmIChhbm5vdEluY2lkZW50TGVuZ3RoID4gMSkge1xuXG5cdFx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgYW5ub3RJbmNpZGVudExlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0aWYgKChqICE9IGFubm90SW5jaWRlbnRMZW5ndGggLSAxKSAmJiAoaW50ZXJwb2xhdGVkUmVzdWx0LmFubm90YXRpb25zW2ldLmluY2lkZW50c1tqICsgMV0uc3RhdHVzID09IFwiU2hvd1wiIHx8IGludGVycG9sYXRlZFJlc3VsdC5hbm5vdGF0aW9uc1tpXS5pbmNpZGVudHNbaiArIDFdLnN0YXR1cyA9PSBcIlwiIHx8IGludGVycG9sYXRlZFJlc3VsdC5hbm5vdGF0aW9uc1tpXS5pbmNpZGVudHNbaiArIDFdLnN0YXR1cyA9PSBcIlNwbGl0XCIpKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBzb3VyY2UgPSBpbnRlcnBvbGF0ZWRSZXN1bHQuYW5ub3RhdGlvbnNbaV0uaW5jaWRlbnRzW2pdXG5cdFx0XHRcdFx0XHRjb25zdCB0YXJnZXQgPSBpbnRlcnBvbGF0ZWRSZXN1bHQuYW5ub3RhdGlvbnNbaV0uaW5jaWRlbnRzW2ogKyAxXVxuXHRcdFx0XHRcdFx0Y29uc3QgdGRpZmYgPSAodGFyZ2V0LnRpbWUgKiB0aW1lcmF0ZSkgLSAoc291cmNlLnRpbWUgKiB0aW1lcmF0ZSlcblx0XHRcdFx0XHRcdGNvbnN0IHhTbG9wZSA9ICh0YXJnZXQueCAtIHNvdXJjZS54KSAvIHRkaWZmXG5cdFx0XHRcdFx0XHRjb25zdCB5U2xvcGUgPSAodGFyZ2V0LnkgLSBzb3VyY2UueSkgLyB0ZGlmZlxuXHRcdFx0XHRcdFx0Y29uc3Qgd1Nsb3BlID0gKHRhcmdldC53aWR0aCAtIHNvdXJjZS53aWR0aCkgLyB0ZGlmZlxuXHRcdFx0XHRcdFx0Y29uc3QgaFNsb3BlID0gKHRhcmdldC5oZWlnaHQgLSBzb3VyY2UuaGVpZ2h0KSAvIHRkaWZmXG5cdFx0XHRcdFx0XHRjb25zdCBzRnJhbWUgPSBNYXRoLnJvdW5kKHNvdXJjZS50aW1lICogdGltZXJhdGUpXG5cdFx0XHRcdFx0XHRjb25zdCB0RnJhbWUgPSBNYXRoLnJvdW5kKHRhcmdldC50aW1lICogdGltZXJhdGUpXG5cdFx0XHRcdFx0XHRmb3IgKGxldCBrID0gc0ZyYW1lICsgMTsgayA8PSB0RnJhbWU7IGsrKykge1xuXHRcdFx0XHRcdFx0XHRsZXQgb2ZmID0gayAtIE1hdGgucm91bmQoc291cmNlLnRpbWUgKiB0aW1lcmF0ZSlcblx0XHRcdFx0XHRcdFx0bGV0IGludGVycG9sWCA9IChzb3VyY2UueCArICh4U2xvcGUgKiBvZmYpKS50b0ZpeGVkKDIpXG5cdFx0XHRcdFx0XHRcdGxldCBpbnRlcnBvbFkgPSAoc291cmNlLnkgKyAoeVNsb3BlICogb2ZmKSkudG9GaXhlZCgyKVxuXHRcdFx0XHRcdFx0XHRsZXQgaW50ZXJwb2xXID0gKHNvdXJjZS53aWR0aCArICh3U2xvcGUgKiBvZmYpKS50b0ZpeGVkKDIpXG5cdFx0XHRcdFx0XHRcdGxldCBpbnRlcnBvbEggPSAoc291cmNlLmhlaWdodCArIChoU2xvcGUgKiBvZmYpKS50b0ZpeGVkKDIpXG5cdFx0XHRcdFx0XHRcdHRlbXAuYW5ub3RhdGlvbnNbaV0uaW5jaWRlbnRzLnNwbGljZShqICsgMSwgMCwgKHtcblx0XHRcdFx0XHRcdFx0XHRpZDogYCR7dGltZU5vd31gLCBuYW1lOiBgJHt0aW1lTm93fWAsIHg6IGludGVycG9sWCwgeTogaW50ZXJwb2xZLCBoZWlnaHQ6IGludGVycG9sSCwgd2lkdGg6IGludGVycG9sVywgdGltZTogaywgc3RhdHVzLCBwYXJlbnROYW1lOiBpbnRlcnBvbGF0ZWRSZXN1bHQuYW5ub3RhdGlvbnNbaV0ucGFyZW50TmFtZSwgbGFiZWw6IGludGVycG9sYXRlZFJlc3VsdC5hbm5vdGF0aW9uc1tpXS5sYWJlbCwgZ2VuZXJhdGVkOiAxXG5cdFx0XHRcdFx0XHRcdH0pKTtcblxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0fSAvL2Nsb3NlIGlmIFxuXG5cdFx0XHRcdFx0aWYgKChqID09IGFubm90SW5jaWRlbnRMZW5ndGggLSAxKSAmJiAoaW50ZXJwb2xhdGVkUmVzdWx0LmFubm90YXRpb25zW2ldLmluY2lkZW50c1tqXS5zdGF0dXMgPT0gXCJTaG93XCIgfHwgaW50ZXJwb2xhdGVkUmVzdWx0LmFubm90YXRpb25zW2ldLmluY2lkZW50c1tqXS5zdGF0dXMgPT0gXCJcIiB8fCBpbnRlcnBvbGF0ZWRSZXN1bHQuYW5ub3RhdGlvbnNbaV0uaW5jaWRlbnRzW2ogKyAxXS5zdGF0dXMgPT0gXCJTcGxpdFwiKSkge1xuXG5cdFx0XHRcdFx0XHRjb25zdCBzb3VyY2UgPSBpbnRlcnBvbGF0ZWRSZXN1bHQuYW5ub3RhdGlvbnNbaV0uaW5jaWRlbnRzW2pdXG5cdFx0XHRcdFx0XHRjb25zdCB0YXJnZXQgPSBpbnRlcnBvbGF0ZWRSZXN1bHQuYW5ub3RhdGlvbnNbaV0uaW5jaWRlbnRzW2pdXG5cdFx0XHRcdFx0XHRjb25zdCB0ZGlmZiA9IChkdXJhdGlvbiAqIHRpbWVyYXRlKSAtIChzb3VyY2UudGltZSAqIHRpbWVyYXRlKVxuXHRcdFx0XHRcdFx0Y29uc3QgeFNsb3BlID0gKHRhcmdldC54IC0gc291cmNlLngpIC8gdGRpZmZcblx0XHRcdFx0XHRcdGNvbnN0IHlTbG9wZSA9ICh0YXJnZXQueSAtIHNvdXJjZS55KSAvIHRkaWZmXG5cdFx0XHRcdFx0XHRjb25zdCB3U2xvcGUgPSAodGFyZ2V0LndpZHRoIC0gc291cmNlLndpZHRoKSAvIHRkaWZmXG5cdFx0XHRcdFx0XHRjb25zdCBoU2xvcGUgPSAodGFyZ2V0LmhlaWdodCAtIHNvdXJjZS5oZWlnaHQpIC8gdGRpZmZcblx0XHRcdFx0XHRcdGNvbnN0IHNGcmFtZSA9IE1hdGgucm91bmQoc291cmNlLnRpbWUgKiB0aW1lcmF0ZSlcblx0XHRcdFx0XHRcdGNvbnN0IHRGcmFtZSA9IE1hdGgucm91bmQodGFyZ2V0LnRpbWUgKiB0aW1lcmF0ZSlcblx0XHRcdFx0XHRcdGZvciAobGV0IGsgPSBzRnJhbWUgKyAxOyBrIDw9IHRGcmFtZTsgaysrKSB7XG5cdFx0XHRcdFx0XHRcdGxldCBvZmYgPSBrIC0gTWF0aC5yb3VuZChzb3VyY2UudGltZSAqIHRpbWVyYXRlKVxuXHRcdFx0XHRcdFx0XHRsZXQgaW50ZXJwb2xYID0gc291cmNlLnggKyAoeFNsb3BlICogb2ZmKVxuXHRcdFx0XHRcdFx0XHRsZXQgaW50ZXJwb2xZID0gc291cmNlLnkgKyAoeVNsb3BlICogb2ZmKVxuXHRcdFx0XHRcdFx0XHRsZXQgaW50ZXJwb2xXID0gc291cmNlLndpZHRoICsgKHdTbG9wZSAqIG9mZilcblx0XHRcdFx0XHRcdFx0bGV0IGludGVycG9sSCA9IHNvdXJjZS5oZWlnaHQgKyAoaFNsb3BlICogb2ZmKVxuXHRcdFx0XHRcdFx0XHR0ZW1wLmFubm90YXRpb25zW2ldLmluY2lkZW50cy5zcGxpY2UoaiArIDEsIDAsICh7XG5cdFx0XHRcdFx0XHRcdFx0aWQ6IGAke3RpbWVOb3d9YCwgbmFtZTogYCR7dGltZU5vd31gLCB4OiBpbnRlcnBvbFgsIHk6IGludGVycG9sWSwgaGVpZ2h0OiBpbnRlcnBvbEgsIHdpZHRoOiBpbnRlcnBvbFcsIHRpbWU6IGssIHN0YXR1cywgcGFyZW50TmFtZTogdGVtcC5hbm5vdGF0aW9uc1tpXS5wYXJlbnROYW1lLCBsYWJlbDogaW50ZXJwb2xhdGVkUmVzdWx0LmFubm90YXRpb25zW2ldLmxhYmVsLCBnZW5lcmF0ZWQ6MVxuXHRcdFx0XHRcdFx0XHR9KSk7XG5cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdH0gLy9jbG9zZSBzZWNvbmQgaWZcblxuXG5cblx0XHRcdFx0fSAvL2Nsb3NlIGZvciBsb29wIGZvciBqXG5cblxuXG5cdFx0XHR9IC8vY2xvc2UgZWxzZS1pZiBhbm5vdGxlbmd0aD4xXG5cblx0XHR9IC8vY2xvc2UgZm9yIGxvb3AgZm9yIGlcblxuXHRcdC8vc29ydCB0aGUgdGVtcCBvYmplY3QgYmFzZWQgb24gdGltZS9mcmFtZSB2YWx1ZVxuXHRcdGxldCBpbnRlcnBvbF9kYXRhX2FyciA9IFtdLCBzbm8gPSAxXG5cdFx0Zm9yIChsZXQgeCA9IDA7IHggPCB0ZW1wLmFubm90YXRpb25zLmxlbmd0aDsgeCsrKSB7XG5cdFx0XHRmb3IgKGxldCB5ID0gMDsgeSA8IHRlbXAuYW5ub3RhdGlvbnNbeF0uaW5jaWRlbnRzLmxlbmd0aDsgeSsrKSB7XG5cdFx0XHRcdGlmICghKHRlbXAuYW5ub3RhdGlvbnNbeF0uaW5jaWRlbnRzW3ldLnRpbWUgPiAwICYmIHRlbXAuYW5ub3RhdGlvbnNbeF0uaW5jaWRlbnRzW3ldLnRpbWUgPCAxKSlcblx0XHRcdFx0XHRpbnRlcnBvbF9kYXRhX2Fyci5wdXNoKHRlbXAuYW5ub3RhdGlvbnNbeF0uaW5jaWRlbnRzW3ldKVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZvciAobGV0IHAgPSAwOyBwIDwgaW50ZXJwb2xfZGF0YV9hcnIubGVuZ3RoOyBwKyspIHtcblx0XHRcdGZvciAobGV0IHEgPSAwLCBzdG9wID0gaW50ZXJwb2xfZGF0YV9hcnIubGVuZ3RoIC0gcCAtIDE7IHEgPCBzdG9wOyBxKyspIHtcblx0XHRcdFx0aWYgKGludGVycG9sX2RhdGFfYXJyW3FdLnRpbWUgPT0gaW50ZXJwb2xfZGF0YV9hcnJbcSArIDFdLnRpbWUpIHtcblx0XHRcdFx0XHR2YXIgc3dhcCA9IGludGVycG9sX2RhdGFfYXJyW3FdO1xuXHRcdFx0XHRcdGludGVycG9sX2RhdGFfYXJyW3FdID0gaW50ZXJwb2xfZGF0YV9hcnJbcSArIDFdO1xuXHRcdFx0XHRcdGludGVycG9sX2RhdGFfYXJyW3EgKyAxXSA9IHN3YXA7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGludGVycG9sX2RhdGFfYXJyW3FdLnRpbWUgPiBpbnRlcnBvbF9kYXRhX2FycltxICsgMV0udGltZSkge1xuXHRcdFx0XHRcdHZhciBzd2FwID0gaW50ZXJwb2xfZGF0YV9hcnJbcV07XG5cdFx0XHRcdFx0aW50ZXJwb2xfZGF0YV9hcnJbcV0gPSBpbnRlcnBvbF9kYXRhX2FycltxICsgMV07XG5cdFx0XHRcdFx0aW50ZXJwb2xfZGF0YV9hcnJbcSArIDFdID0gc3dhcDtcblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vc29ydGluZyBlbmRzXG5cblxuXHRcdC8vYWRkIFNuby9JRCB0byBlYWNoIHJvd1xuXHRcdGZvciAobGV0IGlkID0gMDsgaWQgPCBpbnRlcnBvbF9kYXRhX2Fyci5sZW5ndGg7IGlkKyspIHtcblx0XHRcdGludGVycG9sX2RhdGFfYXJyW2lkXS5zZXJpYWwgPSBpbnRlcnBvbF9kYXRhX2FycltpZF0ubGFiZWxcblx0XHRcdC8vc25vKytcblx0XHR9XG5cblx0XHRmb3IgKGxldCBwYSA9IDA7IHBhIDwgaW50ZXJwb2xfZGF0YV9hcnIubGVuZ3RoOyBwYSsrKSB7XG5cdFx0XHRmb3IgKGxldCBxYSA9IDAsIHN0b3BhID0gaW50ZXJwb2xfZGF0YV9hcnIubGVuZ3RoIC0gcGEgLSAxOyBxYSA8IHN0b3BhOyBxYSsrKSB7XG5cdFx0XHRcdC8vIGlmKGludGVycG9sX2RhdGFfYXJyW3FhXS50aW1lID09IGludGVycG9sX2RhdGFfYXJyW3FhKzFdLnRpbWUpe1xuXHRcdFx0XHQvLyBcdHZhciBzd2FwYSA9IGludGVycG9sX2RhdGFfYXJyW3FhXTtcblx0XHRcdFx0Ly8gXHRpbnRlcnBvbF9kYXRhX2FycltxYV0gPSBpbnRlcnBvbF9kYXRhX2FycltxYSsxXTtcblx0XHRcdFx0Ly8gXHRpbnRlcnBvbF9kYXRhX2FycltxYSsxXSA9IHN3YXBhO1xuXHRcdFx0XHQvLyB9XG5cdFx0XHRcdGlmIChpbnRlcnBvbF9kYXRhX2FycltxYV0uc2VyaWFsID4gaW50ZXJwb2xfZGF0YV9hcnJbcWEgKyAxXS5zZXJpYWwpIHtcblx0XHRcdFx0XHR2YXIgc3dhcGEgPSBpbnRlcnBvbF9kYXRhX2FycltxYV07XG5cdFx0XHRcdFx0aW50ZXJwb2xfZGF0YV9hcnJbcWFdID0gaW50ZXJwb2xfZGF0YV9hcnJbcWEgKyAxXTtcblx0XHRcdFx0XHRpbnRlcnBvbF9kYXRhX2FycltxYSArIDFdID0gc3dhcGE7XG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyBmb3IobGV0IGxhYmVsbm89MDsgbGFiZWxubzxpbnRlcnBvbF9kYXRhX2Fyci5sZW5ndGg7IGxhYmVsbm8rKyl7XG5cdFx0Ly8gXHR2YXIgbiA9IGludGVycG9sX2RhdGFfYXJyW2xhYmVsbm9dLmxhYmVsLnNlYXJjaChcIi1cIik7XG5cdFx0Ly8gXHRpZihuPDApe1xuXHRcdC8vIFx0XHRpbnRlcnBvbF9kYXRhX2FycltsYWJlbG5vXS5zZXJpYWwgPSBpbnRlcnBvbF9kYXRhX2FycltsYWJlbG5vXS5sYWJlbFxuXHRcdC8vIFx0fVxuXHRcdC8vIFx0ZWxzZSB7XG5cdFx0Ly8gXHRcdGludGVycG9sX2RhdGFfYXJyW2xhYmVsbm9dLnNlcmlhbCA9IGludGVycG9sX2RhdGFfYXJyW2xhYmVsbm9dLmxhYmVsW24rMV1cblx0XHQvLyBcdH1cblx0XHQvLyB9XG5cdFx0Ly9Tbm8vSUQgYWRkZWRcblxuXHRcdHRoaXMuc2V0U3RhdGUoeyBpbnRlcnBvbGF0aW9uUmVzdWx0OiBpbnRlcnBvbF9kYXRhX2FyciB9KTtcblx0XHQvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV4cG9ydC1pbnRlcnBvbFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXHRcdHRoaXMuY3JlYXRlVGFibGUoaW50ZXJwb2xfZGF0YV9hcnIpO1xuXHR9XG5cdC8vZnVuY3Rpb24gZm9yIGdldHRpbmcgaW50ZXJwb2xhdGVkIGRhdGEgZW5kc1xuXG5cdGNyZWF0ZVRhYmxlID0gZSA9PiB7XG5cdFx0bGV0IHRlbXAgPSBlO1xuXHRcdC8vIGxldCB0ZW1wID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlLmludGVycG9sYXRpb25SZXN1bHQpKTtcblx0XHR2YXIgdGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImludGVycG9sLXRhYmxlXCIpO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGVtcC5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG5cdFx0XHRyb3cuY2xhc3NMaXN0LmFkZChcImludGVycG9sdGFibGVjbGFzc3RhYmxldHJcIilcblx0XHRcdHZhciBjZWxsX3NubyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJylcblx0XHRcdGNlbGxfc25vLmNsYXNzTGlzdC5hZGQoXCJpbnRlcnBvbHRhYmxlY2xhc3N0ZHRoXCIpXG5cdFx0XHRjZWxsX3Nuby5pbm5lckhUTUwgPSB0ZW1wW2ldLnNlcmlhbFxuXHRcdFx0cm93LmFwcGVuZENoaWxkKGNlbGxfc25vKVxuXHRcdFx0dmFyIGNlbGxfeF9taW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuXHRcdFx0Y2VsbF94X21pbi5jbGFzc0xpc3QuYWRkKFwiaW50ZXJwb2x0YWJsZWNsYXNzdGR0aFwiKVxuXHRcdFx0dmFyIGNlbGxfeV9taW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuXHRcdFx0Y2VsbF95X21pbi5jbGFzc0xpc3QuYWRkKFwiaW50ZXJwb2x0YWJsZWNsYXNzdGR0aFwiKVxuXHRcdFx0dmFyIGNlbGxfd2lkdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuXHRcdFx0Y2VsbF93aWR0aC5jbGFzc0xpc3QuYWRkKFwiaW50ZXJwb2x0YWJsZWNsYXNzdGR0aFwiKVxuXHRcdFx0dmFyIGNlbGxfaGVpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcblx0XHRcdGNlbGxfaGVpZ2h0LmNsYXNzTGlzdC5hZGQoXCJpbnRlcnBvbHRhYmxlY2xhc3N0ZHRoXCIpXG5cdFx0XHR2YXIgY2VsbF9mcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG5cdFx0XHRjZWxsX2ZyYW1lLmNsYXNzTGlzdC5hZGQoXCJpbnRlcnBvbHRhYmxlY2xhc3N0ZHRoXCIpXG5cdFx0XHR2YXIgY2VsbF9sb3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcblx0XHRcdGNlbGxfbG9zdC5jbGFzc0xpc3QuYWRkKFwiaW50ZXJwb2x0YWJsZWNsYXNzdGR0aFwiKVxuXHRcdFx0dmFyIGNlbGxfb2NjbHVkZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuXHRcdFx0Y2VsbF9vY2NsdWRlZC5jbGFzc0xpc3QuYWRkKFwiaW50ZXJwb2x0YWJsZWNsYXNzdGR0aFwiKVxuXHRcdFx0dmFyIGNlbGxfZ2VuZXJhdGVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcblx0XHRcdGNlbGxfZ2VuZXJhdGVkLmNsYXNzTGlzdC5hZGQoXCJpbnRlcnBvbHRhYmxlY2xhc3N0ZHRoXCIpXG5cdFx0XHR2YXIgY2VsbF9sYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG5cdFx0XHRjZWxsX2xhYmVsLmNsYXNzTGlzdC5hZGQoXCJpbnRlcnBvbHRhYmxlY2xhc3N0ZHRoXCIpXG5cdFx0XHR2YXIgY2VsbF9wYXJlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuXHRcdFx0Y2VsbF9wYXJlbnQuY2xhc3NMaXN0LmFkZChcImludGVycG9sdGFibGVjbGFzc3RkdGhcIilcblx0XHRcdGNlbGxfeF9taW4uaW5uZXJIVE1MID0gdGVtcFtpXS54O1xuXHRcdFx0Y2VsbF95X21pbi5pbm5lckhUTUwgPSB0ZW1wW2ldLnk7XG5cdFx0XHRjZWxsX3dpZHRoLmlubmVySFRNTCA9IHRlbXBbaV0ud2lkdGg7XG5cdFx0XHRjZWxsX2hlaWdodC5pbm5lckhUTUwgPSB0ZW1wW2ldLmhlaWdodDtcblx0XHRcdGNlbGxfZnJhbWUuaW5uZXJIVE1MID0gdGVtcFtpXS50aW1lO1xuXHRcdFx0Y2VsbF9sb3N0LmlubmVySFRNTCA9IDA7XG5cdFx0XHRjZWxsX29jY2x1ZGVkLmlubmVySFRNTCA9IDA7XG5cdFx0XHRpZih0ZW1wW2ldLmdlbmVyYXRlZCA9PTEpe1xuXHRcdFx0XHRjZWxsX2dlbmVyYXRlZC5pbm5lckhUTUwgPSAxO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZXtcblx0XHRcdFx0Y2VsbF9nZW5lcmF0ZWQuaW5uZXJIVE1MPTA7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdGNlbGxfbGFiZWwuaW5uZXJIVE1MID0gdGVtcFtpXS5sYWJlbDtcblx0XHRcdGNlbGxfcGFyZW50LmlubmVySFRNTCA9IHRlbXBbaV0ucGFyZW50TmFtZTtcblx0XHRcdC8vcm93LmFwcGVuZENoaWxkKGNlbGxfaWQpO1xuXHRcdFx0cm93LmFwcGVuZENoaWxkKGNlbGxfeF9taW4pO1xuXHRcdFx0cm93LmFwcGVuZENoaWxkKGNlbGxfeV9taW4pO1xuXHRcdFx0cm93LmFwcGVuZENoaWxkKGNlbGxfd2lkdGgpO1xuXHRcdFx0cm93LmFwcGVuZENoaWxkKGNlbGxfaGVpZ2h0KTtcblx0XHRcdHJvdy5hcHBlbmRDaGlsZChjZWxsX2ZyYW1lKTtcblx0XHRcdHJvdy5hcHBlbmRDaGlsZChjZWxsX2xvc3QpO1xuXHRcdFx0cm93LmFwcGVuZENoaWxkKGNlbGxfb2NjbHVkZWQpO1xuXHRcdFx0cm93LmFwcGVuZENoaWxkKGNlbGxfZ2VuZXJhdGVkKTtcblx0XHRcdHJvdy5hcHBlbmRDaGlsZChjZWxsX2xhYmVsKTtcblx0XHRcdHJvdy5hcHBlbmRDaGlsZChjZWxsX3BhcmVudCk7XG5cdFx0XHR0YWJsZS5hcHBlbmRDaGlsZChyb3cpO1xuXHRcdH1cblx0XHR0aGlzLmRvd25sb2FkSW50ZXJwb2xUYWJsZSgpO1xuXHR9XG5cblx0ZXhwb3J0X3RhYmxlX3RvX2NzdiA9IChodG1sLCBmaWxlbmFtZSkgPT4ge1xuXHRcdHZhciBjc3YgPSBbXTtcblx0XHR2YXIgcm93cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0YWJsZSB0clwiKTtcblx0XHQvLyB2YXIgcm93cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJpbnRlcnBvbHRhYmxlY2xhc3N0YWJsZXRyXCIpO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgcm93cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIHJvdyA9IFtdLCBjb2xzID0gcm93c1tpXS5xdWVyeVNlbGVjdG9yQWxsKFwidGQsIHRoXCIpO1xuXHRcdFx0Ly8gdmFyIHJvdyA9IFtdLCBjb2xzID0gcm93c1tpXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiaW50ZXJwb2x0YWJsZWNsYXNzdGR0aFwiKTtcblx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgY29scy5sZW5ndGg7IGorKylcblx0XHRcdFx0cm93LnB1c2goY29sc1tqXS5pbm5lclRleHQpO1xuXHRcdFx0Y3N2LnB1c2gocm93LmpvaW4oXCIsXCIpKTtcblx0XHR9XG5cdFx0Ly8gRG93bmxvYWQgQ1NWXG5cdFx0dGhpcy5kb3dubG9hZF9jc3YoY3N2LmpvaW4oXCJcXG5cIiksIGZpbGVuYW1lKTtcblx0fVxuXG5cdFxuXG5cdGRvd25sb2FkX2NzdiA9IChjc3YsIGZpbGVuYW1lKSA9PiB7XG5cdFx0dmFyIGNzdkZpbGU7XG5cdFx0dmFyIGRvd25sb2FkTGluaztcblx0XHQvLyBDU1YgRklMRVxuXHRcdGNzdkZpbGUgPSBuZXcgQmxvYihbY3N2XSwgeyB0eXBlOiBcInRleHQvY3N2XCIgfSk7XG5cdFx0Ly8gRG93bmxvYWQgbGlua1xuXHRcdGRvd25sb2FkTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXHRcdC8vIEZpbGUgbmFtZVxuXHRcdGRvd25sb2FkTGluay5kb3dubG9hZCA9IGZpbGVuYW1lO1xuXHRcdC8vIFdlIGhhdmUgdG8gY3JlYXRlIGEgbGluayB0byB0aGUgZmlsZVxuXHRcdGRvd25sb2FkTGluay5ocmVmID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoY3N2RmlsZSk7XG5cdFx0Ly8gTWFrZSBzdXJlIHRoYXQgdGhlIGxpbmsgaXMgbm90IGRpc3BsYXllZFxuXHRcdGRvd25sb2FkTGluay5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0Ly8gQWRkIHRoZSBsaW5rIHRvIHlvdXIgRE9NXG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkb3dubG9hZExpbmspO1xuXHRcdC8vIExhbnphbW9zXG5cdFx0ZG93bmxvYWRMaW5rLmNsaWNrKCk7XG5cdH1cblxuXHRkb3dubG9hZEludGVycG9sVGFibGUgPSAoKSA9PiB7XG5cdFx0dmFyIGh0bWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImludGVycG9sLXRhYmxlXCIpLm91dGVySFRNTDtcblx0XHR0aGlzLmV4cG9ydF90YWJsZV90b19jc3YoaHRtbCwgXCJ0YWJsZS5jc3ZcIik7XG5cdH1cblx0XG5cblx0aGFuZGxlVmlkZW9Mb2FkID0gKGUpID0+IHtcblx0XHRsZXQgZmlsZXMgPSBlLnRhcmdldC5maWxlcztcblx0XHRpZiAoZmlsZXMubGVuZ3RoID09PSAxKSB7XG5cdFx0XHRsZXQgZmlsZSA9IGZpbGVzWzBdO1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdHZpZGVvRmlsZVVSTDogVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKSxcblx0XHRcdFx0dmlkZW9GaWxlT2JqZWN0OiBmaWxlXG5cdFx0XHR9KTtcblx0XHR9XHRcblx0fVxuXG5cdFxuXG5cbiBkb3dubG9hZCA9IChjb250ZW50LCBmaWxlTmFtZSwgY29udGVudFR5cGUpID0+e1xuXHRjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5cdGNvbnN0IGZpbGUgPSBuZXcgQmxvYihbY29udGVudF0sIHsgdHlwZTogY29udGVudFR5cGUgfSk7XG5cdGEuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSk7XG5cdGEuZG93bmxvYWQgPSBmaWxlTmFtZTtcblx0YS5jbGljaygpO1xuICAgfVxuICAgXG4gICAgb25Eb3dubG9hZD0gKCkgPT57XG5cdFx0bGV0IHRlbXAgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUucmVzdWx0KSlcblx0XHRmb3IobGV0IG49MDsgbjx0ZW1wLmFubm90YXRpb25zLmxlbmd0aDsgbisrKXtcblx0XHRcdGRlbGV0ZSB0ZW1wLmFubm90YXRpb25zW25dLm5hbWVcblx0XHR9XG5cdFx0Zm9yKGxldCBhPTA7IGE8dGVtcC5hbm5vdGF0aW9ucy5sZW5ndGg7IGErKyl7XG5cdFx0XHRmb3IobGV0IGI9MDsgYjx0ZW1wLmFubm90YXRpb25zW2FdLmluY2lkZW50cy5sZW5ndGg7IGIrKyl7XG5cdFx0XHRcdGRlbGV0ZSB0ZW1wLmFubm90YXRpb25zW2FdLmluY2lkZW50c1tiXS5uYW1lO1xuXHRcdFx0XHRkZWxldGUgdGVtcC5hbm5vdGF0aW9uc1thXS5pbmNpZGVudHNbYl0ubGFiZWw7XG5cdFx0XHR9XG5cdFx0fVxuXHR0aGlzLmRvd25sb2FkKEpTT04uc3RyaW5naWZ5KHRlbXApLCBcInlvdXJmaWxlLmpzb25cIiwgXCJ0ZXh0L3BsYWluXCIpO1xuICAgfVxuXG5cdHJlbmRlcigpIHtcblxuXHRcdGNvbnN0IHsgcmVzdWx0LCBpbnB1dCwgcGFyYW1zIH0gPSB0aGlzLnN0YXRlXG5cdFx0bGV0IGRhdGFTdHIgPSBcImRhdGE6dGV4dC9qc29uO2NoYXJzZXQ9dXRmLTgsXCIgKyBlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XG5cdFx0cmV0dXJuIChcblx0XHRcdDw+XG5cdFx0XHRcdDxDb250YWluZXIgZmx1aWQgY2xhc3NOYW1lPVwicHktM1wiPlxuXG5cdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cImRpc3BsYXktNCAgdGV4dC1jZW50ZXJcIj5Dcm93ZE1PVDogQSBWaWRlbyBBbm5vdGF0aW9uIFRvb2w8L2gxPlxuXHRcdFx0XHRcdDxSb3cgY2xhc3NOYW1lPVwibXktMyBjb2wteHMtMTIgY29sLWxnLTEwIG9mZnNldC1sZy0xXCI+XG5cdFx0XHRcdFx0XHQ8Q29sPlxuXHRcdFx0XHRcdFx0XHQ8SW5zdHJ1Y3Rpb25zIC8+XG5cdFx0XHRcdFx0XHQ8L0NvbD5cblx0XHRcdFx0XHQ8L1Jvdz5cblx0XHRcdFx0XHQ8Rm9ybSBjbGFzc05hbWU9XCJtYi0yIGNvbC14cy0xMiBjb2wtbGctMTAgb2Zmc2V0LWxnLTFcIiBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuXHRcdFx0XHRcdFx0PEZvcm1Hcm91cD5cblx0XHRcdFx0XHRcdFx0PExhYmVsIGZvcj1cIlVSTFwiPjxiPkVudGVyIHRoZSB2aWRlbyBVUkw6PC9iPjwvTGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxJbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ1cmxcIiBwbGFjZWhvbGRlcj1cImh0dHA6Ly8uLi5cIiByZWY9e3RoaXMudmlkZW9GaWxlSW5wdXR9IHZhbHVlPXtpbnB1dC51cmx9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gLz5cblx0XHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0PGgzPk9SPC9oMz5cblx0XHRcdFx0XHRcdDxGb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDxMYWJlbCBmb3I9XCJleGFtcGxlRmlsZVwiIGNsYXNzTmFtZT1cInByLTJcIj48Yj5VcGxvYWQgVmlkZW88L2I+PC9MYWJlbD48YnI+PC9icj5cblx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJmaWxlXCIgbmFtZT1cInZpZGVvZmlsZVwiIGlkPVwidmlkZW9GaWxlXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVmlkZW9Mb2FkfSAvPlxuXHRcdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHQ8Rm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0XHQ8TGFiZWwgZm9yPVwiVVJMXCI+PGI+RHVyYXRpb24gb2YgdGhlIFZpZGVvIChpbiBzZWNvbmRzKTo8L2I+PC9MYWJlbD5cblx0XHRcdFx0XHRcdFx0PElucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInZpZGVvRHVyYXRpb25cIiBwbGFjZWhvbGRlcj1cIjUuMDBcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVWaWREdXJhdGlvbkNoYW5nZX0vPlxuXHRcdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHQ8Rm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0XHQ8TGFiZWwgZm9yPVwiVVJMXCI+PGI+RnJhbWVyYXRlIG9mIHRoZSBWaWRlbzo8L2I+PC9MYWJlbD5cblx0XHRcdFx0XHRcdFx0PElucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInZpZGVvRnJhbWVyYXRlXCIgcGxhY2Vob2xkZXI9XCI2MFwiICB2YWx1ZT17dGhpcy5zdGF0ZS52aWRlb0ZyYW1lcmF0ZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlVmlkRnJhbWVDaGFuZ2V9IC8+XG5cdFx0XHRcdFx0XHQ8L0Zvcm1Hcm91cD5cblx0XHRcdFx0XHRcdDxGb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDxMYWJlbCBmb3I9XCJBbm5vdGF0aW9uIFdpZHRoXCI+PGI+VmlkZW8gV2lkdGg8L2I+PC9MYWJlbD5cblx0XHRcdFx0XHRcdFx0PElucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInZpZGVvV2lkdGhcIiBwbGFjZWhvbGRlcj1cIm51bWJlclwiIHZhbHVlPXtpbnB1dC52aWRlb1dpZHRofSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9Lz5cblx0XHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0PEZvcm1Hcm91cD5cblx0XHRcdFx0XHRcdFx0PExhYmVsIGZvcj1cImV4YW1wbGVGaWxlXCIgY2xhc3NOYW1lPVwicHItMlwiPjxiPlVwbG9hZCBQcmV2aW91cyBBbm5vdGF0aW9uczwvYj48L0xhYmVsPjxicj48L2JyPlxuXHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImZpbGVcIiBuYW1lPVwiZmlsZVwiIGlkPVwiZXhhbXBsZUZpbGVcIiByZWY9e3RoaXMuZmlsZUlucHV0fSAvPlxuXHRcdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHQ8Um93IGNsYXNzTmFtZT1cIm15LTMgY29sLXhzLTEyIGNvbC1sZy0xMCBvZmZzZXQtbGctNlwiPlxuXHRcdFx0XHRcdFx0XHQ8Q29sPlxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b24+U3VibWl0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdDwvQ29sPlxuXHRcdFx0XHRcdFx0PC9Sb3c+XG5cdFx0XHRcdFx0PC9Gb3JtPlxuXG5cdFx0XHRcdFx0PFJvdyBjbGFzc05hbWU9XCJweS0zXCIgc3R5bGU9e3sgYmFja2dyb3VuZDogXCJyZ2IoMjQ2LCAyNDYsIDI0NilcIiB9fT5cblxuXHRcdFx0XHRcdFx0PENvbD5cblx0XHRcdFx0XHRcdFx0PFR3b0RpbWVuc2lvbmFsVmlkZW9cblx0XHRcdFx0XHRcdFx0XHRrZXk9e1xuXHRcdFx0XHRcdFx0XHRcdFx0YCR7SlNPTi5zdHJpbmdpZnkocGFyYW1zLnVybCl9XG5cdFx0XHRcdFx0XHRcdFx0ICR7SlNPTi5zdHJpbmdpZnkocGFyYW1zLmRlZmF1bHRBbm5vdGF0aW9ucyl9XG5cdFx0XHRcdFx0XHRcdFx0ICR7SlNPTi5zdHJpbmdpZnkocGFyYW1zLnZpZGVvV2lkdGgpfVxuXHRcdFx0XHRcdFx0XHRcdCAke0pTT04uc3RyaW5naWZ5KHBhcmFtcy5wcmV2aWV3SGVhZGVyKX1cblx0XHRcdFx0XHRcdFx0XHQgJHtKU09OLnN0cmluZ2lmeShwYXJhbXMucHJldmlld05vdGljZUxpc3QpfWBcblx0XHRcdFx0XHRcdFx0XHRcdC8vdGhlIGxhc3QgdGhyZWUgdG8gYmUgcmVwbGFjZWQgYnkgdGhlIHR3byBiZWxvdyBhbmQgY2hhbmdlIGRlZmF1bHRBbm5vdGF0aW9ucyB0byBhbm5vdGF0aW9uc1xuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gICR7SlNPTi5zdHJpbmdpZnkocGFyYW1zLmFubm90YXRpb25XaWR0aCl9XG5cdFx0XHRcdFx0XHRcdFx0XHQvLyAgJHtKU09OLnN0cmluZ2lmeShwYXJhbXMucHJldmlld05vdGljZXMpfWBcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0b25TdWJtaXQ9e3RoaXMuaGFuZGxlUmVzdWx0U3VibWl0fVxuXHRcdFx0XHRcdFx0XHRcdHVybD17cGFyYW1zLnVybH1cblx0XHRcdFx0XHRcdFx0XHQvL21hZGUgY2hhbmdlcyBoZXJlIGFubm90YXRpb25zIChvbiBib3RoIHNpZGVzKSBjaGFuZ2VkIHRvIGRlZmF1bHRBbm5vdGF0aW9uXG5cdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdEFubm90YXRpb25zPXtwYXJhbXMuZGVmYXVsdEFubm90YXRpb25zfVxuXHRcdFx0XHRcdFx0XHRcdHZpZGVvV2lkdGg9e3BhcmFtcy52aWRlb1dpZHRofVxuXHRcdFx0XHRcdFx0XHRcdHByZXZpZXdIZWFkZXI9e3BhcmFtcy5wcmV2aWV3SGVhZGVyfVxuXHRcdFx0XHRcdFx0XHRcdHByZXZpZXdOb3RpY2VMaXN0PXtwYXJhbXMucHJldmlld05vdGljZUxpc3R9XG5cdFx0XHRcdFx0XHRcdFx0aGFzUmV2aWV3XG5cdFx0XHRcdFx0XHRcdFx0aXNFbXB0eUNoZWNrRW5hYmxlXG5cdFx0XHRcdFx0XHRcdFx0aXNTcGxpdEVuYWJsZVxuXHRcdFx0XHRcdFx0XHRcdGlzU2hvd0hpZGVFbmFibGVcblx0XHRcdFx0XHRcdFx0XHRudW1Bbm5vdGF0aW9uc1RvQmVBZGRlZD17MjB9XG5cdFx0XHRcdFx0XHRcdFx0ZW1wdHlDaGVja1N1Ym1pc3Npb25XYXJuaW5nVGV4dD17cGFyYW1zLmVtcHR5Q2hlY2tTdWJtaXNzaW9uV2FybmluZ1RleHR9XG5cdFx0XHRcdFx0XHRcdFx0ZW1wdHlDaGVja0Fubm90YXRpb25JdGVtV2FybmluZ1RleHQ9e3BhcmFtcy5lbXB0eUNoZWNrQW5ub3RhdGlvbkl0ZW1XYXJuaW5nVGV4dH1cblx0XHRcdFx0XHRcdFx0XHRlbXB0eUFubm90YXRpb25SZW1pbmRlclRleHQ9e3BhcmFtcy5lbXB0eUFubm90YXRpb25SZW1pbmRlclRleHR9XG5cdFx0XHRcdFx0XHRcdC8vcmVwbGFjZSBldmVyeXRoaW5nIGFmdGVyIGRlZmF1bHRhbm5vdGF0aW9ucyB3aXRoIHRoZSB3aGF0IGlzIGRvd24gYmVsb3dcblx0XHRcdFx0XHRcdFx0Ly8gYW5ub3RhdGlvbldpZHRoPXtwYXJhbXMuYW5ub3RhdGlvbldpZHRofVxuXHRcdFx0XHRcdFx0XHQvLyBudW1iZXJPZlBhcmVudEFubm90YXRpb25zVG9CZUFkZGVkPXsxMDAwMDB9XG5cdFx0XHRcdFx0XHRcdC8vIHByZXZpZXdOb3RpY2VzPXtwYXJhbXMucHJldmlld05vdGljZXN9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L0NvbD5cblx0XHRcdFx0XHRcdHsvKiA8Um93PjxDb2w+PE1vZGFsIG1vZGFsU2hvdz17dGhpcy5zdGF0ZS5tb2RhbFNob3d9Lz48L0NvbD48L1Jvdz4gKi99XG5cdFx0XHRcdFx0PC9Sb3c+XG57LyogKi99XG5cdFx0XHRcdFx0PFJvdyBjbGFzc05hbWU9XCJteS0zIGNvbC14cy0xMlwiIHJlZj17dGhpcy5teVJlZn0+XG5cdFx0XHRcdFx0XHQ8Q29sPlxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIHN0eWxlPXt7IGRpc3BsYXk6IHRoaXMuc3RhdGUuc2hvd01lID8gXCJibG9ja1wiIDogXCJub25lXCIsIGNvbG9yOiAnI2ZmZmZmZicgfX0gY2xhc3NOYW1lPVwiZG93bmxvYWQtYnV0dG9uc1wiIG9uQ2xpY2s9e3RoaXMub25Eb3dubG9hZH0+XG5cdFx0XHRcdFx0XHRcdFx0RG93bmxvYWQgUmF3IERhdGFcblx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0XHR7LyogPENTVkxpbmsgZGF0YT17SlNPTi5zdHJpbmdpZnkocmVzdWx0LCBudWxsLDIpfSBzdHlsZT17eyBjb2xvcjogJyNmZmZmZmYnIH19PkRvd25sb2FkIFJhdyBEYXRhPC9DU1ZMaW5rPiAqL31cblx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHQ8L0NvbD5cblx0XHRcdFx0XHRcdDxDb2w+XG5cdFx0XHRcdFx0XHRcdDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCIgY2xhc3NOYW1lPVwiZG93bmxvYWQtYnV0dG9uc1wiIHN0eWxlPXt7IGRpc3BsYXk6IHRoaXMuc3RhdGUuc2hvd01lID8gXCJibG9ja1wiIDogXCJub25lXCIgfX0gb25DbGljaz17dGhpcy5nZXRJbnRlcnBvbGF0ZWREYXRhfT5HZW5lcmF0ZSBJbnRlcnBvbGF0ZWQgRGF0YTwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9Db2w+XG5cdFx0XHRcdFx0XHR7LyogPENvbD5cblx0XHRcdFx0XHRcdFx0PEJ1dHRvbiBpZD1cImV4cG9ydC1pbnRlcnBvbFwiIGNvbG9yPSdwcmltYXJ5JyBzdHlsZT17e1xuXHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6ICdub25lJywgY29sb3I6ICcjZmZmZmZmJyxcblx0XHRcdFx0XHRcdFx0XHRib3JkZXI6IGAxcHggc29saWRgLFxuXHRcdFx0XHRcdFx0XHR9fSBvbkNsaWNrPXt0aGlzLmNyZWF0ZVRhYmxlfT5Eb3dubG9hZCBJbnRlcnBvbGF0ZWQgRGF0YTwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9Db2w+ICovfVxuXHRcdFx0XHRcdDwvUm93PlxuXHRcdFx0XHRcdFxuXG5cdFx0XHRcdFx0ey8qIGNyZWF0ZSBpbnZpc2libGUgdGFibGUgZm9yIGludGVycG9sYXRlZCBkYXRhICovfVxuXHRcdFx0XHRcdDxSb3cgY2xhc3NOYW1lPVwibXktMyBjb2wteHMtMTJcIj5cblx0XHRcdFx0XHRcdDxDb2w+XG5cdFx0XHRcdFx0XHRcdDx0YWJsZSBpZD1cImludGVycG9sLXRhYmxlXCIgc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnIH19IGNsYXNzTmFtZT1cImludGVycG9sdGFibGVjbGFzc3RhYmxldHJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8dGJvZHk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dHIgY2xhc3NOYW1lPVwiaW50ZXJwb2x0YWJsZWNsYXNzdGFibGV0clwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7LyogPHRoPklEPC90aD4gKi99XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx0aCBjbGFzc05hbWU9XCJpbnRlcnBvbHRhYmxlY2xhc3N0ZHRoXCI+VHJhY2sgSUQ8L3RoPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGggY2xhc3NOYW1lPVwiaW50ZXJwb2x0YWJsZWNsYXNzdGR0aFwiPngtbWluPC90aD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHRoIGNsYXNzTmFtZT1cImludGVycG9sdGFibGVjbGFzc3RkdGhcIj55LW1pbjwvdGg+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx0aCBjbGFzc05hbWU9XCJpbnRlcnBvbHRhYmxlY2xhc3N0ZHRoXCI+d2lkdGg8L3RoPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGggY2xhc3NOYW1lPVwiaW50ZXJwb2x0YWJsZWNsYXNzdGR0aFwiPmhlaWdodDwvdGg+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx0aCBjbGFzc05hbWU9XCJpbnRlcnBvbHRhYmxlY2xhc3N0ZHRoXCI+RnJhbWU8L3RoPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGggY2xhc3NOYW1lPVwiaW50ZXJwb2x0YWJsZWNsYXNzdGR0aFwiPkxvc3Q8L3RoPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGggY2xhc3NOYW1lPVwiaW50ZXJwb2x0YWJsZWNsYXNzdGR0aFwiPk9jY2x1ZGVkPC90aD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHRoIGNsYXNzTmFtZT1cImludGVycG9sdGFibGVjbGFzc3RkdGhcIj5HZW5lcmF0ZWQ8L3RoPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGggY2xhc3NOYW1lPVwiaW50ZXJwb2x0YWJsZWNsYXNzdGR0aFwiPkxhYmVsPC90aD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHRoIGNsYXNzTmFtZT1cImludGVycG9sdGFibGVjbGFzc3RkdGhcIj5QYXJlbnQ8L3RoPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0XHRcdFx0XHQ8L3Rib2R5PlxuXHRcdFx0XHRcdFx0XHQ8L3RhYmxlPlxuXHRcdFx0XHRcdFx0PC9Db2w+XG5cdFx0XHRcdFx0PC9Sb3c+XG5cblx0XHRcdFx0XHRcdDxSb3c+XG5cdFx0XHRcdFx0XHRcdHsvKiA8Zm9ybSByZWY9XCJ1cGxvYWRGb3JtXCIgaWQ9XCJ1cGxvYWRGb3JtXCIgbWV0aG9kPVwicG9zdFwiIGFjdGlvbj1cIi9tcDR0b2F2aVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiZmlsZVwiIG5hbWU9XCJtcDRcIiBlbmNUeXBlPVwibXVsdGlwYXJ0LWZvcm0tZGF0YVwiPjwvaW5wdXQ+XG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJzdWJtaXRcIiBuYW1lPVwiQ29udmVydFwiPkNvbnZlcnQ8L2lucHV0PlxuXHRcdFx0XHRcdFx0XHQ8L2Zvcm0+ICovfVxuXHRcdFx0XHRcdFx0PC9Sb3c+XG5cdFx0XHRcdFx0ey8qIDxSb3cgY2xhc3NOYW1lPVwibXktMyBjb2wteHMtMTIgY29sLWxnLTEwIG9mZnNldC1sZy0xXCI+XG5cdFx0XHRcdFx0XHQ8Q29sPlxuXHRcdFx0XHRcdFx0XHQ8Q2FyZD48Q2FyZEJvZHk+PGEgaHJlZj17ZGF0YVN0cn0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLWxnXCIgZG93bmxvYWQ9e2Ake3BhcmFtcy51cmx9Lmpzb25gfT4gRG93bmxvYWQgdGhlIEFubm90YXRpb25zPC9hPjwvQ2FyZEJvZHk+PC9DYXJkPlxuXG5cblx0XHRcdFx0XHRcdDwvQ29sPiAgPC9Sb3c+ICovfVxuXHRcdFx0XHRcdDxSb3c+XG5cdFx0XHRcdFx0XHQ8Q29sPlxuXHRcdFx0XHRcdDx0YWJsZSBpZD1cInJhdy10YWJsZVwiIHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fSBjbGFzc05hbWU9XCJyYXd0YWJsZWNsYXNzXCI+XG5cdFx0XHRcdFx0XHRcdFx0PHRib2R5PlxuXHRcdFx0XHRcdFx0XHRcdFx0PHRyIGNsYXNzTmFtZT1cInJhd3RhYmxlY2xhc3NcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0ey8qIDx0aD5JRDwvdGg+ICovfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGggY2xhc3NOYW1lPVwicmF3dGFibGVjbGFzc3RkdGhcIj4gPC90aD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3RyPlxuXHRcdFx0XHRcdFx0XHRcdDwvdGJvZHk+XG5cdFx0XHRcdFx0XHRcdDwvdGFibGU+XG5cdFx0XHRcdFx0XHRcdDwvQ29sPlxuXHRcdFx0XHRcdFx0XHQ8L1Jvdz5cblx0XHRcdFx0XHRcblxuXG5cdFx0XHRcdDwvQ29udGFpbmVyPlxuXG5cdFx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdCBcdC5kb3dubG9hZC1idXR0b25ze1xuXHRcdFx0XHRcdCBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQsXG5cdFx0XHRcdFx0IGNvbG9yOiAjZmZmZmZmXG5cdFx0XHRcdCB9XG5cdFx0XHQgYH08L3N0eWxlPlxuXHRcdFx0PC8+XG5cdFx0KTtcblxuXG5cblx0fVxufVxuZXhwb3J0IGRlZmF1bHQgRGVtbztcbiJdfQ== */\n/*@ sourceURL=/Applications/CrowdMOT/crowdmot-nextjs/components/videoAnnotationDemo/VideoAnnotationDemo.js */"));
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