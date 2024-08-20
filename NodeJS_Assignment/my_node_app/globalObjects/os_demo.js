const os=require('os')
//Type of operating system 
console.log("OS type : ",os.type())

//Architecture of operating system 
console.log("OS architecture : ",os.arch())

//Platform of operating system 
console.log("OS Platform : ",os.platform())

//Release of operating system 
console.log("OS Release : ",os.release())

//machine name of operating system 
console.log("OS machine name : ",os.machine())


console.log("OS Hostname : ",os.hostname())
console.log("OS home directory : ",os.homedir())
console.log("CPU's : ",os.cpus())

for(let cpu of os.cpus())
    console.log("CPU model : "+cpu.model+ "CPU Speed "+cpu.speed)

