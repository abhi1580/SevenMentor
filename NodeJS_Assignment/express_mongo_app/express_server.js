const express = require("express");
const mongoose = require("mongoose");
const connectToMongoDB = require("./dbconfig/db_connect");
const Person = require("./models/Person");
const app = express();

connectToMongoDB();
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
// Person.find()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log(err));

//find data based on condition
// Person.find({ age: { $gt: 20 } })
// Person.find({ name: { $eq: "Hritik Roshan" } })
// Person.find({ gender: "Male" })
/* Person.find({ gender: { $eq: "Female" } })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.error(err)); */

//Updating the documnet as per the criteria
// Person.updateOne({ age: 0 }, { $set: { age: 27 } })
//   .then((result) => console.log(result))
//   .catch((err) => console.error(err));

//Delete the document as per criteria

Person.deleteOne({ name: "Hritik Roshan" })
  .then((result) => console.log(result))
  .catch((err) => console.error(err));

app.listen(process.env.PORT, () => {
  console.log("Express app server started on port no. " + process.env.PORT);
});
