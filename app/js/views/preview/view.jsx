'use strict';

import * as React from 'react';
import * as _ from 'underscore';
import * as constants from '../../modules/constants';
import PhotoGallery from '../../components/photo-gallery/view';
import Map from '../../components/map/view';
import * as priceModule from '../../modules/price';
import Icon from 'react-fa';
import Linkify from 'linkify';

import './style.less';

class Preview extends React.Component {
  constructor(props) {
    super(props);
    this.excludedFields = [
      'name',
      'photos',
      'realty_type',
      'transaction_type',
      'address'
    ];
  }
  renderItem(dataItem, dataKey) {
    if (_.contains(this.excludedFields, dataKey)) {
      return null;
    }

    var value,
      valueStyle = 'preview_item_value';

    switch (dataItem.type) {
      case 'section':
        return (
          <div key={dataKey} className={dataItem.layout}>
            {_.map(dataItem.data, (dataItem, dataKey) => {
              return this.renderItem(dataItem, dataKey);
            })}
          </div>
        );
        break;
      case 'text':
      case 'textarea':
      case 'number':
      case 'address':
        value = dataItem.values.value;
        if (dataKey === 'price_amount') {
          value = <span dangerouslySetInnerHTML={{__html: priceModule.split(value)}} />;
        }
        break;
      case 'segments':
      case 'selector':
        _.each(dataItem.values, function(item) {
          if (item.selected) {
            value = constants.get(item.name);
            switch (item.id) {
              case 'yes':
                valueStyle += ' piv_yes';
                break;
              case 'no':
                valueStyle += ' piv_no';
                break;
            }
          }
        });
        break;
      case 'checkbox': {
        if (dataItem.values.selected) {
          let icon = dataItem.icon;
          if (/png|svg|gif/.test(icon)) {
            icon = <img src={icon} className="checkbox_icon" />;
          } else {
            icon = <Icon name={icon} className="checkbox_icon" />;
          }
          return (
            <span key={dataKey} className="checkbox_item">
              {icon}
              {constants.get(dataItem.name)}
            </span>
          );
        } else {
          return null;
        }
      }
      case 'year': {
        _.each(dataItem.values, function(item, key) {
          if (item.selected) {
            value = key;
          }
        });
        break;
      }
      case 'extendable_list': {
        return (
          <div key={dataKey}>
            {_.map(dataItem.values, function(item, key) {
              return (
                <div key={key} className="preview_item_title">
                  {item.value}
                </div>
              );
            })}
          </div>
        );
      }
    }

    if (value !== '' && value !== undefined) {
      if (_.isString(value) && dataKey.indexOf('url') !== -1) {
        value = Linkify(value, {
          format: function (value) {
            var maxLength = 50;
            if (value.length > maxLength + 10) {
              value = value.substring(0, 50) + '...' + value.substr(-7, 7);
            }
            return value;
          }
        });
        value = <span dangerouslySetInnerHTML={{__html: value}} />;
      }
      return (
        <div className="preview_item" key={dataKey}>
          {dataItem.name !== '' ?
            <span className="preview_item_title">{constants.get(dataItem.name)}: </span>
            : null
          }
          <span className={valueStyle}>{value}</span>
        </div>
      );
    } else {
      return null;
    }
  }
  render() {
    var props = this.props,
      price = priceModule.split(props.initial.data.transaction.data.price.data.price_amount.values.value),
      currency = props.initial.data.transaction.data.price.data.price_currency.values,
      mapPoint = props.initial.data.address.values.map.position,
      transactionType = props.initial.data.transaction.data.transaction_type.values,
      realty_type = props.initial.data.transaction.data.realty_type.values,
      transactionIcon,
      realtyIcon;

    _.each(transactionType, function(item) {
      if (item.selected) {
        transactionType = item.id;
      }
    });
    if (transactionType === 'rent') {
      transactionIcon = 'preview_rent_icon';
    } else {
      transactionIcon = 'preview_buy_icon';
    }

    _.each(realty_type, function(item) {
      if (item.selected) {
        realty_type = item.id;
      }
    });
    if (realty_type === 'house') {
      realtyIcon = 'preview_house_icon';
    } else {
      realtyIcon = 'preview_apartment_icon';
    }

    _.each(currency, function(item) {
      if (item.selected) {
        currency = item.name;
      }
    });

    mapPoint = {
      position: mapPoint
    };

    return (
      <div id="preview">
        <price>
          <amount dangerouslySetInnerHTML={{__html: price}} />
          <currency> {currency}</currency>
        </price>
        <h1>{props.initial.data.name.values.value}</h1>
        <address>{props.initial.data.address.values.value}</address>
        <Map
          containerId="preview-map"
          points={[mapPoint]}
        />
        <PhotoGallery photos={props.photos.data.list.values} />
        <i id={realtyIcon} />
        <i id={transactionIcon} />
        {_.map(props, (item, key) => {
          if (_.contains(this.excludedFields, key) || (item.type !== 'common' && realty_type !== item.type)) {
            return null;
          } else {
            return (
              <div key={key}>
                <h2>{constants.get(item.name)}</h2>
                {_.map(item.data, (dataItem, dataKey) => {
                  return this.renderItem(dataItem, dataKey);
                })}
              </div>
            );
          }
        })}
      </div>
    );
  }
}

class PreviewEmpty extends React.Component {
  render() {
    return (
      <div id="preview_empty">
        <div id="pe_edge" />
        <div id="pe_content">
          {constants.get('select_item_for_preview')}
        </div>
      </div>
    );
  }
}

class PreviewView extends React.Component {
  render() {
    var props = this.props,
      data,
      location = window.location.hash.replace('#', '');

    if (props.list[location]) {
      data = props.list[location];
    } else {
      _.each(props.list, function(item) {
        if (item.selected) {
          data = item;
        }
      });
    }

    if (data) {
      return <Preview {...data} />;
    } else {
      return <PreviewEmpty />;
    }
  }
}

export default PreviewView;
