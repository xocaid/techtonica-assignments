//This is your EXPRESS server

//These are the dependencies we downloaded & will use
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";
//Import const Books from myBooks.js file
import books from "./myBooks.js";
//comes with EXPRESS package

//added bookList because it is not being read from line 9 books
//as per tutorial
//changed were it all variables that said books to bookList
let bookList = books;

//Initializes instance of EXPRESS & creates the app
const app = express();
//Determines PORT you want to use
const PORT = 8081;

//Configures CORS middleware
app.use(cors());

//Configures BODYPARSES middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Informs server what directory we are working on
const __dirname = path.resolve();
app.use(express.static('bookList'));

//Displays your list of books(database)from myBooks.js file in an array
//This will be displayed on localhost:8081/api/myBooks
app.get('/api/myBooks', (req, res) => {
  res.json(bookList);
});


//This string gets sent to the DEFAULT PORT path, declared in const PORT
//In this case it will be on localhost:8081
app.get("/", (req, res) => {
  //res.send(`Hello Techtonica, this is my HAPPY API.`)
  //res.sendFile() function transfers the file at the given path & it sets Content Type response HTTP header field based on the filename extension
  res.sendFile(path.join(__dirname, "bookList", "index.html"));
});

app.use(bodyParser.json());

//ADDING NEW BOOK
app.post('/book', (req, res) => {
  const book = req.body;

  //output the book to the console for debugging;
  console.log(book);
  bookList.push(book);

  //res.send("Book added");
  res.redirect('/');
});

// app.get('/book', (req, res) => {
//   res.json(book);
//   //res.redirect('/');
// });

//DELETING INFO
app.delete('/book/:isbn', (req, res) => {
  // Reading isbn from the URL
  const isbn = req.params.isbn;

  // Remove item from the books array
  bookList  = bookList.filter(i => {
    if (i.isbn !== isbn) {
      return true;
    }
    return false;
  });

  res.send('Book is deleted');
  
});


//EDITING BOOK
app.post('/book/:isbn', (req, res) => {
  // Reading isbn from the URL
  const isbn = req.params.isbn;
  const newBook = req.body;

  // Remove item from the books array
  for (let i = 0; i < bookList.length; i++) {
    let book = booksList[i]
    if (book.isbn === isbn) {
      bookList[i] = newBook;
    }
  }
  console.log('Trying to edit');
  res.send('Book is edited');
});


//This message Displays in the VS Code terminal - that PORT 8081 is listening/active
app.listen(PORT, () => console.log(`HOLA! Server is running at port ${PORT}.`));
