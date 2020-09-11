import React from 'react';
import '../styles/search_bar.scss'

function SearchBar() {
  return (
    <div className="form-group">
        <span>Location</span>
        <input className="form-field" type="text" placeholder="Type a city..."/>
        <button>Click</button>
    </div>
  )
}

export default SearchBar;
