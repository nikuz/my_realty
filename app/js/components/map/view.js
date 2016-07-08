'use strict';

import * as React from 'react';
import * as _ from 'underscore';
import Icon from 'react-fa';
import * as config from '../../config';
import $script from 'scriptjs';

import './style.less';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.map = null;
    this.infowindow = null;
    this.points = [];
  }
  addPoints(points) {
    if (points.length > 1) {
      let bounds = new google.maps.LatLngBounds();
      _.each(points, (point) => {
        var marker = new google.maps.Marker({
          position: point.position,
          map: this.map,
          title: point.title
        });
        bounds.extend(marker.getPosition());
        if (point.window) {
          this.infowindow = new google.maps.InfoWindow({
            content: point.window
          });
          marker.addListener('click', () => {
            this.infowindow.open(this.map, marker);
          });
        }
        this.points.push(marker);
      });
      this.map.fitBounds(bounds);
    } else {
      this.map.setCenter(points[0].position);
      let marker = new google.maps.Marker({
        position: points[0].position,
        map: this.map
      });
      this.points.push(marker);
    }
  }
  removePoints() {
    _.each(this.points, function(point) {
      point.setMap(null);
    });
  }
  componentDidMount() {
    var points = this.props.points;
    if (!window.google) {
      $script(`${config.MAPS_API_URL}?key=${config.MAPS_API_KEY}&libraries=places`, 'google');
    }
    $script.ready('google', () => {
      this.map = new google.maps.Map(this.refs.map_container, {
        center: points[0].position,
        zoom: 12,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        scaleControl: true,
        rotateControl: true,
        scrollwheel: false
      });
      this.addPoints(points);
    });
  }
  componentWillUpdate(nextProps) {
    this.removePoints();
    this.addPoints(nextProps.points);
  }
  componentWillUnmount() {
    google.maps.event.clearInstanceListeners(this.map);
    this.map = null;
  }
  render() {
    return (
      <div className="map-container" id={this.props.containerId} ref="map_container">
        <i className="map-container-edge" />
        <Icon name="map-marker" className="map-container-marker" />
      </div>
    );
  }
}

Map.propTypes = {
  containerId: React.PropTypes.string.isRequired,
  points: React.PropTypes.array.isRequired
};

export default Map;
