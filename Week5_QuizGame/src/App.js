import './styles.css';
import React from "react";
import CardInfo from "./CardInfo";
import Count from "./Count";

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

      <div className="flashcards">
        <CardInfo frontCard="Command Line: How do I move into a directory?" backCard="cd" />
        <CardInfo frontCard="Command Line: How do go up a directory level?" backCard="cd .." />
        <CardInfo frontCard="Command Line: How do I go to my root directory?" backCard=" cd~ OR cd/" />
        <CardInfo frontCard="Command Line: How do I make a new directory?" backCard="mkdir" />
        <CardInfo frontCard="Command Line: How do I make a new file?" backCard="touch" />
        <CardInfo frontCard="Command Line: How do I check what version of a program I am using?" backCard="--version" />
      </div>
    </div>
  );
}

export default App;
