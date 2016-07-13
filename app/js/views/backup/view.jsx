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
      backup: null,
      loading: false,
      opened: true
    };
    this.createOnClick = this.createOnClick.bind(this);
    this.close = this.close.bind(this);
  }
  createOnClick() {
    this.setState({
      loading: true
    });
    this.props.create(this.props.list);
  }
  reset() {
    this.setState({
      opened: true,
      loading: false
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
  componentWillMount() {
    this.setState({
      backup: this.props.backup
    });
  }
  render() {
    if (this.props.state.name === 'backup') {
      let backup = this.state.backup;
      return (
        <Overlay
          title={constants('backup')}
          opened={this.state.opened}
          close={this.close}
        >
          <div id="backup-wrap">
            {backup.id ?
              <div>
                {backup.id}
                {backup.date}
              </div>
              :
              <div>
                <p>{constants('no_backups')}</p>
                <ButtonGreen
                  text={constants('backup_create')}
                  onClick={this.createOnClick}
                  loading={this.state.loading}
                />
              </div>
            }
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
  backup: React.PropTypes.object.isRequired,
  create: React.PropTypes.func.isRequired,
  close: React.PropTypes.func.isRequired
};

export default BackupView;
