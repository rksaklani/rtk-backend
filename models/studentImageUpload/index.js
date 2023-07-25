const mongoose = require("mongoose");

const studentImageSchema = new mongoose.Schema(
    {
      id:{
      type: Number
        }, 

    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
const studentImage = new mongoose.model("studentImage", studentImageSchema);
module.exports = studentImage;
