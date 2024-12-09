const express = require("express");
const bodyParser = require("body-parser");
const bpRouter = express.Router();
const app = express();

bpRouter.post("/person", bodyParser.json(), (req, res) => {
  const reqData = req.body;
  console.log(reqData);
  res.status(200).send(reqData);
});

bpRouter.post(
  "/product",
  bodyParser.urlencoded({ extended: false }),
  (req, res) => {
    const productData = req.body;
    const { name, brand } = productData;
    console.log(name);
    console.log(brand);
    console.log(productData);
    res.status(200).send(productData);
  }
);

module.exports = bpRouter;
