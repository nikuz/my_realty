'use strict';

import * as React from 'react';
import * as _ from 'underscore';
import * as priceModule from 'modules/price';
import Icon from 'react-fa';

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
      initial = item.initial.data,
      price = priceModule.split(initial.transaction.data.price.data.price_amount.values.value),
      currency = _.find(initial.transaction.data.price.data.price_currency.values, {selected: true}).name,
      transactionType = _.find(initial.transaction.data.transaction_type.values, {selected: true}).id,
      realty_type = _.find(initial.transaction.data.realty_type.values, {selected: true}).id,
      location = window.location.hash.replace('#', '');

    if (item.selected || location === key) {
      style += ' selected';
    }

    if (images.length === 0) {
      imageStyle += ' lvi_no_image';
    } else {
      image = images[0].value;
    }

    if (transactionType === 'rent') {
      contStyle += ' list_view_cont_rent';
    } else {
      contStyle += ' list_view_cont_buy';
    }
    
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
          {item.in_favorites ?
            <Icon name="star" className="list_view_favorite_icon" />
            : null
          }
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
        {_.map(props.list, (item, key) => {
          return this.renderItem(item, key);
        })}
      </div>
    );
  }
}

export default ListView;
