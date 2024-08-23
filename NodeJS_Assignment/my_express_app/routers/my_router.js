const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello GET by using router");
});
router.post("/", (req, res) => {
    res.send("Hello POST by using router");
});
router.put("/", (req, res) => {
    res.send("Hello PUT by using router");
});
router.delete("/", (req, res) => {
    res.send("Hello DELETE by using router");
});


//export router object

module.exports=router