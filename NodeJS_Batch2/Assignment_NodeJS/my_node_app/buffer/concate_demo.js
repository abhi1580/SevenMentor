const b1 = Buffer.alloc(5);
b1.fill("Chess ");

const b2 = Buffer.alloc(6);
b2.fill("Master");

// const b3 = Buffer.concat([b1, b2]);
const b3 = Buffer.concat([b1, b2], 9);

console.log("Size of b3 buffer=" + b3.length);
console.log(b3.toString());
