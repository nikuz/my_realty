'use strict';

import * as React from 'react';
import * as _ from 'underscore';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import constants from 'modules/constants';

import './style.less';

class PhotoGalleryFullScreen extends React.Component {
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
  componentWillUnmount() {
    document.removeEventListener('keydown', this.escapeDetector);
  }
  render() {
    var props = this.props,
      photoItem = props.photos[props.selectedPhoto];

    return (
      <ReactCSSTransitionGroup
        transitionName="photo-gallery"
        transitionAppear
        transitionEnterTimeout={300}
        transitionAppearTimeout={300}
        transitionLeaveTimeout={300}
        component="div"
      >
        {this.props.selectedPhoto !== null ?
          <div id="photo-gallery-overlay">
            <div id="photo-gallery-edge"></div>
            <div
              id="photo-gallery-item"
              style={{backgroundImage: `url(${photoItem.value})`}}
            >
            </div>
          </div>
          : null
        }
      </ReactCSSTransitionGroup>
    );
  }
}

PhotoGalleryFullScreen.propTypes = {
  photos: React.PropTypes.array.isRequired,
  selectedPhoto: React.PropTypes.number,
  close: React.PropTypes.func.isRequired
};

class PhotoGalleryTape extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPhoto: null
    };
    this.openFullScreenMode = this.openFullScreenMode.bind(this);
    this.closeFullScreenMode = this.closeFullScreenMode.bind(this);
  }
  openFullScreenMode(e) {
    this.setState({
      selectedPhoto: Number(e.target.getAttribute('data-id'))
    });
  }
  closeFullScreenMode() {
    this.setState({
      selectedPhoto: null
    });
  }
  render() {
    if (this.props.photos.length) {
      return (
        <div>
          <div id="photo-tape">
            {_.map(this.props.photos, (photoItem, key) => {
              return (
                <img
                  key={key}
                  data-id={key}
                  className="photo-tape-item"
                  src={photoItem.value}
                  onClick={this.openFullScreenMode}
                  alt=""
                />
              );
            })}
            <div className="photo-tape-end"></div>
          </div>
          <PhotoGalleryFullScreen
            photos={this.props.photos}
            selectedPhoto={this.state.selectedPhoto}
            close={this.closeFullScreenMode}
          />
        </div>
      );
    } else {
      return (
        <div id="photo-tape-empty">
          {constants('photo_gallery_empty')}
        </div>
      );
    }
  }
}

PhotoGalleryTape.propTypes = {
  photos: React.PropTypes.array.isRequired
};

export default PhotoGalleryTape;
