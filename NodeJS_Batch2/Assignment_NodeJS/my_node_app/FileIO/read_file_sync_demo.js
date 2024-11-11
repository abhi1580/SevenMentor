const fs = require("fs");

//synchronous or blocking operation
const fileData = fs.readFileSync("../files/demo.txt");

console.log(fileData);
additionalWork(); //waits until file is read completely (hoisting)

//javascript function
function additionalWork() {
  console.log("Downloading another file");
}
