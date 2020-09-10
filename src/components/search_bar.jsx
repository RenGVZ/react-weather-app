import React from 'react';
import '../styles/search_bar.css'

function SearchBar() {
  return (
    <div className="form__group field">
      <input type="input" className="form__field" placeholder="Name" name="name" id='name' required />
      <label for="name" class="form__label">Name</label>
    </div>
  )
}

export default SearchBar;
