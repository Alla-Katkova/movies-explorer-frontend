import HomeButton from "../HomeButton/HomeButton";
import "./Login.css";
import useValidationForForm from "../../utils/useValidationForForm";
import { Navigate, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Login({ handleLogin, isLoggedIn }) {
  const { values, errors, isValid, handleChange, resetForm } = useValidationForForm();
  const [isServerError, setIsServerError] = useState(false);
  let location = useLocation();

  if (isLoggedIn) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleLogin(values)
      .then(() => {})
      .catch((err) => {
        setIsServerError(true);
      });
  }

  return (
    <main className="login">
      <pre>{JSON.stringify(values, null, 2)}</pre>
      <pre>{JSON.stringify(errors, null, 2)}</pre>
      <pre>{JSON.stringify(isServerError, null, 2)}</pre>
      <div className="login__logo">
        <HomeButton />
      </div>
      <div className="login__container">
        <h1 className="login__title">Рады видеть!</h1>
        <form className="login__form" noValidate onSubmit={handleSubmit}>
          <fieldset className="login__inputs">
            <label className="login__label">
              E-mail
              <input
                className={errors.email ? "login__input login__input-error" : "login__input"}
                name="email"
                id="email"
                required
                type="text"
                pattern="^.+@.+\..+$"
                placeholder="Email"
                onChange={handleChange}
              />
            </label>
            <span className="login__error-message" id="email-error">
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
                onChange={handleChange}
              />
            </label>
            <span className="login__error-message" id="password-error">
              {errors.password}
            </span>
            {isServerError ? (
              <span className="login__error-message" id="server-error">
                Вы ввели неправильный логин или пароль.
              </span>
            ) : null}
          </fieldset>
          <div className="login__button-common-container">
            <button type="submit" disabled={!isValid ? true : false} className={!isValid ? "login__button login__button_type_disabled" : "login__button"}>
              Войти
            </button>
            <div className="login__link-container">
              <span className="login__link-already-registered">Еще не зарегистрированы?</span>
              <a className="login__link-signin" href="/signup">
                Регистрация
              </a>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
