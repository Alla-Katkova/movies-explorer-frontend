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
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTI2Yjg1YWY5MDM2NTVjNDJmMDM3ZjgiLCJpYXQiOjE2OTcxMDgxNzEsImV4cCI6MTY5NzcxMjk3MX0.ucJDk0a3RiffqdCL-k7j6uxVxFsniqVJnq1LwhTX2WI",
  };

  return new Promise((resolve, reject) => {
    fetch(url, {
      headers: headers,
    })
      .then((response) => {
        if (response.status === 502) {
          throw new Error("Bad Gateway (502)");
        }
        if (response.status === 401) {
          throw new Error("Unauthorized (401)");
        }
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => resolve(tranformSavedMoviesForUi(data)))
      .catch((error) => reject(error));
  });
}
