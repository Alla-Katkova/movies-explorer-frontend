import HomeButton from "../HomeButton/HomeButton";
import "./Login.css";
import useValidationForFrom from "../../utils/useValidationForFrom";
import { Link, Navigate, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Login({ handleLogin, isLoggedIn }) {
  const { values, errors, isValid, handleChange } = useValidationForFrom();
  const [serverError, setServerError] = useState("");
  let location = useLocation();

  if (isLoggedIn) {
    return (
      <Navigate
        to="/movies"
        state={{ from: location }}
        replace
      />
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleLogin(values)
      .then(() => {})
      .catch((err) => {
        setServerError(err);
      });
  }

  function handleInputChange(e) {
    handleChange(e);
    setServerError("");
  }

  return (
    <main className="login">
      <div className="login__logo">
        <HomeButton />
      </div>
      <div className="login__container">
        <h1 className="login__title">Рады видеть!</h1>
        <form
          className="login__form"
          noValidate
          onSubmit={handleSubmit}
        >
          <fieldset className="login__inputs">
            <label className="login__label">
              E-mail
              <input
                className={errors.email ? "login__input login__input-error" : "login__input"}
                name="email"
                id="email"
                required
                type="text"
                placeholder="Email"
                onChange={handleInputChange}
              />
            </label>
            <span
              className="login__error-message"
              id="email-error"
            >
              {errors.email}
            </span>
          </fieldset>
          <fieldset className="login__inputs">
            <label className="login__label">
              Пароль
              <input
                className={errors.email ? "login__input login__input-error" : "login__input"}
                name="password"
                id="password"
                type="password"
                minLength={6}
                maxLength={15}
                required
                placeholder="Пароль"
                onChange={handleInputChange}
              />
            </label>
            <span
              className="login__error-message"
              id="password-error"
            >
              {errors.password}
            </span>
          </fieldset>
          <div className="login__button-common-container">
            <span
              className="login__error-message login__error-message_type_server"
              id="server-error"
            >
              {serverError.message}
            </span>
            <button
              type="submit"
              disabled={!isValid}
              className={!isValid ? "login__button login__button_type_disabled" : "login__button"}
            >
              Войти
            </button>
            <div className="login__link-container">
              <span className="login__link-already-registered">Еще не зарегистрированы?</span>
              <Link
                className="login__link-signin"
                to="/signup"
              >
                Регистрация
              </Link>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
