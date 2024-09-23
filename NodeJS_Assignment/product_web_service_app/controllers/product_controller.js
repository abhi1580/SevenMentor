const express = require("express");
const cors = require("cors");
const Product = require("../models/product_model");

const productRouter = express.Router();

productRouter.options("/all", cors());

//get all the products
productRouter.get("/all", cors(), async (req, res) => {
  const products = await Product.find();
  res.status(200).send(products);
  //   res.status(200).json(products);
});

//create new product document in the collection
productRouter.post("/add", express.json(), async (req, res) => {
  const { name, brand, model, price } = req.body;

  const product = new Product({
    name: name,
    brand: brand,
    model: model,
    price: price,
  });

  await product.save();

  res
    .status(200)
    .json({ message: `New product ${brand} ${name} added successfully` });
});

//update the product price
productRouter.put("/update/product", express.json(), async (req, res) => {
  const { name, brand, model, price } = req.body;

  await Product.updateOne(
    { name: name, brand: brand, model: model },
    { $set: { price: price } }
  );
  res.status(200).json({
    message: `Product ${brand} ${name} is updated successfully`,
  });
});

//delete the product
productRouter.delete("/delete-product", express.json(), async (req, res) => {
  const { name, brand, model, price } = req.body;
  await Product.deleteOne({
    name: name,
    brand: brand,
    model: model,
    price: price,
  });
  res.status(200).json({
    message: `Product ${brand} ${name} is deleted successfully`,
  });
});

module.exports = productRouter;
