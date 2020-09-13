import React, { Component } from 'react';
import '../styles/app.css';
import SearchBar from './search_bar';
import WeatherBox from './weather_box';
import key from '../key';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLocation: null
    }
  }

  handleChange = (target) => {
    this.setState({ 
      selectedLocation: target.currentTarget.value
    })
  }

  getWeather = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.selectedLocation}&appid=${key}`, {mode: 'cors'})
    .then(res => res.json())
    .then(data => console.log(data))
  }

  render() {
    return (
      <div className="app">
        <SearchBar getWeather={this.getWeather} handleChange={this.handleChange} />
        <WeatherBox />
      </div>
    );
  }
}

export default App;
