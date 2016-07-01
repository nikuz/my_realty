'use strict';

import * as React from 'react';
import Icon from 'react-fa';

import './style.less';

class FieldError extends React.Component {
  render() {
    return (
      <span className="field-error">
        <Icon name="exclamation-circle" className="field-error-icon" />
        <span className="field-error-text">{this.props.text}</span>
      </span>
    );
  }
}

FieldError.propTypes = {
  text: React.PropTypes.string.isRequired
};

export default FieldError;
