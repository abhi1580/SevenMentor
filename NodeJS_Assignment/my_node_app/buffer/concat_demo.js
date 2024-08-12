const b1 = Buffer.alloc(5);
b1.fill("Chess");

const b2 = Buffer.alloc(6, "Master");

//concatenating buffers
// const b3=Buffer.concat([b1,b2])

//with total length
const b3 = Buffer.concat([b1, b2], 10);

console.log(b3.toString());

console.log(`Size of buffer b3 : ${b3.length}`);
