/* eslint-disable react/prop-types */
import React from "react";
import SearchResults from "../SearchResults/SearchResults";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";

function Main({ onSignInPopupClick }) {
  return (
    <>
      <Navigation onSignInPopupClick={onSignInPopupClick} />
      <Header />
      <SearchResults />
    </>
  );
}

export default Main;
