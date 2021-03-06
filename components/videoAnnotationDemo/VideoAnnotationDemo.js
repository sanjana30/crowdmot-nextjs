import React, { Component, useReducer } from 'react';
import { TwoDimensionalVideo } from "react-annotation-tool"
import Instructions from "../videoInstruction/VideoInstruction"
import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { CSVLink, CSVDownload } from "react-csv";
import Modal from './Modal';

class Demo extends Component {

	constructor(props) {
		super(props)
		this.myRef = React.createRef()
		const abc = 9
		//const fs = require('fs');
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
				defaultAnnotations: JSON.stringify(defaultAnnotations),
				url,
				videoWidth,
				previewHeader,
				previewNoticeList,
				emptyCheckSubmissionWarningText,
				emptyCheckAnnotationItemWarningText,
				emptyAnnotationReminderText,

			},
			params: {
				defaultAnnotations: [],
				url,
				videoWidth,
				previewHeader,
				previewNoticeList,
				emptyCheckSubmissionWarningText,
				emptyCheckAnnotationItemWarningText,
				emptyAnnotationReminderText,
			}
		}
		//start content from react tool
		const temp = {};


		const defaultAnnotations = [{
			id: 'jt192wyd',
			name: 'jt192wyd',
			label: '1-2',
			color: 'rgba(255,0,0,1)',
			incidents: [{
				id: 'jt192wyb', name: 'jt192wyb', x: 295.00402335586875, y: 193.3689649661968, width: 40.75402335586878, height: 41.63103503380317, time: 0.0308226495726496, status: 'Show',
			}, {
				id: 'jt1930nb', name: 'jt1930nb', x: 304.00402335586875, y: 202.3689649661968, width: 58.75402335586875, height: 60.63103503380319, time: 0.03178472222222222, status: 'Show',
			}, {
				id: 'jt193fim', name: 'jt193fim', x: 309.00402335586875, y: 213.3689649661968, width: 58.75402335586875, height: 60.63103503380319, time: 0.06388611111111112, status: 'Show',
			}, {
				id: 'jt193ijo', name: 'jt193ijo', x: 320.00402335586875, y: 220.3689649661968, width: 58.75402335586875, height: 74.63103503380319, time: 0.08677242063492063, status: 'Show',
			}, {
				id: 'jt19484m', name: 'jt19484m', x: 320.48992156587633, y: 218.42537212616642, width: 60.697616195899116, height: 78.17334040378043, time: 0.0966718253968254, status: 'Show',
			}, {
				id: 'jt193o4y', name: 'jt193o4y', x: 321.00402335586875, y: 216.3689649661968, width: 62.75402335586875, height: 71.63103503380319, time: 0.10714583333333334, status: 'Show',
			}, {
				id: 'jt194dom', name: 'jt194dom', x: 321.00402335586875, y: 218.8083044640243, width: 62.75402335586875, height: 69.1916955359757, time: 0.1195857142857143, status: 'Show',
			}, {
				id: 'jt193taw', name: 'jt193taw', x: 321.00402335586875, y: 228.3689649661968, width: 62.75402335586875, height: 59.63103503380319, time: 0.13459007936507936, status: 'Show',
			}, {
				id: 'jt193zb4', name: 'jt193zb4', x: 318.00402335586875, y: 228.3689649661968, width: 81.75402335586875, height: 59.63103503380319, time: 0.1693952380952381, status: 'Show',
			}, {
				id: 'jt195ltz', name: 'jt195ltz', x: 328.2874098641244, y: 230.6523514744525, width: 70.85164231813906, height: 56.631035033803215, time: 0.1985523622047244, status: 'Show',
			}, {
				id: 'jt194trg', name: 'jt194trg', x: 322.00402335586875, y: 232.3689649661968, width: 76.66967862975952, height: 59.63103503380319, time: 0.22047222222222224, status: 'Show',
			}, {
				id: 'jt194lgm', name: 'jt194lgm', x: 318.00402335586875, y: 228.3689649661968, width: 75.75402335586875, height: 59.63103503380319, time: 0.22967083333333332, status: 'Show',
			}, {
				id: 'jt195p7m', name: 'jt195p7m', x: 318.00402335586875, y: 228.3689649661968, width: 68.75402335586875, height: 58.19684946385905, time: 0.25359350393700786, status: 'Show',
			}, {
				id: 'jt1951r9', name: 'jt1951r9', x: 318.00402335586875, y: 228.3689649661968, width: 75.75402335586875, height: 54.63103503380319, time: 0.31307242063492063, status: 'Show',
			}, {
				id: 'jt195v9l', name: 'jt195v9l', x: 318.00402335586875, y: 228.3689649661968, width: 75.75402335586875, height: 54.63103503380319, time: 0.34623937007874017, status: 'Hide',
			}],
			childrenNames: [],
			parentName: 'jt1922xu',
		}, {
			id: 'jt192wyc',
			name: 'jt192wyc',
			label: '1-1',
			color: 'rgba(255,0,0,1)',
			incidents: [{
				id: 'jt192wyb', name: 'jt192wyb', x: 274.25, y: 171.73792993239366, width: 40.75402335586878, height: 41.63103503380317, time: 0.0308226495726496, status: 'Show',
			}, {
				id: 'jt19349x', name: 'jt19349x', x: 271.25, y: 167.73792993239366, width: 60.75402335586875, height: 58.63103503380316, time: 0.03178472222222222, status: 'Show',
			}, {
				id: 'jt193ekd', name: 'jt193ekd', x: 274.25, y: 160.73792993239366, width: 60.75402335586875, height: 58.63103503380316, time: 0.06388611111111112, status: 'Show',
			}, {
				id: 'jt193hp1', name: 'jt193hp1', x: 280.25, y: 160.73792993239366, width: 60.75402335586875, height: 58.63103503380316, time: 0.08677242063492063, status: 'Show',
			}, {
				id: 'jt194cbv', name: 'jt194cbv', x: 280.1326975821677, y: 158.62062751456136, width: 60.75402335586875, height: 58.63103503380316, time: 0.1195857142857143, status: 'Show',
			}, {
				id: 'jt193umg', name: 'jt193umg', x: 274.25, y: 154.73792993239366, width: 60.75402335586875, height: 58.63103503380316, time: 0.13459007936507936, status: 'Show',
			}, {
				id: 'jt193y7q', name: 'jt193y7q', x: 268.25, y: 155.73792993239366, width: 60.75402335586875, height: 58.63103503380316, time: 0.1693952380952381, status: 'Show',
			}, {
				id: 'jt194hxg', name: 'jt194hxg', x: 260.25, y: 157.73792993239366, width: 60.75402335586875, height: 58.63103503380316, time: 0.20233392857142857, status: 'Show',
			}, {
				id: 'jt194mj1', name: 'jt194mj1', x: 253.25, y: 156.73792993239366, width: 60.75402335586875, height: 58.63103503380316, time: 0.22967083333333332, status: 'Show',
			}, {
				id: 'jt195qgw', name: 'jt195qgw', x: 246.25, y: 156.73792993239366, width: 63.66047805713703, height: 58.63103503380316, time: 0.25359350393700786, status: 'Show',
			}, {
				id: 'jt194xqh', name: 'jt194xqh', x: 253.25, y: 156.73792993239366, width: 52.75402335586875, height: 58.63103503380316, time: 0.27642281746031744, status: 'Show',
			}, {
				id: 'jt1955u1', name: 'jt1955u1', x: 265.25, y: 159.73792993239366, width: 40.75402335586875, height: 49.63103503380316, time: 0.3564833333333333, status: 'Show',
			}, {
				id: 'jt195b3i', name: 'jt195b3i', x: 265.25, y: 141.73792993239366, width: 40.75402335586875, height: 49.63103503380316, time: 0.45984980158730154, status: 'Show',
			}, {
				id: 'jt1961v6', name: 'jt1961v6', x: 269.25, y: 144.73792993239366, width: 40.75402335586875, height: 49.63103503380316, time: 0.47851751968503936, status: 'Show',
			}, {
				id: 'jt1965az', name: 'jt1965az', x: 262.25, y: 144.73792993239366, width: 47.75402335586875, height: 49.63103503380316, time: 0.5342496062992126, status: 'Show',
			}, {
				id: 'jt1968nk', name: 'jt1968nk', x: 262.25, y: 149.73792993239366, width: 47.75402335586875, height: 49.63103503380316, time: 0.5904106299212598, status: 'Show',
			}, {
				id: 'jt196ax3', name: 'jt196ax3', x: 270.25, y: 158.73792993239366, width: 47.75402335586875, height: 49.63103503380316, time: 0.6662596456692913, status: 'Show',
			}, {
				id: 'jt196dys', name: 'jt196dys', x: 268.25, y: 164.73792993239366, width: 47.75402335586875, height: 49.63103503380316, time: 0.7368370078740157, status: 'Show',
			}, {
				id: 'jt196guu', name: 'jt196guu', x: 272.25, y: 154.73792993239366, width: 47.75402335586875, height: 49.63103503380316, time: 0.801053937007874, status: 'Show',
			}, {
				id: 'jt196k7h', name: 'jt196k7h', x: 273.25, y: 157.73792993239366, width: 47.75402335586875, height: 49.63103503380316, time: 0.8626350393700787, status: 'Show',
			}],
			childrenNames: [],
			parentName: 'jt1922xu',
		}, {
			id: 'jt1922xu',
			name: 'jt1922xu',
			label: '1',
			color: 'rgba(255,219,0,1)',
			incidents: [{
				id: 'jt1922xu', name: 'jt1922xu', x: 274.25, y: 174, width: 80, height: 81, time: 0, status: 'Show',
			}, {
				id: 'jt192wyb', name: 'jt192wyb', x: 274.25, y: 171.73792993239366, width: 81.50804671173756, height: 83.26207006760634, time: 0.0308226495726496, status: 'Split',
			}],
			childrenNames: ['jt192wyc', 'jt192wyd'],
			parentName: '',
		}];
		const url = 'https://cildata.crbs.ucsd.edu/media/videos/50507/50507_web.mp4';
		const videoWidth = 500;
		const previewNoticeList = [
			'Cells\' body range.',
			'The time that cells <u>split</u>, <u>leave</u>, <u>obscured</u> and <u>Show up</u> (if applicable).',
		];
		const previewHeader = 'Please scan the video and observe the following to help you complete the task:';
		const emptyCheckSubmissionWarningText = 'Please annotate AND track one unmarked cell to complete this task.';
		const emptyCheckAnnotationItemWarningText = 'Step 2: Please track the cell bound by this box';
		const emptyAnnotationReminderText = 'Step 1: Click the button above to add a new box around a cell';
		this.videoFileInput = React.createRef();
		this.fileInput = React.createRef();
		this.state = {
			myStream: null,
			result: null,
			interpolationResult: null,
			showMe: false,
			videoDuration: 5.04,
			videoFramerate: 60,
			input: {
				defaultAnnotations: JSON.stringify(defaultAnnotations),
				url,
				videoWidth,
				previewHeader,
				previewNoticeList,
				emptyCheckSubmissionWarningText,
				emptyCheckAnnotationItemWarningText,
				emptyAnnotationReminderText,
			},
			params: {
				defaultAnnotations: [],
				url,
				videoWidth,
				previewHeader,
				previewNoticeList,
				emptyCheckSubmissionWarningText,
				emptyCheckAnnotationItemWarningText,
				emptyAnnotationReminderText,
			}
		}
		//end content from react tool
		//close constructor props	
	}
	scrollToRef = () => window.scrollTo(0, this.myRef.current.offsetTop)
	handleResultSubmit = result => {
		this.setState({ result: result });
		this.setState({ videoDuration: this.state.videoDuration })
		this.setState({
			showMe: true
		});

		alert("Submission was successful. Use the buttons at the end of the page to download data points.")
		// this.createRawData(result);

	}

	executeScroll = () => this.scrollToRef(myRef)


	handleChange = event => {
		const target = event.target;
		const name = target.name;
		const value = target.type === "checkbox" ? target.checked : target.value;
		this.setState((preState) => {
			const { input } = preState;
			return {
				input: { ...input, [name]: value }
			}

		})
	}

	handleVidFrameChange = event => {
		console.log(event.target.value)
		this.setState({ videoFramerate: event.target.value })
	}
	handleVidDurationChange = event => {
		console.log(event.target.value)
		this.setState({ videoDuration: event.target.value })
	}
	handleErrorSubmit = event => {
		event.preventDefault();
		this.setState((preState) => {
			const { input } = preState;

			const annotations = this.isJsonString(input.defaultAnnotations) ? input.defaultAnnotations : "[]";
			return {
				params: {
					defaultAnnotations: JSON.parse(annotations),
					url: input.url,
					annotationWidth: parseInt(input.annotationWidth, 10)
				}
			};
		}
		);
	}
	handleSubmit = async event => {
		event.preventDefault();
		let result = {};
		if (this.fileInput.current.files[0]) {
			const readFilePromise = new Promise((resolve, reject) => {
				const fileReader = new FileReader();
				fileReader.onload = event => {
					if (!this.isJsonString(event.target.result))
						reject('Wrong json format');
					let result = JSON.parse(event.target.result);
					resolve(result)
				}
				fileReader.onerror = event => {
					reject(event);
				}
				fileReader.readAsText(this.fileInput.current.files[0]);
			})
			result = await readFilePromise;
		}
		let { url = '', videoWidth = 0, defaultAnnotations = [] } = result;
		this.setState((preState) => {
			const { input } = preState;
			console.log(preState)
			defaultAnnotations = []
			if (result.annotations) {
				if (result.annotations.length === 0) {
					defaultAnnotations = this.isJsonString(input.defaultAnnotations) ? JSON.parse(input.defaultAnnotations) : "[]";
				}
				else {
					defaultAnnotations = JSON.parse(JSON.stringify(result.annotations));
				}
			}
			//defaultAnnotations = this.isJsonString(input.defaultAnnotations) ? JSON.parse(input.defaultAnnotations) : "[]";

			return {
				params: {
					defaultAnnotations,
					url: this.state.videoFileURL ? this.state.videoFileURL : input.url,
					videoWidth: (videoWidth !== 0 ? videoWidth : parseInt(input.videoWidth, 10)),
					videoDuration: this.state.videoDuration,
					videoFramerate: this.state.videoFramerate
				}
			};

		}
		);

	}

	isJsonString = str => {
		try {
			JSON.parse(str);
		} catch (e) {
			return false;
		}
		return true;
	}
	//async (context)
	saveInformation = async () => {
		// console.log(this.state)
		// console.log(getServerSideProps())
		// let values = {defaultAnnotations: ""};

		// const request = await fetch("http://localhost:3000/")
		// // body: JSON.stringify({
		// //   ...this.state
		// // }),
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ mp4: 'https://cildata.crbs.ucsd.edu/media/videos/50507/50507_web.mp4' })
		};
		const response = await fetch('/mp4toavi', requestOptions);
		//const data = await response.json();

	}



	//function for getting interpolated data starts
	getInterpolatedData = event => {
		event.preventDefault();

		//const duration = JSON.parse(JSON.stringify(this.state.result.duration))

		const duration = this.state.videoDuration;
		const timerate = duration * this.state.videoFramerate;

		//collect frame/second for the video
		const timeNow = (new Date()).getTime().toString(36);
		let interpolatedResult = JSON.parse(JSON.stringify(this.state.result));
		let temp = interpolatedResult
		for (let annotation = 0; annotation < temp.annotations.length; annotation++) {
			for (let incident = 0; incident < temp.annotations[annotation].incidents.length; incident++) {
				temp.annotations[annotation].incidents[incident].parentName = temp.annotations[annotation].parentName
			}
		}
		for (let annotation = 0; annotation < temp.annotations.length; annotation++) {

			for (let incident = 0; incident < temp.annotations[annotation].incidents.length; incident++) {
				temp.annotations[annotation].incidents[incident].label = temp.annotations[annotation].label
			}
		}
		for (let i = 0; i < interpolatedResult.annotations.length; i++) {

			let annotIncidentLength = interpolatedResult.annotations[i].incidents.length
			if (annotIncidentLength === 1) {
				console.log("This is not possible :P")
			}
			else if (annotIncidentLength > 1) {

				for (let j = 0; j < annotIncidentLength; j++) {
					if ((j != annotIncidentLength - 1) && (interpolatedResult.annotations[i].incidents[j + 1].status == "Show" || interpolatedResult.annotations[i].incidents[j + 1].status == "" || interpolatedResult.annotations[i].incidents[j + 1].status == "Split")) {
						const source = interpolatedResult.annotations[i].incidents[j]
						const target = interpolatedResult.annotations[i].incidents[j + 1]
						const tdiff = (target.time * timerate) - (source.time * timerate)
						const xSlope = (target.x - source.x) / tdiff
						const ySlope = (target.y - source.y) / tdiff
						const wSlope = (target.width - source.width) / tdiff
						const hSlope = (target.height - source.height) / tdiff
						const sFrame = Math.round(source.time * timerate)
						const tFrame = Math.round(target.time * timerate)
						for (let k = sFrame + 1; k <= tFrame; k++) {
							let off = k - Math.round(source.time * timerate)
							let interpolX = (source.x + (xSlope * off)).toFixed(2)
							let interpolY = (source.y + (ySlope * off)).toFixed(2)
							let interpolW = (source.width + (wSlope * off)).toFixed(2)
							let interpolH = (source.height + (hSlope * off)).toFixed(2)
							temp.annotations[i].incidents.splice(j + 1, 0, ({
								id: `${timeNow}`, name: `${timeNow}`, x: interpolX, y: interpolY, height: interpolH, width: interpolW, time: k, status, parentName: interpolatedResult.annotations[i].parentName, label: interpolatedResult.annotations[i].label, generated: 1
							}));

						}

					} //close if 

					if ((j == annotIncidentLength - 1) && (interpolatedResult.annotations[i].incidents[j].status == "Show" || interpolatedResult.annotations[i].incidents[j].status == "" || interpolatedResult.annotations[i].incidents[j + 1].status == "Split")) {

						const source = interpolatedResult.annotations[i].incidents[j]
						const target = interpolatedResult.annotations[i].incidents[j]
						const tdiff = (duration * timerate) - (source.time * timerate)
						const xSlope = (target.x - source.x) / tdiff
						const ySlope = (target.y - source.y) / tdiff
						const wSlope = (target.width - source.width) / tdiff
						const hSlope = (target.height - source.height) / tdiff
						const sFrame = Math.round(source.time * timerate)
						const tFrame = Math.round(target.time * timerate)
						for (let k = sFrame + 1; k <= tFrame; k++) {
							let off = k - Math.round(source.time * timerate)
							let interpolX = source.x + (xSlope * off)
							let interpolY = source.y + (ySlope * off)
							let interpolW = source.width + (wSlope * off)
							let interpolH = source.height + (hSlope * off)
							temp.annotations[i].incidents.splice(j + 1, 0, ({
								id: `${timeNow}`, name: `${timeNow}`, x: interpolX, y: interpolY, height: interpolH, width: interpolW, time: k, status, parentName: temp.annotations[i].parentName, label: interpolatedResult.annotations[i].label, generated: 1
							}));

						}

					} //close second if



				} //close for loop for j



			} //close else-if annotlength>1

		} //close for loop for i

		//sort the temp object based on time/frame value
		let interpol_data_arr = [], sno = 1
		for (let x = 0; x < temp.annotations.length; x++) {
			for (let y = 0; y < temp.annotations[x].incidents.length; y++) {
				if (!(temp.annotations[x].incidents[y].time > 0 && temp.annotations[x].incidents[y].time < 1))
					interpol_data_arr.push(temp.annotations[x].incidents[y])
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
		}
		//sorting ends


		//add Sno/ID to each row
		for (let id = 0; id < interpol_data_arr.length; id++) {
			interpol_data_arr[id].serial = interpol_data_arr[id].label
			//sno++
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
		}
		// for(let labelno=0; labelno<interpol_data_arr.length; labelno++){
		// 	var n = interpol_data_arr[labelno].label.search("-");
		// 	if(n<0){
		// 		interpol_data_arr[labelno].serial = interpol_data_arr[labelno].label
		// 	}
		// 	else {
		// 		interpol_data_arr[labelno].serial = interpol_data_arr[labelno].label[n+1]
		// 	}
		// }
		//Sno/ID added

		this.setState({ interpolationResult: interpol_data_arr });
		// document.getElementById("export-interpol").style.display = "block";
		this.createTable(interpol_data_arr);
	}
	//function for getting interpolated data ends

	createTable = e => {
		let temp = e;
		// let temp = JSON.parse(JSON.stringify(this.state.interpolationResult));
		var table = document.getElementById("interpol-table");
		for (var i = 0; i < temp.length; i++) {
			var row = document.createElement('tr');
			row.classList.add("interpoltableclasstabletr")
			var cell_sno = document.createElement('td')
			cell_sno.classList.add("interpoltableclasstdth")
			cell_sno.innerHTML = temp[i].serial
			row.appendChild(cell_sno)
			var cell_x_min = document.createElement('td');
			cell_x_min.classList.add("interpoltableclasstdth")
			var cell_y_min = document.createElement('td');
			cell_y_min.classList.add("interpoltableclasstdth")
			var cell_width = document.createElement('td');
			cell_width.classList.add("interpoltableclasstdth")
			var cell_height = document.createElement('td');
			cell_height.classList.add("interpoltableclasstdth")
			var cell_frame = document.createElement('td');
			cell_frame.classList.add("interpoltableclasstdth")
			var cell_lost = document.createElement('td');
			cell_lost.classList.add("interpoltableclasstdth")
			var cell_occluded = document.createElement('td');
			cell_occluded.classList.add("interpoltableclasstdth")
			var cell_generated = document.createElement('td');
			cell_generated.classList.add("interpoltableclasstdth")
			var cell_label = document.createElement('td');
			cell_label.classList.add("interpoltableclasstdth")
			var cell_parent = document.createElement('td');
			cell_parent.classList.add("interpoltableclasstdth")
			cell_x_min.innerHTML = temp[i].x;
			cell_y_min.innerHTML = temp[i].y;
			cell_width.innerHTML = temp[i].width;
			cell_height.innerHTML = temp[i].height;
			cell_frame.innerHTML = temp[i].time;
			cell_lost.innerHTML = 0;
			cell_occluded.innerHTML = 0;
			if (temp[i].generated == 1) {
				cell_generated.innerHTML = 1;
			}
			else {
				cell_generated.innerHTML = 0;
			}

			cell_label.innerHTML = temp[i].label;
			cell_parent.innerHTML = temp[i].parentName;
			//row.appendChild(cell_id);
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
	}

	export_table_to_csv = (html, filename) => {
		var csv = [];
		var rows = document.querySelectorAll("table tr");
		// var rows = document.getElementsByClassName("interpoltableclasstabletr");
		for (var i = 0; i < rows.length; i++) {
			var row = [], cols = rows[i].querySelectorAll("td, th");
			// var row = [], cols = rows[i].getElementsByClassName("interpoltableclasstdth");
			for (var j = 0; j < cols.length; j++)
				row.push(cols[j].innerText);
			csv.push(row.join(","));
		}
		// Download CSV
		this.download_csv(csv.join("\n"), filename);
	}



	download_csv = (csv, filename) => {
		var csvFile;
		var downloadLink;
		// CSV FILE
		csvFile = new Blob([csv], { type: "text/csv" });
		// Download link
		downloadLink = document.createElement("a");
		// File name
		downloadLink.download = filename;
		// We have to create a link to the file
		downloadLink.href = window.URL.createObjectURL(csvFile);
		// Make sure that the link is not displayed
		downloadLink.style.display = "none";
		// Add the link to your DOM
		document.body.appendChild(downloadLink);
		// Lanzamos
		downloadLink.click();
	}

	downloadInterpolTable = () => {
		var html = document.getElementById("interpol-table").outerHTML;
		this.export_table_to_csv(html, "table.csv");
	}


	handleVideoLoad = (e) => {
		let files = e.target.files;
		if (files.length === 1) {
			let file = files[0];
			this.setState({
				videoFileURL: URL.createObjectURL(file),
				videoFileObject: file
			});
		}
	}




	download = (content, fileName, contentType) => {
		const a = document.createElement("a");
		const file = new Blob([content], { type: contentType });
		a.href = URL.createObjectURL(file);
		a.download = fileName;
		a.click();
	}

	onDownload = () => {
		let temp = JSON.parse(JSON.stringify(this.state.result))
		for (let n = 0; n < temp.annotations.length; n++) {
			delete temp.annotations[n].name
		}
		for (let a = 0; a < temp.annotations.length; a++) {
			for (let b = 0; b < temp.annotations[a].incidents.length; b++) {
				delete temp.annotations[a].incidents[b].name;
				delete temp.annotations[a].incidents[b].label;
			}
		}
		this.download(JSON.stringify(temp), "yourfile.json", "text/plain");
	}

	render() {

		const { result, input, params } = this.state
		let dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(result));
		return (
			<>
				<Container fluid className="py-3" style={{ backgroundColor: "#ffffff", fontFamily: "Arvo, seri" }}>

					<h1 className="display-4  text-center" style={{ color: "#000000" }}>CrowdMOT: A Video Annotation Tool</h1>
					<Row className="my-3 col-xs-12 col-lg-10 offset-lg-1">
						<Col>
							<Instructions />
						</Col>
					</Row>
					<Card className="mb-2 col-xs-8 col-lg-6 offset-lg-1" style={{ borderColor: "#6bc3b9", border: "1px solid #6bc3b9", paddingTop: 20, paddingBottom: 20, backgroundColor: "#ffffff" }}>
						<CardBody>
							<Form className="mb-2 col-xs-12 col-lg-10 offset-lg-1" onSubmit={this.handleSubmit}>
								<FormGroup>
									<Label for="URL"><b>Enter the video URL:</b></Label>
									<Input type="text" name="url" placeholder="http://..." style={{ borderColor: "#6bc3b9", border: "1px solid #6bc3b9" }} ref={this.videoFileInput} value={input.url} onChange={this.handleChange} />
								</FormGroup>
								<h5>OR</h5>
								<FormGroup>
									<Label for="exampleFile" className="pr-2"><b>Upload Video</b></Label><br></br>
									<input type="file" name="videofile" id="videoFile" onChange={this.handleVideoLoad} />
								</FormGroup>
								<hr style={{border: "0.7px solid #6bc3b9"}}/>
								<FormGroup>
									<Label for="URL"><b>Duration of the Video (in seconds):</b></Label>
									<Input type="text" name="videoDuration" style={{ borderColor: "#6bc3b9", border: "1px solid #6bc3b9" }} placeholder="5.00" onChange={this.handleVidDurationChange} />
								</FormGroup>
								<FormGroup>
									<Label for="URL"><b>Framerate of the Video:</b></Label>
									<Input type="text" name="videoFramerate" style={{ borderColor: "#6bc3b9", border: "1px solid #6bc3b9" }} placeholder="60" value={this.state.videoFramerate} onChange={this.handleVidFrameChange} />
								</FormGroup>
								<FormGroup>
									<Label for="Annotation Width"><b>Video Width</b></Label>
									<Input type="text" name="videoWidth" style={{ borderColor: "#6bc3b9", border: "1px solid #6bc3b9" }} placeholder="number" value={input.videoWidth} onChange={this.handleChange} />
								</FormGroup>
								<FormGroup>
									<Label for="exampleFile" className="pr-2"><b>Upload Previous Annotations</b></Label><br></br>
									<input type="file" name="file" id="exampleFile" ref={this.fileInput} />
								</FormGroup>
								<br></br>
								<Row style={{ paddingLeft: 10 }}>
									<Col style={{ padding: 0 }}>
										<Button color="primary" style={{ color: '#ffffff', width: 200 }}>Submit</Button>
									</Col>
								</Row>
							</Form>
						</CardBody>
						<Card style={{ position: "absolute", left: 650, top: 120, height: 400, maxWidth: 500, padding: 20, backgroundColor: '#ffd1dc', backgroundImage: "linear-gradient(-45deg, #ee7752,  #e73c7e, #23a6d5,#23d5ab)",backgroundSize: "400% 400%", animation:"change 10s ease-in-out infinite", opacity: 0.8 }} className="mb-2 col-xs-4 col-lg-2">
							<CardBody>
								<h4 style={{ color: "#ffffff", textAlign: "center", marginBottom: 15, letterSpacing: 2, lineHeight:"1.5rem", fontSize: 28, fontWeight: "bold"}}>CrowdMOT</h4>
								<p style={{padding: 10, color: "#ffffff", margin:0, fontFamily: 'Arvo, serif', letterSpacing: "0.05rem", lineHeight:"1.5rem"}}>We introduce a new video annotation platform for MOT, which we call <b>CrowdMOT</b>. It is designed to support lineage tracking as well as to not require expert workers for video annotation.</p>
								{/* <ul style={{color: "#ffffff"}}>
									<li style={{ padding: 10 }}>
										<i>Video link/file</i> provided will replace the video file in the annotation player below.
									</li>
									<li style={{ padding: 10 }}>Video <i>frame-rate & duration</i> helps generated accurate interpolations.</li>
									<li style={{ padding: 10 }}>Default value for frame-rate and duration are <i>60 (fps) and 5.04 (seconds)</i> respectively.</li>
									<li style={{ padding: 10 }}><i>Video width</i> helps determine the canvas size for video display.</li>
								</ul> */}
							</CardBody>
						</Card>
					</Card>
					{/* <Form className="mb-2 col-xs-12 col-lg-10 offset-lg-1" onSubmit={this.handleSubmit}>
						<FormGroup>
							<Label for="URL"><b>Enter the video URL:</b></Label>
							<Input type="text" name="url" placeholder="http://..." ref={this.videoFileInput} value={input.url} onChange={this.handleChange} />
						</FormGroup>
						<h3>OR</h3>
						<FormGroup>
							<Label for="exampleFile" className="pr-2"><b>Upload Video</b></Label><br></br>
							<input type="file" name="videofile" id="videoFile" onChange={this.handleVideoLoad} />
						</FormGroup>
						<FormGroup>
							<Label for="URL"><b>Duration of the Video (in seconds):</b></Label>
							<Input type="text" name="videoDuration" placeholder="5.00" onChange={this.handleVidDurationChange}/>
						</FormGroup>
						<FormGroup>
							<Label for="URL"><b>Framerate of the Video:</b></Label>
							<Input type="text" name="videoFramerate" placeholder="60"  value={this.state.videoFramerate} onChange={this.handleVidFrameChange} />
						</FormGroup>
						<FormGroup>
							<Label for="Annotation Width"><b>Video Width</b></Label>
							<Input type="text" name="videoWidth" placeholder="number" value={input.videoWidth} onChange={this.handleChange}/>
						</FormGroup>
						<FormGroup>
							<Label for="exampleFile" className="pr-2"><b>Upload Previous Annotations</b></Label><br></br>
							<input type="file" name="file" id="exampleFile" ref={this.fileInput} />
						</FormGroup>
						<Row className="my-3 col-xs-12 col-lg-10 offset-lg-6">
							<Col>
								<Button color="primary" style={{ color: '#ffffff', width:200 }}>Submit</Button>
							</Col>
						</Row>
					</Form> */}

					<Row className="py-3 mb-2 col-xs-12 col-lg-10 offset-lg-1" style={{ background: "rgb(246, 246, 246)", marginTop: 40 }}>

						<Col>
							<TwoDimensionalVideo
								key={
									`${JSON.stringify(params.url)}
								 ${JSON.stringify(params.defaultAnnotations)}
								 ${JSON.stringify(params.videoWidth)}
								 ${JSON.stringify(params.previewHeader)}
								 ${JSON.stringify(params.previewNoticeList)}`
									//the last three to be replaced by the two below and change defaultAnnotations to annotations
									//  ${JSON.stringify(params.annotationWidth)}
									//  ${JSON.stringify(params.previewNotices)}`
								}
								onSubmit={this.handleResultSubmit}
								url={params.url}
								//made changes here annotations (on both sides) changed to defaultAnnotation
								defaultAnnotations={params.defaultAnnotations}
								videoWidth={params.videoWidth}
								previewHeader={params.previewHeader}
								previewNoticeList={params.previewNoticeList}
								hasReview
								isEmptyCheckEnable
								isSplitEnable
								isShowHideEnable
								numAnnotationsToBeAdded={20}
								emptyCheckSubmissionWarningText={params.emptyCheckSubmissionWarningText}
								emptyCheckAnnotationItemWarningText={params.emptyCheckAnnotationItemWarningText}
								emptyAnnotationReminderText={params.emptyAnnotationReminderText}
							//replace everything after defaultannotations with the what is down below
							// annotationWidth={params.annotationWidth}
							// numberOfParentAnnotationsToBeAdded={100000}
							// previewNotices={params.previewNotices}
							/>
						</Col>
						{/* <Row><Col><Modal modalShow={this.state.modalShow}/></Col></Row> */}
					</Row>

					<Card className="mb-2 col-xs-12 col-lg-10 offset-lg-1" style={{ display: this.state.showMe ? "block" : "none",  borderColor: "#6bc3b9", border: "0px solid #6bc3b9", backgroundColor: "#fffff0", paddingTop: 10, paddingBottom: 10, textAlign: "center" }}>
						<CardBody>
							<Row className="my-3 col-xs-12" ref={this.myRef}>
								<Col className="col-lg-6" style={{ alignItems: "right", display: "flex" }}>
									<Button color="primary" style={{ display: this.state.showMe ? "block" : "none", display: "block", color: '#ffffff', width: 250, position: "absolute", left: 200 }} className="download-buttons pull-right" onClick={this.onDownload}>
										Download Raw Data
									</Button>
								</Col>
								<Col className="col-lg-6">
									<Button color="primary" className="download-buttons" style={{ display: this.state.showMe ? "block" : "none", width: 250, display: "block", position: "absolute", left: 100}} onClick={this.getInterpolatedData}>Generate Interpolated Data</Button>
								</Col>
							</Row>



							<Row className="my-3 col-xs-12">
								<Col>
									<table id="interpol-table" style={{ display: 'none' }} className="interpoltableclasstabletr">
										<tbody>
											<tr className="interpoltableclasstabletr">
												<th className="interpoltableclasstdth">Track ID</th>
												<th className="interpoltableclasstdth">x-min</th>
												<th className="interpoltableclasstdth">y-min</th>
												<th className="interpoltableclasstdth">width</th>
												<th className="interpoltableclasstdth">height</th>
												<th className="interpoltableclasstdth">Frame</th>
												<th className="interpoltableclasstdth">Lost</th>
												<th className="interpoltableclasstdth">Occluded</th>
												<th className="interpoltableclasstdth">Generated</th>
												<th className="interpoltableclasstdth">Label</th>
												<th className="interpoltableclasstdth">Parent</th>
											</tr>
										</tbody>
									</table>
								</Col>
							</Row>

							<Row>
								<Col>
									<table id="raw-table" style={{ display: 'none' }} className="rawtableclass">
										<tbody>
											<tr className="rawtableclass">

												<th className="rawtableclasstdth"> </th>

											</tr>
										</tbody>
									</table>
								</Col>
							</Row>
						</CardBody>
					</Card>
					{/* <Row className="my-3 col-xs-12" ref={this.myRef}>
						<Col>
							<Button color="primary" style={{ display: this.state.showMe ? "block" : "none", color: '#ffffff' }} className="download-buttons" onClick={this.onDownload}>
								Download Raw Data
							</Button>
						</Col>
						<Col>
							<Button color="primary" className="download-buttons" style={{ display: this.state.showMe ? "block" : "none" }} onClick={this.getInterpolatedData}>Generate Interpolated Data</Button>
						</Col>
					</Row>
					

					
					<Row className="my-3 col-xs-12">
						<Col>
							<table id="interpol-table" style={{ display: 'none' }} className="interpoltableclasstabletr">
								<tbody>
									<tr className="interpoltableclasstabletr">
										<th className="interpoltableclasstdth">Track ID</th>
										<th className="interpoltableclasstdth">x-min</th>
										<th className="interpoltableclasstdth">y-min</th>
										<th className="interpoltableclasstdth">width</th>
										<th className="interpoltableclasstdth">height</th>
										<th className="interpoltableclasstdth">Frame</th>
										<th className="interpoltableclasstdth">Lost</th>
										<th className="interpoltableclasstdth">Occluded</th>
										<th className="interpoltableclasstdth">Generated</th>
										<th className="interpoltableclasstdth">Label</th>
										<th className="interpoltableclasstdth">Parent</th>
									</tr>
								</tbody>
							</table>
						</Col>
					</Row>

					<Row>
						<Col>
							<table id="raw-table" style={{ display: 'none' }} className="rawtableclass">
								<tbody>
									<tr className="rawtableclass">
										
										<th className="rawtableclasstdth"> </th>
										
									</tr>
								</tbody>
							</table>
						</Col>
					</Row>  */}

					{/* <Row>
							<form ref="uploadForm" id="uploadForm" method="post" action="/mp4toavi">
								<input type="file" name="mp4" encType="multipart-form-data"></input>
								<input type="submit" name="Convert">Convert</input>
							</form>
						</Row>
					<Row className="my-3 col-xs-12 col-lg-10 offset-lg-1">
						<Col>
							<Card><CardBody><a href={dataStr} className="btn btn-secondary btn-lg" download={`${params.url}.json`}> Download the Annotations</a></CardBody></Card>


						</Col>  </Row> */}
					{/* <CSVLink data={JSON.stringify(result, null,2)} style={{ color: '#ffffff' }}>Download Raw Data</CSVLink> */}
					{/* <Col>
							<Button id="export-interpol" color='primary' style={{
								display: 'none', color: '#ffffff',
								border: `1px solid`,
							}} onClick={this.createTable}>Download Interpolated Data</Button>
						</Col> */}




				</Container>

				<style jsx>{`
			 	.download-buttons{
					 display: none !important,
					 color: #ffffff
				 }
			 `}</style>
			</>
		);



	}
}
export default Demo;
