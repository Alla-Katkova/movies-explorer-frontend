import { Link } from "react-router-dom";
import "./LoggedOutUserMenu.css";

export default function LoggedOutUserMenu() {
  return (
    <nav className="logout">
      <button className="logout__button-registration">
        <Link to="/signup" className="logout__link-registration">
          Регистрация
        </Link>
      </button>
      <button className="logout__button-signin">
        <Link to="/signin" className="logout__link-signin">
          Войти
        </Link>
      </button>
    </nav>
  );
}
