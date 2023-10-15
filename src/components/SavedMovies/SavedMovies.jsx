import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "./SavedMovies.css";
import Footer from "../Footer/Footer";

export default function SavedMovies({}) {
  return (
    <>
      <Header isLoggedIn={true} />
      <main className="saved-movies">
        <article className="saved-movies__container">
          {/*<SearchForm />*/}
          <MoviesCardList moviesData={[]} />
        </article>
        <Footer />
      </main>
    </>
  );
}
