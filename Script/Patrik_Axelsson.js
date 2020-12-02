"use strict";
function Book(Book, Topic, Page, ISBN) {
  this.Book = Book;
  this.Topic = Topic;
  this.Page = Page;
  this.ISBN = ISBN;
  this.getBookInfo = function () {
    console.log(
      "\nBook: " +
        this.Book +
        "\n Topic: " +
        this.Topic +
        "\n Page: " +
        this.Page +
        "\n ISBN: " +
        this.ISBN
    );
    console.log("-----");
  };
}
let Books = [];
Books.push(new Book("Whales", "documentary", 200, 12345));
Books.push(new Book("The Tigers", "Action", 300, 11111));
Books.push(new Book("Princess Jolene", "Story", 400, 22222));
let Amountbooks = prompt("How many books", "");
for (let i = 0; i < Amountbooks; i++) {
  let book = prompt("book name ", "");
  let Topic = prompt("Topic ", "");
  let Page = parseInt(prompt("Pages", ""));
  let ISBN = parseInt(prompt("ISBN", ""));
  Books.push(new Book(book, Topic, Page, ISBN));
}
Books.forEach(function (e) {
  e.getBookInfo();
});
/*
Books.push new Book("Whales", "documentary", 200, 12345);
let Book2 = new Book("Tigers", "Action", 300, 11111);
let Book3 = new Book("Princess Jolene", "Story", 400, 22222);
Book1.getBookInfo();
console.log("-----\n");
Book2.getBookInfo();
console.log("-----\n");
Book3.getBookInfo();
console.log("-----\n");
*/

/*let books = new books(books, pages, Topic, ISBN);
  array.push(books);
let books = new book("Book: \n", "Topic: \n", "Page: \n", "ISBN: ");
console.log("-----" / n);

getBookInfo(){
    console.log("Book: " + this.name + "Topic: " + this.Topic);
}

let Books = new Book("Whales", "documentary", 200, 12345);
let Books = new Book("Tigers", "Action", 300, 11111);
let Books = new Book("Princess Jolene", "Story", 400, 22222);
*/
