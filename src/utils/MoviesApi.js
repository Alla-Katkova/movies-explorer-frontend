const MOVIES_API_URL = "https://api.nomoreparties.co/";
const MOVIES_FULL_API_URL = `${MOVIES_API_URL}/beatfilm-movies/`;


function transformFilmsForUi(moviesFromServer) {
  return moviesFromServer.map((movie) => {
    const thumbnailUrl = movie.image.formats.thumbnail.url;
    return {
      id: movie.id,
      title: movie.nameRU,
      duration: movie.duration,
      src: `${MOVIES_API_URL}/${thumbnailUrl}`,
      country: movie.country,
      director: movie.director,
      year: movie.year,
      description: movie.description,
      image: movie.image,
      trailerLink: movie.trailerLink,
      thumbnail: movie.thumbnail,
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN
    };
  });
}

export function fetchMovies() {
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

