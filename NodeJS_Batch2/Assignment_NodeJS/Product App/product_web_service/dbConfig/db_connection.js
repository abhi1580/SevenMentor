const mongoose = require("mongoose");

const dotenv = require("dotenv");

module.exports = function connectToDB() {
  dotenv.config();
  mongoose
    .connect(process.env.DB_URL)
    .then(() => {
      console.log("MongoDB Connected...");
    })
    .catch((err) => console.error(err));
};
