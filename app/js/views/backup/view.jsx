'use strict';

import * as React from 'react';
import * as _ from 'underscore';
import constants from 'modules/constants';
import Overlay from 'components/overlay/view';
import {ButtonGreen} from 'components/buttons/view';
import Icon from 'react-fa';

import './style.less';

class BackupView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: true
    };
    this.close = this.close.bind(this);
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
  render() {
    if (this.props.state.name === 'backup') {
      return (
        <Overlay
          title={constants('backup')}
          opened={this.state.opened}
          close={this.close}
        >
          <div id="backup-wrap">
            Backup
          </div>
        </Overlay>
      );
    } else {
      return null;
    }
  }
}

BackupView.propTypes = {
  list: React.PropTypes.object.isRequired,
  close: React.PropTypes.func.isRequired
};

export default BackupView;
