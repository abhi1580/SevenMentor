const http = require("http");

const fs = require("fs");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  fs.unlink("../files/demo.txt", (err) => {
    if (err) {
      res.write("Error occurred file does not exist or path is incorrect");
    } else {
      res.write("Deleted File Successfully");
    }

    res.end();
  });
});

server.listen(4000, () => {
  console.log("File IO server started on port no 4000");
});
