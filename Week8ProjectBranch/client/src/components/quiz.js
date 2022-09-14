import { useState, useEffect } from "react";

const QuizQs = () => {
  //This is to access the hardcode data from index.js
  const [quizInfo, setQuizInfo] = useState(0);

  //This is to apply to map function, so that it can populate the current question at position[x] in array
  //useState is at 0 because you want to start at the first question in the array
  const [currentQuestion, setCurrentQuestions] = useState(0);

  //This function is an onClick event for the answer buttons, when you click an answer, it will move on to the next question
  //change the current question by one, create function
  const handleAnswerButtonClick = () => {
    const nextQuestion = currentQuestion + 1;
    setCurrentQuestions(nextQuestion);
  }

  // const loadData = () => {
  //   fetch('http://localhost:8080/api/quizinfo')
  //   .then((response) => response.json())
  //   .then(
  //     (data) => {
  //       console.log(data);
  //       setQuizInfo(data);
  //     }
  //   );
  // };
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
      <div className="question-section">

        <div className="question-count">
          Question 1{quizInfo.length}
        </div>

        <div className="quetion-text">
          {/* PLACEHOLDER: This where the QUESTION TEXT will go. currentQuestion
          replaces the number(0), number is now stored in the useState, making it dynamic  */}
          {quizInfo[currentQuestion].questionText}
        </div>

        <div className="answer-section">
          {/* Since the hardcode data is in the SERVER index.js, I need
          to access it with quizInfo first. This map display the multiple
          // choice answer options*/}
          {quizInfo[currentQuestion].answerOptions.map(
            (answerOptions) => (
              <button onClick={handleAnswerButtonClick}>{answerOptions.answerText}</button>))}
        </div>

      </div>
      {/* Below is for the infomration from the API */}
      {/* <p>Question: {quizInfo.results[0].question} </p>
      <p>Response: {quizInfo.results[0].correct_answer}</p> */}
    </div>
  )
}
export default QuizQs;