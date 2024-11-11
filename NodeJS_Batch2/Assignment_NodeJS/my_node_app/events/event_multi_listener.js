const http = require("http");
const events = require("events");

const eventEmitter = new events.EventEmitter();

eventEmitter.on("Hello", function first() {
  console.log("Hello from first function");
});
eventEmitter.on("Hello", function second(name, surname) {
  console.log(`Hello ${name} ${surname} from second function`);
});

eventEmitter.emit("Hello", "Abhay", "Panchal");
