const MOVIES_API_URL = "https://api.nomoreparties.co/";
const MOVIES_FULL_API_URL = `${MOVIES_API_URL}/beatfilm-movies/`;

function formatDuration(minutes) {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  let result = "";
  if (hours > 0) {
    result += `${hours}ч `;
  }
  if (remainingMinutes > 0) {
    result += `${remainingMinutes}м`;
  }

  return result;
}

function transformFilmsForUi(filmsFromServer) {
  return filmsFromServer.map((film) => {
    const thumbnailUrl = film.image.formats.thumbnail.url;
    return {
      id: film.id,
      title: film.nameRU,
      duration: formatDuration(film.duration),
      src: `${MOVIES_API_URL}/${thumbnailUrl}`,
    };
  });
}

export function fetchMovies() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
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
    }, 500); // 500 milliseconds = 0.5 seconds
  });
}
