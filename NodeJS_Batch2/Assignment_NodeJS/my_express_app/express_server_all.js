const express = require("express");

const app = express();

app.use(express.json());

app.all("/welcome", (req, res) => {
  res.json({ message: "Welcome to the server app!" });
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
