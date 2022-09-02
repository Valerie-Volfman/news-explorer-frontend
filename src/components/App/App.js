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
import Login from "../Login/Login";
import Register from "../Register/Register";

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
  const [signError, setSignError] = React.useState("");

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
    setSignError("");
    closeAllPopups();
    setIsSignUpPopupOpen(true);
  }
  function openLoginPopup() {
    setSignError("");
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
      .catch((err) => setSignError(err));
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
        <Login>
          <PopupWithForm
            isOpen={isSignInPopupOpen}
            onClose={closeAllPopups}
            onOpen={openRegisterPopup}
            name="sign-in"
            title="Sign in"
            linkText="Sign up"
            buttonText="Sign in"
            submitHandler={handleLogin}
            signError={signError}
          >
            <PopupInput title="Email" type="email" name="email" />
            <PopupInput title="Password" type="password" name="password" />
          </PopupWithForm>
        </Login>
        <Register>
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
            signError={signError}
          >
            <PopupInput title="Email" type="email" name="email" />
            <PopupInput title="Password" type="password" name="password" />
            <PopupInput title="Username" type="text" name="username" />
          </PopupWithForm>
        </Register>
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
