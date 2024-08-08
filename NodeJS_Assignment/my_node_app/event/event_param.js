const EventEmitter=require("events")

//create vent emittor object 
const e= new EventEmitter()

//create event handler or event listener function 
//with event parameters a and b
const countEventHandler=(a,b)=>{
    const c=a+b
console.log("Addition is :",c)
}

//binding event handler or listener with event 
e.on("add",countEventHandler)

//trigger or generate add event with event parameter values 
e.emit("add",10,20)
e.emit("add",100,240)
e.emit("add",710,230)