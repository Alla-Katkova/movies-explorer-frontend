import { NavLink } from "react-router-dom";
import "./HamburgerMenu.css";

export default function HamburgerMenu({ isOpened, setIsOpened }) {
  function hideMenu() {
    setIsOpened(false);
    document.body.style.overflow = "unset";
  }

  return (
    <section className={`hamburger-menu ${isOpened ? "" : "hamburger-menu_type_hidden"}`}>
      <div className="hamburger-menu__container-button">
        <button type="button" className="hamburger-menu__close-button" onClick={hideMenu}></button>
      </div>
      <nav className={`hamburger-menu__nav`}>
        <ul className="hamburger-menu__list">
          <li className="hamburger-menu__item">
            <NavLink to="/" className="hamburger-menu__link">
              Главная
            </NavLink>
          </li>
          <li className="hamburger-menu__item">
            <NavLink to="/movies" className="hamburger-menu__link">
              Фильмы
            </NavLink>
          </li>
          <li className="hamburger-menu__item">
            <NavLink to="/saved-movies" className="hamburger-menu__link">
              Сохранённые фильмы
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
