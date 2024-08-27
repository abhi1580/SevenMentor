const express = require("express")

const app = express()

//use built-in middleware express.static
app.use(express.static("../public"))
app.use(express.static("../public/images"))
app.use(express.static("../files"))
app.listen(4500, () => { console.log("Express web app server started on port no 4500") })
