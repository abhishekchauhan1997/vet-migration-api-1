const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const relationship = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Relationship = mongoose.model("relationship", relationship);
module.exports = Relationship;
