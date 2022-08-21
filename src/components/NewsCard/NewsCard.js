/* eslint-disable no-shadow */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from "react";
import { useLocation } from "react-router-dom";
import "./NewsCard.css";

function NewsCard() {
  const [isActive, setIsActive] = React.useState(false);
  const location = useLocation();
  const savedNewsPageLocation = location.pathname === "/saved-news";
  function handleActiveButton() {
    setIsActive((isActive) => !isActive);
  }
  return (
    <article className="card">
      <div className="card__image">
        <button
          type="button"
          className={`card__keyword ${
            !savedNewsPageLocation && "card__keyword_hidden"
          }`}
        >
          Nature
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
      <p className="card__date">November 4, 2020</p>
      <h3 className="card__title">
        Everyone Needs a Special &apos;Sit Spot&apos; in Nature
      </h3>
      <p className="card__text">
        Ever since I read Richard Louv&apos;s influential book, &apos;Last Child
        in the Woods,&apos; the idea of having a special &apos;sit spot&apos;
        has stuck with me. This advice, which Louv attributes to nature educator
        Jon Young, is for both adults and children to find...
      </p>
      <p className="card__source">TREEHUGGER</p>
    </article>
  );
}

export default NewsCard;
