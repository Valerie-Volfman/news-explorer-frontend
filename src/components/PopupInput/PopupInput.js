/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import "./PopupInput.css";

function PopupInput({
  title,
  inputId,
  inputType,
  placeholder,
  name,
  isOpen,
  setValues,
  setIsValid,
  values,
}) {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState("");
  React.useEffect(() => {
    if (isOpen) {
      setValue("");
      setError("");
      setValues({});
    }
  }, [isOpen, setValues]);
  const handleChange = (e) => {
    setValue(e.target.value);
    setError(e.target.validationMessage);
    setIsValid(e.target.closest("form").checkValidity());
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <>
      <p className="popup__input-title">{title}</p>
      <input
        onChange={handleChange}
        value={value}
        id={inputId}
        type={name.toLowerCase()}
        placeholder={placeholder}
        name={name.toLowerCase()}
        minLength="4"
        maxLength="45"
        required
        className="popup__input popup__input_type_email"
      />
      <span id="input_type_card-title-error" className="popup__input-error">
        {error}
      </span>
    </>
  );
}

export default PopupInput;
