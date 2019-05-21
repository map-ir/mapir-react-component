function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Feature, GeoJSONLayer, Image, ZoomControl, ScaleControl, RotationControl, Popup, Marker, Cluster } from "react-mapbox-gl";
import MapirSource from './components/source';
import { setRTLTextPlugin } from "mapbox-gl";
const Map = ReactMapboxGl({
	accessToken: "pk.Mapir"
});
setRTLTextPlugin("https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.1.2/mapbox-gl-rtl-text.js");

class Mapir extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return React.createElement(Map, _extends({}, this.props, {
			style: `https://map.ir/vector/styles/main/main_mobile_style.json?access_token=${this.props.accessToken}`,
			minZoom: 12,
			center: [51.420470, 35.729054],
			tms: true,
			containerStyle: {
				height: "100vh",
				width: "100vw"
			}
		}));
	}

}

Mapir.Layer = Layer;
Mapir.Feature = Feature;
Mapir.Source = MapirSource;
Mapir.GeoJSONLayer = GeoJSONLayer;
Mapir.Image = Image;
Mapir.ZoomControl = ZoomControl;
Mapir.ScaleControl = ScaleControl;
Mapir.RotationControl = RotationControl;
Mapir.Popup = Popup;
Mapir.Marker = Marker;
Mapir.Cluster = Cluster;
export default Mapir;
