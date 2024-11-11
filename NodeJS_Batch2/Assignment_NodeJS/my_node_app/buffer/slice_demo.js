const b1 = Buffer.alloc(20, "Marvellous");

const b2 = b1.slice(1, 9);

console.log("Content of Buffer b2 = ", b2.toString());
