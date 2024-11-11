const http = require("http");
const url = require("url");
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  if (req.url != "/favicon.ico") {
    const q = url.parse(req.url, true).query;
    console.log(q.info);
    fs.writeFile("../files/data.txt", q.info, (err) => {
      if (err) throw err;
      return res.end("Data is saved");
    });
    
  }
});
server.listen(4200, () => {
  console.log("Write file param server is running on port no 4600");
});
