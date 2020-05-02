function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { Component } from 'react';
import { Source } from "react-mapbox-gl";
import axios from 'axios';

class MapirSource extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		axios({
			method: "GET",
			url: `https://map.ir/shiveh/load?x-api-key=${this.props.apiKey}`
		  }).then(function (res) {

		  }).catch(function (err) {

		  })
	}

	render() {
		return React.createElement(Source, _extends({}, this.props, {
			id: "source_id",
			tileJsonSource: {
				"type": "raster",
				"tiles": [
					`https://map.ir/vector/mobile/1.0.0/Shiveh:Shiveh@EPSG:3857@png/{z}/{x}/{y}.png?x-api-key=${this.props.apiKey}`,
				],
				"tileSize": 512
			}
		}));
	}

}

export default MapirSource;
