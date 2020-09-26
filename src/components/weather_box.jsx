import React from 'react';

const WeatherBox = ({weather}) => {
  return (
    <div className="weather-box">
    {(typeof weather.main != 'undefined') ? (
      <div>
        <h1>{weather.sys.country}</h1>
          <ul>
            {/* <li>{country}</li> */}
          </ul>
      </div>
    ) : (null)}
    </div>
  )
}

export default WeatherBox;