import "./Movies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList.jsx";
import SearchForm from "../SearchForm/SearchForm.jsx";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import { fakeCards } from "../../utils/constants";

export default function Movies(props) {
  return (
    <>
      <Header />
      <main className="movies">
        <SearchForm />
        <MoviesCardList moviesData={fakeCards} />
        <div className="movies__add-button-container">
          <button className="movies__add-button">Ещё</button>
        </div>
      </main>
      <Footer />
    </>
  );
}
