//This is the BACKEND 
//This is where the data will be connected.
//get rid of bracket

import express from "express";
import cors from "cors";
//import fetch from "node-fetch";

//import { config } from "dotenv";
//config();

//console.log(`Your API Key is ${process.env.API_KEY}`);

const app = express();
const PORT = 8001;

//CONFIGURE MIDDLEWARE
app.use(cors());

//ROUTE for index
app.get('/', (req, res) => {
  res.json('this is the backend')
});

//

//harcode data
//usually this data will come from api or database
app.get('/api/weather', (req, res) => {
  const WEATHER = [
    {
      "coord": {
          "lon": -0.13,
          "lat": 51.51
      },
      "weather": 
          {
              "id": 300,
              "main": "Drizzle",
              "description": "light intensity drizzle",
              "icon": "09d"
          },
      "base": "stations",
      "main": {
          "temp": 280.32,
          "pressure": 1012,
          "humidity": 81,
          "temp_min": 279.15,
          "temp_max": 281.15
      },
      "visibility": 10000,
      "wind": {
          "speed": 4.1,
          "deg": 80
      },
      "clouds": {
          "all": 90
      },
      "dt": 1485789600,
      "sys": {
          "type": 1,
          "id": 5091,
          "message": 0.0103,
          "country": "GB",
          "sunrise": 1485762037,
          "sunset": 1485794875
      },
      "id": 2643743,
      "name": "London",
      "cod": 200
  }
  ]
  res.json(WEATHER);
});

// const URL = 'https://api.openweathermap.org/data/3.0';
// app.get('api/weathers', (req, res)=>{
//   fetch(URL)
//   .then((response) => response.json())
//   .then((data) => {
//     res.send(data);
//   });
// })

app.listen(PORT, () => console.log(`Back-end server is running on port: ${PORT}.`));
