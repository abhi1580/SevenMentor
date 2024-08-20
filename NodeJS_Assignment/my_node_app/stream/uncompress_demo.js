const fs=require("fs")
const zlib=require("zlib")

fs.createReadStream("../files/data.txt.gz")//reading compressed file
.pipe(zlib.createGunzip())//uncompressing file
.pipe(fs.createWriteStream("../files/YourData.txt")) //writing uncompressed data

console.log("Data uncompressed successfully")