//FRONTEND
import './App.css';
// import QuizFirstTry from "./components/QuizFirstTry";
import QuizApi from "./components/QuizApi";

function App() {
  return (
    <div className="App">
      <h1>Quiz App</h1>
      <p>Welcome to this mini quiz!</p>
      {/* <QuizFirstTry /> */}
      <QuizApi />
    </div>
  );
}

export default App;
