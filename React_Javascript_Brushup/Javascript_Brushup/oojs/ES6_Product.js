//defining ES6 class using class keyword

class Product {
  constructor(id, name, brand, price) {
    (this.productId = id),
      (this.name = name),
      (this.brand = brand),
      (this.price = price);
  }
  //method (instance methos or object methos or non-static method)
  printDetails() {
    console.log(
      `Product id : ${this.productId} Product Name : ${this.name} Product brand : ${this.brand} Product price : ${this.price}`
    );
  }
  //Mehod( class mthod or static method)
  static categotyInfo() {
    //common code which is same for all the objects of Product class
    console.log("Category information");
  }
} //End of product class
let obj1 = new Product(1, "Nano", "Tata", 100000.0);

obj1.printDetails();

//calling static method using class Name

Product.categotyInfo();
