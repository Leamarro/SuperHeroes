import React, {useState} from 'react';

function SearchBar(props) {
const {handleChange, searchText} = props;

  return (
    <div>
        <nav class="navbar sticky-top navbar-dark bg-dark">
  <a class="navbar-brand" href="#!">Super-Hero</a>
  <input
        class="form-control mr-sm-2"
        id="search-bar"
        type="search"
        placeholder="Hunt superheroes here..."
        value={searchText}
        onChange={handleChange}
      />
</nav>
    </div>
  );
}

export default SearchBar;