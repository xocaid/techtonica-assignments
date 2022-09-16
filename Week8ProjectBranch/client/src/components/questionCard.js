import { useState } from "react";

const QuestionCard = ({ question }) => {
  //calls it directly

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
        {/* Need to change number to 1-4, may need to add useState to start at 0 */}
       {/* <p>Question {question.question.length}</p>  */}
        {decodeHtml(question.question)}
      </div>

      <div className='answer-section'>
        {
          question.answerOptions.map(
            (option, index) => {
              return (
                <button key={index} value={option}>{option}</button>
              )
            }
          )
        }

      </div>
    </div>
  );
};

export default QuestionCard;