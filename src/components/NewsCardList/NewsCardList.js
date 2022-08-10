import React from "react";
import "./NewsCardList.css";
import "../NewsCard/NewsCard.css";
import image2 from "../../images/image_02.jpg";
import image3 from "../../images/image_03.jpg";
import image4 from "../../images/image_04.png";
import image5 from "../../images/image_05.png";

function NewsCardList() {
  return (
    <div className="news-list">
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
          Ever since I read Richard Louv&apos;s influential book, &apos;Last
          Child in the Woods,&apos; the idea of having a special &apos;sit
          spot&apos; has stuck with me. This advice, which Louv attributes to
          nature educator Jon Young, is for both adults and children to find...
        </p>
        <p className="card__source">TREEHUGGER</p>
      </div>
      <div className="card">
        <div
          style={{ backgroundImage: `url(${image2})` }}
          className="card__image"
        >
          <div className="card__keyword">Nature</div>
          <div className="card__trash-button" />
        </div>
        <p className="card__date">February 19, 2019</p>
        <h3 className="card__title">Nature makes you better</h3>
        <p className="card__text">
          We all know how good nature can make us feel. We have known it for
          millennia: the sound of the ocean, the scents of a forest, the way
          dappled sunlight dances through leaves.
        </p>
        <p className="card__source">NATIONAL GEOGRAPHIC</p>
      </div>
      <div className="card">
        <div
          style={{ backgroundImage: `url(${image3})` }}
          className="card__image"
        >
          <div className="card__keyword">Yellowstone</div>
          <div className="card__trash-button" />
        </div>
        <p className="card__date">October 19, 2020</p>
        <h3 className="card__title">
          Nostalgic Photos of Tourists in U.S. National Parks
        </h3>
        <p className="card__text">
          Uri Løvevild Golman and Helle Løvevild Golman are National Geographic
          Explorers and conservation photographers who just completed a project
          and book they call their love letter to...
        </p>
        <p className="card__source">NATIONAL GEOGRAPHIC</p>
      </div>
      <div className="card">
        <div
          style={{ backgroundImage: `url(${image4})` }}
          className="card__image"
        >
          <div className="card__keyword">Parks</div>
          <div className="card__trash-button" />
        </div>
        <p className="card__date">November 4, 2020</p>
        <h3 className="card__title">Grand Teton Renews Historic Crest Trail</h3>
        <p className="card__text">
          “The linking together of the Cascade and Death Canyon trails, at their
          heads, took place on October 1, 1933, and marked the first step in the
          realization of a plan whereby the hiker will be...
        </p>
        <p className="card__source">NATIONAL PARKS TRAVELER</p>
      </div>
      <div className="card">
        <div
          style={{ backgroundImage: `url(${image5})` }}
          className="card__image"
        >
          <div className="card__keyword">Photography</div>
          <div className="card__trash-button" />
        </div>
        <p className="card__date">March 16, 2020</p>
        <h3 className="card__title">
          Scientists Don&apos;t Know Why Polaris Is So Weird{" "}
        </h3>
        <p className="card__text">
          Humans have long relied on the starry sky to push into new frontiers,
          sail to the very edge of the world and find their way back home again.
          Even animals look to the stars to guide them.
        </p>
        <p className="card__source">TREEHUGGER</p>
      </div>
    </div>
  );
}

export default NewsCardList;
