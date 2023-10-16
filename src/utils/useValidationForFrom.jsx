import { useCallback, useState } from "react";
import isEmail from "validator/lib/isEmail";

export default function useValidationForFrom() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    const validationMessage = event.target.validationMessage;
    const form = event.target.form;

    setValues((oldValues) => {
      return { ...oldValues, [name]: value };
    });

    let errorMessages = { ...errors };

    if (name === "email" && !isEmail(value)) {
      errorMessages = { ...errorMessages, [name]: "Введите корректный email." };
    } else {
      errorMessages = { ...errorMessages, [name]: validationMessage };
    }
    setErrors((oldErrors) => {
      return { ...oldErrors, ...errorMessages };
    });

    const hasErrors = Object.values(errorMessages).some((error) => error);
    setIsValid(!hasErrors && form.checkValidity());
  }

  const setValue = useCallback((name, value) => {
    setValues((oldValues) => {
      return { ...oldValues, [name]: value };
    });
  }, []);

  return { values, errors, isValid, handleChange, setValue };
}
