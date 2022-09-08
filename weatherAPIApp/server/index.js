//This is the BACKEND 
//This is where the data will be connected.

import express from "express";
import cors from "cors";

const app = express();
const PORT = 8001;

//CONFIGURE MIDDLEWARE
app.use(cors());

//ROUTE for index
app.get('/', (req, res) => {
  res.json('This is the backend.')
});

//harcode data
//usually this data will come from api or database
app.get('/api/weather', (req, res) => {
  const WEATHER = [
    {
      "lat": 39.31,
      "lon": -74.5,
      "timezone": "America/New_York",
      "timezone_offset": -18000,
      "current": {
        "dt": 1646318698,
        "sunrise": 1646306882,
        "sunset": 1646347929,
        "temp": 282.21,
        "feels_like": 278.41,
        "pressure": 1014,
        "humidity": 65,
        "dew_point": 275.99,
        "uvi": 2.55,
        "clouds": 40,
        "visibility": 10000,
        "wind_speed": 8.75,
        "wind_deg": 360,
        "wind_gust": 13.89,
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
          }]
      }
    }
  ];

  res.json(WEATHER);
});

app.listen(PORT, () => console.log(`Back-end server is running on port: ${PORT}.`));
