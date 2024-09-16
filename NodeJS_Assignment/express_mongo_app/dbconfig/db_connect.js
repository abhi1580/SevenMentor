const mongoose = require("mongoose");
const dotenv = require("dotenv");

function connectTOMongoDB() {
  //read environment variable from .env file
  //and load them in process.env object
  dotenv.config();
  //establish connection to mongodb server - asynchronous API
  mongoose
    .connect(process.env.DB_URL)
    .then(() => console.log("Connected to MOngoDB Server"))
    .catch((err) => console.log(err));
}
//export function
module.exports = connectTOMongoDB;
