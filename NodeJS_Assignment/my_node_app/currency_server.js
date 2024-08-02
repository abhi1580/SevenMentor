//import built-in modules
const http = require("http");
const url = require("url");

//import user defined module
const {converInrtoUsd,convertInrtoJpy }= require("./currency_converter");
//create own http node server

const server = http.createServer(function (req, res) {
  //request processing logic on server side
  //accepting cliednt request using http protocol
  //calling business logic to process request
  //generating response as per business logic
  //sending http response to the client
  res.writeHead(200, { "Content-Type": "text/html" });

  //parsing query parameter as a part of http request
  const q = url.parse(req.url, true).query;

  //calling server side business logic
  const usd = converInrtoUsd(q.inr); //q.inr- inr is query parameter
  const jpy=convertInrtoJpy(q.inr)
  //sending business logic result to a part of http request
  res.write(`<h2>INR : ${q.inr} = USD ${usd} </h2>`);
  res.write(`<h2>INR : ${q.inr} = JPY ${jpy} </h2>`);
  res.end();
});

//configure http server to listen on some port

server.listen(4200, () => {
  console.log("Currency server started on port 4200");
});
