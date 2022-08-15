/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/prop-types */
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";
import { ReactComponent as Exit } from "../../images/exit.svg";

function Navigation({
  onSignInPopupClick,
  onMobilePopupClickOpen,
  onClose,
  buttonText,
  name,
}) {
  const [isActive, setIsActive] = React.useState(false);
  const location = useLocation();
  const savedNewsPageLocation = location.pathname === "/saved-news";

  function handleSignInClick() {
    onSignInPopupClick();
  }

  function handleMobilePopup() {
    if (isActive) {
      onClose();
    } else {
      onMobilePopupClickOpen();
    }
  }
  return (
    <div
      className={`menu menu_theme_light ${
        savedNewsPageLocation && "menu__theme_dark"
      }`}
    >
      <div className="menu__bg">
        <p className="menu__logo">NewsExplorer</p>
        <nav className="menu__navigation">
          <Link
            className={`menu__button menu__button_state_active ${
              savedNewsPageLocation && "menu__button_state_non-active"
            }`}
            to="/"
          >
            Home
          </Link>
          <Link
            className={`${
              savedNewsPageLocation
                ? "menu__button" && "menu__button_state_active"
                : "menu__button_state_hidden"
            }`}
            to="/saved-news"
          >
            Saved articles
          </Link>
          <button
            type="submit"
            onClick={() =>
              `${
                savedNewsPageLocation ? (
                  <Link to="/" />
                ) : (
                  `${handleSignInClick()}`
                )
              }`
            }
            className={`menu__main-button ${
              savedNewsPageLocation ? "menu__main-button_type_small" : ""
            }`}
          >
            {savedNewsPageLocation ? "Elise" : "Sign in"}
            {savedNewsPageLocation && <Exit />}
          </button>
        </nav>
        <button
          type="button"
          onClick={() => `${handleMobilePopup()}` && setIsActive(!isActive)}
          className="menu__burger-button"
        >
          <span
            className={`menu__burger-button-line ${
              savedNewsPageLocation ? "menu__burger-button-line_black" : ""
            } ${isActive ? "menu__burger-button_active" : ""}`}
          />
        </button>
      </div>
    </div>
  );
}

export default Navigation;
