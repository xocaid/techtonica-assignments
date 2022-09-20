import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 4000;

app.use(cors());

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