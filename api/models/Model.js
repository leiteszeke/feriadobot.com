require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(
  `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
  { useNewUrlParser: true, useUnifiedTopology: true },
  err => {
    if (err) throw err;
    console.log("Connected");
  }
);

module.exports = exports = mongoose;
