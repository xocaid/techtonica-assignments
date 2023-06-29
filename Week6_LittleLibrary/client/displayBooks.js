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
         <h3 class = "class-title"> <b> ${book.title}</b></h3>
         <h5 class = "class-author"> ${book.author}</h5>
         <h6 class = "class-isbn"> ${book.isbn}</h6>
         <h6 class = "class-isbn"> ${book.format}</h6>

         <button type="delete" 
          class="btn btn-danger" 
          onclick="setDeleteBook('${book.isbn}')">
          Delete
         </button>

         <button type="edit" 
          class="btn btn-primary" 
          data-toggle="modal"
          data-target="#editBookModal" 
          onClick="setEditBook(${book.isbn})">
          Edit
         </button>
    
        </div>


        <form action="http://localhost:8081/book" class = "edit_Form" >
        
        <div class="form-group">
         <label for="edit_title_${book.isbn}">Title</label>
         <input class="form-control" name="title" id= "edit_title_${book.isbn}" value= '${book.title}'>
        </div>
        
        <div class="form-group">
          <label for="edit_author_${book.isbn}">Author</label>
          <input class="form-control" name="author" id= "edit_author_${book.isbn}" value= '${book.author}'>
        </div>

        <div class="form-group">
          <label for="edit_isbn_${book.isbn}">ISBN</label>
          <input class="form-control" name="isbn" id= "edit_isbn_${book.isbn}" value= '${book.isbn}'>
        </div>

          <div class="form-group">
           <label for="edit_format_${book.isbn}">Format</label>
           <input class="form-control" name="format" id= "edit_format_${book.isbn}" value= '${book.format}'>
          </div>
    
          <!--Other fields-->
          <button type="submit" class="btn submit">Close</button>
      </form>
     </div>
    </div>
    `;
//edit_Form --> label for & id, are the isbn number to prevent issues if there is a repeat author, title, and/or format
    document.getElementById("books").innerHTML = document.getElementById("books").innerHTML + card;
  }
}

displayBooks();

//DELETE Books
const setDeleteBook = async (isbn) => {
  await fetch(`http://localhost:8081/book/${isbn}`, {
    method: 'DELETE',
  });
  //Reloading the page
  location.reload();
}

//**************** EDIT Books *******************
//PART 1: GET Request
const setGetBook = async (isbn) => {
  try {
    // Get information about the book using isbn
    const response = await fetch(`http://localhost:8081/book/${isbn}`);
    const book = await response.json();

    const { title, author } = book;

    // Filling information about the book in the form inside the modal
    document.getElementById('isbn').value = isbn;
    document.getElementById('title').value = title;
    document.getElementById('author').value = author;

    // Setting up the action url for the book
    document.getElementById('editForm').action = `http://localhost:8081/book/${isbn}`;
  } catch (error) {
    // Handle error if fetch request fails
    console.log('Could not get book details to EDIT.');
    console.error(error);

  }
};
//PART 2: PUT Request
const setEditBook = async (isbn) => {

}

//First use a get request to fetch the data and render it
//Once you have that data THEN you can do a PUT request to send it to the backend

//DEFAULT - When you DONT specify the type of HTTP request, it defaults to a GET

//2 Parts for EDIT to work
//GET request - enables you to EDIT form, displaying the info you are trying to edit
//SAVE/SUBMIT -> Click that is when you send the put request
//edit request needs to be tied submit functionality