const mongoose = require("mongoose");
const dotenv = require("dotenv");

const connectToMongoDb = () => {
  dotenv.config();

  mongoose
    .connect(process.env.DB_URL)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error(err));
};

module.exports = connectToMongoDb;
    