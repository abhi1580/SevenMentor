// OOJS Assignment 2

/* A] Create object literal named product which contains below properties
     product name
     brand
*/
// B] Assign the values of your choice to these properties

let product={
    'product name':"Laptop",
    brand:"HP"
}

// C] Access and print value of all the properties appropriately using correct notation
console.log(`Product name is : ${product['product name']}`)
console.log(`Product name is : ${product.brand}`)


/* D] Add below new properties to the product object literal 
    a] price
*/
product.price=40000

// E] Iterate over the object using for..in loop to print all the properties.

for(prop in product){
    console.log(product[prop])
}