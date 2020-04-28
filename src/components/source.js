import React, { Component } from 'react';
import { Source } from "react-mapbox-gl";

class MapirSource extends Component {

	render() {
		return(
			<>
				<Source 
					{...this.props}
					id={this.props.id || "source_id"}
					tileJsonSource= {this.props.tileJsonSource || {
						"type": "raster",
						"tiles": [
							`https://map.ir/vector/mobile/1.0.0/Shiveh:Shiveh@EPSG:3857@png/{z}/{x}/{y}.png?x-api-key=${this.props.accessToken}`,
						],
						"tileSize": 512
					}}
				/>
			</>
		)
	}

}

export default MapirSource;