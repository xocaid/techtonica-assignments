import { useState, useEffect } from "react";
import QuestionCard from "./questionCard";


const QuizActual = () => {
  //This is to access the hardcode data from index.js
//setQuestions is accessing the data.results from API and sending it to questions, so we can use it(remember it's data)
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);


  const loadData = () => {
    fetch('http://localhost:8080/api/quizinfo')
      .then((response) => response.json())
      .then(
        (data) => {

//For Of Loop - Statement loops through the values of iterable data structures, in this case an array
//Creates a new array of the correct & incorrect answers in one array by using For Or Loop
//.flat() is flattening the array, originally returned a new variable with the [correct answer] array within [incorrect answer] array
//Flat does the following: [a,b,c[d] --> [a,b,c,d]
//Randomize: .map,.sort.map, randomizes the answerOptions so that the correct answer is not appearing last every time thanks to .push()
//(1).map puts each element of the array in an object and gives it a random sort key
//(2).sort - sorts using the random key
//(3).map - unmaps to get the original objects
//Time complexity: O(N log N); Space complexity: O(N); shorter & more functional for short arrays
//Add For Of Loop here because: we FETCH API data, TRANSFORM it, and FORWARD/PASS IT ON to be used in our code
//data.results now has the answerOptions created in the API, so we can access it

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
    <div>
      <h2>You scored {score} out of {questions.length}</h2>
      {
        questions.map(
          (question, index) => {
            return <QuestionCard key={index} question={question} setScore={setScore} />;
          }
        )
      }

    </div>
  )

}
export default QuizActual;