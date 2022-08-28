import React from "react";
import "./InfoPopup.css";

function InfoPopup({ isOpen, onClose, handleNotLoggedUserClick }) {
    React.useEffect(() => {
    },[isOpen]);
    function handleClose() {
        onClose();
    }
  return (
      <div
        className={`popup ${isOpen && "popup__is-opened"}`}
      >
        <div className="popup__content">
          <button
            onClick={handleClose}
            aria-label="close"
            type="button"
            className="popup__close-button"
          />
          <p className="popup-info__title">
            Registration successfully completed!
          </p>
          <button
            type="button"
            onClick={handleNotLoggedUserClick}
            className="popup-info__link-words"
          >
            Sign in
          </button>
        </div>
      </div>
  );
}

export default InfoPopup;
