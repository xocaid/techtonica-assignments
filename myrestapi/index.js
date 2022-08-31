//This will be your express server

//These are the dependecies we donwloaded and will use
import express from "express";
import cors from "cors";
//importing books from file into this file
import books from "./books.js";
//comes with express package
import path from "path";

//should create the app
const app = express();
//determine the port to use
const PORT =  8080;

//cors is the middleware
app.use(cors());

//to let the server know what directory we are working on
const __dirname = path.resolve();
app.use(express.static('client'));

//create the /api/books endpoint
//GET request
//2 parameters with route, anonymous function to get all the books
app.get('/api/books', (req, resp)=>{
  resp.json(books);
//telling response to open the index.html file

});


//takes in 2 parameters, a  route & anonymous function with 2 parameters(request, response)
app.get('/', (req, resp) =>{
  //resp.send("HEllo Techtonica, this will be my first REST API");
   resp.sendFile(path.join(__dirname, 'client', 'index.html'));
})

//Takes in 2 parameters, a PORT & anonymous function
app.listen(PORT, () =>console.log(`HOLA!, Server running at ${PORT}`));