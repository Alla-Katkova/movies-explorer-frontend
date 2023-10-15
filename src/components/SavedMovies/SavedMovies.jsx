import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "./SavedMovies.css";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import React, { useEffect, useState } from "react";
import { EmptySearchResults, filterMovies, isMoviesViewListEmpty, isMoviesViewListExist, SERVER_ERROR_MESSAGE } from "../../utils/search-tools";
import Preloader from "../Preloader/Preloader";
import { deleteMovie, fetchSavedMovies } from "../../utils/MainApi";

export default function SavedMovies({}) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [moviesViewList, setMoviesViewList] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [shortMoviesOnly, setShortMoviesOnly] = useState(false);

  function handleSearch(searchQueryParam, shortMoviesOnlyParam) {
    console.log("handlesearch", searchQueryParam, shortMoviesOnlyParam);
    setIsLoading(true);
    return fetchSavedMovies()
      .then((savedMovies) => {
        const filteredMovies = filterMovies(savedMovies, searchQueryParam, shortMoviesOnlyParam);
        setMoviesViewList(() => filteredMovies);
      })
      .catch((error) => {
        console.log(error);
        setError(SERVER_ERROR_MESSAGE);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleDeleteMovie(idDeleted) {
    return deleteMovie(idDeleted)
      .then(() => {
        console.log("successfully deleted");
        // Update the local moviesViewList to remove the deleted movie
        setMoviesViewList((prevList) => {
          return prevList.filter((movie) => movie["_id"] !== idDeleted);
        });
      })
      .catch((error) => {
        console.log(error);
        setError(SERVER_ERROR_MESSAGE);
      });
  }
  function renderList(list) {
    if (!isMoviesViewListExist(list)) {
      return null;
    }
    if (isMoviesViewListEmpty(list)) {
      return <EmptySearchResults />;
    }
    return (
      <>
        <MoviesCardList
          moviesData={list}
          onDeleteClick={(movie) => handleDeleteMovie(movie["_id"])}
          keyProperty={"_id"}
        />
      </>
    );
  }

  useEffect(() => {
    console.log("useEffect");
    handleSearch("", false);
  }, []); //пустой список зависимостей: отработает один раз

  useEffect(() => {
    console.log("useEffect");
    handleSearch(searchQuery, Boolean(shortMoviesOnly));
  }, [shortMoviesOnly]);

  return (
    <>
      <Header isLoggedIn={true} />
      <main className="saved-movies">
        <article className="saved-movies__container">
          <SearchForm
            onSearch={handleSearch}
            inputValue={searchQuery}
            setInputValue={setSearchQuery}
            isShort={shortMoviesOnly}
            setIsShort={setShortMoviesOnly}
          />
          <div className="movies__error-message">{error}</div>
          {isLoading ? <Preloader /> : renderList(moviesViewList)}
        </article>

        <Footer />
      </main>
    </>
  );
}
