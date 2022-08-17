/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/prop-types */
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";
import { ReactComponent as Exit } from "../../images/exit.svg";
import { ReactComponent as ExitWhite} from "../../images/logout.svg";

function Navigation({
  onSignInPopupClick,
  onMobilePopupClickOpen,
  onClose,
  buttonText,
  name,
  loggedIn,
  onLoggedInClick,
  onLoggedOut,
}) {
  const [isActive, setIsActive] = React.useState(false);
  const location = useLocation();
  const savedNewsPageLocation = location.pathname === "/saved-news";

  
function handleLoggedIn() {
  onLoggedInClick(true)
}

function handleSignInClick() {
  if (!loggedIn) {
  onSignInPopupClick(true);
  } if (loggedIn) {
  handleLoggedIn()
  }
}

  function handleSignOut() {
    onLoggedOut(false)
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
              savedNewsPageLocation ? "menu__button_state_non-active" : "menu__button_state_active"
            }`}
            to="/"
          >
            Home
          </Link>
          <Link
            className={ `${loggedIn
                ? "menu__button" : "menu__button_state_hidden" }` && `${!savedNewsPageLocation ? "menu__button menu__button_state_non-active"
                : "menu__button_state_active" }` }
            to="/saved-news"
          >
            Saved articles
          </Link>
          <button
            type="submit"
            onClick={() =>
               `${!loggedIn ? handleSignInClick() : handleSignOut()}`}
            className={`menu__main-button ${
               loggedIn && "menu__main-button_type_small" || !loggedIn && "menu__main-button"
               }`}
          >
            {loggedIn ? "Elise" : "Sign in" }
          {`${loggedIn ?  `${<Exit />}`  : ""}` && `${savedNewsPageLocation ? <Exit /> : <ExitWhite />}` }
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
