const fs = require("fs");

let data = "";

const readableStream = fs.createReadStream("../files/hello.txt");

//bind event handler function to "data" event of stream

readableStream.on("data", (chunk) => {
  data += chunk;
});

//bind event handler functioon to end event of stream
readableStream.on("end", () => {
  console.log(data);
});

//bind event handler function to error event of stream

readableStream.on("error", (err) => {
  console.log(err.stack);
});
