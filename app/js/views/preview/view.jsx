'use strict';

import * as React from 'react';
import constants from 'modules/constants';
import * as _ from 'underscore';
import PhotoGallery from 'components/photo-gallery/view';
import * as priceModule from 'modules/price';

import './style.less';

class Preview extends React.Component {
  render() {
    var props = this.props,
      price = priceModule.split(props.initial.data.transaction.data.price.data.amount.values.value),
      currency = props.initial.data.transaction.data.price.data.currency.values;

    _.each(currency, function(item) {
      if (item.selected) {
        currency = item.name;
      }
    });

    return (
      <div id="preview">
        <price dangerouslySetInnerHTML={{__html: `${price} ${currency}`}} />
        <h1>{props.initial.data.name.values.value}</h1>
        <address>{props.initial.data.address.values.value}</address>
        <PhotoGallery photos={props.photos.data.list.values} />
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
