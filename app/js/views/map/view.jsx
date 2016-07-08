'use strict';

import * as React from 'react';
import * as _ from 'underscore';
import Map from 'components/map/view';

import './style.less';

class MapView extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var props = this.props,
      points = _.map(props.list, function(item) {
        return item.initial.data.address.values.map.position;
      });

    return (
      <Map
        containerId="map-view"
        points={points}
      />
    );
  }
}

export default MapView;
