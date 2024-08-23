const express = require("express");
// import model function
const calculateSimpleInterest = require("../models/interest_calci");

//get router object from express
const interest_router = express.Router();

//configure routes with routes params
interest_router.get("/account/:principal/:duration/:rate", (req, res) => {
  //fetching request params values
  const principalAmt = req.params.principal;
  const dur = req.params.duration;
  const rate = req.params.rate;
  //call business logic method
  const interestAmount = calculateSimpleInterest(principalAmt, dur, rate);

  //send models or business logic result as http response
  res.send(`<h2>Principal Amount :${principalAmt}</h2>
    <h2>Duraion in Years :${dur}</h2>
    <h2>Rate of Interest :${rate}%</h2>
    <hr>
    <h1>Interest Amount : &#8377; ${interestAmount}</h1>`);
});

module.exports = interest_router;
