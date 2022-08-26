/* eslint-disable react/prop-types */
import React from "react";
import NewsCardList from "../NewsCardList/NewsCardList";
import "./SearchResults.css";

function SearchResults({ articles }) {
  return (
    <section className="search-results">
      <h2 className="search-results__title">Search results</h2>
      <div className="search-results__overview">
        <NewsCardList articles={articles} />
      </div>
      <button type="button" className="search-results__button">
        Show more
      </button>
    </section>
  );
}

export default SearchResults;
