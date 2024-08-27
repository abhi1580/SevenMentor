const express = require("express");

//import third party middleware : body parser

const bodyParser = require("body-parser");

//create express web-app object

const webApp = express();

webApp.use(bodyParser.json());//using json body parser middleware

webApp.use(bodyParser.urlencoded())//using form data body parser middleware
//accpets json data
webApp.post("/user", (req, res) => {
  //fetching request body data
  const clientUserName = req.body.username;
  const clientPassword = req.body.password;

  console.log(req);
  console.log(req.body);

  res.status(200).send(`Dear ${clientUserName} ,Welcome`);

  console.log("Client Username : " + clientUserName);
  console.log("Client Password : " + clientPassword);
});
//accepts form data
webApp.post("/profile-form", (req, res) => {
  // fetching form data
  const personName = req.body.name;
  const age = req.body.age;
  const gender = req.body.gender;

  res.status(200).send(`Hello ${personName} you are ${gender} of ${age} years`);
});
webApp.listen(4000, () => {
  console.log("Express server started on port no 4000");
});
