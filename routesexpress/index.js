import express from "express";
import cors from "cors";
import path from "path";

//should create the app
const app = express();
const PORT = 8080;

//cors is the middleware
app.use(cors());

//Configuring path middleware
const __dirname = path.resolve();

//Create a route for the index
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'index.html'));
});


app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'about.html'))
});


app.use((req, res) => {
  res.status(404);
  res.sendFile(path.join(__dirname, 'client', '404.html'));
});

//Takes in 2 parameters, a PORT & anonymous function
app.listen(PORT, () => {console.log(`HOLA!, Server running at ${PORT}`)});