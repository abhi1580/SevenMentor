const express = require("express");

const app = express();

app.use(express.static("../public"));
app.use("/static", express.static("../public"));
app.use("/data", express.static("../files"));

app.listen(4000, function () {
  console.log("Server is running on port 4000");
});
