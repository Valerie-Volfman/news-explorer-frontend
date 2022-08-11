import React from "react";
import "./SavedNews.css";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCardList from "../NewsCardList/NewsCardList";
import NavigationWhiteTheme from "../NavigationWhiteTheme/NavigationWhiteTheme";

function SavedNews() {
  return (
    <div className="saved-news">
      <NavigationWhiteTheme />
      <SavedNewsHeader />
      <NewsCardList />
    </div>
  );
}

export default SavedNews;
