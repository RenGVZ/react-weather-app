import React from 'react';
import '../styles/search_bar.scss'

function SearchBar({setQuery, getWeather, query}) {
  return (
      <form className="form-group" action="submit" onSubmit={getWeather}>
        <input
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
          // onSubmit={getWeather}
          >Go
        </button>
      </form>
  )
}

export default SearchBar;
