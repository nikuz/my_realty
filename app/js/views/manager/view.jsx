'use strict';

import * as React from 'react';
import * as _ from 'underscore';
import * as constants from '../../modules/constants';
import Confirmation from '../../components/confirmation/view';
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
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick(e) {
    e.preventDefault();
    this.props.addRealty();
  }
  render() {
    return (
      <div>
        <a
          href="#"
          className="manager-button"
          id="add_new_realty"
          onClick={this.onClick}
          data-tip
          data-for="add-button"
        >
          <Icon name="plus" className="manager-button-icon" />
        </a>
        <ReactTooltip id="add-button" place="left" type="dark" effect="solid">
          <span>{constants.get('add_overlay_title')}</span>
        </ReactTooltip>
      </div>
    );
  }
}
AddButton.propTypes = {
  addRealty: React.PropTypes.func.isRequired
};

class RemoveButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmationOpened: false
    };
    this.onClick = this.onClick.bind(this);
    this.confirm = this.confirm.bind(this);
  }
  onClick(e) {
    e.preventDefault();
    this.setState({
      confirmationOpened: true
    });
  }
  confirm(confirmation) {
    this.setState({
      confirmationOpened: false
    });
    if (confirmation) {
      var props = this.props;
      props.removeRealty(props.previewId);
    }
  }
  render() {
    return (
      <div>
        <a
          href="#"
          className="manager-button"
          id="remove_realty"
          onClick={this.onClick}
          data-tip
          data-for="remove-button"
        >
          <Icon name="trash" className="manager-button-icon" />
        </a>
        <ReactTooltip id="remove-button" place="left" type="dark" effect="solid">
          <span>{constants.get('remove_button_tooltip')}</span>
        </ReactTooltip>
        {this.state.confirmationOpened ?
          <Confirmation
            title={constants.get('remove_button_tooltip')}
            message={constants.get('remove_prompt') + `"${this.props.previewId}"?`}
            confirm={this.confirm}
            warning
          />
          : null
        }
      </div>
    );
  }
}
RemoveButton.propTypes = {
  previewId: React.PropTypes.string.isRequired,
  removeRealty: React.PropTypes.func.isRequired
};

class EditButton extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick(e) {
    e.preventDefault();
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
          <span>{constants.get('edit_overlay_title')}</span>
        </ReactTooltip>
      </div>
    );
  }
}
EditButton.propTypes = {
  previewId: React.PropTypes.string.isRequired,
  editRealty: React.PropTypes.func.isRequired
};

class FavoritesButton extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick(e) {
    e.preventDefault();
    var props = this.props;
    if (props.alreadyFavorites) {
      props.removeFromFavorites(props.previewId);
    } else {
      props.addToFavorites(props.previewId);
    }
    ReactTooltip.hide();
  }
  render() {
    var style = 'manager-button';
    if (this.props.alreadyFavorites) {
      style += ' active';
    }
    return (
      <div>
        <a
          href="#"
          className={style}
          id="add_to_favorites"
          onClick={this.onClick}
          data-tip
          data-for="favorites-button"
        >
          <Icon name="star" className="manager-button-icon" />
        </a>
        <ReactTooltip id="favorites-button" place="left" type="dark" effect="solid">
          {this.props.alreadyFavorites ?
            <span>{constants.get('favorites_remove_button_tooltip')}</span>
            :
            <span>{constants.get('favorites_button_tooltip')}</span>
          }
        </ReactTooltip>
      </div>
    );
  }
}
FavoritesButton.propTypes = {
  previewId: React.PropTypes.string.isRequired,
  addToFavorites: React.PropTypes.func.isRequired,
  removeFromFavorites: React.PropTypes.func.isRequired,
  alreadyFavorites: React.PropTypes.bool.isRequired
};

class CompareButton extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick(e) {
    e.preventDefault();
    var props = this.props;
    if (props.alreadyInCompare) {
      props.removeFromCompare(props.previewId);
    } else {
      props.addToCompare(props.previewId);
    }
    ReactTooltip.hide();
  }
  render() {
    var style = 'manager-button';
    if (this.props.alreadyInCompare) {
      style += ' active';
    }
    return (
      <div>
        <a
          href="#"
          className={style}
          id="add_to_compare"
          onClick={this.onClick}
          data-tip
          data-for="compare-button"
        >
          <span id="mbi-compare" className="manager-button-icon" />
        </a>
        <ReactTooltip id="compare-button" place="left" type="dark" effect="solid">
          {this.props.alreadyInCompare ?
            <span>{constants.get('compare_remove_button_tooltip')}</span>
            :
            <span>{constants.get('compare_button_tooltip')}</span>
          }
        </ReactTooltip>
      </div>
    );
  }
}
CompareButton.propTypes = {
  previewId: React.PropTypes.string.isRequired,
  addToCompare: React.PropTypes.func.isRequired,
  removeFromCompare: React.PropTypes.func.isRequired,
  alreadyInCompare: React.PropTypes.bool.isRequired
};

class Manager extends React.Component {
  render() {
    var props = this.props,
      previewId,
      alreadyFavorites = false,
      alreadyInCompare = false;

    _.each(props.list, function(item, key) {
      if (item.selected) {
        previewId = key;
        if (item.in_favorites) {
          alreadyFavorites = true;
        }
        if (item.in_compare) {
          alreadyInCompare = true;
        }
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
        {previewId ?
          <CompareButton
            addToCompare={props.addToCompare}
            removeFromCompare={props.removeFromCompare}
            previewId={previewId}
            alreadyInCompare={alreadyInCompare}
          />
          : null
        }
        {previewId ?
          <FavoritesButton
            addToFavorites={props.addToFavorites}
            removeFromFavorites={props.removeFromFavorites}
            previewId={previewId}
            alreadyFavorites={alreadyFavorites}
          />
          : null
        }
        {previewId ?
          <RemoveButton
            removeRealty={props.removeRealty}
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
