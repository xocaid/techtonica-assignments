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
          id = "showButton"
          >
          Edit
         </button>
    
        </div>

        <form action="http://localhost:8081/book" class = "edit_Form" id="myEditForm">
        
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
          <button type="submit" class="btn submit" onClick="event.preventDefault();setEditBook('${book.isbn}')">Close</button>
      </form>
     </div>
    </div>
    `;
    //edit_Form --> label for & id, are the isbn number to prevent issues if there is a repeat author, title, and/or format
    document.getElementById("books").innerHTML = document.getElementById("books").innerHTML + card;

    // Get the button and element
const showButton = document.getElementById("showButton");
const myEditForm = document.getElementById("myEditForm");

// Remove the "hidden" class to initially hide the myEditForm
myEditForm.classList.remove("hides");

// Add event listener to the button
showButton.addEventListener("click", function() {
  // Add the "hidden" class to hide the myEditForm again
  myEditForm.classList.add("hides");
});
  }
}

displayBooks();

//**************** DELETE Book *******************
const setDeleteBook = async (isbn) => {
  await fetch(`http://localhost:8081/book/${isbn}`, {
    method: 'DELETE',
  });
  //Reloading the page
  location.reload();
}

//**************** EDIT Book *******************
const setEditBook = async (isbn) => {
  //Need to define your data
  //Where is the data coming from, its in the HTML file, so we have to use Vanilla JS aka JS DOM
  //In this case ${book.isbn} is not needed because it is not defined, isbn === ${book.isbn}
  // .value gets the value of an input
  //location.reload is supposed to be in the .then to not reload before everything downloads/starts
  const data = {
    title: document.getElementById(`edit_title_${isbn}`).value,
    author: document.getElementById(`edit_author_${isbn}`).value,
    isbn: document.getElementById(`edit_isbn_${isbn}`).value,
    format: document.getElementById(`edit_format_${isbn}`).value,
  }
  fetch(`http://localhost:8081/book/${isbn}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => {
      console.log(`Edit was succesful for isbn: ${isbn}`, data);
      //Reloading the page
      location.reload();
    })
    .catch(error => {
      console.log(`Edit was NOT successful for isbn: ${isbn}`, error);
    })




}