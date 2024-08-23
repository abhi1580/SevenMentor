const express=require("express")
//importing user defined router module
const router=require("../routers/my_router")
const param_router=require("../routers/router_param")
const interest_router=require("../routers/interest_router")
const app=express()

//use router module using main

app.use("/hello",router)
app.use("/user",param_router)
app.use("/bank",interest_router)

app.listen(4000,()=>{
    console.log("Express router server started on prt no 4000")
})