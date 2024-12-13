const express = require("express");
const Product = require("../models/product");
const product_Router = express.Router();
//for applying cors middleware to specific routes
// product_Router.options("/all", cors());
// product_Router.options("/add-product", cors());
//get all products rest api
product_Router.get("/all", async function (req, res) {
  const products = await Product.find({});

  res.json(products);
});

//create a product
product_Router.post("/add-product", async function (req, res) {
  const { name, brand, price } = req.body;
  const product = new Product({
    name: name,
    brand: brand,
    price: price,
  });

  await product.save();
  res.status(201).json({ message: "Product saved successfully" });
});

//update a product
product_Router.put("/update-product/:id", async function (req, res) {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(201).json({ message: "Product updated successfully" });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
});

//delete a product
product_Router.delete("/delete-product/:id", async function (req, res) {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    res.status(201).json({ message: product.name + " is deleted" });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
});

module.exports = product_Router;
