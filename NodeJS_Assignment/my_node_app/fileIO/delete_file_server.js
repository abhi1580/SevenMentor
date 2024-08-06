const http = require("http");
const fs = require("fs");

const server = http
  .createServer((req, res) => {
    if (req.url != "/favicon.ico") {
      res.writeHead(200, { "Content-Type": "text/html" });
      //deleting a file from server
      fs.unlink("../files/hello.txt", (err) => {
        if (err) throw err;
        console.log("File is deleted");
        return res.end();
      });
      // fs.unlink("../files/hello.txt", (err) => {
      //     if (err) res.write("Error occured. File is deleted already"); //if file is already deleted then server wili not crash
      //     else res.write("File is deleted");
      //     return res.end();
      //   });
    }
  })
  .listen(4000, () => {
    console.log("Delete file server started on port no 4000");
  });
