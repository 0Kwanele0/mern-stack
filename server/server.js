const express = require("express");
const app = express();
const db = require("../server/db/db");
const routes = require("../server/routes/routes");
const cors = require("cors");

db();
app.use(cors());
app.use(express.json());
app.use("/user", routes);
app.listen(2000, () => {
  console.log("listening on port 2000");
});
