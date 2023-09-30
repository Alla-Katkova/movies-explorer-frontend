import "./MoviesCard.css";

export default function MoviesCard({ movie, isSaved }) {
  return (
    <li className="movies-card">
      <article className="movies-card__item">
        <div className="movies-card__preview-container">
          {isSaved ? (
            <button
              type="button"
              className="movies-card__button movies-card__button_type_saved"
              onClick={() => {
                console.log("click on button delete from saved");
              }}
            ></button>
          ) : (
            <button
              type="button"
              className="movies-card__button movies-card__button_type_unsaved"
              onClick={() => {
                console.log("click on button save to saved");
              }}
            ></button>
          )}
          <img src={movie.src} className="movies-card__preview" />
        </div>
        <div className="movies-card__description">
          <h2 className="movies-card__title">{movie.title}</h2>
          <p className="movies-card__duration">{movie.duration}</p>
        </div>
      </article>
    </li>
  );
}
