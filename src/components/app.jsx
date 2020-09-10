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

  getLocation = () => {
    console.log('jet')
  }

  render() {
    return (
      <div className="app">
        <SearchBar />
        <WeatherBox />
      </div>
    );
  }
}

export default App;
