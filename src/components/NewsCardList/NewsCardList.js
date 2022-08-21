/* eslint-disable react/prop-types */
import React from "react";
import "./NewsCardList.css";
import "../NewsCard/NewsCard.css";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList() {
  return (
    <div className="news-list">
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
    </div>
  );
}

export default NewsCardList;
