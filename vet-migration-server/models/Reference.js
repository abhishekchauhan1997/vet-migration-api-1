const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reference = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    ref_table: {
      type: Object,
    },
    desc: {
      type: String,
    },
    status: {
      type: Number,
      default: 1, // 1 is for active and 2 is for Inactive
    },
  },
  {
    timestamps: true,
    strict: false,
  }
);

const Reference = mongoose.model("reference", reference);
module.exports = Reference;

