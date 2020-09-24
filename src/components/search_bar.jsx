import React from 'react';
import '../styles/search_bar.scss'

function SearchBar({setQuery, getWeather, query}) {
  return (
    <div className="form-group">
      <input
        onKeyPress={getWeather}
        value={query}
        onChange={e => setQuery(e.target.value)}
        type="text" 
        className="form-input" 
        id='location' 
        placeholder="Enter a location"/>
      <label htmlFor="location" className="form-label">Location</label>
      <button 
        className="btn"
        type="submit"
        // onSubmit={getSearch}
        >Go
      </button>
    </div>
  )
}

export default SearchBar;
