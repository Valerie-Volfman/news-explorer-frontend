import React from "react";
import "./NothingFound.css";
import { ReactComponent as Nothing } from "../../images/not-found.svg";

function NothingFound() {
  return (
    <section className="nothing-found">
      <Nothing />
      <h2 className="nothing-found__title">Nothing found</h2>
      <p className="nothing-found__text">
        Sorry, but nothing matched your search terms.
      </p>
    </section>
  );
}

export default NothingFound;
