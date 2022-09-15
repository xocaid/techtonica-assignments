import { useState } from "react";

const QuestionCard = ({ question }) => {
  //calls it directly

  return (
    <div className={"question-section"}>
      
      <div className='question-text'>
        {question.question}
      </div>

      <div className='answer-section'>
        {
          question.incorrect_answers.map(
            (option, index) => {
              return (
                <button key={index} value={option}></button>
              )
            }
          )
        }
      </div>
    </div>
  );
};

export default QuestionCard;