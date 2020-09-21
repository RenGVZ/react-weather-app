import React, { useState } from 'react';
import '../styles/app.css';
import SearchBar from './search_bar';
import WeatherBox from './weather_box';
import key from '../key';

const App = () => {
  const [city, setCity] = useState({});

  // handleChange = (target) => {
  //   this.setState({ 
  //     selectedLocation: target.currentTarget.value
  //   })
  // }

  // handleCityInfo = (data) => {
  //   this.setState({
  //     cityInfo: data
  //   })
  // }

  const getWeather = (evt) => {
    // console.log(evt)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${evt}&appid=${key}`, {mode: 'cors'})
    .then(res => res.json())
    .then(data => {
      setCity(data)
      console.log(data)
    })
  }

    return (
      <div className="app">
        <SearchBar getWeather={getWeather} setCity={setCity} city={city}/>
        <h1>{}</h1>
        <WeatherBox/>
      </div>
    );
}

export default App;
