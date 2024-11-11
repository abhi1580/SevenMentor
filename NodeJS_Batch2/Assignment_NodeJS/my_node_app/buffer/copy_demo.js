const b1 = Buffer.alloc(11, "Intelligent");

const b2 = Buffer.alloc(11);

// const bytes = b1.copy(b2);
// const bytes = b1.copy(b2, 5);//from the source from how may byte you wan to copy
const bytes = b1.copy(b2, 5, 3,6); //from the source buffer from which byte you want to copying

console.log(b2.toString());
console.log(`No of bytes copied=${bytes}`);
