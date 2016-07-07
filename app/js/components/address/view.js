'use strict';

import * as React from 'react';
import * as _ from 'underscore';
import * as config from '../../config';
import $script from 'scriptjs';

import './style.less';

class Address extends React.Component {
  constructor(props) {
    super(props);
    var defaultCoordinates,
      presetCoordinates;

    if (props.data.map && props.data.map.position) {
      presetCoordinates = true;
      defaultCoordinates = props.data.map.position;
    } else {
      defaultCoordinates = {
        lat: 49.719,
        lng: 12.229
      };
    }

    this.state = {
      data: this.props.data,
      defaultCoordinates,
      presetCoordinates
    };
    this.addressChanged = this.addressChanged.bind(this);
    this.pointPositionChangedByUser = this.pointPositionChangedByUser.bind(this);
    this.addressOnChange = this.addressOnChange.bind(this);
    this.change = this.change.bind(this);
  }
  addressOnChange(e) {
    var data = this.state.data;
    _.extend(data, {
      value: e.target.value,
      map: {}
    });
    this.setState({
      data
    });
  }
  change() {
    var mapCenter = this.map.getCenter(),
      markerPosition = this.marker.getPosition();

    this.state.data.map = {
      zoom: this.map.getZoom(),
      center: {
        lat: mapCenter.lat(),
        lng: mapCenter.lng()
      },
      position: {
        lat: markerPosition.lat(),
        lng: markerPosition.lng()
      }
    };
    _.isFunction(this.props.onChange) && this.props.onChange(this.props.data);
  }
  addressChanged() {
    var place = this.autocomplete.getPlace();
    if (place) {
      let coordinates = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng()
      };
      this.map.setCenter(coordinates);
      this.marker.setPosition(coordinates);
      this.state.data.value = place.formatted_address;
      this.change();
    }
  }
  pointPositionChangedByUser() {
    var data = this.state.data,
      markerPosition = this.marker.getPosition();

    data.value = `${markerPosition.lat().toFixed(3)}, ${markerPosition.lng().toFixed(3)}`;
    this.setState(data);
    this.change();
  }
  componentDidMount() {
    var state = this.state;
    if (!window.google) {
      $script(`${config.MAPS_API_URL}?key=${config.MAPS_API_KEY}&libraries=places`, 'google');
    }
    $script.ready('google', () => {
      this.map = new google.maps.Map(this.refs.map_container, {
        center: state.defaultCoordinates,
        zoom: state.presetCoordinates ? 9 : 4,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        scaleControl: true,
        rotateControl: true,
        scrollwheel: false
      });
      this.map.addListener('dragend', this.change);
      this.map.addListener('zoom_changed', this.change);
      this.marker = new google.maps.Marker({
        position: state.defaultCoordinates,
        draggable: true,
        map: this.map
      });
      this.marker.addListener('mouseout', this.pointPositionChangedByUser);
      if (navigator.geolocation && !state.presetCoordinates) {
        navigator.geolocation.getCurrentPosition((position) => {
          if (!this.map || !this.marker) {
            return;
          }
          var coordinates = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          this.map.setCenter(coordinates);
          this.marker.setPosition(coordinates);
          this.map.setZoom(9);
        });
      }
      this.autocomplete = new google.maps.places.Autocomplete(
        this.refs.text_field,
        {
          types: ['address']
        }
      );
      this.autocomplete.addListener('place_changed', this.addressChanged);
    });
  }
  componentWillUnmount() {
    google.maps.event.clearInstanceListeners(this.map);
    google.maps.event.clearInstanceListeners(this.marker);
    google.maps.event.clearInstanceListeners(this.autocomplete);
    this.marker = null;
    this.autocomplete = null;
    this.map = null;
  }
  render() {
    var state = this.state,
      value = state.data.value;

    return (
      <div>
        <input
          type="text"
          value={value}
          ref="text_field"
          onChange={this.addressOnChange}
          className="text-input"
        />
        <div id="map_container" ref="map_container" />
      </div>
    );
  }
}

Address.propTypes = {
  data: React.PropTypes.object.isRequired,
  onChange: React.PropTypes.func
};

export default Address;
