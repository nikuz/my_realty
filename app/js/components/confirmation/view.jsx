'use strict';

import * as React from 'react';
import * as constants from '../../modules/constants';
import Overlay from '../../components/overlay/view';
import {
  ButtonBlue,
  ButtonGray,
  ButtonRed
} from '../../components/buttons/view';

import './style.less';

class Confirmation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: true
    };
    this.close = this.close.bind(this);
    this.confirm = this.confirm.bind(this);
  }
  close(confirm) {
    this.setState({
      opened: false
    });
    confirm = confirm === true;
    setTimeout(() => {
      this.props.confirm(confirm);
    }, 300);
  }
  confirm() {
    this.close(true);
  }
  render() {
    var props = this.props,
      state = this.state;

    var MainButton = ButtonBlue;
    if (props.warning) {
      MainButton = ButtonRed;
    }

    return (
      <Overlay
        title={props.title}
        opened={state.opened}
        close={this.close}
      >
        <div>
          <p id="confirmation-text">{props.message}</p>
          <span id="confirmation-button">
            <MainButton
              text={constants.get('ok')}
              onClick={this.confirm}
            />
          </span>
          <ButtonGray
            text={constants.get('cancel')}
            onClick={this.close}
          />
        </div>
      </Overlay>
    );
  }
}

Confirmation.propTypes = {
  title: React.PropTypes.string.isRequired,
  message: React.PropTypes.string.isRequired,
  confirm: React.PropTypes.func.isRequired,
  warning: React.PropTypes.bool
};

export default Confirmation;
