# Weather App

## Description
The goal of this project was to create a simple full-stack weather application using React for the frontend and Express for the backend. The [OpenWeatherMap API](https://openweathermap.org/) was used to provide accurate weather data and to practice connecting to third party APIs, using API leys to access weather data and by parsing JSON data.

## Installation 
To get started with the project, follow these steps:
<br/>

1. Clone the repository to your local machine using the following command:
```
git clone git@github.com:xocaid/techtonica-assignments.git
```
2. Navigate to the project directory:
```
cd Week7_WeatherApp 
```
3. Run command to download dependencies for client & server folders:
```
npm install
```
4. Open app in the development mode, run command for client & server:
```
npm start
```
5. Open [http://localhost:8001](http://localhost:8001) to view it in your browser.

## API Key
You will need an OpenWeatherMap API key in order to run this project. The API Key format can be found in `.envexample` and will be used in the backend GET request. Make sure to include your `.env` in the `.gitignore` file.

## Project Requirements
- Essential weather information should display: city name, current weather icon, temperature, humidity, wind speed, etc.
- Show weather condition icons
- Ensure responsive design

## Future Development
- <b>Search Functionality:</b> Allow users to search for the desired city weather information.
- <b>Extended Forecasts:</b> Offer users 10-day or monthly forecasts to plan ahead.
- <b>Weather Widgets:</b> Automatically fill in the weather widgets as per weather data.
