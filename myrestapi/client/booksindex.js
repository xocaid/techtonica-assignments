async function showBooks() {
  const URL = 'http://localhost:8080/api/books';
  const response = await fetch(URL);
  const responseBooks = await response.json();
  console.log(responseBooks);
  //DOM manipulation
  for (let book of responseBooks) {
    const card = `<div class = "col-4">
  <div class = "card">
  <div class = "card-body">
<h5 class = "class-title">${book.title}

  </div>
  </div>
  </div>`
  //inner.HTML because it iterates in the for loop above; it equals a new interation innerHTML + card
    document.getElementById("books").innerHTML = document.getElementById("books").innerHTML + card;
  }
}
showBooks();

//create a button should be in this file and connected to the html file