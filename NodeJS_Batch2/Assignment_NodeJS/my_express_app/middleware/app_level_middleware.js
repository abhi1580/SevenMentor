const express = require("express");

const app = express();
//defining and using app-level-middleware function
app.use(function (req, res, next) {
  console.log(`Request received at ${Date.now()}`);
  next(); //forward request to next middleware in the chain or intended request handler
});
//app-level request handler
app.get("/", function (req, res, next) {
  res.send("Hello, World!");
  next(); //cals post processor middleware if any
});

//request post processor middleware

app.use(function (req, res, next) {
  console.log(`Response is sent at ${Date.now()}`);
});
app.listen(4000, () => console.log("listening on port no 4000"));
