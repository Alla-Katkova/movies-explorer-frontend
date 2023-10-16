import { getCachedMovies, initCache, isCacheValid, isMoviesInCache, setCachedMovies } from "./localStorage";

const MOVIES_API_URL = "https://api.nomoreparties.co/";
const MOVIES_FULL_API_URL = `${MOVIES_API_URL}/beatfilm-movies/`;

function transformFilmsForUi(moviesFromServer) {
  return moviesFromServer.map((movie) => {
    const thumbnailUrl = movie.image.formats.thumbnail.url;
    return {
      idMoviesDb: movie.id,
      title: movie.nameRU,
      duration: movie.duration,
      country: movie.country,
      director: movie.director,
      year: movie.year,
      description: movie.description,
      image: `${MOVIES_API_URL}/${thumbnailUrl}`,
      trailerLink: movie.trailerLink,
      thumbnail: movie.thumbnail,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
    };
  });
}

function fetchMoviesFromApi() {
  return new Promise((resolve, reject) => {
    fetch(MOVIES_FULL_API_URL)
      .then((wrap) => {
        if (!wrap.ok) {
          throw new Error(`HTTP error! status: ${wrap.status}`);
        }
        return wrap.json();
      })
      .then((filmsFromApi) => {
        const filmsForUi = transformFilmsForUi(filmsFromApi);
        resolve(filmsForUi);
      })
      .catch((error) => reject(error));
  });
}

export function fetchMovies() {
  if (isMoviesInCache()) {
    return Promise.resolve(getCachedMovies());
  }
  if (!isCacheValid()) {
    initCache();
  }
  return fetchMoviesFromApi().then((moviesFromApi) => {
    setCachedMovies(moviesFromApi);
    return getCachedMovies();
  });
}
