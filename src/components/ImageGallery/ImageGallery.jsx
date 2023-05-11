import { Component } from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem';

export class ImageGallery extends Component {
  state = {
    pictures: '',
  };
  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.pictureName;
    const nextName = this.props.pictureName;

    if (prevName !== nextName) {
      fetch(
        `https://pixabay.com/api/?q=${nextName}&page=1&key=34851334-286cf58f2651b78053c9b207d&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(res => res.json())
        .then(pictures => this.setState({ pictures }));
    }
  }
  render() {
    return (
      <ul className="gallery">
        {this.state.pictures.hits &&
          this.state.pictures.hits.map(({ id, webformatURL }) => (
            <ImageGalleryItem key={id} id={id} picture={webformatURL} />
          ))}
      </ul>
    );
  }
}


