import { useCallback, useState } from "react";

export default function useValidationForForm() {
  const [values, setValues] = useState([]);
  const [errors, setErrors] = useState([]);
  const [isValid, setIsValid] = useState(false);

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    const validationMessage = event.target.validationMessage;
    const form = event.target.form;

    setValues((oldValues) => {
      return { ...oldValues, [name]: value };
    });

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

  //  возвращает все значения, кроме тех(dataold) что были переланы, если не было передано, то все обнуляется
  function resetForm(dataOld = {}) {
    setValues(dataOld);
    setErrors({});
    setIsValid(false);
  }

  return { values, errors, isValid, handleChange, setValue, resetForm };
}
