//Defining object literal
let person = {
  name: "Abhay",
  age: 29,
  gender: "Male",
  weight: 72,
};

//Accessing properties of object
console.log(person.name);
console.log(person["age"]);
console.log("Gender: ", person.gender);
console.log("Weight: ", person.weight);

//Using for..in loop to iterate over object properties
console.log("Iterate over person object properties using for..in loop");
for (let prop in person) {
  console.log(person[prop]);
}
//Adding new property in person object
person.city = "Mumbai";

console.log("City of person : " + person.city);

//Checking property exists in object or not
console.log("city" in person); //return boolean value
console.log("state" in person);
console.log("name" in person);

//Deleting property of person person obejct

delete person.city;

console.log("city" in person); //return boolean value

//Defining global function 

function printInfo(){
    console.log("Name : "+person.name+"\tAge : "+person.age+" Gender : "+person.gender+"\tWeight : "+person.weight)

}
//Creating new method property  which refers to global function

person.show=printInfo 

//calling method of person oject 

person.show()
