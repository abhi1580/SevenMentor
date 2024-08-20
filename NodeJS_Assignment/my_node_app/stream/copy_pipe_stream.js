const fs=require("fs")

const readableStream=fs.createReadStream("../files/hello.txt")
const writableStream=fs.createWriteStream("../files/hello1.txt")
readableStream.on("error",err=>console.log(err.stack))
writableStream.on("error",err=>console.log(err.stack))

//piping operation 
//reading data from radable stream and writing data to writable stream

readableStream.pipe(writableStream)
console.log("Data is copied successfully")