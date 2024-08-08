const fs=require("fs")

//reading file asynchronously or non blocking operaion
fs.readFile("../files/PersonDataAppended.doc",(err,data)=>{
    if(err)
        throw err
    console.log(data)
})
downloadFile() //does not wait or block 
//additional javacript code 
function downloadFile(){
    console.log("File is being downloaded")
}