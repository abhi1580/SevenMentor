const EventEmitter=require("events")

//create event emitter object 
const e=new EventEmitter()

//bind first event listener to an event 

e.on("Hello",function first(){
    console.log("This is first event listener")
})
//bind second event listener to an event 


e.on("Hello",function second(p1,p2){
    console.log(`Second event listener with event parameters ${p1} and ${p2}`)
})
//bind third event listener to an event 

e.on("Hello",function third(){
    console.log("Third event listener")
})
//generate or trigger an event 
e.emit("Hello","Abhay Panchal","abhayrpanchal@gmail.com")
e.emit("Hello","Achal Hiware","achalhiware@gmail.com")