import { useEffect, useState } from "react";
import "./SearchForm.css";

export default function SearchForm({ onSearch, searchQuery, shortMoviesOnly }) {
  const [query, setQuery] = useState(searchQuery);
  const [onlyShort, setOnlyShort] = useState(shortMoviesOnly);
  const [isErrorVisible, setIsErrorVisible] = useState(false);

  function handleSearch() {
    if (isValidQuery()) {
      onSearch(query, onlyShort);
      setIsErrorVisible(false);
    } else {
      setIsErrorVisible(true);
    }
  }

  function onCheckbox() {
    setOnlyShort(!onlyShort);
    handleSearch();
  }

  function isValidQuery() {
    return query.trim().length > 0;
  }

  useEffect(() => {
    setQuery(searchQuery);
    setOnlyShort(shortMoviesOnly);
  }, [searchQuery, shortMoviesOnly]);

  return (
    <section className="search">
      <form
        className="search__form"
        name="search"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search__input"
          name="search"
          type="text"
          placeholder="Фильм"
          required
        />

        <button className="search__button" onClick={handleSearch} type="button"></button>

      </form>
      {isErrorVisible && (
        <div className="search__error">Нужно ввести ключевое слово</div>
      )}
      <form className="filter">
        <label className="filter__checkbox">
          <input
            className="filter__input"
            type="checkbox"
            checked={onlyShort}
            onChange={onCheckbox}
          />
          <span className="filter__switch"></span>
        </label>
        <span className="filter__text">Короткометражки</span>
      </form>
    </section>
  );
}
