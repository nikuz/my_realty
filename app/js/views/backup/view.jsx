'use strict';

import * as React from 'react';
import * as _ from 'underscore';
import constants from 'modules/constants';
import Overlay from 'components/overlay/view';
import {
  ButtonGreen,
  ButtonBlue
} from 'components/buttons/view';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ReactTooltip from 'react-tooltip';
import CheckBox from 'components/checkbox/view';
import Icon from 'react-fa';

import './style.less';

class BackupView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backup: null,
      masterFileName: null,
      loading: false,
      loading_download: false,
      opened: true,
      copy_to_clipboard_tooltip_showed: false
    };
    this.createOnClick = this.createOnClick.bind(this);
    this.copyToClipboardOnClick = this.copyToClipboardOnClick.bind(this);
    this.doNotOverwriteOnChange = this.doNotOverwriteOnChange.bind(this);
    this.downloadOnClick = this.downloadOnClick.bind(this);
    this.masterNameOnChange = this.masterNameOnChange.bind(this);
    this.close = this.close.bind(this);
  }
  createOnClick() {
    if (this.state.loading) {
      return;
    }
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
  masterNameOnChange(e) {
    this.setState({
      masterFileName: e.target.value
    });
  }
  doNotOverwriteOnChange(value) {
    this.props.doNotOverWriteChange(value.selected);
  }
  downloadOnClick() {
    var props = this.props,
      sure = true;

    if (!props.backup.do_not_overwrite) {
      sure = confirm(constants('backup_download_overwrite_confirmation'));
    }
    if (sure) {
      this.setState({
        loading_download: true
      });
      props.download(props.backup, props.list, this.state.masterFileName);
    }
  }
  getFormattedDate(date) {
    date = new Date(date);
    return date.toUTCString();
  }
  reset() {
    this.setState({
      opened: true,
      loading: false,
      loading_download: false,
      copy_to_clipboard_tooltip_showed: false,
      masterFileName: null
    });
    this.props.reset();
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
      backup: this.props.backup,
      masterFileName: this.props.backup.masterFileName
    });
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      backup: nextProps.backup,
      masterFileName: nextProps.backup.masterFileName,
      loading: false,
      loading_download: false
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
            {backup.fileName ?
              <div id="backup-cont">
                <h3>Last backup:</h3>
                <span id="backup-field-wrap">
                  <input
                    type="text"
                    defaultValue={backup.fileName}
                    readOnly
                    className="backup-field"
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
              <p className="backup-error">
                {backup.error}
              </p>
              : null
            }
            <ButtonGreen
              text={constants('backup_upload')}
              onClick={this.createOnClick}
              loading={this.state.loading}
              icon="cloud-upload"
              disabled={!_.size(this.props.list)}
            />
            <hr id="backup-separator" />
            <p id="backup-download-note">{constants('backup_download_info')}</p>
            <input
              type="text"
              defaultValue={state.masterFileName}
              onChange={this.masterNameOnChange}
              className="backup-field"
            />
            <div id="backup-overwrite-checkbox">
              <CheckBox
                name="do_not_overwrite"
                label={constants('backup_download_do_not_overwrite')}
                data={{}}
                checked={backup.do_not_overwrite || false}
                onChange={this.doNotOverwriteOnChange}
              />
            </div>
            {backup.download_error ?
              <p className="backup-error">
                {backup.download_error}
              </p>
              : null
            }
            {backup.success_download ?
              <p className="backup-success">
                {constants('backup_download_success')} {backup.success_download}
              </p>
              : null
            }
            <ButtonBlue
              text={constants('backup_download')}
              onClick={this.downloadOnClick}
              loading={this.state.loading_download}
              disabled={!state.masterFileName}
              icon="cloud-download"
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
  close: React.PropTypes.func.isRequired,
  doNotOverWriteChange: React.PropTypes.func.isRequired,
  download: React.PropTypes.func.isRequired,
  reset: React.PropTypes.func.isRequired
};

export default BackupView;
