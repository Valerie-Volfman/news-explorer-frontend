/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import "./PopupInput.css";

function PopupInput({ title, name, values, errors, handleChange }) {
  return (
    <>
      <p className="popup__input-title">{title}</p>
      <input
        onChange={handleChange}
        value={values[name] || ""}
        type={name}
        placeholder={`Enter ${name}`}
        name={name}
        minLength="4"
        maxLength="45"
        required
        className="popup__input popup__input_type_email"
      />
      <span id="input_type_card-title-error" className="popup__input-error">
        {errors[name]}
      </span>
    </>
  );
}

export default PopupInput;
