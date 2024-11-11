const http = require("http");

const fs = require("fs");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  const newInfo =
    "This is new information that will be append to existing data\n";
    fs.appendFile()
  fs.appendFile("../filesdemo.txt", newInfo, (err) => {
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
