//This is the FRONTEND file linked to the index.html file in the bookList file
//nodemon: npm run server to pick up changes as you are working on the page- add a read me
//node: npm start - once you are done and ready no more changes to make
//if not necessary & only for Techtonica use nodemon only, it's ok
//issue occuring, if isbn starts with 0, it does not get deleted. to fix, add quotes around the isbn
//it is being read as NUMERIC literal instead of a string literal, so it needs quotes.
//You can right click on the delete button -->inspect the page, it will tell you what the code is running
//if you go to Network, and click Preserve Log, it will keep a record of what is happening,
//In this case when you clicked the delete button with a starting 0, the log would should the number pop up without a 0, not the same number
//once the problem was rectified, it showed up correctly and could be deleted.
//cannot have extra text in package.json, it will freak out

async function displayBooks() {
  const URL = 'http://localhost:8081/api/books';
  //Fetching/getting the from books API link
  const response = await fetch(URL);
  //Responds with data from books API
  const responseBooks = await response.json();
  console.log(responseBooks);

  //DOM manipulation  occurs below
  for (let book of responseBooks) {
    const card = `
    <div class = "col-4">
    <div class = "card">
    <div class = "card-body">
    <h3 class = "class-title">  ${book.title}</h3>
    <h5 class = "class-author"> ${book.author}</h5>
    <h6 class = "class-isbn"> ${book.isbn}</h6>

    <button type="button" 
    class="btn btn-danger" 
    onclick="deleteBook('${book.isbn}')">
    Delete
    </button>

    <button types="button" 
    class="btn btn-primary" 
    data-toggle="modal"
    data-target="#editBookModal" 
    onClick="setEditModal(${book.isbn})">
    Edit
    </button>
    

    </div>
    </div>
    </div>
    `;

    document.getElementById("books").innerHTML = document.getElementById("books").innerHTML + card;
  }
}

displayBooks();

//Delete Books
const deleteBook = (isbn) => {
  const xhttp = new XMLHttpRequest();

  xhttp.open("DELETE", `http://localhost:8081/book/${isbn}`, false);
  xhttp.send();

  // Reloading the page
  location.reload();
};

// const setEditModal = (isbn) => {
//   // Get information about the book using isbn
//   const xhttp = new XMLHttpRequest();

//   xhttp.open("GET", `http://localhost:8081/book/${isbn}`, false);
//   xhttp.send();

//   const book = JSON.parse(xhttp.responseText);

//   const {
//       title,
//       author,
//   } = book;

//   // Filling information about the book in the form inside the modal
//   document.getElementById('isbn').value = isbn;
//   document.getElementById('title').value = title;
//   document.getElementById('author').value = author;

//   // Setting up the action url for the book
//   document.getElementById('editForm').action = `http://localhost:8081/book/${isbn}`;
// };