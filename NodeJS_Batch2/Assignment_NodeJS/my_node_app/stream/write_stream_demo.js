const fs = require("fs");

const data = "Let's learn Data Streaming Writing Operation";

const writableStream = fs.createWriteStream("../files/result.txt");
writableStream.write(data, "utf-8");
writableStream.end();

//handle stream events

writableStream.on("finish", () => {
  console.log("Writing data to stream finished");
});

writableStream.on("error", (err) => {
  console.log(err.stack);
});
