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

    if (name === "email" && !isEmail(value)) {
      setErrors((oldErrors) => {
        return { ...oldErrors, [name]: "Неправильный формат" };
      });
      setIsValid(false);
      return;
    }

    setErrors((oldErrors) => {
      return { ...oldErrors, [name]: validationMessage };
    });

    setIsValid(form.checkValidity());
  }

  const setValue = useCallback((name, value) => {
    setValues((oldValues) => {
      return { ...oldValues, [name]: value };
    });
  }, []);

  function resetForm(dataOld = {}) {
    setValues(dataOld);
    setErrors({});
    setIsValid(false);
  }

  return { values, errors, isValid, handleChange, setValue, resetForm };
}
