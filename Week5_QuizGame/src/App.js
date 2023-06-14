import './styles.css';
import React from "react";
import Score from './score';
import Flashcards from './flashcards';

function App() {
  return (
    <div className="App">
      <p><b>Flascard Quiz</b></p>
      <p>Click on card to test your knowledge</p>

      <Score />
      <Flashcards />
    </div>
  );
}

export default App;
