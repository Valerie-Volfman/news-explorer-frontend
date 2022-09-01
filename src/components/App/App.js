import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import Footer from "../Footer/Footer";
import PopupInput from "../PopupInput/PopupInput";
import InfoPopup from "../InfoPopup/InfoPopup";
import Navigation from "../Navigation/Navigation";
import api from "../../utils/NewsApi";
import {
  checkToken,
  register,
  authorize,
  getUserData,
  saveArticle,
  deleteArticle,
  getArticles,
} from "../../utils/MainApi";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function App() {
  const [isSignInPopupOpen, setIsSignInPopupOpen] = React.useState(false);
  const [isSignUpPopupOpen, setIsSignUpPopupOpen] = React.useState(false);
  const [isInfoOpen, setIsInfoOpen] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isSucceed, setIsSucceed] = React.useState(false);
  const [articles, setArticles] = React.useState([]);
  const location = useLocation();
  const homePage = location.pathname === "/";
  const [searchBlockIsOpen, setSearchBlockIsOpen] = React.useState(false);
  const [isLoad, setIsLoad] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [currentKeyword, setCurrentKeyword] = React.useState("");

  React.useEffect(() => {
    const token = localStorage.getItem("jwt");
    token &&
      checkToken(token)
        .then((res) => {
          setLoggedIn(true);
          setCurrentUser((currentUser) => ({
            ...currentUser,
            email: res.email,
          }));
        })
        .catch((err) => console.log(err));
  }, []);
  React.useEffect(() => {
    loggedIn &&
      getArticles()
        .then((res) => {
          setCurrentUser((currentUser) => ({ ...currentUser, articles: res }));
        })
        .catch((err) => console.log(err));
  }, [loggedIn]);
  React.useEffect(() => {
    loggedIn &&
      getUserData()
        .then((res) => {
          setCurrentUser((currentUser) => ({ ...currentUser, ...res }));
        })
        .catch((err) => {
          console.log(err);
        });
  }, [loggedIn]);

  function searchArticle(keyword) {
    setCurrentKeyword(keyword);
    setArticles([]);
    setIsLoad(true);
    setSearchBlockIsOpen(true);
    api
      .getArticles(keyword)
      .then((data) => {
        setIsLoad(false);
        setArticles(data.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function handleCardSave(card) {
    saveArticle(currentKeyword, card)
      .then((res) => {
        setCurrentUser((currentUser) => ({
          ...currentUser,
          articles: [...currentUser.articles, res],
        }));
      })
      .catch((err) => console.log(err));
  }
  function handleCardDelete(id) {
    deleteArticle(id)
      .then((res) => {
        const arr = currentUser.articles.filter((item) => item._id !== id);
        setCurrentUser((currentUser) => ({
          ...currentUser,
          articles: arr,
        }));
      })
      .catch((err) => console.log(err));
  }

  function closeAllPopups() {
    setIsSignInPopupOpen(false);
    setIsSignUpPopupOpen(false);
    setIsInfoOpen(false);
  }

  function handleMobilePopupClickClose() {
    closeAllPopups();
  }

  function openRegisterPopup() {
    closeAllPopups();
    setIsSignUpPopupOpen(true);
  }
  function openLoginPopup() {
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
    if (isSignInPopupOpen || isSignUpPopupOpen || isInfoOpen)
      document.addEventListener("keydown", closeByEscape);
    return () => document.removeEventListener("keydown", closeByEscape);
  }, [isSignInPopupOpen, isSignUpPopupOpen, isInfoOpen]);

  React.useEffect(() => {
    const closeByClickOnScreen = (e) => {
      if (e.target.matches(".popup")) {
          closeAllPopups();
        }
    };
    if (isSignInPopupOpen || isSignUpPopupOpen || isInfoOpen)
      document.addEventListener("mouseup", closeByClickOnScreen);
    return () => document.removeEventListener("mouseup", closeByClickOnScreen);
  }, [isSignInPopupOpen, isSignUpPopupOpen, isInfoOpen]);

  function handleLogin(data) {
    authorize(data)
      .then((res) => {
        if (res.token) {
          setIsSucceed(true);
          setLoggedIn(true);
          localStorage.setItem("jwt", res.token);
        }
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }

  function handleLoggedOut() {
    setLoggedIn(false);
    localStorage.removeItem("jwt");
    setCurrentUser({});
    setArticles([]);
  }

  function handleRegister(data) {
    closeAllPopups();
    register({
      email: data.email,
      password: data.password,
      name: data.username,
    })
      .then((res) => {
        setIsSucceed(true);
        closeAllPopups();
        setIsInfoOpen(true);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className={`app ${homePage ? "app_theme_dark" : ""}`}>
      <CurrentUserContext.Provider value={currentUser}>
        <Navigation
          loggedIn={loggedIn}
          onClose={closeAllPopups}
          handleLoggedUserClick={handleLoggedOut}
          handleNotLoggedUserClick={openLoginPopup}
          onMobilePopupClickClose={handleMobilePopupClickClose}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Main
                onOpenRegisterPopup={openRegisterPopup}
                isLoad={isLoad}
                onSearch={searchArticle}
                isOpen={searchBlockIsOpen}
                articles={articles}
                isSucceed={isSucceed}
                loggedIn={loggedIn}
                onCardDelete={handleCardDelete}
                onCardSave={handleCardSave}
              />
            }
          />
          <Route
            path="/saved-news"
            element={
              <SavedNews
                loggedIn={loggedIn}
                onCardDelete={handleCardDelete}
                onCardSave={handleCardSave}
              />
            }
          />
        </Routes>
        <PopupWithForm
          handleLogin={handleLogin}
          loggedIn={loggedIn}
          onOpen={openRegisterPopup}
          submitHandler={handleLogin}
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
            name="Email"
          />
          <PopupInput
            title="Password"
            id="input_type_password"
            type="password"
            placeholder="Enter password"
            name="Password"
          />
        </PopupWithForm>
        <PopupWithForm
          onSignInPopupClick={handleFormClick}
          submitHandler={handleRegister}
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
            name="Email"
          />
          <PopupInput
            title="Password"
            id="input_type_password"
            type="password"
            placeholder="Enter password"
            name="Password"
          />
          <PopupInput
            title="Username"
            id="input_type_username"
            type="text"
            placeholder="Enter your username"
            name="Username"
          />
        </PopupWithForm>
        <InfoPopup
          isOpen={isInfoOpen}
          onClose={closeAllPopups}
          handleNotLoggedUserClick={openLoginPopup}
        />
        <Footer />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
