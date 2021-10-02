const mongodb = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const db = async () => {
  try {
    mongodb
      .connect(
        "mongodb+srv://kwanele:kwanele@cluster0.tokqm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }
      )
      .then(console.log("connected to db"));
  } catch (err) {
    console.log(err);
  }
};
module.exports = db;
