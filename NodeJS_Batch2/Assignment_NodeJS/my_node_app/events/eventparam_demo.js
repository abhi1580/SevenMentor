const EventEmitter = require("events");
const http = require("http");

const server = http.createServer((req, res) => {
  const eventEmitter = new EventEmitter();

  eventEmitter.on("Count", (start, end) => {
    return res.end(`Counting form ${start} to ${end}`);
  });
  //trigger event count
  eventEmitter.emit("Count", 100, 200);
});
server.listen(4000, () => {
  console.log("Event parameter server started on port no 4000");
});
