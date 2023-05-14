
import css from "./SearchBar.module.css"

export const Searchbar=({onSubmit})=>{

    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={onSubmit}>
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
          />
        </form>
      </header>
    );
  }

