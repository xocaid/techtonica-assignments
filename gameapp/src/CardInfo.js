import './styles.css';
import React, { useState } from "react";

export default function CardInfo({ frontCard, backCard }) {
  const [showAnswer, setShowAnswer] = useState(true);

  function Toggles() {
    setShowAnswer((oldState) => !oldState);
  }
  const text = showAnswer ? frontCard : backCard;
  const otherSide = showAnswer ? "front" : "back";

  const questionList = `flashcard ${otherSide}`;

  return (
    <div className={questionList} onClick={Toggles}>
      {text}
    </div>
  );
}