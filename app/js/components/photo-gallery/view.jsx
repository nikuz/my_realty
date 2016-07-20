'use strict';

import * as React from 'react';
import * as _ from 'underscore';
import * as constants from '../../modules/constants';

import './style.less';

class PhotoGalleryTape extends React.Component {
  constructor(props) {
    super(props);
    this.itemOnClick = this.itemOnClick.bind(this);
  }
  itemOnClick(e) {
    this.props.photoItemOnClick(e.target.getAttribute('data-id'));
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
                  onClick={this.itemOnClick}
                  alt=""
                />
              );
            })}
            <div className="photo-tape-end"></div>
          </div>
        </div>
      );
    } else {
      return (
        <div id="photo-tape-empty">
          {constants.get('photo_gallery_empty')}
        </div>
      );
    }
  }
}

PhotoGalleryTape.propTypes = {
  photos: React.PropTypes.array.isRequired,
  photoItemOnClick: React.PropTypes.func.isRequired
};

export default PhotoGalleryTape;
