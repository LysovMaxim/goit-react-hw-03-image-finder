import { Component } from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem';

import { Modal } from '../Modal';

export class ImageGallery extends Component {
  render() {
    const { pictures, error, status, showeModal, urlPicture } =
      this.props.state;

    if (status === 'rejected') {
      return <h1>{error.message}</h1>;
    }

    return (
      <>
        {showeModal && 
          <Modal onClose={this.props.onModal} urlPhoto={urlPicture} />
        }
        {
          <ul className="gallery">
            {pictures &&
              pictures.map(({ id, webformatURL, largeImageURL }) => (
                <ImageGalleryItem
                  onClick={this.props.onModal}
                  key={id}
                  id={id}
                  picture={webformatURL}
                  largeImageURL={largeImageURL}

                />
              ))}
          </ul>
        }
      </>
    );
  }
}
