import React from "react";

const InvQuizCard = ({ question, onAnswerClicked, questionNum, isAnswerCorrect, answerChosen }) => {
  //prop names in parent are only used in the child component, the values assigned to the props come from the parent

  //Decode Entities
  //Prevents the HTML Character Entities from appearing on the text
  //HTML Entities display certain characters like: ', <, >, &, cent, copyright, etc.
  function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }

  return (
    <div className={"question-section"}>
      <div className='question-text'>
        {decodeHtml(question.question)}
      </div>

      <div className='answer-section'>
        {/* question.shuffledAnswer --> Calls shuffledAnswers created in the parent component */}
        {
          question.shuffledAnswers.map(
            (answer, index) => {
              // isSelected --> Loops through each possible answer(button) & checks if button has been clicked
              //It has to be true/false but not null
              const isSelected = (answer === answerChosen);
              let style = {};
              //if isSelected is true meaning it was clicked regardless of the (in)correct answer was clicked THEN do a comparison
              //isAnswerCorrect provides the value at index, doesn't care if its true/false
              //If true then A, if false then B
              if (isSelected) {
                style.backgroundColor = (isAnswerCorrect ? 'green' : 'red');
              };
              return (
                <button key={index}
                  //Disable answer button if isAnswerCorrect is true/false not null
                  disabled={isAnswerCorrect !== null}
                  style={style}
                  value={decodeHtml(answer)}
                  //When onClick is clicked, onAnswerClicked fx is triggered & the arguments are passed to the parent
                  onClick={() => onAnswerClicked(question, answer, questionNum)}>{decodeHtml(answer)}
                </button>
              )
            }
          )
        }
      </div>
    </div>
  );
};

export default InvQuizCard;