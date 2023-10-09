import Header from "../Header/Header.jsx";
import "./Profile.css";

export default function Profile() {
  return (
    <>
      <Header />
      <main className="profile">
        <section className="profile__container">
          <h1 className="profile__title">{"Привет, Виталий!"}</h1>
          <form className="profile__form">
            <fieldset className="profile__inputs profile__inputs-name">
              <label className="profile__label" for="name">
                Имя
              </label>
              <input className="profile__input" name="name" id="name" type="text" minLength={2} maxLength={15} required />
              <span className="profile__error-message" id="name-error"></span>
            </fieldset>
            <fieldset className="profile__inputs profile__inputs-email">
              <label className="profile__label" for="email">
                E-mail
              </label>
              <input className="profile__input" name="email" id="email" type="email" />
              <span className="profile__error-message" id="email-error"></span>
            </fieldset>
            <div className="profile__buttons-container">
              <button className="profile__button profile__button-edit" type="button">
                Редактировать
              </button>
              <a href="/" className="profile__button profile__button-signout">
                Выйти из аккаунта
              </a>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}
