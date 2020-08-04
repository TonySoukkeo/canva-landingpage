import { useState, useCallback } from "react";

/**
 * Custom hook that manages properties of input fields
 * @function useInput
 * @param {Object} initialValues - starting initial state of input properties
 * @return {Object}
 */
const useForm = (initialInputValues) => {
  const [inputValues, setInputValues] = useState(initialInputValues);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log(inputValues);
    },
    [inputValues]
  );

  const handleOnChange = useCallback((e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputValues((prevVal) => ({
      ...prevVal,
      [name]: {
        value,
        focused: true,
      },
    }));
  }, []);

  return { inputValues, handleOnChange, handleSubmit };
};

export default useForm;
