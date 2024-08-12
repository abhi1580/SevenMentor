//creating buffer using umber array
//accepts only 256 bytes so 300 and so on will not be printed as it is
const b = Buffer.from([100, 200, 300, 400, 500, 600]);

//iterate over buffer
for (let ele of b) console.log(ele);
