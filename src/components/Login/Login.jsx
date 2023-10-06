import HomeButton from "../HomeButton/HomeButton";
import "./Login.css";

export default function Login() {
  return (
    <main className="login">
      <div className="login__logo">
        <HomeButton />
      </div>
      <div className="login__container">
        <h2 className="login__title">Рады видеть!</h2>
        <form className="login__form">
          <fieldset className="login__inputs">
            <label className="login__label">
              E-mail
              <input className="login__input" name="email" id="email" type="text" />
            </label>
            <span className="login__error-message" id="email-error"></span>
          </fieldset>
          <fieldset className="login__inputs">
            <label className="login__label">
              Пароль
              <input className="login__input" name="password" id="password" type="text" />
            </label>
            <span className="login__error-message" id="password-error"></span>
          </fieldset>
        </form>
        <div className="login__button-common-container">
          <button className="login__button">Войти</button>
          <div className="login__link-container">
            <a className="login__link-already-registered">Еще не зарегистрированы?</a>
            <a className="login__link-signin">Регистрация</a>
          </div>
        </div>
      </div>
    </main>
  );
}
