import axios from 'axios';
import React, { useState } from 'react';
import SearchBar from './Components/SearchBar';
import SearchResults from './Components/SearchResults';

function App() {
  const [searchText, setSearchText] = useState('');
  const [superheroData, setSuperheroData] = useState([]);

  async function searchSuperHeroes () {
    const response = await axios.get(`https://www.superheroapi.com/api.php/10224068478731608/search/${searchText}`);
    const data = await response.data;
    console.log("searchSuperHeroes -> data", data)

    setSuperheroData(data.results);
  }

  function handleChange (e) {
    const searchTerm = e.target.value;
    
    setSearchText(searchTerm);
    if (searchTerm.length === 0) {
      setSuperheroData([]);
    }
    if (searchTerm.length > 3) {
      searchSuperHeroes();
    }
  }

  return (
    <div className="App">
      <div className="main">
        <SearchBar searchText={searchText} handleChange={handleChange} />
        <SearchResults superheroData={superheroData} />
      </div>
    </div>
  );
}

export default App;