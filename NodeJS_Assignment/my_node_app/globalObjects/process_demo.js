//process id of node 
console.log("Process ID : ",process.pid)
//os architecture
console.log("Platform Architecture : ",process.arch)
//platform that is OS
console.log("Platform : ",process.platform)
//Release of node 
console.log("Release : ",process.release)
//noe version
console.log("Version : ",process.version)
//memory usage
console.log("Process Usage : ",process.memoryUsage())

console.log(process.argv)

// for(let i in process.argv)
//     console.log(process.argv[i])

for(let arg of process.argv)
    console.log(arg)

let num1=Number(process.argv[2])
let num2=Number(process.argv[3])

let res=num1+num2

console.log("Result = ",res)

process.on("exit",(code)=>{
    console.log("Process is exited with status code : ",code)
})
