function tranformSavedMoviesForUi(movies) {
  return movies.map((movie) => ({
    ...movie,
    id: movie.movieId,
  }));
}
/**
 * Fetches movies from the specified API.
 *
 * @returns {Promise<Array>} A promise that resolves to an array of movies.
 * @throws {Error} Throws an error if the fetch operation fails.
 */
export function fetchSavedMovies() {
  const url = "https://api.movies.explorer.katko.nomoredomainsicu.ru/movies";
  const headers = {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTI2Yjg1YWY5MDM2NTVjNDJmMDM3ZjgiLCJpYXQiOjE2OTcwNDQ2MzAsImV4cCI6MTY5NzY0OTQzMH0.XNaFZjm62VqDbSK8NAWv2gPgWFaLcGyPVLP5DvMhFU8",
  };

  return new Promise((resolve, reject) => {
    fetch(url, {
      headers: headers,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => resolve(tranformSavedMoviesForUi(data)))
      .catch((error) => reject(error));
  });
}
