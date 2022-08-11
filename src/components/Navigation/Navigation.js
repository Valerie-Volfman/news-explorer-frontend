/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation({ onSignInPopupClick, onBurgerPopupClick }) {
  function handleSignInClick() {
    onSignInPopupClick(true);
  }
  function handleBurgerPopupClick() {
    onBurgerPopupClick(true);
  }
  return (
    <div className="menu">
      <div className="menu__bg">
        <p className="menu__logo">NewsExplorer</p>
        <nav className="menu__navigation">
          <Link className="menu__active-button" to="/">
            Home
          </Link>
          <button
            type="button"
            onClick={handleBurgerPopupClick}
            className="menu__burger-button"
          />
          <button
            type="submit"
            onClick={handleSignInClick}
            className="menu__main-button"
          >
            Sign in
          </button>
        </nav>
      </div>
    </div>
  );
}

export default Navigation;
