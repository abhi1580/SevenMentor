const express = require("express");

const router = express.Router();
//router level middleware
router.use(function (req, res, next) {
  console.log("Request received at : ", Date.now());
  next(); //calls next middleware in the chain or intended route handler
});
//route handlers
router.get("/welcome", function (req, res, next) {
  res.send("Welcome to the information page");
  next(); //calls next middleware in the chain or intended route handler
});

router.use(function (req, res, next) {
  console.log("Response received at : ", Date.now());
});

module.exports = router;
