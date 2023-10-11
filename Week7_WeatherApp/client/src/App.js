//This is the page the client sees
import './App.css';
import Weather from './components/DefaultWeather';
import OaxWeat from './components/OaxacaWeather';
import Footer from './components/Footer';


//Student school are calling data from client -->components --> students.js
function App() {
  return (
    <div className="App">
      <div className='Title'>
        Weather App
      </div>
      For your most up to date weather!
      <div className='WeatherComp'>
        <Weather />
        <OaxWeat />
      </div>
      <Footer/>
    </div>
  );
}

export default App;