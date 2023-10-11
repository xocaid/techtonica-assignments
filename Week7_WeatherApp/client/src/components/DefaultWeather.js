//THIS IS FRONT END
//IMPORT useEffect to use, can be placed with useState
import { useState, useEffect } from "react";
import WeatherStats from "./WeatherStats";

const DefaultWeather = () => {
  const [defaultWthr, SetDefaultWthr] = useState(null);

  //anonymous function to FETCH data
  //ROUTE is where the API data will diplayed
  //DATA will be loaded/stored in /api/defaultWthr
  const loadData = () => {
    fetch('http://localhost:8001/api/defaultWthr')
      .then((response) => response.json())
      .then(
        (data) => {
          console.log(data);
          SetDefaultWthr(data);
        }
      );
  };

  //useEffect, as soon as the page render bring the promise
  useEffect(() => {
    loadData();
  }, []);
  if (!defaultWthr) {
    return <div>Loading...</div>;
  } else {

    return (
      <div className="Container">
        <h2>The weather in {defaultWthr.name} is currently:</h2>
        <img src={'http://openweathermap.org/img/wn/04d@2x.png'} alt="broken clouds" />
        <WeatherStats name={'City'} data={defaultWthr.name} />
        <WeatherStats name={'Description'} data={defaultWthr.weather[0].description} />
        <WeatherStats name={'Temperature'} data={defaultWthr.main.temp} />
        <WeatherStats name={'Feels Like'} data={defaultWthr.main.feels_like} />
        <WeatherStats name={'Max Temp'} data={defaultWthr.main.temp_max} />
        <WeatherStats name={'Min Temp'} data={defaultWthr.main.temp_min} />
        <WeatherStats name={'Humidity'} data={defaultWthr.main.humidity} />
        <WeatherStats name={'Sunrise'} data={defaultWthr.sys.sunrise} />
        <WeatherStats name={'Sunset'} data={defaultWthr.sys.sunse} />
      </div>
    )
  };
};

export default DefaultWeather;