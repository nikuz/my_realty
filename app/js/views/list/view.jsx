'use strict';

import * as React from 'react';
import * as _ from 'underscore';
import * as constants from '../../modules/constants';
import * as priceModule from '../../modules/price';
import {ButtonGreen} from '../../components/buttons/view';
import Icon from 'react-fa';

import './style.less';

class ListView extends React.Component {
  constructor(props) {
    super(props);
    this.filter = this.filter.bind(this);
    this.addRealtyOnClick = this.addRealtyOnClick.bind(this);
  }
  addRealtyOnClick() {
    this.props.addRealty();
  }
  getItemPrice(item) {
    return item.initial.data.transaction.data.price.data.price_amount.values.value;
  }
  getItemArea(item) {
    var realtyType = _.find(item.initial.data.transaction.data.realty_type.values, {selected: true}).id,
      area;

    switch (realtyType) {
      case 'apartment':
        area = item.apartment.data.area.data.all.values.value;
        break;
      case 'house':
        area = item.house.data.area.data.all.values.value;
        break;
    }
    return area;
  }
  filter(list) {
    var filteredList = [],
      props = this.props,
      sortType = _.find(props.filter.sort, {active: true}),
      sortDesc = sortType && sortType.desc,
      filterType = _.find(props.filter.filter, {active: true});

    if (filterType) {
      _.each(list, function(item, key) {
        item.id = key;
        var realtyType = _.find(item.initial.data.transaction.data.realty_type.values, {selected: true}).id;
        switch (filterType.id) {
          case 'favorites':
            if (item.in_favorites) {
              filteredList.push(item);
            }
            break;
          case 'apartments':
            if (realtyType === 'apartment') {
              filteredList.push(item);
            }
            break;
          case 'houses':
            if (realtyType === 'house') {
              filteredList.push(item);
            }
            break;
        }
      });
    } else {
      _.each(list, function(item, key) {
        item.id = key;
        filteredList.push(item);
      });
    }

    if (sortType) {
      filteredList.sort((a, b) => {
        var aValue,
          bValue;

        switch (sortType.id) {
          case 'price':
            aValue = this.getItemPrice(a);
            bValue = this.getItemPrice(b);
            break;
          case 'area':
            aValue = this.getItemArea(a);
            bValue = this.getItemArea(b);
            break;
        }

        if(aValue > bValue){
          return !sortDesc ? 1 : -1;
        } else if(aValue < bValue){
          return !sortDesc ? -1 : 1;
        } else {
          return 0;
        }
      });
    }

    return filteredList;
  }
  renderItem(item, key) {
    var images = item.photos.data.list.values,
      style = 'list_view_item',
      imageStyle = 'list_view_image_wrap',
      contStyle = 'list_view_cont',
      typeStyle = 'list_view_type',
      image,
      initial = item.initial.data,
      price = priceModule.split(this.getItemPrice(item)),
      currency = _.find(initial.transaction.data.price.data.price_currency.values, {selected: true}).name,
      transactionType = _.find(initial.transaction.data.transaction_type.values, {selected: true}).id,
      realty_type = _.find(initial.transaction.data.realty_type.values, {selected: true}).id,
      location = window.location.hash.replace('#', '');

    if (item.selected || location === item.id) {
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
        onClick={this.props.markAsSelected.bind(null, item.id)}
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
          <div className="list_view_name">{initial.name.values.value}</div>
          <address>{initial.address.values.value}</address>
          <price>
            <amount dangerouslySetInnerHTML={{__html: price}} />
            <currency> {currency}</currency>
          </price>
        </div>
      </div>
    );
  }
  render() {
    var props = this.props,
      listLength = _.size(props.list);

    if (listLength) {
      let list = this.filter(props.list);
      return (
        <div id="list">
          <div id="list_counters">
            <span id="list_filter_total">
              {constants.get('total')}: {listLength}
            </span>
            <span id="list_filter_filtered">
              {constants.get('filtered')}: {list.length}
            </span>
          </div>
          {list.length ?
            _.map(list, (item, key) => {
              return this.renderItem(item, key);
            })
            :
            <p id="list_empty_text">
              {constants.get('list_filter_empty')}
            </p>
          }
        </div>
      );
    } else {
      return (
        <div id="list_empty">
          <i id="list_empty_edge" />
          <p id="list_empty_text">
            <ButtonGreen
              text={constants.get('list_empty')}
              onClick={this.addRealtyOnClick}
            />
          </p>
        </div>
      );
    }
  }
}

ListView.propTypes = {
  list: React.PropTypes.object.isRequired,
  filter: React.PropTypes.object.isRequired,
  markAsSelected: React.PropTypes.func.isRequired,
  addRealty: React.PropTypes.func.isRequired
};

export default ListView;
