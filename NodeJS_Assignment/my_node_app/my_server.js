//import built in http module

const http = require("http");

//create your own http server

const server = http.createServer(function (request, response) {
  //accepting request from client
  //http request processing logic
  //http response generation logic

  //sending response to client
  response.write("Hello world from http node server"); // generating http response
  response.end(); //ending response
});

//configure http server to run on port
server.listen(4000); //this htp server run on 4000 port number
