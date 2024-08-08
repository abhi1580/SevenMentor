const e = require("events");

//create event emitter object

const eventemi = new e.EventEmitter();

//create event handler or event listener function

function helloEventHandler() {
  console.log("Yes I can hear Hello event");
}

// bind event handler function to and event "Hello"
eventemi.on("Hello", helloEventHandler);

//trigger or generate an event "Hello"
eventemi.emit("Hello");
