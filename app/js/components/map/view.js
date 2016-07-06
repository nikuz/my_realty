'use strict';

import * as React from 'react';
import * as _ from 'underscore';
import * as config from '../../config';
import $script from 'scriptjs';

import './style.less';

class Map extends React.Component {
  componentDidMount() {
    var points = this.props.points;
    $script(`${config.MAPS_API_URL}?key=${config.MAPS_API_KEY}`, () => {
      this.map = new google.maps.Map(this.refs.map_container, {
        center: points[0],
        zoom: 12,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        scaleControl: true,
        rotateControl: true,
        scrollwheel: false
      });
      if (points.length > 1) {
        let bounds = new google.maps.LatLngBounds();
        _.each(points, (point) => {
          var marker = new google.maps.Marker({
            position: point,
            draggable: true,
            map: this.map
          });
          bounds.extend(marker.getPosition());
        });
        this.map.fitBounds(bounds);
      } else {
        new google.maps.Marker({
          position: points[0],
          draggable: true,
          map: this.map
        });
      }
    });
  }
  componentWillUnmount() {
    google.maps.event.clearInstanceListeners(this.map);
    this.map = null;
  }
  render() {
    return (
      <div id={this.props.containerId} ref="map_container"></div>
    );
  }
}

Map.propTypes = {
  containerId: React.PropTypes.string.isRequired,
  points: React.PropTypes.array.isRequired
};

export default Map;
