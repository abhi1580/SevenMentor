const mongoose = require("mongoose");

require("dotenv").config();
const DBURL = process.env.DBURL;

function connectDB() {
  //asynchronuously connect
  mongoose
    .connect(DBURL)
    .then(() => console.log("Connected to database"))
    .catch((err) => console.log(err));
}

module.exports = connectDB;
