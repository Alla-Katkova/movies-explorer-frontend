// import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./SavedMovies.css";
import Footer from "../Footer/Footer";
import { fakeCards } from "../../utils/constants";

export default function SavedMovies(props) {
  return (
    <main className="saved-movies">
      <SearchForm />
      <MoviesCardList moviesData={fakeCards} />
      <Footer />
    </main>
  );
}
