'use strict';

import * as React from 'react';
import constants from 'modules/constants';
import ReactTooltip from 'react-tooltip';
import Icon from 'react-fa';

import './style.less';

class EditButton extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    var props = this.props;
    props.editRealty(props.realtyId);
  }
  render() {
    return (
      <div>
        <a
          href="#"
          id="edit_realty"
          onClick={this.onClick}
          data-tip
          data-for="edit-button"
        >
          <Icon name="pencil" id="edit_icon" />
        </a>
        <ReactTooltip id="edit-button" place="left" type="dark" effect="solid">
          <span>{constants('edit_overlay_title')}</span>
        </ReactTooltip>
      </div>
    );
  }
}

export default EditButton;
