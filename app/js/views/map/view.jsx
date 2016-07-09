'use strict';

import * as React from 'react';
import * as _ from 'underscore';
import * as priceModule from 'modules/price';
import Map from 'components/map/view';
import Icon from 'react-fa';

import './style.less';

class MapView extends React.Component {
  constructor(props) {
    super(props);
    this.afterWindowOpen = this.afterWindowOpen.bind(this);
  }
  afterWindowOpen() {
    var openedItemId = document.getElementById('map-window-id').value;
    this.props.markAsSelected(openedItemId);
  }
  renderPointMapWindow(item, key) {
    var initial = item.initial.data,
      images = item.photos.data.list.values,
      imageStyle = '',
      image,
      price = priceModule.split(initial.transaction.data.price.data.price_amount.values.value),
      currency = _.find(initial.transaction.data.price.data.price_currency.values, {selected: true}).name,
      realty_type = _.find(initial.transaction.data.realty_type.values, {selected: true}).id;

    if (images.length === 0) {
      imageStyle += 'mwi_no_image';
    } else {
      image = images[0].value;
    }

    return `
      <div id="map-window-wrap">
        <input type="hidden" value="${key}" id="map-window-id" />
        <div id="map-window-image-wrap" class="${imageStyle}">
          ${image ?
            `<i id="map-window-image" style="background-image: url(${image})"></i>`
            : 
            ''
          }
          <span id="map-window-type" class="${realty_type}"></span>
          <a href="index.html#${key}" target="_blank" class="blocker"></a>
        </div>
        <div id="map-window-cont">
          <h2 id="map-window-name">
            <a href="index.html#${key}" target="_blank">
              ${initial.name.values.value}
            </a>
          </h2>
          <address id="map-window-name">
            ${initial.address.values.value}
          </address>
          <price>
            <amount>${price}</amount>
            <currency> ${currency}</currency>
          </price>
          ${item.in_favorites ?
            `<span class="fa fa-star" id="map-window-to-favorites"></span>`
            :
            ''
          }
        </div>
      </div>
    `;
  }
  render() {
    var props = this.props,
      points = _.map(props.list, (item, key) => {
        var initial = item.initial.data;
        return {
          position: initial.address.values.map.position,
          title: initial.name.values.value,
          window: this.renderPointMapWindow(item, key),
          afterWindowOpen: this.afterWindowOpen,
          selected: item.selected
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

MapView.propTypes = {
  list: React.PropTypes.object.isRequired,
  markAsSelected: React.PropTypes.func.isRequired
};

export default MapView;
