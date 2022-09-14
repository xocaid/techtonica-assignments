//BACKEND
import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
const PORT = 8080;

app.use(cors());

app.get('/', (req, res) => {
  res.json('This is the backend.')
});

//Api being received from the API
// app.get('/api/quizinfo', (req, res) => {
//   const URL = `https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple`;
//   fetch(URL)
//     .then((response) => response.json())
//     .then((data) => {
//       res.send(data);
//     });
// })

app.get('/api/hardcodequizinfo', (req, res) => {
  const QUIZINFO = [
    {questionText: 'Who is 626?',
    answerOptions: [
      {answerText: 'Stitch' , isCorrect: true},
      {answerText: 'Mickey Mouse', isCorrect: false},
      {answerText: 'Donald Duck', isCorrect: false},
      {answerText: 'Nani', isCorrect: false},
      {answerText: 'Gru', isCorrect: false},//This is a 5th option, can be removed
    ],
  },
  {questionText: 'Who is the US President?',
  answerOptions: [
    {answerText: "Donald Trump", isCorrect: false},
    {answerText: 'Barack Obama', isCorrect: false},
    {answerText: 'Joe Biden', isCorrect: true},
    {answerText: 'George Washington', isCorrect: false},
  ],
},
{questionText: 'Where is Los Angeles?',
answerOptions: [
  {answerText: 'New York', isCorrect: false},
  {answerText: 'Texas', isCorrect: false},
  {answerText: 'Florida', isCorrect: false},
  {answerText: 'California', isCorrect: true},
],
},
{questionText: 'Where does Santa Claus live?',
answerOptions: [
  {answerText: 'North Pole', isCorrect: true},
  {answerText: 'South Pole', isCorrect: false},
  {answerText: 'West Pole', isCorrect: false},
  {answerText: 'East Pole', isCorrect: false},
],
},
  ]
  res.json(QUIZINFO);
});


app.listen(PORT, () => console.log(`Server is running on port: ${PORT}.`));