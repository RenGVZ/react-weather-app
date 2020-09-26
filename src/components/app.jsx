import React, { useState } from 'react';
import '../styles/app.css';
import SearchBar from './search_bar';
import WeatherBox from './weather_box';
import key from '../key';

const App = () => {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const getWeather = e => {
    e.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=imperial&appid=${key}`, {mode: 'cors'})
    .then(result => result.json())
    .then(result => {
      setWeather(result);
      setQuery('');
      console.log(result);
    })
  }

    return (
      <div className="app">
        <SearchBar 
          getWeather={getWeather}
          query={query}
          setQuery={setQuery}
        />
        <WeatherBox
          weather={weather}
        />
      </div>
    );
}

export default App;
