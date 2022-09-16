import { useState } from "react";

const QuestionCard = ({ question, setScore }) => {

  //ansOption is allowing us to change buttons to black, 
  //also when click on correct answer, it prints correct
  const [ansOption, setAnsOption] = useState(true);


  //question, replaces props  here and calls the data directly from data.results

  //Decode Entities
  //Prevents the HTML Character Entities from appearing on the text
  //HTML Entities display certain characters like: ', <, >, &, cent, copyright, etc.
  function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }


  const handleClick = (e) => {
    if (e.target.value === question.correct_answer)
      {
      setAnsOption(!ansOption);
      setScore(s => s+1)

    }else{
      e.target.style.backgroundColor = 'black';

    }
  }


return (
  <div className={"question-section"}>
    <div className='question-text'>
      {/* Need to change number to 1-4, may need to add useState to start at 0 */}
      {/* <p>Question {question.question.length}</p>  */}
      {decodeHtml(question.question)}
    </div>
{ansOption ? (
    <div className='answer-section'>
      {/* Calls information from the answerOptions created in the parent component.
        Answers need to be given an index as per React; option represents the answer option, 
        it is also added as the value */}
      {
        question.answerOptions.map(
          (answer, index) => {
            return (
              <button key={index} value={answer} onClick={handleClick}>{answer}</button>
            )
          }
        )
      }
    </div>):(<p>CORRECT</p>)
}
  </div>
);
};

export default QuestionCard;