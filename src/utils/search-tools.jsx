import React from "react";

export const SERVER_ERROR_MESSAGE =
  "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз";

export function EmptySearchResults({}) {
  return <div className="movies__no-results">Ничего не найдено</div>;
}

export function isMoviesViewListEmpty(list) {
  return list && list.length === 0;
}

export function isMoviesViewListExist(list) {
  return list !== undefined && list !== null;
}

//входной массив объектов со свойствами nameRU, nameEN, duration
export function filterMovies(movies, searchQuery, shortMoviesOnly) {
  const SHORT_DURATION = 40;
  return movies.filter((movie) => {
    const isNameMatches = movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase()) || movie.nameEN.toLowerCase().includes(searchQuery.toLowerCase());
    const isDurationMatches = shortMoviesOnly ? movie.duration <= SHORT_DURATION : true;
    return isNameMatches && isDurationMatches;
  });
}
