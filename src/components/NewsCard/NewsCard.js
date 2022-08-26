import React from "react";
import { useLocation } from "react-router-dom";
import "./NewsCard.css";

function NewsCard({ item }) {
  const [isActive, setIsActive] = React.useState(false);
  const location = useLocation();
  const savedNewsPageLocation = location.pathname === "/saved-news";
  function handleActiveButton() {
    setIsActive((isActive) => !isActive);
  }
  return (
    <article className="card">
      <div
      style={{ backgroundImage: `url(${item.urlToImage})` }}
       className="card__image">
        <button
          type="button"
          className={`card__keyword ${
            !savedNewsPageLocation && "card__keyword_hidden"
          }`}
        >
          {item.source.name}
        </button>

        {!savedNewsPageLocation ? (
          <button
            onClick={handleActiveButton}
            type="button"
            className={`card__icon ${
              !isActive
                ? "card__icon_button_flag"
                : "card__icon_button_flag_active"
            }`}
          >
            <span className="card__icon-hover">
              {savedNewsPageLocation
                ? "Remove from saved"
                : "Sign in to save article"}
            </span>
          </button>
        ) : (
          <button
            onClick={handleActiveButton}
            type="button"
            className="card__icon card__icon_button_trash"
          >
            <span className="card__icon-hover">
              {savedNewsPageLocation
                ? "Remove from saved"
                : "Sign in to save article"}
            </span>
          </button>
        )}
      </div>
      <p className="card__date">{item.publishedAt}</p>
      <h3 className="card__title">
        {item.title}
      </h3>
      <p className="card__text">
        {item.description}
      </p>
      <p className="card__source">{item.author}</p>
    </article>
  );
}

export default NewsCard;
