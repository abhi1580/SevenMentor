const express = require("express");
const jwt = require("jsonwebtoken");

const secretKey = "jhsdh3434HFH@Kjdfk$ksHGS&NM";

const app = express();

//server data object to be aunthenticated and authorized
const user = {
  username: "abhay1580",
  password: "1234",
};

//request handler
app.get("/welcome", (req, res) => {
  //create jwt token and digitally sign the token
  //user object is the payload here meaning user object is to be accessed securely
  jwt.sign({ user }, secretKey, { expiresIn: "1000s" }, (err, token) => {
    if (err) {
      throw err;
    } else {
      res.json({ jwtToken: token, message: "Login Successful" });
    }
  });
});

//user defined middleware
function verifyJWTToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  if (authHeader) {
    const incomingReqToken = authHeader.split(" ")[1];

    if (incomingReqToken) {
      jwt.verify(incomingReqToken, secretKey, (err, payload) => {
        if (err) {
          res.status(201).json({
            errorMessage: "Invalid token",
          });
        } else {
          req.data = payload;
          next(); //calling next intended middleware or intended request handler
        }
      });
    } else {
      res.status(201).json({
        errorMessage: "Sorry secure token not found",
      });
    }
  } else {
    res.status(201).json({
      errorMessage: "Sorry authorization header not found",
    });
  }
}

//request handler

app.get("/profile", verifyJWTToken, (req, res) => {
  res.status(200).json({
    info: req.data,
  });
});

app.listen(4000, () => {
  console.log("Express server is running on port no : 4000");
});
