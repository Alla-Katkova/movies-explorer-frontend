import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./SavedMovies.css";
import Footer from "../Footer/Footer";
import { fakeCards } from "../../utils/constants";

export default function SavedMovies({}) {
  return (
    <>
      <Header isLoggedIn={true} />
      <main className="saved-movies">
        <article className="saved-movies__container">
          <SearchForm />
          <MoviesCardList moviesData={fakeCards} />
        </article>
        <Footer />
      </main>
    </>
  );
}
