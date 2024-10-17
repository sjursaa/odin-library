console.log("Hello World");

const myLibrary = [];

function book(title, author, pages, read) {
  // ctor
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
  // do stuff here
}

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
