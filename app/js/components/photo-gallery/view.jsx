'use strict';

import * as React from 'react';
import * as _ from 'underscore';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import constants from '../../modules/constants';
import Loading from '../../components/loading/view';
import Icon from 'react-fa';

import './style.less';

class PhotoGalleryFullScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPhoto: props.selectedPhoto,
      loading: true,
      loaded: false
    };
    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
    this.keyDetector = this.keyDetector.bind(this);
  }
  prev() {
    if (this.props.photos.length === 1) {
      return;
    }
    var index = this.state.selectedPhoto - 1;
    if (index < 0) {
      index = this.props.photos.length - 1;
    }
    this.setState({
      selectedPhoto: index,
      loading: true,
      loaded: false
    });
  }
  next() {
    if (this.props.photos.length === 1) {
      return;
    }
    var index = this.state.selectedPhoto + 1;
    if (index > this.props.photos.length - 1) {
      index = 0;
    }
    this.setState({
      selectedPhoto: index,
      loading: true,
      loaded: false
    });
  }
  keyDetector(event) {
    switch (event.keyCode) {
      case 27:
        this.props.close();
        break;
      case 37:
        this.prev();
        break;
      case 39:
        this.next();
        break;
    }
  }
  componentDidMount() {
    document.addEventListener('keydown', this.keyDetector);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      selectedPhoto: nextProps.selectedPhoto
    });
  }
  componentDidUpdate() {
    if (this.state.loaded) {
      return;
    }
    this.image = new Image();
    this.image.src = this.props.photos[this.state.selectedPhoto].value;
    this.image.addEventListener('load', () => {
      if (this.image) {
        this.setState({
          loading: false,
          loaded: true
        });
      }
    });
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyDetector);
    this.image = null;
  }
  render() {
    var props = this.props,
      state = this.state,
      photoItem = props.photos[state.selectedPhoto];

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
            <div
              id="photo-gallery-item"
              style={{backgroundImage: `url(${photoItem.value})`}}
            >
            </div>
            {state.loading ?
              <div id="photo-gallery-loading">
                <Loading
                  size="big"
                  color="#FFF"
                />
              </div>
              : null
            }
            <div id="photo-gallery-prev" onClick={this.prev}>
              <Icon name="chevron-left" className="pgpn-icon" />
            </div>
            <div id="photo-gallery-next" onClick={this.next}>
              <Icon name="chevron-right" className="pgpn-icon" />
            </div>
            <a href="#" id="photo-gallery-close" onClick={props.close}>
              <Icon name="times" id="pg-close-icon" />
            </a>
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
  shouldComponentUpdate(nextProps, nextState) {
    return nextState.selectedPhoto !== this.state.selectedPhoto
      || nextProps.photos.length !== this.props.photos.length;
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
