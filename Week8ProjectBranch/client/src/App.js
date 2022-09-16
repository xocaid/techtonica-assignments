//FRONTEND
import './App.css';
// import QuizQs from "./components/quizInitial";
import QuizActual from "./components/quizActual";

function App() {
  return (
    <div className="App">
      <h1>Quiz App</h1>
      <p>Welcome to this mini quiz!</p>
      {/* <QuizQs /> */}
      <QuizActual />
    </div>
  );
}

export default App;
