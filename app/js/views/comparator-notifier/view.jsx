'use strict';

import * as React from 'react';
import * as _ from 'underscore';
import * as constants from '../../modules/constants';
import {ButtonGreen} from '../../components/buttons/view';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Icon from 'react-fa';

import './style.less';

class ComparatorNotifierView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      opened: false
    };
    this.checker = this.checker.bind(this);
    this.compareOnClick = this.compareOnClick.bind(this);
    this.close = this.close.bind(this);
  }
  compareOnClick() {
    this.props.openComparator();
    this.close();
  }
  checker(list) {
    var counter = 0;

    _.each(list, function(item) {
      if (item.in_compare) {
        counter++;
      }
    });
    if (counter !== this.state.counter) {
      this.setState({
        counter,
        opened: counter > this.state.counter
      });
    }
  }
  close() {
    this.setState({
      opened: false
    });
  }
  componentWillUpdate(nextProps) {
    this.checker(nextProps.list);
  }
  componentWillMount() {
    var counter = 0;

    _.each(this.props.list, function(item) {
      if (item.in_compare) {
        counter++;
      }
    });

    this.setState({
      counter
    });
  }
  render() {
    var state = this.state,
      addedItem;

    addedItem = _.max(this.props.list, item => item.in_compare_date);
    if (addedItem === -Infinity) {
      addedItem = null;
    }

    return (
      <ReactCSSTransitionGroup
        transitionName="comparator-notifier"
        transitionAppear
        transitionEnterTimeout={300}
        transitionAppearTimeout={300}
        transitionLeaveTimeout={300}
        component="div"
      >
        {state.opened && addedItem ?
          <div id="comparator-notifier">
            <div id="comparator-notifier-cont">
              <div id="comparator-notifier-button">
                <ButtonGreen
                  text={constants.get('compare')}
                  onClick={this.compareOnClick}
                />
              </div>
              <h3 id="comparator-notifier-title">
                {addedItem.initial.data.name.values.value}
              </h3>
              <p id="comparator-notifier-text">
                {constants.get('compare_total')} {state.counter}
              </p>
              <a href="#" id="comparator-notifier-close" onClick={this.close}>
                <Icon name="times" id="comparator-notifier-close-icon" />
              </a>
            </div>
          </div>
          : null
        }
      </ReactCSSTransitionGroup>
    );
  }
}

ComparatorNotifierView.propTypes = {
  list: React.PropTypes.object.isRequired,
  openComparator: React.PropTypes.func.isRequired
};

export default ComparatorNotifierView;
