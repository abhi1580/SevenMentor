//OOJS Assingment 1

/* A] Create object literal named book which contains below properties
    title
    author
    price

   B] Assign the values of your choice to therse properties
*/

let book = {
  title: "Game of thrones",
  author: "George R. R. Martin",
  price: 3282.0,
};

/* 
   C] Access and print value of all the properties using 
    a]dot member access operator
    b]array like notation
 */
//Printing all properties of book object using dot member access operator

console.log(
  "Title: " + book.title + "\tAuthor: " + book.author + "\tPrice: " + book.price
);
//Printing all properties of book object using array like notation
console.log(
  "Title: " +
    book["title"] +
    "\tAuthor: " +
    book["author"] +
    "\tPrice: " +
    book["price"]
);

/* 
   D] Add below new properties to book object literal
    a]noOfPages 4244
    b] publication Bantam Books
*/

book.noOfPages = 4244;
book.publication = "Bantam Books";

/**
   E] Check whether properties author and noOfPages exists using in operator
   print the output
*/
console.log("author" in book);
console.log("noOfPages" in book);

// F] Remove properties price and publication from book object literal
delete book.price;
delete book.publication;
// G] Write global function printDetail() to print title, author, noOfPages of book
function printDetail() {
  console.log(
    "Title: " +
      book["title"] +
      "\tAuthor: " +
      book["author"] +
      "\tNo of Pages: " +
      book["noOfPages"]
  );
}
printDetail();
// H] Create method property print of book and assign printDetail function to it
book.print = printDetail;
// I] Call the print() method of book
book.print();
