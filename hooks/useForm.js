import { useEffect, useMemo, useState } from 'react';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const hasErrors = useMemo(() => Object.keys(errors).length !== 0, [errors]);

  useEffect(() => {
    if (!hasErrors && submitted) {
      callback(values);
    }
  }, [submitted, errors]);

  useEffect(() => {
    if (submitted) {
      setErrors(validate(values));
    }
  }, [setErrors, values]);

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    setErrors(validate(values));
    setSubmitted(true);
  };

  const handleChange = (event) => {
    event.persist();
    setValues((prevValues) => ({ ...prevValues, [event.target.name]: event.target.value }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
    hasErrors,
  };
};

export default useForm;
