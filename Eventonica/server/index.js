import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import userRouter from "./routes/users.js"
import eventsRouter from "./routes/events.js"

const app = express();
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json())
app.use('/users', (userRouter));
app.use('/events', (eventsRouter));

let mockUsers = [
  { id: 1, name: 'Marlin', email: 'marlin@gmail.com' },
  { id: 2, name: 'Nemo', email: 'nemo@gmail.com' },
  { id: 3, name: 'Dory', email: 'dory@gmail.com' }
];

app.get('/', function (req, res, next) {
  console.log(req.body, 'the body');
  res.json({ users: mockUsers });
});

app.listen(PORT, () => console.log(`Server is running on PORT : ${PORT}.`));