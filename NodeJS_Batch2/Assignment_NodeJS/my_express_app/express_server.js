const express = require("express");
const os = require("os");
const app = express();

app.use(express.json());

app.get("/hello", (req, res) => {
  res.header("Content-Type", "application/json");
  res.json({ message: "Hello, from GET method!" });
});
app.post("/hello", (req, res) => {
  res.json({ message: "Hello, from POST method!" });
});
app.delete("/hello", (req, res) => {
  res.json({ message: "Hello, from DELETE method!" });
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
