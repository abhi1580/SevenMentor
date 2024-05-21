let person={
    name:"Abhay",
    age:29,
    gender:"Male"
}

//destructuring person object literal

let{
    name:person_name,
    age:person_age,
    gender:person_gender
}=person

console.log("Name of person: ",person_name)
console.log("Age of person: ",person_age)
console.log("Gender of person: ",person_gender)

let {
    name,
    age,
    gender
}=person

console.log("Name: ",person_name)
console.log("Age: ",person_age)
console.log("Gender: ",person_gender)

function funObj({model,brand,price}){
    console.log("Model of car: ",model)
    console.log("Brand of car: ",brand)
    console.log("Price of car: ",price)

}

let car={
    model:"Verna",
    brand:"Hyundai",
    price:1895000.00
}
funObj(car)

function funObj1(){
    return {
        studName:"Abhay",
        rollNo:20,
        percentage:78.60
    }
}

let {studName,rollNo,percentage}=funObj1()

console.log("Student name: ",studName)
console.log("Student Roll No: ",rollNo)
console.log("Student Percentage: ",percentage)



