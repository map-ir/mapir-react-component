// function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { Component } from 'react';
import { Marker } from 'react-mapbox-gl';

export default class MarkerComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Marker
        {...this.props}
        coordinates={this.props.coordinates || [51.42047, 35.729054]}
        anchor={this.props.anchor || 'bottom'}
      >
        <img
          style={this.props.style || { width: '3rem' }}
          src={
            this.props.Image ||
            'https://map.ir/css/images/marker-default-red.svg'
          }
        />
      </Marker>
    );
    // return React.createElement(Marker, _extends({}, this.props, {
    //     coordinates:this.props.coordinates || [51.420470, 35.729054],
    //     anchor:this.props.anchor || "bottom"
    // },
    // ),React.createElement('img',{
    //     style:{width:'3rem'},
    //     src: this.props.Image || "https://map.ir/css/images/marker-default-red.svg"
    // }));
  }
}
