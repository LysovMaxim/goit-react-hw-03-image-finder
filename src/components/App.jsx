import { Component } from 'react';
import { Searchbar } from "./Searchbar"
import { ImageGallery } from "./ImageGallery"

export class App extends Component {
  state = {
   pictureName: '',
}

  hendleFormSubmit = (pictureName) => {
    this.setState({ pictureName })
}

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.hendleFormSubmit} />
        <ImageGallery pictureName={this.state.pictureName}/>
      </div>
    );
  };
}
