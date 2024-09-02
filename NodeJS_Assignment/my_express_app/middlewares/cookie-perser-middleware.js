const express = require("express");

const cookiePrser = require("cookie-parser");

const app = express();

//uisng cookie parser middleware

app.use(cookiePrser());

app.get("/hello", (req, res) => {
  //create and set the cookie
  res.cookie("personName", "Abhay Panchal");
  res.cookie("email", "abhayrpanchal2@gmail.com", {
    expires: new Date(Date.now() + 60 * 60 * 1000),
  }); //1 hr from cookie sent time
  res.cookie("contact:", "abhayrpanchal@9146334963.com", { maxAge: 15000 }); //15 seconds
  res.send(`Hello cookie demo`);
});

app.get("/welcome", (req, res) => {
  const allCookies = req.cookies;
  console.log(allCookies);
  const personName = allCookies.personName;
  console.log(personName);
  const emailAddress = allCookies["email"];
  res.send(`Welcome ${personName} your email id ${emailAddress}`);
});

app.listen(4000, () => {
  console.log("Cookie parser web app started on port no 4000");
});
