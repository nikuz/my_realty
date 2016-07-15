'use strict';

import * as React from 'react';
import * as constants from '../../modules/constants';
import Icon from 'react-fa';

import './style.less';

class BackupButtonView extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick(e) {
    e.preventDefault();
    this.props.openBackup();
  }
  render() {
    return (
      <a
        href="#"
        id="backup-button"
        onClick={this.onClick}
      >
        <Icon name="floppy-o" id="backup-button-icon" />
        {constants.get('backup')}
      </a>
    );
  }
}

BackupButtonView.propTypes = {
  openBackup: React.PropTypes.func.isRequired
};

export default BackupButtonView;
