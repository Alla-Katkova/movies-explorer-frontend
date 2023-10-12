import HomeButton from "../HomeButton/HomeButton.jsx";
import "./Register.css";
import { Navigate, useLocation } from "react-router-dom";

export default function Register({ isLoggedIn }) {
  let location = useLocation();

  if (isLoggedIn) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return (
    <main className="register">
      <div className="register__logo">
        <HomeButton />
      </div>
      <div className="register__container">
        <h1 className="register__title">Добро пожаловать!</h1>
        <form className="register__form">
          <fieldset className="register__inputs">
            <label className="register__label">
              Имя
              <input className="register__input" name="name" id="name" type="text" minLength={2} maxLength={15} required placeholder="Имя" />
            </label>
            <span className="register__error-message" id="name-error"></span>
          </fieldset>
          <fieldset className="register__inputs">
            <label className="register__label">
              E-mail
              <input className="register__input" name="email" id="email" type="text" required placeholder="Email" />
            </label>
            <span className="register__error-message" id="email-error"></span>
          </fieldset>
          <fieldset className="register__inputs">
            <label className="register__label">
              Пароль
              <input className="register__input" name="password" id="password" type="text" minLength={6} maxLength={15} required placeholder="Пароль" />
            </label>
            <span className="register__error-message" id="password-error"></span>
          </fieldset>
        </form>
        <div className="register__button-common-container">
          <button type="submit" className="register__button">
            Зарегистрироваться
          </button>
          <div className="register__link-container">
            <span className="register__link-already-registered">Уже зарегистрированы?</span>
            <a className="register__link-signin" href="/signin">
              Войти
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
