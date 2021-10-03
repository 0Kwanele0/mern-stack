const express = require("express");
const route = express.Router();
const User = require("../schema/Shema");

//creating user
route.post("/create", async (req, res) => {
  try {
    const newUser = new User({
      name: req.body.name,
      surname: req.body.surname,
      age: req.body.age,
      salary: req.body.salary,
      identity: req.body.identity,
      job: req.body.job,
    });
    const user = await newUser.save().then(res.status(200).json("user added"));
    console.log(user);
  } catch (err) {
    console.log(err);
  }
});

//getting individual User
route.get("/:id", async (req, res) => {
  try {
    User.findById(req.params.id).then((user) => res.json(user));
  } catch (err) {
    console.log(err);
  }
});

//editing individual User
route.put("/:id", async (req, res) => {
  try {
    User.findByIdAndUpdate(req.params.id, req.body).then(
      res.json("User Updated")
    );
  } catch (err) {
    console.log(err);
  }
});

//Deleting User
route.delete("/:id", async (req, res) => {
  try {
    User.findByIdAndDelete(req.params.id).then(res.json("User Deleted"));
  } catch (err) {
    console.log(err);
  }
});
route.delete("/", async (req, res) => {
  try {
    User.deleteMany({}).then(res.json("All Users Deleted"));
  } catch (err) {
    console.log(err);
  }
});

//Getting all Users
route.get("/", async (req, res) => {
  try {
    User.find().then((users) => res.json(users));
  } catch (err) {
    console.log(err);
  }
});

module.exports = route;
