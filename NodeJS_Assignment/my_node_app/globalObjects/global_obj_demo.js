console.log("Current file path = ",__filename)
console.log("Current Directory name = ",__dirname)


//set the timeout or delay 

const timeout=setTimeout(function() {
    console.log("This code will be executed after the delay ")
}, 2000);

//clear the timeout
// clearTimeout(timeout)

//set the time interval (executes unlimited times)
const intervalTime =setInterval(() => {
    console.log("Play")
}, 1000);

// clearInterval(intervalTime)
console.log(intervalTime)

setTimeout(() => {
    clearInterval(intervalTime)
}, 6000);