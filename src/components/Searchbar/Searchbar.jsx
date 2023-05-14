import { Component } from 'react';
import css from "./SearchBar.module.css"

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
      alert('Enter the title');
      return;
    }
    this.props.onSubmit(this.state.pictureName);

  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.hendleSubmit}>
          <button type="submit" className={css.SearchFormButton}>
            <span className="button-label">Search</span>
          </button>

          <input
            className={css.SearchFormInput}
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
