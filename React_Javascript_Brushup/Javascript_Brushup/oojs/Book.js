//Parameterized constructor

function Book(code, title, author, price) {
  //Variables
  (this.code = code),
    (this.title = title),
    (this.author = author),
    (this.price = price);

  //Methods
  this.getBookInfo = function () {
    return (
      "Book Code : " +
      this.code +
      "Book title : " +
      this.title +
      "Book Author : " +
      this.author +
      "Book Price : " +
      this.price
    );
  };
} //End of book object
//Create object of book object
let book1 = new Book(3306, "WIngs of fire", "Dr. APJ Abdul Kalam", 450);

console.log(book1.getBookInfo());
