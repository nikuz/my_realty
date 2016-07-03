'use strict';

import * as React from 'react';

import './style.less';

class FieldError extends React.Component {
  render() {
    return (
      <div className="field-error">
        <span className="field-error-text">{this.props.text}</span>
      </div>
    );
  }
}

FieldError.propTypes = {
  text: React.PropTypes.string.isRequired
};

export default FieldError;
