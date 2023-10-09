import "./SearchForm.css";

export default function SearchForm() {
  return (
    <section className="search">
      <form className="search__form" name="search" noValidate>
        <input className="search__input" name="search" type="text" placeholder="Фильм" required />
        <span className="search__error"></span>
        <button className="search__button" type="submit"></button>
      </form>

      <form className="filter">
        <label className="filter__checkbox">
          <input className="filter__input" type="checkbox" />
          <span className="filter__switch"></span>
        </label>
        <span className="filter__text">Короткометражки</span>
      </form>
    </section>
  );
}
