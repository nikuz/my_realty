'use strict';

import * as React from 'react';
import * as _ from 'underscore';
import * as constants from '../../modules/constants';
import PhotoGalleryTape from '../../components/photo-gallery/view';
import Map from '../../components/map/view';
import * as priceModule from '../../modules/price';
import animate from '../../modules/animate';
import Icon from 'react-fa';
import Linkify from 'linkify';

import './style.less';

class Preview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewId: null,
      contentEl: null
    };
    this.excludedFields = [
      'name',
      'photos',
      'realty_type',
      'transaction_type',
      'address'
    ];
    this.changeViewTopPosition = this.changeViewTopPosition.bind(this);
    this.setViewPosition = this.setViewPosition.bind(this);
  }
  setViewPosition() {
    var bodyEl = document.getElementById('list_view_wrapper'),
      bodyWidth = bodyEl.clientWidth,
      bodyPosition = bodyEl.getBoundingClientRect(),
      viewWrapEl = this.refs.wrap;

    _.extend(viewWrapEl.style, {
      left: bodyPosition.left + bodyWidth / 100 * 40 + 'px',
      right: bodyPosition.right - bodyWidth + 20 + 'px'
    });
  }
  changeViewTopPosition() {
    var state = this.state,
      border = 48,
      contentEl = state.contentEl,
      contScroll = contentEl.scrollTop,
      viewWrapEl = this.refs.wrap,
      viewPosition = parseInt(window.getComputedStyle(viewWrapEl).top);

    if (contScroll < border) {
      let topPosition;

      if (contScroll > 0 && viewPosition > 0) {
        topPosition = border - contScroll;
      }
      if (topPosition < 1) {
        topPosition = 1;
      } else if (topPosition > border) {
        topPosition = border;
      }
      viewWrapEl.style.top = `${topPosition}px`;
    } else {
      if (viewPosition !== 1) {
        viewWrapEl.style.top = '1px';
      }
    }
    if (contScroll === 0) {
      viewWrapEl.style.top = `${border}px`;
    }
  }
  componentWillMount() {
    var contentEl = document.getElementById('wrap');
    this.setState({
      contentEl: contentEl,
      viewId: this.props.id
    });
  }
  componentDidMount() {
    this.changeViewTopPosition();
    this.setViewPosition();
    this.state.contentEl.addEventListener('scroll', this.changeViewTopPosition);
    window.addEventListener('resize', this.setViewPosition);
  }
  componentWillReceiveProps(nextProps) {
    if (this.state.viewId !== nextProps.id) {
      animate({
        initial: this.refs.view.scrollTop,
        duration: 200,
        target: 0,
        draw: progress => {
          this.refs.view.scrollTop = progress;
        }
      });
      this.setState({
        viewId: nextProps.id
      });
    }
  }
  componentWillUnmount() {
    this.state.contentEl.removeEventListener('scroll', this.changeViewTopPosition);
    window.removeEventListener('resize', this.setViewPosition);
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
      <div id="preview_wrap" ref="wrap">
        <div id="preview" ref="view">
          <div id="preview_cont">
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
            <PhotoGalleryTape
              photos={props.photos.data.list.values}
              photoItemOnClick={this.props.photoOpen}
            />
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
        </div>
      </div>
    );
  }
}

Preview.propTypes = {
  id: React.PropTypes.string.isRequired,
  photoOpen: React.PropTypes.func.isRequired
};

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
      data = _.find(props.list, {selected: true});
    }

    if (data) {
      return <Preview {...data} photoOpen={this.props.photoOpen} />;
    } else {
      return <PreviewEmpty />;
    }
  }
}

PreviewView.propTypes = {
  photoOpen: React.PropTypes.func.isRequired
};

export default PreviewView;
