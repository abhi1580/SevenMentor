const b=Buffer.alloc(10)
console.log(`Size of buffer B = ${b.length}`)

//writing data to the buffer 
// const noOfBytesWritten=b.write("Hello")

//Using offset skip 7 bytes in buffer and start writing from 8th byte
// const noOfBytesWritten=b.write("Hello",7)

//Using offset skip 7 bytes,start writing from 8th byte and write only 2 byte of data
// const noOfBytesWritten=b.write("Hello",7,2)

//Using offset skip 7 bytes,start writing from 8th byte and write only 2 byte of data with some encoding

const noOfBytesWritten=b.write("Hello",7,2,'utf-8')


console.log(`No of Bytes written : ${noOfBytesWritten}`)

//reading data from buffer
const data=b.toString()
console.log("Data written : ",data)