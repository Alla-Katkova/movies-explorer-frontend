import Header from "../Header/Header.jsx";
import "./Profile.css";
import { useEffect, useState } from "react";
import { editUserDetails, getUserDetails } from "../../utils/MainApi";
import useValidationForFrom from "../../utils/useValidationForFrom";
import { usernamePattern } from "../../utils/regex";

export default function Profile({ handleLogout }) {
  const { values, errors, isValid, setValue, handleChange } = useValidationForFrom();
  const [currentUserDetails, setCurrentUserDetails] = useState({ name: "", email: "" });
  const [serverError, setServerError] = useState("");
  const [successMessage, setSuccessMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    getUserDetails()
      .then((userData) => {
        setCurrentUserDetails(userData);
        setServerError("");
        setValue("email", userData.email);
        setValue("name", userData.name);
      })
      .catch((error) => setServerError(error))
      .finally(() => setIsLoading(false));
  }, [setValue]);

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  function isButtonDisabled() {
    const hasNameChanged = values.name && values.name !== currentUserDetails.name;
    const hasEmailChanged = values.email && values.email !== currentUserDetails.email;
    return !isValid || !(hasNameChanged || hasEmailChanged);
  }

  function handleEdit(e) {
    e.preventDefault();
    setIsLoading(true);

    const updatedUserDetails = {
      name: values.name || currentUserDetails.name,
      email: values.email || currentUserDetails.email,
    };

    editUserDetails(updatedUserDetails)
      .then((updatedUserData) => {
        setCurrentUserDetails({ ...currentUserDetails, ...updatedUserData });
        setSuccessMessage("Данные успешно сохранены!");
      })
      .catch((error) => setServerError(error.message))
      .finally(() => setIsLoading(false));
  }

  function handleInputChange(e) {
    handleChange(e);
    setServerError("");
  }

  return (
    <>
      <Header isLoggedIn={true} />
      <main className="profile">
        {successMessage && <section className="profile__success-message">{successMessage}</section>}
        <section className="profile__container">
          <h1 className="profile__title">Привет, {currentUserDetails.name}!</h1>
          <form
            className="profile__form"
            noValidate
            onSubmit={handleEdit}
          >
            <fieldset className="profile__inputs profile__inputs-name">
              <label
                className="profile__label"
                htmlFor="name"
              >
                Имя
              </label>
              <input
                className="profile__input"
                name="name"
                id="name"
                type="text"
                minLength={2}
                maxLength={15}
                pattern={usernamePattern}
                value={values.name || ""}
                placeholder="Имя"
                onChange={handleInputChange}
                disabled={isLoading}
              />
              <span
                className="profile__error-message"
                id="name-error"
              >
                {errors.name}
              </span>
            </fieldset>
            <fieldset className="profile__inputs profile__inputs-email">
              <label
                className="profile__label"
                htmlFor="email"
              >
                E-mail
              </label>
              <input
                className="profile__input"
                name="email"
                id="email"
                type="email"
                value={values.email || ""}
                placeholder="Email"
                onChange={handleInputChange}
                disabled={isLoading}
              />
              <span
                className="profile__error-message"
                id="email-error"
              >
                {errors.email}
              </span>
            </fieldset>
            <div className="profile__buttons-container">
              <span
                className="profile__error-message profile__error-message-type-server"
                id="server-error"
              >
                {serverError}
              </span>
              <button
                className="profile__button profile__button-edit"
                disabled={isButtonDisabled() || isLoading}
                type="submit"
              >
                Редактировать
              </button>
              <button
                className="profile__button profile__button-signout"
                onClick={handleLogout}
                type="button"
              >
                Выйти из аккаунта
              </button>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}
