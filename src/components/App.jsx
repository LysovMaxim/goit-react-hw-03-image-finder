import { Component } from 'react';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Button } from './Button';

export class App extends Component {
  state = {
    pictureName: '',
    page: 1,
    pictures: [],
    error: null,
    status: null,
    showeModal: false,
    urlPicture: '',

  };
  

  hendleFormSubmit = pictureName => {
    this.setState({ pictureName });
  };
  

  onLoadMore = () => {
    this.setState(({ page }) => ({
      page: page + 1,
    }));
  };
  

  onModal = (url) => {
    this.setState(prevState => ({
      showeModal: !prevState.showeModal,
      urlPicture:{url}
    }))
  }

  componentDidUpdate = (prevProps, prevState) => {
    const prevName = prevState.pictureName;
    const nextName = this.state.pictureName;

    if (prevName !== nextName || prevState.page !== this.state.page) {
      this.setState({ status: 'pending' });
      fetch(
        `https://pixabay.com/api/?q=${nextName}&page=${this.state.page}&key=34851334-286cf58f2651b78053c9b207d&image_type=photo&orientation=horizontal&per_page=12`
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
    return (
      <div>
        <Searchbar onSubmit={this.hendleFormSubmit} page={this.state.page} />
        <ImageGallery
          state={this.state}
          onModal={this.onModal}
        />
        <Button onClick={this.onLoadMore} />
      </div>
    );
  }
}
