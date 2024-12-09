const express = require("express");

const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({ extended: false }));

router.post("/product", function (req, res) {
  const formData = req.body;
  console.log(formData);
  res.status(200).send(formData);
});

router.post("/car", function (req, res) {
  const formData = req.body;
  const { model, brand, price } = formData;
  console.log("Brand of car: " + brand);
  console.log("Model of car: " + model);
  console.log("Price of car: \u20B9" + price);

  res.status(200).send(formData);
});

module.exports = router;
