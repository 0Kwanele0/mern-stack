const mongodb = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const db = async () => {
  try {
    mongodb
      .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(console.log("connected to db"));
  } catch (err) {
    console.log(err);
  }
};
module.exports = db;
