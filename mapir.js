import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Feature, Source, GeoJSONLayer, Image, ZoomControl, ScaleControl, RotationControl, Popup, Marker, Cluster } from "react-mapbox-gl";
import { setRTLTextPlugin } from "mapbox-gl";
import PropTypes from 'prop-types';


const Map = ReactMapboxGl({
	accessToken: "pk.Mapir"
});
setRTLTextPlugin("https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.1.2/mapbox-gl-rtl-text.js");

class Mapir extends Component {

	static propTypes = {
		accessToken: PropTypes.string.isRequired
	};

	constructor(props) {
		super(props)
	}

	render() {

		return (
			<Map
				{...this.props}
				style={"https://support.map.ir/demo/vector/main_mobile_style.json"}
				minZoom={12}
				center={[51.420470, 35.729054]}
				tms={true}
				containerStyle={{
					height: "100vh",
					width: "100vw"
				}}>
			</Map>
		);
	}
}

Mapir.Layer = Layer
Mapir.Feature = Feature
Mapir.Source = Source
Mapir.GeoJSONLayer = GeoJSONLayer
Mapir.Image = Image
Mapir.ZoomControl = ZoomControl
Mapir.ScaleControl = ScaleControl
Mapir.RotationControl = RotationControl
Mapir.Popup = Popup
Mapir.Marker = Marker
Mapir.Cluster = Cluster

export default Mapir;
