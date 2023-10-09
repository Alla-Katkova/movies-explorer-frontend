import { NavLink } from "react-router-dom";
import "./HamburgerMenu.css";

export default function HamburgerMenu({ isOpened, setIsOpened }) {
  function hideMenu() {
    if (isOpened) {
      setIsOpened(false);
    } else {
      setIsOpened(true);
    }
  }

  return (
    <section className={`hamburger-menu ${isOpened ? "" : "hamburger-menu_type_hidden"}`}>
      <button type="button" className="hamburger-menu__close-button" onClick={hideMenu}>
        +
      </button>
      <nav className={`hamburger-menu__nav`}>
        <ul className="hamburger-menu__list">
          <li className="hamburger-menu__item">
            <NavLink to="/" className="hamburger-menu__link">
              Главная
            </NavLink>
          </li>
          <li className="hamburger-menu__item">
            <NavLink to="/movies" className="hamburger-menu__link">
              Фильмы в бургере
            </NavLink>
          </li>
          <li className="hamburger-menu__item">
            <NavLink to="/saved-movies" className="hamburger-menu__link">
              Сохранённые фильмы в бургере
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="hamburger-menu__item-container">
        <NavLink to="/profile" className="hamburger-menu__item-account">
          Аккаунт
        </NavLink>
      </div>
    </section>
  );
}
