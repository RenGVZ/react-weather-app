import React, { useState } from 'react';
import '../styles/app.css';
import SearchBar from './search_bar';
import WeatherBox from './weather_box';
import key from '../key';

const App = () => {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [forcast, setForcast] = useState('');

  const getCurrentWeather = (e) => {
    e.preventDefault();
    let weatherCall = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=imperial&appid=${key}`, {mode: 'cors'});
    let forcastCall = fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${query}&units=imperial&appid=${key}`);
  
    Promise.all([weatherCall, forcastCall])
      .then(values => Promise.all(values.map(value => value.json())))
      .then(finalVals => {
        let weatherResp = finalVals[0];
        let forcastResp = finalVals[1];
        setWeather(weatherResp);
        setForcast(forcastResp);
        setQuery('');
        console.log(weatherResp, `${weatherResp}`);
        console.log(forcastResp, `${forcastResp}`);
    });
  }

    return (
      <div className="app">
        <SearchBar 
          getCurrentWeather={getCurrentWeather}
          query={query}
          setQuery={setQuery}
        />
        <WeatherBox
          weather={weather}
          forcast={forcast}
        />
      </div>
    );
}

export default App;
