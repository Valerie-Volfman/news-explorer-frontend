/* eslint-disable react/prop-types */
import React from "react";
import "./SavedNews.css";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCardList from "../NewsCardList/NewsCardList";

function SavedNews({loggedIn}) {
  return (
    <div className="saved-news">
      <SavedNewsHeader />
      <NewsCardList loggedIn={loggedIn} />
    </div>
  );
}

export default SavedNews;
