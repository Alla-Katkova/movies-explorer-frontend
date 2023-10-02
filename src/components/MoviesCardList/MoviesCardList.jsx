import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard.jsx";

export default function MoviesCardList({ moviesData }) {
  function randomTrueOrFalse() {
    return Math.random() < 0.5;
  }
  return (
    <section className="movies-list">
      <ul className="movies-list__cataloges">
        {moviesData.map((movie) => (
          <MoviesCard isSaved={randomTrueOrFalse()} movie={movie} key={movie.title} />
        ))}
      </ul>
    </section>
  );
}
