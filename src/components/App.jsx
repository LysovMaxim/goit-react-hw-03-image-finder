import { Component } from 'react';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Button } from './Button';

export class App extends Component {
  state = {
    pictureName: '',
    page: 1,
  };

  hendleFormSubmit = pictureName => {
    this.setState({ pictureName });
  };

  onLoadMore = () => {
    this.setState(({ page }) => ({
      page: page + 1,
    }));
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.hendleFormSubmit} page={this.state.page} />
        <ImageGallery
          pictureName={this.state.pictureName}
          page={this.state.page}
        />
        <Button onClick={this.onLoadMore} />;
      </div>
    );
  }
}
