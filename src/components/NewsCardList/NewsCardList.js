/* eslint-disable react/prop-types */
import React from "react";
import "./NewsCardList.css";
import "../NewsCard/NewsCard.css";

function NewsCardList({ children }) {
  return <div className="news-list">{children}</div>;
}

export default NewsCardList;
