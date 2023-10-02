import "./Profile.css";

export default function Profile() {
  return (
    <main className="profile">
      <div className="profile__container">
        <h2 className="profile__title">{"Привет, Алла!"}</h2>
        <form className="profile__form">
          <fieldset className="profile__inputs">
            <label className="profile__label">
              Имя
              <input className="profile__input profile__input-name" name="name" id="name" type="text" />
            </label>
            <span className="profile__error-message" id="name-error"></span>
          </fieldset>
          <fieldset className="profile__inputs">
            <label className="profile__label">
              Email
              <input className="profile__input profile__input-email" name="email" id="email" type="email" />
            </label>
            <span className="profile__error-message" id="email-error"></span>
          </fieldset>
          <div className="profile__buttons-container">
            <button className="profile__button profile__button-edit" type="submit">
              Редактировать
            </button>
            <button className="profile__button profile__button-signout">Выйти из аккаунта</button>
          </div>
        </form>
      </div>
    </main>
  );
}
