import React, { useState } from "react";
import "./SearchForm.css";

function SearchForm({ onSearch, inputValue = "", setInputValue, isShort = false, setIsShort }) {
  const [emptyInputError, setEmptyInputError] = useState(false);

  const handleSearchInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleCheckbox = () => {
    setIsShort(!isShort);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!inputValue) {
      setEmptyInputError(true);
    } else {
      setEmptyInputError(false);
      onSearch(inputValue, isShort);
    }
  };

  return (
    <section className="search">
      <form
        noValidate
        className="search__form"
        name="search"
        onSubmit={handleSearch}
      >
        <input
          className={emptyInputError ? "search__input search__input-error" : "search__input"}
          name="search"
          type="text"
          placeholder="Фильм"
          onChange={handleSearchInput}
          value={inputValue || ""}
          required
        />
        <button
          className="search__button"
          type="submit"
        ></button>
      </form>
      <form className="filter">
        <label className="filter__checkbox">
          <input
            className="filter__input"
            type="checkbox"
            checked={isShort || false}
            onChange={handleCheckbox}
          />
          <span className="filter__switch"></span>
        </label>
        <span className="filter__text">Короткометражки</span>
      </form>
      {emptyInputError && <div className="search__error">Нужно ввести ключевое слово</div>}
    </section>
  );
}

export default React.memo(SearchForm);
