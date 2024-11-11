const b = Buffer.alloc(20);

b.write("Switzerland");

const jsonData = b.toJSON();

console.log(jsonData);
console.log(jsonData.data);

console.log(b.toString());
