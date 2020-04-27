import React from 'react';
import { Marker } from "react-mapbox-gl";

export default class MapirMarker extends React.Component {

	render() {
        return (
            <Marker 
                coordinates={this.props.coordinates || [51.420470, 35.729054]}
                anchor={this.props.anchor || "bottom"}
            >
                <img
                    alt=""
                    style={{width:'3rem'}}
                    src={this.props.Image || "https://map.ir/css/images/marker-default-red.svg"} 
                />
            </Marker>
        )
	}
}