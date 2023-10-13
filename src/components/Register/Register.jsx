import HomeButton from "../HomeButton/HomeButton.jsx";
import "./Register.css";
import { Link, Navigate, useLocation } from "react-router-dom";
import useValidationForForm from "../../utils/useValidationForForm";
import { useState } from "react";

export default function Register({ isLoggedIn, handleRegister }) {
  const { values, errors, isValid, handleChange } = useValidationForForm();
  const [serverError, setServerError] = useState("");
  let location = useLocation();

  if (isLoggedIn) {
    return <Navigate to="/movies" state={{ from: location }} replace />;
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleRegister(values).catch((error) => {
      setServerError(error);
    });
  }

  function handleInputChange(e) {
    handleChange(e);
    setServerError("");
  }

  return (
    <main className="register">
      <div className="register__logo">
        <HomeButton />
      </div>
      <div className="register__container">
        <h1 className="register__title">Добро пожаловать!</h1>
        <form className="register__form" noValidate onSubmit={handleSubmit}>
          <fieldset className="register__inputs">
            <label className="register__label">
              Имя
              <input
                className="register__input"
                name="name"
                id="name"
                type="text"
                minLength={2}
                maxLength={15}
                required
                placeholder="Имя"
                onChange={handleInputChange}
              />
            </label>
            <span className="register__error-message" id="name-error">
              {errors.name}
            </span>
          </fieldset>
          <fieldset className="register__inputs">
            <label className="register__label">
              E-mail
              <input
                className="register__input"
                name="email"
                id="email"
                type="text"
                required
                placeholder="Email"
                pattern="^.+@.+\..+$"
                onChange={handleInputChange}
              />
            </label>
            <span className="register__error-message" id="email-error">
              {errors.email}
            </span>
          </fieldset>
          <fieldset className="register__inputs">
            <label className="register__label">
              Пароль
              <input
                className="register__input"
                name="password"
                id="password"
                type="text"
                minLength={6}
                maxLength={15}
                required
                placeholder="Пароль"
                onChange={handleInputChange}
              />
            </label>
            <span className="register__error-message" id="password-error">
              {errors.password}
            </span>
            <span className="register__error-message" id="server-error">
              {serverError}
            </span>
          </fieldset>
          <div className="register__button-common-container">
            <button type="submit" disabled={!isValid} className={!isValid ? "register__button register__button_type_disabled" : "register__button"}>
              Зарегистрироваться
            </button>
            <div className="register__link-container">
              <span className="register__link-already-registered">Уже зарегистрированы?</span>
              <Link className="register__link-signin" to="/signin">
                Войти
              </Link>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
