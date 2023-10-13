import Header from "../Header/Header.jsx";
import "./Profile.css";
import { useEffect, useState } from "react";
import { editUserDetails, getUserDetails } from "../../utils/MainApi";
import useValidationForForm from "../../utils/useValidationForForm";

export default function Profile({ handleLogout }) {
  const { values, errors, isValid, handleChange } = useValidationForForm();
  const [userDetails, setUserDetails] = useState({ name: "", email: "" });
  const [serverError, setServerError] = useState("");

  useEffect(() => {
    getUserDetails()
      .then((userData) => {
        setUserDetails(userData);
        setServerError("");
      })
      .catch((error) => setServerError(error));
  }, []);

  function isButtonDisabled() {
    const hasNameChanged = values.name && values.name !== userDetails.name;
    const hasEmailChanged = values.email && values.email !== userDetails.email;
    return !isValid || !(hasNameChanged || hasEmailChanged);
  }

  function handleEdit(e) {
    e.preventDefault();

    const updatedUserDetails = {
      name: values.name || userDetails.name,
      email: values.email || userDetails.email,
    };
    console.log(updatedUserDetails);
    editUserDetails(updatedUserDetails)
      .then((res) => setUserDetails(res))
      .catch((error) => setServerError(error.message));
  }

  function handleInputChange(e) {
    handleChange(e);
    setServerError("");
  }

  return (
    <>
      <Header isLoggedIn={true} />
      <main className="profile">
        <section className="profile__container">
          <h1 className="profile__title">Привет, {userDetails.name}!</h1>
          <form className="profile__form" noValidate onSubmit={handleEdit}>
            <fieldset className="profile__inputs profile__inputs-name">
              <label className="profile__label" htmlFor="name">
                Имя
              </label>
              <input
                className="profile__input"
                name="name"
                id="name"
                type="text"
                minLength={2}
                maxLength={15}
                // required
                placeholder={userDetails.name}
                onChange={handleInputChange}
              />
              <span className="profile__error-message" id="name-error">
                {errors.name}
              </span>
            </fieldset>
            <fieldset className="profile__inputs profile__inputs-email">
              <label className="profile__label" htmlFor="email">
                E-mail
              </label>
              <input className="profile__input" name="email" id="email" type="email" placeholder={userDetails.email} onChange={handleInputChange} />
              <span className="profile__error-message" id="email-error">
                {errors.email}
              </span>
            </fieldset>
            <div className="profile__buttons-container">
              <span className="profile__error-message profile__error-message-type-server" id="server-error">
                {serverError}
              </span>
              <button className="profile__button profile__button-edit" disabled={isButtonDisabled()} type="submit">
                Редактировать
              </button>
              <button className="profile__button profile__button-signout" onClick={handleLogout}>
                Выйти из аккаунта
              </button>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}
