'use strict';

import * as React from 'react';
import constants from 'modules/constants';
import ReactTooltip from 'react-tooltip';
import Icon from 'react-fa';

import './style.less';

class AddButton extends React.Component {
  render() {
    var props = this.props;
    return (
      <div>
        <a href="#" id="add_new_realty" onClick={props.addRealty} data-tip data-for="add-button">
          <Icon name="plus" id="add_new_realty_icon" />
        </a>
        <ReactTooltip id="add-button" place="left" type="dark" effect="solid">
          <span>{constants('add_overlay_title')}</span>
        </ReactTooltip>
      </div>
    );
  }
}

export default AddButton;
