import React from 'react';
import '../styles/search_bar.scss'

function SearchBar() {
  return (
    <div className="form-group">
      <input type="text" className="form-input" id='location' placeholder="Enter a location"/>
      <label htmlFor="location" className="form-label">Location</label>
      <button className="btn">Go</button>
    </div>
  )
}

export default SearchBar;
