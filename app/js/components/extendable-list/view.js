'use strict';

import * as React from 'react';
import * as _ from 'underscore';
import Icon from 'react-fa';

import './style.less';

class ExtendableList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    };
    this.renderItem = this.renderItem.bind(this);
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
    this.change = this.change.bind(this);
  }
  add() {
    var data = this.state.data;
    data.push({
      value: ''
    });
    this.setState({
      data
    });
  }
  remove(e) {
    var data = this.state.data,
      id = e.target.getAttribute('data-id');

    data.splice(id, 1);
    this.setState({
      data
    });
  }
  change(e) {
    var data = this.state.data,
      id = e.target.getAttribute('data-id');

    data[id].value = e.target.value;
    this.setState({
      data
    });
  }
  componentWillMount() {
    var data = [];
    _.each(this.props.data, function(item) {
      data.push({
        value: item.value
      });
    });
    if (data.length === 0) {
      data.push({
        value: ''
      });
    }
    this.setState({
      data
    });
  }
  renderItem(item, key, amount) {
    key = Number(key);
    return (
      <div key={key} className="el_item">
        <input
          type="text"
          value={this.state.data.value}
          placeholder={this.props.placeholder}
          onChange={this.change}
          data-id={key}
          className="text-input el_field"
        />
        {key === amount - 1 && amount < this.props.limit ?
          <Icon
            name="plus-square"
            className="eli_add"
            onClick={this.add}
          />
          : null
        }
        {key !== 0 ?
          <Icon
            name="minus-square"
            className="eli_remove"
            data-id={key}
            onClick={this.remove}
          />
          : null
        }
      </div>
    );
  }
  render() {
    var amount = _.size(this.state.data);
    return (
      <div className="el_wrap">
        {_.map(this.state.data, (item, key) => {
          return this.renderItem(item, key, amount);
        })}
      </div>
    );
  }
}

ExtendableList.propTypes = {
  data: React.PropTypes.array.isRequired,
  placeholder: React.PropTypes.string,
  limit: React.PropTypes.number
};

export default ExtendableList;
