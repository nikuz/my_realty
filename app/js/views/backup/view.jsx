'use strict';

import * as React from 'react';
import * as _ from 'underscore';
import constants from 'modules/constants';
import Overlay from 'components/overlay/view';
import {ButtonGreen} from 'components/buttons/view';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ReactTooltip from 'react-tooltip';
import Icon from 'react-fa';

import './style.less';

class BackupView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backup: null,
      loading: false,
      opened: true,
      copy_to_clipboard_tooltip_showed: false
    };
    this.createOnClick = this.createOnClick.bind(this);
    this.copyToClipboardOnClick = this.copyToClipboardOnClick.bind(this);
    this.close = this.close.bind(this);
  }
  createOnClick() {
    this.setState({
      loading: true
    });
    this.props.create(this.props.backup, this.props.list);
  }
  copyToClipboardOnClick() {
    var field = this.refs.field;
    field.select();
    document.execCommand('copy');
    field.selectionStart = field.selectionEnd = -1;
    ReactTooltip.hide();
    this.setState({
      copy_to_clipboard_tooltip_showed: true
    });
    setTimeout(() => {
      this.setState({
        copy_to_clipboard_tooltip_showed: false
      });
    }, 1000);
  }
  getFormattedDate(date) {
    date = new Date(date);
    return date.toUTCString();
  }
  reset() {
    this.setState({
      opened: true,
      loading: false,
      copy_to_clipboard_tooltip_showed: false
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
  componentWillReceiveProps(nextProps) {
    this.setState({
      backup: nextProps.backup,
      loading: false
    });
  }
  render() {
    var state = this.state;
    if (this.props.state.name === 'backup') {
      let backup = state.backup;
      return (
        <Overlay
          title={constants('backup')}
          opened={this.state.opened}
          close={this.close}
        >
          <div id="backup-wrap">
            {backup.fileId ?
              <div id="backup-cont">
                <h3>Last backup:</h3>
                <span id="backup-field-wrap">
                  <input
                    type="text"
                    defaultValue={backup.fileId}
                    readOnly
                    id="backup-id-field"
                    ref="field"
                  />
                  <ReactCSSTransitionGroup
                    transitionName="copy-to-clipboard"
                    transitionAppear
                    transitionEnterTimeout={300}
                    transitionAppearTimeout={300}
                    transitionLeaveTimeout={300}
                    component="span"
                  >
                  {state.copy_to_clipboard_tooltip_showed ?
                    <span id="backup-field-tooltip">
                      {constants('copied_to_clipboard')}
                    </span>
                    : null
                  }
                </ReactCSSTransitionGroup>
                </span>
                <Icon
                  name="clipboard"
                  id="backup-copy-icon"
                  onClick={this.copyToClipboardOnClick}
                  data-tip
                  data-for="copy-icon-tooltip"
                />
                <ReactTooltip id="copy-icon-tooltip" place="top" type="dark" effect="solid">
                  <span>{constants('copy_to_clipboard')}</span>
                </ReactTooltip>
                <p id="backup-date">
                  {constants('backup_last_update')} {this.getFormattedDate(backup.uploadTimestamp)}
                </p>
              </div>
              :
              <div>
                <p>{constants('no_backups')}</p>
              </div>
            }
            {backup.error ?
              <div id="backup-error">
                {backup.error}
              </div>
              : null
            }
            <ButtonGreen
              text={constants('backup_create')}
              onClick={this.createOnClick}
              loading={this.state.loading}
            />
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
