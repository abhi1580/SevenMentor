const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  info = "Pune is educational hub in Maharashtra";
  fs.writeFile("../files/demo.txt", info, (err) => {
    if (err) {
      throw err;
    } else {
      res.write(`<h2>Data is successfully saved</h2>`);
      console.log(`<h2>Data is saved</h2>`);
      return res.end();
    }
  });
});

server.listen(4500, () => {
  console.log("Write file server is running on port no 4000");
});
