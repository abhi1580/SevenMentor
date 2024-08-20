const express = require("express");

const app = express();

//processing request using GET method
app.get("/hello", (req, res) => {
  res.send("Hello using GET");
});

//processing request using POST method
app.post("/hello", (req, res) => {
  res.send("Hello using POST");
});

//processing request using PUT method
app.put("/hello", (req, res) => {
  res.send("Hello using PUT");
});

//processing request using DELETE method
app.delete("/hello", (req, res) => {
  res.send("Hello using DELETE");
});

app.listen(4000, () =>
  console.log("HTTP mehtod demo server started on port no 4000")
);
