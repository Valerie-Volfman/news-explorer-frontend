/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable import/no-duplicates */
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import Footer from "../Footer/Footer";
import About from "../About/About";
import PopupInput from "../PopupInput/PopupInput";
import InfoPopup from "../InfoPopup/InfoPopup";
import Navigation from "../Navigation/Navigation";
import MobilePopup from "../MobilePopup/MobilePopup";
// import CurrentUserContext from "../../contexts/CurrentUserContext";

function App() {
  const [isSignInPopupOpen, setIsSignInPopupOpen] = React.useState(false);
  const [isSignUpPopupOpen, setIsSignUpPopupOpen] = React.useState(false);
  const [isSearchResultOpen, setIsSearchResultOpen] = React.useState(false);
  const [isInfoPopupOpen, setIsInfoPopupOpen] = React.useState(false);
  const [isMobilePopupOpen, setIsMobilePopupOpen] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const location = useLocation();
  const homePage = location.pathname === "/";
  // const [currentUser, setCurrentUser] = React.useState({});

  function handleSearchResultClick() {
    setIsSearchResultOpen(true);
  }

  function handleClearForm() {
    document.addEventListener("submit", (evt) => {
      evt.preventDefault();
      evt.target.reset();
    });
  }

  function closeAllPopups() {
    setIsMobilePopupOpen(false);
    setIsSignInPopupOpen(false);
    setIsSignUpPopupOpen(false);
    setIsInfoPopupOpen(false);
  }

  function handleSingInSubmit(evt) {
    evt.preventDefault();
    setLoggedIn(true);
    closeAllPopups();
  }

  function handleLoggedOutState() {
    setLoggedIn(false);
  }

  function handleMobilePopupClickOpen() {
    closeAllPopups();
    setIsMobilePopupOpen(true);
  }

  function handleMobilePopupClickClose() {
    closeAllPopups();
    setIsMobilePopupOpen(false);
  }

  function handleInfoPopupClick(evt) {
    evt.preventDefault();
    closeAllPopups();
    setIsInfoPopupOpen(true);
  }
  function openRegisterPopup() {
    handleClearForm();
    closeAllPopups();
    setIsSignUpPopupOpen(true);
  }
  function openLoginPopup() {
    handleClearForm();
    closeAllPopups();
    setIsSignInPopupOpen(true);
  }
  function handleFormClick(boolean) {
    closeAllPopups();
    if (boolean) {
      setIsSignInPopupOpen(true);
      setIsSignUpPopupOpen(false);
    } else {
      setIsSignInPopupOpen(false);
      setIsSignUpPopupOpen(true);
    }
  }

  React.useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === "Escape") {
        closeAllPopups();
      }
    };
    if (isSignInPopupOpen || isSignUpPopupOpen || isInfoPopupOpen)
      document.addEventListener("keydown", closeByEscape);
    return () => document.removeEventListener("keydown", closeByEscape);
  }, [isSignInPopupOpen, isSignUpPopupOpen, isInfoPopupOpen]);

  React.useEffect(() => {
    const closeByClickOnScreen = (e) => {
      if (e.target.matches(".popup")) {
        const popup = document.querySelectorAll(".popup");
        if (e.target !== popup) {
          closeAllPopups();
        }
      }
    };
    if (isSignInPopupOpen || isSignUpPopupOpen || isInfoPopupOpen)
      document.addEventListener("mouseup", closeByClickOnScreen);
    return () => document.removeEventListener("mouseup", closeByClickOnScreen);
  }, [isSignInPopupOpen, isSignUpPopupOpen, isInfoPopupOpen]);

  return (
    <div className={`app ${homePage ? "app_theme_dark" : ""}`}>
      <Navigation
        loggedIn={loggedIn}
        onClose={closeAllPopups}
        handleLoggedUserClick={handleLoggedOutState}
        handleNotLoggedUserClick={openLoginPopup}
        onMobilePopupClickClose={handleMobilePopupClickClose}
        onMobilePopupClickOpen={handleMobilePopupClickOpen}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Main
              onClick={handleSearchResultClick}
              isOpen={isSearchResultOpen}
            />
          }
        />
        <Route path="/saved-news" element={<SavedNews loggedIn={loggedIn} />} />
      </Routes>
      <About />
      <PopupWithForm
        loggedIn={loggedIn}
        onOpen={openRegisterPopup}
        submitHandler={handleSingInSubmit}
        isOpen={isSignInPopupOpen}
        onClose={closeAllPopups}
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
        onInfoPopupClick={handleInfoPopupClick}
        onSignInPopupClick={handleFormClick}
        submitHandler={handleInfoPopupClick}
        isOpen={isSignUpPopupOpen}
        onOpen={openLoginPopup}
        onClose={closeAllPopups}
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
        onClose={closeAllPopups}
        handleNotLoggedUserClick={openLoginPopup}
      />
      <MobilePopup
        name="mobile"
        onSignInPopupClick={handleFormClick}
        isOpenMobile={isMobilePopupOpen}
        onClose={closeAllPopups}
      />
      <Footer />
    </div>
  );
}

export default App;
