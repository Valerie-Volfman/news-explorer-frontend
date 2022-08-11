/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-useless-fragment */
import React from "react";
import "./InfoPopup.css";

function InfoPopup({ isOpen, onClose, onInfoPopupClick, name }) {
  return (
    <>
      <div
        className={`popup popup_type_${name} ${isOpen && "popup__is-opened"}`}
      >
        <div className="popup__content">
          <button
            onClick={onClose}
            aria-label="close"
            type="button"
            className="popup__close-button"
          />
          <p className="popup-info__title">
            Registration successfully completed!
          </p>
          <button
            type="button"
            onClick={onInfoPopupClick}
            className="popup-info__link-words"
          >
            Sign in
          </button>
        </div>
      </div>
    </>
  );
}

export default InfoPopup;
