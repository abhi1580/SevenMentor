const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res) => {
  if (req.url != "/favicon.ico") {
    res.writeHead(200, { "content-type": "text/html" });

    //rename file
    fs.rename("../files/hello.txt", "../files/HelloRenamed.txt", (err) => {
      if (err) {
        res.write("<h2>Sorry something went wrong. Please try again!</h2>");
      } else {
        res.write("File is renamed as HelloRenamed successfully");
      }
      return res.end();

    });
  }
});

server.listen(4000, () => {
  console.log("Rename server is started on port no 4000");
});
