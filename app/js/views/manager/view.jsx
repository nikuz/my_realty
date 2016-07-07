'use strict';

import * as React from 'react';
import * as _ from 'underscore';
import constants from 'modules/constants';
import ReactTooltip from 'react-tooltip';
import Icon from 'react-fa';

import './style.less';

class MoreButton extends React.Component {
  render() {
    return (
      <a href="#" className="manager-button" id="manager-more-mutton">
        <Icon name="ellipsis-v" className="manager-button-icon" />
      </a>
    );
  }
}

class AddButton extends React.Component {
  render() {
    var props = this.props;
    return (
      <div>
        <a
          href="#"
          className="manager-button"
          id="add_new_realty"
          onClick={props.addRealty}
          data-tip
          data-for="add-button"
        >
          <Icon name="plus" className="manager-button-icon" />
        </a>
        <ReactTooltip id="add-button" place="left" type="dark" effect="solid">
          <span>{constants('add_overlay_title')}</span>
        </ReactTooltip>
      </div>
    );
  }
}
AddButton.propTypes = {
  addRealty: React.PropTypes.func.isRequired
};

class EditButton extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    var props = this.props;
    props.editRealty(props.previewId);
  }
  render() {
    return (
      <div>
        <a
          href="#"
          className="manager-button"
          id="edit_realty"
          onClick={this.onClick}
          data-tip
          data-for="edit-button"
        >
          <Icon name="pencil" className="manager-button-icon" />
        </a>
        <ReactTooltip id="edit-button" place="left" type="dark" effect="solid">
          <span>{constants('edit_overlay_title')}</span>
        </ReactTooltip>
      </div>
    );
  }
}
EditButton.propTypes = {
  previewId: React.PropTypes.string.isRequired,
  editRealty: React.PropTypes.func.isRequired
};

class Manager extends React.Component {
  render() {
    var props = this.props,
      previewId;

    _.each(props.list, function(item, key) {
      if (item.selected) {
        previewId = key;
      }
    });
    return (
      <div id="manager">
        {previewId ?
          <EditButton
            editRealty={props.editRealty}
            previewId={previewId}
          />
          : null
        }
        <AddButton addRealty={props.addRealty} />
        <MoreButton />
      </div>
    );
  }
}
Manager.propTypes = {
  list: React.PropTypes.object.isRequired
};

export default Manager;
