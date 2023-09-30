import "./SearchForm.css";

export default function SearchForm() {
  return (
    <section className="search">
      <form className="search__form" name="search" noValidate>
        <input className="search__input" name="search" type="text" placeholder="Фильм" required />
        <span className="search__error"></span>
        <button className="search__button" type="submit"></button>
      </form>
      <label className="filter">
        <input
          className="filter__checkbox"
          type="checkbox"
          // checked={shortMovies ? true : false}
        />
        <span className="filter__switch"></span>
        <span className="filter__text">Короткометражки</span>
      </label>
    </section>
  );
}
