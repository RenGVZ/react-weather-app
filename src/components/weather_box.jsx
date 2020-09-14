import React from 'react';

const WeatherBox = (props) => {
  const info = Object.values(props.cityInfo)
  const next = info[0]
  return (
    <div className="weather-box">
      <div className="content">
        {console.log(Object.values(info))}
        {/* <h1>{console.log(props.cityInfo[3])}</h1> */}
      </div>
    </div>
  )
}

export default WeatherBox;