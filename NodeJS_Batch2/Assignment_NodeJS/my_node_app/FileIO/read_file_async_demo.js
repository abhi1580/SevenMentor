const fs = require("fs");

//asynchronous or non-blocking operation

fs.readFile("../files/demo.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
//
additionalWork(); //does not wait till the file is read

//javascript function
function additionalWork() {
  console.log("Downloading other files");
}
