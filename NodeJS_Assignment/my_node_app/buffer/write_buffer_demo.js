//allocating 10 bytes of memory
const b = Buffer.alloc(10);
console.log(`Size of buffer B = ${b.length}`);

//writing data to the buffer
let noOfBytesWritten = b.write("Hello");
console.log(`No of bytes written = ${noOfBytesWritten}`);
console.log(`Size of the buffer = ${b.length}`);
let data = b.toString();
//reading data from buffer
console.log("Data written : ", data);

let offset=noOfBytesWritten

//Using offset skip 7 bytes in buffer and start writing from 8th byte
// const noOfBytesWritten=b.write("Hello",7)

//Using offset skip 7 bytes,start writing from 8th byte and write only 2 byte of data
// const noOfBytesWritten=b.write("Hello",7,2)

//Using offset skip 7 bytes,start writing from 8th byte and write only 2 byte of data with some encoding
// noOfBytesWritten = b.write("Hello", 7, 2, "utf-8");
//writing data to the buffer
noOfBytesWritten=b.write("Bye",offset)

console.log(`No of Bytes written : ${noOfBytesWritten}`);

//reading data from buffer
data = b.toString();
console.log("Data written : ", data);
console.log(`Size of buffer B = ${b.length}`);