//This is the page the client sees
import './App.css';
import Weather from './components/weather';
import OaxWeat from './components/oaxweat';


//Student school are calling data from client -->components --> students.js
function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <h4>For your most up to date weather!</h4>
      <div className='LondonWeather'>
        <Weather />
      </div>
      <div className='OaxacaWeather'>
        <OaxWeat />
      </div>
    </div>
  );
}

export default App;