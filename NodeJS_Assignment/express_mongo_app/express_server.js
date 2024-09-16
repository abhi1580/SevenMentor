const express = require("express");
const mongoose = require("mongoose");
const connectTOMongoDB = require("./dbconfig/db_connect");
const Person = require("./models/Person");
const app = express();

connectTOMongoDB();
//database operations
//insert new person document
// const person = new Person({
//   name: "Achal Deepak Hiware",
//   age: 24,
//   gender: "Female",
// });

//insert person object as mongodb documnet - asynchronous api
// person
//   .save()
//   .then(() => console.log("Document inserted successfully"))
//   .catch((err) => console.error(err));

//inserting multiple person objects as mongodb documents
// Person.insertMany([
//   {
//     name: "Shubham Panchal",
//     gender: "Male",
//   },
//   {
//     name: "Mayuri Panchal",
//     age: 26,
//     gender: "Female",
//   },
//   {
//     name: "Hritik Roshan",
//     age: 48,
//     geneder: "Male",
//   },
// ])
//   .then(() => console.log("Data is saved in database successfully"))
//   .catch((err) => console.log(err));

//find all the person documents
Person.find({ name: "Abhay Rameshrao Panchal" })
  .then((data) => {
    console.log(data);
  })
  .then((err) => console.log(err));

app.listen(process.env.PORT, () => {
  console.log("Express app server started on port no. " + process.env.PORT);
});
