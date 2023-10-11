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

export default function Movies(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    Promise.all([fetchMovies(), fetchSavedMovies()])
      .then(([moviesFromServer, savedMoviesFromServer]) => {
        setMovies(addSavedFlag(moviesFromServer, savedMoviesFromServer));
        setSavedMovies(savedMoviesFromServer);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <Header />
      <main className="movies">
        <SearchForm />
        <details>
          <summary>Movies</summary>
          <pre>{JSON.stringify(movies, null, 2)}</pre>
        </details>
        <details>
          <summary>Saved Movies</summary>
          <pre>{JSON.stringify(savedMovies, null, 2)}</pre>
        </details>
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
