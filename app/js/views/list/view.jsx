'use strict';

import * as React from 'react';
import * as _ from 'underscore';
import * as priceModule from 'modules/price';

import './style.less';

class ListView extends React.Component {
  renderItem(item, key) {
    console.log(item);
    var images = item.photos.data.list.values,
      style = 'list_view_item',
      imageStyle = 'list_view_image_wrap',
      contStyle = 'list_view_cont',
      typeStyle = 'list_view_type',
      image,
      price = priceModule.split(item.initial.data.transaction.data.price.data.price_amount.values.value),
      currency = item.initial.data.transaction.data.price.data.price_currency.values,
      transactionType = item.initial.data.transaction.data.transaction_type.values,
      realty_type = item.initial.data.transaction.data.realty_type.values;

    if (item.selected) {
      style += ' selected';
    }

    if (images.length === 0) {
      imageStyle += ' lvi_no_image';
    } else {
      image = images[0].value;
    }

    _.each(currency, function(item) {
      if (item.selected) {
        currency = item.name;
      }
    });

    _.each(transactionType, function(item) {
      if (item.selected) {
        transactionType = item.id;
      }
    });
    if (transactionType === 'rent') {
      contStyle += ' list_view_cont_rent';
    } else {
      contStyle += ' list_view_cont_buy';
    }

    _.each(realty_type, function(item) {
      if (item.selected) {
        realty_type = item.id;
      }
    });
    if (realty_type === 'house') {
      typeStyle += ' list_view_type_house';
    } else {
      typeStyle += ' list_view_type_apartment';
    }

    return (
      <div
        key={key}
        className={style}
        onClick={this.props.markAsSelected.bind(null, key)}
      >
        <div className={imageStyle}>
          {image ?
            <i className="list_view_image" style={{backgroundImage: `url(${image})`}}/>
            : null
          }
          <span className={typeStyle} />
        </div>
        <div className={contStyle}>
          <div className="list_view_name">{item.initial.data.name.values.value}</div>
          <address>{item.initial.data.address.values.value}</address>
          <price>
            <amount dangerouslySetInnerHTML={{__html: price}} />
            <currency> {currency}</currency>
          </price>
        </div>
      </div>
    );
  }
  render() {
    var props = this.props;

    return (
      <div id="list">
        <div id="list_cont">
          {_.map(props.list, (item, key) => {
            return this.renderItem(item, key);
          })}
        </div>
      </div>
    );
  }
}

export default ListView;
