import { Component } from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem';
import { Loader } from '../Loader';
import { Modal } from '../Modal';

export class ImageGallery extends Component {
  state = {
    pictures: [],
    error: null,
    status: null,
    showeModal: false,
    urlPicture: '',
  };
  openModal = largeImageURL => {
    this.setState({ showeModal: true });
    this.setState({ urlPicture: largeImageURL });
  };

  closeModal = () => {
    this.setState({ showeModal: false });
    this.setState({ urlPicture: '' });
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.pictureName;
    const nextName = this.props.pictureName;

    if (prevName !== nextName || prevProps.page !== this.props.page) {
      this.setState({ status: 'pending' });
      fetch(
        `https://pixabay.com/api/?q=${nextName}&page=${this.props.page}&key=34851334-286cf58f2651b78053c9b207d&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(res => res.json())
        .then(picture => {
          this.setState(prevState => ({
            pictures: [...prevState.pictures, ...picture.hits],
            status: 'resolved',
          }));
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }
  render() {
    const { pictures, error, status, showeModal, urlPicture } = this.state;

    if (status === 'pending') {
      return <Loader />;
    }
    if (status === 'rejected') {
      return <h1>{error.message}</h1>;
    }

    if (status === 'resolved') {
      return (
        <>
          {showeModal && (
            <Modal urlPhoto={urlPicture} onClose={this.closeModal} />
          )}
          {
            <ul className="gallery">
              {pictures &&
                pictures.map(({ id, webformatURL, largeImageURL }) => (
                  <ImageGalleryItem
                    onClick={() => this.openModal(largeImageURL)}
                    key={id}
                    id={id}
                    picture={webformatURL}
                  />
                ))}
            </ul>
          }
        </>
      );
    }
  }
}
