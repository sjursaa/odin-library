console.log("Hello World");

const myLibrary = [];

function book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    // TODO: format string properly
    return this.title + this.author + this.pages + this.read;
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
  "295 pages",
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
addBookButton.onclick = () => addBookToLibrary();

console.log(myLibrary);

const container = document.querySelector("#container");
const form = document.createElement("FORM");
form.style.color = "blue";
form.setAttribute("id", "form");
// form.textContent = "hello world";
container.appendChild(form);

const inputTitle = document.createElement("INPUT");
inputTitle.setAttribute("type", "text");
inputTitle.setAttribute("value", "title");
form.appendChild(inputTitle);

const inputAuthor = document.createElement("INPUT");
inputAuthor.setAttribute("type", "text");
inputAuthor.setAttribute("value", "author");
form.appendChild(inputAuthor);

const inputPages = document.createElement("INPUT");
inputPages.setAttribute("type", "text");
inputPages.setAttribute("value", "pages");
form.appendChild(inputPages);

const inputRead = document.createElement("INPUT");
inputRead.setAttribute("type", "text");
inputRead.setAttribute("value", "y/N");
form.appendChild(inputRead);

const submitButton = document.createElement("BUTTON");
submitButton.setAttribute("type", "submit");
submitButton.setAttribute("value", "submit");
form.appendChild(submitButton);

// TODO: add button to each books display for removing them (DOM)
// TODO: add button for each books display for changing read status (DOM)
