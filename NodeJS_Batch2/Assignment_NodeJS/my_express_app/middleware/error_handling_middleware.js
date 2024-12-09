const express = require("express");

const app = express();
app.get("/hello", function (req, res) {
  throw Error("Server error");
});

app.use(function (err, req, res, next) {
  res.status(500).send(err.message);
});

app.listen(4000, function () {
  console.log("Server is running on port 4000");
});
