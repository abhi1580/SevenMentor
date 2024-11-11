const http = require("http");
const e = require("events");

const server = http.createServer((req, res) => {
  const eventEmitter = new e.EventEmitter();
  //create event hanlder function
  function handleHello() {
    console.log("Yes I can hear Hello event ");
    return res.end("Hello event is triggerred and handled ");
  }
  //bind event handler function to an event
  eventEmitter.on("Hello", handleHello);

  //trigger event "Hello"
  eventEmitter.emit("Hello");
});

server.listen(4000, () => {
  console.log("Event node server is running on port no 4000");
});
