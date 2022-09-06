import React from "react";
import "./SavedNewsHeader.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function SavedNewsHeader() {
  const currentUser = React.useContext(CurrentUserContext);
  const [keywords, setKeywords] = React.useState([]);
  React.useEffect(() => {
    const arr = [];
    currentUser.articles &&
      currentUser.articles.forEach((card) => {
        arr.unshift(card.keyword);
      });
    const newArr = new Set(arr);
    setKeywords(Array.from(newArr));
  }, [currentUser.articles]);
  return (
    <div className="header-news">
      <p className="header-news__name">Saved articles</p>
      <h2 className="header-news__info">{`${currentUser.name}, you have ${
        currentUser.articles && currentUser.articles.length
      } saved articles`}</h2>
      <p className="header-news__keywords">
        By keywords:{" "}
        <b className="header-news__keywords_bold">
          {keywords.length
            ? ` ${keywords[0]}${keywords.length > 1 ? ", " + keywords[1] : ""}${
                keywords.length > 3 ? `, and ${keywords.length - 2} other` : ""
              }`
            : null}
        </b>
      </p>
    </div>
  );
}

export default SavedNewsHeader;
