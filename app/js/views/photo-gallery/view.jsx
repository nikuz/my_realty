'use strict';

import * as React from 'react';
import * as _ from 'underscore';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Loading from '../../components/loading/view';
import Icon from 'react-fa';

import './style.less';

class PhotoGalleryView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      selectedPhoto: props.selectedPhoto,
      loading: true,
      loaded: false
    };
    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
    this.keyDetector = this.keyDetector.bind(this);
  }
  prev() {
    var state = this.state;
    if (state.photos.length === 1) {
      return;
    }
    var index = state.selectedPhoto - 1;
    if (index < 0) {
      index = state.photos.length - 1;
    }
    this.setState({
      selectedPhoto: index,
      loading: true,
      loaded: false
    });
  }
  next() {
    var state = this.state;
    if (state.photos.length === 1) {
      return;
    }
    var index = state.selectedPhoto + 1;
    if (index > state.photos.length - 1) {
      index = 0;
    }
    this.setState({
      selectedPhoto: index,
      loading: true,
      loaded: false
    });
  }
  keyDetector(event) {
    if (this.props.state.name !== 'photo_gallery') {
      return;
    }
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
    if (nextProps.state.name === 'photo_gallery') {
      let selectedItem = _.find(nextProps.list, {selected: true});
      this.setState({
        photos: selectedItem.photos.data.list.values,
        selectedPhoto: parseInt(nextProps.state.variables.photoId)
      });
    }
  }
  componentDidUpdate() {
    var state = this.state;
    if (state.loaded || !state.selectedPhoto) {
      if (state.loading) {
        this.setState({
          loading: false,
          loaded: true
        });
      }
      return;
    }
    this.image = new Image();
    this.image.src = state.photos[state.selectedPhoto].value;
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
      photoItem;

    if (props.state.name === 'photo_gallery') {
      photoItem = state.photos[state.selectedPhoto];
    }

    return (
      <ReactCSSTransitionGroup
        transitionName="photo-gallery"
        transitionAppear
        transitionEnterTimeout={300}
        transitionAppearTimeout={300}
        transitionLeaveTimeout={300}
        component="div"
      >
        {props.state.name === 'photo_gallery' && photoItem ?
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

PhotoGalleryView.propTypes = {
  state: React.PropTypes.object.isRequired,
  list: React.PropTypes.object.isRequired,
  close: React.PropTypes.func.isRequired
};

export default PhotoGalleryView;
