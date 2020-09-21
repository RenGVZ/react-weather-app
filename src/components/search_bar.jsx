import React from 'react';
import '../styles/search_bar.scss'

function SearchBar(props) {
  const handleChange = (e) => {
    props.setCity(e.target.value)
  }
  return (
    <div className="form-group">
      <input
        onChange={handleChange} 
        type="text" 
        className="form-input" 
        id='location' 
        placeholder="Enter a location"/>
      <label htmlFor="location" className="form-label">Location</label>
      {/* <button className="btn" submit={props.getWeather(props.city)}>Go</button> */}
    </div>
  )
}

export default SearchBar;
