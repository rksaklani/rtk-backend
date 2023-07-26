const mongoose = require("mongoose");

const studentImageSchema = new mongoose.Schema(
    {
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
