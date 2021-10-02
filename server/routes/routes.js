const express = require("express");
const route = express.Router();
const User = require("../schema/Shema");

route.post("/", async (req, res) => {
  try {
    const newUser = new User({ name: req.body.name, friend: req.body.friend });
    const user = await newUser.save().then(res.status(200).json("user added"));
    console.log(user);
  } catch (err) {
    console.log(err);
  }
});

route.get("/", async (req, res) => {
  try {
    User.find().then((users) => res.json(users));
  } catch (err) {
    console.log(err);
  }
});

module.exports = route;
