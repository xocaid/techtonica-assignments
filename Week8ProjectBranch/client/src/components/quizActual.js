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


          for(const result of data.results){
            const answerOptions= [result.incorrect_answers];
            answerOptions.push(result.correct_answer);
            result["answerOptions"]=answerOptions.flat()
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value)
          }
          console.log(data.results);

          setQuestions(data.results);

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
          (question, index) => {
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