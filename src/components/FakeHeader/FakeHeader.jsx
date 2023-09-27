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
