//This is the page the client sees
import './App.css';
import Weather from './components/weather';


//Student school are calling data from client -->components --> students.js
function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Weather city={"New York"}/>

    </div>
  );
}

export default App;