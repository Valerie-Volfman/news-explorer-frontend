/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation({ onSignInPopupClick }) {
  function handleSignInClick() {
    onSignInPopupClick(true)
  }
  return (
    <div className="menu">
      <p className="menu__logo">NewsExplorer</p>
      <nav className="menu__navigation">
        <Link className="menu__active-button" to="/">Home</Link>
        <button type="button" onClick={handleSignInClick} className="menu__main-button">Sign in</button>
      </nav>
    </div>
  );
}

export default Navigation;
