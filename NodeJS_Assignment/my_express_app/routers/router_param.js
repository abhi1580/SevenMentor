const express = require("express");
const router = express.Router();

router.get("/profile/:name/:age/:gender", (req, res) => {
  res.send(
    `Dear  ${req.params.name}, you are ${req.params.gender} of ${req.params.age} years old.`
  );
});

//route params with with pattern or regular expression
router.get("/contact/:mobileNo([0-9]{10})", (req, res) => {
  const mobileNo = req.params.mobileNo;
  res.send(`Your contact no is : ${mobileNo}`);
});

router.get("*", (req, res) => {
  res.send("Requested URL not Found");
});

module.exports = router;
