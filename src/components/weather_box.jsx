import React from 'react';
import '../styles/weather_box.scss'

const WeatherBox = ({weather, forcast}) => {
  const displayDate = (d) => {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const day = days[d.getDay()];
    const month = months[d.getMonth()];
    const date = d.getDate();

    return `${day}, ${month} ${date}`
  }

  return (
    <div className="weather-box">
    {(typeof weather.main != 'undefined' && forcast !== '') ? (
      <div>
        <div>
          <h1 className="city">{weather.name},</h1>
          <h2 className="country">{weather.sys.country}</h2>
          <h3 className="date">{displayDate(new Date())}</h3>
        </div>

        <div className="todays-weather">
          <h1>Today</h1>
          <h1>{Math.round(weather.main.temp)}&deg;F</h1>
        </div>

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