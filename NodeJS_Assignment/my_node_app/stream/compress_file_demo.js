const fs=require("fs")
const zlib=require("zlib")

fs.createReadStream("../files/hello.txt")//reading data
.pipe(zlib.createGzip()) //compressing data
.pipe(fs.createWriteStream("../files/data.txt.gz"))//creating compressed file

console.log("file is compressed successfully")