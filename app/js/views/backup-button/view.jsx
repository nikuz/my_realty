'use strict';

import * as React from 'react';
import * as _ from 'underscore';
import constants from 'modules/constants';
import Icon from 'react-fa';

import './style.less';

class BackupButtonView extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick(e) {
    e.preventDefault();
    if (_.size(this.props.list)) {
      this.props.openBackup();
    }
  }
  render() {
    var disabled = _.size(this.props.list) === 0;
    return (
      <a
        href="#"
        id="backup-button"
        className={disabled ? 'disabled' : ''}
        onClick={this.onClick}
      >
        <Icon name="floppy-o" id="backup-button-icon" />
        {constants('backup')}
      </a>
    );
  }
}

BackupButtonView.propTypes = {
  list: React.PropTypes.object.isRequired,
  openBackup: React.PropTypes.func.isRequired
};

export default BackupButtonView;
