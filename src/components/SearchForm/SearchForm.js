import React  from "react";
import "./SearchForm.css";

function SearchForm({onSearch}) {
  const [keyword, setKeyword] = React.useState("");

  function handleSubmit(evt) {
    evt.preventDefault();
    onSearch(keyword);
    setKeyword("");
  }

  function handleChange(evt) {
    setKeyword(evt.target.value);
  }

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        className="search-form__input"
        type="search"
        value={keyword}
        placeholder="Enter topic"
        onChange={handleChange}
      />
      <button type="submit"  className="search-form__button">
        Search
      </button>
    </form>
  );
}

export default SearchForm;
