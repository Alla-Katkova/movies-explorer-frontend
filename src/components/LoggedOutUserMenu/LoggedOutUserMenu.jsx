import { Link } from "react-router-dom";

export default function LoggedOutUserMenu() {
  return (
    <nav className="navigation1">
      <ul className="navigation1__list">
        <li>
          <Link to="/signup" className="navigation1__link navigation1__link_landing">
            Регистрация
          </Link>
        </li>
        <li>
          <Link to="/signin" className="navigation1__link navigation1__link_landing navigation1__link_signin">
            Войти
          </Link>
        </li>
      </ul>
    </nav>
  );
}