//THIS IS FRONT END
//IMPORT useEffect to use, can be placed with useState
import { useState, useEffect } from "react";

const Weather = () => {
  const [weather, setWeather] = useState(null);

  //anonymous function to FETCH data
  //ROUTE is where the API data will diplayed
  //DATA will be loaded/stored in /api/weather
  const loadData = () => {
    fetch('http://localhost:8001/api/weather')
      .then((response) => response.json())
      .then(
        (data) => {
          console.log(data);
          setWeather(data);
        }
      );
  };

  //useEffect, as soon as the page render bring the promise
  useEffect(() => {
    loadData();
  }, []);
  if (!weather) {
    return <div>Loading...</div>;
  } else {

    return (
      <div className="Container">
        <h2>The weather in {weather.name} is currently:</h2>

        <img src={'http://openweathermap.org/img/wn/04d@2x.png'} alt="broken clouds" />
        <p><b>City:</b> {weather.name}</p>
        <p><b>Description: </b> {weather.weather[0].description}</p>
        <p><b>Temperature: </b> {weather.main.temp}</p>
        <p><b>Feels Like: </b> {weather.main.feels_like}</p>
        <p><b>Max Temp: </b> {weather.main.temp_max}</p>
        <p><b>Min Temp: </b> {weather.main.temp_min}</p>
        <p><b>Humidity: </b> {weather.main.humidity}</p>
        <p><b>Sunrise: </b> {weather.sys.sunrise}</p>
        <p><b>Sunset: </b> {weather.sys.sunset}</p>
      </div>
    )
  };
};

export default Weather;