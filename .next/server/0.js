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
      style: {
        backgroundColor: "#ffffff",
        fontFamily: "Arvo, seri"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 649,
        columnNumber: 5
      }
    }, __jsx("h1", {
      style: {
        color: "#000000"
      },
      className: "jsx-4220423162" + " " + "display-4  text-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 651,
        columnNumber: 6
      }
    }, "CrowdMOT: A Video Annotation Tool"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
      className: "my-3 col-xs-12 col-lg-10 offset-lg-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 652,
        columnNumber: 6
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 653,
        columnNumber: 7
      }
    }, __jsx(_videoInstruction_VideoInstruction__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 654,
        columnNumber: 8
      }
    }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], {
      className: "mb-2 col-xs-8 col-lg-6 offset-lg-1",
      style: {
        borderColor: "#6bc3b9",
        border: "1px solid #6bc3b9",
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: "#ffffff"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 657,
        columnNumber: 6
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardBody"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 658,
        columnNumber: 7
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Form"], {
      className: "mb-2 col-xs-12 col-lg-10 offset-lg-1",
      onSubmit: this.handleSubmit,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 659,
        columnNumber: 8
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 660,
        columnNumber: 9
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Label"], {
      for: "URL",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 661,
        columnNumber: 10
      }
    }, __jsx("b", {
      className: "jsx-4220423162",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 661,
        columnNumber: 27
      }
    }, "Enter the video URL:")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Input"], {
      type: "text",
      name: "url",
      placeholder: "http://...",
      style: {
        borderColor: "#6bc3b9",
        border: "1px solid #6bc3b9"
      },
      ref: this.videoFileInput,
      value: input.url,
      onChange: this.handleChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 662,
        columnNumber: 10
      }
    })), __jsx("h5", {
      className: "jsx-4220423162",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 664,
        columnNumber: 9
      }
    }, "OR"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 665,
        columnNumber: 9
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Label"], {
      for: "exampleFile",
      className: "pr-2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 666,
        columnNumber: 10
      }
    }, __jsx("b", {
      className: "jsx-4220423162",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 666,
        columnNumber: 52
      }
    }, "Upload Video")), __jsx("br", {
      className: "jsx-4220423162",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 666,
        columnNumber: 79
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
        lineNumber: 667,
        columnNumber: 10
      }
    })), __jsx("hr", {
      style: {
        border: "0.7px solid #6bc3b9"
      },
      className: "jsx-4220423162",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 669,
        columnNumber: 9
      }
    }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 670,
        columnNumber: 9
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Label"], {
      for: "URL",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 671,
        columnNumber: 10
      }
    }, __jsx("b", {
      className: "jsx-4220423162",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 671,
        columnNumber: 27
      }
    }, "Duration of the Video (in seconds):")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Input"], {
      type: "text",
      name: "videoDuration",
      style: {
        borderColor: "#6bc3b9",
        border: "1px solid #6bc3b9"
      },
      placeholder: "5.00",
      onChange: this.handleVidDurationChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 672,
        columnNumber: 10
      }
    })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 674,
        columnNumber: 9
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Label"], {
      for: "URL",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 675,
        columnNumber: 10
      }
    }, __jsx("b", {
      className: "jsx-4220423162",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 675,
        columnNumber: 27
      }
    }, "Framerate of the Video:")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Input"], {
      type: "text",
      name: "videoFramerate",
      style: {
        borderColor: "#6bc3b9",
        border: "1px solid #6bc3b9"
      },
      placeholder: "60",
      value: this.state.videoFramerate,
      onChange: this.handleVidFrameChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 676,
        columnNumber: 10
      }
    })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 678,
        columnNumber: 9
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Label"], {
      for: "Annotation Width",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 679,
        columnNumber: 10
      }
    }, __jsx("b", {
      className: "jsx-4220423162",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 679,
        columnNumber: 40
      }
    }, "Video Width")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Input"], {
      type: "text",
      name: "videoWidth",
      style: {
        borderColor: "#6bc3b9",
        border: "1px solid #6bc3b9"
      },
      placeholder: "number",
      value: input.videoWidth,
      onChange: this.handleChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 680,
        columnNumber: 10
      }
    })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 682,
        columnNumber: 9
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Label"], {
      for: "exampleFile",
      className: "pr-2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 683,
        columnNumber: 10
      }
    }, __jsx("b", {
      className: "jsx-4220423162",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 683,
        columnNumber: 52
      }
    }, "Upload Previous Annotations")), __jsx("br", {
      className: "jsx-4220423162",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 683,
        columnNumber: 94
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
        lineNumber: 684,
        columnNumber: 10
      }
    })), __jsx("br", {
      className: "jsx-4220423162",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 686,
        columnNumber: 9
      }
    }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
      style: {
        paddingLeft: 10
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 687,
        columnNumber: 9
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
      style: {
        padding: 0
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 688,
        columnNumber: 10
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      color: "primary",
      style: {
        color: '#ffffff',
        width: 200
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 689,
        columnNumber: 11
      }
    }, "Submit"))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], {
      style: {
        position: "absolute",
        left: 650,
        top: 120,
        height: 400,
        maxWidth: 500,
        padding: 20,
        backgroundColor: '#ffd1dc',
        backgroundImage: "linear-gradient(-45deg, #ee7752,  #e73c7e, #23a6d5,#23d5ab)",
        backgroundSize: "400% 400%",
        animation: "change 10s ease-in-out infinite",
        opacity: 0.8
      },
      className: "mb-2 col-xs-4 col-lg-2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 694,
        columnNumber: 7
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardBody"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 695,
        columnNumber: 8
      }
    }, __jsx("h4", {
      style: {
        color: "#ffffff",
        textAlign: "center",
        marginBottom: 15,
        letterSpacing: 2,
        lineHeight: "1.5rem",
        fontSize: 28,
        fontWeight: "bold"
      },
      className: "jsx-4220423162",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 696,
        columnNumber: 9
      }
    }, "CrowdMOT"), __jsx("p", {
      style: {
        padding: 10,
        color: "#ffffff",
        margin: 0,
        fontFamily: 'Arvo, serif',
        letterSpacing: "0.05rem",
        lineHeight: "1.5rem"
      },
      className: "jsx-4220423162",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 697,
        columnNumber: 9
      }
    }, "We introduce a new video annotation platform for MOT, which we call ", __jsx("b", {
      className: "jsx-4220423162",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 697,
        columnNumber: 204
      }
    }, "CrowdMOT"), ". It is designed to support lineage tracking as well as to not require expert workers for video annotation.")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
      className: "py-3 mb-2 col-xs-12 col-lg-10 offset-lg-1",
      style: {
        background: "rgb(246, 246, 246)",
        marginTop: 40
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 742,
        columnNumber: 6
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 744,
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
        lineNumber: 745,
        columnNumber: 8
      }
    }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], {
      className: "mb-2 col-xs-12 col-lg-10 offset-lg-1",
      style: {
        display: this.state.showMe ? "block" : "none",
        borderColor: "#6bc3b9",
        border: "0px solid #6bc3b9",
        backgroundColor: "#fffff0",
        paddingTop: 10,
        paddingBottom: 10,
        textAlign: "center"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 780,
        columnNumber: 6
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardBody"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 781,
        columnNumber: 7
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
      className: "my-3 col-xs-12",
      ref: this.myRef,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 782,
        columnNumber: 8
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
      className: "col-lg-6",
      style: {
        alignItems: "right",
        display: "flex"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 783,
        columnNumber: 9
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      color: "primary",
      style: {
        display: this.state.showMe ? "block" : "none",
        display: "block",
        color: '#ffffff',
        width: 250,
        position: "absolute",
        left: 200
      },
      className: "download-buttons pull-right",
      onClick: this.onDownload,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 784,
        columnNumber: 10
      }
    }, "Download Raw Data")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
      className: "col-lg-6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 788,
        columnNumber: 9
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      color: "primary",
      className: "download-buttons",
      style: {
        display: this.state.showMe ? "block" : "none",
        width: 250,
        display: "block",
        position: "absolute",
        left: 100
      },
      onClick: this.getInterpolatedData,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 789,
        columnNumber: 10
      }
    }, "Generate Interpolated Data"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
      className: "my-3 col-xs-12",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 795,
        columnNumber: 8
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 796,
        columnNumber: 9
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
        lineNumber: 797,
        columnNumber: 10
      }
    }, __jsx("tbody", {
      className: "jsx-4220423162",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 798,
        columnNumber: 11
      }
    }, __jsx("tr", {
      className: "jsx-4220423162" + " " + "interpoltableclasstabletr",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 799,
        columnNumber: 12
      }
    }, __jsx("th", {
      className: "jsx-4220423162" + " " + "interpoltableclasstdth",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 800,
        columnNumber: 13
      }
    }, "Track ID"), __jsx("th", {
      className: "jsx-4220423162" + " " + "interpoltableclasstdth",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 801,
        columnNumber: 13
      }
    }, "x-min"), __jsx("th", {
      className: "jsx-4220423162" + " " + "interpoltableclasstdth",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 802,
        columnNumber: 13
      }
    }, "y-min"), __jsx("th", {
      className: "jsx-4220423162" + " " + "interpoltableclasstdth",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 803,
        columnNumber: 13
      }
    }, "width"), __jsx("th", {
      className: "jsx-4220423162" + " " + "interpoltableclasstdth",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 804,
        columnNumber: 13
      }
    }, "height"), __jsx("th", {
      className: "jsx-4220423162" + " " + "interpoltableclasstdth",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 805,
        columnNumber: 13
      }
    }, "Frame"), __jsx("th", {
      className: "jsx-4220423162" + " " + "interpoltableclasstdth",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 806,
        columnNumber: 13
      }
    }, "Lost"), __jsx("th", {
      className: "jsx-4220423162" + " " + "interpoltableclasstdth",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 807,
        columnNumber: 13
      }
    }, "Occluded"), __jsx("th", {
      className: "jsx-4220423162" + " " + "interpoltableclasstdth",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 808,
        columnNumber: 13
      }
    }, "Generated"), __jsx("th", {
      className: "jsx-4220423162" + " " + "interpoltableclasstdth",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 809,
        columnNumber: 13
      }
    }, "Label"), __jsx("th", {
      className: "jsx-4220423162" + " " + "interpoltableclasstdth",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 810,
        columnNumber: 13
      }
    }, "Parent")))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 817,
        columnNumber: 8
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 818,
        columnNumber: 9
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
        lineNumber: 819,
        columnNumber: 10
      }
    }, __jsx("tbody", {
      className: "jsx-4220423162",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 820,
        columnNumber: 11
      }
    }, __jsx("tr", {
      className: "jsx-4220423162" + " " + "rawtableclass",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 821,
        columnNumber: 12
      }
    }, __jsx("th", {
      className: "jsx-4220423162" + " " + "rawtableclasstdth",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 823,
        columnNumber: 13
      }
    }, " "))))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "4220423162",
      __self: this
    }, ".download-buttons.jsx-4220423162{display:none !important, color:#ffffff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvQ3Jvd2RNT1QvY3Jvd2Rtb3QtbmV4dGpzL2NvbXBvbmVudHMvdmlkZW9Bbm5vdGF0aW9uRGVtby9WaWRlb0Fubm90YXRpb25EZW1vLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXk0QmdCLEFBS0ssdUNBQUMiLCJmaWxlIjoiL0FwcGxpY2F0aW9ucy9Dcm93ZE1PVC9jcm93ZG1vdC1uZXh0anMvY29tcG9uZW50cy92aWRlb0Fubm90YXRpb25EZW1vL1ZpZGVvQW5ub3RhdGlvbkRlbW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVHdvRGltZW5zaW9uYWxWaWRlbyB9IGZyb20gXCJyZWFjdC1hbm5vdGF0aW9uLXRvb2xcIlxuaW1wb3J0IEluc3RydWN0aW9ucyBmcm9tIFwiLi4vdmlkZW9JbnN0cnVjdGlvbi9WaWRlb0luc3RydWN0aW9uXCJcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wsIENhcmQsIENhcmRCb2R5LCBDYXJkVGl0bGUsIENhcmRUZXh0IH0gZnJvbSAncmVhY3RzdHJhcCc7XG5pbXBvcnQgeyBCdXR0b24sIEZvcm0sIEZvcm1Hcm91cCwgTGFiZWwsIElucHV0IH0gZnJvbSAncmVhY3RzdHJhcCc7XG5pbXBvcnQgeyBDU1ZMaW5rLCBDU1ZEb3dubG9hZCB9IGZyb20gXCJyZWFjdC1jc3ZcIjtcbmltcG9ydCBNb2RhbCBmcm9tICcuL01vZGFsJztcblxuY2xhc3MgRGVtbyBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLm15UmVmID0gUmVhY3QuY3JlYXRlUmVmKClcblx0XHRjb25zdCBhYmMgPSA5XG5cdFx0Ly9jb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJyk7XG5cdFx0Ly8gY29uc3QgYW5ub3RhdGlvbnMgPSBbXTsvL1sgeyBcImlkXCI6IFwianQxOTJ3eWRcIiwgXCJuYW1lXCI6IFwianQxOTJ3eWRcIiwgXCJsYWJlbFwiOiBcIjEtMlwiLCBcImNvbG9yXCI6IFwicmdiYSgyNTUsMCwwLDEpXCIsIFwiaW5jaWRlbnRzXCI6IFsgeyBcImlkXCI6IFwianQxOTJ3eWJcIiwgXCJuYW1lXCI6IFwianQxOTJ3eWJcIiwgXCJ4XCI6IDI5NS4wMDQwMjMzNTU4Njg3NSwgXCJ5XCI6IDE5My4zNjg5NjQ5NjYxOTY4LCBcIndpZHRoXCI6IDQwLjc1NDAyMzM1NTg2ODc4LCBcImhlaWdodFwiOiA0MS42MzEwMzUwMzM4MDMxNywgXCJ0aW1lXCI6IDAuMDMwODIyNjQ5NTcyNjQ5NiwgXCJzdGF0dXNcIjogXCJTaG93XCIgfSwgeyBcImlkXCI6IFwianQxOTMwbmJcIiwgXCJuYW1lXCI6IFwianQxOTMwbmJcIiwgXCJ4XCI6IDMwNC4wMDQwMjMzNTU4Njg3NSwgXCJ5XCI6IDIwMi4zNjg5NjQ5NjYxOTY4LCBcIndpZHRoXCI6IDU4Ljc1NDAyMzM1NTg2ODc1LCBcImhlaWdodFwiOiA2MC42MzEwMzUwMzM4MDMxOSwgXCJ0aW1lXCI6IDAuMDMxNzg0NzIyMjIyMjIyMjIsIFwic3RhdHVzXCI6IFwiU2hvd1wiIH0sIHsgXCJpZFwiOiBcImp0MTkzZmltXCIsIFwibmFtZVwiOiBcImp0MTkzZmltXCIsIFwieFwiOiAzMDkuMDA0MDIzMzU1ODY4NzUsIFwieVwiOiAyMTMuMzY4OTY0OTY2MTk2OCwgXCJ3aWR0aFwiOiA1OC43NTQwMjMzNTU4Njg3NSwgXCJoZWlnaHRcIjogNjAuNjMxMDM1MDMzODAzMTksIFwidGltZVwiOiAwLjA2Mzg4NjExMTExMTExMTEyLCBcInN0YXR1c1wiOiBcIlNob3dcIiB9LCB7IFwiaWRcIjogXCJqdDE5M2lqb1wiLCBcIm5hbWVcIjogXCJqdDE5M2lqb1wiLCBcInhcIjogMzIwLjAwNDAyMzM1NTg2ODc1LCBcInlcIjogMjIwLjM2ODk2NDk2NjE5NjgsIFwid2lkdGhcIjogNTguNzU0MDIzMzU1ODY4NzUsIFwiaGVpZ2h0XCI6IDc0LjYzMTAzNTAzMzgwMzE5LCBcInRpbWVcIjogMC4wODY3NzI0MjA2MzQ5MjA2MywgXCJzdGF0dXNcIjogXCJTaG93XCIgfSwgeyBcImlkXCI6IFwianQxOTQ4NG1cIiwgXCJuYW1lXCI6IFwianQxOTQ4NG1cIiwgXCJ4XCI6IDMyMC40ODk5MjE1NjU4NzYzMywgXCJ5XCI6IDIxOC40MjUzNzIxMjYxNjY0MiwgXCJ3aWR0aFwiOiA2MC42OTc2MTYxOTU4OTkxMTYsIFwiaGVpZ2h0XCI6IDc4LjE3MzM0MDQwMzc4MDQzLCBcInRpbWVcIjogMC4wOTY2NzE4MjUzOTY4MjU0LCBcInN0YXR1c1wiOiBcIlNob3dcIiB9LCB7IFwiaWRcIjogXCJqdDE5M280eVwiLCBcIm5hbWVcIjogXCJqdDE5M280eVwiLCBcInhcIjogMzIxLjAwNDAyMzM1NTg2ODc1LCBcInlcIjogMjE2LjM2ODk2NDk2NjE5NjgsIFwid2lkdGhcIjogNjIuNzU0MDIzMzU1ODY4NzUsIFwiaGVpZ2h0XCI6IDcxLjYzMTAzNTAzMzgwMzE5LCBcInRpbWVcIjogMC4xMDcxNDU4MzMzMzMzMzMzNCwgXCJzdGF0dXNcIjogXCJTaG93XCIgfSwgeyBcImlkXCI6IFwianQxOTRkb21cIiwgXCJuYW1lXCI6IFwianQxOTRkb21cIiwgXCJ4XCI6IDMyMS4wMDQwMjMzNTU4Njg3NSwgXCJ5XCI6IDIxOC44MDgzMDQ0NjQwMjQzLCBcIndpZHRoXCI6IDYyLjc1NDAyMzM1NTg2ODc1LCBcImhlaWdodFwiOiA2OS4xOTE2OTU1MzU5NzU3LCBcInRpbWVcIjogMC4xMTk1ODU3MTQyODU3MTQzLCBcInN0YXR1c1wiOiBcIlNob3dcIiB9LCB7IFwiaWRcIjogXCJqdDE5M3Rhd1wiLCBcIm5hbWVcIjogXCJqdDE5M3Rhd1wiLCBcInhcIjogMzIxLjAwNDAyMzM1NTg2ODc1LCBcInlcIjogMjI4LjM2ODk2NDk2NjE5NjgsIFwid2lkdGhcIjogNjIuNzU0MDIzMzU1ODY4NzUsIFwiaGVpZ2h0XCI6IDU5LjYzMTAzNTAzMzgwMzE5LCBcInRpbWVcIjogMC4xMzQ1OTAwNzkzNjUwNzkzNiwgXCJzdGF0dXNcIjogXCJTaG93XCIgfSwgeyBcImlkXCI6IFwianQxOTN6YjRcIiwgXCJuYW1lXCI6IFwianQxOTN6YjRcIiwgXCJ4XCI6IDMxOC4wMDQwMjMzNTU4Njg3NSwgXCJ5XCI6IDIyOC4zNjg5NjQ5NjYxOTY4LCBcIndpZHRoXCI6IDgxLjc1NDAyMzM1NTg2ODc1LCBcImhlaWdodFwiOiA1OS42MzEwMzUwMzM4MDMxOSwgXCJ0aW1lXCI6IDAuMTY5Mzk1MjM4MDk1MjM4MSwgXCJzdGF0dXNcIjogXCJTaG93XCIgfSwgeyBcImlkXCI6IFwianQxOTVsdHpcIiwgXCJuYW1lXCI6IFwianQxOTVsdHpcIiwgXCJ4XCI6IDMyOC4yODc0MDk4NjQxMjQ0LCBcInlcIjogMjMwLjY1MjM1MTQ3NDQ1MjUsIFwid2lkdGhcIjogNzAuODUxNjQyMzE4MTM5MDYsIFwiaGVpZ2h0XCI6IDU2LjYzMTAzNTAzMzgwMzIxNSwgXCJ0aW1lXCI6IDAuMTk4NTUyMzYyMjA0NzI0NCwgXCJzdGF0dXNcIjogXCJTaG93XCIgfSwgeyBcImlkXCI6IFwianQxOTR0cmdcIiwgXCJuYW1lXCI6IFwianQxOTR0cmdcIiwgXCJ4XCI6IDMyMi4wMDQwMjMzNTU4Njg3NSwgXCJ5XCI6IDIzMi4zNjg5NjQ5NjYxOTY4LCBcIndpZHRoXCI6IDc2LjY2OTY3ODYyOTc1OTUyLCBcImhlaWdodFwiOiA1OS42MzEwMzUwMzM4MDMxOSwgXCJ0aW1lXCI6IDAuMjIwNDcyMjIyMjIyMjIyMjQsIFwic3RhdHVzXCI6IFwiU2hvd1wiIH0sIHsgXCJpZFwiOiBcImp0MTk0bGdtXCIsIFwibmFtZVwiOiBcImp0MTk0bGdtXCIsIFwieFwiOiAzMTguMDA0MDIzMzU1ODY4NzUsIFwieVwiOiAyMjguMzY4OTY0OTY2MTk2OCwgXCJ3aWR0aFwiOiA3NS43NTQwMjMzNTU4Njg3NSwgXCJoZWlnaHRcIjogNTkuNjMxMDM1MDMzODAzMTksIFwidGltZVwiOiAwLjIyOTY3MDgzMzMzMzMzMzMyLCBcInN0YXR1c1wiOiBcIlNob3dcIiB9LCB7IFwiaWRcIjogXCJqdDE5NXA3bVwiLCBcIm5hbWVcIjogXCJqdDE5NXA3bVwiLCBcInhcIjogMzE4LjAwNDAyMzM1NTg2ODc1LCBcInlcIjogMjI4LjM2ODk2NDk2NjE5NjgsIFwid2lkdGhcIjogNjguNzU0MDIzMzU1ODY4NzUsIFwiaGVpZ2h0XCI6IDU4LjE5Njg0OTQ2Mzg1OTA1LCBcInRpbWVcIjogMC4yNTM1OTM1MDM5MzcwMDc4NiwgXCJzdGF0dXNcIjogXCJTaG93XCIgfSwgeyBcImlkXCI6IFwianQxOTUxcjlcIiwgXCJuYW1lXCI6IFwianQxOTUxcjlcIiwgXCJ4XCI6IDMxOC4wMDQwMjMzNTU4Njg3NSwgXCJ5XCI6IDIyOC4zNjg5NjQ5NjYxOTY4LCBcIndpZHRoXCI6IDc1Ljc1NDAyMzM1NTg2ODc1LCBcImhlaWdodFwiOiA1NC42MzEwMzUwMzM4MDMxOSwgXCJ0aW1lXCI6IDAuMzEzMDcyNDIwNjM0OTIwNjMsIFwic3RhdHVzXCI6IFwiU2hvd1wiIH0sIHsgXCJpZFwiOiBcImp0MTk1djlsXCIsIFwibmFtZVwiOiBcImp0MTk1djlsXCIsIFwieFwiOiAzMTguMDA0MDIzMzU1ODY4NzUsIFwieVwiOiAyMjguMzY4OTY0OTY2MTk2OCwgXCJ3aWR0aFwiOiA3NS43NTQwMjMzNTU4Njg3NSwgXCJoZWlnaHRcIjogNTQuNjMxMDM1MDMzODAzMTksIFwidGltZVwiOiAwLjM0NjIzOTM3MDA3ODc0MDE3LCBcInN0YXR1c1wiOiBcIkhpZGVcIiB9IF0sIFwiY2hpbGRyZW5cIjogW10sIFwicGFyZW50XCI6IFwianQxOTIyeHVcIiB9LCB7IFwiaWRcIjogXCJqdDE5Mnd5Y1wiLCBcIm5hbWVcIjogXCJqdDE5Mnd5Y1wiLCBcImxhYmVsXCI6IFwiMS0xXCIsIFwiY29sb3JcIjogXCJyZ2JhKDI1NSwwLDAsMSlcIiwgXCJpbmNpZGVudHNcIjogWyB7IFwiaWRcIjogXCJqdDE5Mnd5YlwiLCBcIm5hbWVcIjogXCJqdDE5Mnd5YlwiLCBcInhcIjogMjc0LjI1LCBcInlcIjogMTcxLjczNzkyOTkzMjM5MzY2LCBcIndpZHRoXCI6IDQwLjc1NDAyMzM1NTg2ODc4LCBcImhlaWdodFwiOiA0MS42MzEwMzUwMzM4MDMxNywgXCJ0aW1lXCI6IDAuMDMwODIyNjQ5NTcyNjQ5NiwgXCJzdGF0dXNcIjogXCJTaG93XCIgfSwgeyBcImlkXCI6IFwianQxOTM0OXhcIiwgXCJuYW1lXCI6IFwianQxOTM0OXhcIiwgXCJ4XCI6IDI3MS4yNSwgXCJ5XCI6IDE2Ny43Mzc5Mjk5MzIzOTM2NiwgXCJ3aWR0aFwiOiA2MC43NTQwMjMzNTU4Njg3NSwgXCJoZWlnaHRcIjogNTguNjMxMDM1MDMzODAzMTYsIFwidGltZVwiOiAwLjAzMTc4NDcyMjIyMjIyMjIyLCBcInN0YXR1c1wiOiBcIlNob3dcIiB9LCB7IFwiaWRcIjogXCJqdDE5M2VrZFwiLCBcIm5hbWVcIjogXCJqdDE5M2VrZFwiLCBcInhcIjogMjc0LjI1LCBcInlcIjogMTYwLjczNzkyOTkzMjM5MzY2LCBcIndpZHRoXCI6IDYwLjc1NDAyMzM1NTg2ODc1LCBcImhlaWdodFwiOiA1OC42MzEwMzUwMzM4MDMxNiwgXCJ0aW1lXCI6IDAuMDYzODg2MTExMTExMTExMTIsIFwic3RhdHVzXCI6IFwiU2hvd1wiIH0sIHsgXCJpZFwiOiBcImp0MTkzaHAxXCIsIFwibmFtZVwiOiBcImp0MTkzaHAxXCIsIFwieFwiOiAyODAuMjUsIFwieVwiOiAxNjAuNzM3OTI5OTMyMzkzNjYsIFwid2lkdGhcIjogNjAuNzU0MDIzMzU1ODY4NzUsIFwiaGVpZ2h0XCI6IDU4LjYzMTAzNTAzMzgwMzE2LCBcInRpbWVcIjogMC4wODY3NzI0MjA2MzQ5MjA2MywgXCJzdGF0dXNcIjogXCJTaG93XCIgfSwgeyBcImlkXCI6IFwianQxOTRjYnZcIiwgXCJuYW1lXCI6IFwianQxOTRjYnZcIiwgXCJ4XCI6IDI4MC4xMzI2OTc1ODIxNjc3LCBcInlcIjogMTU4LjYyMDYyNzUxNDU2MTM2LCBcIndpZHRoXCI6IDYwLjc1NDAyMzM1NTg2ODc1LCBcImhlaWdodFwiOiA1OC42MzEwMzUwMzM4MDMxNiwgXCJ0aW1lXCI6IDAuMTE5NTg1NzE0Mjg1NzE0MywgXCJzdGF0dXNcIjogXCJTaG93XCIgfSwgeyBcImlkXCI6IFwianQxOTN1bWdcIiwgXCJuYW1lXCI6IFwianQxOTN1bWdcIiwgXCJ4XCI6IDI3NC4yNSwgXCJ5XCI6IDE1NC43Mzc5Mjk5MzIzOTM2NiwgXCJ3aWR0aFwiOiA2MC43NTQwMjMzNTU4Njg3NSwgXCJoZWlnaHRcIjogNTguNjMxMDM1MDMzODAzMTYsIFwidGltZVwiOiAwLjEzNDU5MDA3OTM2NTA3OTM2LCBcInN0YXR1c1wiOiBcIlNob3dcIiB9LCB7IFwiaWRcIjogXCJqdDE5M3k3cVwiLCBcIm5hbWVcIjogXCJqdDE5M3k3cVwiLCBcInhcIjogMjY4LjI1LCBcInlcIjogMTU1LjczNzkyOTkzMjM5MzY2LCBcIndpZHRoXCI6IDYwLjc1NDAyMzM1NTg2ODc1LCBcImhlaWdodFwiOiA1OC42MzEwMzUwMzM4MDMxNiwgXCJ0aW1lXCI6IDAuMTY5Mzk1MjM4MDk1MjM4MSwgXCJzdGF0dXNcIjogXCJTaG93XCIgfSwgeyBcImlkXCI6IFwianQxOTRoeGdcIiwgXCJuYW1lXCI6IFwianQxOTRoeGdcIiwgXCJ4XCI6IDI2MC4yNSwgXCJ5XCI6IDE1Ny43Mzc5Mjk5MzIzOTM2NiwgXCJ3aWR0aFwiOiA2MC43NTQwMjMzNTU4Njg3NSwgXCJoZWlnaHRcIjogNTguNjMxMDM1MDMzODAzMTYsIFwidGltZVwiOiAwLjIwMjMzMzkyODU3MTQyODU3LCBcInN0YXR1c1wiOiBcIlNob3dcIiB9LCB7IFwiaWRcIjogXCJqdDE5NG1qMVwiLCBcIm5hbWVcIjogXCJqdDE5NG1qMVwiLCBcInhcIjogMjUzLjI1LCBcInlcIjogMTU2LjczNzkyOTkzMjM5MzY2LCBcIndpZHRoXCI6IDYwLjc1NDAyMzM1NTg2ODc1LCBcImhlaWdodFwiOiA1OC42MzEwMzUwMzM4MDMxNiwgXCJ0aW1lXCI6IDAuMjI5NjcwODMzMzMzMzMzMzIsIFwic3RhdHVzXCI6IFwiU2hvd1wiIH0sIHsgXCJpZFwiOiBcImp0MTk1cWd3XCIsIFwibmFtZVwiOiBcImp0MTk1cWd3XCIsIFwieFwiOiAyNDYuMjUsIFwieVwiOiAxNTYuNzM3OTI5OTMyMzkzNjYsIFwid2lkdGhcIjogNjMuNjYwNDc4MDU3MTM3MDMsIFwiaGVpZ2h0XCI6IDU4LjYzMTAzNTAzMzgwMzE2LCBcInRpbWVcIjogMC4yNTM1OTM1MDM5MzcwMDc4NiwgXCJzdGF0dXNcIjogXCJTaG93XCIgfSwgeyBcImlkXCI6IFwianQxOTR4cWhcIiwgXCJuYW1lXCI6IFwianQxOTR4cWhcIiwgXCJ4XCI6IDI1My4yNSwgXCJ5XCI6IDE1Ni43Mzc5Mjk5MzIzOTM2NiwgXCJ3aWR0aFwiOiA1Mi43NTQwMjMzNTU4Njg3NSwgXCJoZWlnaHRcIjogNTguNjMxMDM1MDMzODAzMTYsIFwidGltZVwiOiAwLjI3NjQyMjgxNzQ2MDMxNzQ0LCBcInN0YXR1c1wiOiBcIlNob3dcIiB9LCB7IFwiaWRcIjogXCJqdDE5NTV1MVwiLCBcIm5hbWVcIjogXCJqdDE5NTV1MVwiLCBcInhcIjogMjY1LjI1LCBcInlcIjogMTU5LjczNzkyOTkzMjM5MzY2LCBcIndpZHRoXCI6IDQwLjc1NDAyMzM1NTg2ODc1LCBcImhlaWdodFwiOiA0OS42MzEwMzUwMzM4MDMxNiwgXCJ0aW1lXCI6IDAuMzU2NDgzMzMzMzMzMzMzMywgXCJzdGF0dXNcIjogXCJTaG93XCIgfSwgeyBcImlkXCI6IFwianQxOTViM2lcIiwgXCJuYW1lXCI6IFwianQxOTViM2lcIiwgXCJ4XCI6IDI2NS4yNSwgXCJ5XCI6IDE0MS43Mzc5Mjk5MzIzOTM2NiwgXCJ3aWR0aFwiOiA0MC43NTQwMjMzNTU4Njg3NSwgXCJoZWlnaHRcIjogNDkuNjMxMDM1MDMzODAzMTYsIFwidGltZVwiOiAwLjQ1OTg0OTgwMTU4NzMwMTU0LCBcInN0YXR1c1wiOiBcIlNob3dcIiB9LCB7IFwiaWRcIjogXCJqdDE5NjF2NlwiLCBcIm5hbWVcIjogXCJqdDE5NjF2NlwiLCBcInhcIjogMjY5LjI1LCBcInlcIjogMTQ0LjczNzkyOTkzMjM5MzY2LCBcIndpZHRoXCI6IDQwLjc1NDAyMzM1NTg2ODc1LCBcImhlaWdodFwiOiA0OS42MzEwMzUwMzM4MDMxNiwgXCJ0aW1lXCI6IDAuNDc4NTE3NTE5Njg1MDM5MzYsIFwic3RhdHVzXCI6IFwiU2hvd1wiIH0sIHsgXCJpZFwiOiBcImp0MTk2NWF6XCIsIFwibmFtZVwiOiBcImp0MTk2NWF6XCIsIFwieFwiOiAyNjIuMjUsIFwieVwiOiAxNDQuNzM3OTI5OTMyMzkzNjYsIFwid2lkdGhcIjogNDcuNzU0MDIzMzU1ODY4NzUsIFwiaGVpZ2h0XCI6IDQ5LjYzMTAzNTAzMzgwMzE2LCBcInRpbWVcIjogMC41MzQyNDk2MDYyOTkyMTI2LCBcInN0YXR1c1wiOiBcIlNob3dcIiB9LCB7IFwiaWRcIjogXCJqdDE5Njhua1wiLCBcIm5hbWVcIjogXCJqdDE5Njhua1wiLCBcInhcIjogMjYyLjI1LCBcInlcIjogMTQ5LjczNzkyOTkzMjM5MzY2LCBcIndpZHRoXCI6IDQ3Ljc1NDAyMzM1NTg2ODc1LCBcImhlaWdodFwiOiA0OS42MzEwMzUwMzM4MDMxNiwgXCJ0aW1lXCI6IDAuNTkwNDEwNjI5OTIxMjU5OCwgXCJzdGF0dXNcIjogXCJTaG93XCIgfSwgeyBcImlkXCI6IFwianQxOTZheDNcIiwgXCJuYW1lXCI6IFwianQxOTZheDNcIiwgXCJ4XCI6IDI3MC4yNSwgXCJ5XCI6IDE1OC43Mzc5Mjk5MzIzOTM2NiwgXCJ3aWR0aFwiOiA0Ny43NTQwMjMzNTU4Njg3NSwgXCJoZWlnaHRcIjogNDkuNjMxMDM1MDMzODAzMTYsIFwidGltZVwiOiAwLjY2NjI1OTY0NTY2OTI5MTMsIFwic3RhdHVzXCI6IFwiU2hvd1wiIH0sIHsgXCJpZFwiOiBcImp0MTk2ZHlzXCIsIFwibmFtZVwiOiBcImp0MTk2ZHlzXCIsIFwieFwiOiAyNjguMjUsIFwieVwiOiAxNjQuNzM3OTI5OTMyMzkzNjYsIFwid2lkdGhcIjogNDcuNzU0MDIzMzU1ODY4NzUsIFwiaGVpZ2h0XCI6IDQ5LjYzMTAzNTAzMzgwMzE2LCBcInRpbWVcIjogMC43MzY4MzcwMDc4NzQwMTU3LCBcInN0YXR1c1wiOiBcIlNob3dcIiB9LCB7IFwiaWRcIjogXCJqdDE5Nmd1dVwiLCBcIm5hbWVcIjogXCJqdDE5Nmd1dVwiLCBcInhcIjogMjcyLjI1LCBcInlcIjogMTU0LjczNzkyOTkzMjM5MzY2LCBcIndpZHRoXCI6IDQ3Ljc1NDAyMzM1NTg2ODc1LCBcImhlaWdodFwiOiA0OS42MzEwMzUwMzM4MDMxNiwgXCJ0aW1lXCI6IDAuODAxMDUzOTM3MDA3ODc0LCBcInN0YXR1c1wiOiBcIlNob3dcIiB9LCB7IFwiaWRcIjogXCJqdDE5Nms3aFwiLCBcIm5hbWVcIjogXCJqdDE5Nms3aFwiLCBcInhcIjogMjczLjI1LCBcInlcIjogMTU3LjczNzkyOTkzMjM5MzY2LCBcIndpZHRoXCI6IDQ3Ljc1NDAyMzM1NTg2ODc1LCBcImhlaWdodFwiOiA0OS42MzEwMzUwMzM4MDMxNiwgXCJ0aW1lXCI6IDAuODYyNjM1MDM5MzcwMDc4NywgXCJzdGF0dXNcIjogXCJTaG93XCIgfSBdLCBcImNoaWxkcmVuXCI6IFtdLCBcInBhcmVudFwiOiBcImp0MTkyMnh1XCIgfSwgeyBcImlkXCI6IFwianQxOTIyeHVcIiwgXCJuYW1lXCI6IFwianQxOTIyeHVcIiwgXCJsYWJlbFwiOiBcIjFcIiwgXCJjb2xvclwiOiBcInJnYmEoMjU1LDIxOSwwLDEpXCIsIFwiaW5jaWRlbnRzXCI6IFsgeyBcImlkXCI6IFwianQxOTIyeHVcIiwgXCJuYW1lXCI6IFwianQxOTIyeHVcIiwgXCJ4XCI6IDI3NC4yNSwgXCJ5XCI6IDE3NCwgXCJ3aWR0aFwiOiA4MCwgXCJoZWlnaHRcIjogODEsIFwidGltZVwiOiAwLCBcInN0YXR1c1wiOiBcIlNob3dcIiB9LCB7IFwiaWRcIjogXCJqdDE5Mnd5YlwiLCBcIm5hbWVcIjogXCJqdDE5Mnd5YlwiLCBcInhcIjogMjc0LjI1LCBcInlcIjogMTcxLjczNzkyOTkzMjM5MzY2LCBcIndpZHRoXCI6IDgxLjUwODA0NjcxMTczNzU2LCBcImhlaWdodFwiOiA4My4yNjIwNzAwNjc2MDYzNCwgXCJ0aW1lXCI6IDAuMDMwODIyNjQ5NTcyNjQ5NiwgXCJzdGF0dXNcIjogXCJTcGxpdFwiIH0gXSwgXCJjaGlsZHJlblwiOiBbIFwianQxOTJ3eWNcIiwgXCJqdDE5Mnd5ZFwiIF0sIFwicGFyZW50XCI6IFwiXCIgfSBdO1xuXHRcdC8vIGNvbnN0IHByZXZpZXdOb3RpY2VzID0gW1wiQ2VsbHMnIGJvZHkgcmFuZ2UuXCIsIFwiVGhlIHRpbWUgdGhhdCBjZWxscyA8dT5zcGxpdDwvdT4sIDx1PmxlYXZlPC91PiwgPHU+b2JzY3VyZWQ8L3U+IGFuZCA8dT5zaG93IHVwPC91PiAoaWYgYXBwbGljYWJsZSkuXCJdO1xuXHRcdC8vIGNvbnN0IHVybCA9ICdodHRwczovL2NpbGRhdGEuY3Jicy51Y3NkLmVkdS9tZWRpYS92aWRlb3MvNTA1MDcvNTA1MDdfd2ViLm1wNCc7XG5cdFx0Ly8gY29uc3QgYW5ub3RhdGlvbldpZHRoID0gNjAwO1xuXHRcdC8vIHRoaXMuc3RhdGUgPSB7XG5cdFx0Ly8gXHRyZXN1bHQ6IG51bGwsXG5cdFx0Ly8gXHRpbnB1dDoge1xuXHRcdC8vIFx0XHRhbm5vdGF0aW9uczogSlNPTi5zdHJpbmdpZnkoYW5ub3RhdGlvbnMpLFxuXHRcdC8vIFx0XHR1cmw6IHVybCxcblx0XHQvLyBcdFx0YW5ub3RhdGlvbldpZHRoOiBhbm5vdGF0aW9uV2lkdGhcblx0XHQvLyBcdCB9LFxuXHRcdC8vIFx0cGFyYW1zOiB7XG5cdFx0Ly8gXHRcdGFubm90YXRpb25zOiBhbm5vdGF0aW9ucyxcblx0XHQvLyBcdFx0dXJsOiB1cmwsXG5cdFx0Ly8gXHRcdHByZXZpZXdOb3RpY2VzOiBwcmV2aWV3Tm90aWNlcyxcblx0XHQvLyBcdFx0YW5ub3RhdGlvbldpZHRoOiBhbm5vdGF0aW9uV2lkdGhcblx0XHQvLyBcdH1cblx0XHQvLyB9XG5cblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0dmlkZW9GaWxlVVJMOiAnJyxcblx0XHRcdHZpZGVvRmlsZU9iamVjdDogbnVsbCxcblx0XHRcdG15U3RyZWFtOiBudWxsLFxuXHRcdFx0cmVzdWx0OiBudWxsLFxuXHRcdFx0cmF3RGF0YTogbnVsbCxcblx0XHRcdGludGVycG9sYXRpb25SZXN1bHQ6IG51bGwsXG5cdFx0XHRzaG93TWU6IGZhbHNlLFxuXHRcdFx0dmlkZW9EdXJhdGlvbjogNS4wNCxcblx0XHRcdHZpZGVvRnJhbWVyYXRlOiA2MCxcblx0XHRcdGlucHV0OiB7XG5cdFx0XHRcdGRlZmF1bHRBbm5vdGF0aW9uczogSlNPTi5zdHJpbmdpZnkoZGVmYXVsdEFubm90YXRpb25zKSxcblx0XHRcdFx0dXJsLFxuXHRcdFx0XHR2aWRlb1dpZHRoLFxuXHRcdFx0XHRwcmV2aWV3SGVhZGVyLFxuXHRcdFx0XHRwcmV2aWV3Tm90aWNlTGlzdCxcblx0XHRcdFx0ZW1wdHlDaGVja1N1Ym1pc3Npb25XYXJuaW5nVGV4dCxcblx0XHRcdFx0ZW1wdHlDaGVja0Fubm90YXRpb25JdGVtV2FybmluZ1RleHQsXG5cdFx0XHRcdGVtcHR5QW5ub3RhdGlvblJlbWluZGVyVGV4dCxcblxuXHRcdFx0fSxcblx0XHRcdHBhcmFtczoge1xuXHRcdFx0XHRkZWZhdWx0QW5ub3RhdGlvbnM6IFtdLFxuXHRcdFx0XHR1cmwsXG5cdFx0XHRcdHZpZGVvV2lkdGgsXG5cdFx0XHRcdHByZXZpZXdIZWFkZXIsXG5cdFx0XHRcdHByZXZpZXdOb3RpY2VMaXN0LFxuXHRcdFx0XHRlbXB0eUNoZWNrU3VibWlzc2lvbldhcm5pbmdUZXh0LFxuXHRcdFx0XHRlbXB0eUNoZWNrQW5ub3RhdGlvbkl0ZW1XYXJuaW5nVGV4dCxcblx0XHRcdFx0ZW1wdHlBbm5vdGF0aW9uUmVtaW5kZXJUZXh0LFxuXHRcdFx0fVxuXHRcdH1cblx0XHQvL3N0YXJ0IGNvbnRlbnQgZnJvbSByZWFjdCB0b29sXG5cdFx0Y29uc3QgdGVtcCA9IHt9O1xuXG5cblx0XHRjb25zdCBkZWZhdWx0QW5ub3RhdGlvbnMgPSBbe1xuXHRcdFx0aWQ6ICdqdDE5Mnd5ZCcsXG5cdFx0XHRuYW1lOiAnanQxOTJ3eWQnLFxuXHRcdFx0bGFiZWw6ICcxLTInLFxuXHRcdFx0Y29sb3I6ICdyZ2JhKDI1NSwwLDAsMSknLFxuXHRcdFx0aW5jaWRlbnRzOiBbe1xuXHRcdFx0XHRpZDogJ2p0MTkyd3liJywgbmFtZTogJ2p0MTkyd3liJywgeDogMjk1LjAwNDAyMzM1NTg2ODc1LCB5OiAxOTMuMzY4OTY0OTY2MTk2OCwgd2lkdGg6IDQwLjc1NDAyMzM1NTg2ODc4LCBoZWlnaHQ6IDQxLjYzMTAzNTAzMzgwMzE3LCB0aW1lOiAwLjAzMDgyMjY0OTU3MjY0OTYsIHN0YXR1czogJ1Nob3cnLFxuXHRcdFx0fSwge1xuXHRcdFx0XHRpZDogJ2p0MTkzMG5iJywgbmFtZTogJ2p0MTkzMG5iJywgeDogMzA0LjAwNDAyMzM1NTg2ODc1LCB5OiAyMDIuMzY4OTY0OTY2MTk2OCwgd2lkdGg6IDU4Ljc1NDAyMzM1NTg2ODc1LCBoZWlnaHQ6IDYwLjYzMTAzNTAzMzgwMzE5LCB0aW1lOiAwLjAzMTc4NDcyMjIyMjIyMjIyLCBzdGF0dXM6ICdTaG93Jyxcblx0XHRcdH0sIHtcblx0XHRcdFx0aWQ6ICdqdDE5M2ZpbScsIG5hbWU6ICdqdDE5M2ZpbScsIHg6IDMwOS4wMDQwMjMzNTU4Njg3NSwgeTogMjEzLjM2ODk2NDk2NjE5NjgsIHdpZHRoOiA1OC43NTQwMjMzNTU4Njg3NSwgaGVpZ2h0OiA2MC42MzEwMzUwMzM4MDMxOSwgdGltZTogMC4wNjM4ODYxMTExMTExMTExMiwgc3RhdHVzOiAnU2hvdycsXG5cdFx0XHR9LCB7XG5cdFx0XHRcdGlkOiAnanQxOTNpam8nLCBuYW1lOiAnanQxOTNpam8nLCB4OiAzMjAuMDA0MDIzMzU1ODY4NzUsIHk6IDIyMC4zNjg5NjQ5NjYxOTY4LCB3aWR0aDogNTguNzU0MDIzMzU1ODY4NzUsIGhlaWdodDogNzQuNjMxMDM1MDMzODAzMTksIHRpbWU6IDAuMDg2NzcyNDIwNjM0OTIwNjMsIHN0YXR1czogJ1Nob3cnLFxuXHRcdFx0fSwge1xuXHRcdFx0XHRpZDogJ2p0MTk0ODRtJywgbmFtZTogJ2p0MTk0ODRtJywgeDogMzIwLjQ4OTkyMTU2NTg3NjMzLCB5OiAyMTguNDI1MzcyMTI2MTY2NDIsIHdpZHRoOiA2MC42OTc2MTYxOTU4OTkxMTYsIGhlaWdodDogNzguMTczMzQwNDAzNzgwNDMsIHRpbWU6IDAuMDk2NjcxODI1Mzk2ODI1NCwgc3RhdHVzOiAnU2hvdycsXG5cdFx0XHR9LCB7XG5cdFx0XHRcdGlkOiAnanQxOTNvNHknLCBuYW1lOiAnanQxOTNvNHknLCB4OiAzMjEuMDA0MDIzMzU1ODY4NzUsIHk6IDIxNi4zNjg5NjQ5NjYxOTY4LCB3aWR0aDogNjIuNzU0MDIzMzU1ODY4NzUsIGhlaWdodDogNzEuNjMxMDM1MDMzODAzMTksIHRpbWU6IDAuMTA3MTQ1ODMzMzMzMzMzMzQsIHN0YXR1czogJ1Nob3cnLFxuXHRcdFx0fSwge1xuXHRcdFx0XHRpZDogJ2p0MTk0ZG9tJywgbmFtZTogJ2p0MTk0ZG9tJywgeDogMzIxLjAwNDAyMzM1NTg2ODc1LCB5OiAyMTguODA4MzA0NDY0MDI0Mywgd2lkdGg6IDYyLjc1NDAyMzM1NTg2ODc1LCBoZWlnaHQ6IDY5LjE5MTY5NTUzNTk3NTcsIHRpbWU6IDAuMTE5NTg1NzE0Mjg1NzE0Mywgc3RhdHVzOiAnU2hvdycsXG5cdFx0XHR9LCB7XG5cdFx0XHRcdGlkOiAnanQxOTN0YXcnLCBuYW1lOiAnanQxOTN0YXcnLCB4OiAzMjEuMDA0MDIzMzU1ODY4NzUsIHk6IDIyOC4zNjg5NjQ5NjYxOTY4LCB3aWR0aDogNjIuNzU0MDIzMzU1ODY4NzUsIGhlaWdodDogNTkuNjMxMDM1MDMzODAzMTksIHRpbWU6IDAuMTM0NTkwMDc5MzY1MDc5MzYsIHN0YXR1czogJ1Nob3cnLFxuXHRcdFx0fSwge1xuXHRcdFx0XHRpZDogJ2p0MTkzemI0JywgbmFtZTogJ2p0MTkzemI0JywgeDogMzE4LjAwNDAyMzM1NTg2ODc1LCB5OiAyMjguMzY4OTY0OTY2MTk2OCwgd2lkdGg6IDgxLjc1NDAyMzM1NTg2ODc1LCBoZWlnaHQ6IDU5LjYzMTAzNTAzMzgwMzE5LCB0aW1lOiAwLjE2OTM5NTIzODA5NTIzODEsIHN0YXR1czogJ1Nob3cnLFxuXHRcdFx0fSwge1xuXHRcdFx0XHRpZDogJ2p0MTk1bHR6JywgbmFtZTogJ2p0MTk1bHR6JywgeDogMzI4LjI4NzQwOTg2NDEyNDQsIHk6IDIzMC42NTIzNTE0NzQ0NTI1LCB3aWR0aDogNzAuODUxNjQyMzE4MTM5MDYsIGhlaWdodDogNTYuNjMxMDM1MDMzODAzMjE1LCB0aW1lOiAwLjE5ODU1MjM2MjIwNDcyNDQsIHN0YXR1czogJ1Nob3cnLFxuXHRcdFx0fSwge1xuXHRcdFx0XHRpZDogJ2p0MTk0dHJnJywgbmFtZTogJ2p0MTk0dHJnJywgeDogMzIyLjAwNDAyMzM1NTg2ODc1LCB5OiAyMzIuMzY4OTY0OTY2MTk2OCwgd2lkdGg6IDc2LjY2OTY3ODYyOTc1OTUyLCBoZWlnaHQ6IDU5LjYzMTAzNTAzMzgwMzE5LCB0aW1lOiAwLjIyMDQ3MjIyMjIyMjIyMjI0LCBzdGF0dXM6ICdTaG93Jyxcblx0XHRcdH0sIHtcblx0XHRcdFx0aWQ6ICdqdDE5NGxnbScsIG5hbWU6ICdqdDE5NGxnbScsIHg6IDMxOC4wMDQwMjMzNTU4Njg3NSwgeTogMjI4LjM2ODk2NDk2NjE5NjgsIHdpZHRoOiA3NS43NTQwMjMzNTU4Njg3NSwgaGVpZ2h0OiA1OS42MzEwMzUwMzM4MDMxOSwgdGltZTogMC4yMjk2NzA4MzMzMzMzMzMzMiwgc3RhdHVzOiAnU2hvdycsXG5cdFx0XHR9LCB7XG5cdFx0XHRcdGlkOiAnanQxOTVwN20nLCBuYW1lOiAnanQxOTVwN20nLCB4OiAzMTguMDA0MDIzMzU1ODY4NzUsIHk6IDIyOC4zNjg5NjQ5NjYxOTY4LCB3aWR0aDogNjguNzU0MDIzMzU1ODY4NzUsIGhlaWdodDogNTguMTk2ODQ5NDYzODU5MDUsIHRpbWU6IDAuMjUzNTkzNTAzOTM3MDA3ODYsIHN0YXR1czogJ1Nob3cnLFxuXHRcdFx0fSwge1xuXHRcdFx0XHRpZDogJ2p0MTk1MXI5JywgbmFtZTogJ2p0MTk1MXI5JywgeDogMzE4LjAwNDAyMzM1NTg2ODc1LCB5OiAyMjguMzY4OTY0OTY2MTk2OCwgd2lkdGg6IDc1Ljc1NDAyMzM1NTg2ODc1LCBoZWlnaHQ6IDU0LjYzMTAzNTAzMzgwMzE5LCB0aW1lOiAwLjMxMzA3MjQyMDYzNDkyMDYzLCBzdGF0dXM6ICdTaG93Jyxcblx0XHRcdH0sIHtcblx0XHRcdFx0aWQ6ICdqdDE5NXY5bCcsIG5hbWU6ICdqdDE5NXY5bCcsIHg6IDMxOC4wMDQwMjMzNTU4Njg3NSwgeTogMjI4LjM2ODk2NDk2NjE5NjgsIHdpZHRoOiA3NS43NTQwMjMzNTU4Njg3NSwgaGVpZ2h0OiA1NC42MzEwMzUwMzM4MDMxOSwgdGltZTogMC4zNDYyMzkzNzAwNzg3NDAxNywgc3RhdHVzOiAnSGlkZScsXG5cdFx0XHR9XSxcblx0XHRcdGNoaWxkcmVuTmFtZXM6IFtdLFxuXHRcdFx0cGFyZW50TmFtZTogJ2p0MTkyMnh1Jyxcblx0XHR9LCB7XG5cdFx0XHRpZDogJ2p0MTkyd3ljJyxcblx0XHRcdG5hbWU6ICdqdDE5Mnd5YycsXG5cdFx0XHRsYWJlbDogJzEtMScsXG5cdFx0XHRjb2xvcjogJ3JnYmEoMjU1LDAsMCwxKScsXG5cdFx0XHRpbmNpZGVudHM6IFt7XG5cdFx0XHRcdGlkOiAnanQxOTJ3eWInLCBuYW1lOiAnanQxOTJ3eWInLCB4OiAyNzQuMjUsIHk6IDE3MS43Mzc5Mjk5MzIzOTM2Niwgd2lkdGg6IDQwLjc1NDAyMzM1NTg2ODc4LCBoZWlnaHQ6IDQxLjYzMTAzNTAzMzgwMzE3LCB0aW1lOiAwLjAzMDgyMjY0OTU3MjY0OTYsIHN0YXR1czogJ1Nob3cnLFxuXHRcdFx0fSwge1xuXHRcdFx0XHRpZDogJ2p0MTkzNDl4JywgbmFtZTogJ2p0MTkzNDl4JywgeDogMjcxLjI1LCB5OiAxNjcuNzM3OTI5OTMyMzkzNjYsIHdpZHRoOiA2MC43NTQwMjMzNTU4Njg3NSwgaGVpZ2h0OiA1OC42MzEwMzUwMzM4MDMxNiwgdGltZTogMC4wMzE3ODQ3MjIyMjIyMjIyMiwgc3RhdHVzOiAnU2hvdycsXG5cdFx0XHR9LCB7XG5cdFx0XHRcdGlkOiAnanQxOTNla2QnLCBuYW1lOiAnanQxOTNla2QnLCB4OiAyNzQuMjUsIHk6IDE2MC43Mzc5Mjk5MzIzOTM2Niwgd2lkdGg6IDYwLjc1NDAyMzM1NTg2ODc1LCBoZWlnaHQ6IDU4LjYzMTAzNTAzMzgwMzE2LCB0aW1lOiAwLjA2Mzg4NjExMTExMTExMTEyLCBzdGF0dXM6ICdTaG93Jyxcblx0XHRcdH0sIHtcblx0XHRcdFx0aWQ6ICdqdDE5M2hwMScsIG5hbWU6ICdqdDE5M2hwMScsIHg6IDI4MC4yNSwgeTogMTYwLjczNzkyOTkzMjM5MzY2LCB3aWR0aDogNjAuNzU0MDIzMzU1ODY4NzUsIGhlaWdodDogNTguNjMxMDM1MDMzODAzMTYsIHRpbWU6IDAuMDg2NzcyNDIwNjM0OTIwNjMsIHN0YXR1czogJ1Nob3cnLFxuXHRcdFx0fSwge1xuXHRcdFx0XHRpZDogJ2p0MTk0Y2J2JywgbmFtZTogJ2p0MTk0Y2J2JywgeDogMjgwLjEzMjY5NzU4MjE2NzcsIHk6IDE1OC42MjA2Mjc1MTQ1NjEzNiwgd2lkdGg6IDYwLjc1NDAyMzM1NTg2ODc1LCBoZWlnaHQ6IDU4LjYzMTAzNTAzMzgwMzE2LCB0aW1lOiAwLjExOTU4NTcxNDI4NTcxNDMsIHN0YXR1czogJ1Nob3cnLFxuXHRcdFx0fSwge1xuXHRcdFx0XHRpZDogJ2p0MTkzdW1nJywgbmFtZTogJ2p0MTkzdW1nJywgeDogMjc0LjI1LCB5OiAxNTQuNzM3OTI5OTMyMzkzNjYsIHdpZHRoOiA2MC43NTQwMjMzNTU4Njg3NSwgaGVpZ2h0OiA1OC42MzEwMzUwMzM4MDMxNiwgdGltZTogMC4xMzQ1OTAwNzkzNjUwNzkzNiwgc3RhdHVzOiAnU2hvdycsXG5cdFx0XHR9LCB7XG5cdFx0XHRcdGlkOiAnanQxOTN5N3EnLCBuYW1lOiAnanQxOTN5N3EnLCB4OiAyNjguMjUsIHk6IDE1NS43Mzc5Mjk5MzIzOTM2Niwgd2lkdGg6IDYwLjc1NDAyMzM1NTg2ODc1LCBoZWlnaHQ6IDU4LjYzMTAzNTAzMzgwMzE2LCB0aW1lOiAwLjE2OTM5NTIzODA5NTIzODEsIHN0YXR1czogJ1Nob3cnLFxuXHRcdFx0fSwge1xuXHRcdFx0XHRpZDogJ2p0MTk0aHhnJywgbmFtZTogJ2p0MTk0aHhnJywgeDogMjYwLjI1LCB5OiAxNTcuNzM3OTI5OTMyMzkzNjYsIHdpZHRoOiA2MC43NTQwMjMzNTU4Njg3NSwgaGVpZ2h0OiA1OC42MzEwMzUwMzM4MDMxNiwgdGltZTogMC4yMDIzMzM5Mjg1NzE0Mjg1Nywgc3RhdHVzOiAnU2hvdycsXG5cdFx0XHR9LCB7XG5cdFx0XHRcdGlkOiAnanQxOTRtajEnLCBuYW1lOiAnanQxOTRtajEnLCB4OiAyNTMuMjUsIHk6IDE1Ni43Mzc5Mjk5MzIzOTM2Niwgd2lkdGg6IDYwLjc1NDAyMzM1NTg2ODc1LCBoZWlnaHQ6IDU4LjYzMTAzNTAzMzgwMzE2LCB0aW1lOiAwLjIyOTY3MDgzMzMzMzMzMzMyLCBzdGF0dXM6ICdTaG93Jyxcblx0XHRcdH0sIHtcblx0XHRcdFx0aWQ6ICdqdDE5NXFndycsIG5hbWU6ICdqdDE5NXFndycsIHg6IDI0Ni4yNSwgeTogMTU2LjczNzkyOTkzMjM5MzY2LCB3aWR0aDogNjMuNjYwNDc4MDU3MTM3MDMsIGhlaWdodDogNTguNjMxMDM1MDMzODAzMTYsIHRpbWU6IDAuMjUzNTkzNTAzOTM3MDA3ODYsIHN0YXR1czogJ1Nob3cnLFxuXHRcdFx0fSwge1xuXHRcdFx0XHRpZDogJ2p0MTk0eHFoJywgbmFtZTogJ2p0MTk0eHFoJywgeDogMjUzLjI1LCB5OiAxNTYuNzM3OTI5OTMyMzkzNjYsIHdpZHRoOiA1Mi43NTQwMjMzNTU4Njg3NSwgaGVpZ2h0OiA1OC42MzEwMzUwMzM4MDMxNiwgdGltZTogMC4yNzY0MjI4MTc0NjAzMTc0NCwgc3RhdHVzOiAnU2hvdycsXG5cdFx0XHR9LCB7XG5cdFx0XHRcdGlkOiAnanQxOTU1dTEnLCBuYW1lOiAnanQxOTU1dTEnLCB4OiAyNjUuMjUsIHk6IDE1OS43Mzc5Mjk5MzIzOTM2Niwgd2lkdGg6IDQwLjc1NDAyMzM1NTg2ODc1LCBoZWlnaHQ6IDQ5LjYzMTAzNTAzMzgwMzE2LCB0aW1lOiAwLjM1NjQ4MzMzMzMzMzMzMzMsIHN0YXR1czogJ1Nob3cnLFxuXHRcdFx0fSwge1xuXHRcdFx0XHRpZDogJ2p0MTk1YjNpJywgbmFtZTogJ2p0MTk1YjNpJywgeDogMjY1LjI1LCB5OiAxNDEuNzM3OTI5OTMyMzkzNjYsIHdpZHRoOiA0MC43NTQwMjMzNTU4Njg3NSwgaGVpZ2h0OiA0OS42MzEwMzUwMzM4MDMxNiwgdGltZTogMC40NTk4NDk4MDE1ODczMDE1NCwgc3RhdHVzOiAnU2hvdycsXG5cdFx0XHR9LCB7XG5cdFx0XHRcdGlkOiAnanQxOTYxdjYnLCBuYW1lOiAnanQxOTYxdjYnLCB4OiAyNjkuMjUsIHk6IDE0NC43Mzc5Mjk5MzIzOTM2Niwgd2lkdGg6IDQwLjc1NDAyMzM1NTg2ODc1LCBoZWlnaHQ6IDQ5LjYzMTAzNTAzMzgwMzE2LCB0aW1lOiAwLjQ3ODUxNzUxOTY4NTAzOTM2LCBzdGF0dXM6ICdTaG93Jyxcblx0XHRcdH0sIHtcblx0XHRcdFx0aWQ6ICdqdDE5NjVheicsIG5hbWU6ICdqdDE5NjVheicsIHg6IDI2Mi4yNSwgeTogMTQ0LjczNzkyOTkzMjM5MzY2LCB3aWR0aDogNDcuNzU0MDIzMzU1ODY4NzUsIGhlaWdodDogNDkuNjMxMDM1MDMzODAzMTYsIHRpbWU6IDAuNTM0MjQ5NjA2Mjk5MjEyNiwgc3RhdHVzOiAnU2hvdycsXG5cdFx0XHR9LCB7XG5cdFx0XHRcdGlkOiAnanQxOTY4bmsnLCBuYW1lOiAnanQxOTY4bmsnLCB4OiAyNjIuMjUsIHk6IDE0OS43Mzc5Mjk5MzIzOTM2Niwgd2lkdGg6IDQ3Ljc1NDAyMzM1NTg2ODc1LCBoZWlnaHQ6IDQ5LjYzMTAzNTAzMzgwMzE2LCB0aW1lOiAwLjU5MDQxMDYyOTkyMTI1OTgsIHN0YXR1czogJ1Nob3cnLFxuXHRcdFx0fSwge1xuXHRcdFx0XHRpZDogJ2p0MTk2YXgzJywgbmFtZTogJ2p0MTk2YXgzJywgeDogMjcwLjI1LCB5OiAxNTguNzM3OTI5OTMyMzkzNjYsIHdpZHRoOiA0Ny43NTQwMjMzNTU4Njg3NSwgaGVpZ2h0OiA0OS42MzEwMzUwMzM4MDMxNiwgdGltZTogMC42NjYyNTk2NDU2NjkyOTEzLCBzdGF0dXM6ICdTaG93Jyxcblx0XHRcdH0sIHtcblx0XHRcdFx0aWQ6ICdqdDE5NmR5cycsIG5hbWU6ICdqdDE5NmR5cycsIHg6IDI2OC4yNSwgeTogMTY0LjczNzkyOTkzMjM5MzY2LCB3aWR0aDogNDcuNzU0MDIzMzU1ODY4NzUsIGhlaWdodDogNDkuNjMxMDM1MDMzODAzMTYsIHRpbWU6IDAuNzM2ODM3MDA3ODc0MDE1Nywgc3RhdHVzOiAnU2hvdycsXG5cdFx0XHR9LCB7XG5cdFx0XHRcdGlkOiAnanQxOTZndXUnLCBuYW1lOiAnanQxOTZndXUnLCB4OiAyNzIuMjUsIHk6IDE1NC43Mzc5Mjk5MzIzOTM2Niwgd2lkdGg6IDQ3Ljc1NDAyMzM1NTg2ODc1LCBoZWlnaHQ6IDQ5LjYzMTAzNTAzMzgwMzE2LCB0aW1lOiAwLjgwMTA1MzkzNzAwNzg3NCwgc3RhdHVzOiAnU2hvdycsXG5cdFx0XHR9LCB7XG5cdFx0XHRcdGlkOiAnanQxOTZrN2gnLCBuYW1lOiAnanQxOTZrN2gnLCB4OiAyNzMuMjUsIHk6IDE1Ny43Mzc5Mjk5MzIzOTM2Niwgd2lkdGg6IDQ3Ljc1NDAyMzM1NTg2ODc1LCBoZWlnaHQ6IDQ5LjYzMTAzNTAzMzgwMzE2LCB0aW1lOiAwLjg2MjYzNTAzOTM3MDA3ODcsIHN0YXR1czogJ1Nob3cnLFxuXHRcdFx0fV0sXG5cdFx0XHRjaGlsZHJlbk5hbWVzOiBbXSxcblx0XHRcdHBhcmVudE5hbWU6ICdqdDE5MjJ4dScsXG5cdFx0fSwge1xuXHRcdFx0aWQ6ICdqdDE5MjJ4dScsXG5cdFx0XHRuYW1lOiAnanQxOTIyeHUnLFxuXHRcdFx0bGFiZWw6ICcxJyxcblx0XHRcdGNvbG9yOiAncmdiYSgyNTUsMjE5LDAsMSknLFxuXHRcdFx0aW5jaWRlbnRzOiBbe1xuXHRcdFx0XHRpZDogJ2p0MTkyMnh1JywgbmFtZTogJ2p0MTkyMnh1JywgeDogMjc0LjI1LCB5OiAxNzQsIHdpZHRoOiA4MCwgaGVpZ2h0OiA4MSwgdGltZTogMCwgc3RhdHVzOiAnU2hvdycsXG5cdFx0XHR9LCB7XG5cdFx0XHRcdGlkOiAnanQxOTJ3eWInLCBuYW1lOiAnanQxOTJ3eWInLCB4OiAyNzQuMjUsIHk6IDE3MS43Mzc5Mjk5MzIzOTM2Niwgd2lkdGg6IDgxLjUwODA0NjcxMTczNzU2LCBoZWlnaHQ6IDgzLjI2MjA3MDA2NzYwNjM0LCB0aW1lOiAwLjAzMDgyMjY0OTU3MjY0OTYsIHN0YXR1czogJ1NwbGl0Jyxcblx0XHRcdH1dLFxuXHRcdFx0Y2hpbGRyZW5OYW1lczogWydqdDE5Mnd5YycsICdqdDE5Mnd5ZCddLFxuXHRcdFx0cGFyZW50TmFtZTogJycsXG5cdFx0fV07XG5cdFx0Y29uc3QgdXJsID0gJ2h0dHBzOi8vY2lsZGF0YS5jcmJzLnVjc2QuZWR1L21lZGlhL3ZpZGVvcy81MDUwNy81MDUwN193ZWIubXA0Jztcblx0XHRjb25zdCB2aWRlb1dpZHRoID0gNTAwO1xuXHRcdGNvbnN0IHByZXZpZXdOb3RpY2VMaXN0ID0gW1xuXHRcdFx0J0NlbGxzXFwnIGJvZHkgcmFuZ2UuJyxcblx0XHRcdCdUaGUgdGltZSB0aGF0IGNlbGxzIDx1PnNwbGl0PC91PiwgPHU+bGVhdmU8L3U+LCA8dT5vYnNjdXJlZDwvdT4gYW5kIDx1PlNob3cgdXA8L3U+IChpZiBhcHBsaWNhYmxlKS4nLFxuXHRcdF07XG5cdFx0Y29uc3QgcHJldmlld0hlYWRlciA9ICdQbGVhc2Ugc2NhbiB0aGUgdmlkZW8gYW5kIG9ic2VydmUgdGhlIGZvbGxvd2luZyB0byBoZWxwIHlvdSBjb21wbGV0ZSB0aGUgdGFzazonO1xuXHRcdGNvbnN0IGVtcHR5Q2hlY2tTdWJtaXNzaW9uV2FybmluZ1RleHQgPSAnUGxlYXNlIGFubm90YXRlIEFORCB0cmFjayBvbmUgdW5tYXJrZWQgY2VsbCB0byBjb21wbGV0ZSB0aGlzIHRhc2suJztcblx0XHRjb25zdCBlbXB0eUNoZWNrQW5ub3RhdGlvbkl0ZW1XYXJuaW5nVGV4dCA9ICdTdGVwIDI6IFBsZWFzZSB0cmFjayB0aGUgY2VsbCBib3VuZCBieSB0aGlzIGJveCc7XG5cdFx0Y29uc3QgZW1wdHlBbm5vdGF0aW9uUmVtaW5kZXJUZXh0ID0gJ1N0ZXAgMTogQ2xpY2sgdGhlIGJ1dHRvbiBhYm92ZSB0byBhZGQgYSBuZXcgYm94IGFyb3VuZCBhIGNlbGwnO1xuXHRcdHRoaXMudmlkZW9GaWxlSW5wdXQgPSBSZWFjdC5jcmVhdGVSZWYoKTtcblx0XHR0aGlzLmZpbGVJbnB1dCA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRteVN0cmVhbTogbnVsbCxcblx0XHRcdHJlc3VsdDogbnVsbCxcblx0XHRcdGludGVycG9sYXRpb25SZXN1bHQ6IG51bGwsXG5cdFx0XHRzaG93TWU6IGZhbHNlLFxuXHRcdFx0dmlkZW9EdXJhdGlvbjogNS4wNCxcblx0XHRcdHZpZGVvRnJhbWVyYXRlOiA2MCxcblx0XHRcdGlucHV0OiB7XG5cdFx0XHRcdGRlZmF1bHRBbm5vdGF0aW9uczogSlNPTi5zdHJpbmdpZnkoZGVmYXVsdEFubm90YXRpb25zKSxcblx0XHRcdFx0dXJsLFxuXHRcdFx0XHR2aWRlb1dpZHRoLFxuXHRcdFx0XHRwcmV2aWV3SGVhZGVyLFxuXHRcdFx0XHRwcmV2aWV3Tm90aWNlTGlzdCxcblx0XHRcdFx0ZW1wdHlDaGVja1N1Ym1pc3Npb25XYXJuaW5nVGV4dCxcblx0XHRcdFx0ZW1wdHlDaGVja0Fubm90YXRpb25JdGVtV2FybmluZ1RleHQsXG5cdFx0XHRcdGVtcHR5QW5ub3RhdGlvblJlbWluZGVyVGV4dCxcblx0XHRcdH0sXG5cdFx0XHRwYXJhbXM6IHtcblx0XHRcdFx0ZGVmYXVsdEFubm90YXRpb25zOiBbXSxcblx0XHRcdFx0dXJsLFxuXHRcdFx0XHR2aWRlb1dpZHRoLFxuXHRcdFx0XHRwcmV2aWV3SGVhZGVyLFxuXHRcdFx0XHRwcmV2aWV3Tm90aWNlTGlzdCxcblx0XHRcdFx0ZW1wdHlDaGVja1N1Ym1pc3Npb25XYXJuaW5nVGV4dCxcblx0XHRcdFx0ZW1wdHlDaGVja0Fubm90YXRpb25JdGVtV2FybmluZ1RleHQsXG5cdFx0XHRcdGVtcHR5QW5ub3RhdGlvblJlbWluZGVyVGV4dCxcblx0XHRcdH1cblx0XHR9XG5cdFx0Ly9lbmQgY29udGVudCBmcm9tIHJlYWN0IHRvb2xcblx0XHQvL2Nsb3NlIGNvbnN0cnVjdG9yIHByb3BzXHRcblx0fVxuXHRzY3JvbGxUb1JlZiA9ICgpID0+IHdpbmRvdy5zY3JvbGxUbygwLCB0aGlzLm15UmVmLmN1cnJlbnQub2Zmc2V0VG9wKVxuXHRoYW5kbGVSZXN1bHRTdWJtaXQgPSByZXN1bHQgPT4ge1xuXHRcdHRoaXMuc2V0U3RhdGUoeyByZXN1bHQ6IHJlc3VsdCB9KTtcblx0XHR0aGlzLnNldFN0YXRlKHsgdmlkZW9EdXJhdGlvbjogdGhpcy5zdGF0ZS52aWRlb0R1cmF0aW9uIH0pXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRzaG93TWU6IHRydWVcblx0XHR9KTtcblxuXHRcdGFsZXJ0KFwiU3VibWlzc2lvbiB3YXMgc3VjY2Vzc2Z1bC4gVXNlIHRoZSBidXR0b25zIGF0IHRoZSBlbmQgb2YgdGhlIHBhZ2UgdG8gZG93bmxvYWQgZGF0YSBwb2ludHMuXCIpXG5cdFx0Ly8gdGhpcy5jcmVhdGVSYXdEYXRhKHJlc3VsdCk7XG5cblx0fVxuXG5cdGV4ZWN1dGVTY3JvbGwgPSAoKSA9PiB0aGlzLnNjcm9sbFRvUmVmKG15UmVmKVxuXG5cblx0aGFuZGxlQ2hhbmdlID0gZXZlbnQgPT4ge1xuXHRcdGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcblx0XHRjb25zdCBuYW1lID0gdGFyZ2V0Lm5hbWU7XG5cdFx0Y29uc3QgdmFsdWUgPSB0YXJnZXQudHlwZSA9PT0gXCJjaGVja2JveFwiID8gdGFyZ2V0LmNoZWNrZWQgOiB0YXJnZXQudmFsdWU7XG5cdFx0dGhpcy5zZXRTdGF0ZSgocHJlU3RhdGUpID0+IHtcblx0XHRcdGNvbnN0IHsgaW5wdXQgfSA9IHByZVN0YXRlO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0aW5wdXQ6IHsgLi4uaW5wdXQsIFtuYW1lXTogdmFsdWUgfVxuXHRcdFx0fVxuXG5cdFx0fSlcblx0fVxuXG5cdGhhbmRsZVZpZEZyYW1lQ2hhbmdlID0gZXZlbnQgPT4ge1xuXHRcdGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC52YWx1ZSlcblx0XHR0aGlzLnNldFN0YXRlKHsgdmlkZW9GcmFtZXJhdGU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxuXHR9XG5cdGhhbmRsZVZpZER1cmF0aW9uQ2hhbmdlID0gZXZlbnQgPT4ge1xuXHRcdGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC52YWx1ZSlcblx0XHR0aGlzLnNldFN0YXRlKHsgdmlkZW9EdXJhdGlvbjogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXG5cdH1cblx0aGFuZGxlRXJyb3JTdWJtaXQgPSBldmVudCA9PiB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHR0aGlzLnNldFN0YXRlKChwcmVTdGF0ZSkgPT4ge1xuXHRcdFx0Y29uc3QgeyBpbnB1dCB9ID0gcHJlU3RhdGU7XG5cblx0XHRcdGNvbnN0IGFubm90YXRpb25zID0gdGhpcy5pc0pzb25TdHJpbmcoaW5wdXQuZGVmYXVsdEFubm90YXRpb25zKSA/IGlucHV0LmRlZmF1bHRBbm5vdGF0aW9ucyA6IFwiW11cIjtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHBhcmFtczoge1xuXHRcdFx0XHRcdGRlZmF1bHRBbm5vdGF0aW9uczogSlNPTi5wYXJzZShhbm5vdGF0aW9ucyksXG5cdFx0XHRcdFx0dXJsOiBpbnB1dC51cmwsXG5cdFx0XHRcdFx0YW5ub3RhdGlvbldpZHRoOiBwYXJzZUludChpbnB1dC5hbm5vdGF0aW9uV2lkdGgsIDEwKVxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdH1cblx0XHQpO1xuXHR9XG5cdGhhbmRsZVN1Ym1pdCA9IGFzeW5jIGV2ZW50ID0+IHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGxldCByZXN1bHQgPSB7fTtcblx0XHRpZiAodGhpcy5maWxlSW5wdXQuY3VycmVudC5maWxlc1swXSkge1xuXHRcdFx0Y29uc3QgcmVhZEZpbGVQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0XHRjb25zdCBmaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcblx0XHRcdFx0ZmlsZVJlYWRlci5vbmxvYWQgPSBldmVudCA9PiB7XG5cdFx0XHRcdFx0aWYgKCF0aGlzLmlzSnNvblN0cmluZyhldmVudC50YXJnZXQucmVzdWx0KSlcblx0XHRcdFx0XHRcdHJlamVjdCgnV3JvbmcganNvbiBmb3JtYXQnKTtcblx0XHRcdFx0XHRsZXQgcmVzdWx0ID0gSlNPTi5wYXJzZShldmVudC50YXJnZXQucmVzdWx0KTtcblx0XHRcdFx0XHRyZXNvbHZlKHJlc3VsdClcblx0XHRcdFx0fVxuXHRcdFx0XHRmaWxlUmVhZGVyLm9uZXJyb3IgPSBldmVudCA9PiB7XG5cdFx0XHRcdFx0cmVqZWN0KGV2ZW50KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRmaWxlUmVhZGVyLnJlYWRBc1RleHQodGhpcy5maWxlSW5wdXQuY3VycmVudC5maWxlc1swXSk7XG5cdFx0XHR9KVxuXHRcdFx0cmVzdWx0ID0gYXdhaXQgcmVhZEZpbGVQcm9taXNlO1xuXHRcdH1cblx0XHRsZXQgeyB1cmwgPSAnJywgdmlkZW9XaWR0aCA9IDAsIGRlZmF1bHRBbm5vdGF0aW9ucyA9IFtdIH0gPSByZXN1bHQ7XG5cdFx0dGhpcy5zZXRTdGF0ZSgocHJlU3RhdGUpID0+IHtcblx0XHRcdGNvbnN0IHsgaW5wdXQgfSA9IHByZVN0YXRlO1xuXHRcdFx0Y29uc29sZS5sb2cocHJlU3RhdGUpXG5cdFx0XHRkZWZhdWx0QW5ub3RhdGlvbnMgPSBbXVxuXHRcdFx0aWYgKHJlc3VsdC5hbm5vdGF0aW9ucykge1xuXHRcdFx0XHRpZiAocmVzdWx0LmFubm90YXRpb25zLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRcdGRlZmF1bHRBbm5vdGF0aW9ucyA9IHRoaXMuaXNKc29uU3RyaW5nKGlucHV0LmRlZmF1bHRBbm5vdGF0aW9ucykgPyBKU09OLnBhcnNlKGlucHV0LmRlZmF1bHRBbm5vdGF0aW9ucykgOiBcIltdXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0ZGVmYXVsdEFubm90YXRpb25zID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShyZXN1bHQuYW5ub3RhdGlvbnMpKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Ly9kZWZhdWx0QW5ub3RhdGlvbnMgPSB0aGlzLmlzSnNvblN0cmluZyhpbnB1dC5kZWZhdWx0QW5ub3RhdGlvbnMpID8gSlNPTi5wYXJzZShpbnB1dC5kZWZhdWx0QW5ub3RhdGlvbnMpIDogXCJbXVwiO1xuXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRwYXJhbXM6IHtcblx0XHRcdFx0XHRkZWZhdWx0QW5ub3RhdGlvbnMsXG5cdFx0XHRcdFx0dXJsOiB0aGlzLnN0YXRlLnZpZGVvRmlsZVVSTCA/IHRoaXMuc3RhdGUudmlkZW9GaWxlVVJMIDogaW5wdXQudXJsLFxuXHRcdFx0XHRcdHZpZGVvV2lkdGg6ICh2aWRlb1dpZHRoICE9PSAwID8gdmlkZW9XaWR0aCA6IHBhcnNlSW50KGlucHV0LnZpZGVvV2lkdGgsIDEwKSksXG5cdFx0XHRcdFx0dmlkZW9EdXJhdGlvbjogdGhpcy5zdGF0ZS52aWRlb0R1cmF0aW9uLFxuXHRcdFx0XHRcdHZpZGVvRnJhbWVyYXRlOiB0aGlzLnN0YXRlLnZpZGVvRnJhbWVyYXRlXG5cdFx0XHRcdH1cblx0XHRcdH07XG5cblx0XHR9XG5cdFx0KTtcblxuXHR9XG5cblx0aXNKc29uU3RyaW5nID0gc3RyID0+IHtcblx0XHR0cnkge1xuXHRcdFx0SlNPTi5wYXJzZShzdHIpO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblx0Ly9hc3luYyAoY29udGV4dClcblx0c2F2ZUluZm9ybWF0aW9uID0gYXN5bmMgKCkgPT4ge1xuXHRcdC8vIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpXG5cdFx0Ly8gY29uc29sZS5sb2coZ2V0U2VydmVyU2lkZVByb3BzKCkpXG5cdFx0Ly8gbGV0IHZhbHVlcyA9IHtkZWZhdWx0QW5ub3RhdGlvbnM6IFwiXCJ9O1xuXG5cdFx0Ly8gY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL1wiKVxuXHRcdC8vIC8vIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcblx0XHQvLyAvLyAgIC4uLnRoaXMuc3RhdGVcblx0XHQvLyAvLyB9KSxcblx0XHRjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0aGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG5cdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh7IG1wNDogJ2h0dHBzOi8vY2lsZGF0YS5jcmJzLnVjc2QuZWR1L21lZGlhL3ZpZGVvcy81MDUwNy81MDUwN193ZWIubXA0JyB9KVxuXHRcdH07XG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL21wNHRvYXZpJywgcmVxdWVzdE9wdGlvbnMpO1xuXHRcdC8vY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuXHR9XG5cblxuXG5cdC8vZnVuY3Rpb24gZm9yIGdldHRpbmcgaW50ZXJwb2xhdGVkIGRhdGEgc3RhcnRzXG5cdGdldEludGVycG9sYXRlZERhdGEgPSBldmVudCA9PiB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdC8vY29uc3QgZHVyYXRpb24gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUucmVzdWx0LmR1cmF0aW9uKSlcblxuXHRcdGNvbnN0IGR1cmF0aW9uID0gdGhpcy5zdGF0ZS52aWRlb0R1cmF0aW9uO1xuXHRcdGNvbnN0IHRpbWVyYXRlID0gZHVyYXRpb24gKiB0aGlzLnN0YXRlLnZpZGVvRnJhbWVyYXRlO1xuXG5cdFx0Ly9jb2xsZWN0IGZyYW1lL3NlY29uZCBmb3IgdGhlIHZpZGVvXG5cdFx0Y29uc3QgdGltZU5vdyA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkudG9TdHJpbmcoMzYpO1xuXHRcdGxldCBpbnRlcnBvbGF0ZWRSZXN1bHQgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUucmVzdWx0KSk7XG5cdFx0bGV0IHRlbXAgPSBpbnRlcnBvbGF0ZWRSZXN1bHRcblx0XHRmb3IgKGxldCBhbm5vdGF0aW9uID0gMDsgYW5ub3RhdGlvbiA8IHRlbXAuYW5ub3RhdGlvbnMubGVuZ3RoOyBhbm5vdGF0aW9uKyspIHtcblx0XHRcdGZvciAobGV0IGluY2lkZW50ID0gMDsgaW5jaWRlbnQgPCB0ZW1wLmFubm90YXRpb25zW2Fubm90YXRpb25dLmluY2lkZW50cy5sZW5ndGg7IGluY2lkZW50KyspIHtcblx0XHRcdFx0dGVtcC5hbm5vdGF0aW9uc1thbm5vdGF0aW9uXS5pbmNpZGVudHNbaW5jaWRlbnRdLnBhcmVudE5hbWUgPSB0ZW1wLmFubm90YXRpb25zW2Fubm90YXRpb25dLnBhcmVudE5hbWVcblx0XHRcdH1cblx0XHR9XG5cdFx0Zm9yIChsZXQgYW5ub3RhdGlvbiA9IDA7IGFubm90YXRpb24gPCB0ZW1wLmFubm90YXRpb25zLmxlbmd0aDsgYW5ub3RhdGlvbisrKSB7XG5cblx0XHRcdGZvciAobGV0IGluY2lkZW50ID0gMDsgaW5jaWRlbnQgPCB0ZW1wLmFubm90YXRpb25zW2Fubm90YXRpb25dLmluY2lkZW50cy5sZW5ndGg7IGluY2lkZW50KyspIHtcblx0XHRcdFx0dGVtcC5hbm5vdGF0aW9uc1thbm5vdGF0aW9uXS5pbmNpZGVudHNbaW5jaWRlbnRdLmxhYmVsID0gdGVtcC5hbm5vdGF0aW9uc1thbm5vdGF0aW9uXS5sYWJlbFxuXHRcdFx0fVxuXHRcdH1cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGludGVycG9sYXRlZFJlc3VsdC5hbm5vdGF0aW9ucy5sZW5ndGg7IGkrKykge1xuXG5cdFx0XHRsZXQgYW5ub3RJbmNpZGVudExlbmd0aCA9IGludGVycG9sYXRlZFJlc3VsdC5hbm5vdGF0aW9uc1tpXS5pbmNpZGVudHMubGVuZ3RoXG5cdFx0XHRpZiAoYW5ub3RJbmNpZGVudExlbmd0aCA9PT0gMSkge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcIlRoaXMgaXMgbm90IHBvc3NpYmxlIDpQXCIpXG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmIChhbm5vdEluY2lkZW50TGVuZ3RoID4gMSkge1xuXG5cdFx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgYW5ub3RJbmNpZGVudExlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0aWYgKChqICE9IGFubm90SW5jaWRlbnRMZW5ndGggLSAxKSAmJiAoaW50ZXJwb2xhdGVkUmVzdWx0LmFubm90YXRpb25zW2ldLmluY2lkZW50c1tqICsgMV0uc3RhdHVzID09IFwiU2hvd1wiIHx8IGludGVycG9sYXRlZFJlc3VsdC5hbm5vdGF0aW9uc1tpXS5pbmNpZGVudHNbaiArIDFdLnN0YXR1cyA9PSBcIlwiIHx8IGludGVycG9sYXRlZFJlc3VsdC5hbm5vdGF0aW9uc1tpXS5pbmNpZGVudHNbaiArIDFdLnN0YXR1cyA9PSBcIlNwbGl0XCIpKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBzb3VyY2UgPSBpbnRlcnBvbGF0ZWRSZXN1bHQuYW5ub3RhdGlvbnNbaV0uaW5jaWRlbnRzW2pdXG5cdFx0XHRcdFx0XHRjb25zdCB0YXJnZXQgPSBpbnRlcnBvbGF0ZWRSZXN1bHQuYW5ub3RhdGlvbnNbaV0uaW5jaWRlbnRzW2ogKyAxXVxuXHRcdFx0XHRcdFx0Y29uc3QgdGRpZmYgPSAodGFyZ2V0LnRpbWUgKiB0aW1lcmF0ZSkgLSAoc291cmNlLnRpbWUgKiB0aW1lcmF0ZSlcblx0XHRcdFx0XHRcdGNvbnN0IHhTbG9wZSA9ICh0YXJnZXQueCAtIHNvdXJjZS54KSAvIHRkaWZmXG5cdFx0XHRcdFx0XHRjb25zdCB5U2xvcGUgPSAodGFyZ2V0LnkgLSBzb3VyY2UueSkgLyB0ZGlmZlxuXHRcdFx0XHRcdFx0Y29uc3Qgd1Nsb3BlID0gKHRhcmdldC53aWR0aCAtIHNvdXJjZS53aWR0aCkgLyB0ZGlmZlxuXHRcdFx0XHRcdFx0Y29uc3QgaFNsb3BlID0gKHRhcmdldC5oZWlnaHQgLSBzb3VyY2UuaGVpZ2h0KSAvIHRkaWZmXG5cdFx0XHRcdFx0XHRjb25zdCBzRnJhbWUgPSBNYXRoLnJvdW5kKHNvdXJjZS50aW1lICogdGltZXJhdGUpXG5cdFx0XHRcdFx0XHRjb25zdCB0RnJhbWUgPSBNYXRoLnJvdW5kKHRhcmdldC50aW1lICogdGltZXJhdGUpXG5cdFx0XHRcdFx0XHRmb3IgKGxldCBrID0gc0ZyYW1lICsgMTsgayA8PSB0RnJhbWU7IGsrKykge1xuXHRcdFx0XHRcdFx0XHRsZXQgb2ZmID0gayAtIE1hdGgucm91bmQoc291cmNlLnRpbWUgKiB0aW1lcmF0ZSlcblx0XHRcdFx0XHRcdFx0bGV0IGludGVycG9sWCA9IChzb3VyY2UueCArICh4U2xvcGUgKiBvZmYpKS50b0ZpeGVkKDIpXG5cdFx0XHRcdFx0XHRcdGxldCBpbnRlcnBvbFkgPSAoc291cmNlLnkgKyAoeVNsb3BlICogb2ZmKSkudG9GaXhlZCgyKVxuXHRcdFx0XHRcdFx0XHRsZXQgaW50ZXJwb2xXID0gKHNvdXJjZS53aWR0aCArICh3U2xvcGUgKiBvZmYpKS50b0ZpeGVkKDIpXG5cdFx0XHRcdFx0XHRcdGxldCBpbnRlcnBvbEggPSAoc291cmNlLmhlaWdodCArIChoU2xvcGUgKiBvZmYpKS50b0ZpeGVkKDIpXG5cdFx0XHRcdFx0XHRcdHRlbXAuYW5ub3RhdGlvbnNbaV0uaW5jaWRlbnRzLnNwbGljZShqICsgMSwgMCwgKHtcblx0XHRcdFx0XHRcdFx0XHRpZDogYCR7dGltZU5vd31gLCBuYW1lOiBgJHt0aW1lTm93fWAsIHg6IGludGVycG9sWCwgeTogaW50ZXJwb2xZLCBoZWlnaHQ6IGludGVycG9sSCwgd2lkdGg6IGludGVycG9sVywgdGltZTogaywgc3RhdHVzLCBwYXJlbnROYW1lOiBpbnRlcnBvbGF0ZWRSZXN1bHQuYW5ub3RhdGlvbnNbaV0ucGFyZW50TmFtZSwgbGFiZWw6IGludGVycG9sYXRlZFJlc3VsdC5hbm5vdGF0aW9uc1tpXS5sYWJlbCwgZ2VuZXJhdGVkOiAxXG5cdFx0XHRcdFx0XHRcdH0pKTtcblxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0fSAvL2Nsb3NlIGlmIFxuXG5cdFx0XHRcdFx0aWYgKChqID09IGFubm90SW5jaWRlbnRMZW5ndGggLSAxKSAmJiAoaW50ZXJwb2xhdGVkUmVzdWx0LmFubm90YXRpb25zW2ldLmluY2lkZW50c1tqXS5zdGF0dXMgPT0gXCJTaG93XCIgfHwgaW50ZXJwb2xhdGVkUmVzdWx0LmFubm90YXRpb25zW2ldLmluY2lkZW50c1tqXS5zdGF0dXMgPT0gXCJcIiB8fCBpbnRlcnBvbGF0ZWRSZXN1bHQuYW5ub3RhdGlvbnNbaV0uaW5jaWRlbnRzW2ogKyAxXS5zdGF0dXMgPT0gXCJTcGxpdFwiKSkge1xuXG5cdFx0XHRcdFx0XHRjb25zdCBzb3VyY2UgPSBpbnRlcnBvbGF0ZWRSZXN1bHQuYW5ub3RhdGlvbnNbaV0uaW5jaWRlbnRzW2pdXG5cdFx0XHRcdFx0XHRjb25zdCB0YXJnZXQgPSBpbnRlcnBvbGF0ZWRSZXN1bHQuYW5ub3RhdGlvbnNbaV0uaW5jaWRlbnRzW2pdXG5cdFx0XHRcdFx0XHRjb25zdCB0ZGlmZiA9IChkdXJhdGlvbiAqIHRpbWVyYXRlKSAtIChzb3VyY2UudGltZSAqIHRpbWVyYXRlKVxuXHRcdFx0XHRcdFx0Y29uc3QgeFNsb3BlID0gKHRhcmdldC54IC0gc291cmNlLngpIC8gdGRpZmZcblx0XHRcdFx0XHRcdGNvbnN0IHlTbG9wZSA9ICh0YXJnZXQueSAtIHNvdXJjZS55KSAvIHRkaWZmXG5cdFx0XHRcdFx0XHRjb25zdCB3U2xvcGUgPSAodGFyZ2V0LndpZHRoIC0gc291cmNlLndpZHRoKSAvIHRkaWZmXG5cdFx0XHRcdFx0XHRjb25zdCBoU2xvcGUgPSAodGFyZ2V0LmhlaWdodCAtIHNvdXJjZS5oZWlnaHQpIC8gdGRpZmZcblx0XHRcdFx0XHRcdGNvbnN0IHNGcmFtZSA9IE1hdGgucm91bmQoc291cmNlLnRpbWUgKiB0aW1lcmF0ZSlcblx0XHRcdFx0XHRcdGNvbnN0IHRGcmFtZSA9IE1hdGgucm91bmQodGFyZ2V0LnRpbWUgKiB0aW1lcmF0ZSlcblx0XHRcdFx0XHRcdGZvciAobGV0IGsgPSBzRnJhbWUgKyAxOyBrIDw9IHRGcmFtZTsgaysrKSB7XG5cdFx0XHRcdFx0XHRcdGxldCBvZmYgPSBrIC0gTWF0aC5yb3VuZChzb3VyY2UudGltZSAqIHRpbWVyYXRlKVxuXHRcdFx0XHRcdFx0XHRsZXQgaW50ZXJwb2xYID0gc291cmNlLnggKyAoeFNsb3BlICogb2ZmKVxuXHRcdFx0XHRcdFx0XHRsZXQgaW50ZXJwb2xZID0gc291cmNlLnkgKyAoeVNsb3BlICogb2ZmKVxuXHRcdFx0XHRcdFx0XHRsZXQgaW50ZXJwb2xXID0gc291cmNlLndpZHRoICsgKHdTbG9wZSAqIG9mZilcblx0XHRcdFx0XHRcdFx0bGV0IGludGVycG9sSCA9IHNvdXJjZS5oZWlnaHQgKyAoaFNsb3BlICogb2ZmKVxuXHRcdFx0XHRcdFx0XHR0ZW1wLmFubm90YXRpb25zW2ldLmluY2lkZW50cy5zcGxpY2UoaiArIDEsIDAsICh7XG5cdFx0XHRcdFx0XHRcdFx0aWQ6IGAke3RpbWVOb3d9YCwgbmFtZTogYCR7dGltZU5vd31gLCB4OiBpbnRlcnBvbFgsIHk6IGludGVycG9sWSwgaGVpZ2h0OiBpbnRlcnBvbEgsIHdpZHRoOiBpbnRlcnBvbFcsIHRpbWU6IGssIHN0YXR1cywgcGFyZW50TmFtZTogdGVtcC5hbm5vdGF0aW9uc1tpXS5wYXJlbnROYW1lLCBsYWJlbDogaW50ZXJwb2xhdGVkUmVzdWx0LmFubm90YXRpb25zW2ldLmxhYmVsLCBnZW5lcmF0ZWQ6IDFcblx0XHRcdFx0XHRcdFx0fSkpO1xuXG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR9IC8vY2xvc2Ugc2Vjb25kIGlmXG5cblxuXG5cdFx0XHRcdH0gLy9jbG9zZSBmb3IgbG9vcCBmb3IgalxuXG5cblxuXHRcdFx0fSAvL2Nsb3NlIGVsc2UtaWYgYW5ub3RsZW5ndGg+MVxuXG5cdFx0fSAvL2Nsb3NlIGZvciBsb29wIGZvciBpXG5cblx0XHQvL3NvcnQgdGhlIHRlbXAgb2JqZWN0IGJhc2VkIG9uIHRpbWUvZnJhbWUgdmFsdWVcblx0XHRsZXQgaW50ZXJwb2xfZGF0YV9hcnIgPSBbXSwgc25vID0gMVxuXHRcdGZvciAobGV0IHggPSAwOyB4IDwgdGVtcC5hbm5vdGF0aW9ucy5sZW5ndGg7IHgrKykge1xuXHRcdFx0Zm9yIChsZXQgeSA9IDA7IHkgPCB0ZW1wLmFubm90YXRpb25zW3hdLmluY2lkZW50cy5sZW5ndGg7IHkrKykge1xuXHRcdFx0XHRpZiAoISh0ZW1wLmFubm90YXRpb25zW3hdLmluY2lkZW50c1t5XS50aW1lID4gMCAmJiB0ZW1wLmFubm90YXRpb25zW3hdLmluY2lkZW50c1t5XS50aW1lIDwgMSkpXG5cdFx0XHRcdFx0aW50ZXJwb2xfZGF0YV9hcnIucHVzaCh0ZW1wLmFubm90YXRpb25zW3hdLmluY2lkZW50c1t5XSlcblx0XHRcdH1cblx0XHR9XG5cblx0XHRmb3IgKGxldCBwID0gMDsgcCA8IGludGVycG9sX2RhdGFfYXJyLmxlbmd0aDsgcCsrKSB7XG5cdFx0XHRmb3IgKGxldCBxID0gMCwgc3RvcCA9IGludGVycG9sX2RhdGFfYXJyLmxlbmd0aCAtIHAgLSAxOyBxIDwgc3RvcDsgcSsrKSB7XG5cdFx0XHRcdGlmIChpbnRlcnBvbF9kYXRhX2FycltxXS50aW1lID09IGludGVycG9sX2RhdGFfYXJyW3EgKyAxXS50aW1lKSB7XG5cdFx0XHRcdFx0dmFyIHN3YXAgPSBpbnRlcnBvbF9kYXRhX2FycltxXTtcblx0XHRcdFx0XHRpbnRlcnBvbF9kYXRhX2FycltxXSA9IGludGVycG9sX2RhdGFfYXJyW3EgKyAxXTtcblx0XHRcdFx0XHRpbnRlcnBvbF9kYXRhX2FycltxICsgMV0gPSBzd2FwO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChpbnRlcnBvbF9kYXRhX2FycltxXS50aW1lID4gaW50ZXJwb2xfZGF0YV9hcnJbcSArIDFdLnRpbWUpIHtcblx0XHRcdFx0XHR2YXIgc3dhcCA9IGludGVycG9sX2RhdGFfYXJyW3FdO1xuXHRcdFx0XHRcdGludGVycG9sX2RhdGFfYXJyW3FdID0gaW50ZXJwb2xfZGF0YV9hcnJbcSArIDFdO1xuXHRcdFx0XHRcdGludGVycG9sX2RhdGFfYXJyW3EgKyAxXSA9IHN3YXA7XG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXHRcdH1cblx0XHQvL3NvcnRpbmcgZW5kc1xuXG5cblx0XHQvL2FkZCBTbm8vSUQgdG8gZWFjaCByb3dcblx0XHRmb3IgKGxldCBpZCA9IDA7IGlkIDwgaW50ZXJwb2xfZGF0YV9hcnIubGVuZ3RoOyBpZCsrKSB7XG5cdFx0XHRpbnRlcnBvbF9kYXRhX2FycltpZF0uc2VyaWFsID0gaW50ZXJwb2xfZGF0YV9hcnJbaWRdLmxhYmVsXG5cdFx0XHQvL3NubysrXG5cdFx0fVxuXG5cdFx0Zm9yIChsZXQgcGEgPSAwOyBwYSA8IGludGVycG9sX2RhdGFfYXJyLmxlbmd0aDsgcGErKykge1xuXHRcdFx0Zm9yIChsZXQgcWEgPSAwLCBzdG9wYSA9IGludGVycG9sX2RhdGFfYXJyLmxlbmd0aCAtIHBhIC0gMTsgcWEgPCBzdG9wYTsgcWErKykge1xuXHRcdFx0XHQvLyBpZihpbnRlcnBvbF9kYXRhX2FycltxYV0udGltZSA9PSBpbnRlcnBvbF9kYXRhX2FycltxYSsxXS50aW1lKXtcblx0XHRcdFx0Ly8gXHR2YXIgc3dhcGEgPSBpbnRlcnBvbF9kYXRhX2FycltxYV07XG5cdFx0XHRcdC8vIFx0aW50ZXJwb2xfZGF0YV9hcnJbcWFdID0gaW50ZXJwb2xfZGF0YV9hcnJbcWErMV07XG5cdFx0XHRcdC8vIFx0aW50ZXJwb2xfZGF0YV9hcnJbcWErMV0gPSBzd2FwYTtcblx0XHRcdFx0Ly8gfVxuXHRcdFx0XHRpZiAoaW50ZXJwb2xfZGF0YV9hcnJbcWFdLnNlcmlhbCA+IGludGVycG9sX2RhdGFfYXJyW3FhICsgMV0uc2VyaWFsKSB7XG5cdFx0XHRcdFx0dmFyIHN3YXBhID0gaW50ZXJwb2xfZGF0YV9hcnJbcWFdO1xuXHRcdFx0XHRcdGludGVycG9sX2RhdGFfYXJyW3FhXSA9IGludGVycG9sX2RhdGFfYXJyW3FhICsgMV07XG5cdFx0XHRcdFx0aW50ZXJwb2xfZGF0YV9hcnJbcWEgKyAxXSA9IHN3YXBhO1xuXHRcdFx0XHR9XG5cblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gZm9yKGxldCBsYWJlbG5vPTA7IGxhYmVsbm88aW50ZXJwb2xfZGF0YV9hcnIubGVuZ3RoOyBsYWJlbG5vKyspe1xuXHRcdC8vIFx0dmFyIG4gPSBpbnRlcnBvbF9kYXRhX2FycltsYWJlbG5vXS5sYWJlbC5zZWFyY2goXCItXCIpO1xuXHRcdC8vIFx0aWYobjwwKXtcblx0XHQvLyBcdFx0aW50ZXJwb2xfZGF0YV9hcnJbbGFiZWxub10uc2VyaWFsID0gaW50ZXJwb2xfZGF0YV9hcnJbbGFiZWxub10ubGFiZWxcblx0XHQvLyBcdH1cblx0XHQvLyBcdGVsc2Uge1xuXHRcdC8vIFx0XHRpbnRlcnBvbF9kYXRhX2FycltsYWJlbG5vXS5zZXJpYWwgPSBpbnRlcnBvbF9kYXRhX2FycltsYWJlbG5vXS5sYWJlbFtuKzFdXG5cdFx0Ly8gXHR9XG5cdFx0Ly8gfVxuXHRcdC8vU25vL0lEIGFkZGVkXG5cblx0XHR0aGlzLnNldFN0YXRlKHsgaW50ZXJwb2xhdGlvblJlc3VsdDogaW50ZXJwb2xfZGF0YV9hcnIgfSk7XG5cdFx0Ly8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJleHBvcnQtaW50ZXJwb2xcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblx0XHR0aGlzLmNyZWF0ZVRhYmxlKGludGVycG9sX2RhdGFfYXJyKTtcblx0fVxuXHQvL2Z1bmN0aW9uIGZvciBnZXR0aW5nIGludGVycG9sYXRlZCBkYXRhIGVuZHNcblxuXHRjcmVhdGVUYWJsZSA9IGUgPT4ge1xuXHRcdGxldCB0ZW1wID0gZTtcblx0XHQvLyBsZXQgdGVtcCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5zdGF0ZS5pbnRlcnBvbGF0aW9uUmVzdWx0KSk7XG5cdFx0dmFyIHRhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnRlcnBvbC10YWJsZVwiKTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRlbXAubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuXHRcdFx0cm93LmNsYXNzTGlzdC5hZGQoXCJpbnRlcnBvbHRhYmxlY2xhc3N0YWJsZXRyXCIpXG5cdFx0XHR2YXIgY2VsbF9zbm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpXG5cdFx0XHRjZWxsX3Nuby5jbGFzc0xpc3QuYWRkKFwiaW50ZXJwb2x0YWJsZWNsYXNzdGR0aFwiKVxuXHRcdFx0Y2VsbF9zbm8uaW5uZXJIVE1MID0gdGVtcFtpXS5zZXJpYWxcblx0XHRcdHJvdy5hcHBlbmRDaGlsZChjZWxsX3Nubylcblx0XHRcdHZhciBjZWxsX3hfbWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcblx0XHRcdGNlbGxfeF9taW4uY2xhc3NMaXN0LmFkZChcImludGVycG9sdGFibGVjbGFzc3RkdGhcIilcblx0XHRcdHZhciBjZWxsX3lfbWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcblx0XHRcdGNlbGxfeV9taW4uY2xhc3NMaXN0LmFkZChcImludGVycG9sdGFibGVjbGFzc3RkdGhcIilcblx0XHRcdHZhciBjZWxsX3dpZHRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcblx0XHRcdGNlbGxfd2lkdGguY2xhc3NMaXN0LmFkZChcImludGVycG9sdGFibGVjbGFzc3RkdGhcIilcblx0XHRcdHZhciBjZWxsX2hlaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG5cdFx0XHRjZWxsX2hlaWdodC5jbGFzc0xpc3QuYWRkKFwiaW50ZXJwb2x0YWJsZWNsYXNzdGR0aFwiKVxuXHRcdFx0dmFyIGNlbGxfZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuXHRcdFx0Y2VsbF9mcmFtZS5jbGFzc0xpc3QuYWRkKFwiaW50ZXJwb2x0YWJsZWNsYXNzdGR0aFwiKVxuXHRcdFx0dmFyIGNlbGxfbG9zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG5cdFx0XHRjZWxsX2xvc3QuY2xhc3NMaXN0LmFkZChcImludGVycG9sdGFibGVjbGFzc3RkdGhcIilcblx0XHRcdHZhciBjZWxsX29jY2x1ZGVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcblx0XHRcdGNlbGxfb2NjbHVkZWQuY2xhc3NMaXN0LmFkZChcImludGVycG9sdGFibGVjbGFzc3RkdGhcIilcblx0XHRcdHZhciBjZWxsX2dlbmVyYXRlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG5cdFx0XHRjZWxsX2dlbmVyYXRlZC5jbGFzc0xpc3QuYWRkKFwiaW50ZXJwb2x0YWJsZWNsYXNzdGR0aFwiKVxuXHRcdFx0dmFyIGNlbGxfbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuXHRcdFx0Y2VsbF9sYWJlbC5jbGFzc0xpc3QuYWRkKFwiaW50ZXJwb2x0YWJsZWNsYXNzdGR0aFwiKVxuXHRcdFx0dmFyIGNlbGxfcGFyZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcblx0XHRcdGNlbGxfcGFyZW50LmNsYXNzTGlzdC5hZGQoXCJpbnRlcnBvbHRhYmxlY2xhc3N0ZHRoXCIpXG5cdFx0XHRjZWxsX3hfbWluLmlubmVySFRNTCA9IHRlbXBbaV0ueDtcblx0XHRcdGNlbGxfeV9taW4uaW5uZXJIVE1MID0gdGVtcFtpXS55O1xuXHRcdFx0Y2VsbF93aWR0aC5pbm5lckhUTUwgPSB0ZW1wW2ldLndpZHRoO1xuXHRcdFx0Y2VsbF9oZWlnaHQuaW5uZXJIVE1MID0gdGVtcFtpXS5oZWlnaHQ7XG5cdFx0XHRjZWxsX2ZyYW1lLmlubmVySFRNTCA9IHRlbXBbaV0udGltZTtcblx0XHRcdGNlbGxfbG9zdC5pbm5lckhUTUwgPSAwO1xuXHRcdFx0Y2VsbF9vY2NsdWRlZC5pbm5lckhUTUwgPSAwO1xuXHRcdFx0aWYgKHRlbXBbaV0uZ2VuZXJhdGVkID09IDEpIHtcblx0XHRcdFx0Y2VsbF9nZW5lcmF0ZWQuaW5uZXJIVE1MID0gMTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRjZWxsX2dlbmVyYXRlZC5pbm5lckhUTUwgPSAwO1xuXHRcdFx0fVxuXG5cdFx0XHRjZWxsX2xhYmVsLmlubmVySFRNTCA9IHRlbXBbaV0ubGFiZWw7XG5cdFx0XHRjZWxsX3BhcmVudC5pbm5lckhUTUwgPSB0ZW1wW2ldLnBhcmVudE5hbWU7XG5cdFx0XHQvL3Jvdy5hcHBlbmRDaGlsZChjZWxsX2lkKTtcblx0XHRcdHJvdy5hcHBlbmRDaGlsZChjZWxsX3hfbWluKTtcblx0XHRcdHJvdy5hcHBlbmRDaGlsZChjZWxsX3lfbWluKTtcblx0XHRcdHJvdy5hcHBlbmRDaGlsZChjZWxsX3dpZHRoKTtcblx0XHRcdHJvdy5hcHBlbmRDaGlsZChjZWxsX2hlaWdodCk7XG5cdFx0XHRyb3cuYXBwZW5kQ2hpbGQoY2VsbF9mcmFtZSk7XG5cdFx0XHRyb3cuYXBwZW5kQ2hpbGQoY2VsbF9sb3N0KTtcblx0XHRcdHJvdy5hcHBlbmRDaGlsZChjZWxsX29jY2x1ZGVkKTtcblx0XHRcdHJvdy5hcHBlbmRDaGlsZChjZWxsX2dlbmVyYXRlZCk7XG5cdFx0XHRyb3cuYXBwZW5kQ2hpbGQoY2VsbF9sYWJlbCk7XG5cdFx0XHRyb3cuYXBwZW5kQ2hpbGQoY2VsbF9wYXJlbnQpO1xuXHRcdFx0dGFibGUuYXBwZW5kQ2hpbGQocm93KTtcblx0XHR9XG5cdFx0dGhpcy5kb3dubG9hZEludGVycG9sVGFibGUoKTtcblx0fVxuXG5cdGV4cG9ydF90YWJsZV90b19jc3YgPSAoaHRtbCwgZmlsZW5hbWUpID0+IHtcblx0XHR2YXIgY3N2ID0gW107XG5cdFx0dmFyIHJvd3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwidGFibGUgdHJcIik7XG5cdFx0Ly8gdmFyIHJvd3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiaW50ZXJwb2x0YWJsZWNsYXNzdGFibGV0clwiKTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHJvd3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciByb3cgPSBbXSwgY29scyA9IHJvd3NbaV0ucXVlcnlTZWxlY3RvckFsbChcInRkLCB0aFwiKTtcblx0XHRcdC8vIHZhciByb3cgPSBbXSwgY29scyA9IHJvd3NbaV0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImludGVycG9sdGFibGVjbGFzc3RkdGhcIik7XG5cdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNvbHMubGVuZ3RoOyBqKyspXG5cdFx0XHRcdHJvdy5wdXNoKGNvbHNbal0uaW5uZXJUZXh0KTtcblx0XHRcdGNzdi5wdXNoKHJvdy5qb2luKFwiLFwiKSk7XG5cdFx0fVxuXHRcdC8vIERvd25sb2FkIENTVlxuXHRcdHRoaXMuZG93bmxvYWRfY3N2KGNzdi5qb2luKFwiXFxuXCIpLCBmaWxlbmFtZSk7XG5cdH1cblxuXG5cblx0ZG93bmxvYWRfY3N2ID0gKGNzdiwgZmlsZW5hbWUpID0+IHtcblx0XHR2YXIgY3N2RmlsZTtcblx0XHR2YXIgZG93bmxvYWRMaW5rO1xuXHRcdC8vIENTViBGSUxFXG5cdFx0Y3N2RmlsZSA9IG5ldyBCbG9iKFtjc3ZdLCB7IHR5cGU6IFwidGV4dC9jc3ZcIiB9KTtcblx0XHQvLyBEb3dubG9hZCBsaW5rXG5cdFx0ZG93bmxvYWRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5cdFx0Ly8gRmlsZSBuYW1lXG5cdFx0ZG93bmxvYWRMaW5rLmRvd25sb2FkID0gZmlsZW5hbWU7XG5cdFx0Ly8gV2UgaGF2ZSB0byBjcmVhdGUgYSBsaW5rIHRvIHRoZSBmaWxlXG5cdFx0ZG93bmxvYWRMaW5rLmhyZWYgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChjc3ZGaWxlKTtcblx0XHQvLyBNYWtlIHN1cmUgdGhhdCB0aGUgbGluayBpcyBub3QgZGlzcGxheWVkXG5cdFx0ZG93bmxvYWRMaW5rLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHQvLyBBZGQgdGhlIGxpbmsgdG8geW91ciBET01cblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRvd25sb2FkTGluayk7XG5cdFx0Ly8gTGFuemFtb3Ncblx0XHRkb3dubG9hZExpbmsuY2xpY2soKTtcblx0fVxuXG5cdGRvd25sb2FkSW50ZXJwb2xUYWJsZSA9ICgpID0+IHtcblx0XHR2YXIgaHRtbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW50ZXJwb2wtdGFibGVcIikub3V0ZXJIVE1MO1xuXHRcdHRoaXMuZXhwb3J0X3RhYmxlX3RvX2NzdihodG1sLCBcInRhYmxlLmNzdlwiKTtcblx0fVxuXG5cblx0aGFuZGxlVmlkZW9Mb2FkID0gKGUpID0+IHtcblx0XHRsZXQgZmlsZXMgPSBlLnRhcmdldC5maWxlcztcblx0XHRpZiAoZmlsZXMubGVuZ3RoID09PSAxKSB7XG5cdFx0XHRsZXQgZmlsZSA9IGZpbGVzWzBdO1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdHZpZGVvRmlsZVVSTDogVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKSxcblx0XHRcdFx0dmlkZW9GaWxlT2JqZWN0OiBmaWxlXG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXG5cblxuXHRkb3dubG9hZCA9IChjb250ZW50LCBmaWxlTmFtZSwgY29udGVudFR5cGUpID0+IHtcblx0XHRjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5cdFx0Y29uc3QgZmlsZSA9IG5ldyBCbG9iKFtjb250ZW50XSwgeyB0eXBlOiBjb250ZW50VHlwZSB9KTtcblx0XHRhLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpO1xuXHRcdGEuZG93bmxvYWQgPSBmaWxlTmFtZTtcblx0XHRhLmNsaWNrKCk7XG5cdH1cblxuXHRvbkRvd25sb2FkID0gKCkgPT4ge1xuXHRcdGxldCB0ZW1wID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlLnJlc3VsdCkpXG5cdFx0Zm9yIChsZXQgbiA9IDA7IG4gPCB0ZW1wLmFubm90YXRpb25zLmxlbmd0aDsgbisrKSB7XG5cdFx0XHRkZWxldGUgdGVtcC5hbm5vdGF0aW9uc1tuXS5uYW1lXG5cdFx0fVxuXHRcdGZvciAobGV0IGEgPSAwOyBhIDwgdGVtcC5hbm5vdGF0aW9ucy5sZW5ndGg7IGErKykge1xuXHRcdFx0Zm9yIChsZXQgYiA9IDA7IGIgPCB0ZW1wLmFubm90YXRpb25zW2FdLmluY2lkZW50cy5sZW5ndGg7IGIrKykge1xuXHRcdFx0XHRkZWxldGUgdGVtcC5hbm5vdGF0aW9uc1thXS5pbmNpZGVudHNbYl0ubmFtZTtcblx0XHRcdFx0ZGVsZXRlIHRlbXAuYW5ub3RhdGlvbnNbYV0uaW5jaWRlbnRzW2JdLmxhYmVsO1xuXHRcdFx0fVxuXHRcdH1cblx0XHR0aGlzLmRvd25sb2FkKEpTT04uc3RyaW5naWZ5KHRlbXApLCBcInlvdXJmaWxlLmpzb25cIiwgXCJ0ZXh0L3BsYWluXCIpO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXG5cdFx0Y29uc3QgeyByZXN1bHQsIGlucHV0LCBwYXJhbXMgfSA9IHRoaXMuc3RhdGVcblx0XHRsZXQgZGF0YVN0ciA9IFwiZGF0YTp0ZXh0L2pzb247Y2hhcnNldD11dGYtOCxcIiArIGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PD5cblx0XHRcdFx0PENvbnRhaW5lciBmbHVpZCBjbGFzc05hbWU9XCJweS0zXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZmZmZcIiwgZm9udEZhbWlseTogXCJBcnZvLCBzZXJpXCIgfX0+XG5cblx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwiZGlzcGxheS00ICB0ZXh0LWNlbnRlclwiIHN0eWxlPXt7IGNvbG9yOiBcIiMwMDAwMDBcIiB9fT5Dcm93ZE1PVDogQSBWaWRlbyBBbm5vdGF0aW9uIFRvb2w8L2gxPlxuXHRcdFx0XHRcdDxSb3cgY2xhc3NOYW1lPVwibXktMyBjb2wteHMtMTIgY29sLWxnLTEwIG9mZnNldC1sZy0xXCI+XG5cdFx0XHRcdFx0XHQ8Q29sPlxuXHRcdFx0XHRcdFx0XHQ8SW5zdHJ1Y3Rpb25zIC8+XG5cdFx0XHRcdFx0XHQ8L0NvbD5cblx0XHRcdFx0XHQ8L1Jvdz5cblx0XHRcdFx0XHQ8Q2FyZCBjbGFzc05hbWU9XCJtYi0yIGNvbC14cy04IGNvbC1sZy02IG9mZnNldC1sZy0xXCIgc3R5bGU9e3sgYm9yZGVyQ29sb3I6IFwiIzZiYzNiOVwiLCBib3JkZXI6IFwiMXB4IHNvbGlkICM2YmMzYjlcIiwgcGFkZGluZ1RvcDogMjAsIHBhZGRpbmdCb3R0b206IDIwLCBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZmZmZlwiIH19PlxuXHRcdFx0XHRcdFx0PENhcmRCb2R5PlxuXHRcdFx0XHRcdFx0XHQ8Rm9ybSBjbGFzc05hbWU9XCJtYi0yIGNvbC14cy0xMiBjb2wtbGctMTAgb2Zmc2V0LWxnLTFcIiBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuXHRcdFx0XHRcdFx0XHRcdDxGb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8TGFiZWwgZm9yPVwiVVJMXCI+PGI+RW50ZXIgdGhlIHZpZGVvIFVSTDo8L2I+PC9MYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdDxJbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ1cmxcIiBwbGFjZWhvbGRlcj1cImh0dHA6Ly8uLi5cIiBzdHlsZT17eyBib3JkZXJDb2xvcjogXCIjNmJjM2I5XCIsIGJvcmRlcjogXCIxcHggc29saWQgIzZiYzNiOVwiIH19IHJlZj17dGhpcy52aWRlb0ZpbGVJbnB1dH0gdmFsdWU9e2lucHV0LnVybH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSAvPlxuXHRcdFx0XHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0XHRcdDxoNT5PUjwvaDU+XG5cdFx0XHRcdFx0XHRcdFx0PEZvcm1Hcm91cD5cblx0XHRcdFx0XHRcdFx0XHRcdDxMYWJlbCBmb3I9XCJleGFtcGxlRmlsZVwiIGNsYXNzTmFtZT1cInByLTJcIj48Yj5VcGxvYWQgVmlkZW88L2I+PC9MYWJlbD48YnI+PC9icj5cblx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiZmlsZVwiIG5hbWU9XCJ2aWRlb2ZpbGVcIiBpZD1cInZpZGVvRmlsZVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVZpZGVvTG9hZH0gLz5cblx0XHRcdFx0XHRcdFx0XHQ8L0Zvcm1Hcm91cD5cblx0XHRcdFx0XHRcdFx0XHQ8aHIgc3R5bGU9e3tib3JkZXI6IFwiMC43cHggc29saWQgIzZiYzNiOVwifX0vPlxuXHRcdFx0XHRcdFx0XHRcdDxGb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8TGFiZWwgZm9yPVwiVVJMXCI+PGI+RHVyYXRpb24gb2YgdGhlIFZpZGVvIChpbiBzZWNvbmRzKTo8L2I+PC9MYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdDxJbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ2aWRlb0R1cmF0aW9uXCIgc3R5bGU9e3sgYm9yZGVyQ29sb3I6IFwiIzZiYzNiOVwiLCBib3JkZXI6IFwiMXB4IHNvbGlkICM2YmMzYjlcIiB9fSBwbGFjZWhvbGRlcj1cIjUuMDBcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVWaWREdXJhdGlvbkNoYW5nZX0gLz5cblx0XHRcdFx0XHRcdFx0XHQ8L0Zvcm1Hcm91cD5cblx0XHRcdFx0XHRcdFx0XHQ8Rm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0XHRcdFx0PExhYmVsIGZvcj1cIlVSTFwiPjxiPkZyYW1lcmF0ZSBvZiB0aGUgVmlkZW86PC9iPjwvTGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8SW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidmlkZW9GcmFtZXJhdGVcIiBzdHlsZT17eyBib3JkZXJDb2xvcjogXCIjNmJjM2I5XCIsIGJvcmRlcjogXCIxcHggc29saWQgIzZiYzNiOVwiIH19IHBsYWNlaG9sZGVyPVwiNjBcIiB2YWx1ZT17dGhpcy5zdGF0ZS52aWRlb0ZyYW1lcmF0ZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlVmlkRnJhbWVDaGFuZ2V9IC8+XG5cdFx0XHRcdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHRcdFx0PEZvcm1Hcm91cD5cblx0XHRcdFx0XHRcdFx0XHRcdDxMYWJlbCBmb3I9XCJBbm5vdGF0aW9uIFdpZHRoXCI+PGI+VmlkZW8gV2lkdGg8L2I+PC9MYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdDxJbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ2aWRlb1dpZHRoXCIgc3R5bGU9e3sgYm9yZGVyQ29sb3I6IFwiIzZiYzNiOVwiLCBib3JkZXI6IFwiMXB4IHNvbGlkICM2YmMzYjlcIiB9fSBwbGFjZWhvbGRlcj1cIm51bWJlclwiIHZhbHVlPXtpbnB1dC52aWRlb1dpZHRofSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IC8+XG5cdFx0XHRcdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHRcdFx0PEZvcm1Hcm91cD5cblx0XHRcdFx0XHRcdFx0XHRcdDxMYWJlbCBmb3I9XCJleGFtcGxlRmlsZVwiIGNsYXNzTmFtZT1cInByLTJcIj48Yj5VcGxvYWQgUHJldmlvdXMgQW5ub3RhdGlvbnM8L2I+PC9MYWJlbD48YnI+PC9icj5cblx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiZmlsZVwiIG5hbWU9XCJmaWxlXCIgaWQ9XCJleGFtcGxlRmlsZVwiIHJlZj17dGhpcy5maWxlSW5wdXR9IC8+XG5cdFx0XHRcdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHRcdFx0PGJyPjwvYnI+XG5cdFx0XHRcdFx0XHRcdFx0PFJvdyBzdHlsZT17eyBwYWRkaW5nTGVmdDogMTAgfX0+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8Q29sIHN0eWxlPXt7IHBhZGRpbmc6IDAgfX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCIgc3R5bGU9e3sgY29sb3I6ICcjZmZmZmZmJywgd2lkdGg6IDIwMCB9fT5TdWJtaXQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvQ29sPlxuXHRcdFx0XHRcdFx0XHRcdDwvUm93PlxuXHRcdFx0XHRcdFx0XHQ8L0Zvcm0+XG5cdFx0XHRcdFx0XHQ8L0NhcmRCb2R5PlxuXHRcdFx0XHRcdFx0PENhcmQgc3R5bGU9e3sgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgbGVmdDogNjUwLCB0b3A6IDEyMCwgaGVpZ2h0OiA0MDAsIG1heFdpZHRoOiA1MDAsIHBhZGRpbmc6IDIwLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZkMWRjJywgYmFja2dyb3VuZEltYWdlOiBcImxpbmVhci1ncmFkaWVudCgtNDVkZWcsICNlZTc3NTIsICAjZTczYzdlLCAjMjNhNmQ1LCMyM2Q1YWIpXCIsYmFja2dyb3VuZFNpemU6IFwiNDAwJSA0MDAlXCIsIGFuaW1hdGlvbjpcImNoYW5nZSAxMHMgZWFzZS1pbi1vdXQgaW5maW5pdGVcIiwgb3BhY2l0eTogMC44IH19IGNsYXNzTmFtZT1cIm1iLTIgY29sLXhzLTQgY29sLWxnLTJcIj5cblx0XHRcdFx0XHRcdFx0PENhcmRCb2R5PlxuXHRcdFx0XHRcdFx0XHRcdDxoNCBzdHlsZT17eyBjb2xvcjogXCIjZmZmZmZmXCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiwgbWFyZ2luQm90dG9tOiAxNSwgbGV0dGVyU3BhY2luZzogMiwgbGluZUhlaWdodDpcIjEuNXJlbVwiLCBmb250U2l6ZTogMjgsIGZvbnRXZWlnaHQ6IFwiYm9sZFwifX0+Q3Jvd2RNT1Q8L2g0PlxuXHRcdFx0XHRcdFx0XHRcdDxwIHN0eWxlPXt7cGFkZGluZzogMTAsIGNvbG9yOiBcIiNmZmZmZmZcIiwgbWFyZ2luOjAsIGZvbnRGYW1pbHk6ICdBcnZvLCBzZXJpZicsIGxldHRlclNwYWNpbmc6IFwiMC4wNXJlbVwiLCBsaW5lSGVpZ2h0OlwiMS41cmVtXCJ9fT5XZSBpbnRyb2R1Y2UgYSBuZXcgdmlkZW8gYW5ub3RhdGlvbiBwbGF0Zm9ybSBmb3IgTU9ULCB3aGljaCB3ZSBjYWxsIDxiPkNyb3dkTU9UPC9iPi4gSXQgaXMgZGVzaWduZWQgdG8gc3VwcG9ydCBsaW5lYWdlIHRyYWNraW5nIGFzIHdlbGwgYXMgdG8gbm90IHJlcXVpcmUgZXhwZXJ0IHdvcmtlcnMgZm9yIHZpZGVvIGFubm90YXRpb24uPC9wPlxuXHRcdFx0XHRcdFx0XHRcdHsvKiA8dWwgc3R5bGU9e3tjb2xvcjogXCIjZmZmZmZmXCJ9fT5cblx0XHRcdFx0XHRcdFx0XHRcdDxsaSBzdHlsZT17eyBwYWRkaW5nOiAxMCB9fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGk+VmlkZW8gbGluay9maWxlPC9pPiBwcm92aWRlZCB3aWxsIHJlcGxhY2UgdGhlIHZpZGVvIGZpbGUgaW4gdGhlIGFubm90YXRpb24gcGxheWVyIGJlbG93LlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdDxsaSBzdHlsZT17eyBwYWRkaW5nOiAxMCB9fT5WaWRlbyA8aT5mcmFtZS1yYXRlICYgZHVyYXRpb248L2k+IGhlbHBzIGdlbmVyYXRlZCBhY2N1cmF0ZSBpbnRlcnBvbGF0aW9ucy48L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpIHN0eWxlPXt7IHBhZGRpbmc6IDEwIH19PkRlZmF1bHQgdmFsdWUgZm9yIGZyYW1lLXJhdGUgYW5kIGR1cmF0aW9uIGFyZSA8aT42MCAoZnBzKSBhbmQgNS4wNCAoc2Vjb25kcyk8L2k+IHJlc3BlY3RpdmVseS48L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpIHN0eWxlPXt7IHBhZGRpbmc6IDEwIH19PjxpPlZpZGVvIHdpZHRoPC9pPiBoZWxwcyBkZXRlcm1pbmUgdGhlIGNhbnZhcyBzaXplIGZvciB2aWRlbyBkaXNwbGF5LjwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0PC91bD4gKi99XG5cdFx0XHRcdFx0XHRcdDwvQ2FyZEJvZHk+XG5cdFx0XHRcdFx0XHQ8L0NhcmQ+XG5cdFx0XHRcdFx0PC9DYXJkPlxuXHRcdFx0XHRcdHsvKiA8Rm9ybSBjbGFzc05hbWU9XCJtYi0yIGNvbC14cy0xMiBjb2wtbGctMTAgb2Zmc2V0LWxnLTFcIiBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuXHRcdFx0XHRcdFx0PEZvcm1Hcm91cD5cblx0XHRcdFx0XHRcdFx0PExhYmVsIGZvcj1cIlVSTFwiPjxiPkVudGVyIHRoZSB2aWRlbyBVUkw6PC9iPjwvTGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxJbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ1cmxcIiBwbGFjZWhvbGRlcj1cImh0dHA6Ly8uLi5cIiByZWY9e3RoaXMudmlkZW9GaWxlSW5wdXR9IHZhbHVlPXtpbnB1dC51cmx9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gLz5cblx0XHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0PGgzPk9SPC9oMz5cblx0XHRcdFx0XHRcdDxGb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDxMYWJlbCBmb3I9XCJleGFtcGxlRmlsZVwiIGNsYXNzTmFtZT1cInByLTJcIj48Yj5VcGxvYWQgVmlkZW88L2I+PC9MYWJlbD48YnI+PC9icj5cblx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJmaWxlXCIgbmFtZT1cInZpZGVvZmlsZVwiIGlkPVwidmlkZW9GaWxlXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVmlkZW9Mb2FkfSAvPlxuXHRcdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHQ8Rm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0XHQ8TGFiZWwgZm9yPVwiVVJMXCI+PGI+RHVyYXRpb24gb2YgdGhlIFZpZGVvIChpbiBzZWNvbmRzKTo8L2I+PC9MYWJlbD5cblx0XHRcdFx0XHRcdFx0PElucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInZpZGVvRHVyYXRpb25cIiBwbGFjZWhvbGRlcj1cIjUuMDBcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVWaWREdXJhdGlvbkNoYW5nZX0vPlxuXHRcdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHQ8Rm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0XHQ8TGFiZWwgZm9yPVwiVVJMXCI+PGI+RnJhbWVyYXRlIG9mIHRoZSBWaWRlbzo8L2I+PC9MYWJlbD5cblx0XHRcdFx0XHRcdFx0PElucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInZpZGVvRnJhbWVyYXRlXCIgcGxhY2Vob2xkZXI9XCI2MFwiICB2YWx1ZT17dGhpcy5zdGF0ZS52aWRlb0ZyYW1lcmF0ZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlVmlkRnJhbWVDaGFuZ2V9IC8+XG5cdFx0XHRcdFx0XHQ8L0Zvcm1Hcm91cD5cblx0XHRcdFx0XHRcdDxGb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDxMYWJlbCBmb3I9XCJBbm5vdGF0aW9uIFdpZHRoXCI+PGI+VmlkZW8gV2lkdGg8L2I+PC9MYWJlbD5cblx0XHRcdFx0XHRcdFx0PElucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInZpZGVvV2lkdGhcIiBwbGFjZWhvbGRlcj1cIm51bWJlclwiIHZhbHVlPXtpbnB1dC52aWRlb1dpZHRofSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9Lz5cblx0XHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0PEZvcm1Hcm91cD5cblx0XHRcdFx0XHRcdFx0PExhYmVsIGZvcj1cImV4YW1wbGVGaWxlXCIgY2xhc3NOYW1lPVwicHItMlwiPjxiPlVwbG9hZCBQcmV2aW91cyBBbm5vdGF0aW9uczwvYj48L0xhYmVsPjxicj48L2JyPlxuXHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImZpbGVcIiBuYW1lPVwiZmlsZVwiIGlkPVwiZXhhbXBsZUZpbGVcIiByZWY9e3RoaXMuZmlsZUlucHV0fSAvPlxuXHRcdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHQ8Um93IGNsYXNzTmFtZT1cIm15LTMgY29sLXhzLTEyIGNvbC1sZy0xMCBvZmZzZXQtbGctNlwiPlxuXHRcdFx0XHRcdFx0XHQ8Q29sPlxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCIgc3R5bGU9e3sgY29sb3I6ICcjZmZmZmZmJywgd2lkdGg6MjAwIH19PlN1Ym1pdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQ8L0NvbD5cblx0XHRcdFx0XHRcdDwvUm93PlxuXHRcdFx0XHRcdDwvRm9ybT4gKi99XG5cblx0XHRcdFx0XHQ8Um93IGNsYXNzTmFtZT1cInB5LTMgbWItMiBjb2wteHMtMTIgY29sLWxnLTEwIG9mZnNldC1sZy0xXCIgc3R5bGU9e3sgYmFja2dyb3VuZDogXCJyZ2IoMjQ2LCAyNDYsIDI0NilcIiwgbWFyZ2luVG9wOiA0MCB9fT5cblxuXHRcdFx0XHRcdFx0PENvbD5cblx0XHRcdFx0XHRcdFx0PFR3b0RpbWVuc2lvbmFsVmlkZW9cblx0XHRcdFx0XHRcdFx0XHRrZXk9e1xuXHRcdFx0XHRcdFx0XHRcdFx0YCR7SlNPTi5zdHJpbmdpZnkocGFyYW1zLnVybCl9XG5cdFx0XHRcdFx0XHRcdFx0ICR7SlNPTi5zdHJpbmdpZnkocGFyYW1zLmRlZmF1bHRBbm5vdGF0aW9ucyl9XG5cdFx0XHRcdFx0XHRcdFx0ICR7SlNPTi5zdHJpbmdpZnkocGFyYW1zLnZpZGVvV2lkdGgpfVxuXHRcdFx0XHRcdFx0XHRcdCAke0pTT04uc3RyaW5naWZ5KHBhcmFtcy5wcmV2aWV3SGVhZGVyKX1cblx0XHRcdFx0XHRcdFx0XHQgJHtKU09OLnN0cmluZ2lmeShwYXJhbXMucHJldmlld05vdGljZUxpc3QpfWBcblx0XHRcdFx0XHRcdFx0XHRcdC8vdGhlIGxhc3QgdGhyZWUgdG8gYmUgcmVwbGFjZWQgYnkgdGhlIHR3byBiZWxvdyBhbmQgY2hhbmdlIGRlZmF1bHRBbm5vdGF0aW9ucyB0byBhbm5vdGF0aW9uc1xuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gICR7SlNPTi5zdHJpbmdpZnkocGFyYW1zLmFubm90YXRpb25XaWR0aCl9XG5cdFx0XHRcdFx0XHRcdFx0XHQvLyAgJHtKU09OLnN0cmluZ2lmeShwYXJhbXMucHJldmlld05vdGljZXMpfWBcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0b25TdWJtaXQ9e3RoaXMuaGFuZGxlUmVzdWx0U3VibWl0fVxuXHRcdFx0XHRcdFx0XHRcdHVybD17cGFyYW1zLnVybH1cblx0XHRcdFx0XHRcdFx0XHQvL21hZGUgY2hhbmdlcyBoZXJlIGFubm90YXRpb25zIChvbiBib3RoIHNpZGVzKSBjaGFuZ2VkIHRvIGRlZmF1bHRBbm5vdGF0aW9uXG5cdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdEFubm90YXRpb25zPXtwYXJhbXMuZGVmYXVsdEFubm90YXRpb25zfVxuXHRcdFx0XHRcdFx0XHRcdHZpZGVvV2lkdGg9e3BhcmFtcy52aWRlb1dpZHRofVxuXHRcdFx0XHRcdFx0XHRcdHByZXZpZXdIZWFkZXI9e3BhcmFtcy5wcmV2aWV3SGVhZGVyfVxuXHRcdFx0XHRcdFx0XHRcdHByZXZpZXdOb3RpY2VMaXN0PXtwYXJhbXMucHJldmlld05vdGljZUxpc3R9XG5cdFx0XHRcdFx0XHRcdFx0aGFzUmV2aWV3XG5cdFx0XHRcdFx0XHRcdFx0aXNFbXB0eUNoZWNrRW5hYmxlXG5cdFx0XHRcdFx0XHRcdFx0aXNTcGxpdEVuYWJsZVxuXHRcdFx0XHRcdFx0XHRcdGlzU2hvd0hpZGVFbmFibGVcblx0XHRcdFx0XHRcdFx0XHRudW1Bbm5vdGF0aW9uc1RvQmVBZGRlZD17MjB9XG5cdFx0XHRcdFx0XHRcdFx0ZW1wdHlDaGVja1N1Ym1pc3Npb25XYXJuaW5nVGV4dD17cGFyYW1zLmVtcHR5Q2hlY2tTdWJtaXNzaW9uV2FybmluZ1RleHR9XG5cdFx0XHRcdFx0XHRcdFx0ZW1wdHlDaGVja0Fubm90YXRpb25JdGVtV2FybmluZ1RleHQ9e3BhcmFtcy5lbXB0eUNoZWNrQW5ub3RhdGlvbkl0ZW1XYXJuaW5nVGV4dH1cblx0XHRcdFx0XHRcdFx0XHRlbXB0eUFubm90YXRpb25SZW1pbmRlclRleHQ9e3BhcmFtcy5lbXB0eUFubm90YXRpb25SZW1pbmRlclRleHR9XG5cdFx0XHRcdFx0XHRcdC8vcmVwbGFjZSBldmVyeXRoaW5nIGFmdGVyIGRlZmF1bHRhbm5vdGF0aW9ucyB3aXRoIHRoZSB3aGF0IGlzIGRvd24gYmVsb3dcblx0XHRcdFx0XHRcdFx0Ly8gYW5ub3RhdGlvbldpZHRoPXtwYXJhbXMuYW5ub3RhdGlvbldpZHRofVxuXHRcdFx0XHRcdFx0XHQvLyBudW1iZXJPZlBhcmVudEFubm90YXRpb25zVG9CZUFkZGVkPXsxMDAwMDB9XG5cdFx0XHRcdFx0XHRcdC8vIHByZXZpZXdOb3RpY2VzPXtwYXJhbXMucHJldmlld05vdGljZXN9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L0NvbD5cblx0XHRcdFx0XHRcdHsvKiA8Um93PjxDb2w+PE1vZGFsIG1vZGFsU2hvdz17dGhpcy5zdGF0ZS5tb2RhbFNob3d9Lz48L0NvbD48L1Jvdz4gKi99XG5cdFx0XHRcdFx0PC9Sb3c+XG5cblx0XHRcdFx0XHQ8Q2FyZCBjbGFzc05hbWU9XCJtYi0yIGNvbC14cy0xMiBjb2wtbGctMTAgb2Zmc2V0LWxnLTFcIiBzdHlsZT17eyBkaXNwbGF5OiB0aGlzLnN0YXRlLnNob3dNZSA/IFwiYmxvY2tcIiA6IFwibm9uZVwiLCAgYm9yZGVyQ29sb3I6IFwiIzZiYzNiOVwiLCBib3JkZXI6IFwiMHB4IHNvbGlkICM2YmMzYjlcIiwgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZmZjBcIiwgcGFkZGluZ1RvcDogMTAsIHBhZGRpbmdCb3R0b206IDEwLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XG5cdFx0XHRcdFx0XHQ8Q2FyZEJvZHk+XG5cdFx0XHRcdFx0XHRcdDxSb3cgY2xhc3NOYW1lPVwibXktMyBjb2wteHMtMTJcIiByZWY9e3RoaXMubXlSZWZ9PlxuXHRcdFx0XHRcdFx0XHRcdDxDb2wgY2xhc3NOYW1lPVwiY29sLWxnLTZcIiBzdHlsZT17eyBhbGlnbkl0ZW1zOiBcInJpZ2h0XCIsIGRpc3BsYXk6IFwiZmxleFwiIH19PlxuXHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBzdHlsZT17eyBkaXNwbGF5OiB0aGlzLnN0YXRlLnNob3dNZSA/IFwiYmxvY2tcIiA6IFwibm9uZVwiLCBkaXNwbGF5OiBcImJsb2NrXCIsIGNvbG9yOiAnI2ZmZmZmZicsIHdpZHRoOiAyNTAsIHBvc2l0aW9uOiBcImFic29sdXRlXCIsIGxlZnQ6IDIwMCB9fSBjbGFzc05hbWU9XCJkb3dubG9hZC1idXR0b25zIHB1bGwtcmlnaHRcIiBvbkNsaWNrPXt0aGlzLm9uRG93bmxvYWR9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHREb3dubG9hZCBSYXcgRGF0YVxuXHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0PC9Db2w+XG5cdFx0XHRcdFx0XHRcdFx0PENvbCBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBjbGFzc05hbWU9XCJkb3dubG9hZC1idXR0b25zXCIgc3R5bGU9e3sgZGlzcGxheTogdGhpcy5zdGF0ZS5zaG93TWUgPyBcImJsb2NrXCIgOiBcIm5vbmVcIiwgd2lkdGg6IDI1MCwgZGlzcGxheTogXCJibG9ja1wiLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCBsZWZ0OiAxMDB9fSBvbkNsaWNrPXt0aGlzLmdldEludGVycG9sYXRlZERhdGF9PkdlbmVyYXRlIEludGVycG9sYXRlZCBEYXRhPC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0PC9Db2w+XG5cdFx0XHRcdFx0XHRcdDwvUm93PlxuXG5cblxuXHRcdFx0XHRcdFx0XHQ8Um93IGNsYXNzTmFtZT1cIm15LTMgY29sLXhzLTEyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PENvbD5cblx0XHRcdFx0XHRcdFx0XHRcdDx0YWJsZSBpZD1cImludGVycG9sLXRhYmxlXCIgc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnIH19IGNsYXNzTmFtZT1cImludGVycG9sdGFibGVjbGFzc3RhYmxldHJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHRib2R5PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ciBjbGFzc05hbWU9XCJpbnRlcnBvbHRhYmxlY2xhc3N0YWJsZXRyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGggY2xhc3NOYW1lPVwiaW50ZXJwb2x0YWJsZWNsYXNzdGR0aFwiPlRyYWNrIElEPC90aD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0aCBjbGFzc05hbWU9XCJpbnRlcnBvbHRhYmxlY2xhc3N0ZHRoXCI+eC1taW48L3RoPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRoIGNsYXNzTmFtZT1cImludGVycG9sdGFibGVjbGFzc3RkdGhcIj55LW1pbjwvdGg+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGggY2xhc3NOYW1lPVwiaW50ZXJwb2x0YWJsZWNsYXNzdGR0aFwiPndpZHRoPC90aD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0aCBjbGFzc05hbWU9XCJpbnRlcnBvbHRhYmxlY2xhc3N0ZHRoXCI+aGVpZ2h0PC90aD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0aCBjbGFzc05hbWU9XCJpbnRlcnBvbHRhYmxlY2xhc3N0ZHRoXCI+RnJhbWU8L3RoPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRoIGNsYXNzTmFtZT1cImludGVycG9sdGFibGVjbGFzc3RkdGhcIj5Mb3N0PC90aD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0aCBjbGFzc05hbWU9XCJpbnRlcnBvbHRhYmxlY2xhc3N0ZHRoXCI+T2NjbHVkZWQ8L3RoPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRoIGNsYXNzTmFtZT1cImludGVycG9sdGFibGVjbGFzc3RkdGhcIj5HZW5lcmF0ZWQ8L3RoPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRoIGNsYXNzTmFtZT1cImludGVycG9sdGFibGVjbGFzc3RkdGhcIj5MYWJlbDwvdGg+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGggY2xhc3NOYW1lPVwiaW50ZXJwb2x0YWJsZWNsYXNzdGR0aFwiPlBhcmVudDwvdGg+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC90Ym9keT5cblx0XHRcdFx0XHRcdFx0XHRcdDwvdGFibGU+XG5cdFx0XHRcdFx0XHRcdFx0PC9Db2w+XG5cdFx0XHRcdFx0XHRcdDwvUm93PlxuXG5cdFx0XHRcdFx0XHRcdDxSb3c+XG5cdFx0XHRcdFx0XHRcdFx0PENvbD5cblx0XHRcdFx0XHRcdFx0XHRcdDx0YWJsZSBpZD1cInJhdy10YWJsZVwiIHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fSBjbGFzc05hbWU9XCJyYXd0YWJsZWNsYXNzXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx0Ym9keT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dHIgY2xhc3NOYW1lPVwicmF3dGFibGVjbGFzc1wiPlxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGggY2xhc3NOYW1lPVwicmF3dGFibGVjbGFzc3RkdGhcIj4gPC90aD5cblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdGJvZHk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3RhYmxlPlxuXHRcdFx0XHRcdFx0XHRcdDwvQ29sPlxuXHRcdFx0XHRcdFx0XHQ8L1Jvdz5cblx0XHRcdFx0XHRcdDwvQ2FyZEJvZHk+XG5cdFx0XHRcdFx0PC9DYXJkPlxuXHRcdFx0XHRcdHsvKiA8Um93IGNsYXNzTmFtZT1cIm15LTMgY29sLXhzLTEyXCIgcmVmPXt0aGlzLm15UmVmfT5cblx0XHRcdFx0XHRcdDxDb2w+XG5cdFx0XHRcdFx0XHRcdDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCIgc3R5bGU9e3sgZGlzcGxheTogdGhpcy5zdGF0ZS5zaG93TWUgPyBcImJsb2NrXCIgOiBcIm5vbmVcIiwgY29sb3I6ICcjZmZmZmZmJyB9fSBjbGFzc05hbWU9XCJkb3dubG9hZC1idXR0b25zXCIgb25DbGljaz17dGhpcy5vbkRvd25sb2FkfT5cblx0XHRcdFx0XHRcdFx0XHREb3dubG9hZCBSYXcgRGF0YVxuXHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdDwvQ29sPlxuXHRcdFx0XHRcdFx0PENvbD5cblx0XHRcdFx0XHRcdFx0PEJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBjbGFzc05hbWU9XCJkb3dubG9hZC1idXR0b25zXCIgc3R5bGU9e3sgZGlzcGxheTogdGhpcy5zdGF0ZS5zaG93TWUgPyBcImJsb2NrXCIgOiBcIm5vbmVcIiB9fSBvbkNsaWNrPXt0aGlzLmdldEludGVycG9sYXRlZERhdGF9PkdlbmVyYXRlIEludGVycG9sYXRlZCBEYXRhPC9CdXR0b24+XG5cdFx0XHRcdFx0XHQ8L0NvbD5cblx0XHRcdFx0XHQ8L1Jvdz5cblx0XHRcdFx0XHRcblxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdDxSb3cgY2xhc3NOYW1lPVwibXktMyBjb2wteHMtMTJcIj5cblx0XHRcdFx0XHRcdDxDb2w+XG5cdFx0XHRcdFx0XHRcdDx0YWJsZSBpZD1cImludGVycG9sLXRhYmxlXCIgc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnIH19IGNsYXNzTmFtZT1cImludGVycG9sdGFibGVjbGFzc3RhYmxldHJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8dGJvZHk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dHIgY2xhc3NOYW1lPVwiaW50ZXJwb2x0YWJsZWNsYXNzdGFibGV0clwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGggY2xhc3NOYW1lPVwiaW50ZXJwb2x0YWJsZWNsYXNzdGR0aFwiPlRyYWNrIElEPC90aD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHRoIGNsYXNzTmFtZT1cImludGVycG9sdGFibGVjbGFzc3RkdGhcIj54LW1pbjwvdGg+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx0aCBjbGFzc05hbWU9XCJpbnRlcnBvbHRhYmxlY2xhc3N0ZHRoXCI+eS1taW48L3RoPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGggY2xhc3NOYW1lPVwiaW50ZXJwb2x0YWJsZWNsYXNzdGR0aFwiPndpZHRoPC90aD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHRoIGNsYXNzTmFtZT1cImludGVycG9sdGFibGVjbGFzc3RkdGhcIj5oZWlnaHQ8L3RoPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGggY2xhc3NOYW1lPVwiaW50ZXJwb2x0YWJsZWNsYXNzdGR0aFwiPkZyYW1lPC90aD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHRoIGNsYXNzTmFtZT1cImludGVycG9sdGFibGVjbGFzc3RkdGhcIj5Mb3N0PC90aD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHRoIGNsYXNzTmFtZT1cImludGVycG9sdGFibGVjbGFzc3RkdGhcIj5PY2NsdWRlZDwvdGg+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx0aCBjbGFzc05hbWU9XCJpbnRlcnBvbHRhYmxlY2xhc3N0ZHRoXCI+R2VuZXJhdGVkPC90aD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHRoIGNsYXNzTmFtZT1cImludGVycG9sdGFibGVjbGFzc3RkdGhcIj5MYWJlbDwvdGg+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx0aCBjbGFzc05hbWU9XCJpbnRlcnBvbHRhYmxlY2xhc3N0ZHRoXCI+UGFyZW50PC90aD5cblx0XHRcdFx0XHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0XHRcdFx0PC90Ym9keT5cblx0XHRcdFx0XHRcdFx0PC90YWJsZT5cblx0XHRcdFx0XHRcdDwvQ29sPlxuXHRcdFx0XHRcdDwvUm93PlxuXG5cdFx0XHRcdFx0PFJvdz5cblx0XHRcdFx0XHRcdDxDb2w+XG5cdFx0XHRcdFx0XHRcdDx0YWJsZSBpZD1cInJhdy10YWJsZVwiIHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fSBjbGFzc05hbWU9XCJyYXd0YWJsZWNsYXNzXCI+XG5cdFx0XHRcdFx0XHRcdFx0PHRib2R5PlxuXHRcdFx0XHRcdFx0XHRcdFx0PHRyIGNsYXNzTmFtZT1cInJhd3RhYmxlY2xhc3NcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx0aCBjbGFzc05hbWU9XCJyYXd0YWJsZWNsYXNzdGR0aFwiPiA8L3RoPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0XHRcdFx0PC90Ym9keT5cblx0XHRcdFx0XHRcdFx0PC90YWJsZT5cblx0XHRcdFx0XHRcdDwvQ29sPlxuXHRcdFx0XHRcdDwvUm93PiAgKi99XG5cblx0XHRcdFx0XHR7LyogPFJvdz5cblx0XHRcdFx0XHRcdFx0PGZvcm0gcmVmPVwidXBsb2FkRm9ybVwiIGlkPVwidXBsb2FkRm9ybVwiIG1ldGhvZD1cInBvc3RcIiBhY3Rpb249XCIvbXA0dG9hdmlcIj5cblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImZpbGVcIiBuYW1lPVwibXA0XCIgZW5jVHlwZT1cIm11bHRpcGFydC1mb3JtLWRhdGFcIj48L2lucHV0PlxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwic3VibWl0XCIgbmFtZT1cIkNvbnZlcnRcIj5Db252ZXJ0PC9pbnB1dD5cblx0XHRcdFx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0XHRcdFx0PC9Sb3c+XG5cdFx0XHRcdFx0PFJvdyBjbGFzc05hbWU9XCJteS0zIGNvbC14cy0xMiBjb2wtbGctMTAgb2Zmc2V0LWxnLTFcIj5cblx0XHRcdFx0XHRcdDxDb2w+XG5cdFx0XHRcdFx0XHRcdDxDYXJkPjxDYXJkQm9keT48YSBocmVmPXtkYXRhU3RyfSBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeSBidG4tbGdcIiBkb3dubG9hZD17YCR7cGFyYW1zLnVybH0uanNvbmB9PiBEb3dubG9hZCB0aGUgQW5ub3RhdGlvbnM8L2E+PC9DYXJkQm9keT48L0NhcmQ+XG5cblxuXHRcdFx0XHRcdFx0PC9Db2w+ICA8L1Jvdz4gKi99XG5cdFx0XHRcdFx0ey8qIDxDU1ZMaW5rIGRhdGE9e0pTT04uc3RyaW5naWZ5KHJlc3VsdCwgbnVsbCwyKX0gc3R5bGU9e3sgY29sb3I6ICcjZmZmZmZmJyB9fT5Eb3dubG9hZCBSYXcgRGF0YTwvQ1NWTGluaz4gKi99XG5cdFx0XHRcdFx0ey8qIDxDb2w+XG5cdFx0XHRcdFx0XHRcdDxCdXR0b24gaWQ9XCJleHBvcnQtaW50ZXJwb2xcIiBjb2xvcj0ncHJpbWFyeScgc3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiAnbm9uZScsIGNvbG9yOiAnI2ZmZmZmZicsXG5cdFx0XHRcdFx0XHRcdFx0Ym9yZGVyOiBgMXB4IHNvbGlkYCxcblx0XHRcdFx0XHRcdFx0fX0gb25DbGljaz17dGhpcy5jcmVhdGVUYWJsZX0+RG93bmxvYWQgSW50ZXJwb2xhdGVkIERhdGE8L0J1dHRvbj5cblx0XHRcdFx0XHRcdDwvQ29sPiAqL31cblxuXG5cblxuXHRcdFx0XHQ8L0NvbnRhaW5lcj5cblxuXHRcdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHQgXHQuZG93bmxvYWQtYnV0dG9uc3tcblx0XHRcdFx0XHQgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50LFxuXHRcdFx0XHRcdCBjb2xvcjogI2ZmZmZmZlxuXHRcdFx0XHQgfVxuXHRcdFx0IGB9PC9zdHlsZT5cblx0XHRcdDwvPlxuXHRcdCk7XG5cblxuXG5cdH1cbn1cbmV4cG9ydCBkZWZhdWx0IERlbW87XG4iXX0= */\n/*@ sourceURL=/Applications/CrowdMOT/crowdmot-nextjs/components/videoAnnotationDemo/VideoAnnotationDemo.js */"));
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
      color: "primary",
      style: {
        marginLeft: 120,
        marginRight: 50,
        width: 900
      },
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