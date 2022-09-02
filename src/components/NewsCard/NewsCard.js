import React from "react";
import { useLocation } from "react-router-dom";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./NewsCard.css";

function NewsCard({
  card,
  loggedIn,
  onCardSave,
  onCardDelete,
  onOpenRegisterPopup,
}) {
  const currentUser = React.useContext(CurrentUserContext);
  const [isActive, setIsActive] = React.useState(false);
  const location = useLocation();
  const savedNewsPageLocation = location.pathname === "/saved-news";
  function handleActiveButton() {
    if (loggedIn) {
      isActive ? onCardDelete(getCardId()) : onCardSave(card);
      setIsActive((isActive) => !isActive);
    } else {
      onOpenRegisterPopup();
    }
  }

  React.useEffect(() => {
    currentUser.articles &&
      currentUser.articles.some((item) => item.title === card.title) &&
      setIsActive(true);
  }, [currentUser, card.title]);
  function formatDate(date) {
    const dateArr = date.toString().slice(0, 10).split("-", 3);
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    dateArr[1] = monthNames[parseInt(dateArr[1]) - 1];
    return `${dateArr[1]} ${dateArr[2]}, ${dateArr[0]}`;
  }
  function getCardId() {
    const currentSavedCard = currentUser.articles.find(
      (item) => item.title === card.title
    );
    return currentSavedCard._id;
  }
  return (
    <article className="card">
      <div
        style={{
          backgroundImage: `url(${
            !savedNewsPageLocation ? card.urlToImage : card.image
          })`,
        }}
        className="card__image"
      >
        <button
          type="button"
          className={`card__keyword ${
            !savedNewsPageLocation && "card__keyword_hidden"
          }`}
        >
          {card.keyword}
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
            {savedNewsPageLocation ? (
              <span className="card__icon-hover">Remove from saved</span>
            ) : !loggedIn ? (
              <span className="card__icon-hover">Sign in to save article</span>
            ) : null}
          </button>
        ) : (
          <button
            onClick={() => onCardDelete(card._id)}
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
      <p className="card__date">
        {!savedNewsPageLocation
          ? formatDate(card.publishedAt)
          : formatDate(card.date)}
      </p>
      <h3 className="card__title">{card.title}</h3>
      <p className="card__text">
        {!savedNewsPageLocation ? card.description : card.text}
      </p>
      <p className="card__source">
        {!savedNewsPageLocation ? card.source.name : card.source}
      </p>
    </article>
  );
}

export default NewsCard;
