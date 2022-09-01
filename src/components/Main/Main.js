/* eslint-disable react/prop-types */
import React from "react";
import SearchResults from "../SearchResults/SearchResults";
import Header from "../Header/Header";
import Preloader from "../Preloader/Preloader";
import NothingFound from "../NothingFound/NothingFound";
import About from "../About/About";
function Main({
  articles,
  onSearch,
  isLoad,
  isOpen,
  loggedIn,
  onCardDelete,
  onCardSave,
  onOpenRegisterPopup
}) {
  return (
    <>
      <Header onSearch={onSearch} />
      {isOpen ? (
        isLoad ? (
          <Preloader />
        ) : articles.length ? (
          <SearchResults
          onOpenRegisterPopup={onOpenRegisterPopup}
            articles={articles}
            loggedIn={loggedIn}
            onCardDelete={onCardDelete}
            onCardSave={onCardSave}
          />
        ) : (
          <NothingFound />
        )
      ) : null}
      <About />
    </>
  );
}

export default Main;
