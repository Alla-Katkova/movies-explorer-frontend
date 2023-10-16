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
import { EmptySearchResults, filterMovies, isMoviesViewListEmpty, isMoviesViewListExist, SERVER_ERROR_MESSAGE } from "../../utils/search-tools";

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
  const [resetListCounter, setResetListCounter] = useState(0);

  function triggerResetList() {
    setResetListCounter((prev) => prev + 1);
  }

  function handleSearch(searchQueryParam, shortMoviesOnlyParam) {
    if (!searchQueryParam || searchQueryParam === "") {
      return;
    }
    console.log("handlesrech", searchQueryParam, shortMoviesOnlyParam);
    setIsLoading(true);
    return getMoviesWithLikes()
      .then((moviesWithLikes) => {
        const filteredMovies = filterMovies(moviesWithLikes, searchQueryParam, shortMoviesOnlyParam);
        setMoviesViewList(() => filteredMovies);
        setCachedSearchQuery(searchQueryParam);
        setCachedShortMoviesOnly(Boolean(shortMoviesOnlyParam));
      })
      .catch((error) => {
        console.log(error);
        setError(SERVER_ERROR_MESSAGE);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleSaveMovie(movie) {
    return saveMovie(movie)
      .then((response) => {
        debugger;
        setMoviesViewList((prevList) => {
          return prevList.map((m) => {
            if (m.idMoviesDb === movie.idMoviesDb) {
              return {
                ...m,
                idMainDb: response["_id"],
              };
            }
            return m;
          });
        });
      })
      .catch((error) => {
        console.log(error);
        setError(SERVER_ERROR_MESSAGE);
      });
  }

  function handleDeleteMovie(movie) {
    return deleteMovie(movie.idMainDb)
      .then(() => {
        setMoviesViewList((prevList) => {
          return prevList.map((m) => {
            if (m.idMoviesDb === movie.idMoviesDb) {
              return {
                ...m,
                idMainDb: null,
              };
            }
            return m;
          });
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
          onSaveClick={handleSaveMovie}
          onDeleteClick={handleDeleteMovie}
          keyProperty="idMoviesDb"
          resetList={resetListCounter}
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

  function searchAndResetMoreButton(searchQueryParam, shortMoviesOnlyParam) {
    handleSearch(searchQueryParam, shortMoviesOnlyParam);
    setResetListCounter((prev) => prev + 1);
  }

  useEffect(() => {
    console.log("effect running");
    searchAndResetMoreButton(searchQuery, Boolean(shortMoviesOnly));
  }, [shortMoviesOnly]);
  return (
    <>
      <Header isLoggedIn={true} />
      <main className="movies">
        <SearchForm
          onSearch={searchAndResetMoreButton}
          inputValue={searchQuery}
          setInputValue={setSearchQuery}
          isShort={shortMoviesOnly}
          setIsShort={setShortMoviesOnly}
        />
        <div className="movies__error-message">{error}</div>
        {isLoading ? <Preloader /> : renderList(moviesViewList)}
      </main>
      <Footer />
    </>
  );
}
