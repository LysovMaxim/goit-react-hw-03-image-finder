import { Component } from 'react';

export class Searchbar extends Component {
  state = {
    pictureName: '',
  };

  hendlePictuerSubmit = event => {
    this.setState({ pictureName: event.currentTarget.value.toLowerCase() });
  };

  hendleSubmit = event => {
    event.preventDefault();
    if (this.state.pictureName.trim() === '') {
      alert('привет');
      return;
    }
    this.props.onSubmit(this.state.pictureName);
    this.setState({ pictureName: '' });
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
