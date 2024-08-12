const b = Buffer.alloc(20);

console.log(`Size of buffer B = ${b.length}`);

const noOfBytesWritten = b.write("Hello World!");

console.log(`No of bytes written : ${noOfBytesWritten}`);

//reading from buffer data which wad written to buffer
let data = b.toString();
console.log(`Data : ${data}`);

//starts reading from 5th byte till the end
data = b.toString("utf-8", 5);
console.log(`Data : ${data}`);

//starts reading from 5th byte till the 7th byte
//start index 5 (inclusive) and end index 8 (exclusive)
data = b.toString("utf-8", 5, 8);
console.log(`Data : ${data}`);
