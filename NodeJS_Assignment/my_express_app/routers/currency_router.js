//import express js

const express = require("express");
const convertCurrency = require("../models/currency_converter");

//creating router using express

const currencyRouter = express.Router();

currencyRouter.get("/currency/:inrAmount", (req, res) => {
  const inrAmount = req.params.inrAmount;

  const convertedValues = convertCurrency(inrAmount);
  res.setHeader("Content-Type", "text/html");

  const htmlResponse = convertedValues
    .map((c) => `<h2>${c.currency} : ${c.convertedAmount}</h2>`)
    .join("");

  // Send the concatenated HTML string
  res.send(htmlResponse);
});

module.exports = currencyRouter;
