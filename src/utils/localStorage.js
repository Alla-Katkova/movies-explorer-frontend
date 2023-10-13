export function initCache() {
  // кэш восстановления состояния поиска фильмов
  localStorage.setItem(
    "moviesCache",
    JSON.stringify({
      searchQuery: "",
      shortMoviesOnly: false,
      movies: null,
    }),
  );
}

export function initJwt(token) {
  localStorage.setItem("jwtToken", token);
}

export function clearLocalStorage() {
  localStorage.clear();
}

export function isJwtTokenExist() {
  return localStorage.getItem("jwtToken") !== null;
}

export function getJwtToken() {
  return localStorage.getItem("jwtToken");
}
