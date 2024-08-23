const express = require("express");
const router = express.Router();

router.get("/profile/:name/:age/:gender", (req, res) => {
  res.send(
    `Dear  ${req.params.name}, you are ${req.params.gender} of ${req.params.age} years old.`
  );
});

module.exports = router;
