const express = require("express");

//create express web server app

const app = express();

//request processing logic


app.get('/hello',(req,res)=>{
    //sending response to the client
    res.send({name:"Abhay",surname:"Panchal"}
    )
})

//configure express server to listen on some port

app.listen(4000, () => {
  console.log("Express web server is listening on port no 4000");
});
