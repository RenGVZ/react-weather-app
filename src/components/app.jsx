import React, { useState } from 'react';
import '../styles/app.css';
import SearchBar from './search_bar';
import WeatherBox from './weather_box';
import key from '../key';

const App = () => {
  const [weather, setWeather] = useState({});
  const [query, setQuery] = useState('');

  const getWeather = async (e) => {
    if (e.key === 'Enter') {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=imperial&appid=${key}`, {mode: 'cors'})
      const data = await res.json()
      console.log(data);
      setQuery('');
      setWeather(data);
    }
  }

  // const updateSearch = (e) => {
  //   setSearch(e.target.value);
  // }

  // const getSearch = (e) => {
  //   e.preventDefault();
  //   setQuery(search);
  //   setSearch('');
  // }

    return (
      <div className="app">
        <SearchBar 
          setQuery={setQuery}
          query={query}
          getWeather={getWeather}
        />
        <WeatherBox/>
      </div>
    );
}

export default App;
