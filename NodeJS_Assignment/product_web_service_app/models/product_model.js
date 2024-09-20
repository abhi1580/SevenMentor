const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  model: { type: String, required: true },
  price: Number,
});
const Product = mongoose.model("Product", productSchema);

module.exports = Product;
