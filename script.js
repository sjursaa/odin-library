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
  // TODO: add functionality using user input (temporarily)
  // do stuff here
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

console.log(myLibrary);

// TODO: add button for adding new book (HTML ??)
// TODO: add button to each books display for removing them (DOM)
// TODO: add button for each books display for changing read status (DOM)
