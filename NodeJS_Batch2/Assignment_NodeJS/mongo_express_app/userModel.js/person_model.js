const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: { type: Number, default: 0 },
  gender: String,
});

const Person = mongoose.model("Person", personSchema); //creating the model as Person

module.exports = Person;
