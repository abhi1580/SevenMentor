//import built in http module

const http = require("http");

//create your own http server

const server = http.createServer(function (request, response) {
  //accepting request from client
  //http request processing logic
  //http response generation logic

  console.log(request.url)  
  //sending response to client
  response.writeHead(200,{'Content-Type':'text/html'})
  response.write("Hello world from http node server"); // generating http response
  response.write(request.url)
response.end(); //ending response
});

//configure http server to run on port
server.listen(4000,function(){
  console.log("HTTP server started on port 4000")
}); //this http server run on 4000 port number
