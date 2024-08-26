const express=require("express")

const app=express()

//defining app level middleware
app.use(function(req,res,next){
    //logging middleware
console.log(`Request is received at ${new Date()}`)
next() //calls next middleware in the chain or request handler
})

//request handler
app.get("/hello",(req,res,next)=>{

    res.send(`Hello after pre processing request by middleware`)
    //calls post processor middleware 
    next()
})

//post - processor middleware - after request handler 

app.use(function(req,res){
    console.log(`Response sent at ${new Date()}`)
    
})

app.listen(3000,()=>{
    console.log("App level middleware server started on port no 3000")
})