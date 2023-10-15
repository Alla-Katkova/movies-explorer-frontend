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

function getCache() {
  return JSON.parse(localStorage.getItem("moviesCache"));
}

export function getCachedSearchQuery() {
  return getCache().searchQuery;
}

export function setCachedShortMoviesOnly(shortMoviesOnly) {
  const oldCache = getCache();
  const newCache = {
    ...oldCache,
    shortMoviesOnly,
  };
  localStorage.setItem("moviesCache", JSON.stringify(newCache));
}

export function setCachedSearchQuery(searchQuery) {
  const oldCache = getCache();
  const newCache = {
    ...oldCache,
    searchQuery,
  };
  localStorage.setItem("moviesCache", JSON.stringify(newCache));
}

export function getCachedShortMoviesOnly() {
  return getCache().shortMoviesOnly;
}

export function isMoviesInCache() {
  if (!isCacheValid()) return false;
  const movies = getCachedMovies();
  return Boolean(movies) && movies.length > 0;
}

export function getCachedMovies() {
  return getCache().movies;
}

export function setCachedMovies(movies) {
  const oldCache = getCache();
  const newCache = {
    ...oldCache,
    movies,
  };
  localStorage.setItem("moviesCache", JSON.stringify(newCache));
}

export function isCacheValid() {
  const cacheData = getCache();
  const isValid = cacheData && Object.hasOwn(cacheData, "searchQuery") && Object.hasOwn(cacheData, "shortMoviesOnly") && Object.hasOwn(cacheData, "movies");
  if (!isValid) {
    console.log("cache is not valid!");
    return false;
  }
  return true;
}
