const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const DIB = process.env.DB;

mongoose
  .connect(DIB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to Mongo DB")
  })
  .catch((err) => {
    console.log("connection failed", err);
  });
