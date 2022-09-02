//This is the FRONTEND file linked to the index.html file in the bookList file

async function displayBooks() {
  const URL = 'http://localhost:8081/api/myBooks';
  //Fetching/getting the from myBooks API link
  const response = await fetch(URL);
  //Responds with data from myBooks API
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
    onclick="deleteBook(${book.isbn})">
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



const deleteBook = (isbn) => {
  const xhttp = new XMLHttpRequest();

  xhttp.open("DELETE", `http://localhost:8081/book/${isbn}`, false);
  xhttp.send();

  // Reloading the page
  location.reload();
};