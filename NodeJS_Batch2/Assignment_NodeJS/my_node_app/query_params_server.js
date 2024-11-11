const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  const q = url.parse(req.url, true).query;
  res.write(q.day + "/" + q.month + "/" + q.year);
  res.end();
});

server.listen(4000, () => {
  console.log("Query params node js server started on port no 4000");
});
