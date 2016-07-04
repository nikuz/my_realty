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
import FieldError from 'components/field-error/view';
import ExtendableList from 'components/extendable-list/view';
import Address from 'components/address/view';
import {ButtonBlue} from 'components/buttons/view';

import './style.less';

class OverlayView extends React.Component {
  constructor(props) {
    super(props);
    this.renderItem = this.renderItem.bind(this);
    this.change = this.change.bind(this);
    this.submit = this.submit.bind(this);
  }
  change(item) {
    var model;
    switch (item.id) {
      case 'apartment':
        model = JSON.parse(JSON.stringify(apartmentModel));
        break;
      case 'house':
        model = JSON.parse(JSON.stringify(houseModel));
        break;
    }
    if (model) {
      _.each(model, function(item, key) {
        if (item.type === 'common') {
          model[key] = JSON.parse(JSON.stringify(commonModel[key]));
        }
      });
      this.setState(model);
    }
  }
  submit() {
    this.props.submit(this.state);
  }
  componentWillMount() {
    this.setState({
      initial: JSON.parse(JSON.stringify(commonModel.initial))
    });
  }
  renderItem(dataItem, dataKey) {
    var values,
      required;

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
      case 'segments':
        values = (
          <SegmentedControl
            items={dataItem.values}
            onSelect={this.change}
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
            onChange={this.change}
          />
        );
        break;
      case 'text':
        values = (
          <TextInput
            data={dataItem.values}
            placeholder={dataItem.placeholder}
            size={dataItem.size}
            onChange={this.change}
          />
        );
        break;
      case 'selector':
        values = (
          <Selector
            items={dataItem.values}
            size={dataItem.size}
            onSelect={this.change}
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
              onChange={this.change}
            />
          </span>
        );
        break;
      case 'textarea':
        values = (
          <Textarea
            data={dataItem.values}
            size={dataItem.size}
            onChange={this.change}
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
        values = (
          <Selector
            items={dataItem.values}
            size="small"
            onSelect={this.change}
          />
        );
        break;
      }
      case 'extendable_list': {
        values = (
          <ExtendableList
            data={dataItem.values}
            limit={dataItem.limit}
            onChange={this.change}
          />
        );
        break;
      }
      case 'address': {
        values = (
          <Address
            data={dataItem.values}
            onChange={this.change}
          />
        );
        break;
      }
    }

    if (dataItem.required) {
      required = <span className="is_required">*</span>;
    }

    return (
      <div className="aro_item" key={dataKey} id={'aro_item_' + dataKey}>
        <h5>{dataItem.name} {required}</h5>
        {values}
        {dataItem.error ?
          <FieldError text={dataItem.error_text} />
          : null
        }
      </div>
    );
  }
  render() {
    var state = this.state,
      props = this.props;

    return (
      <Overlay
        title={constants('add_overlay_title')}
        opened={props.opened}
        close={props.close}
        scrollTo={props.scrollTo}
      >
        <div id="add_realty_ovl">
          {_.map(state, (item, key) => {
            return (
              <div key={key}>
                <h3>{item.name}</h3>
                {_.map(item.data, (dataItem, dataKey) => {
                  return this.renderItem(dataItem, dataKey);
                })}
              </div>
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

OverlayView.propTypes = {
  submit: React.PropTypes.func.isRequired,
  close: React.PropTypes.func.isRequired,
  scrollTo: React.PropTypes.number
};

class AddView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollTo: null,
      opened: true
    };
    this.errorFields = [];
    this.close = this.close.bind(this);
    this.reset = this.reset.bind(this);
    this.submit = this.submit.bind(this);
  }
  checkRequiredFields(state) {
    var check = true;
    _.each(state, (item) => {
      var checker = (item) => {
        _.each(item.data, (dataItem, dataKey) => {
          let itemError;
          if (dataItem.type === 'section') {
            return checker(dataItem);
          }

          if (dataItem.required) {
            switch (dataItem.type) {
              case 'text':
              case 'textarea':
              case 'number': {
                let value = dataItem.values.value;
                if ((_.isString(value) && value.trim() === '') || _.isNaN(value)) {
                  itemError = true;
                }
                break;
              }
              case 'segments':
              case 'selector': {
                let selected;
                _.each(dataItem.values, function(item) {
                  if (item.selected) {
                    selected = true;
                  }
                });
                if (!selected) {
                  itemError = true;
                }
                break;
              }
              case 'checkbox':
                if (!dataItem.values.selected) {
                  itemError = true;
                }
                break;
              case 'extendable_list': {
                let dataAdded;
                _.each(dataItem.values, function(item) {
                  if (item.value.trim() !== '') {
                    dataAdded = true;
                  }
                });
                if (!dataAdded) {
                  itemError = true;
                }
                break;
              }
              case 'address': {
                let value = dataItem.values.value;
                if (value.trim() === '' || _.isEmpty(dataItem.values.map)) {
                  itemError = true;
                }
                break;
              }
            }
          }
          if (itemError) {
            check = false;
            dataItem.error = true;
            this.errorFields.push('aro_item_' + dataKey);
          } else {
            dataItem.error = false;
          }
        });
      };
      checker(item);
    });

    return check;
  }
  submit(state) {
    var newState = {
      opened: true
    };
    if (this.checkRequiredFields(state)) {
      let name = state.initial.data.name.values.value.trim();
      state.initial.data.name.error = !!this.props.list[name];
      if (this.props.list[name]) { // check that realty with the same name is already exists
        state.initial.data.name.error = true;
        let field = document.querySelector('#aro_item_name');
        newState.scrollTo = field.offsetTop;
        this.setState(newState);
      } else {
        this.close();
        this.props.save(name, state);
      }
    } else {
      let field = document.querySelector('#' + this.errorFields[0]);
      this.errorFields = [];
      newState.scrollTo = field.offsetTop;
      this.setState(newState);
    }
  }
  reset() {
    this.setState({
      opened: true
    });
  }
  close() {
    this.setState({
      opened: false,
      scrollTo: null
    });
    setTimeout(() => {
      this.props.close();
      this.reset();
    }, 300);
  }
  render() {
    var props = this.props,
      state = this.state;

    if (props.state.name === 'add_realty_ovl') {
      return (
        <OverlayView
          opened={state.opened}
          submit={this.submit}
          close={this.close}
          scrollTo={this.state.scrollTo}
        />
      );
    } else {
      return null;
    }
  }
}

AddView.propTypes = {
  list: React.PropTypes.object.isRequired,
  save: React.PropTypes.func.isRequired,
  close: React.PropTypes.func.isRequired
};

export default AddView;
