const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const znlabs_planitems = new Schema(
  {
    code: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const Znlabsplans = mongoose.model("znlabs_planitems", znlabs_planitems);
module.exports = Znlabsplans;
