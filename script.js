console.log("Hello World");

const myLibrary = [];

function book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    // TODO: format string properly
    return (
      this.title + ", " + this.author + ", " + this.pages + ", " + this.read
    );
  };
}

function addBookToLibrary() {
  let title = prompt("title");
  let author = prompt("author");
  let pages = prompt("pages");
  let read = prompt("read");
  myLibrary.push(new book(title, author, pages, read));
}

// TODO: add function that loops through array, and displays each book on page

const theHobbit = new book(
  "The Hobbit",
  "J.R.R. Tolkien",
  "367 pages",
  "not read yet",
);

const theLordOfTheRings = new book(
  "The Lord of the Rings",
  "J.R.R. Tolkien",
  "295 pages",
  "not read yet",
);

myLibrary.push(theHobbit);
myLibrary.push(theLordOfTheRings);

console.log(theHobbit.info());

const addBookButton = document.querySelector("#add-new-book");
addBookButton.onclick = () => createForm();
// addBookButton.onclick = () => fillTable();

console.log(myLibrary);

// TODO: Put all this stuff in addBookToLibrary function
function createForm() {
  const container = document.querySelector("#container");
  const form = document.createElement("FORM");
  form.style.backgroundColor = "blue";
  form.style.display = "flex";
  form.setAttribute("id", "form");
  // form.setAttribute("display", "flex");
  // form.setAttribute("flex-direction", "column");

  container.appendChild(form);

  const inputTitle = document.createElement("INPUT");
  inputTitle.setAttribute("type", "text");
  inputTitle.setAttribute("value", "Harry P");
  form.appendChild(inputTitle);

  const inputAuthor = document.createElement("INPUT");
  inputAuthor.setAttribute("type", "text");
  inputAuthor.setAttribute("value", "J.K. Rowling");
  form.appendChild(inputAuthor);

  const inputPages = document.createElement("INPUT");
  inputPages.setAttribute("type", "text");
  inputPages.setAttribute("value", "57");
  form.appendChild(inputPages);

  const inputRead = document.createElement("INPUT");
  inputRead.setAttribute("type", "text");
  inputRead.setAttribute("value", "yes");
  form.appendChild(inputRead);

  const submitButton = document.createElement("BUTTON");
  // switch between submit/button to debug
  submitButton.setAttribute("type", "button");
  submitButton.textContent = "Submit";
  form.appendChild(submitButton);

  submitButton.onclick = () => {
    myLibrary.push(
      new book(
        inputTitle.value,
        inputAuthor.value,
        inputPages.value,
        inputRead.value,
      ),
      fillTable(),
    );

    console.log(inputTitle.value);
    console.log(inputAuthor.value);
    console.log(inputPages.value);
    console.log(inputRead.value);
    console.log(myLibrary);
  };
}

function fillTable() {
  const container = document.querySelector("#container");
  const table = document.createElement("TABLE");
  table.setAttribute("id", "myTable");
  table.setAttribute("border", "solid");
  // table.style.backgroundColor = "blue";
  container.appendChild(table);

  const row = document.createElement("TR");
  row.setAttribute("id", "myTr");
  table.appendChild(row);

  const td = document.createElement("TD");
  const textNode = document.createTextNode("Title");
  td.appendChild(textNode);
  row.appendChild(td);

  const td2 = document.createElement("TD");
  const textNode2 = document.createTextNode("Author");
  td2.appendChild(textNode2);
  row.appendChild(td2);

  const td3 = document.createElement("TD");
  const textNode3 = document.createTextNode("Pages");
  td3.appendChild(textNode3);
  row.appendChild(td3);

  const td4 = document.createElement("TD");
  const textNode4 = document.createTextNode("Read");
  td4.appendChild(textNode4);
  row.appendChild(td4);

  myLibrary.forEach((element) => {
    console.log(element);
    let row2 = document.createElement("TR");
    row2.setAttribute("id", "myTr");
    table.appendChild(row2);

    let td = document.createElement("TD");
    let textNode = document.createTextNode(element.info());
    console.log(element.info());
    td.appendChild(textNode);
    row2.appendChild(td);
  });
}

fillTable();

// const row2 = document.createElement("TR");
// row2.setAttribute("id", "myTr");
// table.appendChild(row2);

// TODO: add button to each books display for removing them (DOM)
// TODO: add button for each books display for changing read status (DOM)
