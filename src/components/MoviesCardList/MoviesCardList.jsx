import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard.jsx";
import React, { useEffect, useState } from "react";


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


export default function MoviesCardList({ moviesData }) {
  const [showMovieList, setShowMovieList] = useState([]);
  const [cardsConfig, setCardsConfig] = useState({ total: 12, more: 3 });

  const updateScreenConfig = () => {
    const width = window.innerWidth;
    let newConfig;
    if (width > DEVICE_PARAMS.desktop.width) {
      newConfig = DEVICE_PARAMS.desktop.cards;
    } else if (width <= DEVICE_PARAMS.desktop.width && width > DEVICE_PARAMS.tablet.width) {
      newConfig = DEVICE_PARAMS.tablet.cards;
    } else {
      newConfig = DEVICE_PARAMS.mobile.cards;
    }
    setCardsConfig(newConfig);
    const visibleCards = moviesData.slice(0, newConfig.total);
    setShowMovieList(visibleCards);
  };

  const debouncedHandleResize = debounce(updateScreenConfig, 500);

  useEffect(() => {
    window.addEventListener('resize', debouncedHandleResize);

    updateScreenConfig(); // initial call to set correct values based on screen size

    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  }, [moviesData]);


  function handleMoreMovies() {
    const newTotal = showMovieList.length + cardsConfig.more;
    const additionalMovies = moviesData.slice(showMovieList.length, newTotal);
    console.log("setting new value", [...showMovieList, ...additionalMovies]);
    setShowMovieList(prevMovies => [...prevMovies, ...additionalMovies]);
  }


  return (
    <>
      <section className="movies-list">
        <ul className="movies-list__cataloges">
          {showMovieList.map(movie => (
            <MoviesCard
              onSaveClick={(s) => {console.log(s)}}
              onDeleteClick={(s) => {console.log(s)}}
              isSaved={(s) => {console.log(s)}}
              movie={movie}
              key={movie.id}
            />
          ))}
        </ul>
      </section>
      {showMovieList.length < moviesData.length && (
        <div className="movies__add-button-container">
          <button type="button" className="movies__add-button" onClick={handleMoreMovies}>
            Ещё
          </button>
        </div>
      )}
    </>
  );
}
