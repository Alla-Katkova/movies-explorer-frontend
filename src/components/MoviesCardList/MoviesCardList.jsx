import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard.jsx";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const DEVICE_PARAMS = {
  desktop: {
    width: 1280,
    cards: {
      total: 12,
      more: 3,
    },
  },
  tablet: {
    width: 897,
    cards: {
      total: 8,
      more: 2,
    },
  },
  mobile: {
    cards: {
      total: 5,
      more: 2,
    },
  },
};

function debounce(func, wait) {
  let timeout;

  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

export default function MoviesCardList({ moviesData, onDeleteClick, onSaveClick, keyProperty, resetList }) {
  // moviesData должна быть массивом, не null!
  const [cardsConfig, setCardsConfig] = useState({ total: 12, more: 3 });
  const [cardsToShow, setCardsToShow] = useState(cardsConfig.total);

  const location = useLocation();

  function handleMoreMovies() {
    setCardsToShow((prev) => prev + cardsConfig.more);
  }

  useEffect(() => {
    console.log("useEffect");
    updateScreenConfig();
  }, [resetList]);

  const updateScreenConfig = () => {
    const width = window.innerWidth;
    let newConfig;
    if (width >= DEVICE_PARAMS.desktop.width) {
      newConfig = DEVICE_PARAMS.desktop.cards;
    } else if (width < DEVICE_PARAMS.desktop.width && width > DEVICE_PARAMS.tablet.width) {
      newConfig = DEVICE_PARAMS.tablet.cards;
    } else {
      newConfig = DEVICE_PARAMS.mobile.cards;
    }
    setCardsConfig(newConfig);
    setCardsToShow(newConfig.total);
  };

  const debouncedHandleResize = debounce(updateScreenConfig, 500);

  useEffect(() => {
    console.log("effect is running");
    window.addEventListener("resize", debouncedHandleResize);

    updateScreenConfig();

    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, []); // пустой список зависимостей - вызывается единожды

  const displayedMovies = location.pathname === "/movies" ? moviesData.slice(0, cardsToShow) : moviesData;
  const isMoreFeatureActive = Boolean(location.pathname === "/movies");
  return (
    <>
      <section className="movies-list">
        <ul className="movies-list__cataloges">
          {displayedMovies.map((movie) => (
            <MoviesCard
              onSaveClick={onSaveClick}
              onDeleteClick={onDeleteClick}
              movie={movie}
              key={movie[keyProperty]}
            />
          ))}
        </ul>
      </section>
      {isMoreFeatureActive && displayedMovies.length < moviesData.length && (
        <div className="movies__add-button-container">
          <button
            type="button"
            className="movies__add-button"
            onClick={handleMoreMovies}
          >
            Ещё
          </button>
        </div>
      )}
    </>
  );
}
