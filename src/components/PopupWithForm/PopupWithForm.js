/* eslint-disable react/prop-types */
import React from "react";
import "./PopupWithForm.css";

function PopupWithForm({
  isOpen,
  onClose,
  name,
  title,
  children,
  buttonText,
  linkText,
  onSignInPopupClick,
  onSignUpPopupClick,
}) {
  return (
    <div className={`popup popup_type_${name} ${isOpen && "popup__is-opened"}`}>
      <div className="popup__content">
        <button
          onClick={onClose}
          aria-label="close"
          type="button"
          className="popup__close-button"
        />
        <p className="popup__title">{title}</p>
        <form name={name} className="popup__form">
          {children}
          <span
            id="input_type_profession-error"
            className="popup__input-error-main popup__input-error"
          >
            This email is not available
          </span>
          <button
            aria-label="save"
            type="submit"
            name="popupSaveButton"
            className="popup__save-button popup__save-button_disabled"
          >
            {buttonText}
          </button>
          <p className="popup__link">
      or{" "}
      <button
        type="button" onClick={onSignUpPopupClick || onSignInPopupClick}
        className="popup__link-words"
      >{`${linkText}`}</button>
    </p>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
