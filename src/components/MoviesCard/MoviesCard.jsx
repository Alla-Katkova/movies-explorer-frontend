import "./MoviesCard.css";
import { useLocation } from "react-router-dom";
import React from "react";

function formatDuration(duration) {
  const hours = Math.trunc(duration / 60);
  const minutes = duration % 60;
  if (hours === 0) {
    return `${minutes}м`;
  } else {
    return `${hours}ч ${minutes}м`;
  }
}

export default function MoviesCard({ movie, onSaveClick, onDeleteClick }) {
  let location = useLocation();
  const isSaved = Boolean(movie.idMainDb);

  return (
    <li className="movies-card">
      <article className="movies-card__item">
        <div className="movies-card__preview-container">
          {location.pathname === "/movies" &&
            (isSaved ? (
              <button
                type="button"
                className="movies-card__button movies-card__button_type_saved"
                onClick={() => onDeleteClick(movie)}
              ></button>
            ) : (
              <button
                type="button"
                className="movies-card__button movies-card__button_type_unsaved"
                onClick={() => onSaveClick(movie)}
              >
                Сохранить
              </button>
            ))}
          {location.pathname === "/saved-movies" && (
            <button
              type="button"
              className="movies-card__button movies-card__button_type_delete"
              onClick={() => onDeleteClick(movie)}
            ></button>
          )}
          <a
            className="movies-cards__trailer-link link"
            href={movie.trailerLink}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={movie.image}
              className="movies-card__preview"
              alt={movie.nameRU}
            />
          </a>
        </div>
        <div className="movies-card__description">
          <h2 className="movies-card__title">{movie.nameRU}</h2>
          <p className="movies-card__duration">{formatDuration(movie.duration)}</p>
        </div>
      </article>
    </li>
  );
}
