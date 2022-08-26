/* eslint-disable react/prop-types */
import React from "react";
import "./NewsCardList.css";
import "../NewsCard/NewsCard.css";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList({articles}) {
  console.log(articles)
  console.log(typeof(articles))
  
  return (
    <div className="news-list">
      {articles.map((item, index) => {
      return <NewsCard key={index} item={item}/>
    })}
    </div>
    
  );
}

export default NewsCardList;
