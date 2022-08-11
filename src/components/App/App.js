/* eslint-disable no-unused-expressions */
import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import Footer from "../Footer/Footer";
import About from "../About/About";
import PopupInput from "../PopupInput/PopupInput";
import InfoPopup from "../InfoPopup/InfoPopup";

function App() {
  const [isSignInPopupOpen, setIsSignInPopupOpen] = React.useState(false);
  const [isSignUpPopupOpen, setIsSignUpPopupOpen] = React.useState(false);
  const [isSearchResultOpen, setIsSearchResultOpen] = React.useState(false);
  const [isInfoPopupOpen, setIsInfoPopupOpen] = React.useState(false);
  // const [isBurgerPopupOpen, setIsBurgerPopupOpen] = React.useState(false);
  // const [isTheWhiteTheme, setIsTheWhiteTheme] = React.useState(false);

  function handleSearchResultClick() {
    setIsSearchResultOpen(true);
  }

  function closeAllPopups() {
    setIsSignInPopupOpen(false);
    setIsSignUpPopupOpen(false);
  }

  function handleInfoPopupClick() {
    closeAllPopups();
    setIsInfoPopupOpen(true);
  }

  function handleSignInClick() {
    closeAllPopups();
    setIsSignInPopupOpen(true);
  }

  function handleSignUpClick() {
    closeAllPopups();
    setIsSignUpPopupOpen(true);
  }

  React.useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === "Escape") {
        closeAllPopups();
      }
    };
    if (isSignInPopupOpen || isSignUpPopupOpen)
      document.addEventListener("keydown", closeByEscape);
    return () => document.removeEventListener("keydown", closeByEscape);
  }, [isSignInPopupOpen, isSignUpPopupOpen]);

  React.useEffect(() => {
    const closeByClickOnScreen = (e) => {
      if (e.target.matches(".popup")) {
        const popup = document.querySelectorAll(".popup");
        if (e.target !== popup) {
          closeAllPopups();
        }
      }
    };
    if (isSignInPopupOpen || isSignUpPopupOpen)
      document.addEventListener("mouseup", closeByClickOnScreen);
    return () => document.removeEventListener("mouseup", closeByClickOnScreen);
  }, [isSignInPopupOpen, isSignUpPopupOpen]);

  return (
    <div className="app app__bg-image">
      <Routes>
        <Route
          path="/"
          element={
            <Main
              onSignInPopupClick={() => handleSignInClick()}
              onClick={() => handleSearchResultClick}
              isOpen={isSearchResultOpen}
            />
          }
        />
        <Route path="/saved-news" element={<SavedNews />} />
      </Routes>
      <About />
      <PopupWithForm
        onSignUpPopupClick={() => handleSignUpClick()}
        isOpen={isSignInPopupOpen}
        onClose={() => closeAllPopups()}
        name="sign-in"
        title="Sign in"
        buttonText="Sign in"
        linkText="Sign up"
      >
        <PopupInput
          title="Email"
          id="input_type_email"
          type="email"
          placeholder="Enter email"
          name="popupSignInEmail"
          errorText="Invalid email address"
        />
        <PopupInput
          title="Password"
          id="input_type_password"
          type="password"
          placeholder="Enter password"
          name="popupSignInPassword"
          errorText="Invalid password"
        />
      </PopupWithForm>
      <PopupWithForm
      onInfoPopupClick={() => handleInfoPopupClick()}
        onSignInPopupClick={() => handleSignInClick()}
        isOpen={isSignUpPopupOpen}
        onClose={() => closeAllPopups()}
        name="sign-up"
        title="Sign up"
        buttonText="Sign up"
        linkText="Sign in"
      >
        <PopupInput
          title="Email"
          id="input_type_email"
          type="email"
          placeholder="Enter email"
          name="popupSignUpEmail"
          errorText="Invalid email address"
        />
        <PopupInput
          title="Password"
          id="input_type_password"
          type="password"
          placeholder="Enter password"
          name="popupSignUpPassword"
          errorText="Invalid password"
        />
        <PopupInput
          title="Username"
          id="input_type_username"
          type="text"
          placeholder="Enter your username"
          name="popupSignUpUsername"
          errorText="Invalid username"
        />
      </PopupWithForm>
      <InfoPopup
      name="info-popup"
        isOpen={isInfoPopupOpen}
        onClose={() => closeAllPopups()}
      />
      <Footer />
    </div>
  );
}

export default App;
