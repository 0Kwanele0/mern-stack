const express = require("express");
const db = require("../server/db/db");
const app = express();

db();
app.get("/", (req, res) => {
  res.send("hello");
});
app.listen(2000, () => {
  console.log("listening on port 2000");
});
