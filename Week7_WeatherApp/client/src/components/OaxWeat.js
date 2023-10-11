//THIS IS FRONT END
//IMPORT useEffect to use, can be placed with useState
import { useState, useEffect } from "react";

const OaxWeat = () => {
  const [oaxWeat, setOaxWeat] = useState(null);

  //anonymous function to FETCH data
  //ROUTE is where the API data will diplayed
  //DATA will be loaded/stored in /api/weather
  const loadData = () => {
    fetch('http://localhost:8001/api/oaxweather')
      .then((response) => response.json())
      .then(
        (data) => {
          console.log(data);
          setOaxWeat(data);
        }
      );
  };

  //useEffect, as soon as the page render bring the promise
  useEffect(() => {
    loadData();
  }, []);
  if (!oaxWeat) {
    return <div>Loading...</div>;
  } else {

    return (
      <div className="Container1">
        <h2>The weather in {oaxWeat[0].name} is currently:</h2>

        <img src={'http://openweathermap.org/img/wn/03n@2x.png'} alt="cloudy" />
        <p><b>City:</b> {oaxWeat[0].name}</p>
        {/* <p><b>Description: </b> {oaxWeat[0].weather[0].description}</p>  */}
        <p><b>Temperature: </b> {oaxWeat[0].main.temp}</p>
        <p><b>Max Temp: </b> {oaxWeat[0].main.temp_max}</p>
        <p><b>Min Temp: </b> {oaxWeat[0].main.temp_min}</p>
        <p><b>Humidity: </b> {oaxWeat[0].main.humidity}</p>
        <p><b>Sunrise: </b> {oaxWeat[0].sys.sunrise}</p>
        <p><b>Sunset: </b> {oaxWeat[0].sys.sunset}</p>
      </div>
    )
  };
};

export default OaxWeat;