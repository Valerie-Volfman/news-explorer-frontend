/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/prop-types */
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";
import exitIcon from "../../images/exit.svg";
import exitIconWhite from "../../images/logout.svg";

function Navigation({
  onMobilePopupClickOpen,
  onClose,
  loggedIn,
  handleLoggedUserClick,
  handleNotLoggedUserClick,
}) {
  const [isActive, setIsActive] = React.useState(false);
  const location = useLocation();
  const savedNewsPageLocation = location.pathname === "/saved-news";

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
        <Link to="/" className="menu__logo">NewsExplorer</Link>
        <nav className="menu__navigation">
          <Link
            className={`menu__button menu__button_state_active ${
              savedNewsPageLocation
                ? "menu__button_state_non-active"
                : "menu__button_state_active"
            }`}
            to="/"
          >
            Home
          </Link>
          {loggedIn && (
            <Link
              className={
                `${loggedIn ? "menu__button" : "menu__button_state_hidden"}` &&
                `${
                  !savedNewsPageLocation
                    ? "menu__button menu__button menu__button_state_non-active"
                    : "menu__button menu__button_state_active"
                }`
              }
              to="/saved-news"
            >
              Saved articles
            </Link>
          )}
          {loggedIn ? (
            <button
              onClick={handleLoggedUserClick}
              type="button"
              className="menu__main-button"
            >
              <p>Elise</p>
              <img
                className="menu__icon-exit"
                src={savedNewsPageLocation ? exitIcon : exitIconWhite}
                alt="logout"
              />
            </button>
          ) : (
            <button
              onClick={handleNotLoggedUserClick}
              type="button"
              className="menu__main-button"
            >
              <p className="menu__signin-btn">Sign in</p>
            </button>
          )}
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
