import React from "react";
import "./NewsCard.css";
// import Trash from "../../images/Trash.svg";

function NewsCard() {
  return (
    <div className="card">
      <div className="card__image">
        <div className="card__keyword">Nature</div>
        <div className="card__trash-button" />
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
    </div>
  );
}

export default NewsCard;
