const express = require("express");
const mongoose = require("mongoose");
const connectToMongoDb = require("./dbconfig/db_connect");
const Product = require("./models/product_model");
const productRouter = require("./controllers/product_controller");

const app = express();
connectToMongoDb();

app.use("/api/products", productRouter);

app.listen(process.env.PORT, () => {
  console.log("Product web service started on port no : " + process.env.PORT);
});
