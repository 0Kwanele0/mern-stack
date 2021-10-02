const mongoose = require("mongoose");

const User = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  friend: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model("User", User);
