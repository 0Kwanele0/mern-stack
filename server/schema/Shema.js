const mongoose = require("mongoose");

const User = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  surname: {
    required: true,
    type: String,
  },
  age: {
    required: true,
    type: Number,
  },
  identity: {
    required: true,
    type: Number,
  },
  job: {
    required: true,
    type: String,
  },
  salary: {
    required: true,
    type: Number,
  },
});

module.exports = mongoose.model("User", User);
