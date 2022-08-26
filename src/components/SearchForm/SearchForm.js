import React  from "react";
import "./SearchForm.css";

function SearchForm({onSearch}) {
  const [name, isName] = React.useState(" ")

  function handleSubmit(evt) {
    onSearch(name)
    console.log(name)
    evt.preventDefault();
  }

  function handleClick(evt) {
    isName({name: evt.target.value})
  }

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        className="search-form__input"
        defaultValue="Enter topic"
        type="search"
        value={isName.value}
        onChange={handleClick}
      />
      <button type="submit"  className="search-form__button">
        Search
      </button>
    </form>
  );
}

export default SearchForm;
