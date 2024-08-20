const fs = require("fs");

const data = "Lets learn streaming operation in node js";

const writeableStream = fs.createWriteStream("../files/hello1.txt");
writeableStream.write(data,"utf-8")
writeableStream.end()

//bind event hnadler function with "finish" event of writable stream
writeableStream.on("finish",()=>{
    console.log("Data is written successfully")
})
//bind event hnadler function with "error" event of writable stream
writeableStream.on("error",(err)=>{
    console.log(err.stack)
})

