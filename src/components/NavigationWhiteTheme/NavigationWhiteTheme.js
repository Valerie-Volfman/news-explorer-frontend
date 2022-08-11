/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/prop-types */
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavigationWhiteTheme.css";
import exit from "../../images/exit.svg";

function NavigationWhiteTheme({ onSignInPopupClick, onBurgerPopupClick }) {
  function handleSignInClick() {
    onSignInPopupClick(true);
  }
  function handleBurgerPopupClick() {
    onBurgerPopupClick(true);
  }
  const navigateTo = useNavigate();
  function linkToNews() {
    navigateTo("/saved-news");
  }
  return (
    <div className="menu menu_dark">
      <div className="menu-white__bg">
        <p className="menu__logo-dark">NewsExplorer</p>
        <nav className="menu-white__navigation">
          <Link className="menu__non-active" to="/">
            Home
          </Link>
          <a href={linkToNews} className="menu__active-button-dark">
            Saved articles
          </a>
          <button
            type="button"
            onClick={handleBurgerPopupClick}
            className="menu-white__burger-button"
          />
          <button
            type="submit"
            onClick={handleSignInClick}
            className="menu__main-button-dark"
          >
            Elise
            <img className="menu__exit-button" src={exit} alt="exit" />
          </button>
        </nav>
      </div>
    </div>
  );
}

export default NavigationWhiteTheme;
