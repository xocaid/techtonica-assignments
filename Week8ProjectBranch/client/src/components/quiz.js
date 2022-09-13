import { useState, useEffect } from "react";

const QuizQs = () => {
  const [quizInfo, setQuizInfo] = useState(null);


const loadData = () => {
  fetch('http://localhost:8080/api/quizinfo')
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
      <p>This is a Quiz Info placeholder.</p>
    </div>
  )
}
export default QuizQs;