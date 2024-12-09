const express = require("express");
const session = require("express-session");

const app = express();

//using express-session middleware
app.use(
  session({
    secret: "FjsjkjkjT75@",
    resave: false,
    saveIninitialized: true,
  })
);
app.get("/hello", (req, res) => {
  if (req.session.views) {
    //if existing session
    req.session.views++;
    console.log(`Session ID of existing session: ${req.session.id}`);

    res
      .status(200)
      .send(
        "Welcome back! You visited this page " + req.session.views + " times"
      );
  } else {
    //if new session, create pageViews property and store it in session
    req.session.views = 1;
    console.log(`Session ID of new session: ${req.session.id}`);
    res.status(200).send("Welcome to this page for the first time!");
  }
});
app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
