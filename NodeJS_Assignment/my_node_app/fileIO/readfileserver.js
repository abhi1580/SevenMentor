const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  //reading data from file using fs module

  fs.readFile("../files/hello.txt", (err, data) => {
    if (err) throw err;
    res.write(`<p>${data}</p>`);
    return res.end();
  });
});

server.listen(4000, () => {
  console.log("File server is started on port no 4000");
});
