'use strict';

import * as React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import * as _ from 'underscore';
import constants from '../../modules/constants';

import './style.less';

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      warningTooltipShown: false,
      warningTooltipText: ''
    };
    this.change = this.change.bind(this);
  }
  change(e) {
    var newState = {},
      data = this.state.data,
      value = e.target.value;

    switch (this.props.type) {
      case 'number':
        value = parseFloat(value);
        if (isNaN(value)) {
          value = '';
          newState.warningTooltipShown = true;
          newState.warningTooltipText = constants('only_digits_allowed');
        }
        break;
    }
    data.value = value;
    newState.data = data;
    this.setState(newState);
    _.isFunction(this.props.onChange) && this.props.onChange(data);
  }
  componentDidUpdate() {
    if (this.state.warningTooltipShown) {
      setTimeout(() => {
        this.setState({
          warningTooltipShown: false
        });
      }, 1000);
    }
  }
  render() {
    var state = this.state,
      style = 'text-input';

    if (this.props.size === 'small') {
      style += ' small';
    }
    
    return (
      <span className="text-input-wrapper">
        <input
          type="text"
          value={this.state.data.value}
          placeholder={this.props.placeholder}
          onChange={this.change}
          className={style}
        />
        <ReactCSSTransitionGroup
          transitionName="tooltip"
          transitionAppear
          transitionEnterTimeout={300}
          transitionAppearTimeout={300}
          transitionLeaveTimeout={300}
          component="span"
        >
          {state.warningTooltipShown ?
            <span className="text-input-tooltip">{state.warningTooltipText}</span>
            : null
          }
        </ReactCSSTransitionGroup>
      </span>
    );
  }
}

TextInput.propTypes = {
  data: React.PropTypes.object.isRequired,
  placeholder: React.PropTypes.string,
  type: React.PropTypes.string,
  size: React.PropTypes.string,
  onChange: React.PropTypes.func
};

export default TextInput;
