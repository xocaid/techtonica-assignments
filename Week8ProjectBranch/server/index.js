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

app.get('/api/quizinfo', (req, res) => {
  const URL = `https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple`;
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      res.send(data);
    });
})

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}.`));