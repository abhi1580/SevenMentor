const http = require("http");
const fs = require("fs");

const server = http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    const data =
      "this data is written using write file server please check the file content";
    fs.writeFile("./files/writeFile.txt", data, (err) => {
      if (err) throw err;
    });
    res.write("data is written to the file please check ");
    res.end();
  })
  .listen(4000, () => {
    console.log("Write server started on port no 4000");
  });
