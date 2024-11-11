const b1 = Buffer.alloc(4, "play");
const b2 = Buffer.alloc(4, "play");

const result = b1.compare(b2);

console.log(result);
