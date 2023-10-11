import { NavLink } from "react-router-dom";
import "./DesktopMenu.css";

export default function DesktopMenu() {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <NavLink to="/movies" className="navigation__link">
            Фильмы
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink to="/saved-movies" className="navigation__link">
            Сохранённые фильмы
          </NavLink>
        </li>
      </ul>
      <NavLink to="/profile" className="navigation__account">
        Аккаунт
      </NavLink>
    </nav>
  );
}
