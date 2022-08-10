import React from "react";
import "./SavedNewsHeader.css";

function SavedNewsHeader() {
  return (
    <div className="header-news">
      <p className="header-news__name">Saved articles</p>
      <h2 className="header-news__info">Elise, you have 5 saved articles</h2>
      <p className="header-news__keywords">
        By keywords: <b className="header-news__keywords_bold">Nature, Yellowstone, and 2 other</b>
      </p>
    </div>
  );
}

export default SavedNewsHeader;
