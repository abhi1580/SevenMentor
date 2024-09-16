const mongoose = require("mongoose");

//create person document structure (Schema) using mongoose api

const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, default: 0 },
  gender: String,
});

//create model class from schema
const Person = mongoose.model("Person", personSchema);

module.exports = Person;
