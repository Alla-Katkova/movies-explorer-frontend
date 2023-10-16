import { Link } from "react-router-dom";
import "./LoggedOutUserMenu.css";

export default function LoggedOutUserMenu() {
  return (
    <nav className="logout">
      <button
        type="button"
        className="logout__button-registration"
      >
        <Link
          to="/signup"
          className="logout__link-registration"
        >
          Регистрация
        </Link>
      </button>
      <Link
        to="/signin"
        className="logout__link-signin"
      >
        <button
          type="button"
          className="logout__button-signin"
        >
          Войти
        </button>
      </Link>
    </nav>
  );
}
