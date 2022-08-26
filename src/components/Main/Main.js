/* eslint-disable react/prop-types */
import React from "react";
import SearchResults from "../SearchResults/SearchResults";
import Header from "../Header/Header";
import Preloader from "../Preloader/Preloader";
import NothingFound from "../NothingFound/NothingFound";
function Main({ articles, onSearch, searchBlockIsOpen, isLoad }) {
  return (
    <>
      <Header onSearch={onSearch} />
      {isLoad ? <Preloader /> : ""}
      {!isLoad && searchBlockIsOpen ? <SearchResults articles={articles}/> : !searchBlockIsOpen && !articles && <NothingFound />
       }
    </>
  );
}

export default Main;
