const express = require("express");

const app = express();
//set PUG as templeting engine with express
app.set("view engine", "pug");

//set views folder which contains all PUG files to be served to the clients
app.set("views", "../views");

app.get("/", (req, res) => {
  //render the pug template with data
  res.render("index", {
    title: "Welcome to Express PUG Server",
    message: "Hello, World!",
  });
});

app.get("/signin", (req, res) => {
  //render the pug template with data
  res.render("login", {
    title: "Sign In",
    message: "Please sign in",
  });
});

app.listen(4000, () => {
  console.log("Express PUG Server is running on port 4000");
});
