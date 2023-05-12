import { Component } from 'react';

export class Searchbar extends Component {
  state = {
    pictureName: '',
    page:1
  };

  hendlePictuerSubmit = event => {
    this.setState({ pictureName: event.currentTarget.value.toLowerCase() });
  };

  hendleSubmit = event => {
    event.preventDefault();
    if (this.state.pictureName.trim() === '') {
      alert('Enter the title');
      return;
    }
    this.props.onSubmit(this.state.pictureName);
    this.setState({ pictureName: '' , page: 1});

  };

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.hendleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="pictureName"
            value={this.state.pictureName}
            onChange={this.hendlePictuerSubmit}
          />
        </form>
      </header>
    );
  }
}
