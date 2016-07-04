'use strict';

import * as React from 'react';
import * as _ from 'underscore';
import Icon from 'react-fa';

import './style.less';

class Address extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    };
    this.fillInAddress = this.fillInAddress.bind(this);
    this.geolocate = this.geolocate.bind(this);
  }
  geolocate() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.map.setCenter({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
      });
    }
  }
  fillInAddress() {
    console.log(this.autocomplete.getPlace());
  }
  componentDidMount() {
    this.map = new google.maps.Map(this.refs.map_container, {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8,
      zoomControl: true,
      mapTypeControl: false,
      streetViewControl: false,
      scaleControl: true,
      rotateControl: true,
      scrollwheel: false
    });
    this.autocomplete = new google.maps.places.Autocomplete(
      this.refs.text_field,
      {
        types: ['address']
      }
    );
    this.autocomplete.addListener('place_changed', this.fillInAddress);
  }
  render() {
    var props = this.props;
    return (
      <div>
        <input
          type="text"
          ref="text_field"
          onChange={this.change}
          onFocus={this.geolocate}
          className="text-input"
        />
        <div id="map_container" ref="map_container" />
      </div>
    );
  }
}

Address.propTypes = {
  onChange: React.PropTypes.func
};

export default Address;
