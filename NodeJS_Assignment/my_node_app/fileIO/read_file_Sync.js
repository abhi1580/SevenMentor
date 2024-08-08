const fs = require("fs");

//reading file using synchronous or blocking operation

const fileData = fs.readFileSync("../files/PersonDataAppended.doc");

console.log(fileData);
downloadFile(); //waits or blocks till the data from file is completely read

//additional javascript code
function downloadFile() {
  console.log("Another file is being downloaded...");
}
