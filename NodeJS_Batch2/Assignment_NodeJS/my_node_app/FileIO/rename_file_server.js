const http = require("http");

const fs = require("fs");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  fs.rename("../files/demo.txt", "../files/renamedFile.txt", (err) => {
    if (err) {
      res.write(
        "<h2>Error occurred file does not exist or path is incorrect</h2>"
      );
    } else {
      res.write("<h2>Renamed File Successfully</h2>");
    }

    res.end();
  });
});

server.listen(4000, () => {
  console.log("File IO server started on port no 4000");
});
