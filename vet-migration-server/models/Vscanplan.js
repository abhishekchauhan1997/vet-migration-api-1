const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const vscan_planitems = new Schema(
  {
    code: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const Vscanplans = mongoose.model("vscan_planitems", vscan_planitems);
module.exports = Vscanplans;