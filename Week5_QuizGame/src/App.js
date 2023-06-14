import './styles.css';
import React from "react";
import Count from "./Count";
import Flashcards from './flashcards';

function App() {
  return (
    <div className="App">
      <h1>Flascard Quiz</h1>
      <h3>Click on card to test your knowledge</h3>

      <div className="KeepCount">
        <h2>Your score</h2>
        <h2 className="correct">Correct</h2>
        <Count />
        <h2 className="incorrect">Incorrect</h2>
        <Count />
      </div>
      <Flashcards />
    </div>
  );
}

export default App;
