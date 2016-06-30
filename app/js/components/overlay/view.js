'use strict';

import * as React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './style.less';

class Overlay extends React.Component {
  constructor(props) {
    super(props);
    this.escapeDetector = this.escapeDetector.bind(this);
  }
  escapeDetector(event) {
    if (event.keyCode == 27) {
      this.close();
    }
  }
  componentDidMount() {
    document.addEventListener('keydown', this.escapeDetector);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.escapeDetector);
  }
  render() {
    var props = this.props;

    return (
      <ReactCSSTransitionGroup
        transitionName="overlay"
        transitionAppear
        transitionEnterTimeout={300}
        transitionAppearTimeout={300}
        transitionLeaveTimeout={300}
        component="div"
      >
        {props.opened ?
          <div id="overlay">
            <div id="ovl_edge" />
            <div id="ovl_cont">
              <div id="ovl_title">{props.title}</div>
              {props.children}
              <a href="#" id="ovl_close" onClick={props.close} />
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
