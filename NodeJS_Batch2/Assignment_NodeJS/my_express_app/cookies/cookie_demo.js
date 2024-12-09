const express = require("express");

const cookieParser = require("cookie-parser");

const app = express();

app.use(cookieParser()); //using cookie parser middleware

app.get("/person", (req, res) => {
  // Set a cookie with a key "name" and a value "John Doe"
  res.cookie("name", "John Doe");
  res.cookie("email", "abhayrpanchal@gmail.com", {
    expires: new Date(Date.now() + 60 * 60 * 1000),
  });
  res.cookie("phoneNo", 9146334963, { maxAge: 15000 });

  res.send("Hello, World!");
});

app.get("/get-cookies", (req, res) => {
  // Read the cookies from the request object
  console.log("Cookies:", req.cookies);
  res.send("Cookies received!");
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
