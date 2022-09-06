import React from "react";
import Popup from "../Popup/Popup";
import "./InfoPopup.css";

function InfoPopup({ isOpen, onClose, handleNotLoggedUserClick }) {
  return (
    <Popup isOpen={isOpen} onClose={onClose}>
      <p className="popup-info__title">Registration successfully completed!</p>
      <button
        type="button"
        onClick={handleNotLoggedUserClick}
        className="popup-info__link-words"
      >
        Sign in
      </button>
    </Popup>
  );
}

export default InfoPopup;
