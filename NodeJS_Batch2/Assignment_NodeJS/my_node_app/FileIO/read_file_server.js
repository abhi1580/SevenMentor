const http = require("http");

const fs = require("fs");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  fs.readFile("../files/demo.txt", (err, data) => {
    if (err) {
      throw err;
    } else {
      res.write(data);
      res.end();
    }
  });
});

server.listen(4000, () => {
  console.log("File IO server started on port no 4000");
});
