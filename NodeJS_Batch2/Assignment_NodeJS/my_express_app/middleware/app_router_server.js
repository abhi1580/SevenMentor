const express = require("express");
const router = require("./router_level_middleware");
const skRouter = require("./skip_middleware");
const builtinParsers = require("./built_in_middleware_demo");
const bpRouter = require("./body_parser_middleware");

const app = express();

app.use("/bye", router);
app.use("/hi", skRouter);
app.use("/info", bpRouter);
app.use("/data", builtinParsers);

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
