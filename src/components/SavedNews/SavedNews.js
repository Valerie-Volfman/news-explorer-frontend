/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
import React from "react";
import { useNavigate } from "react-router-dom";
import "./SavedNews.css";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCardList from "../NewsCardList/NewsCardList";

function SavedNews({ loggedIn }) {
  const navigate = useNavigate();
  React.useEffect(() => {
    !loggedIn && navigate("/");
  }, [loggedIn, navigate]);
  return (
    <div className="saved-news">
      <SavedNewsHeader />
      <NewsCardList loggedIn={loggedIn} />
    </div>
  );
}

export default SavedNews;
