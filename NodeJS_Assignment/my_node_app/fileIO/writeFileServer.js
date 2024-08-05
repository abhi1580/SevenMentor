const http = require("http");
const fs = require("fs");
const data = `Pune is the educational hub of India.\nPune is the cultural capital of Maharashtra.`;

const server = http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    //writing data to new file
    fs.writeFile("../files/Demo.txt", data, (err) => {
      if (err) throw err;
      console.log("Data is saved");
      res.write(`<p>Your data is written</p>`);
      return res.end();
    });
  })
  .listen(4000, () => {
    console.log("Write file server started on port no 4000");
  });
