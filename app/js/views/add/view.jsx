'use strict';

import * as React from 'react';
import * as _ from 'underscore';
import constants from 'modules/constants';
import apartmentModel from 'models/apartment';
import houseModel from 'models/house';
import commonModel from 'models/common';
import Overlay from 'components/overlay/view';
import SegmentedControl from 'components/segmented-control/view';
import TextInput from 'components/text-input/view';
import Selector from 'components/selector/view';
import CheckBox from 'components/checkbox/view';
import Textarea from 'components/textarea/view';
import ExtendableList from 'components/extendable-list/view';
import {ButtonBlue} from 'components/buttons/view';

import './style.less';

class OverlayView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: {
        data: {
          value: ''
        }
      },
      transaction_type: {
        rent: {
          name: constants('add_transaction_type_rent')
        },
        buy: {
          name: constants('add_transaction_type_buy')
        }
      },
      realty_type: {
        apartment: {
          name: constants('add_realty_type_apartment')
        },
        house: {
          name: constants('add_realty_type_house')
        }
      },
      model: null
    };
    this.setRealtyTypeSelected = this.setRealtyTypeSelected.bind(this);
    this.parseModel = this.parseModel.bind(this);
    this.submit = this.submit.bind(this);
  }
  setRealtyTypeSelected(type) {
    var model;
    switch (type) {
      case 'apartment':
        model = Object.assign({}, apartmentModel);
        break;
      case 'house':
        model = Object.assign({}, houseModel);
        break;
    }
    _.each(model, function(item, key) {
      if (item.type === 'common') {
        model[key] = Object.assign({}, commonModel[item.name]);
      }
    });
    this.setState({
      model
    });
  }
  parseModel(dataItem, dataKey) {
    var values;
    switch (dataItem.type) {
      case 'section':
        return (
          <section key={dataKey} className={dataItem.layout}>
            {_.map(dataItem.data, (dataItem, dataKey) => {
              return this.parseModel(dataItem, dataKey);
            })}
          </section>
        );
        break;
      case 'segments':
        values = (
          <SegmentedControl
            items={dataItem.values}
          />
        );
        break;
      case 'number':
        values = (
          <TextInput
            data={dataItem.values}
            placeholder={dataItem.placeholder}
            type="number"
            size={dataItem.size}
          />
        );
        break;
      case 'text':
        values = (
          <TextInput
            data={dataItem.values}
            placeholder={dataItem.placeholder}
            size={dataItem.size}
          />
        );
        break;
      case 'selector':
        values = (
          <Selector
            items={dataItem.values}
            size={dataItem.size}
          />
        );
        break;
      case 'checkbox':
        return (
          <span key={dataKey} className="checkbox_item">
            <CheckBox
              name={dataItem.id}
              label={dataItem.name}
              data={dataItem.values}
              icon={dataItem.icon}
            />
          </span>
        );
        break;
      case 'textarea':
        values = (
          <Textarea
            data={dataItem.values}
            size={dataItem.size}
          />
        );
        break;
      case 'year': {
        let years = {};
        for (let i = 1800, l = new Date().getFullYear(); i <= l; i++) {
          years[i] = {
            name: i
          };
        }
        dataItem.values = years;
        values = <Selector items={dataItem.values} size="small" />;
        break;
      }
      case 'extendable_list': {
        values = (
          <ExtendableList
            data={dataItem.values}
            limit={dataItem.limit}
          />
        );
        break;
      }
    }

    return (
      <div className="aro_item" key={dataKey}>
        <h5>{dataItem.name}</h5>
        {values}
      </div>
    );
  }
  submit() {
    this.props.submit(this.state);
  }
  render() {
    var state = this.state,
      props = this.props;

    return (
      <Overlay title={constants('add_overlay_title')} opened={props.opened} close={props.close}>
        <div id="add_realty_ovl">
          <section>
            <TextInput data={state.name.data} placeholder={constants('add_name')} />
          </section>
          <section>
            <h3>{constants('add_transaction_type')}</h3>
            <SegmentedControl items={state.transaction_type} />
          </section>
          <section>
            <h3>{constants('add_realty_type')}</h3>
            <SegmentedControl items={state.realty_type} onSelect={this.setRealtyTypeSelected} />
          </section>
          {_.map(state.model, (item, key) => {
            return (
              <section key={key}>
                <h3>{item.name}</h3>
                {_.map(item.data, (dataItem, dataKey) => {
                  return this.parseModel(dataItem, dataKey);
                })}
              </section>
            );
          })}

          <div>
            <ButtonBlue text="Save" onClick={this.submit} />
          </div>
        </div>
      </Overlay>
    );
  }
}

class AddView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: true
    };
    this.close = this.close.bind(this);
    this.submit = this.submit.bind(this);
  }
  submit(data) {
    console.log(data);
    this.close();
  }
  close() {
    this.setState({
      opened: false
    });
    setTimeout(() => {
      this.props.close();
      this.setState({
        opened: true
      });
    }, 300);
  }
  render() {
    var props = this.props;

    if (props.state.name === 'add_realty_ovl') {
      return (
        <OverlayView
          opened={this.state.opened}
          submit={this.submit}
          close={this.close}
        />
      );
    } else {
      return null;
    }
  }
}

export default AddView;
