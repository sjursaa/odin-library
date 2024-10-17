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
