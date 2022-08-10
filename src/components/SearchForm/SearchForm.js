import React from "react";
import "./SearchForm.css";

function SearchForm() {
  return (
    <form className="search__form">
      <input
        className="search__input"
        defaultValue="Enter topic"
        type="search"
      />
      <button type="submit" className="search__button">
        Search
      </button>
    </form>
  );
}

export default SearchForm;
