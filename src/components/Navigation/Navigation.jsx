import { Link } from "react-router-dom";
import "./Navigation.css";

export default function Navigation() {
  const loggedIn = true;
  return (
    <>
      {loggedIn ? (
        <nav className="navigation">
          <ul className="navigation__list">
            <li className="navigation__item">
              <Link to="/movies" className="navigation__link">
                Фильмы
              </Link>
            </li>
            <li className="navigation__item">
              <Link to="/saved-movies" className="navigation__link">
                Сохранённые фильмы
              </Link>
            </li>
            <li className="navigation__item navigation__item_type_account">
              <Link to="/profile" className="navigation__link navigation__link_type_account">
                Аккаунт
              </Link>
            </li>
          </ul>
        </nav>
      ) : (
        <nav className="navigation">
          <ul className="navigation__list">
            <li>
              <Link to="/signup" className="navigation__link navigation__link_landing">
                Регистрация
              </Link>
            </li>
            <li>
              <Link to="/signin" className="navigation__link navigation__link_landing navigation__link_signin">
                Войти
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}
