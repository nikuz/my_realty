'use strict';

import * as React from 'react';
import constants from 'modules/constants';
import * as _ from 'underscore';
import * as Price from 'modules/price';

import './style.less';

class ListView extends React.Component {
  renderItem(item, key) {
    // console.log(item);
    var images = item.photos.data.list.values,
      noImage = false;

    if (images.length === 0) {
      images = [{value: '/images/no_photo.svg'}];
      noImage = true;
    }
    var image = images[0].value,
      price = Price.split(item.initial.data.transaction.data.price.data.amount.values.value),
      currency = item.initial.data.transaction.data.price.data.currency.values;

    _.each(currency, function(item) {
      if (item.selected) {
        currency = item.name;
      }
    });

    return (
      <div key={key} className="list_view_item">
        <div
          className={'list_view_image ' + (noImage ? 'lvi_no_image' : null)}
          style={{backgroundImage: `url(${image})`}}
        ></div>
        <div className="list_view_cont">
          <div className="list_view_name">{item.initial.data.name.values.value}</div>
          <address>{item.initial.data.address.values.value}</address>
          <price dangerouslySetInnerHTML={{__html: `${price} ${currency}`}} />
        </div>
      </div>
    );
  }
  render() {
    var props = this.props;

    return (
      <div id="list">
        <a href="#" id="list_add_icon" onClick={props.addRealty}>
          {constants('add_overlay_title')}
        </a>
        {_.map(props.list, (item, key) => {
          return this.renderItem(item, key);
        })}
      </div>
    );
  }
}

export default ListView;
