//Define object literal
let car={
    'Register no':"MH-14 DR 5433",
    model:"Nexon",
    brand:"Tata",
    price: 1500000.00,
    //local method of car obect literal
    pringCar: function(){
        console.log("Reg No : "+this["Register no"]+"Model : "+this.model+"Brand : "+this.brand+"Price : "+this.price)
        //this refers to the current object in which printCar() is present
    }
}
//If a property name includes space in two words then use array like notation for accessing the peroperty value
console.log("Car registration no : ",car['Register no'])
console.log(car.model)
console.log(car["brand"])
console.log(car.price)

// console.log("Iterate over person object properties using for..in loop")
// for(let prop in car){
//     console.log(car[prop])
// }
//Call method of car object
car.pringCar()