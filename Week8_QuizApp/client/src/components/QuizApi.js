import { useState, useEffect } from "react";
import IndvQuizCard from "./IndvQuizCard";

const QuizApi = () => {
  //questions accesses the data.results from API and sending it to questions
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  //correctAnswer tracks if the answer is true/false (correct/incorrect)
  const [correctAnswer, setCorrectAnswer] = useState((Array(6).fill(null)));
  //selectedAnswer tracks the answer button(s) SELECTED from each individual quiz card & its (in)correct status
  const [selectedAnswer, setSelectedAnswer] = useState((Array(6).fill(null)));

  const loadData = () => {
    fetch('http://localhost:8080/api/quizinfo')
      .then((response) => response.json())
      .then(
        (data) => {

          //For Of Loop - Statement loops through the values of iterable data structures, in this case an array
          //Creates a new array of the correct & incorrect answers in one array by using For Or Loop
          //.flat() is flattening the array, originally returned a new variable with the [correct answer] array within [incorrect answer] array
          //Flat does the following: [a,b,c[d]] --> [a,b,c,d]
          //Randomize: .map,.sort.map, randomizes the shuffledAnswers so that the correct answer is not appearing last every time thanks to .push()
          //(1).map puts each element of the array in an object and gives it a random sort key
          //(2).sort - sorts using the random key
          //(3).map - unmaps to get the original objects
          //Time complexity: O(N log N); Space complexity: O(N); shorter & more functional for short arrays
          //Add For Of Loop here because: we FETCH API data, TRANSFORM it, and FORWARD/PASS IT ON to be used in our code
          //data.results now has the shuffledAnswers created in the API, so we can access it

          for (const result of data.results) {
            const shuffledAnswers = [result.incorrect_answers];
            shuffledAnswers.push(result.correct_answer);
            result["shuffledAnswers"] = shuffledAnswers.flat()
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

  const handleCheckAnswer = (question, answer, questionNum) => {
    //Checks if answer was (in)correct & stores its value(true/false)
    //questionNum represents the index of each individual quiz card question 1, 2, 3...
    if (answer === question.correct_answer) {
      setScore(s => s + 1);
      //Creates a shallow copy of the correctAnswer State 
      const newAnswer = [...correctAnswer];
      //Sets true/false in the shallow copy (an array) at position (questionNum aka index)
      newAnswer[questionNum] = true;
      //Updates the state of correctAnswer to avoid resetting state if it was not in an array. 
      //Quiz needs to track multiple answers, 
      //Targets specific indices whether they have been answered or not by user, so no need for a for loop which iterates through each question/answer
      setCorrectAnswer(newAnswer);
    } else {
      const newAnswer = [...correctAnswer];
      newAnswer[questionNum] = false;
      setCorrectAnswer(newAnswer);
    }
    //Tracks the (in)correct answer that was clicked in the indivial quiz card
    const trackSelectedAnswer = [...selectedAnswer];
    //Sets clicked answer ((in)correct) and sets it in the shallow copy at its position(questionNum aka index)
    trackSelectedAnswer[questionNum] = answer;
    setSelectedAnswer(trackSelectedAnswer);
  }

  const handlePlayAgain = () => {
    setScore(0);
    setCorrectAnswer((Array(6).fill(null)));
    setSelectedAnswer((Array(6).fill(null)));
    loadData();
  }

  //As per React, a key is required - it's an attribute to uniquely identify an element(s) within a loop
  //onAnswerClicked --> Parent defines the function, the child will call the function and provide the arguments to the parent
  //questionNum --> Receives the question #(index) user answered
  //isAnswerCorrect --> Receives answer selected((in)correct) at its position(index)
  //answerChosen --> Receives answer clicked at its position(index)
  return (
    <div>
      <h2 className="user-score">You scored {score} out of {questions.length}</h2>
      {
        questions.map(
          (question, index) => {
            return <IndvQuizCard
              key={index}
              question={question}
              onAnswerClicked={handleCheckAnswer}
              questionNum={index}
              isAnswerCorrect={correctAnswer[index]}
              answerChosen={selectedAnswer[index]}
            />;
          }
        )
      };
      <button className="play-again" onClick={handlePlayAgain}> Play Again</button>
    </div>
  );
};
export default QuizApi;