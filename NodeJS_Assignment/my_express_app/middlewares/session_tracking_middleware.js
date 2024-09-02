const express = require("express");

const session = require("express-session");

const app = express();

//using express-session middleware which provides built-in session object
app.use(
  session({
    secret: "Fckjls54455@#%fkjkdl*(M",
    resave: false,
    saveUninitialized: true,
  })
);

app.get("/hello", (req, res) => {
  if (req.session.pageViews) {
    //if session is already running , then update session property

    req.session.pageViews++;
    console.log(`Session ID : ${req.session.id}`);

    res.send(`You visited this page ${req.session.pageViews} times.`);
  } else {
    //if session is not started yet , the start it
    //create new property named pageViews in session
    //initialize session property
    req.session.pageViews = 1;
    console.log(`Session ID : ${req.session.id}`);
    res.send("Welcome user you are visiting this page first time");
  }
});

app.listen(4000, () => {
  console.log("Session express server started on port no 4000");
});
