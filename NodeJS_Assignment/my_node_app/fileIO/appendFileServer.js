const http = require("http");
const fs = require("fs");

const server = http
  .createServer((req, res) => {
    if(req.url!="/favicon.ico"){
    res.writeHead(200,{ "Content-Type":"text/html"});
    const data = `\nIndia is the great country. `;

    //appending data to the existing file
    fs.appendFile("../files/Demo.txt", data, (err) => {
      if (err) throw err;

      res.write(`<h2>Data is saved successfully</h2>`);
      return res.end();
    });
  }
  })
  .listen(4000, () => {
    console.log("Append file server started on port no 4000");
  });
