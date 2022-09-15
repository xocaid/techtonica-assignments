import { useState, useEffect } from "react";
import QuestionCard from "./questionCard";


const QuizActual = () => {
  //This is to access the hardcode data from index.js
  // const [quizInfo, setQuizInfo] = useState([]);
  const [questions, setQuestions] = useState([]);

  // const [currentQuestion, setCurrentQuestions] = useState([]);


  // const question = quizInfo[0].question;

  // const correctAnswer = quizInfo[0].correct_answer;

  // // Putting the answerOptions into one array
  // const answerOptions=
  // [quizInfo[0].incorrect_answers];
  // answerOptions.push(quizInfo[0].correct_answer);

  // //Flattening the array aka getting rid of the array within the array
  // const allAnswerOptions = answerOptions.flat();




  const loadData = () => {
    fetch('http://localhost:8080/api/quizinfo')
      .then((response) => response.json())
      .then(
        (data) => {
          console.log(data.results);
          setQuestions(data.results);
          //           //data.response on both up and below
          //         //this means we are directly accessing the infomration on the object, specifically from key response how it it called in the api
        }
      );
  };

  useEffect(() => {
    loadData();
  }, []);






  return (
    <div >
      {/* <h3>This is a QuizLink Info placeholder.</h3> */}

        {/* Just printing the information for first question on page  */}
        {/* <p> QUESTION: {quizInfo[0].question}</p>  */}
        {/* <p>ALL ANSWERS: {allAnswerOptions}</p>  */}
        {/* <p>CORRECT ANSWER: {correctAnswer}</p> */}


        {
          questions.map(
            function (question, index) {
            return <QuestionCard key={index} question={question} />;
          }
          )
        }




      {/* <div className="question-answers">
      {allAnswerOptions.map(
        (answerOption, index) => (
        <button index={index}>{answerOption}</button>
      ))}

      </div> */}

    </div>
  )

}
export default QuizActual;