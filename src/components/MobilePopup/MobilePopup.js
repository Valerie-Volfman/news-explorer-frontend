/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import "./MobilePopup.css";

function MobilePopup({ isOpenMobile, onClose, name, onSignInPopupClick }) {
  function handleSignInClick() {
    onSignInPopupClick();
  }
  return (
    <div
      className={`popup popup_type_${name} mobile ${
        isOpenMobile ? "mobile__is-opened" : { onClose } && ""
      }`}
    >
      <div className="mobile__bg">
        <Link className="mobile__menu-link" to="/">
          Home
        </Link>
        <button
          onClick={handleSignInClick}
          type="button"
          className="mobile__menu-button"
        >
          Sign in
        </button>
      </div>
    </div>
  );
}

export default MobilePopup;
