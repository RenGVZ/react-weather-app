import React, { Component } from 'react';
import '../styles/app.css';
import SearchBar from './search_bar';
import WeatherBox from './weather_box';

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
    console.log(this.state.selectedLocation)
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
