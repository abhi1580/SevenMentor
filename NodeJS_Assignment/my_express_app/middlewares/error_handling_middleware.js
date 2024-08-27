const express = require("express");

const app = express();
//request handler which throws the server error
app.get("/hi", (req, res) => {
  throw Error("Server error");
});
//error handling middleware
app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});

app.listen(4000, () => {
  console.log("Express server started on port no 4000");
});
