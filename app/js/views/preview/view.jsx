'use strict';

import * as React from 'react';
import constants from 'modules/constants';
import * as _ from 'underscore';
import PhotoGallery from 'components/photo-gallery/view';
import Map from 'components/map/view';
import * as priceModule from 'modules/price';

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

    var value;

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
            value = item.value;
          }
        });
        break;
      case 'checkbox':
        return (
          <span key={dataKey} className="checkbox_item">
            checkbox
          </span>
        );
        break;
      case 'year': {
        _.each(dataItem.values, function(item, key) {
          if (item.selected) {
            value = key;
          }
        });
        break;
      }
      case 'extendable_list': {
        // value = dataItem.values;
        value = 'extendable_list';
        break;
      }
    }

    if (value !== '' && value !== undefined) {
      return (
        <div className="preview_item" key={dataKey}>
          {dataItem.name !== ''?
            <span className="preview_item_title">{dataItem.name}: </span>
            : null
          }
          <span className="preview_item_value">{value}</span>
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
      mapPoint = props.initial.data.address.values.map.position;

    _.each(currency, function(item) {
      if (item.selected) {
        currency = item.name;
      }
    });

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
        {_.map(props, (item, key) => {
          if (_.contains(this.excludedFields, key)) {
            return null;
          } else {
            return (
              <div key={key}>
                <h3>{item.name}</h3>
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
          {constants('select_item_for_preview')}
        </div>
      </div>
    );
  }
}

class PreviewView extends React.Component {
  render() {
    var props = this.props,
      data;

    _.each(props.list, function(item) {
      if (item.selected) {
        data = item;
      }
    });

    if (data) {
      return <Preview {...data} />;
    } else {
      return <PreviewEmpty />;
    }
  }
}

export default PreviewView;
