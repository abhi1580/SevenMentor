const express = require("express");
const connectDB = require("./dbConfig/database");
const Person = require("./userModel.js/person_model");
const app = express();
app.use(express.json());
connectDB();

app.get("/welcome", (req, res) => {
  res.json({ message: "Welcome to the server app!" });
});

// // const object of person model
// const person = new Person({
//   name: "Abhay Panchal",
//   age: 19,
//   gender: "Male",
// });
// //save person entity asynchronously
// person
//   .save()
//   .then(() => {
//     console.log("Person saved Successfully");
//   })
//   .catch(() => {
//     console.log("Person not saved");
//   });

// //inssert many person
// Person.insertMany([
//   {
//     name: "Ravi",
//     age: 20,
//     gender: "Male",
//   },
//   {
//     name: "Suresh",
//     age: 21,
//     gender: "Male",
//   },
//   {
//     name: "Mahesh",
//     age: 22,
//     gender: "Male",
//   },
// ])
//   .then((response) => console.log("All data saved"))
//   .catch((err) => console.log("Error while saving data"));

//
// Person.find({ name: { $regex: /^M/ } })
// Person.find({ age: { $gt: 20 } })
//   .then((data) => console.log(data))
//   .catch((err) => {
//     console.error(err);
//   });

//update person
// Person.updateOne({ name: "Mahesh Kale" }, { $set: { age: 30 } })
//   .then((result) => console.log(result))
//   .catch((err) => console.error(err));
// Person.deleteOne({ name: "Mahesh Kale" })
//   .then((result) => console.log(result))
//   .catch((err) => console.error(err));
app.listen(process.env.PORT, function () {
  console.log("Server is running on port 4000");
});
