import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard.jsx";

export default function MoviesCardList({ moviesData }) {
  return (
    <section className="movies-list">
      <ul className="movies-list__cataloges">
        {moviesData.map((movie) => (
          <MoviesCard isSaved={movie.isSaved} movie={movie} key={movie.title} />
        ))}
      </ul>
    </section>
  );
}
