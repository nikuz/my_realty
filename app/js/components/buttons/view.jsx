'use strict';

import React from 'react';
import Loading from '../loading/view';
import Icon from 'react-fa';

import './style.less';

class Button extends React.Component {
  render() {
    var props = this.props,
      style = 'button ',
      textStyle = props.loading ? 'hidden_text' : null;

    if (props.disabled) {
      style += 'disabled';
    } else {
      style += props.type || 'blue';
    }

    if (props.stretched) {
      style += ' stretched';
    }

    return (
      <span className={style} onClick={props.disabled ? null : props.onClick}>
        {props.icon ? <Icon name={props.icon} className="icon" /> : null}
        <span className="button_text_wrap">
          <span className={textStyle}>{props.text}</span>
          {props.loading ?
            <Loading
              size="big"
              color="#FFF"
              className="button_loading"
            />
            : null
          }
        </span>
      </span>
    );
  }
}

Button.propTypes = {
  type: React.PropTypes.string.isRequired,
  stretched: React.PropTypes.bool,
  onClick: React.PropTypes.func.isRequired,
  icon: React.PropTypes.string,
  text: React.PropTypes.string.isRequired,
  loading: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
};

class ButtonGreen extends React.Component {
  render() {
    return <Button {...this.props} type="green" />;
  }
}

class ButtonBlue extends React.Component {
  render() {
    return <Button {...this.props} type="blue" />;
  }
}

class ButtonGray extends React.Component {
  render() {
    return <Button {...this.props} type="gray" />;
  }
}

class ButtonRed extends React.Component {
  render() {
    return <Button {...this.props} type="red" />;
  }
}

export {
  ButtonGreen,
  ButtonBlue,
  ButtonGray,
  ButtonRed
};
