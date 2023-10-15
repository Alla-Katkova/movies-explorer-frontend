import "./Movies.css";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import React, { useEffect, useState } from "react";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import {
  getCachedSearchQuery,
  getCachedShortMoviesOnly,
  initCache,
  isCacheValid,
  setCachedSearchQuery,
  setCachedShortMoviesOnly,
} from "../../utils/localStorage";
import SearchForm from "../SearchForm/SearchForm";
import { getMoviesWithLikes } from "../../utils/MainAndMoviesApiCombine";
import { deleteMovie, saveMovie } from "../../utils/MainApi";

const SERVER_ERROR_MESSAGE =
  "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз";

function EmptySearchResults({}) {
  return <div className="movies__no-results">Ничего не найдено</div>;
}

function isMoviesViewListEmpty(list) {
  return list && list.length === 0;
}

function isMoviesViewListExist(list) {
  return list !== undefined && list !== null;
}

function filterMovies(moviesWithLikes, searchQuery, shortMoviesOnly) {
  const SHORT_DURATION = 40;
  return moviesWithLikes.filter((movie) => {
    const isNameMatches = movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase()) || movie.nameEN.toLowerCase().includes(searchQuery.toLowerCase());
    const isDurationMatches = shortMoviesOnly ? movie.duration <= SHORT_DURATION : true;
    return isNameMatches && isDurationMatches;
  });
}

export default function Movies({}) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  //moviesViewList - это итоговый список фильмов, уже отфильтрованный и обогащенный лайками (но не обрезанный кнопкой Еще). Он содержит в себе все то, что нужно для отображения карточек.
  //null означает что запроса не было, [] - что запрос не дал результатов
  //любые изменения внешнего вида списка - это результат того, что moviesViewList был переписан
  //moviesViewList состоит из объектов вида:
  //   {
  //     moviesDbId: 23, // movieId в MoviesDb
  //     mainDbId: "111122223333444455556666", //id в MainDb. Может отсутствовать. Если есть - значит фильм лайкнут текущим пользователем.
  //     trailerLink: "https://youtube.com/asas",
  //     nameRU: "«Роллинг Стоунз» в изгнании",
  //     nameEN: "Stones in Exile",
  //     duration: 61, // за форматирование отвечает сама карточка
  //     description: "В конце 1960-х группа «Роллинг Стоунз».... ",
  //     director: "Стивен Кайак ",
  //     country: "США",
  //     year: "2010",
  //   },
  const [moviesViewList, setMoviesViewList] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [shortMoviesOnly, setShortMoviesOnly] = useState(null);

  function handleSearch(searchQueryParam, shortMoviesOnlyParam) {
    if (!searchQueryParam || searchQueryParam === "") {
      return;
    }
    console.log("handlesrech", searchQueryParam, shortMoviesOnlyParam);
    const requestTimeout = setTimeout(() => {
      setIsLoading(true);
    }, 2000); //показываем колесико только если запрос слишком долгий
    return getMoviesWithLikes()
      .then((moviesWithLikes) => {
        const filteredMovies = filterMovies(moviesWithLikes, searchQueryParam, shortMoviesOnlyParam);
        setMoviesViewList(() => filteredMovies);
        setCachedSearchQuery(searchQueryParam);
        setCachedShortMoviesOnly(shortMoviesOnlyParam);
      })
      .catch((error) => {
        console.log(error);
        setError(SERVER_ERROR_MESSAGE);
      })
      .finally(() => {
        setIsLoading(false);
        clearTimeout(requestTimeout);
      });
  }

  function handleSaveMovie(movie) {
    // посылает запрос на сервер и устанавливает setMoviesViewList, setError, setIsLoading
    return saveMovie(movie).then(() => handleSearch(searchQuery, Boolean(shortMoviesOnly)));
  }

  function handleDeleteMovie(movie) {
    // посылает запрос на сервер и устанавливает setMoviesViewList, setError, setIsLoading
    return deleteMovie(movie.idMainDb).then(() => handleSearch(searchQuery, Boolean(shortMoviesOnly)));
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
          onSaveClick={handleSaveMovie}
          onDeleteClick={handleDeleteMovie}
        />
      </>
    );
  }

  function loadDataOnFirstRender() {
    if (!isCacheValid()) {
      initCache();
    }
    if (getCachedSearchQuery() === "") {
      return;
    }
    setSearchQuery(getCachedSearchQuery());
    setShortMoviesOnly(getCachedShortMoviesOnly());
  }

  useEffect(() => {
    console.log("effect running");
    loadDataOnFirstRender();
  }, []); // пустой список зависимостей - эффект выполнится один раз

  useEffect(() => {
    console.log("effect running");
    handleSearch(searchQuery, Boolean(shortMoviesOnly));
  }, [shortMoviesOnly]);
  return (
    <>
      <details>
        <summary>moviesViewList</summary>
        <div>Length: {moviesViewList?.length}</div>
        <pre>{JSON.stringify(moviesViewList, null, 2)}</pre>
      </details>
      <details>
        <summary>searchQuery</summary>
        <pre>{JSON.stringify(searchQuery)}</pre>
      </details>
      <Header isLoggedIn={true} />
      <main className="movies">
        <SearchForm
          onSearch={handleSearch}
          inputValue={searchQuery}
          setInputValue={setSearchQuery}
          isShort={shortMoviesOnly}
          setIsShort={setShortMoviesOnly}
        />
        <div className="movies__error-message">{error}</div>
        {isLoading ? <Preloader /> : null}
        {renderList(moviesViewList)}
      </main>
      <Footer />
    </>
  );
}
