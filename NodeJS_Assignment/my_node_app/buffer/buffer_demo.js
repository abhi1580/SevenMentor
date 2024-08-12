//Create the buffer of size 10
//allocate extra memory space of 10 bytes
const b=Buffer.alloc(10)
console.log(`Size of buffer b= ${b.length}`)

//create buffer with initial fill value
const b1=Buffer.alloc(15,'s')
console.log(`Size of buffer b1= ${b1.length}`)

//buffer with initial fill value and character encoding
const b2=Buffer.alloc(5,'h','ascii')
console.log(`Size of buffer b2= ${b2.length}`)
