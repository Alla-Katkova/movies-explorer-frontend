import HomeButton from "../HomeButton/HomeButton.jsx";
import "./Register.css";

export default function Register() {
  return (
    <main className="register">
      <div className="register__logo">
        <HomeButton />
      </div>
      <div className="register__container">
        <h2 className="register__title">Добро пожаловать!</h2>
        <form className="register__form">
          <fieldset className="register__inputs">
            <label className="register__label">
              Имя
              <input className="register__input" name="name" id="name" type="text" />
            </label>
            <span className="register__error-message" id="name-error"></span>
          </fieldset>
          <fieldset className="register__inputs">
            <label className="register__label">
              E-mail
              <input className="register__input" name="email" id="email" type="text" />
            </label>
            <span className="register__error-message" id="email-error"></span>
          </fieldset>
          <fieldset className="register__inputs">
            <label className="register__label">
              Пароль
              <input className="register__input" name="password" id="password" type="text" />
            </label>
            <span className="register__error-message" id="password-error"></span>
          </fieldset>
        </form>
        <div className="register__button-common-container">
          <button className="register__button">Зарегистрироваться</button>
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
