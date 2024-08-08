const http = require("http");
const fs = require("fs");

const server = http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });

    fs.readFile("./files/readFile.txt", (err, data) => {
      if (err) {
        res.write("Something went wrong. Please try again!");
      } else {
        res.write(data);
      }

      return res.end();
    });
  })
  .listen(4000, () => {
    console.log("Read file server started on port no 4000");
  });
