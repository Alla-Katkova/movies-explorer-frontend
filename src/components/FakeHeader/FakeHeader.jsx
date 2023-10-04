import { Link } from "react-router-dom";

export default function FakeHeader({}) {
  return (
    <header>
      <Link to={"/signup"}>Регистрация</Link>
      <Link to={"/signin"}>Авторизация</Link>
      <Link to={"/"}>Главная</Link>
      <Link to={"/movies"}>Фильмы</Link>
      <Link to={"/saved-movies"}>Сохраненные фильмы</Link>
      <Link to={"/profile"}>Профиль</Link>
      <Link to={"/notfound"}>NotFound</Link>
    </header>
  );
}

// // /не зарегистрированный пользователь 1280 /
// регистрация
// войти

// не зарег 760 и 320
// регистрация
// войти

// зарег юзер 1280
// фильмы
// сохраненные фильмы
// аккаунт

// зарег юзер 760 и 320
// иконка бургер
// иконка крестик
// главная
// фильмы
// сохраненные фильмы
// аккаунт

// нет хедера
// 404
// регистрация
// авторизация
