//import built-in http module
const http = require("http");

//create your own http server
const server = http.createServer((req, res) => {
  //http request processing logic on server side
  //http response generation logic on server side
  res.writeHead(200, { "Content-Type": "text/html" }); //writing response to the client
  res.write("<h3>Hello world</h3>"); //writing response tto the client
  // res.write(req.url);

  res.end(); //committing the http response
});
//configure your own http server to listen to on port number
server.listen(4000, () => {
  console.log("HTTP Node Server is started and listening on port 4000");
});
