//THIS IS FRONT END
//IMPORT useEffect to use, can be placed with useState
import { useState, useEffect } from "react";
import WeatherStats from "./WeatherStats";

const OaxacaWeather = () => {
  const [OaxWeather, setOaxWeather] = useState(null);

  //anonymous function to FETCH data
  //ROUTE is where the API data will diplayed
  //DATA will be loaded/stored in /api/weather
  const loadData = () => {
    fetch('http://localhost:8001/api/OaxacaWeather')
      .then((response) => response.json())
      .then(
        (data) => {
          console.log(data);
          setOaxWeather(data);
        }
      );
  };

  //useEffect, as soon as the page render bring the promise
  useEffect(() => {
    loadData();
  }, []);
  if (!OaxWeather) {
    return <div>Loading...</div>;
  } else {

    return (
      <div className="Container1">
        <h2>The weather in {OaxWeather[0].name} is currently:</h2>

        <img src={'http://openweathermap.org/img/wn/03n@2x.png'} alt="cloudy" />
        <WeatherStats name={'City'} data={OaxWeather[0].name} />
        <WeatherStats name={'Description'} data={OaxWeather[0].weather.description} />
        <WeatherStats name={'Temperature'} data={OaxWeather[0].main.temp} />
        <WeatherStats name={'Feels Like'} data={OaxWeather[0].main.feels_like} />
        <WeatherStats name={'Max Temp'} data={OaxWeather[0].main.temp_max} />
        <WeatherStats name={'Min Temp'} data={OaxWeather[0].main.temp_min} />
        <WeatherStats name={'Humidity'} data={OaxWeather[0].main.humidity} />
        <WeatherStats name={'Sunrise'} data={OaxWeather[0].sys.sunrise} />
        <WeatherStats name={'Sunset'} data={OaxWeather[0].sys.sunse} />
      </div>
    )
  };
};

export default OaxacaWeather;