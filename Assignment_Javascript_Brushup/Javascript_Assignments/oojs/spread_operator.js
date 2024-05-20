let arr = [10, 20, 30];

//merging one array into another
let arr1 = [40, 20, ...arr, 90, 100];
console.log(arr1);

let arr2 = [400, 200, ...arr];
console.log(arr2);

let arr3 = [...arr,400, 200, 6000];
console.log(arr3);

//concatinate arrays using spread operator
console.log("*****************************************")
let arr4=[...arr,...arr1,arr2,...arr3]

console.log(arr4)

let cityList1=["Latur","Pune","Solapur"]
let cityList2=["Beed","Jalna","Yavalmal"]

let cities=[...cityList1,...cityList2]

console.log(cities)

//copy one array to another

let arrCp=[...arr]
console.log(arrCp)

//object literal

let car={
    model:"Nexon",
    brand:"Tata",
    price:1578000.00,
    specification:{
        mileage:15.8,
        power:12,
        fuelType:"Petrol"

    }
}

console.log("Original car : ",car)

//copy car object literal using spread operator

let myCar={...car} //shallow copying means nested object will not copied
myCar.specification={...car.specification} //deep cpoying means creating copy of nested object

console.log("Duplicate car : ",myCar)

//changing price of duplicate car object

myCar.price=175000.0

console.log("Originial car : ",car)
console.log("Duplicate car : ",myCar)

//changing model of origina car
car.model="Nexon Nex-Gen"

console.log("After changing car model : ",car)
console.log("Duplicate car : ",myCar)

//change the fuel type of duplicate car

myCar.specification.fuelType="Petrol + CNG"

console.log("After changing duplicate car fuel type  : ",myCar)
console.log("Original car : ",car)