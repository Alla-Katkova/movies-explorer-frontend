import "./Profile.css";

export default function Profile() {
  return (
    <main className="profile">
      <div className="profile__container">
        <h2 className="profile__title">{"Привет, Алла!"}</h2>
        <form className="profile__form" noValidate>
          <fieldset className="profile__inputs">
            <input className="profile__input profile__input-name" name="name" id="name" placeholder="Имя" type="text" />
            <input className="profile__input profile__input-email" name="email" id="email" placeholder="E-mail" type="email" />
          </fieldset>
          <span className="profile__error-message"></span>
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
