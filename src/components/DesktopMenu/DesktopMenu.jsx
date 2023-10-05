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
      <button type="button" className="navigation__item_type_account">
        <NavLink to="/profile" className="navigation__link navigation__link_type_account">
          Аккаунт
        </NavLink>
      </button>
    </nav>
  );
}
