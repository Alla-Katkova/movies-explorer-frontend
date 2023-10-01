import "./Movies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList.jsx";
import SearchForm from "../SearchForm/SearchForm.jsx";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";

// испорты для превью фильмов (удалю при подключении)
import png1 from "../../images/1.png";
import png2 from "../../images/2.png";
import png3 from "../../images/3.png";
import png4 from "../../images/4.png";
import png5 from "../../images/5.png";
import png6 from "../../images/6.png";
import png7 from "../../images/7.png";
import png8 from "../../images/8.png";
import png9 from "../../images/9.png";
import png10 from "../../images/10.png";
import png11 from "../../images/11.png";
import png12 from "../../images/12.png";

const fakeCards = [
  {
    src: png1,
    title: "33 слова о дизайне",
    duration: "1ч 17м",
  },
  {
    src: png2,
    title: "Киноальманах «100 лет дизайна»",
    duration: "1ч 17м",
  },
  {
    src: png3,
    title: "В погоне за Бенкси",
    duration: "1ч 17м",
  },
  {
    src: png4,
    title: "Баския: Взрыв реальности",
    duration: "1ч 17м",
  },
  {
    src: png5,
    title: "Бег это свобода",
    duration: "1ч 17м",
  },
  {
    src: png6,
    title: "Книготорговцы",
    duration: "1ч 17м",
  },
  {
    src: png7,
    title: "Когда я думаю о Германии ночью",
    duration: "1ч 17м",
  },
  {
    src: png8,
    title: "Gimme Danger: История Игги и The Stooges»",
    duration: "1ч 17м",
  },
  {
    src: png9,
    title: "Дженис: Маленькая девочка грустит",
    duration: "1ч 17м",
  },
  {
    src: png10,
    title: "Соберись перед прыжком",
    duration: "1ч 17м",
  },
  {
    src: png11,
    title: "Пи Джей Харви: A dog called money",
    duration: "1ч 17м",
  },
  {
    src: png12,
    title: "По волнам: Искусство звука в кино",
    duration: "1ч 17м",
  },
];

export default function Movies(props) {
  return (
    <>
      {/* <Header /> */}
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
