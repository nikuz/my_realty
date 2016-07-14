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
    this.infowindowOpened = false;
    this.markers = [];
    this.openInfoWindow = this.openInfoWindow.bind(this);
  }
  openInfoWindow(point, marker) {
    this.infowindow.setContent(point.window);
    this.infowindow.open(this.map, marker);
    this.infowindowOpened = true;
    if (point.afterWindowOpen) {
      setTimeout(function() {
        point.afterWindowOpen();
      }, 10);
    }
  }
  addMarkers(points) {
    if (!this.map) {
      return;
    }
    if (points.length > 1) {
      let bounds = new google.maps.LatLngBounds();
      _.each(points, (point) => {
        var marker = new google.maps.Marker({
          position: point.position,
          map: this.map,
          title: point.title,
          selected: point.selected
        });
        bounds.extend(marker.getPosition());
        if (point.window) {
          marker.addListener('click', () => {
            this.openInfoWindow(point, marker);
          });
          if (point.selected) {
            this.openInfoWindow(point, marker);
          }
        }
        this.markers.push(marker);
      });
      this.map.fitBounds(bounds);
      if (this.infowindowOpened) {
        let selectedPoint = _.find(points, {selected: true}),
          selectedMarker = _.find(this.markers, {selected: true});

        if (selectedPoint && selectedMarker) {
          this.infowindow.setContent(selectedPoint.window);
          this.infowindow.open(this.map, selectedMarker);
          this.infowindowOpened = true;
        }
      }
    } else {
      let point = points[0];
      if (point) {
        this.map.setCenter(point.position);
        let marker = new google.maps.Marker({
          position: point.position,
          map: this.map
        });
        this.markers.push(marker);
      }
    }
  }
  removeMarkers() {
    _.each(this.markers, function(markers) {
      markers.setMap(null);
    });
    this.markers = [];
  }
  componentDidMount() {
    var props = this.props,
      points = props.points;

    if (!window.google) {
      $script(`${config.MAPS_API_URL}?key=${config.MAPS_API_KEY}&libraries=places`, 'google');
    }
    $script.ready('google', () => {
      var position;
      if (points[0]) {
        position = points[0].position;
      } else {
        position = {
          lat: 49.76,
          lng: 15.01
        };
      }
      this.map = new google.maps.Map(this.refs.map_container, {
        center: position,
        zoom: points[0] ? 12 : 5,
        zoomControl: true,
        mapTypeControl: props.mapTypeControl || false,
        streetViewControl: props.streetViewControl || false,
        scaleControl: true,
        rotateControl: true,
        scrollwheel: props.scrollwheel || false
      });
      this.infowindow = new google.maps.InfoWindow({
        content: ''
      });
      this.infowindow.addListener('closeclick', () => {
        this.infowindowOpened = false;
        if (this.props.afterWindowClose) {
          this.props.afterWindowClose();
        }
      });
      this.addMarkers(points);
    });
  }
  componentWillUpdate(nextProps) {
    var curPoints = [],
      nextPoints = [];

    _.each(this.props.points, function(item) {
      curPoints.push({
        position: item.position,
        title: item.title,
        window: item.window
      });
    });

    _.each(nextProps.points, function(item) {
      nextPoints.push({
        position: item.position,
        title: item.title,
        window: item.window
      });
    });

    if (JSON.stringify(curPoints) !== JSON.stringify(nextPoints)) {
      this.removeMarkers();
      this.addMarkers(nextProps.points);
    }
  }
  componentWillUnmount() {
    if (window.google) {
      google.maps.event.clearInstanceListeners(this.map);
    }
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
  points: React.PropTypes.array.isRequired,
  afterWindowClose: React.PropTypes.func,
  scrollwheel: React.PropTypes.bool,
  mapTypeControl: React.PropTypes.bool,
  streetViewControl: React.PropTypes.bool
};

export default Map;
