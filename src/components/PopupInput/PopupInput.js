/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import "./PopupInput.css";

function PopupInput({
  title,
  inputId,
  inputType,
  placeholder,
  inputName,
  errorText,
}) {

  const [value, setValue] = React.useState("")

  const handleChange = (evt) => {
    setValue(evt.target.value)
  }
  return (
    <>
      <p className="popup__input-title">{title}</p>
      <input
      onChange={handleChange}
      value={value}
        id={inputId}
        type={inputType}
        placeholder={`${placeholder}`}
        name={inputName}
        minLength="4"
        maxLength="45"
        required
        className="popup__input popup__input_type_email"
      />
      <span id="input_type_card-title-error" className="popup__input-error">
        {errorText}
      </span>
    </>
  );
}

export default PopupInput;
