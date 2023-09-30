import "./Movies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList.jsx";
import SearchForm from "../SearchForm/SearchForm.jsx";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";

const fakeCards = [
  {
    src: "../../images/1.png",
    title: "33 слова о дизайне",
    duration: "1ч 17м",
  },
  {
    src: "../../images/2.png",
    title: "Киноальманах «100 лет дизайна»",
    duration: "1ч 17м",
  },
  {
    src: "../../images/3.png",
    title: "В погоне за Бенкси",
    duration: "1ч 17м",
  },
  {
    src: "../../images/4.png",
    title: "Баския: Взрыв реальности",
    duration: "1ч 17м",
  },
  {
    src: "../../images/5.png",
    title: "Бег это свобода",
    duration: "1ч 17м",
  },
  {
    src: "../../images/6.png",
    title: "Книготорговцы",
    duration: "1ч 17м",
  },
  {
    src: "../../images/7.png",
    title: "Когда я думаю о Германии ночью",
    duration: "1ч 17м",
  },
  {
    src: "../../images/8.png",
    title: "Gimme Danger: История Игги и The Stooges»",
    duration: "1ч 17м",
  },
  {
    src: "../../images/9.png",
    title: "Дженис: Маленькая девочка грустит",
    duration: "1ч 17м",
  },
  {
    src: "../../images/10.png",
    title: "Соберись перед прыжком",
    duration: "1ч 17м",
  },
  {
    src: "../../images/11.png",
    title: "Пи Джей Харви: A dog called money",
    duration: "1ч 17м",
  },
  {
    src: "../../images/12.png",
    title: "По волнам: Искусство звука в кино",
    duration: "1ч 17м",
  },
];

export default function Movies(props) {
  return (
    <>
      {/* <Header /> */}
      <main className="movies">
        {/* <SearchForm /> */}
        <MoviesCardList moviesData={fakeCards} />
        <button className="movies__add-button">Ещё</button>
      </main>
      <Footer />
    </>
  );
}
