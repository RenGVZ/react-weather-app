import React from 'react';
import '../styles/weather_box.css'

const WeatherBox = ({weather, forcast}) => {
  const displayDate = (d) => {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const day = days[d.getDay()];
    const month = months[d.getMonth()];
    const date = d.getDate();
    const year = d.getFullYear();

    return `${day} ${month}, ${date} ${year}`
  }

  return (
    <div className="weather-box">
    {(typeof weather.main != 'undefined' && forcast !== '') ? (
      <div>

      <h1 className="city">{weather.name},</h1>
      <h2 className="country">{weather.sys.country}</h2>
        <h3>{displayDate(new Date())}</h3>
        
        <div className="forcast-box">
          {forcast.list.map(forcast => (
            <div className="forcast-items">
              <p>Time: {forcast.dt_txt}</p>
              <p>Temp: {Math.round(forcast.main.temp)}&deg;F</p>
              <p>{forcast.weather[0].description}</p>
            </div>
          )).slice(0, 4)}
        </div>
      </div>
    ) : (null)}
    </div>
  )
}

export default WeatherBox;