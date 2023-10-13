import "./Movies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList.jsx";
import SearchForm from "../SearchForm/SearchForm.jsx";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import React, { useEffect, useState } from "react";
import Preloader from "../Preloader/Preloader";
import { fetchMovies } from "../../utils/MoviesApi";
import { fetchSavedMovies } from "../../utils/MainApi";

function addSavedFlag(movies, savedMovies) {
  return movies.map((movie) => ({
    ...movie,
    isSaved: !!savedMovies.find((s) => s.id === movie.id)
  }));
}

function filterMovies(moviesToFilter, query, onlyShort = false) {
  if (!query || query === "") {
    return null;
  }
  return moviesToFilter.filter(function(movie) {
    // ищем по имени
    const doesTitleMatchQuery = movie.title.toLowerCase().includes(query.toLowerCase());

    // фильтруем короткометражки
    let isDurationAcceptable;
    if (onlyShort) {
      isDurationAcceptable = movie.duration <= 40;
    } else {
      isDurationAcceptable = true;
    }
    return doesTitleMatchQuery && isDurationAcceptable;
  });
}

function isMoviesInCache(parsedData) {
  return parsedData && parsedData.movies && parsedData.movies.length > 0;
}

function getDataFromCache() {
  const cachedData = localStorage.getItem("moviesCache");
  const parsedData = cachedData && JSON.parse(cachedData);
  return parsedData;
}

export default function Movies() {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [shortMoviesOnly, setShortMoviesOnly] = useState(false);

  function updateFilteredMoviesState(allMovies) {
    return fetchSavedMovies()
      .then((savedMovies) => {
        const allMoviesWithSavedFlags = addSavedFlag(allMovies, savedMovies);
        setMovies(allMoviesWithSavedFlags);
        setFilteredMovies(filterMovies(allMoviesWithSavedFlags, searchQuery, shortMoviesOnly));
      })
      .catch((error) => {
        console.error("Error fetching saved movies:", error);
        setError(`Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.`);
      });
  }

  function handleSearch(searchQuery, shortMoviesOnly) {
    setSearchQuery(searchQuery);
    setFilteredMovies(filterMovies(movies, searchQuery, shortMoviesOnly));
    const cache = {
      searchQuery,
      shortMoviesOnly,
      movies
    };
    localStorage.setItem("moviesCache", JSON.stringify(cache));
  }

  function restoreStateFromCache(cachedData) {
    setSearchQuery(cachedData.searchQuery);
    setShortMoviesOnly(cachedData.shortMoviesOnly);

    const allMoviesWithSavedFlags = addSavedFlag(cachedData.movies, []);
    setMovies(allMoviesWithSavedFlags);
    setFilteredMovies(filterMovies(allMoviesWithSavedFlags, cachedData.searchQuery, cachedData.shortMoviesOnly));
  }


  function setStateFromServerAndFillCache() {
    setIsLoading(true);
    fetchMovies()
      .then((moviesFromServer) => {
        localStorage.setItem(
          "moviesCache",
          JSON.stringify({
            searchQuery: searchQuery,
            shortMoviesOnly: shortMoviesOnly,
            movies: moviesFromServer
          })
        );
        updateFilteredMoviesState(moviesFromServer);
        setIsLoading(false);
        setError(null);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
        setError(`Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.`);
        setIsLoading(false);
        setMovies([]);
      });
  }

  useEffect(() => {
    const cachedData = getDataFromCache();

    if (isMoviesInCache(cachedData)) {
      restoreStateFromCache(cachedData);
    } else {
      setStateFromServerAndFillCache();
    }
  }, []);

  return (
    <>
      <details>
        <summary>filteredMovies</summary>
        <pre>{JSON.stringify(filteredMovies, null, 2)}</pre>
      </details>
      <details>
        <summary>searchQuery</summary>
        <pre>{JSON.stringify(searchQuery)}</pre>
      </details>
      <Header isLoggedIn={true} />
      <main className="movies">

        <SearchForm onSearch={handleSearch} searchQuery={searchQuery} shortMoviesOnly={shortMoviesOnly} />

        <div className="movies__error-message">{error}</div>
        {isLoading ? <Preloader /> : null}

        {filteredMovies && filteredMovies.length === 0 ? <div className="movies__no-results">Ничего не найдено</div> : <MoviesCardList moviesData={filteredMovies || []} />}

      </main>
      <Footer />
    </>
  );
}
