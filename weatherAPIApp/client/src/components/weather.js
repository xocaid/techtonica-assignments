//students.js is where you are creating the information that will be displayed in the app.js page
//in order to see the server & client on localhost, it has to be called npm start in the folder
import { useState, useEffect } from "react";

const Weather = (props) => {

  const [weather, setWeather] = useState([]);

  //anonymous function to FETCH data
  //URL comes from the API you are trying to access information from
  //response is what you are trying to get from API
  //data is the information you received from API
  const loadData = () => {
    fetch('http://localhost:8001/api/weather')
      .then((response) => response.json())
      .then(data => {
        console.log(data);
        setWeather(data);
      })
  }

  //useEffect, as soon as the page render bring the promise
  useEffect(() => {
    loadData();
  }, []);

  //props comes from Line 3 on client -->components --> students.js
  return (
    <div className="Container">
      <h1>The weather in {props.city} is currently:</h1>
      {weather.map((weather, index) => {
        return (<div key={index}>
          <p>City: {props.city}</p>
          <p>Description: Need to add information</p>
          <p>Temperature: {weather.current.temp}</p>
          <p>Feels Like: Need to add information</p>
          <p>Max Temp: Need to add information</p>
          <p>Min Temp: Need too add information</p>
          <p>Humidity: {weather.current.humidity}</p>
          <p>Sunrise: {weather.current.sunrise}</p>
          <p>Sunset: {weather.current.sunset}</p>
        </div>)
      })}
    </div>

  )
}

export default Weather;