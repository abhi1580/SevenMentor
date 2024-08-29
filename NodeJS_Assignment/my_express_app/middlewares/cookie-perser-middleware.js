const express=require("express")

const cookiePrser=require("cookie-parser")

const app=express()

//uisng cookie parser middleware

app.use(cookiePrser())

app.get("/hello",(req,res)=>{
    //create and set the cookie
    res.cookie("name:","Abhay")
    res.cookie("email:","abhayrpanchal@gmail.com",{expires:new Date( Date.now()+60*60*1000)}) //1 hr from cookie sent time
    res.cookie("contact_no:","abhayrpanchal@9146334963.com",{maxAge:15000}) //15 seconds 

    res.send(`Hello cookie demo`)
})

app.get("/welcome",(req,res)=>{
    res.send(req.cookies.name)

})

app.listen(4000,()=>{
    console.log("Cookie parser web app started on port no 4000")
})