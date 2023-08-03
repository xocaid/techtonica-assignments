import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";
import books from "./books.js";

let bookList = books;

const app = express();
const PORT = 8081;

//Configures CORS middleware
app.use(cors());

//Configures BODYPARSES middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Informs server what directory we are working on
const __dirname = path.resolve();
app.use(express.static('client'));

//Displays your list of books(database)from books.js file in an array
//This will be displayed on localhost:8081/api/books
app.get('/api/books', (req, res) => {
  res.json(bookList);
});

app.use(bodyParser.json());

//*************** ADD NEW BOOK ****************
app.post('/book', (req, res) => {
  const book = req.body;
  console.log(book);
  bookList.push(book);
  //res.send("Book added");
  res.redirect('/');
});

// app.get('/book', (req, res) => {
//   res.json(book);
//   //res.redirect('/');
// });

//*************** DELETE BOOK ********************
app.delete('/book/:isbn', (req, res) => {
  // Reading isbn from the URL
  const isbn = req.params.isbn;

  // Remove item from the books array
  bookList = bookList.filter(i => {
    if (i.isbn !== isbn) {
      return true;
    }
    return false;
  });
  res.send('Book is deleted');
});


//************* EDIT BOOK *********************
app.put('/book/:isbn', (req, res) => {
  // Reading isbn from the URL
  const isbn = req.params.isbn;
  const newBook = req.body;

  // Remove item from the books array
  for (let i = 0; i < bookList.length; i++) {
    let book = bookList[i]
    if (book.isbn === isbn) {
      bookList[i] = newBook;
    }
  }
  console.log('Trying to edit');
  res.send({ message: 'Book is edited' });
})

//This string gets sent to the DEFAULT PORT path, declared in const PORT
//In this case it will be on localhost:8081
app.get("/:wildcard", (req, res) => {
  //res.send(`Hello Techtonica, this is my HAPPY API.`)
  //res.sendFile() function transfers the file at the given path & it sets Content Type response HTTP header field based on the filename extension
  res.sendFile(path.join(__dirname, "client", req.params.wildcard ?? "index.html"));
});

//This message Displays in the VS Code terminal - that PORT 8081 is listening/active
app.listen(PORT, () => console.log(`HOLA! Server is running at port ${PORT}.`));
