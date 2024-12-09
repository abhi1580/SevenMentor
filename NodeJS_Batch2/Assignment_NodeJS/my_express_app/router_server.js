const express = require("express");
const myRouter = require("./routers/my_router");

const app = express();

app.use(express.json());

app.use("/api", myRouter);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
