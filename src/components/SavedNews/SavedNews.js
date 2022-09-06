/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
import React from "react";
import { useNavigate } from "react-router-dom";
import "./SavedNews.css";
import NewsCard from "../NewsCard/NewsCard";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function SavedNews({ loggedIn, onCardDelete, onCardSave }) {
  const navigate = useNavigate();
  const currentUser = React.useContext(CurrentUserContext);
  React.useEffect(() => {
    !loggedIn && navigate("/");
  }, [loggedIn, navigate]);
  return (
    <div className="saved-news">
      <SavedNewsHeader />
      <div className="news-list saved-news-list">
        {currentUser.articles &&
          currentUser.articles.map((item) => (
            <NewsCard
              key={item._id}
              card={item}
              onCardDelete={onCardDelete}
              oncardSave={onCardSave}
            />
          ))}
      </div>
    </div>
  );
}

export default SavedNews;
