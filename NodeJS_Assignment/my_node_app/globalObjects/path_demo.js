const path=require("path")

console.log("Path Delimiter : "+path.delimiter)
console.log("Path Separater : "+path.sep)
console.log("Path Resolver : "+path.resolve("path_demo.js"))
console.log("File Extension : "+path.extname("path_demo.js"))
console.log("File Extension : "+path.extname("../files/person_data.doc"))