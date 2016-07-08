'use strict';

import * as React from 'react';
import * as _ from 'underscore';
import * as priceModule from 'modules/price';
import Map from 'components/map/view';

import './style.less';

class MapView extends React.Component {
  constructor(props) {
    super(props);
  }
  renderPointMapWindow(item) {
    var initial = item.initial.data,
      price = priceModule.split(initial.transaction.data.price.data.price_amount.values.value),
      currency = _.find(initial.transaction.data.price.data.price_currency.values, {selected: true}).name;

    return `
      <div id="map-window-wrap">
        <img src="" alt="">
        <h2 id="map-window-name">${initial.name.values.value}</h2>
        <address id="map-window-name">
          ${initial.address.values.value}
        </address>
        <price>
          <amount>${price}</amount>
          <currency> ${currency}</currency>
        </price>
      </div>
    `;
  }
  render() {
    var props = this.props,
      points = _.map(props.list, (item) => {
        var initial = item.initial.data;
        return {
          position: initial.address.values.map.position,
          title: initial.name.values.value,
          window: this.renderPointMapWindow(item)
        };
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
