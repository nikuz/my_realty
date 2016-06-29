'use strict';

import * as React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './style.less';

class Overlay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true
    };
    this.close = this.close.bind(this);
  }
  close() {
    this.setState({
      open: false
    });
    setTimeout(this.props.close, 300);
  }
  render() {
    var state = this.state,
      props = this.props;

    return (
      <ReactCSSTransitionGroup
        transitionName="overlay"
        transitionAppear
        transitionEnterTimeout={300}
        transitionAppearTimeout={300}
        transitionLeaveTimeout={300}
        component="div"
      >
        {state.open ?
          <div id="overlay">
            <div id="ovl_edge" />
            <div id="ovl_cont">
              <div id="ovl_title">{props.title}</div>
              {props.children}
              <a href="#" id="ovl_close" onClick={this.close} />
            </div>
          </div>
          : null
        }
      </ReactCSSTransitionGroup>
    );
  }
}

Overlay.propTypes = {
  title: React.PropTypes.string.isRequired,
  close: React.PropTypes.func.isRequired,
  children: React.PropTypes.element.isRequired
};

export default Overlay;
