'use strict';

import React from 'react';
import Loading from '../loading/view';
import Icon from 'react-fa';

import './style.less';

class Button extends React.Component {
  render() {
    var props = this.props,
      style = 'button ' + (props.type || 'blue');

    if (props.stretched) {
      style += ' stretched';
    }

    return (
      <div className="button_wrap">
        <span className={style} onClick={props.onClick}>
          {props.icon ? <Icon name={props.icon} className="icon" /> : null}
          {props.text}
        </span>
        {props.loading ?
          <Loading
            size="big"
            color={props.loadingColor}
            className="button_loading"
          />
          : null
        }
      </div>
    );
  }
}

Button.propTypes = {
  type: React.PropTypes.string.isRequired,
  stretched: React.PropTypes.bool,
  onClick: React.PropTypes.func.isRequired,
  icon: React.PropTypes.string,
  text: React.PropTypes.string.isRequired,
  loadingColor: React.PropTypes.string
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
