'use strict';

import * as React from 'react';
import * as _ from 'underscore';
import constants from 'modules/constants';
import Overlay from 'components/overlay/view';
import {ButtonGreen} from 'components/buttons/view';
import {getValueByPath} from 'modules/object';
import * as priceModule from 'modules/price';
import Icon from 'react-fa';

import './style.less';

class ComparatorView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: true,
      params: 'all'
    };
    this.excludeFields = [
      'name',
      'photos',
      'realty_type',
      'transaction_type',
      'address',
      'contacts',
      'additional',
      'sale_type',
      'price'
    ];
    this.renderRow = this.renderRow.bind(this);
    this.close = this.close.bind(this);
    this.reset = this.reset.bind(this);
  }
  reset() {
    this.setState({
      opened: true
    });
  }
  close() {
    this.setState({
      opened: false
    });
    setTimeout(() => {
      this.props.close();
      this.reset();
    }, 300);
  }
  getRows(list) {
    var rows = {};

    var checker = (item, path) => {
      _.each(item.data, (dataItem, dataKey) => {
        if (this.excludeFields.indexOf(dataKey) !== -1) {
          return;
        }
        var dataPath = _.clone(path);
        dataPath.push('data', dataKey);
        if (dataItem.type === 'section') {
          return checker(dataItem, dataPath);
        } else {
          rows[dataPath.join('.')] = dataItem.name;
        }
      });
    };

    _.each(_.sample(list), (item, key) => {
      if (this.excludeFields.indexOf(key) !== -1) {
        return;
      }
      checker(item, [key]);
    });

    return rows;
  }
  firstRowRender() {
    return (
      <thead>
        <tr>
          <td id="comparator_params_cell">
            <a
              href="#"
              className="comparator_params_switcher active"
            >
              {constants('params_all')}
            </a><br />
            <a
              href="#"
              className="comparator_params_switcher"
            >
              {constants('params_different')}
            </a>
          </td>
          {_.map(this.props.list, (item, key) => {
            if (item.in_compare) {
              var images = item.photos.data.list.values,
                image,
                initial = item.initial.data,
                price = priceModule.split(initial.transaction.data.price.data.price_amount.values.value),
                currency = _.find(initial.transaction.data.price.data.price_currency.values, {selected: true}).name,
                realty_type = _.find(initial.transaction.data.realty_type.values, {selected: true}).id,
                typeStyle = '';

              if (images.length) {
                image = images[0].value;
              }

              if (realty_type === 'house') {
                typeStyle += ' comparator_item_type_house';
              } else {
                typeStyle += ' comparator_item_type_apartment';
              }

              return (
                <td key={key}>
                  <div>
                    <a
                      href={'index.html#' + key}
                      target="_blank"
                      className={'comparator_item_image' + typeStyle}
                      style={image ? {backgroundImage: `url(${image})`} : null}
                    />
                  </div>
                  <price>
                    <amount dangerouslySetInnerHTML={{__html: price}}/>
                    <currency> {currency}</currency>
                  </price>
                </td>
              );
            } else {
              return null;
            }
          })}
        </tr>
      </thead>
    );
  }
  renderRow(rowName, rowKey) {
    return (
      <tbody key={rowKey}>
        <tr>
          <td>{rowName}</td>
          {_.map(this.props.list, (item, key) => {
            if (item.in_compare) {
              let data = getValueByPath(item, rowKey),
                value;

              switch (data.type) {
                case 'text':
                case 'textarea':
                case 'number':
                  value = data.values.value;
                  break;
                case 'segments':
                case 'selector':
                  _.each(data.values, function(item) {
                    if (item.selected) {
                      value = item.name;
                    }
                  });
                  break;
                case 'checkbox':
                  if (data.values.selected) {
                    value = <Icon name="check" />;
                  }
                  break;
              }

              if (value === '' || value === '--' || !value) {
                value = '—';
              }
              return (
                <td key={key}>
                  {value}
                </td>
              )
            } else {
              return null;
            }
          })}
        </tr>
      </tbody>
    );
  }
  render() {
    var state = this.state;

    if (this.props.state.name === 'comparator') {
      let rows = this.getRows(this.props.list);
      return (
        <Overlay
          title={constants('comparator')}
          width="80%"
          opened={state.opened}
          close={this.close}
        >
          <table id="comparator-table">
            {this.firstRowRender()}
            {_.map(rows, (rowName, key) => {
              return this.renderRow(rowName, key);
            })}
          </table>
        </Overlay>
      );
    } else {
      return null;
    }
  }
}

ComparatorView.propTypes = {
  list: React.PropTypes.object.isRequired,
  close: React.PropTypes.func.isRequired
};

export default ComparatorView;
