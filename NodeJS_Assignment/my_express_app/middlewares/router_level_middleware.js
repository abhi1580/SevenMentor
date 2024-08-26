const express=require("express")

const router=express.Router()

//defining router level middleware
//request pre-processor middleware

router.use(function(req,res,next){
    //logging request
    console.log("Request received at "+new Date())
    //calls next middleware in the chain or route handler 
    next()
})

//route handler

router.get("/welcome",(req,res,next)=>{
    res.send("Welcome from the route handler after pre processing request bu middleware")
    next()
})

//request post -processor  middleware 
router.use((req,res)=>{
    //logging response
    console.log("Response sent at "+new Date())
})

module.exports=router