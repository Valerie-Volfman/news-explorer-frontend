/* eslint-disable react/prop-types */
import React from "react";
import SearchResults from "../SearchResults/SearchResults";
import Header from "../Header/Header";
import Preloader from "../Preloader/Preloader";
import NothingFound from "../NothingFound/NothingFound";

function Main() {
  return (
    <>
      <Header />
      <Preloader />
      <SearchResults />
      <NothingFound />
    </>
  );
}

export default Main;
