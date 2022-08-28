/* eslint-disable react/prop-types */
import React from "react";
import NewsCardList from "../NewsCardList/NewsCardList";
import NewsCard from "../NewsCard/NewsCard";
import "./SearchResults.css";

function SearchResults({ articles, loggedIn, onCardDelete, onCardSave }) {
  const [counter, setCounter] = React.useState(3);
  const [currentArticles, setCurrentArticles] = React.useState([]);
  const [isHidden, setIsHidden] = React.useState(false);
  React.useEffect(() => {
    setCurrentArticles(articles.slice(0, counter));
  }, [counter, articles]);
  React.useEffect(() => {
    counter >= articles.length && setIsHidden(true);
  }, [counter, articles.length]);
  return (
    <section className="search-results">
      <h2 className="search-results__title">Search results</h2>
      <div className="search-results__overview">
        <NewsCardList articles={articles}>
          {currentArticles.map((item, index) => {
            return (
              <NewsCard
                key={index}
                card={item}
                loggedIn={loggedIn}
                onCardDelete={onCardDelete}
                onCardSave={onCardSave}
              />
            );
          })}
        </NewsCardList>
      </div>
      <button
        onClick={() => setCounter(counter + 3)}
        type="button"
        className={`search-results__button ${
          isHidden && "search-results__button_hidden"
        }`}
      >
        Show more
      </button>
    </section>
  );
}

export default SearchResults;
