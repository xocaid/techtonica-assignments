import { useState, useEffect } from "react";

const QuizFirstTry = () => {
  //This is to access the hardcode data from index.js
  const [quizInfo, setQuizInfo] = useState(0);

  //This is to apply to map function, so that it can populate the current question at position[x] in array
  //useState is at 0 because you want to start at the first question in the array
  const [currentQuestion, setCurrentQuestions] = useState(0);


  //To display track of score
  //Starts off false, to not display score, but the questions which  is wrapped in a tertiary if/else statement
  //It will be true once we reach the end of the questions, then it will display the question since it is wrapped in a tertiary if/else statement
  const [showScore, setShowScore] = useState(false);

  //To keep track of score
  const [score, setScore] = useState(0);

  //This function is an onClick event for the answer buttons, when you click an answer, it will move on to the next question
  //change the current question by one, create function
  //Need to add if/else statement, for when it reaches the end of array
  //setShowScore(true): when we reach the end of the question, it will show the score count

  //for isCorrect, only need if statement, no else because we want const nextQuestion to run

  const handleAnswerButtonClick = (isCorrect) => {
    if(isCorrect === true){
setScore(score +1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizInfo.length) {
      setCurrentQuestions(nextQuestion);
    } else {
setShowScore(true);
    }

  }

  const restartGame= () =>{
    setScore(0);
    setCurrentQuestions(0);
    setShowScore(false);
  }

  
  const loadData = () => {
    fetch('http://localhost:8080/api/hardcodequizinfo')
      .then((response) => response.json())
      .then(
        (data) => {
          console.log(data);

          setQuizInfo(data);
        }
      );
  };

  useEffect(() => {
    loadData();
  }, []);



  return (
    <div>
      <h3>This is a Quiz Info placeholder.</h3>

      {showScore ? (
        <div className="score-section">
          You scored {score} out of {quizInfo.length}
          <p>
          <button onClick={() => restartGame()}>Restart Quiz</button>
          </p>
        </div>
      ) : (
        <>
          <div className="question-section">

            <div className="question-count">
              Question {currentQuestion + 1}/{quizInfo.length}
            </div>

            <div className="quetion-text">
              {/* PLACEHOLDER: This where the QUESTION TEXT will go. currentQuestion
          replaces the number(0), number is now stored in the useState, making it dynamic  */}
              {quizInfo[currentQuestion].questionText}
            </div>

            <div className="answer-section">
              {/* Since the hardcode data is in the SERVER index.js, I need
          to access it with quizInfo first. This map display the multiple
          // choice answer options. Need to add function to handleAnswerButtonClick, so that it can process the correct answer on the click*/}
              {quizInfo[currentQuestion].answerOptions.map(
                (answerOptions) => (
                  <button onClick={() => handleAnswerButtonClick(answerOptions.isCorrect)}>{answerOptions.answerText}</button>))}
            </div>
        </div>
        </>
      )}
    </div>
  )
}
export default QuizFirstTry;