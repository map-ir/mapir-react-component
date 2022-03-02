// function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { Source } from 'react-mapbox-gl';

class MapirRaster extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    fetch(`https://map.ir/vector/load?x-api-key=${this.props.apiKey}`, {
      method: 'POST',
    })
      .then(function (res) {})
      .catch(function (err) {});
  }

  render() {
    return (
      <Source
        {...this.props}
        id={this.props.id || 'source_id'}
        tileJsonSource={{
          type: 'raster',
          tiles: [
            `https://map.ir/shiveh/xyz/1.0.0/Shiveh:Shiveh@EPSG:3857@png/{z}/{x}/{y}.png?x-api-key=${this.props.apiKey}`,
          ],
          tileSize: 256,
        }}
      />
    );
    // return React.createElement(Source, _extends({}, this.props, {
    // 	id: "source_id",
    // 	tileJsonSource: {
    // 		"type": "raster",
    // 		"tiles": [
    // 			`https://map.ir/vector/mobile/1.0.0/Shiveh:Shiveh@EPSG:3857@png/{z}/{x}/{y}.png?x-api-key=${this.props.apiKey}`,
    // 		],
    // 		"tileSize": 512
    // 	}
    // }));
  }
}

export default MapirRaster;
