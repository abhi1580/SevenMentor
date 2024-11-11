const b1 = Buffer.alloc(5);
console.log(`Size of buffer b1 = ${b1.length}`);
console.log(`Content of buffer = ${b1.toString()}`);

const b2 = Buffer.alloc(5, "g");

console.log(`Content of buffer b2 = ${b2.toString()}`);

const b3 = Buffer.alloc(5, "Hi", "ascii");
console.log(`Content of buffer b3 = ${b3.toString()}`);
