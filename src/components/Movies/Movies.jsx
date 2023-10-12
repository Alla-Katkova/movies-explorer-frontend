import "./Movies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList.jsx";
import SearchForm from "../SearchForm/SearchForm.jsx";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import React, { useEffect, useState } from "react";
import Preloader from "../Preloader/Preloader";
import { fetchMovies } from "../../utils/MoviesApi";
import { fetchSavedMovies } from "../../utils/MainApi";

function addSavedFlag(movies, savedMovies) {
  return movies.map((movie) => {
    const savedMovie = savedMovies.find((s) => s.id === movie.id);
    if (savedMovie) {
      return { ...movie, isSaved: true };
    }
    return { ...movie, isSaved: false };
  });
}

export default function Movies() {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    Promise.all([fetchMovies(), fetchSavedMovies()])
      .then(([moviesFromServer, savedMoviesFromServer]) => {
        setMovies(addSavedFlag(moviesFromServer, savedMoviesFromServer));
        setIsLoading(false);
        setError(null);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(`На сервере произошла ошибка.`); // Set specific error message
        setIsLoading(false);
        setMovies([]);
      });
  }, []);

  return (
    <>
      <Header isLoggedIn={true} />
      <main className="movies">
        <SearchForm />
        <div className={"movies__error-message"}>{error}</div>
        {isLoading ? <Preloader /> : null}
        <MoviesCardList moviesData={movies} />
        <div className="movies__add-button-container">
          <button type="button" className="movies__add-button">
            Ещё
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
}
