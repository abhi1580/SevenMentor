const express = require("express");
const connectToDB = require("./dbConfig/db_connection.js");
const product_Router = require("./controllers/product_router.js");
const cors = require("cors");
const app = express();
app.use(cors());

connectToDB();
app.use(express.json());
app.use("/product", product_Router);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
