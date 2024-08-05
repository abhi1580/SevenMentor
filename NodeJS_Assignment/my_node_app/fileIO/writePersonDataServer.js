const http = require("http");
const url = require("url");
const fs = require("fs");

//create new http server
const server = http.createServer(function (req, res) {
  if (req.url != "/favicon.ico") {
    res.writeHead(200, { "Content-Type": "text/html" });
    //to get query parameter
    const q = url.parse(req.url, true).query;

    //retrieve query string from request url
    //http://localhost:4000/?day=12&month=07&year=2024
    const data = `Name: ${q.name} Surname: ${q.surname} Email: ${q.email} `;
    fs.writeFile("../files/PersonData.doc", data, (err) => {
      if (err) throw err;
      console.log("Person added into the file");
      res.write(data);
    });
  }
  res.end();
});

//configure server to run on port no

server.listen(4000, function () {
  console.log("Server started on port no 4000");
});
