export function initCache() {
  // кэш восстановления состояния поиска фильмов
  localStorage.setItem(
    "moviesCache",
    JSON.stringify({
      searchQuery: "",
      shortMoviesOnly: false,
      movies: [],
    }),
  );
}

export function initJwt(token) {
  localStorage.setItem("jwtToken", token);
}

export function isJwtTokenExist() {
  return localStorage.getItem("jwtToken") !== null;
}
