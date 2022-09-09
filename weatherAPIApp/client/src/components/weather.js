//THIS IS FRONT END
//students.js is where you are creating the information that will be displayed in the app.js page
//in order to see the server & client on localhost, it has to be called npm start in the folder
import { useState, useEffect } from "react";

const Weather = () => {
  const [weather, setWeather] = useState(null);

  //anonymous function to FETCH data
  //URL comes from the API you are trying to access information from
  //response is what you are trying to get from API
  //data is the information you received from API
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
    return <div>loading...</div>;
  } else {

    //props comes from Line 3 on client -->components --> students.js
    return (
      <div className="Container">
        <h2>The weather in {weather.name} is currently:</h2>

        <img src={'http://openweathermap.org/img/wn/04d@2x.png'} alt="broken clouds" />
        <p><b>City:</b> {weather.name}</p>
        <p><b>Description: </b> {weather.weather[0].description}</p>
        <p><b>Temperature: </b> {weather.main.temp}</p>
          <p>Feels Like: {weather.main.feels_like}</p>
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