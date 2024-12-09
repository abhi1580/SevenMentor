const express = require("express");

const router = express.Router();

router.use((req, res, next) => {
  console.log(`Request received at ${new Date()}`);
  next();
});

router.get("/profile/:id", (req, res, next) => {
  if (req.params.id === "0") {
    console.log(`Id ${req.params.id} is not allowed`);
    next("router"); //skipping next middleware in chain
  } else {
    res.send(`Id ${req.params.id} is  allowed`);
    next();
  }
});
router.use((req, res, next) => {
  console.log(`Response received at ${new Date()}`);
  next();
});

module.exports = router;
