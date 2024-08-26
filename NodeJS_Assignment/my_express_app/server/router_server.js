const express = require("express");
//importing user defined router module
const router = require("../routers/my_router");
const param_router = require("../routers/router_param");
const interest_router = require("../routers/interest_router");
const currencyRouter = require("../routers/currency_router");
const middlewareRouter=require("../middlewares/router_level_middleware")
const app = express();

//use router module using main

app.use("/hello", router);
app.use("/user", param_router);
app.use("/bank", interest_router);
app.use("/converter", currencyRouter);
app.use("/middleware",middlewareRouter)
app.get("*",(req,res)=>{
  res.send("<h2 style='color:red'>Requested page not Found</h2>",req)
})

app.listen(4000, () => {
  console.log("Express router server started on port no 4000");
});
