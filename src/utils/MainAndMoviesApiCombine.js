import { fetchSavedMovies, tranformSavedMoviesForUi } from "./MainApi";
import { fetchMovies } from "./MoviesApi";

function enrichMoviesWithLikes(movies, likes) {
  let maped = movies.map((movie) => {
    const matchingLike = likes.find((like) => movie.idMoviesDb === like.idMoviesDb);
    if (matchingLike) {
      return { ...movie, ...matchingLike };
    }
    return movie;
  });
  return maped;
}

export function getMoviesWithLikes() {
  const likesInfoPromise = fetchSavedMovies()
    .then((data) => tranformSavedMoviesForUi(data))
    .then((savedMovies) => {
      return savedMovies.map((savedMovie) => {
        return {
          idMoviesDb: savedMovie.movieId,
          idMainDb: savedMovie["_id"],
        };
      });
    });
  return Promise.all([fetchMovies(), likesInfoPromise]).then(([movies, likes]) => {
    return enrichMoviesWithLikes(movies, likes);
  });
}
