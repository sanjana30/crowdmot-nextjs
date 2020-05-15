// import workerClient from "ffmpeg-webworker";
// import React from "react";

// class FFMPEG extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       stdOutputText: "",
//       ffmpegReady: false
//     };

//     this.updateStdOutputText = this.updateStdOutputText.bind(this);
//     this.handleInputChange = this.handleInputChange.bind(this);
//     this.handleListCodecs = this.handleListCodecs.bind(this);
//   }

//   componentWillMount() {
//     workerClient.on("onReady", () => this.setState({ ffmpegReady: true }));
//     workerClient.on("onStdout", msg => this.updateStdOutputText(msg));
//     workerClient.on("onFileReceived", msg => this.updateStdOutputText(msg));
//     workerClient.on("onDone", data => {
//       this.updateStdOutputText("Command Completed, check the console");
//       console.log(data);
//     });
//   }

//   updateStdOutputText(text) {
//     this.setState({
//       stdOutputText: `${this.state.stdOutputText} \n\n ${text}`
//     });
//   }

//   handleInputChange(e) {
//     this.setState({ stdOutputText: "" });

//     const file = e.currentTarget.files[0];
//     // Set the file for processing
//     workerClient.inputFile = file;
//     // Run a valid ffmpeg command
//     workerClient.runCommand("-ss 00:00:05 -c copy -t 12 sliced-output.mp4");
//   }

//   Input({ onChange }) {
//     return (
//       <input type="file" accept="audio/*,video/*" onChange={e => onChange(e)} />
//     );
//   }

//   StdOutput({ text, ffmpegReady }) {
//     return (
//       <pre>
//         {ffmpegReady ? "FFMPEG is ready" : "Loading FFMPEG"}
//         {text}
//       </pre>
//     );
//   }

//   handleListCodecs(e) {
//     e.preventDefault();
//     this.setState({ stdOutputText: "" });
//     // Run a valid ffmpeg command
//     workerClient.runCommand("-codecs");
//   }

//   render() {
//     return (
//       <div>
//         {<this.Input onChange={this.handleInputChange} />}
//         <button onClick={this.handleListCodecs}>List Codecs</button>
//         <this.StdOutput
//           text={this.state.stdOutputText}
//           ffmpegReady={this.state.ffmpegReady}
//         />
//       </div>
//     );
//   }
// }