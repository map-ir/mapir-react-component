function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { Component } from 'react';
import { Source } from "react-mapbox-gl";

class MapirSource extends Component {
  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Source, _extends({}, this.props, {
      id: this.props.id || "source_id",
      tileJsonSource: this.props.tileJsonSource || {
        "type": "raster",
        "tiles": [`https://map.ir/vector/mobile/1.0.0/Shiveh:Shiveh@EPSG:3857@png/{z}/{x}/{y}.png?x-api-key=${this.props.accessToken}`],
        "tileSize": 512
      }
    })));
  }

}

export default MapirSource;