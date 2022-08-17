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
import CurrentUserContext from "../../contexts/CurrentUserContext";

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

  function closeAllPopups() {
    setIsMobilePopupOpen(false);
    setIsSignInPopupOpen(false);
    setIsSignUpPopupOpen(false);
  }

  function handleLoggedInClick() {
    console.log("zashli!!!")
    setLoggedIn(true);
  }

  function handleLoggedOutState() {
    setLoggedIn(false);
    console.log("vishli:(((")
  }

  function handleMobilePopupClickOpen() {
    closeAllPopups();
    setIsMobilePopupOpen(true);
  }

  function handleMobilePopupClickClose() {
    closeAllPopups();
    setIsMobilePopupOpen(false);
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
    <div className={`app ${homePage ? "app_theme_dark" : ""}`}>
      <Navigation
        name="Elise"
        loggedIn={loggedIn}
        onLoggedInClick={() => handleLoggedInClick()}
        onLoggedOut={() => handleLoggedOutState()}
        onClose={() => closeAllPopups()}
        onMobilePopupClickClose={() => handleMobilePopupClickClose()}
        onMobilePopupClickOpen={() => handleMobilePopupClickOpen()}
        onSignInPopupClick={() => handleSignInClick()}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Main
              onClick={() => handleSearchResultClick}
              isOpen={isSearchResultOpen}
            />
          }
        />
        <Route path="/saved-news" element={<SavedNews loggedIn={loggedIn} />} />
      </Routes>
      <About />
      <PopupWithForm
      loggedIn={loggedIn}
        onLoggedInClick={() => handleLoggedInClick()}
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
      <MobilePopup
        name="mobile"
        onSignInPopupClick={() => handleSignInClick()}
        isOpenMobile={isMobilePopupOpen}
        onClose={() => closeAllPopups()}
      />
      <Footer />
    </div>
  );
}

export default App;
