const fs = require("fs");

let data = "";

//reading data from readable stream
const readableStream = fs.createReadStream("../files/data.txt");
//handle stream events
readableStream.on("data", (chunk) => {
  data += chunk;
});

readableStream.on("end", () => {
  console.log(data);
});

//error handler
readableStream.on("error", (err) => {
  console.log(err.stack);
});
