import React from 'react';
import '../styles/search_bar.scss'

function SearchBar(props) {
  return (
    <div className="form-group">
      <input onChange={e => props.handleChange(e)} type="text" className="form-input" id='location' placeholder="Enter a location"/>
      <label htmlFor="location" className="form-label">Location</label>
      <button className="btn" onClick={props.getWeather}>Go</button>
    </div>
  )
}

export default SearchBar;
