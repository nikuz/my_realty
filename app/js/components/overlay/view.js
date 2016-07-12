'use strict';

import * as React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import animate from 'modules/animate';
import Icon from 'react-fa';

import './style.less';

class Overlay extends React.Component {
  constructor(props) {
    super(props);
    this.escapeDetector = this.escapeDetector.bind(this);
  }
  escapeDetector(event) {
    if (event.keyCode == 27) {
      this.props.close();
    }
  }
  componentDidMount() {
    document.addEventListener('keydown', this.escapeDetector);
  }
  componentDidUpdate() {
    if (this.props.scrollTo) {
      let overlay = this.refs.overlay;
      animate({
        initial: overlay.scrollTop,
        duration: 200,
        target: this.props.scrollTo,
        draw: progress => {
          overlay.scrollTop = progress;
        }
      });
    }
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.escapeDetector);
  }
  render() {
    var props = this.props,
      style = {};

    if (props.width) {
      style.width = props.width;
    }

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
          <div id="overlay" ref="overlay">
            <div id="ovl_edge" />
            <div id="ovl_cont" style={style}>
              <div id="ovl_title">{props.title}</div>
              {props.children}
              <a href="#" id="ovl-close" onClick={props.close}>
                <Icon name="times" id="ovl-close-icon" />
              </a>
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
  children: React.PropTypes.element.isRequired,
  scrollTo: React.PropTypes.number,
  width: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ])
};

export default Overlay;
