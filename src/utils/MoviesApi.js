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
    return {
      id: film.id,
      title: film.nameRU,
      duration: formatDuration(film.duration),
      src: "https://api.nomoreparties.co/" + film.image.formats.thumbnail.url,
    };
  });
}

export function fetchMovies() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch("https://api.nomoreparties.co/beatfilm-movies/")
        .then((wrap) => wrap.json())
        .then((filmsFromApi) => {
          const filmsForUi = transformFilmsForUi(filmsFromApi);
          resolve(filmsForUi);
        })
        .catch((error) => reject(error));
    }, 500); // 5000 milliseconds = 5 seconds
  });
}
