const express = require("express")

const app = express()

//use built-in middleware express.static
app.use(express.static("../public"))
app.use(express.static("../public/images"))
app.use(express.static("../files"))
 //using built-in middleware express.json()
 //to parse incoming json data in request
app.post("/user",express.json({extended:false}),(req,res)=>{
    const username=req.body.username
    const password=req.body.password
    console.log(`Username is ${username} and Password is ${password}`)

    res.status(200).send(`Hi ${username} welcome to web app`)
})
 //using built-in middleware express.urlencoded()

app.post("/profile-form",express.urlencoded({extended:false}),(req,res)=>{
    const name=req.body.name
    const age=req.body.age
    const gender=req.body.gender

    console.log(`Hello ${name} you are ${gender} of ${age} years old.`)
    res.status(200).send(`Hi ${name} welcome to web app`)

})
app.listen(4500, () => { console.log("Express web app server started on port no 4500") })
